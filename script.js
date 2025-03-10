function toggleFontSize() {
    const content = document.querySelector(".project-content");
    if (content.style.fontSize === "1.2rem") {
        content.style.fontSize = "1rem";
    } else {
        content.style.fontSize = "1.2rem";
    }
}