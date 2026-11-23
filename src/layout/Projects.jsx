import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Project } from "../components/Project"

export const Projects = ({projects=[]}) => {
  return (
    <Box
        component={'section'}
        sx={{
            py: {
                xs: 4,
                sm: 6,
                md: 8
            },
            backgroundColor: '#F4F5F2'
        }}
    >
        <Container maxWidth='lg'>
            <Stack
                direction={'row'}
                sx={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: 2,
                    mb: 5
                }}
            >
                <Stack spacing={2}>
                    <Typography component={'span'} variant="body2">PROYECTOS</Typography>
                    <Typography component={'h3'} variant="h3">Mis proyectos</Typography>
                </Stack>
                <Typography
                    component={'p'}
                    variant="body1"
                    sx={{
                        maxWidth: 420
                    }}
                >Aquí puedes ver algunos de los proyectos en los que he trabajado, desde aplicaciones web hasta herramientas y APIs.</Typography>
            </Stack>
            <Grid
                container
                sx={{
                    justifyContent: 'center'
                }}
                spacing={5}
            >
                {projects.map((project, index) => <Project key={`project_index_key_${index}`} project={project} />)}
            </Grid>
        </Container>
    </Box>
  )
}
