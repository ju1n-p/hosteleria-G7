document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("auth-modal");
  const closeBtn = document.querySelector(".modal-close");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const formLogin = document.getElementById("form-login");
  const formRegister = document.getElementById("form-register");
  const userStatusContainer = document.getElementById("user-status");

  let pendingWaUrl = null;

  function getActiveUser() {
    return JSON.parse(localStorage.getItem("hotel_active_user"));
  }

  function getUsers() {
    return JSON.parse(localStorage.getItem("hotel_users")) || [];
  }

  function renderUserHeader() {
    const activeUser = getActiveUser();
    if (activeUser) {
      userStatusContainer.innerHTML = `
        <span class="user-welcome">👋 Hola, <strong>${activeUser.nombre}</strong></span>
        <button id="btn-logout" class="btn-nav">Cerrar Sesión</button>
      `;
      document.getElementById("btn-logout").addEventListener("click", () => {
        localStorage.removeItem("hotel_active_user");
        renderUserHeader();
      });
    } else {
      userStatusContainer.innerHTML = `
        <button id="btn-open-login" class="btn-nav">Iniciar Sesión / Registro</button>
      `;
      document
        .getElementById("btn-open-login")
        .addEventListener("click", () => {
          openModal();
        });
    }
  }

  function openModal(waUrl = null) {
    pendingWaUrl = waUrl;
    modal.classList.add("activo");
  }

  function closeModal() {
    modal.classList.remove("activo");
    pendingWaUrl = null;
  }

  closeBtn?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("activa"));
      btn.classList.add("activa");

      if (btn.dataset.tab === "login") {
        formLogin.style.display = "flex";
        formRegister.style.display = "none";
      } else {
        formLogin.style.display = "none";
        formRegister.style.display = "flex";
      }
    });
  });

  formRegister?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("reg-nombre").value.trim();
    const email = document
      .getElementById("reg-email")
      .value.trim()
      .toLowerCase();
    const password = document.getElementById("reg-pass").value;

    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      alert("Este correo ya está registrado. Por favor inicia sesión.");
      return;
    }

    const newUser = { nombre, email, password };
    users.push(newUser);
    localStorage.setItem("hotel_users", JSON.stringify(users));
    localStorage.setItem("hotel_active_user", JSON.stringify(newUser));

    formRegister.reset();
    closeModal();
    renderUserHeader();

    if (pendingWaUrl) {
      window.open(pendingWaUrl, "_blank");
    }
  });

  formLogin?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document
      .getElementById("login-email")
      .value.trim()
      .toLowerCase();
    const password = document.getElementById("login-pass").value;

    const users = getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      alert("Correo o contraseña incorrectos.");
      return;
    }

    localStorage.setItem("hotel_active_user", JSON.stringify(user));
    formLogin.reset();
    closeModal();
    renderUserHeader();

    if (pendingWaUrl) {
      window.open(pendingWaUrl, "_blank");
    }
  });

  const reservaButtons = document.querySelectorAll(".boton-reservar");
  reservaButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetUrl = btn.getAttribute("href");
      const activeUser = getActiveUser();

      if (activeUser) {
        window.open(targetUrl, "_blank");
      } else {
        openModal(targetUrl);
      }
    });
  });

  renderUserHeader();
});
