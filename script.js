const projectData = {
  casatech: {
    title: "The CasaTech.co",
    type: "TECHNOLOGY BRAND / PROMOTIONAL COMMUNICATION",
    description: "A technology retail concept presented around Chromebook products, dependable pricing and free nationwide door delivery. The supplied cover positions the offer as accessible, convenient and technology-focused.",
    focus: "Communicate a Chromebook retail offer and make the value proposition easy to understand: smart laptops, reliable prices and free delivery nationwide.",
    visual: "A high-contrast purple gradient, oversized typography and directional graphic details create a confident, contemporary technology identity. The headline and delivery message carry the main communication.",
    skills: "Brand presentation, promotional messaging, visual communication and digital marketing are relevant to the project focus and are capabilities listed in my CV.",
    scope: "The supplied cover identifies the brand and its offer, but does not break down my individual tasks or assign specific software to this project. My CV lists Canva, Photoshop and Figma among my creative tools.",
    image: "assets/casatech-project.png",
    alt: "The CasaTech.co purple presentation cover describing Chromebook offers and nationwide delivery",
    link: "https://canva.link/jl5u1j3f965826y",
    format: "Brand and promotional presentation"
  },
  football: {
    title: "Premium Football Jerseys",
    type: "CAMPAIGN STRUCTURE / SPORTS RETAIL",
    description: "A campaign structure presentation for premium football jerseys. The supplied visual introduces a product-led launch concept using a featured football shirt and a clear campaign launch cue.",
    focus: "Build a campaign presentation around premium football jerseys, with the product as the central point of attention and a launch moment as the call to action.",
    visual: "A vivid purple-to-blue background contrasts with the red jersey. Framed typography, directional arrows and a launch label give the cover an energetic, promotional character.",
    skills: "Campaign planning, graphic design, content presentation and visual communication are relevant capabilities listed in my CV. The cover demonstrates a product-led promotional direction.",
    scope: "The supplied cover confirms the campaign theme and launch framing, but does not specify my exact responsibilities, campaign channels, software used or campaign results. My CV lists Canva, Photoshop and Figma among my creative tools.",
    image: "assets/football-jerseys-project.png",
    alt: "Premium football jersey campaign cover featuring a red football shirt",
    link: "https://canva.link/ov7141iculnb7d2",
    format: "Campaign structure presentation"
  },
  mushroom: {
    title: "Oyster Mushroom",
    type: "BRAND CONTENT / PRODUCT COMMUNICATION",
    description: "A brand content pack centred on oyster mushrooms. Its cover introduces the subject through natural product imagery and the positioning words Fresh, Natural and Sustainable.",
    focus: "Present oyster mushrooms through a clear brand-content theme that foregrounds freshness, natural qualities and sustainability.",
    visual: "A full-bleed mushroom photograph, warm neutral tones and restrained typography create an organic, editorial feel. The minimal layout keeps attention on the product and its three defining words.",
    skills: "Brand content, graphic design, content creation and visual communication are relevant capabilities listed in my CV and reflected in the supplied presentation cover.",
    scope: "The cover confirms the brand-content format and stated positioning, but does not detail my exact deliverables, audience research, individual tasks or software used. My CV lists Canva, Photoshop and Figma among my creative tools.",
    image: "assets/oyster-mushroom-project.webp",
    alt: "Oyster Mushroom brand content pack cover with mushroom photography",
    link: "https://canva.link/vbttepn6tlkx1pw",
    format: "Brand content pack"
  },
  feli: {
    title: "Feli Nandi Restaurant",
    type: "BRAND STRATEGY / HOSPITALITY",
    description: "A restaurant brand strategy presentation introduced through a personality-led cover and the positioning line Traditional Flavors, Timeless Experience.",
    focus: "Frame a restaurant brand around traditional flavours and a timeless experience, using the cover to establish a recognisable hospitality identity.",
    visual: "A black background, strong white typography and yellow graphic accents create a bold, memorable contrast. The featured person and restaurant identity add a human, welcoming element.",
    skills: "Brand strategy, brand voice, graphic design and visual communication are relevant capabilities listed in my CV and align with the themes visible on the supplied cover.",
    scope: "The supplied cover confirms the strategy presentation and its positioning line, but does not specify my exact responsibilities, strategy framework, software used or business outcomes. My CV lists Canva, Photoshop and Figma among my creative tools.",
    image: "assets/feli-nandi-project.webp",
    alt: "Feli Nandi Restaurant brand strategy cover with black and yellow visual identity",
    link: "https://canva.link/em4ivc4a2ubuy1v",
    format: "Restaurant brand strategy presentation"
  }
};

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalType = document.getElementById("modal-type");
const modalDescription = document.getElementById("modal-description");
const modalFormat = document.getElementById("modal-format");
const modalLink = document.getElementById("modal-link");
let lastFocused = null;

function openProject(key) {
  const project = projectData[key];
  if (!project || !modal) return;
  lastFocused = document.activeElement;
  modalImage.src = project.image;
  modalImage.alt = project.alt;
  modalTitle.textContent = project.title;
  modalType.textContent = project.type;
  modalDescription.textContent = project.description;
  modalFormat.textContent = project.format;
  modalLink.href = project.link;
  document.getElementById("modal-focus").textContent = project.focus;
  document.getElementById("modal-visual").textContent = project.visual;
  document.getElementById("modal-skills").textContent = project.skills;
  document.getElementById("modal-scope").textContent = project.scope;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}
function closeProject() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}
document.querySelectorAll(".project-card").forEach(card => {
  card.querySelectorAll(".project-image,.arrow-button").forEach(control => {
    control.addEventListener("click", () => openProject(card.dataset.project));
  });
});
if (modal) {
  modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeProject));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("open")) closeProject();
  });
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(".section-kicker,.intro-grid,.about-strip,.skill-card,.project-card,.timeline-item,.cert-block,.service-row,.contact-panel");
revealTargets.forEach(el => el.classList.add("reveal"));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add("visible"));
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));
}
