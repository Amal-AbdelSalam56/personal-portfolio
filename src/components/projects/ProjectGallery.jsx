
import { projectsData } from '../../data/projects';

const ProjectGallery = ({projectId}) => {
	console.log(projectId);
	// const {Project,} = useContext(ProjectsContext);
	const findProject = projectsData.find(project => project.id == projectId);
	console.log(findProject); 

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		{findProject.ProjectImages?.map((proj, index) => ( // Check for ProjectImages existence
		  <div className="mb-10 sm:mb-0" key={index}>
			<img
			  src={proj} // Assuming project contains image URLs/paths
			  className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
			  alt="Project Img"
			  key={index}
			/>
		  </div>
		))}
	  </div>
	);
};

export default ProjectGallery;
