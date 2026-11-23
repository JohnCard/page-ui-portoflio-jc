import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import joey from '../assets/joey.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const loremText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo, officia sit tempora ut eveniet rerum molestiae pariatur quas eius mollitia. Sequi, at? Itaque deleniti nisi consectetur, consequatur hic esse!'

export const About = () => {
  return (
    <Box
      component={'section'}
      sx={{
        py: {
          xs: 4,
          sm: 6,
          md: 8
        },
        backgroundColor: '#F5F6F8'
      }}
    >
      <Container
        maxWidth='lg'
      >
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Grid
            size={{
              xs: 12,
              sm: 10,
              md: 7
            }}
          >
            <Box
              sx={{
                width: {
                  xs: '100%',
                  sm: '80%'
                },
                maxHeight: 300,
                mx: 'auto'
              }}
            >
              <Box
                component={'img'}
                src={joey}
                alt='joey'
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  borderRadius: 3
                }}
              />
            </Box>
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 10,
              md: 4
            }}
          >
            <Stack
              spacing={1.5}
            >
              <Typography component={'span'} variant='body2'>SOBRE MI</Typography>
              <Typography component={'h2'} variant='h4'>Conoce mas sobre mi</Typography>
              <Typography component={'p'} variant='body1'>{(loremText).slice(0,250)}...</Typography>
              <Stack
                direction={'row'}
                sx={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}
              >
                <Stack
                  direction={'row'}
                  spacing={1.5}
                >
                  <CalendarMonthIcon/>
                  <Typography component={'span'} variant='body2'>1 año de experiencia</Typography>
                </Stack>
                <Stack
                  direction={'row'}
                  spacing={1.5}
                >
                  <FmdGoodIcon/>
                  <Typography component={'span'} variant='body2'>Tlaxcala, tlax</Typography>
                </Stack>
                <Stack
                  direction={'row'}
                  spacing={1.5}
                >
                  <BusinessCenterIcon/>
                  <Typography component={'span'} variant='body2'>Disponible para oportunidades</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
