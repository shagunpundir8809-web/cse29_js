
let fontSize = 16;

// Change Heading
function changeHeading() {
    document.getElementById("heading").innerText =
        document.getElementById("inputText").value;
}

// Random Background Color (1–2 line version)
function changeBackground() {
    document.body.style.backgroundColor =
        "rgb(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ")";
}

// Increase Font Size
function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

// Show / Hide Paragraph
function toggleParagraph() {
    let p = document.getElementById("para");
    p.style.display = (p.style.display === "none") ? "block" : "none";
}

// Reset Page
function resetPage() {
    location.reload();
}
