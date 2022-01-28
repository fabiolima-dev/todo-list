import './style.css';

const body = document.querySelector("body");

const projectsContainer = (() => {
    const render = () => {
        body.appendChild(container);
    };
    const remove = () => {
        body.removeChild(container);
    };
    const addProjectInput = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "text");

        console.log("teste");
    }
    const addProject = () => {
        const project = document.createElement("h3");
        project.classList.add("white");

    }
    const container = document.createElement("aside");
    container.id = "projects-container";

    const title = document.createElement("h2");
    title.textContent = "Todo List"
    title.classList.add("white");
    title.id = "projects-container-title";

    const addProjectElement = document.createElement("h3");
    addProjectElement.textContent = "+ Add Project";
    addProjectElement.classList.add("white");
    addProjectElement.addEventListener("click", () => {
        addProjectInput();
    });

    container.append(
        title,
        addProjectElement
    )

    return {
        render,
        remove
    };
})();

const startScreen = (() => {
    const render = () => {
        body.appendChild(container);
    }
    const remove = () => {
        body.removeChild(container);
    }
    const container = document.createElement("main");
    container.id = "start-screen-container"

    const title = document.createElement("h1");
    title.textContent = "Create a Project to Start"

    container.appendChild(title);

    return {
        render,
        remove
    }
})();

const loadPage = () => {
    projectsContainer.render();
    startScreen.render();
}

export {loadPage};