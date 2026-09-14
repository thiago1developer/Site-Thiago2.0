
// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.getElementById("menuMobile");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

        menu.style.position = "absolute";
        menu.style.top = "82px";
        menu.style.left = "0";
        menu.style.width = "100%";

        menu.style.flexDirection = "column";

        menu.style.background = "#060b16";

        menu.style.padding = "30px";

        menu.style.gap = "25px";

    }

});


// ===============================
// FECHAR MENU AO CLICAR
// ===============================

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 950) {

            menu.style.display = "none";

        }

    });

});


// ===============================
// HEADER AO ROLAR
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(3, 7, 17, 0.98)";

    } else {

        header.style.background = "rgba(6, 11, 22, 0.92)";

    }

});


// ===============================
// ANIMAÇÃO DE ELEMENTOS
// ===============================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


// Seleciona cards

const animatedElements = document.querySelectorAll(

    ".method-card, .product-card, .credential"

);


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(30px)";

    element.style.transition = "all 0.6s ease";

    observer.observe(element);

});


// ===============================
// LINKS DE PRODUTOS
// ===============================

document.querySelectorAll(".product-btn").forEach(button => {

    button.addEventListener("click", function(event) {

        const link = this.getAttribute("href");

        if (link === "#") {

            event.preventDefault();

            alert(
                "Em breve você poderá adquirir este programa diretamente pelo site!"
            );

        }

    });

});