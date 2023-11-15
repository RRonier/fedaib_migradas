"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Image from 'next/image';
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';
import { FormControl } from '@mui/material';

import LocaleSwitcher from './localeSwitcher/localeSwitcher';

export function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [activitiesMenu, setActivitiesMenu] = React.useState<null | HTMLElement>(null);

    const t = useTranslations('navbar')

    const pages = [
        { name: t('proyectos'), url: `/proyectos` },
        { name: t('que_hacemos'), url: `/que-hacemos` },
        { name: t('quienes_somos'), url: `/quienes-somos` },
        { name: t('contacto'), url: `/contacto` },
        { name: t('nuestras_actividades'), url: `/nuestras-actividades` }
    ];

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenActivities = (event: React.MouseEvent<HTMLElement>) => {
        setActivitiesMenu(event.currentTarget);
    };

    const handleCloseActivities = () => {
        setActivitiesMenu(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image width={30} height={30} alt="Navbar logo" src="/assets/fedaib_logo.jpg" style={{ border: '1px solid', borderRadius: "50%" }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href={"/"}
                        sx={{
                            mr: 2,
                            ml: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FEDAIB
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.url}>
                                    <Link href={page.url}>
                                        {page.name}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            // onClick={page.name === ""}
                            <Button key={page.url} sx={{ my: 2, color: 'white', display: 'block' }} aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true" onMouseMove={handleOpenActivities}>
                                <Link
                                    key={page.name}
                                    href={page.url}
                                    // locale={pageLocale}
                                    onClick={handleCloseActivities}
                                    style={{ margin: '2px 0', color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Link>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Box sx={{ minWidth: 100 }}>
                            <FormControl fullWidth sx={{ borderColor: 'white' }}>
                                <LocaleSwitcher />
                            </FormControl>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Link href="http://facebook.com/profile.php?id=100006937729017">
                            <FacebookRoundedIcon fontSize='large' />
                        </Link>
                    </Box>
                    <Menu
                        id="menu-activities"
                        anchorEl={activitiesMenu}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(activitiesMenu)}
                        onClose={handleCloseActivities}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.url}>
                                <Link href={page.url}>
                                    {page.name}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                    {/* <Menu
                        id="menu-activities"
                        anchorEl={activitiesMenu}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(activitiesMenu)}
                        onClose={handleCloseActivities}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                            <MenuItem>
                                <Link href="/">
                                    page
                                </Link>
                            </MenuItem>
                    </Menu> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
