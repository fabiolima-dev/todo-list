const body = document.querySelector("body");

const projectsContainer = (() => {
    const render = () => {
        body.appendChild(projectsContainer);
    };
    const remove = () => {

    };
    const projectsContainer = document.createElement("aside");
    projectsContainer.id = "projects-container";

    const title = document.createElement("h2");
    title.textContent = "Todo List"
    title.classList.add("white");

    const addProject = document.createElement("h3");
    addProject.textContent = "+ Add Project";
    addProject.classList.add("white");

    projectsContainer.append(
        title,
        addProject
    )

    return {
        render
    };
});