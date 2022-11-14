(() => {
    const startTime = Date.now();
    window.addEventListener("load", () => {
        const endTime = Date.now();
        document.getElementById("loadTime").innerText = `${
            endTime - startTime
        } ms`;
    });
})();
