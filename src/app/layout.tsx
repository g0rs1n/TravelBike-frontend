import type { Metadata } from "next";
import { Lato } from "next/font/google";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_LOGO_URL
} from "../lib/constants/seo.constants"
import {Toaster} from 'sonner'
import QueryProvider from "@/lib/providers/QueryProvider";
import "../styles/globals.scss"

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: SITE_LOGO_URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
          <QueryProvider>
            {children}
            <Toaster/>
          </QueryProvider>
      </body>
    </html>
  );
}
