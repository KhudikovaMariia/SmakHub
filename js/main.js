// SmakHub — спільний скрипт
(function () {
  // 1. Відкриття/закриття мобільного меню
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Закрити меню" : "Відкрити меню");
    });
  }

  // 2. Реєстрація: перевірка збігу паролів
  var password = document.getElementById("password");
  var confirm = document.getElementById("password-confirm");

  if (password && confirm) {
    var checkMatch = function () {
      confirm.setCustomValidity(
        confirm.value && confirm.value !== password.value ? "Паролі не збігаються" : ""
      );
    };
    password.addEventListener("input", checkMatch);
    confirm.addEventListener("input", checkMatch);
  }
})();
