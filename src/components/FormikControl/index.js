import React from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import RadioButtons from "../../components/RadioButtons";


export default function FormikControl(props) {
    const { control, ...rest } = props;
    switch (control) {
        case "input":
            return <Input {...rest} />
        case "select":
            return <Select {...rest} />
        case "radio":
            return <RadioButtons {...rest} />
        default:
            return null
    }
}