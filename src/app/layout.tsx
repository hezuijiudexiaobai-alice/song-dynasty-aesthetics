import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '宋朝美学 | 华夏文化之巅',
    template: '%s | 宋朝美学',
  },
  description:
    '深入探索宋朝美学的独特魅力，从哲学根基到艺术表现，从生活美学到现代转译，系统剖析这一"华夏民族之文化造极于赵宋"的历史巅峰。',
  keywords: [
    '宋朝美学',
    '宋代艺术',
    '汝窑天青',
    '宋明理学',
    '格物致知',
    '文人画',
    '点茶',
    '焚香',
    '插花',
    '中国传统文化',
  ],
  authors: [{ name: '宋朝美学研究' }],
  generator: 'Coze Code',
  openGraph: {
    title: '宋朝美学 | 华夏文化之巅',
    description:
      '从哲学根基到艺术表现，深入探索宋朝美学的独特魅力与历史价值。',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
