export const UI = {
  initEntranceOverlay() {
    const overlay = document.getElementById("entranceOverlay");
    if (!overlay) return;

    // Simulate loading sequence
    setTimeout(() => {
      const loadingBar = overlay.querySelector(".loading-bar-fill");
      if (loadingBar) loadingBar.style.width = "100%";
    }, 500);

    // Hide overlay after animation
    setTimeout(() => {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 1000);
    }, 3500);
  },

  initParallaxScrolling() {
    document.addEventListener("mousemove", (e) => {
      const layers = document.querySelectorAll(".parallax-layer");
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;

      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.5;
        const xOffset = x * speed;
        const yOffset = y * speed;
        layer.style.transform = `translateX(${xOffset}px) translateY(${yOffset}px)`;
      });
    });
  },
};
