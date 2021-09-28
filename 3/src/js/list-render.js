import {list, enumListItemType} from "./list.js";

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
        let itemCoverHTML = '';

        switch (item.type) {
            case enumListItemType.image:
                itemCoverHTML = `
                     <div class="${this.settings.classNameItem}-cover ${this.settings.classNameItem}-cover_image">
                         <img src="${item.url?.default}" alt="${item.title}">
                     </div>
                `
                break;
            case enumListItemType.audio:
                itemCoverHTML = `
                     <div class="${this.settings.classNameItem}-cover ${this.settings.classNameItem}-cover_audio">
                         <audio controls src="${item.url?.default}">
                     </div>
                `
                break;
            case enumListItemType.video:
                itemCoverHTML = `
                     <div class="${this.settings.classNameItem}-cover ${this.settings.classNameItem}-cover_video">
                         <video controls src="${item.url?.default}">
                     </div>
                `
                break;
        }

        this.parent.insertAdjacentHTML('beforeend',
            `<div class="${this.settings.classNameItem}">
                        ${itemCoverHTML}
                       <h3>${item.title}</h3>
                   </div>`);
    }
}
