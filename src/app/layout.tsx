import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import Layout from '@/container/Layout';

export const metadata: Metadata = {
  title: 'Matt Mayfield | Portfolio',
  description: "Matt Mayfield's personal website and portfolio",
  icons: {
    icon: '/hand.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
