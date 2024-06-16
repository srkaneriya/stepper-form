import { useState } from "react";

export function useInputType() {
    const [inputType, setInputType] = useState('text');

    const handleFieldFocus = (newValue) => {
        setInputType(newValue);
    };
    return [inputType, handleFieldFocus]
}