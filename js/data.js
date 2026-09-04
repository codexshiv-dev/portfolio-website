/**
 * PORTFOLIO DATA
 * ---------------------------------------------------------
 * This is the only file you should need to edit for routine
 * updates — new projects, new links, new learning items.
 * The HTML/CSS never has to change when the content does.
 *
 * Anything left as an empty string "" is intentionally blank
 * because I don't have a confirmed real value for it (email,
 * LeetCode/GFG profile links, exact repo URLs, a CV PDF).
 * The site is written to hide those buttons/fields gracefully
 * until you fill them in — nothing links out to a dead "#".
 * ---------------------------------------------------------
 */

const PORTFOLIO_DATA = {
  identity: {
    name: "Shivnath Gupta",
    shortName: "Shiv",
    initials: "SG",
    location: "Vadodara, Gujarat, India",
    role: "B.Tech CSE Student",
    // Rotating line under the hero heading — pulled from your own
    // earlier site copy, which described your focus areas honestly.
    focusLines: [
      "learning backend",
      "shipping real projects",
      "practicing DSA in Java",
      "learning DevOps basics",
    ],
  },

  links: {
    github: "https://github.com/codexshiv-dev",
    linkedin: "https://www.linkedin.com/in/shivnath-g-660b09253",
    email: "codexshiv.dev@gmail.com",
    leetcode: "", // add your LeetCode profile URL
    gfg: "", // add your GeeksforGeeks profile URL
    cvPdf: "", // add a hosted CV PDF URL if you have one; otherwise the
    // CV page can be saved as PDF straight from the browser (Ctrl/Cmd+P)
  },

  // The real progression, straight from your academic record.
  // This is the "proof of work" timeline — what you actually
  // studied and built, in order, not a marketing narrative.
  progressLog: [
    {
      stage: "Semester 1",
      title: "Fundamentals",
      detail:
        "C programming and the building blocks of the web — HTML and CSS.",
      tags: ["C", "HTML", "CSS"],
    },
    {
      stage: "Semester 2",
      title: "Structure",
      detail:
        "C++ and object-oriented programming, plus a first pass at AWS cloud fundamentals.",
      tags: ["C++", "OOP", "AWS Fundamentals"],
    },
    {
      stage: "Semester 3",
      title: "Depth",
      detail:
        "Java and Data Structures & Algorithms, while continuing to build with web technologies.",
      tags: ["Java", "DSA", "Web Dev"],
    },
    {
      stage: "Now",
      title: "Applied",
      detail:
        "Parallel industry training with Marquee Training alongside coursework, and using it to push UNiMART from a static frontend into a real client–server app.",
      tags: ["Node.js", "Express", "MongoDB", "Deployment"],
      current: true,
    },
  ],

  // Projects — ordered by how much they demonstrate real
  // engineering. UNiMART carries the most detail because it's
  // the most substantial thing that's actually been built.
  projects: [
    {
      name: "UNiMART",
      tagline: "A client–server e-commerce app, built one layer at a time",
      status: "Actively developed",
      description:
        "Started as a static frontend and has been progressively extended into a full client–server application — REST APIs for products, auth, cart, checkout, orders and admin operations, backed by MongoDB.",
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
        "Vercel",
        "Render",
      ],
      features: [
        "Product management — stock quantity, SKU, status, tags, ratings and reviews",
        "Cart and checkout — product validation, stock availability checks, order creation",
        "Token-based authentication guarding admin operations",
        "Cloudinary integration for product image storage",
        "Frontend deployed on Vercel, backend services deployed on Render",
      ],
      // These are the actual debugging areas listed on your CV —
      // real challenges, not invented ones.
      challenges: [
        "API request/response handling across frontend and backend",
        "Auth and protected-route logic",
        "MongoDB queries and ObjectId validation",
        "Stock handling and checkout validation edge cases",
      ],
      liveUrl: "https://codexshiv-dev.github.io/unimart-ecommerce/",
      // Verify this points at the current live deployment (Vercel
      // frontend / Render backend) rather than the older static build —
      // update in this file if the URL has since changed.
      githubUrl: "", // add the exact repo URL — falls back to your GitHub profile
      featured: true,
    },
    {
      name: "Kanban / Todo App",
      tagline: "Drag-and-drop task management",
      status: "Built",
      description:
        "A task management app with Todo, In Progress and Completed columns, built to practice DOM interaction and state handling.",
      stack: ["HTML", "CSS", "JavaScript"],
      features: [],
      challenges: [],
      liveUrl: "",
      githubUrl: "",
      featured: false,
    },
    {
      name: "This Portfolio",
      tagline: "Rebuilt from scratch as a data-driven site",
      status: "Live",
      description:
        "The site you're looking at — a from-scratch rebuild of an earlier portfolio, restructured so content updates don't require touching markup.",
      stack: ["HTML", "CSS", "JavaScript"],
      features: [],
      challenges: [],
      liveUrl: "",
      githubUrl: "https://github.com/codexshiv-dev/portfolio-website",
      featured: false,
    },
  ],

  // Real DSA topics from your coursework/practice — used instead
  // of invented problem counts or streaks.
  problemSolving: {
    platforms: ["LeetCode", "GeeksforGeeks"],
    language: "Java",
    topics: [
      "Arrays",
      "Binary Search",
      "Linked Lists",
      "Stacks",
      "Search-space reduction",
      "Time & space complexity",
      "Object-Oriented Programming",
    ],
  },

  currentlyLearning: [
    { topic: "Java", note: "Practicing", status: "practicing" },
    { topic: "Data Structures & Algorithms", note: "Practicing", status: "practicing" },
    { topic: "Backend Development", note: "Building", status: "building" },
    { topic: "Deployment & Cloud", note: "Building", status: "building" },
    { topic: "Software Engineering Practices", note: "Exploring", status: "exploring" },
  ],

  remote: {
    heading: "Open to remote opportunities",
    body: "Looking for internships, junior developer roles, or remote-friendly work where I can contribute to real projects, learn from experienced developers, and keep building.",
    types: ["Internship", "Junior Developer", "Freelance"],
  },
};
