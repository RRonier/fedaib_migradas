"use client";
import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl'

export default function Home() {

  redirect('/quienes-somos')
}
