import React, { useEffect, useRef } from 'react';
import './style.css'
// eslint-disable-next-line
import mixitup from 'mixitup';

const Project = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mixer = mixitup(containerRef.current); 

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
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 text-center">
            <div className="project-nav">
              <ul>
                <li className="mixitup-control-active" data-filter="*">All</li>
                <li data-filter=".sass">Sass</li>
                <li data-filter=".js">JavaScript</li>
                <li data-filter=".responsive">Responsive</li>
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
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 mix responsive">
            <div className="project-items">
              <img src="images/project-gymnasium.png" alt="profile" />
              <div className="project-itemsInner text-center">
                <h3>Gymnasium</h3>
                <a href="https://github.com/moududahmad99/gynasium">view github</a>
                <a href="https://moududahmad99.github.io/gynasium">live server</a>
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
        </div>
      </div>
    </section>
  );
};

export default Project;
