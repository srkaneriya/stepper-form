import { styled } from "@mui/material";

export const StyledSelect = styled('select')(() => ({
    width: ' 100%',
    padding: '0.7rem',
    borderRadius: '4px',
    border: '1px solid #ccc',

    '&.error': {
        borderColor: 'red',
        color: 'red',
    },
}))

export const StyledOption = styled('option')(() => ({
    color: 'black'
}))