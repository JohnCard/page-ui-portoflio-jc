import { Box, Container, Typography, Stack } from "@mui/material"
import { Skill } from "./Skill"

export const StackContainer = ({stack=[]}) => {
  return (
    <Box
        component='section'
        sx={{
            py: {
                xs: 4,
                sm: 6,
                md: 8
            }
        }}
    >
        <Container
            maxWidth='lg'
        >
            <Stack
                direction='row'
                sx={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    rowGap: 2,
                    columnGap: 4
                }}
            >
                <Stack>
                    <Typography
                        variant='body2'
                        component={'span'}
                        sx={{
                            fontWeight: 'bold'
                        }}
                    >HABILIDADES</Typography>
                    <Typography
                        variant="h4"
                        component={'h2'}
                        sx={{
                            fontWeight: 'bold'
                        }}
                    >Tecnologías que utilizo</Typography>
                </Stack>
                <Typography
                    sx={{
                        maxWidth: 400
                    }}
                >Estas son algunas de las herramientas y tecnologías con las que trabajo para crear soluciones de calidad.</Typography>
            </Stack>
            <Stack
                direction={'row'}
                sx={{
                    flexWrap: 'wrap',
                    mt: 3,
                    gap: 3,
                    justifyContent: 'center'
                }}
            >
                {stack.map((skill, index) => <Skill key={`skill_index_key_${index}`} skill={skill} />)}
            </Stack>
        </Container>
    </Box>
  )
}
