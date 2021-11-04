import "../assets/styles/globals.scss";
import "../assets/styles/modules/grid.scss";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
                <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
