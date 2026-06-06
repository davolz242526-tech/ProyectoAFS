document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("ul.list-unstyled li a");
    let currentPath = window.location.pathname;

    // eliminar slash final si existe
    if (currentPath !== "/" && currentPath.endsWith("/")) {
        currentPath = currentPath.slice(0, -1);
    }

    links.forEach(link => {

        let linkPath = link.getAttribute("href");

        // limpiar slash final
        if (linkPath !== "/" && linkPath.endsWith("/")) {
            linkPath = linkPath.slice(0, -1);
        }

        link.classList.remove("active");

        if (currentPath === linkPath) {
            link.classList.add("active");
        }
    });

});