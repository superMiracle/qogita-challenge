import type { AppProps } from "next/app";
import { CartContextProvider } from "../contexts/AppContext";

import "../global.css";

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <CartContextProvider>
    <Component {...pageProps} />
  </CartContextProvider>
);

export default QogitaApp;
