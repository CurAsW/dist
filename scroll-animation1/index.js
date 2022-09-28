const box = document.querySelectorAll('.box')

window.addEventListener("scroll", checkBoxes)

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    box.forEach(items => {
        const boxTop = items.getBoundingClientRect().top
        if (boxTop < triggerBottom) {
            items.classList.add('show')
        } else {
            items.classList.remove('show')
        }
    })
}


checkBoxes()