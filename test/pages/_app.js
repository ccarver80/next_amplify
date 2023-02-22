import "../styles/globals.css";

import { Amplify } from "aws-amplify";

import awsconfig from "../src/aws-exports";

Amplify.configure({ ...awsconfig, ssr: true });

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
