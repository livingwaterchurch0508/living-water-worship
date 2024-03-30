import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import { fonts } from "@/app/fonts";
import { Container } from "@chakra-ui/react";
import styles from "@/app/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "생수가 흐르는 교회 찬양집",
  description: "생수가 흐르는 교회 찬양집 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body className={inter.className}>
        <Providers>
          <Container className={styles.main}>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
