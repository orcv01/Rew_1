import "./Header.css";

import {menus} from "../../data/data";

const template = () => {
    return `
    <h1>Titulo</h1>
    <nav>
        <ul id="navegador"></ul>
    </nav>
    `;
};

const addFields = () => {
    const navegador = document.querySelector("#navegador");
    for (const menu of menus) {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href=${menu.link}>${menu.title}</a>
        `;
        navegador.appendChild(li);
    }
};

const Header = () => {
    document.querySelector("header").innerHTML = template();
    addFields();
};

export default Header();
