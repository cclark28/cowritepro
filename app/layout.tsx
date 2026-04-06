import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CowritePRO',
  description: 'AI-powered marketing copy generation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}
