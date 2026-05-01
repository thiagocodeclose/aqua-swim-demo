// @ts-nocheck
import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-inter' });
const nunito = Nunito({ subsets: ['latin'], weight: ['300', '400', '600', '700', '800'], variable: '--font-nunito' });

export const metadata: Metadata = {
  title: 'Aqua Training | Elite Swim Center San Diego',
  description: 'San Diego\'s premier aquatic training facility. Masters swim, triathlon prep, youth competitive and adult programs. Powered by water.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg = await getKorivaConfig();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" style={vars as React.CSSProperties}>
      <body className={`${inter.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
