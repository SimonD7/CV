document.addEventListener("DOMContentLoaded", function () {
    const sectionTitles = document.querySelectorAll("h2[id$='Title']");

    sectionTitles.forEach((title) => {
        title.addEventListener("click", () => {
            const section = title.parentElement;
            const ul = section.querySelector("ul");

            if (ul.style.display === "none" || ul.style.display === "") {
                ul.style.display = "block";
            } else {
                ul.style.display = "none";
            }
        });
    });
});