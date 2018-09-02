function openModal() {
    setTimeout(() => document.getElementById('jsModal').classList.add('open'), 1000);
}

let jsModal = document.getElementById('popup');
jsModal.addEventListener("click", openModal);
