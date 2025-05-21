import React, { useState } from "react";
import { Modal, Input, message } from "antd";
import { FaPlus, FaTrash } from "react-icons/fa";
import { IoAdd, IoCheckmark } from "react-icons/io5";

const Subscription = () => {
    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            name: "Weekly Plan",
            price: "5.50",
            duration: "Weekly",
            coins: 50,
            features: ["Feature 1", "Feature 2"],
        },
        {
            id: 2,
            name: "Monthly Plan",
            price: "20",
            duration: "Monthly",
            coins: 200,
            features: ["Feature A", "Feature B", "Feature C"],
        },
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // Form fields state
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [duration, setDuration] = useState("Weekly");
    const [coins, setCoins] = useState("");
    const [features, setFeatures] = useState([""]);

    // Open modal for add or edit
    const openModal = (subscription = null) => {
        if (subscription) {
            setIsEditing(true);
            setId(subscription.id);
            setName(subscription.name);
            setPrice(subscription.price);
            setDuration(subscription.duration);
            setCoins(subscription.coins);
            setFeatures(subscription.features.length > 0 ? subscription.features : [""]);
        } else {
            resetForm();
            setIsEditing(false);
            setDuration("Monthly"); // default duration on add
        }
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        resetForm();
    };

    const resetForm = () => {
        setId(null);
        setName("");
        setPrice("");
        setDuration("Monthly");
        setCoins("");
        setFeatures([""]);
    };

    // Handle feature change
    const handleFeatureChange = (index, value) => {
        const newFeatures = [...features];
        newFeatures[index] = value;
        setFeatures(newFeatures);
    };

    // Add new feature input
    const addFeature = () => {
        setFeatures([...features, ""]);
    };

    // Remove a feature input
    const removeFeature = (index) => {
        if (features.length === 1) return; // Keep at least one input
        const newFeatures = features.filter((_, i) => i !== index);
        setFeatures(newFeatures);
    };

    // Add or update subscription
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !price.trim() || !duration.trim() || !coins) {
            message.error("Please fill all required fields!");
            return;
        }

        // Clean features list, remove empty strings
        const cleanedFeatures = features.filter((f) => f.trim() !== "");

        if (isEditing) {
            setSubscriptions((prev) =>
                prev.map((sub) =>
                    sub.id === id
                        ? { id, name, price, duration, coins, features: cleanedFeatures }
                        : sub
                )
            );
            message.success("Subscription updated!");
        } else {
            const newSubscription = {
                id: subscriptions.length > 0 ? subscriptions[subscriptions.length - 1].id + 1 : 1,
                name,
                price,
                duration,
                coins,
                features: cleanedFeatures,
            };
            setSubscriptions((prev) => [...prev, newSubscription]);
            message.success("Subscription added!");
        }

        closeModal();
    };

    // Delete subscription
    const handleDelete = (subId) => {
        setSubscriptions((prev) => prev.filter((sub) => sub.id !== subId));
        message.success("Subscription deleted!");
    };

    return (
        <section className="p-5">
            <div className="flex justify-end mb-6">
                <button
                    className="flex items-center gap-2 px-5 py-3 bg-[#02aef4] text-white rounded"
                    onClick={() => openModal()}
                >
                    <FaPlus /> Add Subscription
                </button>
            </div>

            {/* Subscription list */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {subscriptions.map((sub) => (
                    <div
                        key={sub.id}
                        className="border rounded-lg shadow-md flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-1 border-b border-[#02aef4] text-center py-2">
                                {sub.name}
                            </h3>
                            <div className="p-5">
                                <p className="flex items-center justify-center mb-2 gap-2 text-5xl text-center ">
                                    ${sub.price == 0 ? "Free" : sub.price}
                                    <sub className="text-sm">/ {sub.duration}</sub>
                                </p>
                                <p className="font-semibold mb-3">Coins: {sub.coins}</p>
                                {sub.features && sub.features.length > 0 && (
                                    <ul className="text-gray-600 space-y-1">
                                        {sub.features.map((f, idx) => (
                                            <li className="flex items-center gap-2" key={idx}>
                                                <IoCheckmark /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-4 p-2">
                            <button
                                className="py-2 px-4 bg-[#02aef4] text-white rounded hover:bg-[#2f8eb4]"
                                onClick={() => openModal(sub)}
                            >
                                Edit Subscription
                            </button>
                            <button
                                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
                                onClick={() => handleDelete(sub.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Add/Edit */}
            <Modal
                visible={isModalVisible}
                onCancel={closeModal}
                footer={null}
                destroyOnClose
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-5 text-center">
                        {isEditing ? "Edit Subscription" : "Add Subscription"}
                    </h2>
                    <div>
                        <label className="block font-semibold mb-1">Subscription Name *</label>
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter subscription name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-semibold mb-1">Subscription Price *</label>
                        <Input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Enter price"
                            min={0}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Subscription Duration *</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded"
                            name="duration"
                            id="duration"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                            required
                        >
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold mb-2">Features</label>
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 mb-2">
                                <Input
                                    value={feature}
                                    onChange={(e) => handleFeatureChange(idx, e.target.value)}
                                    placeholder={`Feature #${idx + 1}`}
                                    required={idx === 0}
                                />
                                <button
                                    type="button"
                                    className="text-red-600 hover:text-red-800"
                                    onClick={() => removeFeature(idx)}
                                    disabled={features.length === 1}
                                    aria-label="Remove feature"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addFeature}
                            className="flex items-center gap-2 justify-center py-1 px-3 mt-2 bg-[#02aef4] w-full text-white rounded hover:bg-[#218fbb]"
                        >
                            <IoAdd />Add Feature
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#02aef4] text-white rounded hover:bg-[#0284c7]"
                    >
                        {isEditing ? "Update Subscription" : "Add Subscription"}
                    </button>
                </form>
            </Modal>
        </section>
    );
};

export default Subscription;
// This code is a React component for managing subscriptions.