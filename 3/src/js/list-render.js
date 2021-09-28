import {list} from "./list.js";

export class ListRender {
    settings = {
        parentSelector: '.list',
        parent: undefined,
        classNameItem: 'list__item',
    }

    constructor(settings = {}) {
        this.settings = {
            ...this.settings,
            settings,
        }

        this.init();
    }

    init() {
        this.parent = document.querySelector(this.settings.parentSelector);
        this.render();
    }

    render() {
        if (!this.parent) {
            return;
        }

        this.parent.innerHTML = '';
        for (const item of list) {
            this.renderItem(item);
        }
    }

    renderItem(item) {
        if (!item) {
            return;
        }
        this.parent.insertAdjacentHTML('beforeend',
            `<div class="${this.settings.classNameItem}">
                       <div class="${this.settings.classNameItem}-image"><img src="${item.img}" alt="${item.title}"></div>
                       <h3>${item.title}</h3>
                   </div>`);
    }
}
