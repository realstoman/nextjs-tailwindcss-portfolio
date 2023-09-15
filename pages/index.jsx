import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import AppBanner from "../components/shared/AppBanner";

export default function Home() {
  return (
    <div className="container  mx-auto max-w-screen-xl">
      <PagesMetaHead title="Home" />
      <AppBanner />
      <ProjectsGrid />
    </div>
  );
}
