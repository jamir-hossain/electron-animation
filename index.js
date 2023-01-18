document.querySelectorAll('.planet-icon').forEach(element => {
    // console.log(element)
    element.addEventListener('mouseenter', () => {
        element.style = "animation-play-state: paused;"
    })
    element.addEventListener('mouseleave', () => {
        element.style = "animation-play-state: running;"
    })
})