import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "搞点逸术工作室 Guardian Art",
  description:
    "搞点逸术工作室，一个面向舞蹈、戏剧、影视等艺术背景创作者与爱好者的跨媒介创意工坊。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
