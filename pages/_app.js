import '../styles/globals.css';
import DefaultLayout from '../components/layout/DefaultLayout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<DefaultLayout>
					<Component {...pageProps} />
				</DefaultLayout>
			</div>
		</AnimatePresence>
	);
}

export default MyApp;
