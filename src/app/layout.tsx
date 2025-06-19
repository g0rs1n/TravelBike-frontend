import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_LOGO_URL
} from "../lib/constants/seo.constants"
import {Toaster} from 'sonner'
import QueryProvider from "@/lib/providers/QueryProvider";
import "../styles/globals.scss"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
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
      <body className={`${nunito.variable}`}>
          <QueryProvider>
            {children}
            <Toaster
              toastOptions={{
                style: {
                  background: '#F4F5E9',
                  border: '1px solid #92947b',
                  color: '#343a40',
                }
              }}
            />
          </QueryProvider>
      </body>
    </html>
  );
}
