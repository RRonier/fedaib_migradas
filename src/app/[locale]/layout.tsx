import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer/footer';
import styles from "./layout.module.css"
import { locales } from '@/config'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
  // const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  // console.log({t})

  return {
    title: 'FEDAIB'
  };
}

export default function LocaleLayout({
  children,
  params: { locale }
}: Props) {

  const messages = useMessages();

  //Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={styles.body}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
        </NextIntlClientProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
