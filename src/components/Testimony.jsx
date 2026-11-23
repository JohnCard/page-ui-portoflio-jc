import { Box, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import joey from '../assets/joey.png'

export const Testimony = ({testimony}) => {
    const { name, text, company, occupation, stars } = testimony
  return (
    <Grid
        container
        size={{
            xs: 12,
            sm: 8,
            md: 5,
        }}
        sx={{
            backgroundColor: '#FFF',
            p: {
                xs: 3
            },
            gap: 2
        }}
    >
        <Stack
            direction={'row'}
            sx={{
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: {
                    xs: 2,
                    sm: 4,
                    lg: 6
                }
            }}
        >
            <Box
                component={'img'}
                width={80}
                height={80}
                src={joey}
                alt={name}
                sx={{
                    borderRadius: '50%'
                }}
            />
            <Stack>
                <Typography
                    component={'p'}
                    variant='body1'
                    color='textPrimary'
                >Joey Tribbiani</Typography>
                <Typography
                    component={'span'}
                    variant='body2'
                    color='textSecondary'
                >{occupation} / {company}</Typography>
            </Stack>
        </Stack>
        <Typography
            component={'p'}
            variant='body1'
        >"{text}"</Typography>
        <Stack
            direction={'row'}
            spacing={1.5}
        >{Array.from({length: stars}).map((_, index) => <StarIcon
            key={`star_index_key_${index}`}
            sx={{
                color: '#F4C95D',
                fontSize: 30
            }}
        />)}
        </Stack>
    </Grid>
  )
}
