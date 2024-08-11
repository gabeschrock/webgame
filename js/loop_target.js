export class LoopTarget extends EventTarget {
    #loops;

    /**
     * 
     * @param {string} name
     * @param {number} interval
     */
    start(name, interval) {
        if (name in this.#loops) {
            return false;
        }

        this.#loops[name] = setInterval(() => {
            this.dispatchEvent(name);
        }, interval);
        return true;
    }

    stop(name) {
        if (name in this.#loops) {
            clearInterval(this.#loops[name]);
            delete this.#loops[name];
            return true;
        }
        return false;
    }
}
