import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import "../../public/fonts/font.css";
import store from "../redux/store";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import MultipleLangWrapper from "../components/base/MultipleLangWrapper";
import "../../public/styles/globals.scss";

const languages = {
  vi: require("../../public/locales/vi/lang.json"),
  en: require("../../public/locales/en/lang.json"),
} as any;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale = "en", defaultLocale = "en" } = router;
  const messages = languages[locale];
  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
      <Provider store={store}>
        <MultipleLangWrapper>
          <Head>
            <title>Boilerplate Next</title>

            <link rel="shortcut icon" href="/assets/favicon.png" />
          </Head>
          <NextNProgress
            color={"#F1AE71"}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </MultipleLangWrapper>
      </Provider>
    </IntlProvider>
  );
}

export default MyApp;
