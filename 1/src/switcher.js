export const switcher = {
    settings: {
        selectorButtonsBlock: '#switcher',
        classNameForBloks: 'forms',
        dataset: 'switchmode',
        typeEvent: 'click' // click or hover
    },

    init() {
        this.eventListener();
        this.hideEverythingButFirst();
    },

    hideEverythingButFirst() {
        document.querySelectorAll(`.${this.settings.classNameForBloks}`)
            ?.forEach((el, i) => {
                el.style.display = i !== 0 ? 'none' : 'block';
            });
    },

    eventListener() {
        document.querySelector(this.settings.selectorButtonsBlock)
            ?.addEventListener(this.settings.typeEvent, (event) => {
                this.switch(event.target?.dataset[this.settings.dataset]);
            })
    },

    switch(id) {
        if (!id) {
            return;
        }
        document.querySelectorAll(`.${this.settings.classNameForBloks}`)
            ?.forEach(el => {
                el.style.display = el.id !== id ? 'none' : 'block';
            });
    }
}
