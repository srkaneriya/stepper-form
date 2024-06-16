import { ErrorMessage } from "formik";
import React from "react";
import TextError from "../TextError";
import { StyledInput } from "../Input/styles";
import { Stack } from "@mui/material";
import { Container, StyledLable } from "./styles";

export default function RadioButtons(props) {
    const { label, name, options, error, ...rest } = props;
    return (
        <div className="form-control">
            <StyledLable className={error && 'error'}>{label}</StyledLable>
            <Container>
                <StyledInput name={name} {...rest}>
                    {
                        ({ field }) => {
                            return options.map(option => {
                                return (
                                    <Stack direction='row' gap={1} key={option.key}>
                                        <input
                                            type="radio"
                                            id={option.value}
                                            {...field}
                                            value={option.value}
                                            checked={field.value === option.value}
                                        />
                                        <label htmlFor={option.value}>{option.key}</label>
                                    </Stack>
                                )


                            })
                        }
                    }
                </StyledInput>
            </Container>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}