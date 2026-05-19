import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Populari Kettle Corn | Luxury Gourmet Popcorn Catering',
  description: 'Elevate your event with gourmet popcorn buffets. Weddings, corporate, bar mitzvahs, and more. Certified Kosher Pareve catering across Israel.',
  openGraph: {
    "title": "Populari Kettle Corn | Luxury Gourmet Popcorn Catering",
    "description": "Elevate your event with gourmet popcorn buffets. Weddings, corporate, bar mitzvahs, and more.",
    "siteName": "Populari Kettle Corn",
    "type": "website"
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
