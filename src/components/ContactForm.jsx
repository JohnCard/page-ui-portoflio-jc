import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import RoomIcon from '@mui/icons-material/Room';

export const ContactForm = () => {
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
            <Grid
                container
                sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
                spacing={8}
            >
                <Grid
                    size={{
                        xs: 12,
                        sm: 10,
                        md: 4
                    }}
                    sx={{
                        mx: 'auto'
                    }}
                >
                    <Stack
                        spacing={1}
                    >
                        <Typography
                            variant="span"
                            component='p'
                        >CONTACTO</Typography>
                        <Typography component='h3'>HABLEMOS</Typography>
                        <Typography component='p'>¿Tienes un proyecto en mente o una oportunidad?</Typography>
                        <Typography component='p'>Me encantaría saber de ti</Typography>
                        <Stack direction='row' spacing={1}><EmailIcon/><Typography>tuemail@ejemplo.com</Typography></Stack>
                        <Stack direction='row' spacing={1}><CallIcon/><Typography>+52 222 123 4567</Typography></Stack>
                        <Stack direction='row' spacing={1}><RoomIcon/><Typography>Tlaxcala, tlax</Typography></Stack>
                    </Stack>
                </Grid>
                <Grid
                    size={{
                        xs: 12,
                        sm: 10,
                        md: 8,
                        lg: 6
                    }}
                    sx={{
                        mx: 'auto'
                    }}
                >
                    <Box
                        component='form'
                    >
                        <Grid
                            container
                            spacing={2}
                        >
                            {/* Name */}
                            <Grid
                                size={{
                                    xs: 12,
                                    md: 6
                                }}
                            >
                                <TextField label='Nombre' fullWidth/>
                            </Grid>
                            {/* Email */}
                            <Grid
                                size={{
                                    xs: 12,
                                    md: 6
                                }}
                            >
                                <TextField label='Correo electrónico' fullWidth/>
                            </Grid>
                            {/* Issue */}
                            <Grid
                                size={{
                                    xs: 12
                                }}
                            >
                                <TextField label='Asunto' fullWidth/>
                            </Grid>
                            {/* Message */}
                            <Grid
                                size={{
                                    xs: 12
                                }}
                            >
                                <TextField
                                    label='Mensaje'
                                    fullWidth
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                            {/* Button */}
                            <Grid size={{ xs: 12, md: 4 }}>
                                <Button type="submit" variant="contained">Enviar mensaje</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
