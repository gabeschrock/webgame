import { LoopTarget } from "./loop_target";

export class WebGame extends EventTarget {
    /**
     * @type {HTMLCanvasElement | null}
     */
    ctx = null;
    /**
     * @type {CanvasRenderingContext2D | null}
     */
    screen = null;
    /**
     * @type {LoopTarget}
     */
    loops = new LoopTarget();
}
