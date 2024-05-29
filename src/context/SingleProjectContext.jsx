import { useState, createContext } from 'react';
import { projectsData as projectsDataJson } from '../data/projects';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [projectsData, setSingleProjectData] = useState(projectsDataJson);

	return (
		<SingleProjectContext.Provider
			value={{ projectsData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
