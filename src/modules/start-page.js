import '../styles/index.css';
import '../styles/home.css';
import '../styles/menu.css';
import '../styles/contacts.css';
import {createHome} from './home';
import {createMenuBlock} from './menu';
import {createContacts} from './contacts';

const navbarContext = ["Home", "Menu", "Contacts"];
const pageDataContainer = document.createElement("div");

function createNavbar(data) {
    const navbar = document.createElement("div");
    const listContainer = document.createElement("ul");

    navbar.classList.add("navbar-container");
    
    listContainer.classList.add("navbar");
    data.forEach((value, index) => {
        let idGenerator = "btn-" + index;
        const item = document.createElement("li");
        const link = document.createElement("a");

        item.classList.add("navbar-tab");
        link.innerText = value;
        link.href = "#";
        link.id = idGenerator;
        link.classList.add("navbar-button");
        link.addEventListener("click", switchTabPage);
        item.appendChild(link);
        listContainer.appendChild(item);
    });
    navbar.appendChild(listContainer);
    navbar.querySelector("#btn-0").classList.add("active");

    return navbar;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.innerText = "All rights reserved by Yunak © 2021";
    return footer;
}

function switchTabPage(event) {
    console.log(event.target.id);
    document.querySelectorAll(".navbar-button").forEach(button => button.classList.remove("active"));
    document.querySelector(`#${event.target.id}`).classList.add("active");
    pageDataContainer.childNodes.forEach(block => block.classList.add("hide"));
    document.getElementById("contacts").style.display = "none";
    switch (event.target.id) {
        case "btn-0":
            document.getElementById("home").classList.remove("hide");
        break;
        case "btn-1":
            document.getElementById("menu").classList.remove("hide");
        break;
        case "btn-2":
            document.getElementById("contacts").classList.remove("hide");
            document.getElementById("contacts").style.display = "flex";
        break;
        default:
            console.log("something is wrong");
            break;
    }
}

function initializePage() {
    document.querySelector("#content").classList.add("page-wrapper");
    const navbar = createNavbar(navbarContext);

    pageDataContainer.classList.add("page-data-container");
    pageDataContainer.appendChild(createHome());
    pageDataContainer.appendChild(createMenuBlock());
    pageDataContainer.appendChild(createContacts());

    document.querySelector("#content").appendChild(navbar);
    document.querySelector("#content").appendChild(pageDataContainer);
    document.querySelector("#content").appendChild(createFooter());
}

export {initializePage};