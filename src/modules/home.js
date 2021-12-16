const headerTitle = "Venezuela's - Paradise Restaurant";
const headerDescription = "Best cook masters from Venezuela will make your meal special";
const descSectionContext = ["Inspired by you", "Designed for you", "Makes your dream come true"];

function createHeader(mainTitle, desc) {
    const mainSection = document.createElement("section");
    const title = document.createElement("h1");
    const description = document.createElement("p");

    title.innerText = mainTitle;
    description.innerText = desc;
    
    mainSection.classList.add("header");
    mainSection.appendChild(title);
    mainSection.appendChild(description);

    return mainSection;
}

function createDescriptionSection(data) {
    const section = document.createElement("section");
    
    data.forEach(item => {
        const div = document.createElement("div");
        const element = document.createElement("h2");

        element.innerText = item;
        div.classList.add("description-block");
        div.appendChild(element);
        section.appendChild(div);
    });
    section.classList.add("description");

    return section;
}

function createHome() {
    const container = document.createElement("div");
    container.id = "home";
    container.appendChild(createHeader(headerTitle, headerDescription));
    container.appendChild(createDescriptionSection(descSectionContext));
    
    return container;
}

export {createHome};