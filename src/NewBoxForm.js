import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {

    const INITIAL_STATE = {
        width: '',
        height: '',
        color: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    };
    const handleSelect = (e) => {
        setFormData(formData => ({
            ...formData,
            ["color"]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="range"
                name="width"
                min="1"
                max="1000"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                data-testid="height"
                type="range"
                name="height"
                min="1"
                max="1000"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
            <select name="color" id="color" value={formData.color} onChange={handleSelect}>
                <option value="Gray">--Pick an Option--</option>
                <option value="red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;