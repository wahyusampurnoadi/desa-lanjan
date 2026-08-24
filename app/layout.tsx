import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Website Resmi Desa Lanjan',
  description: 'Portal Resmi Informasi, Pelayanan, dan Aspirasi Masyarakat Desa Lanjan.',
  openGraph: {
    title: 'Website Resmi Desa Lanjan',
    description: 'Portal Resmi Informasi Desa Lanjan.',
    url: 'https://desalanjan.web.id',
    siteName: 'Desa Lanjan',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} bg-white dark:bg-slate-950`} suppressHydrationWarning>
      <body 
        className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}