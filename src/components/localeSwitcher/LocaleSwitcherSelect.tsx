'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../navigation';
import { useTransition, ReactNode } from 'react';
import { Select, SelectChangeEvent } from '@mui/material';

type Props = {
  children: ReactNode;
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ children, defaultValue }: Props) {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(
    event: SelectChangeEvent<string>
    // event: ChangeEvent<HTMLSelectElement>
  ) {
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
      defaultValue={defaultValue}
      aria-labelledby='locale-selector'
      // aria-controls=':Rilall9dkq:'
      sx={{ borderColor: 'white', color: 'white' }}
    >
    {/* <select
      className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
    > */}
      {children}
    {/* </select> */}
    </Select>
  );
}
