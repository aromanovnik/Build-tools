document.querySelector('#switcher').addEventListener('click', (event) => {
    if (event.target?.dataset?.switchmode) {
        switchMode(event.target?.dataset?.switchmode);
    }
})

const switchMode = (id) => {
    document.querySelectorAll('.forms')?.forEach(el => {
        el.style.display = el.id !== id ? 'none' : 'block';
    });

}
