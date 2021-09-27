// Задание 2
// В качестве эксперимента доработайте нашу функцию loadScript
const loadScript = (...args) => { // url, callback
    const insertScript = (url, callback) => {
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url ?? '';
        element.onload = callback ?? undefined;
        document.body.appendChild(element);
    }

    const urls = typeof args[0] === 'object' && args[0].length ? args[0] : [];
    if (typeof args[0] === 'string') {
        urls.push(args[0])
    }
    const callback = typeof args[0] === 'function' ? args[0] : args[1];

    for (let i = 0; i < urls.length; i++) {
        insertScript(urls[i], callback);
    }
}

