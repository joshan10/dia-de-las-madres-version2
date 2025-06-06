// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar los efectos de animación para elementos con data-aos
  initializeAOS();

  // Inicializar la animación de flores cayendo
  initializeFlowers();

  // Configurar el formulario de mensajes
  setupMessageForm();
});

// Función simple de animaciones similares a AOS
function initializeAOS() {
  const elements = document.querySelectorAll("[data-aos]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationClass = element.getAttribute("data-aos");
          const delay = element.getAttribute("data-aos-delay") || 0;

          setTimeout(() => {
            element.classList.add(animationClass);
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
          }, delay);

          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(element);
  });
}

// Animación de flores cayendo
function initializeFlowers() {
  // Emojis de flores
  const flowers = ["🌸", "🌹", "🌺", "🌷", "💐"];

  // Crear una nueva flor cada segundo
  setInterval(() => {
    createFlower();
  }, 400);

  function createFlower() {
    // Crear el elemento flor
    const flower = document.createElement("div");

    // Establecer una flor aleatoria
    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    flower.textContent = randomFlower;
    flower.className = "flower";

    // Posición, tamaño y duración aleatorios
    const size = 20 + Math.random() * 20;
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 10;

    // Aplicar estilos
    flower.style.fontSize = `${size}px`;
    flower.style.left = `${left}vw`;
    flower.style.animationDuration = `${duration}s`;

    // Añadir al body
    document.body.appendChild(flower);

    // Eliminar después de que termine la animación
    setTimeout(() => {
      flower.remove();
    }, duration * 1000);
  }
}

// Función para mostrar toast/notificación
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.backgroundColor = "var(--mama-purple)";
  toast.style.color = "white";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "var(--border-radius)";
  toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  toast.style.zIndex = "1000";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(20px)";
  toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  }, 10);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// Mostrar toast de bienvenida después de cargar la página
setTimeout(() => {
  showToast("¡Feliz Día de las Madres!");
}, 1500);
