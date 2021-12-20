import Image from 'next/image';

function AboutClientSingle({ title, image }) {
	return (
		<div className="py-5 px-10 border bg-neutral-100 border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
			<Image src={image} className="client-image" alt={title} />
			<style jsx>
				{`
					.client-image {
						width: calc(100vw - 4em);
						border: 1px solid red !important;
					}
				`}
			</style>
		</div>
	);
}

export default AboutClientSingle;
