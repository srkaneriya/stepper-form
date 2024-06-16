import { Divider, Stack, Typography } from "@mui/material";

export default function GreetingSection({ data }) {
    return (
        <Stack gap={4}>
            <Typography variant="h2" component={'h1'} color="Green"> Data added successfully</ Typography>
            <Stack gap={1} divider={<Divider />}>
                {Object.entries(data).map(([key, value]) => {
                    return (
                        <Stack key={key} direction='row' alignItems='center'>

                            <Typography flex={1} pl={2}>{key.charAt(0).toUpperCase().concat(key.slice(1))}</Typography>
                            <Typography flex={1}>{value}</Typography>

                        </Stack >
                    )
                })}
            </Stack>
        </Stack>
    )
}