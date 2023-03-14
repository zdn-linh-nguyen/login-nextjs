import { store } from "@/app/store";
import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<GoogleOAuthProvider clientId={process.env.GOOGLE_ID as string}>
					<Component {...pageProps} />;
				</GoogleOAuthProvider>
			</Provider>
		</>
	);
}
