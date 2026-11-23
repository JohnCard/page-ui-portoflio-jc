import { Box, Container, Stack, Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <Box
        component={'footer'}
        sx={{
            py: {
                xs: 4,
                sm: 6,
                md: 8
            },
            backgroundColor: '#292D36'
        }}
    >
        <Container
            maxWidth='lg'
        >
            <Stack
                direction={'row'}
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: {
                        xs: 4
                    },
                    color: '#fff'

                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        maxWidth: 350
                    }}
                >
                    <CodeIcon fontSize='large'/>
                    <Typography
                        component={'span'}
                        variant="body2"
                    >Desarrollando ideas para un mejor futuro</Typography>
                    <Typography
                        component={'span'}
                        variant="body2"
                    >@ 2026 Juan Carlos Sánchez Martínez. Todos los derechos reservados</Typography>
                </Stack>
                <Stack
                    direction={'row'}
                    sx={{
                        flexWrap: 'wrap',
                        gap: 2
                    }}
                >
                    <Typography
                        component={'a'}
                        href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >Inicio</Typography>
                    <Typography
                        component={'a'}
                        href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >Sobre mí</Typography>
                    <Typography
                        component={'a'}
                        href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >Contacto</Typography>
                    <Typography
                        component={'a'}
                        href="#"
                        sx={{
                            textDecoration: 'none',
                            color: '#fff'
                        }}
                    >Proyectos</Typography>
                </Stack>
                <Stack spacing={2}>
                    <Stack
                        direction={'row'}
                        sx={{
                            flexWrap: 'wrap'
                        }}
                        spacing={2}
                    >
                        <EmailIcon fontSize="medium"/>
                        <TelegramIcon fontSize="medium"/>
                        <LinkedInIcon fontSize="medium"/>
                        <GitHubIcon fontSize="medium"/>
                    </Stack>
                    <Typography component={'span'} variant="body2" color="#fff">Hecho en México</Typography>
                </Stack>
            </Stack>
        </Container>
    </Box>
  )
}
