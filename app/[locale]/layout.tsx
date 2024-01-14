// Global styles
import GlobalStyle from "@styles/globalStyles";

// Fonts
import { Poppins } from "next/font/google";

// Providers
import Providers from "providers";

// Store
import { Store } from "@context";

import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { Layout } from "@components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Inno Web Solutions",
  description:
    "Inno Web Solutions is a digital agency specializing in innovative web and app development, with a strong focus on SEO and custom design solutions. Their services range from frontend and backend development to mobile app creation and e-commerce platforms. They emphasize personalized approaches to digital strategy, aiming to enhance client satisfaction and achieve significant revenue growth through their tailored solutions.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  if (params.locale !== locale) {
    return notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale} className={poppins.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />

        <title>Inno Web Solutions</title>
      </head>

      <body>
        <Providers>
          <GlobalStyle />

          <NextIntlClientProvider locale={locale} messages={messages}>
            <Store>
              <Layout>{children}</Layout>
            </Store>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
