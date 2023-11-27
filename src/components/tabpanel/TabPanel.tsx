"use client";
import { useState, lazy, Suspense } from "react";
import Image from "next/image"
import { projectsImages } from "@/app/constants";
import { Box, Tab, Tabs, Skeleton } from "@mui/material";

const SwipeableTextMobileStepper = lazy(() => import("@/components/Carrousel"))

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

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
                <Box sx={{ p: 3 }}>{children}</Box>
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

interface Translations {
    titleProject: string;
    articleProject: string;
    entity: string;
    country: string;
}

export default function TabPanelComponent({ translations }: { translations: Translations }) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="2022-2023" {...a11yProps(0)} />
                    <Tab label="2021" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Image alt="project firm" src="/assets/project1.jpg" width={150} height={150} />
                <b style={{ display: 'block' }}>{translations.titleProject}</b>
                <p style={{ display: 'block', textAlign: 'justify' }}>{translations.articleProject}</p>
                <em style={{ display: 'block' }}>{translations.entity}</em>
                <em>{translations.country}</em>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Suspense fallback={<Skeleton width="100" height="300" />}>
                    <SwipeableTextMobileStepper images={projectsImages} />
                </Suspense>
                <>
                    <b>{translations.titleProject}</b>
                    <p style={{ display: 'block', textAlign: 'justify' }}>{translations.articleProject}</p>
                    <em style={{ display: 'block' }}>{translations.entity}</em>
                    <em>{translations.country}</em>
                </>
            </CustomTabPanel>
        </>
    )
}