type Props = {
    href: string;
    children: React.ReactNode;
  };
  
  export default function ExternalLink({href, children}: Props) {
    return (
      <a
        className="inline-block rounded-md border border-gray-700 p-8 transition-colors hover:border-gray-400"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }