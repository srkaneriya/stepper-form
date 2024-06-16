import { styled } from "@mui/material";
import { Form } from "formik";

export const StyledForm = styled(Form)(() => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',

    '@media (min-width: 780px)': {
        gridTemplateColumns: '1fr 1fr',

    }
}))