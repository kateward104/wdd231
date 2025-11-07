function addModal() {
    modal = document.querySelector(".modal");
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
    modal = document.querySelector(".modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}


window.onclick = function (event) {
    const modal = this.document.querySelector(".modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector(".close-button");
const currentOpenModal = document.querySelector("#modal");

openModalButton.addEventListener("click", addModal);

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

closeModalButton.addEventListener("click", closeModal);
