import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import red_sweater from '../assets/red_sweater.png'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const loremText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo, officia sit tempora ut eveniet rerum molestiae pariatur quas eius mollitia. Sequi, at? Itaque deleniti nisi consectetur, consequatur hic esse! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo, officia sit tempora ut eveniet rerum molestiae pariatur quas eius mollitia. Sequi, at? Itaque deleniti nisi consectetur, consequatur hic esse! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo, officia sit tempora ut eveniet rerum molestiae pariatur quas eius mollitia. Sequi, at? Itaque deleniti nisi consectetur, consequatur hic esse! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit illo, officia sit tempora ut eveniet rerum molestiae pariatur quas eius mollitia. Sequi, at? Itaque deleniti nisi consectetur, consequatur hic esse!'

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
          sx={{
            alignItems: 'center',
            justifyContent: {
              sm: 'center'
            },
            rowGap: 5,
            columnGap: 10
          }}
        >
          <Grid
            size={{
              xs: 12,
              sm: 10,
              md: 3
            }}
          >
            <Box
              component={'img'}
              src={red_sweater}
              alt='red sweater'
              sx={{
                width: {
                  xs: '80%',
                  sm: 250
                },
                maxHeight: 300,
                display: 'block',
                mx: 'auto',
                borderRadius: 3
              }}
            />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 10,
              md: 8
            }}
          >
            <Stack
              spacing={1.5}
              sx={{
                maxWidth: {
                  sm: 450,
                  md: 700
                },
                mx: {
                  sm: 'auto'
                }
              }}
            >
              <Typography component={'span'} variant='body2'>SOBRE MI</Typography>
              <Typography component={'h2'} variant='h4'>Conoce mas sobre mi</Typography>
              <Typography component={'p'} variant='body1'>{(loremText).slice(0,280)}...</Typography>
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
