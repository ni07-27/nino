const navItems = document.querySelectorAll('.site-nav .nav-item')
const pages = document.querySelectorAll('.page')
const explore = document.querySelector('.explore-btn')
const tabs = document.querySelectorAll('.destination-tabs .tab')
const panels = document.querySelectorAll('.destination-panels .panel')
const crewDots = document.querySelectorAll('.crew-dots .dot')
const crewSlides = document.querySelectorAll('.crew-slide')
const techDots = document.querySelectorAll('.tech-dot')
const techSlides = document.querySelectorAll('.tech-slide')
const menuToggle = document.querySelector('.menu-toggle')
const siteNav = document.querySelector('.site-nav')

const DATA = {
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64 and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}

const STORAGE = {
  section: 'ui.section',
  destination: 'ui.destination',
  crew: 'ui.crewIndex',
  tech: 'ui.techIndex'
}

function showSection(id) {
  pages.forEach(p => p.classList.remove('active'))
  const el = document.getElementById(id)
  if (!el) return
  el.classList.add('active')
  navItems.forEach(i => {
    i.classList.toggle('active', i.dataset.section === id)
  })
  if (window.innerWidth < 900) siteNav.classList.remove('open')
  if (window.innerWidth < 900) menuToggle.textContent = '☰'
  try { localStorage.setItem(STORAGE.section, id) } catch { }
}

navItems.forEach(i => {
  i.addEventListener('click', e => {
    e.preventDefault()
    const id = i.dataset.section
    showSection(id)
  })
})

if (explore) {
  explore.addEventListener('click', e => {
    e.preventDefault()
    const id = explore.dataset.section
    showSection(id)
  })
}

tabs.forEach(t => {
  t.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'))
    t.classList.add('active')
    panels.forEach(p => p.classList.toggle('active', p.id === t.dataset.target))
    try { localStorage.setItem(STORAGE.destination, t.dataset.target) } catch { }
  })
})

crewDots.forEach(d => {
  d.addEventListener('click', () => {
    const idx = Number(d.dataset.index)
    crewDots.forEach(x => x.classList.remove('active'))
    d.classList.add('active')
    crewSlides.forEach((s, i) => s.classList.toggle('active', i === idx))
    try { localStorage.setItem(STORAGE.crew, String(idx)) } catch { }
  })
})

techDots.forEach(d => {
  d.addEventListener('click', () => {
    const idx = Number(d.dataset.index)
    techDots.forEach(x => x.classList.remove('active'))
    d.classList.add('active')
    techSlides.forEach((s, i) => s.classList.toggle('active', i === idx))
    try { localStorage.setItem(STORAGE.tech, String(idx)) } catch { }
  })
})

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open')
  menuToggle.textContent = siteNav.classList.contains('open') ? '✕' : '☰'
})

function setImage(imgEl, src) {
  if (!imgEl || !src) return
  const fallback = imgEl.getAttribute('src')
  const test = new Image()
  test.onload = () => { imgEl.src = src }
  test.onerror = () => { imgEl.src = fallback }
  test.src = src
}

function hydrateDestinations() {
  // tabs text
  DATA.destinations.forEach((d, i) => {
    const tab = tabs[i]
    if (tab) tab.textContent = d.name
    const panel = document.getElementById(d.name.toLowerCase())
    if (!panel) return
    const title = panel.querySelector('.panel-content h1')
    const desc = panel.querySelector('.panel-content p')
    const stats = panel.querySelectorAll('.stats strong')
    const img = panel.querySelector('img')
    if (title) title.textContent = d.name
    if (desc) desc.textContent = d.description
    if (stats[0]) stats[0].textContent = d.distance.toUpperCase()
    if (stats[1]) stats[1].textContent = d.travel.toUpperCase()
    setImage(img, d.images.png)
  })
}

function hydrateCrew() {
  DATA.crew.forEach((c, i) => {
    const slide = crewSlides[i]
    if (!slide) return
    const role = slide.querySelector('.crew-content h4')
    const name = slide.querySelector('.crew-content h1')
    const bio = slide.querySelector('.crew-content p')
    const img = slide.querySelector('img')
    if (role) role.textContent = c.role
    if (name) name.textContent = c.name
    if (bio) bio.textContent = c.bio
    setImage(img, c.images.png)
  })
}

function hydrateTech() {
  DATA.technology.forEach((t, i) => {
    const slide = techSlides[i]
    if (!slide) return
    const name = slide.querySelector('.tech-content h1')
    const desc = slide.querySelector('.tech-content p')
    const img = slide.querySelector('img')
    if (name) name.textContent = t.name
    if (desc) desc.textContent = t.description
    setImage(img, t.images.landscape)
  })
}

hydrateDestinations()
hydrateCrew()
hydrateTech()

function restoreDestination(target) {
  const tab = Array.from(tabs).find(t => t.dataset.target === target)
  if (!tab) return
  tabs.forEach(x => x.classList.remove('active'))
  tab.classList.add('active')
  panels.forEach(p => p.classList.toggle('active', p.id === target))
}

function restoreCrew(idx) {
  const i = Number(idx)
  if (Number.isNaN(i)) return
  crewDots.forEach(x => x.classList.remove('active'))
  crewSlides.forEach((s, n) => s.classList.toggle('active', n === i))
  const dot = crewDots[i]
  if (dot) dot.classList.add('active')
}

function restoreTech(idx) {
  const i = Number(idx)
  if (Number.isNaN(i)) return
  techDots.forEach(x => x.classList.remove('active'))
  techSlides.forEach((s, n) => s.classList.toggle('active', n === i))
  const dot = techDots[i]
  if (dot) dot.classList.add('active')
}

function restoreAll() {
  let section
  try { section = localStorage.getItem(STORAGE.section) } catch { }
  if (section) showSection(section)
  let dest
  try { dest = localStorage.getItem(STORAGE.destination) } catch { }
  if (dest) restoreDestination(dest)
  let crewIdx
  try { crewIdx = localStorage.getItem(STORAGE.crew) } catch { }
  if (crewIdx) restoreCrew(crewIdx)
  let techIdx
  try { techIdx = localStorage.getItem(STORAGE.tech) } catch { }
  if (techIdx) restoreTech(techIdx)
}

restoreAll()
