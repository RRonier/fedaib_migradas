import { redirect } from "@/navigation"
import { unstable_setRequestLocale } from 'next-intl/server';
import { Props } from "../types";


export default function MainPage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale)

    redirect('/quienes-somos')
}