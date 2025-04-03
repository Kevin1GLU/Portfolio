import { PortfolioItem, ProjectDetail } from "./types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "3D Environment Design",
    imageSrc: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 1"
  },
  {
    id: 2,
    title: "Cybernetic Entity",
    category: "Character Modeling",
    imageSrc: "https://images.unsplash.com/photo-1561059644-d5880fb276d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 2"
  },
  {
    id: 3,
    title: "Quantum Particles",
    category: "VFX Simulation",
    imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 3"
  },
  {
    id: 4,
    title: "Orbital Station",
    category: "3D Architecture",
    imageSrc: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 4"
  },
  {
    id: 5,
    title: "Crystal Formations",
    category: "Procedural Generation",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 5"
  },
  {
    id: 6,
    title: "Liquid Metal",
    category: "Fluid Dynamics",
    imageSrc: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 6"
  },
  {
    id: 7,
    title: "Bioluminescent",
    category: "Particle Effects",
    imageSrc: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 7"
  },
  {
    id: 8,
    title: "Ancient Temple",
    category: "Environment Design",
    imageSrc: "https://images.unsplash.com/photo-1506873562491-3e70e6482f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 8"
  },
  {
    id: 9,
    title: "Holographic Interface",
    category: "UI Motion Graphics",
    imageSrc: "https://images.unsplash.com/photo-1633127110417-394b157138a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 9"
  }
];

// Detailed project data
export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "3D Environment Design",
    imageSrc: "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 1",
    description: "Neon Dreams is a futuristic cityscape environment designed for an upcoming sci-fi game. The project focused on creating a vibrant nighttime urban setting with detailed neon lighting, reflective surfaces, and atmospheric effects. Each building was individually modeled and textured to create a cohesive but varied skyline.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-city-traffic-lights-in-the-rain-4335-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1565115021788-6d3f1ede4980?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599802737316-461c7a8ae9de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Blender", "Substance Painter", "Unreal Engine", "After Effects"],
    client: "GameTech Studios",
    date: "January 2023"
  },
  {
    id: 2,
    title: "Cybernetic Entity",
    category: "Character Modeling",
    imageSrc: "https://images.unsplash.com/photo-1561059644-d5880fb276d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 2",
    description: "Cybernetic Entity is a high-poly character model developed for a science fiction short film. The design blends organic and mechanical elements to create a unique hybrid being. Special attention was paid to surface details and realistic material properties to ensure the character would integrate seamlessly with live-action footage.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-woman-dancing-in-cyber-punk-style-40839-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1549037941-38a3a4fca6b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551197831-6ab738125013?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558244402-285bc9c209a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["ZBrush", "Maya", "Substance Painter", "Marvelous Designer", "Cinema 4D"],
    client: "Neon Films",
    date: "March 2023"
  },
  {
    id: 3,
    title: "Quantum Particles",
    category: "VFX Simulation",
    imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 3",
    description: "Quantum Particles is a complex particle simulation created for a documentary about quantum physics. The project required developing custom particle behaviors that could visualize abstract scientific concepts while maintaining visual appeal. The final sequences demonstrate quantum entanglement, wave-particle duality, and quantum tunneling in a visually intuitive way.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-blue-lights-30609-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Houdini", "Redshift", "After Effects", "Nuke"],
    client: "Science Vision Productions",
    date: "June 2023"
  },
  {
    id: 4,
    title: "Orbital Station",
    category: "3D Architecture",
    imageSrc: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 4",
    description: "Orbital Station is a detailed architectural visualization of a near-future space habitat. The design incorporates realistic space engineering principles while maintaining aesthetic appeal. The station features both exterior views showing solar arrays and docking mechanisms, and interior spaces with living quarters and common areas, all designed with attention to practical functionality in a zero-gravity environment.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-luminous-spaceship-29848-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Blender", "Substance Painter", "V-Ray", "3ds Max"],
    client: "SpaceViz Media",
    date: "August 2023"
  },
  {
    id: 5,
    title: "Crystal Formations",
    category: "Procedural Generation",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 5",
    description: "Crystal Formations is a procedural asset generation system developed for an open-world fantasy game. The system allows for the dynamic creation of unique crystal clusters with controllable parameters for size, density, color variation, and light refraction properties. The generated assets maintain high visual quality while being optimized for real-time rendering in a game engine.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-traveling-through-a-stone-tunnel-with-neon-lights-48978-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1598965402089-897e8177bdb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591209662757-ac2ae588a4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Houdini", "Substance Designer", "Unity", "Custom Shaders"],
    client: "Arcane Interactive",
    date: "October 2023"
  },
  {
    id: 6,
    title: "Liquid Metal",
    category: "Fluid Dynamics",
    imageSrc: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 6",
    description: "Liquid Metal is a fluid simulation project focused on creating realistic metallic fluid behaviors. The simulation accounts for surface tension, viscosity, and reflective properties specific to molten metals. This technical demo was created to showcase advanced fluid dynamics capabilities for high-end visual effects in film production, particularly for science fiction transformation sequences.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-mercury-moving-on-a-dark-surface-42046-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1629206933382-c951d4e185c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533134242443-d4fd258f7055?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["RealFlow", "Maya", "Arnold Renderer", "Nuke"],
    client: "FX Animation Studios",
    date: "November 2023"
  },
  {
    id: 7,
    title: "Bioluminescent",
    category: "Particle Effects",
    imageSrc: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 7",
    description: "Bioluminescent is a particle system designed to mimic organic light emission found in deep-sea creatures and certain fungi. The system incorporates physics-based behaviors to create realistic movement patterns while allowing for artistic control. The particles respond to virtual currents and can be triggered by proximity to create interactive light displays for an immersive installation.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-blue-ink-swirling-in-water-21808-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518224973136-3d7ca12c832a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Unity", "VFX Graph", "TouchDesigner", "Custom C# Scripts"],
    client: "Modern Art Museum",
    date: "December 2023"
  },
  {
    id: 8,
    title: "Ancient Temple",
    category: "Environment Design",
    imageSrc: "https://images.unsplash.com/photo-1506873562491-3e70e6482f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 8",
    description: "Ancient Temple is a detailed environment recreation of a fictional Mesoamerican temple complex. The project combines historically accurate architectural elements with imaginative details to create an immersive setting for an archaeological adventure game. The environment includes weathered stone structures, overgrown vegetation, dynamic lighting for different times of day, and atmospheric particles for dust and pollen.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-mayan-pyramids-in-the-jungle-seen-from-above-4235-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1619448121670-a266da596761?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604538007193-a09a66c214d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520275126937-eff5d9adf159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Blender", "Maya", "Substance Designer", "Unreal Engine"],
    client: "Adventure Games Inc.",
    date: "February 2024"
  },
  {
    id: 9,
    title: "Holographic Interface",
    category: "UI Motion Graphics",
    imageSrc: "https://images.unsplash.com/photo-1633127110417-394b157138a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "VFX Project 9",
    description: "Holographic Interface is a futuristic UI design and animation project created for a science fiction film. The interface includes data visualization elements, scanning systems, and command interfaces designed to be both visually appealing and suggest functional logic. The designs feature translucent layers, particle effects, and responsive animations that react to the actors' movements in post-production.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-31061-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["After Effects", "Cinema 4D", "Trapcode Suite", "Processing"],
    client: "Future Vision Films",
    date: "March 2024"
  }
];

// Helper function to get a project detail by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  return projectDetails.find(project => project.id === id);
};
