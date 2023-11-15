'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { useTransition } from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: SelectChangeEvent<string>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Select
      labelId="locale-selector"
      id="locale-selector"
      value={locale}
      onChange={onSelectChange}
      disabled={isPending}
      aria-labelledby='locale-selector'
      // aria-controls=':Rilall9dkq:'
      sx={{ borderColor: 'white', color: 'white' }}
    >
      {['en', 'es', 'fr', 'eus'].map((cur) => {
        return (
          <MenuItem key={cur} value={cur}>
            {t('locale', { locale: cur })}
          </MenuItem>
        )
      })}
    </Select>
  );
}
