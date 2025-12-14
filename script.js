function checkSpeed() {
    const image = new Image();
    const imageSize = 500000; // size in bytes (approx)
    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";

    const startTime = new Date().getTime();

    image.onload = function () {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000;
        const bitsLoaded = imageSize * 8;
        const speedBps = bitsLoaded / duration;
        const speedMbps = (speedBps / (1024 * 1024)).toFixed(2);

        document.getElementById("speed").innerHTML =
            `Download Speed: <strong>${speedMbps} Mbps</strong>`;
    };

    image.onerror = function () {
        document.getElementById("speed").innerText =
            "Error checking speed. Please try again.";
    };

    image.src = imageUrl + "?n=" + Math.random();
}