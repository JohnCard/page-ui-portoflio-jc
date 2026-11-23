import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Testimony } from "../components/Testimony"

export const Testimonies = ({testimonies=[]}) => {
  return (
    <Box
        component={'section'}
        sx={{
            py: {
                xs: 4,
                sm: 6,
                md: 8
            },
            backgroundColor: '#CED4DA'
        }}
    >
        <Container
            maxWidth='lg'
        >
            <Stack
                direction={'row'}
                sx={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    mb: 2,
                    rowGap: 2,
                    columnGap: 4
                }}
            >
                <Stack
                    spacing={1}
                >
                    <Typography
                        component={'span'}
                        variant="body2"
                        color="textSecondary"
                        sx={{
                            fontWeight: '550'
                        }}
                    >TESTIMONIOS</Typography>
                    <Typography
                        component={'h3'}
                        variant="h4"
                        sx={{
                            fontWeight: '600'
                        }}
                    >Lo que otros dicen</Typography>
                </Stack>
                <Typography
                    component={'p'}
                    variant="body2"
                    color="textSecondary"
                    sx={{
                        maxWidth: 250
                    }}
                >Algunas opiniones de personas con las que he trabajado</Typography>
            </Stack>
            <Grid
                container
                sx={{
                    justifyContent: 'center',
                    gap: {
                        xs: 3,
                    },
                    mt: 5
                }}
            >
                {testimonies.map((testimony, index) => <Testimony key={`testimony_index_key_${index}`} testimony={testimony}/>)}
            </Grid>
        </Container>
    </Box>
  )
}
