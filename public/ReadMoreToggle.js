document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".show-less").forEach(function(el) {
        el.addEventListener("click", function(e) {
            e.preventDefault();
            this.closest("details").removeAttribute("open");
        });
    });
});