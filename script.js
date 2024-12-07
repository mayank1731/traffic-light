function turnOnLights() {
    const stopButton = document.getElementById("stopButton");
    const readyButton = document.getElementById("readyButton");
    const goButton = document.getElementById("goButton");

    const stopLight = document.getElementById("stopLight");
    const readyLight = document.getElementById("readyLight");
    const goLight = document.getElementById("goLight");

   
    if (stopButton && stopLight) {
        stopButton.addEventListener('click', () => {
            stopButton.style.backgroundColor="red";
            readyButton.style.backgroundColor="";
            goButton.style.backgroundColor="";
            stopLight.style.backgroundColor = "red";
            readyLight.style.backgroundColor = "";
            goLight.style.backgroundColor = "";

        });
    }
    if (readyButton && readyLight) {
        readyButton.addEventListener('click', () => {
            readyButton.style.backgroundColor="yellow";
            stopButton.style.backgroundColor="";
            goButton.style.backgroundColor="";
            readyLight.style.backgroundColor = "yellow";
            stopLight.style.backgroundColor = "";
            goLight.style.backgroundColor = "";
        });
    }
    if (goButton && goLight) {
        goButton.addEventListener('click', () => {
            goButton.style.backgroundColor="green";
            readyButton.style.backgroundColor="";
            stopButton.style.backgroundColor="";
            goLight.style.backgroundColor = "green";
            stopLight.style.backgroundColor = "";
            readyLight.style.backgroundColor = "";
        });
    }
}
turnOnLights();



