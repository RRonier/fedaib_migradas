"use client";
import { useLocale } from 'next-intl'
import { redirect, useRouter, useParams } from 'next/navigation';

export default function Home() {
  const locale = useLocale()

  return (
    redirect(`/${locale}/quienes-somos`)
  )
}
