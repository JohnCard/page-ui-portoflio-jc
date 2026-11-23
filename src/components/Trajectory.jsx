import { Box, Container, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque mollitia reprehenderit sint voluptatem dignissimos! Quia vitae tempore sed eos harum aut? Ex voluptate molestiae asperiores labore sequi exercitationem, rem distinctio est, vitae culpa deleniti sunt necessitatibus maiores incidunt, inventore harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque mollitia reprehenderit sint voluptatem dignissimos! Quia vitae tempore sed eos harum aut? Ex voluptate molestiae asperiores labore sequi exercitationem, rem distinctio est, vitae culpa deleniti sunt necessitatibus maiores incidunt, inventore harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque mollitia reprehenderit sint voluptatem dignissimos! Quia vitae tempore sed eos harum aut? Ex voluptate molestiae asperiores labore sequi exercitationem, rem distinctio est, vitae culpa deleniti sunt necessitatibus maiores incidunt, inventore harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque mollitia reprehenderit sint voluptatem dignissimos! Quia vitae tempore sed eos harum aut? Ex voluptate molestiae asperiores labore sequi exercitationem, rem distinctio est, vitae culpa deleniti sunt necessitatibus maiores incidunt, inventore harum.'

export const Trajectory = () => {
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
                sx={{
                    mb: 4,
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: 2
                }}
                direction={'row'}
            >
                <Stack spacing={2}>
                    <Typography component={'span'} variant='body2'>EXPERIENCIA</Typography>
                    <Typography
                        variant='h4'
                        component={'h3'}
                    >Mi trayectoria</Typography>
                </Stack>
                <Typography
                    color='textSecondary'
                    component={'p'}
                    variant='body1'
                    sx={{
                        maxWidth: 400
                    }}
                >Algunas de las experiencias profesionales y proyectos en los que he participado.</Typography>
            </Stack>
            <TableContainer
                component={Paper}
                elevation={0}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Periodo</TableCell>
                            <TableCell>Empresa / Ocupación</TableCell>
                            <TableCell
                                sx={{
                                    display: {
                                        xs: 'none',
                                        sm: 'table-cell'
                                    }
                                }}
                            >Descripción</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell
                                sx={{
                                    position: 'relative',
                                    pl: 4,
                                    width: '15%'
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: 8,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        bgcolor: 'primary.main',
                                        zIndex: 1
                                    }}
                                />
                                <Box
                                    sx={{
                                      position: 'absolute',
                                      left: 12,
                                      top: 0,
                                      bottom: 0,
                                      width: '2px',
                                      bgcolor: 'divider'  
                                    }}
                                />
                                2024-2025</TableCell>
                            <TableCell
                                sx={{
                                    width: '20%'
                                }}
                            >
                                <Stack
                                    spacing={0.5}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: '600'
                                        }}
                                    >Datagram</Typography>
                                    <Typography
                                        variant='body2'
                                        color='textSecondary'
                                    >Backend develop</Typography>
                                </Stack>
                            </TableCell>
                            <TableCell
                                sx={{
                                    display: {
                                        xs: 'none',
                                        sm: 'table-cell'
                                    }
                                }}
                            >{(text).slice(0,200)}...</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    </Box>
  )
}
