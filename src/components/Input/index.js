import React from "react";
import { ErrorMessage } from 'formik';
import TextError from "../TextError";
import { StyledInput } from "./styles";

export default function Input(props) {
    const { name, placeHolder, ...rest } = props;
    return (
        <div className="form-control">
            <StyledInput name={name} placeholder={placeHolder}  {...rest} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}