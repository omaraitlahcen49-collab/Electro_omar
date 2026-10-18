const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Recherche dans les produits existants
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const query = searchInput.value.trim().toLowerCase();

        productCards.forEach(function (card) {
            const productText = card.textContent.toLowerCase();
            card.style.display = productText.includes(query) ? "" : "none";
        });

        document.getElementById("produits").scrollIntoView({
            behavior: "smooth"
        });
    });

    searchInput.addEventListener("input", function () {
        if (searchInput.value.trim() === "") {
            productCards.forEach(function (card) {
                card.style.display = "";
            });
        }
    });
}