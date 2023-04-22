import Footer from "@/src/components/footer";
import NavBar from "@/src/components/header/NavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
