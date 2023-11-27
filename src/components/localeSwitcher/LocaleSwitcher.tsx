import { MenuItem } from "@mui/material"
import { useLocale, useTranslations } from "next-intl"
import LocaleSwitcherSelect from "./LocaleSwitcherSelect"

export default function LocaleSwitcher() {
    const locale = useLocale();
    const t = useTranslations('LocaleSwitcher');

    return (
        <LocaleSwitcherSelect defaultValue={locale}>
            {/* <> */}
                {
                    ['en', 'es', 'fr', 'eus'].map((cur) => {
                        return (
                            <MenuItem key={cur} value={cur}>
                                {/* <option key={cur} value={cur}> */}
                                {t('locale', { locale: cur })}
                            </MenuItem>
                            // </option>
                        )
                    })
                }
            {/* </> */}
        </LocaleSwitcherSelect>
    )
}