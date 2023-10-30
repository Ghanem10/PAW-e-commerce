const observer: IntersectionObserver = new IntersectionObserver((entery) => {
    entery.forEach((element: IntersectionObserverEntry) => {
        if (element.isIntersecting) {
            element.target.classList.add("show-left");
            element.target.classList.add("show-right");
            element.target.classList.add("show-bottom");
        }
    });
});

export { observer };