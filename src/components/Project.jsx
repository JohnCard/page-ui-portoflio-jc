import { Box, Grid, Stack, Typography } from "@mui/material"
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Project = ({project}) => {
    const { name, text, src, stack, link_demo, github_repo } = project
  return (
    <Grid
        size={{
            xs: 12,
            sm: 6,
            md: 4,
            xl: 3
        }}
        sx={{
            backgroundColor: '#D6DCE2'
        }}
    >
        <Box
            component={'img'}
            width='100%'
            height={210}
            src={src}
            alt={name}
        />
        <Stack
            spacing={1}
            sx={{
                p: 3,
                maxWidth: 450,
                mx: 'auto'
            }}
        >
            <Typography component={'h5'} variant="h6">{name}</Typography>
            <Typography
                component={'p'}
                color="textSecondary"
                sx={{
                    fontSize: {
                        xs: 14,
                        md: 16
                    }
                }}
            >{(text).slice(0, 150)}...</Typography>
            <Stack
                direction={'row'}
                sx={{
                    flexWrap: 'wrap',
                    gap: 2
                }}
            >
                {(stack).slice(0,4).map((skill, index) => <Typography
                    sx={{
                        backgroundColor: '#E9ECEF',
                        borderRadius: 2,
                        py: .5,
                        px: 2
                    }}
                    component={'span'}
                    variant="body2"
                    color="textSecondary"
                    key={`project_skill_index_key_${index}`}
                >{skill}</Typography>)}
            </Stack>
            <Stack
                direction={'row'}
                sx={{
                    pt: 2,
                    flexWrap: 'wrap',
                    columnGap: {
                        xs: 3,
                        sm: 7,
                        md: 9
                    },
                    rowGap: 2
                }}
            >
                <Typography
                    component={'a'}
                    href={link_demo}
                    target="_blank"
                    sx={{
                        textDecoration: 'none',
                        fontWeight: 500,
                        color: 'black',
                        display: 'flex',
                        gap: 1
                    }}
                ><LaunchIcon/> Ver demo</Typography>
                <Typography
                    component={'a'}
                    href={github_repo}
                    target="_blank"
                    sx={{
                        textDecoration: 'none',
                        fontWeight: 500,
                        color: 'black',
                        display: 'flex',
                        gap: 1
                    }}
                ><GitHubIcon/> Ver código</Typography>
            </Stack>
        </Stack>
    </Grid>
  )
}
