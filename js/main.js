import { LoopTarget } from "./loop_target.js";
import { WebGame } from "./web_game.js"
import { moduleScript } from "./helpers.js"

/**
 * @typedef {"2d" | "webgl" | "webgl2"} ScreenType
 * @typedef {CanvasRenderingContext2D | WebGLRenderingContext | WebGL2RenderingContext} ScreenContext
 */

/**
 * @typedef {object} WebGameConfig
 * @property {string} entryURL
 * @property {ScreenType} screenType
 */

/**
 * @type {WebGame}
 * Defining name "WebGame" for VSCode to know the type, even though it gets
 *  overwritten in init
 */
let webGame;

/**
 * 
 * @param {WebGameConfig} config 
 */
export function init(config) {
    window.webGame = new WebGame();

    /**
     * @type {HTMLCanvasElement | null}
     */
    const wgScreen = document.querySelector("canvas#webgame-screen");
    function dispatch(event) {
        WebGame.dispatchEvent(event);
    }
    wgScreen.addEventListener("resize", dispatch);

    if (!wgScreen) {
        throw new ReferenceError("WebGame: can't find canvas#webgame-screen")
    }

    /**
     * @type {ScreenContext}
     */
    const context = wgScreen.getContext(config.screenType);

    webGame.screenType = config.screenType;
    webGame.ctx = context;
    webGame.screen = wgScreen;
    webGame.loops = new LoopTarget;

    const script = moduleScript(config.entryURL);
    document.body.appendChild(script);
}
