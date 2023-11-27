import {notFound} from 'next/navigation';

export async function generateStaticParams() {
    return [{ lang: 'en-US' }, { lang: 'de' }]
  }

export default function CatchAllPage() {
  notFound();
}
