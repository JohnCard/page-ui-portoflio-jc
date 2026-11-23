import { Box, Stack, Typography } from "@mui/material"

export const Skill = ({skill}) => {
    const { name, src } = skill
  return (
    <Stack
        spacing={.5}
        sx={{
            alignItems: 'center',
            bgcolor: '#F1F3F5',
            py: 1.5,
            px: 3,
            borderRadius: 2
        }}
    >
        <Box
            component={'img'}
            src={src}
            alt={name}
            sx={{
                width: 70,
                height: 70,
                objectFit: 'contain'
            }}
        />
        <Typography
            component={'span'}
            sx={{
                fontSize: 14,
                fontWeight: '500'
            }}
        >{name}</Typography>
    </Stack>
  )
}
