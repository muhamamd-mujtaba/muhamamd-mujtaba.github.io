document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("js-ready");
  const header = document.querySelector(".site-header");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeToggleText = document.querySelector(".theme-toggle-text");
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const revealItems = document.querySelectorAll("[data-reveal]");
  const filterButtons = document.querySelectorAll("[data-filter-group] .filter-chip");
  const postCards = document.querySelectorAll(".post-card[data-tags]");
  const storageKey = "mujtaba-theme";

  const setTheme = (theme) => {
    body.dataset.theme = theme;

    if (!themeToggle || !themeToggleText) {
      return;
    }

    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggleText.textContent = isDark ? "Light Mode" : "Dark Mode";
  };

  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(storedTheme || preferredTheme);
  } catch (error) {
    setTheme("light");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);

      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch (error) {
        // Ignore storage errors and keep the theme in memory for this session.
      }
    });
  }

  const handleHeader = () => {
    if (!header) {
      return;
    }

    header.classList.toggle("scrolled", window.scrollY > 16);
  };

  handleHeader();
  window.addEventListener("scroll", handleHeader, { passive: true });

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
      observer.observe(item);
    });
  }

  if (filterButtons.length && postCards.length) {
    const applyFilter = (filter) => {
      postCards.forEach((card) => {
        const tags = (card.dataset.tags || "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean);
        const showCard = filter === "all" || tags.includes(filter);
        card.classList.toggle("is-hidden", !showCard);
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((chip) => chip.classList.remove("active"));
        button.classList.add("active");
        applyFilter(button.dataset.filter || "all");
      });
    });
  }
});
