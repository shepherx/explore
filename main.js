const modal = document.getElementById('readMore');

const close = document.getElementById('close');

const modalContent = document.querySelector('.modal-content');

close.onclick = function () {

    modal.classList.add('modal-content-close');
    modal.classList.remove('modal-content');
    setTimeout(() => modal.style.display = "none", 300)
};

window.onclick = function (e) {
    if (e.target == modal) {
        modal.classList.add('modal-content-close');
        modal.classList.remove('modal-content');
        setTimeout(() => modal.style.display = "none", 300)
    }
}

