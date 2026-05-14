document.addEventListener("DOMContentLoaded", () => {

  /* MOBILE MENU */

  const menuButton = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector("#mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
    mobileMenu.classList.remove("is-open");
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      menuButton.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Open menu" : "Close menu"
      );

      mobileMenu.classList.toggle("is-open");
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 997) {
      closeMenu();
    }
  });



  /* EMAIL LINK OBFUSCATION */

  const emailLinks = document.querySelectorAll(".email-link");

  emailLinks.forEach((link) => {
    const user = link.dataset.u;
    const domain = link.dataset.d;
    const tld = link.dataset.t;

    const email = `${user}@${domain}.${tld}`;

    link.addEventListener("click", (event) => {
      event.preventDefault();

      window.location.href = `mailto:${email}`;
    });
  });

});