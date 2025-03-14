const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    origin: "bottom",
    duration: 1000,
    desktop: true,
    mobile: true,
};
// Hero Section
ScrollReveal().reveal(".hero-title", {
    ...defaultProps,
    delay: 100,
    origin: window.innerWidth > 768 ? "left" : "bottom",
});
ScrollReveal().reveal(".name", {
    ...defaultProps,
    distance: "0px",
    delay: 300,
    scale: 0,
});
ScrollReveal().reveal(".hero-cta", {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? "left" : "bottom",
});

/* About Section */
ScrollReveal().reveal(".section-title", {
    ...defaultProps,
    delay: 50,
    distance: "0px",
});
ScrollReveal().reveal(".about-wrapper__image", {
    ...defaultProps,
    delay: 200,
    scale: 0.5,
});

ScrollReveal().reveal(".about-wrapper__info", {
    ...defaultProps,
    delay: 250,
    distance: "100px",
    origin: window.innerWidth > 768 ? "left" : "top",
});

/* Projects Section */
ScrollReveal().reveal(".project-wrapper__text", {
    ...defaultProps,
    delay: 150,
    origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".project-wrapper__image", {
    ...defaultProps,
    delay: 150,
    scale: 0.9,
    origin: window.innerWidth > 768 ? "right" : "bottom",
});

/* Section Separator */
ScrollReveal().reveal(".section-separator-wrapper", {
    ...defaultProps,
    delay: 250,
    origin: window.innerWidth > 768 ? "left" : "bottom",
});

/* Experience Section */
ScrollReveal().reveal(".experience-wrapper__text", {
    ...defaultProps,
    delay: 300,
    origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".experience-wrapper__image", {
    ...defaultProps,
    delay: 300,
    scale: 0.9,
    origin: window.innerWidth > 768 ? "right" : "bottom",
});

/* Skills Section */
ScrollReveal().reveal(".skills-wrapper__text", {
    ...defaultProps,
    delay: 300,
    origin: window.innerWidth > 768 ? "left" : "bottom",
});

ScrollReveal().reveal(".skills-wrapper__logo", {
    ...defaultProps,
    delay: 300,
    scale: 0.9,
    origin: window.innerWidth > 768 ? "right" : "bottom",
});

/* Contact Section */
ScrollReveal().reveal(".contact-wrapper", {
    ...defaultProps,
    delay: 300,
});

ScrollReveal().reveal(".fa", {
    ...defaultProps,
    delay: 300,
    interval: 100,
});
