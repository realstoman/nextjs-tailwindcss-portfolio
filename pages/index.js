import Head from 'next/head';
import Image from 'next/image';
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<AppBanner />
		</div>
	);
}
