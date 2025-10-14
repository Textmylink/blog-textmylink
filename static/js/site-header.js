(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScroll = window.scrollY;
  let ticking = false;
  const threshold = 80;

  function updateHeader() {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > threshold) {
      header.classList.add("site-header--hidden");
    } else {
      header.classList.remove("site-header--hidden");
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    },
    { passive: true }
  );
})();
