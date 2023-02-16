import React, { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const DropdownComponent = () => {
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    return (
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
    );
};

export default DropdownComponent;