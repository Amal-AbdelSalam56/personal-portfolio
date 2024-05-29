import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import linklogo from './../../images/external-link.svg';
import gitlogo from './../../images/github.svg';


const ProjectSingle = ({ id, title, category, image, tags, ProjectHeader, link, git ,ProjectImages,ProjectInfo, RelatedProject }) => {
	console.log("tags" + tags);


	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			{/* تصميم قديم */}
			{/* <Link to={`/projects/single-project/${id}`} aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="rounded-t-xl border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link> */}


			{/* تصميم جديد */}
			<div
				className="max-w-lg mx-auto flex flex-col shadow-lg hover:shadow-xl cursor-pointer rounded-xl 
				 projects-center md:projects-start md:justify-center "
			>
				<a href={`/projects/single-project/${id}`} target='_blank' rel="noreferrer"
				className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}>
					<img
						className="w-full rounded-md"
						src={image} alt="projectImg"
					/>
				</a>
				<div className="w-full mt-5 p-4">
					<div className="flex projects-center justify-between">
						<a href={`/projects/single-project/${id}`} target="_blank" rel="noreferrer">   
							<h3 className="text-lg font-bold text-ternary-dark dark:text-ternary-light">{title}</h3>
						</a>
						<div className="space-x-2 flex ">
							{link && (
								<a href={link} target="_blank" rel="noreferrer" style={{marginRight:"10px"}}>
									<img 
										src={linklogo}
										width={20}
										height={20}
										alt="Link Icon"
									/>
								</a>
							)}
							{git && (
								<a href={git} target="_blank" rel="noreferrer" >
									<img
										src={gitlogo}
										width={20}
										height={20}
										alt="Github Icon"
									/>
								</a>
							)}
						</div>
					</div>
					<p className="text-fun-gray text-left text-sm text-ternary-dark dark:text-ternary-light">{category}</p>
					<ul className="flex items-center mt-2 ml-2 list-none" style={{flexWrap:"wrap" }}>
						{tags.map((tag, index) => {
							return (
								<li key={index} className="mr-2 mb-2">
									<Link to={`/projects/single-project/${id}`} >
										<div className="tags m-1 rounded-lg text-base font-semibold cursor-pointer hover:opacity-75 text-ternary-dark dark:text-ternary-light">
											{tag}
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;
