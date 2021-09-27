// export function handlerTimer(event) {
//     event.preventDefault();
//
//     console.dir(event.target)
// }

export const timer = {
    settings: {
        inputId: 'timerInput',
        displayBlockId: 'timerDisplay',
        interval: 1000,
    },
    time: 0,
    intervalId: undefined,

    start() {
        console.log(this.settings)
        const input = document.getElementById(this.settings.inputId)?.value;
        if (!input) {
            return;
        }

        this.time = +input * 60 * 1000; // In ms
        console.log(this.time)
        if (!this.time) {
            return;
        }

        console.log('Start');
        this.intervalId = setInterval(() => {
            this.time -= this.settings.interval;
            this.displayTime();

            if (this.time <= 0) {
                this.stop();
            }
        }, this.settings.interval);
    },

    stop() {
        console.log('Stop');
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.time = 0;
        this.displayTime();
    },

    msToMinutesAndSeconds(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    },

    displayTime() {
        console.log(this.time);
        const displayBlockId = document.getElementById(this.settings.displayBlockId);
        if (!displayBlockId) {
            return;
        }

        displayBlockId.innerText = this.msToMinutesAndSeconds(this.time);
    }
}
