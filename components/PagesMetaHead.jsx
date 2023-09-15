import Head from "next/head";

function PagesMetaHead({ title, keywords, description }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/images/logo/favicon.svg" />
      <title>{title}</title>
    </Head>
  );
}

PagesMetaHead.defaultProps = {
  title: "Next.js & TailwindCSS Portfolio Project",
  keywords:
    "product, design, agile, web, ux, user, research, prototyping, interaction, wireframing, sketching, user-centric, interface, usability, user experience, iterative, innovation, creative, problem-solving, visual design, user testing, collaboration, accessibility, information architecture, design thinking, responsive design, product development, user flow, user persona, empathy, user-centred design, design iteration, user journey, user interface (ui), human-centred design, user feedback, design strategy",
  keywords: "Simple and multi-page next.js and react application",
};

export default PagesMetaHead;
