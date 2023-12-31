// Global styles
import GlobalStyle from "@styles/globalStyles";

// Fonts
import { Comfortaa } from "next/font/google";

// Providers
import Providers from "providers";

// Store
import { Store } from "@context";

import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { Layout } from "@components";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

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
    <html lang={locale} className={comfortaa.className}>
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
