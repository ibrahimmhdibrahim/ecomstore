import "../assets/styles/globals.scss";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";

import {Provider} from "react-redux";
import store from "../store";

function MyApp({Component, pageProps}) {
    return (
        <>
            <Provider store={store}>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </Provider>
        </>
    );
}

export default MyApp;
