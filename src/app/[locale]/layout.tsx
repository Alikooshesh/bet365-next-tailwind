import type {Metadata} from "next";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";
import {Geist, Geist_Mono} from "next/font/google";
import "@/app/globals.css";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";
import Header from "@/components/pages/home/layouts/Header";

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

// ✅ Localized <title> & <meta>
export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "Metadata.seo"});
  return {
    title: t("title"),
    description: t("description")
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({children, params}: Props) {
  const {locale} = await params;

  // if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();

  const lang = messages.Metadata?.tools?.lang ?? locale;
  const dir = messages.Metadata?.tools?.dir ?? "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body className="bg-background">
        <NextIntlClientProvider messages={messages}>
          <Header/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
