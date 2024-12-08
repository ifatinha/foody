export const scrollToTop = () => {
  const btnScroll = document.querySelector("#goToTop");

  if (!btnScroll) return;

  const moveToTop = (event) => {
    if (event?.type === "touchstart") event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleButtonVisibility = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 40) {
      btnScroll.classList.add("visible");
    } else {
      btnScroll.classList.remove("visible");
    }
  };

  ["touchstart", "click"].forEach((eventType) => {
    btnScroll.addEventListener(eventType, moveToTop);
  });

  window.addEventListener("scroll", toggleButtonVisibility);
};
