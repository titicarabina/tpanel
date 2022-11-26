import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      )}
    </>
  );
}

export default MyApp;
