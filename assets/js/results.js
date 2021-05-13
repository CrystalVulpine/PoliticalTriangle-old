function drawResults() {
        
    let parser = document.createElement('a');
    parser.href = window.location.href;
    let vars = parser.search.substring(1).split('&');
    for (let i = 0; i < vars.length; i++) {
        let thevar = vars[i].split('=');
        if (thevar[0] === "left") {
            document.getElementById("left-score").innerHTML = parseFloat(thevar[1]);
            var left = parseFloat(thevar[1]) / 10;
        }
        if (thevar[0] === "right") {
            document.getElementById("right-score").innerHTML = parseFloat(thevar[1]);
            var right = parseFloat(thevar[1]) / 10;
        }
        if (thevar[0] === "lib") {
            document.getElementById("lib-score").innerHTML = parseFloat(thevar[1]);
            var lib = parseFloat(thevar[1]) / 10;
        }
    }
    
    let canvas = document.getElementById("canvas").getContext('2d');
    
    // stops the edge of the canvas from cutting off parts of the image
    let shift = 15;
    
    canvas.lineWidth = 2;
    canvas.beginPath();
    canvas.moveTo(180 + shift, 311.769 + shift);
    canvas.lineTo(360 + shift, 415.692 + shift);
    canvas.lineTo(540 + shift, 311.769 + shift);
    canvas.lineTo(360 + shift, 0 + shift);
    canvas.lineTo(180 + shift, 311.769 + shift);
    canvas.fillStyle = '#ffeeaa';
    canvas.fill();
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(180 + shift, 311.769 + shift);
    canvas.lineTo(360 + shift, 415.692 + shift);
    canvas.lineTo(360 + shift, 623.538 + shift);
    canvas.lineTo(0 + shift, 623.538 + shift);
    canvas.lineTo(180 + shift, 311.769 + shift);
    canvas.fillStyle = '#ffaaaa';
    canvas.fill();
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(360 + shift, 415.692 + shift);
    canvas.lineTo(540 + shift, 311.769 + shift);
    canvas.lineTo(720 + shift, 623.538 + shift);
    canvas.lineTo(360+ shift, 623.538 + shift);
    canvas.lineTo(360 + shift, 415.692 + shift);
    canvas.fillStyle = '#aaeeff';
    canvas.fill();
    canvas.stroke();

    // Make a thick outline
    canvas.lineWidth = 4;
    canvas.beginPath();
    canvas.moveTo(360 + shift, 0 + shift);
    canvas.lineTo(0 + shift, 623.538 + shift);
    canvas.lineTo(720 + shift, 623.538 + shift);
    canvas.lineTo(360 + shift, 0 + shift);
    canvas.stroke();

    canvas.lineWidth = 2;
    canvas.beginPath();
    canvas.arc(360 - (left * 360) + (right * 360) + shift, 415.692 + (left * 207.846) + (right * 207.846) - (lib * 415.692) + shift, 12, 0, Math.PI * 2);
    canvas.fillStyle = 'red';
    canvas.fill();
    canvas.stroke();
}