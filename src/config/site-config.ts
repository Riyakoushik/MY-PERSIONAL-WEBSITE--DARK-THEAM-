// Site configuration and URL mappings
// Update these values to change links across the entire site

export const SITE_CONFIG = {
    name: "Thalari Koushik",
    shortName: "TK",
    title: "Aspiring Product Manager",
    email: "thalarikoushik143@gmail.com",
    location: "Kurnool, Andhra Pradesh",
}

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/thalari-koushik/",
    instagram: "https://www.instagram.com/tkjsr_/",
    email: "mailto:thalarikoushik143@gmail.com",
    resume: "https://drive.google.com/file/d/1Tn8Vh4vB0TmtnY432U3-l1snkhEIi3P1/view?usp=sharing",
    // Add more social links as needed
    // github: "https://github.com/yourusername",
    // twitter: "https://twitter.com/yourusername",
}

export const NAV_LINKS = {
    home: "#",
    about: "#about",
    projects: "#work",
    resume: SOCIAL_LINKS.resume,
    contact: "#footer",
}

// Project links (update when projects are live)
export const PROJECT_LINKS = {
    jarvis: "#",
    imageToPrompt: "#",
    aiResearch: "#",
    productCaseStudy: "#",
    uxCaseStudy: "#",
}

export default {
    SITE_CONFIG,
    SOCIAL_LINKS,
    NAV_LINKS,
    PROJECT_LINKS,
}
