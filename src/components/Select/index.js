import React from "react";
import { ErrorMessage } from "formik";
import TextError from "../TextError";
import { StyledOption, StyledSelect } from "./styles";

export default function Select(props) {
    const { name, options, ...rest } = props;
    return (
        <div className="form-control">
            <StyledSelect name={name}  {...rest}>
                {options.map(option => {
                    return (
                        <StyledOption key={option.key} value={option.value}>
                            {option.key}
                        </StyledOption>
                    )
                })}
            </StyledSelect>
            <ErrorMessage name={name} component={TextError} />
        </div >
    )
}