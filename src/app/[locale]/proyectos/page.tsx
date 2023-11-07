"use client";
import { useState } from "react";
import styles from "./styles.module.css"
import Image from "next/image"
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { projectsImages } from "../../constants";
import dynamic from "next/dynamic";
import { useTranslations } from 'next-intl';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const SwipeableTextMobileStepper = dynamic(() => import("@/app/components/Carrousel"), { ssr: false })

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Proyectos() {
    const [value, setValue] = useState(0);
    const t = useTranslations('proyectos')

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <main className={styles.main}>
            <h1>{t('pageTitle')}</h1>
            <p>{t('subtitle')}</p>
            {/* <div className={styles.proyectos}>
                <Image alt="could picture"
                    src="/assets/pexels-photo-1449638-edited.webp"
                    width={500} height={500} />
            </div> */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="2022-2023" {...a11yProps(0)} />
                    <Tab label="2021" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Image alt="project firm" src="/assets/project1.jpg" width={150} height={150} />
                <>
                    <b>{t('titleProject')}</b>
                    <>{t('articleProject')}</>
                    <em style={{ display: 'block' }}>{t('entity')}</em>
                    <em>{t('country')}</em>
                </>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <SwipeableTextMobileStepper images={projectsImages} />
                <>
                    <b>{t('titleProject')}</b>
                    <>{t('articleProject')}</>
                    <em style={{ display: 'block' }}>{t('entity')}</em>
                    <em>{t('country')}</em>
                </>
            </CustomTabPanel>
        </main>
    )
}