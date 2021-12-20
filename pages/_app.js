import '../styles/globals.css';
import DefaultLayout from '../components/layout/DefaultLayout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<DefaultLayout>
				<Component {...pageProps} />
			</DefaultLayout>
		</AnimatePresence>
	);
}

export default MyApp;
