import { Stack, styled } from "@mui/material";

export const StyledLable = styled('label')(() => ({
    fontSize: '0.9rem',
    color: 'gray',

    '&.error': {
        color: 'red'
    }
}))

export const Container = styled((props) => <Stack direction='column' gap={1} pt={1} flexWrap="wrap" {...props} />)
    (() => ({

        '@media (min-width: 600px)': {
            flexDirection: 'row',
        }
    }))