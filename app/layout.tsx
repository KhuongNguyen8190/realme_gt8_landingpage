import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realme GT8 - Kỷ nguyên Gaming Mới",
  description: "Trải nghiệm sức mạnh vô hạn với điện thoại gaming Realme GT8. Chip Snapdragon 8 Elite, tản nhiệt buồng hơi siêu lớn.",
  openGraph: {
    title: "Realme GT8 - Kỷ nguyên Gaming Mới",
    description: "Trải nghiệm sức mạnh vô hạn với điện thoại gaming Realme GT8.",
    images: ["/images/og-realme-gt8.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden w-full relative antialiased`}>
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