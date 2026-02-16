 // Intersection Observer setup
        const section = document.querySelector("#animatedSection");
        const boxes = document.querySelectorAll(".skills-image");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    boxes.forEach(box => box.classList.add("active"));
                }
            });
        }, { threshold: 0.5 });

        observer.observe(section);

//Services

window.addEventListener("scroll", function () {
  let boxes = document.querySelectorAll(".animation");
  boxes.forEach((box, index) => {
    let boxPosition = box.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (boxPosition < screenHeight - 100) {
      // ek ek karke girne ka delay
      setTimeout(() => {
        box.classList.add("show");
      }, index * 300); // 0.4s gap har box ke liye
    }
  });
});

 // Intersection Observer for scroll animation
        const boxe = document.querySelectorAll('.timeline-box');
        const observerr = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // sequential delay for each box
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, index * 400); // 400ms gap between each box
                }
            });
        }, { threshold: 0.2 });

        boxe.forEach(box => {
            observerr.observe(box);
        });