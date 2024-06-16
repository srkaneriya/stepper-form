import { styled } from "@mui/material";
import { Field } from "formik";

export const StyledInput = styled(Field)(() => {
    return {
        width: ' 100%',
        padding: '0.7rem',
        borderRadius: '4px',
        border: '1px solid #ccc',

        '&.error': {
            borderColor: 'red',
        },

        '&.error::placeholder': {
            color: 'red'
        },


        '&.error::-webkit-datetime-edit': {
            color: 'red',
        }

    }
})