export const stickMenu = () => {
  $(document).ready(function () {
    const handleScroll = () => {
      $(window).on("scroll", function () {
        let scrollTimeout;
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          if ($(window).scrollTop() > 52) {
            $("#header").addClass("stick");
          } else {
            $("#header").removeClass("stick");
          }
        }, 50);
      });
    };

    handleScroll();
  });
};
