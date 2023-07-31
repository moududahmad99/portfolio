import React, { useEffect, useRef } from 'react';
import './style.css'
// eslint-disable-next-line
import mixitup from 'mixitup';

const Project = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const mixer = mixitup(containerRef.current);

		mixer.filter('.react');

		return () => {
			mixer.destroy();
		};
	}, []);

	return (
		<section id="project">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-8 col-12 text-center">
						<div className="project-title">
							<h3><span>My</span> Projects</h3>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-7 col-md-12 col-sm-12 col-12 text-center responsive-nav">
						<div className="project-nav">
							<ul>
								<li data-filter=".react">React</li>
								<li data-filter=".js">JavaScript</li>
								<li data-filter=".sass">Sass</li>
								<li data-filter=".responsive">HTML-Figma</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row grid" ref={containerRef}>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix responsive">
						<div className="project-items">
							<img src="images/project-hunt.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Hunt</h3>
								<a href="https://github.com/moududahmad99/hunt">view github</a>
								<a href="https://moududahmad99.github.io/hunt">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix sass">
						<div className="project-items">
							<img src="images/project-iknow.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>I-know</h3>
								<a href="https://github.com/moududahmad99/iknow-themeforest">view github</a>
								<a href="https://moududahmad99.github.io/iknow-themeforest">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix responsive">
						<div className="project-items">
							<img src="images/project-portfolio.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Portfolio</h3>
								<a href="https://www.figma.com/file/33m3fFmXuAXoGkadszKM2X/Portfolio-SabbirAhmadMoudud?type=design&mode=design&t=YesVny18JJQFpZCQ-0">Live Project</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix responsive">
						<div className="project-items">
							<img src="images/project-education.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Education</h3>
								<a href="https://www.figma.com/file/qJYNhZDM3dpV9992XKmaMM/Coaching-Center-Project-%5B-Cancelled-%5D?type=design&node-id=0-1&mode=design&t=9jr7S49RldZoGZ6w-0">Live Project</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix js">
						<div className="project-items">
							<img src="images/project-js.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>JS Projects</h3>
								<a href="https://github.com/moududahmad99/javascript-practice-projects">view github</a>
								<a href="https://moudud-javascript-projects.netlify.app/">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix responsive">
						<div className="project-items">
							<img src="images/project-mogo.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Mogo</h3>
								<a href="https://github.com/moududahmad99/mogo">view github</a>
								<a href="https://moududahmad99.github.io/mogo">live server</a>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix js">
						<div className="project-items">
							<img src="images/project-taskList.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Task List</h3>
								<a href="https://github.com/moududahmad99/task-list">view github</a>
								<a href="https://moududahmad99.github.io/task-list">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix react">
						<div className="project-items">
							<img src="images/project-react.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>React Projects</h3>
								<a href="https://github.com/moududahmad99/react-practice-projects">view github</a>
								<a href="https://moudud-react-projects.netlify.app">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix responsive">
						<div className="project-items">
							<img src="images/project-showcase.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Showcase</h3>
								<a href="https://www.figma.com/file/zZyqKqZQCY3KQjM7U2vfC6/Projects-Showcase?type=design&node-id=0-1&mode=design&t=4rS2S6SN4zsyv6bu-0">Live Project</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix react">
						<div className="project-items">
							<img src="images/projects-chatting-app.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>SIGNIN-SIGNUP</h3>
								<a href="https://github.com/moududahmad99/chatting-app">view github</a>
								<a href="https://moudud-chatting-app.netlify.app">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix responsive">
						<div className="project-items">
							<img src="images/project-axit.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Axit</h3>
								<a href="https://moududahmad99.github.io/axit/">view github</a>
								<a href="https://moududahmad99.github.io/axit">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix react">
						<div className="project-items">
							<img src="images/project-hunt-react.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Hunt React</h3>
								<a href="https://github.com/moududahmad99/hunt-react">view github</a>
								<a href="https://moudud-hunt.netlify.app/">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix js">
						<div className="project-items">
							<img src="images/project-matrix.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Matrix</h3>
								<a href="https://github.com/moududahmad99/matrix">view github</a>
								<a href="https://moududahmad99.github.io/matrix">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix react">
						<div className="project-items">
							<img src="images/project-hstu.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>EEE Club HSTU</h3>
								<a href="https://github.com/moududahmad99/eeeclubofhstu">view github</a>
								<a href="https://moudud-eeeclubofhstu.vercel.app/">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix js">
						<div className="project-items">
							<img src="images/project-bookList.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Book List</h3>
								<a href="https://github.com/moududahmad99/book-list">view github</a>
								<a href="https://moududahmad99.github.io/book-list">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix react">
						<div className="project-items">
							<img src="images/project-mogo.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Gymnasium</h3>
								<a href="https://github.com/moududahmad99/mogo-react">view github</a>
								<a href="https://moudud-mogo.netlify.app/">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix js">
						<div className="project-items">
							<img src="images/project-image-search.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Image Search</h3>
								<a href="https://github.com/moududahmad99/image-search-app">view github</a>
								<a href="https://moududahmad99.github.io/image-search-app">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix js">
						<div className="project-items">
							<img src="images/project-recipe-search.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Recipe Search</h3>
								<a href="https://github.com/moududahmad99/recipe-search-app">view github</a>
								<a href="https://moududahmad99.github.io/recipe-search-app">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix responsive">
						<div className="project-items">
							<img src="images/project-gymnasium.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Gymnasium</h3>
								<a href="https://github.com/moududahmad99/gymnasium">view github</a>
								<a href="https://moududahmad99.github.io/gymnasium">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix react">
						<div className="project-items">
							<img src="images/project-gymnasium.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Gymnasium</h3>
								<a href="https://github.com/moududahmad99/gymnasium-react">view github</a>
								<a href="https://moudud-gymnasium.netlify.app/">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix js">
						<div className="project-items">
							<img src="images/project-todoApp.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Todo App</h3>
								<a href="https://github.com/moududahmad99/basic-react-todo-app">view github</a>
								<a href="https://moudud-todo-app.netlify.app/">live server</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6 col-6 mix react">
						<div className="project-items">
							<img src="images/project-nike.png" alt="profile" />
							<div className="project-itemsInner text-center">
								<h3>Gymnasium</h3>
								<a href="https://github.com/moududahmad99/nike-app">view github</a>
								<a href="https://moudud-nike.netlify.app/">live server</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Project;
