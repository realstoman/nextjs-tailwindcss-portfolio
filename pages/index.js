import Link from 'next/link';
import PagesMetaHead from '../components/PagesMetaHead';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="Home" />
			<AppBanner />

			<ProjectsGrid />

			<div className="mt-10 sm:mt-15 flex justify-center">
				<div className="flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl font-medium">
					<Link href="/projects" aria-label="More Projects">
						More Projects
					</Link>
				</div>
			</div>
		</div>
	);
}
