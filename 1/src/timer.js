// import 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js';
import {Howl} from 'howler';

export const timer = {
    settings: {
        inputId: 'timerInput',
        displayBlockId: 'timerDisplay',
        interval: 1000,
    },
    // time: 0,
    intervalId: undefined,

    // The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page.
    // sound: new Howl({
    //     src: ['./beep.mp3'],
    //     html5: true,
    //     autoplay: false,
    //     volume: 0.8,
    // }),

    _time: 0,
    set time(ms) {
        this._time = ms;
    },

    get time() {
        return this._time;
    },

    start() {
        this.playSound();
        const input = document.getElementById(this.settings.inputId)?.value;
        if (!input) {
            return;
        }

        this.time = +input * 60 * 1000; // In ms
        if (!this.time) {
            return;
        }

        this.displayTime();

        this.intervalId = setInterval(() => {
            this.time -= this.settings.interval;
            this.displayTime();

            if (this.time <= 0) {
                this.stop();
                this.playSound();
            }
        }, this.settings.interval);
    },

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.time = 0;
        this.displayTime();
    },

    playSound() {
        (new Howl({
            src: ['./assets/beep.mp3'],
            html5: true,
            autoplay: false,
            volume: 0.8,
        }))?.play();
    },

    msToMinutesAndSeconds(ms) {
        const minutes = Math.floor(ms / 60000);
        const seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    },

    displayTime() {
        const displayBlockId = document.getElementById(this.settings.displayBlockId);
        if (!displayBlockId) {
            return;
        }

        displayBlockId.innerText = this.msToMinutesAndSeconds(this.time);
    }
}
