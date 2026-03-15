const data = [
  {
    id: 1,
    title: 'Discover innovative ways to decorate',
    paragraph: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
    desktopImage: 'images/desktop-image-hero-1.jpg',
    mobileImage: 'images/mobile-image-hero-1.jpg'
  },
  {
    id: 2,
    title: 'We are available all across the globe',
    paragraph: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    desktopImage: 'images/desktop-image-hero-2.jpg',
    mobileImage: 'images/mobile-image-hero-2.jpg'
  },
  {
    id: 3,
    title: 'Manufactured with the best materials',
    paragraph: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
    desktopImage: 'images/desktop-image-hero-3.jpg',
    mobileImage: 'images/mobile-image-hero-3.jpg'
  },
]

// ─── Nav ───
const hamburger = document.querySelector('.hamburger')
const navOverlay = document.querySelector('.nav-overlay')
const navBar = document.querySelector('.nav-bar')
const closeBtn = document.querySelector('.close-btn')

hamburger.addEventListener('click', () => {
  navBar.classList.add('active')
  navOverlay.classList.add('active')
})

closeBtn.addEventListener('click', closeNav)
navOverlay.addEventListener('click', closeNav)

function closeNav() {
  navBar.classList.remove('active')
  navOverlay.classList.remove('active')
}

// ─── Slider ───
const heroLeft = document.querySelector('.hero-left')
const title = document.querySelector('.title')
const paragraph = document.querySelector('.paragraph')
const leftBtn = document.querySelector('.left-icon')
const rightBtn = document.querySelector('.right-icon')

let currentIndex = 0

function isMobile() {
  return window.innerWidth <= 768
}

function updateSlide() {
  const item = data[currentIndex]

  title.textContent = item.title
  paragraph.textContent = item.paragraph

  const image = isMobile() ? item.mobileImage : item.desktopImage
  heroLeft.style.backgroundImage = `url(${image})`

  leftBtn.style.opacity = currentIndex === 0 ? '0.3' : '1'
  rightBtn.style.opacity = currentIndex === data.length - 1 ? '0.3' : '1'
}

leftBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    updateSlide()
  }
})

rightBtn.addEventListener('click', () => {
  if (currentIndex < data.length - 1) {
    currentIndex++
    updateSlide()
  }
})

// set initial opacity on load
updateSlide()