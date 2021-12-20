const RelatedProject = {
	title: 'Related Projects',
	Projects: [
		{
			id: uuidv4(),
			title: 'Mobile UI',
			img: Image4,
		},
		{
			id: uuidv4(),
			title: 'Web Application',
			img: Image5,
		},
		{
			id: uuidv4(),
			title: 'UI Design',
			img: Image6,
		},
		{
			id: uuidv4(),
			title: 'Kabul Mobile App UI',
			img: Image3,
		},
	],
};

function RelatedProjects() {
	return (
		<div>
			<h1>Related Projects</h1>
		</div>
	);
}

export default RelatedProjects;
