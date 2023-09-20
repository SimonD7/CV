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

document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    // Afficher la flèche lorsque l'utilisateur fait défiler vers le bas
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Faire défiler vers le haut lorsque la flèche est cliquée
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Pour une animation de défilement fluide (optionnel)
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menuToggle");
    var menu = document.getElementById("menu");
    var isMenuOpen = false; // Pour suivre si le menu est actuellement ouvert

    // Fonction pour ouvrir le menu
    function openMenu() {
        menu.style.left = "0px";
        isMenuOpen = true;
    }

    // Fonction pour fermer le menu
    function closeMenu() {
        menu.style.left = "-250px";
        isMenuOpen = false;
    }

    // Afficher le menu lorsque le bouton est cliqué
    menuToggle.addEventListener("click", function() {
        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    // Afficher le menu lorsque la souris est à proximité de la gauche de l'écran
    document.addEventListener("mousemove", function(event) {
        if (event.clientX <= 20) {
            openMenu();
        } else if (!isMenuOpen) {
            // Fermer le menu après un délai de 1 seconde (1000 millisecondes)
            setTimeout(closeMenu, 2500);
        }
    });
});