document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".element-to-reveal");

    const revealOnScroll = () => {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.remove("opacity-0", "translate-y-10");
          element.classList.add("opacity-100", "translate-y-0");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();
  });