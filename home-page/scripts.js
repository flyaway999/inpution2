function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.getElementById("carousel-inner")
  const items = Array.from(carouselInner.children)

  shuffleArray(items)

  items.forEach((item) => item.classList.remove("active"))
  if (items.length > 0) items[0].classList.add("active")

  carouselInner.innerHTML = ""
  items.forEach((item) => carouselInner.appendChild(item))
})

// Advanced animations and interactions
document.addEventListener("DOMContentLoaded", () => {
  // Add stagger animation to feature cards
  const featureCards = document.querySelectorAll(".feature-card")
  featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })

  // Add hover sound effect (optional)
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .action-btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px) scale(1.02)"
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0) scale(1)"
    })
  })

  // Dynamic gradient animation
  let hue = 0
  setInterval(() => {
    hue = (hue + 1) % 360
    document.documentElement.style.setProperty("--dynamic-hue", hue)
  }, 100)
})