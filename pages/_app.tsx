import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import { loading, thisSession } from "../context/atoms";
import { useAtom } from "jotai";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const [useLoading, setuseLoading] = useAtom(loading);
  const [havingSession, setHavingSession] = useAtom(thisSession);
  useEffect(() => {
    router.events.on("routeChangeError", (e) => setuseLoading(true));
    router.events.on("routeChangeStart", (e) => setuseLoading(true));
    router.events.on("routeChangeComplete", (e) => setuseLoading(false));
    return () => {
      router.events.off("routeChangeError", (e) => setuseLoading(true));
      router.events.off("routeChangeStart", (e) => setuseLoading(true));
      router.events.off("routeChangeComplete", (e) => setuseLoading(false));
    };
  }, [router.events]);
  useEffect(() => {
    if (havingSession !== "") {
      if (havingSession === "unauthenticated") {
        if (
          router.pathname !== "/" &&
          router.pathname !== "/register" &&
          router.pathname !== "/signin" &&
          router.pathname !== "/reset-password" &&
          router.pathname !== "/forgot-password"
        ) {
          router.replace("/");
        } else {
          setuseLoading(false);
        }
      } else {
        setuseLoading(false);
      }
    }
  }, [havingSession]);
  return (
    <>
      <AnimatePresence>
        <SessionProvider session={session}>
          <Auth>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key={"secondvid"}
            >
              {useLoading ? <LoadingScreen /> : <Component {...pageProps} />}
            </motion.div>{" "}
          </Auth>
        </SessionProvider>
      </AnimatePresence>
    </>
  );
}

function Auth({ children }: any) {
  const { data: session, status } = useSession();
  const [useLoading, setuseLoading] = useAtom(loading);
  const [havingSession, setHavingSession] = useAtom(thisSession);
  const router = useRouter();
  useEffect(() => {
    if (status) {
      setHavingSession(status);
    }
  }, [status]);
  {
    if (!useLoading) {
      return children;
    }
    return <LoadingScreen />;
  }
}

export default MyApp;
