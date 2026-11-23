import { Box, Button, Container, Grid, Link, Stack, Typography } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import joey_tribbiani from '../assets/joey_tribbiani.avif'

export const Hero = () => {
  return (
    <Box
      component='section'
      sx={{
        py: {
          xs: 4,
          sm: 6,
          md: 8
        },
        backgroundColor: '#F4F5F2'
      }}
    >
      <Container
        maxWidth='lg'
      >
        <Grid
          container
          sx={{
            alignItems: 'center',
            columnGap: 4,
            rowGap: 6,
            justifyContent: 'space-evenly'
          }}
        >
          {/* Presentation */}
          <Grid
            size={{
              xs: 12,
              sm: 7,
              md: 4
            }}
          >
            <Stack
              spacing={2}
            >
              <Typography
                component='h1'
                variant="h3"
              >Hola, soy Juan Carlos</Typography>
              <Typography
                variant="h6"
              >Desarrollador FullStack</Typography>
              <Typography>Creo soluciones web modernas, funcionales y con impacto, combinando diseño, tecnologia y buenas prácticas.</Typography>
              <Stack
                direction='row'
                spacing={2}
              >
                <Button variant="contained">Ver proyectos</Button>
                <Button variant="outlined">Contactarme</Button>
              </Stack>
              <Stack
                direction='row'
                spacing={2}
              >
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
                <TelegramIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
              </Stack>
            </Stack>
          </Grid>
          {/* Imagen */}
          <Grid
            sx={{
              xs: 12,
              md: 8
            }}
          >
            <Box
              sx={{
                width: {
                  xs: '100%',
                  md: 420
                },
                maxHeight: 300,
                aspectRatio: '4/5',
                overflow: 'hidden',
                borderRadius: 3,
                mx: 'auto'
              }}
            >
              <Box
                component='img'
                src={joey_tribbiani}
                alt='Personal photo'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
