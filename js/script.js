// Skills animation on scroll
const skillsSection = document.querySelector("#animatedSection");
const skillCards = document.querySelectorAll(".skill-card");

if (skillsSection) {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillCards.forEach((card, i) => {
                    setTimeout(() => card.classList.add("active"), i * 100);
                });
            }
        });
    }, { threshold: 0.1 });
    skillObserver.observe(skillsSection);
}

// Education timeline animation
const timelineBoxes = document.querySelectorAll('.timeline-box');
const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('show'), index * 300);
        }
    });
}, { threshold: 0.2 });
timelineBoxes.forEach(box => timelineObserver.observe(box));

// General scroll animations
function checkAnimations() {
    const elements = document.querySelectorAll(".animation");
    elements.forEach((el, i) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            setTimeout(() => el.classList.add("show"), i * 150);
        }
    });
}

window.addEventListener("scroll", checkAnimations);
window.addEventListener("load", checkAnimations);
