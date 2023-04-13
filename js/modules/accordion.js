export function accordionEvents() {

    const accordion = document.querySelectorAll(".accordion-cont")
    const icon = document.querySelectorAll(".label")

    accordion.forEach(content => {

        content.addEventListener("click", function () {
            content.firstElementChild.classList.toggle("active")
            content.lastElementChild.classList.toggle("active")

            icon.forEach(e => {
                if (e.classList.contains('active')) {
                    e.firstElementChild.nextElementSibling.style.display = "none"
                    e.firstElementChild.style.color = "#099a71"
                    e.lastElementChild.style.display = "block"
                } else {
                    e.firstElementChild.style.color = "#000000"
                    e.firstElementChild.nextElementSibling.style.display = "block"
                    e.lastElementChild.style.display = "none"
                }

            })
        })

    });

}