export function moduleScript(src) {
    const script = document.createElement("script");
    script.type = "module";
    script.src = src;

    return script;
}
