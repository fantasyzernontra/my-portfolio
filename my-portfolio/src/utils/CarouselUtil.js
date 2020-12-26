const showDivs = (n, slideDom,slideIndex) => {
    if (n > slideDom.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slideDom.length }
    for (let i = 0; i < slideDom.length; i++) {
        slideDom[i].style.display = "none";
    }
    slideDom[slideIndex - 1].style.display = "block";
}

export {
    showDivs
}