/* eslint-disable react/jsx-props-no-spreading */
import Head from "next/head";
import PropTypes from "prop-types";
import "../styles/index.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../components/Header";
// Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-200 pb-12 min-h-screen">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};
MyApp.defaultProps = {
  pageProps: {},
};
