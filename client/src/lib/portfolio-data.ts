import { PortfolioItem, ProjectDetail } from "./types";

// Import all images
import arcaneThumb from "@assets/arcane_thumb.png";
import bossfightThumb from "@assets/bossfight_thumb.png";
import factoryThumb from "@assets/factory_thumb.png";
import invasionThumb from "@assets/invasion_thumb.png";
import motorcycleThumb from "@assets/motorcycle_thumb.png";
import bmwThumb from "@assets/bmw_thumb.png";
import airplaneThumb from "@assets/airplane_thumb.png";
import extremeEThumb from "@assets/extreme_e_thumb.png";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Virtual Set",
    category: "3D Environment Design",
    imageSrc: arcaneThumb,
    alt: "Virtual Set Project"
  },
  {
    id: 2,
    title: "Bossfight",
    category: "Character Design & Animation",
    imageSrc: bossfightThumb,
    alt: "Bossfight Character Design"
  },
  {
    id: 3,
    title: "Robot Factory",
    category: "3D Environment",
    imageSrc: factoryThumb,
    alt: "Robot Factory Environment"
  },
  {
    id: 4,
    title: "Invasion",
    category: "VFX Composition",
    imageSrc: invasionThumb,
    alt: "Invasion VFX Project"
  },
  {
    id: 5,
    title: "Motorcycle",
    category: "3D Modeling & Rendering",
    imageSrc: motorcycleThumb,
    alt: "Motorcycle 3D Model"
  },
  {
    id: 6,
    title: "Car Animation",
    category: "Automotive Visualization",
    imageSrc: bmwThumb,
    alt: "Car Animation Project"
  },
  {
    id: 7,
    title: "Airplane Design",
    category: "Vehicle Modeling",
    imageSrc: airplaneThumb,
    alt: "Airplane Design Project"
  },
  {
    id: 8,
    title: "Extreme E",
    category: "Racing Visualization",
    imageSrc: extremeEThumb,
    alt: "Extreme E Racing Project"
  }
];

// Detailed project data
export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: "Virtual Set",
    category: "3D Environment Design",
    imageSrc: arcaneThumb,
    alt: "Virtual Set Project",
    description: "In this project, we created a virtual set with a dynamic lineup for a tournament themed around League of Legends in Unreal Engine, we worked in teams where everyone had a specific task.\n\nIn this project, I primarily worked on the tech art, such as the blueprints. I created the character selector, developed the shield lineup, and contributed to most of the design of the GUI elements. I also created some Smart Materials.",
    videoSrc: "https://www.youtube.com/embed/InWOXlqGquM",
    images: [
      arcaneThumb,
      "/src/assets/ue_nodes_virtualset.png",
      "/src/assets/ue_nodes2_virtualset.png"
    ],
    technologies: ["Blender", "Unreal Engine", "Substance Painter", "Photoshop"]
  },
  {
    id: 2,
    title: "Bossfight",
    category: "Character Design & Animation",
    imageSrc: bossfightThumb,
    alt: "Bossfight Character Design",
    description: "Bossfight is a character design and animation project for a major fantasy game. This imposing antagonist was modeled, textured, rigged, and animated to create an intimidating presence within the game. Special attention was given to designing memorable silhouettes and combat animations that create tension and excitement during gameplay.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-woman-dancing-in-cyber-punk-style-40839-large.mp4",
    images: [
      bossfightThumb,
      "https://images.unsplash.com/photo-1551197831-6ab738125013?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558244402-285bc9c209a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["ZBrush", "Maya", "Substance Painter", "Marvelous Designer", "Unity"],
    client: "Epic Games",
    date: "March 2023"
  },
  {
    id: 3,
    title: "Robot Factory",
    category: "3D Environment",
    imageSrc: factoryThumb,
    alt: "Robot Factory Environment",
    description: "Robot Factory is a detailed industrial environment created for a sci-fi game. This sprawling facility features automated assembly lines, robotic workers, and advanced machinery in a near-future setting. The environment balances functional industrial design with visual storytelling elements that hint at the world's technological development.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-blue-lights-30609-large.mp4",
    images: [
      factoryThumb,
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Blender", "Substance Designer", "Unreal Engine", "Redshift"],
    client: "Futuristic Games",
    date: "June 2023"
  },
  {
    id: 4,
    title: "Invasion",
    category: "VFX Composition",
    imageSrc: invasionThumb,
    alt: "Invasion VFX Project",
    description: "Invasion is a VFX sequence created for a science fiction film depicting an alien invasion of Earth. This complex compositing project integrates 3D elements with live-action footage to create a believable and dramatic extraterrestrial encounter. The work involved particle effects, motion tracking, atmospheric integration, and digital destruction elements.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-flying-over-a-luminous-spaceship-29848-large.mp4",
    images: [
      invasionThumb,
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Nuke", "Houdini", "After Effects", "Maya"],
    client: "Universal Pictures",
    date: "August 2023"
  },
  {
    id: 5,
    title: "Motorcycle",
    category: "3D Modeling & Rendering",
    imageSrc: motorcycleThumb,
    alt: "Motorcycle 3D Model",
    description: "Motorcycle is a high-detail 3D modeling and rendering project focusing on a custom motorcycle design. Every component of the bike was meticulously modeled and textured to achieve photorealistic results. The project explored advanced materials, lighting techniques, and composition to showcase the vehicle's engineering and aesthetics.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-traveling-through-a-stone-tunnel-with-neon-lights-48978-large.mp4",
    images: [
      motorcycleThumb,
      "https://images.unsplash.com/photo-1591209662757-ac2ae588a4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Blender", "Substance Painter", "V-Ray", "Photoshop"],
    client: "Custom Choppers Magazine",
    date: "October 2023"
  },
  {
    id: 6,
    title: "Car Animation",
    category: "Automotive Visualization",
    imageSrc: bmwThumb,
    alt: "Car Animation Project",
    description: "Car Animation is a dynamic automotive visualization showcasing a luxury vehicle in motion. This project combines detailed 3D modeling with sophisticated animation techniques to highlight the car's design features and performance capabilities. The animation sequence follows the vehicle through urban and scenic environments with cinematic camera work.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-mercury-moving-on-a-dark-surface-42046-large.mp4",
    images: [
      bmwThumb,
      "https://images.unsplash.com/photo-1533134242443-d4fd258f7055?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Cinema 4D", "Octane Render", "After Effects", "DaVinci Resolve"],
    client: "BMW",
    date: "November 2023"
  },
  {
    id: 7,
    title: "Airplane Design",
    category: "Vehicle Modeling",
    imageSrc: airplaneThumb,
    alt: "Airplane Design Project",
    description: "Airplane Design is a comprehensive 3D modeling project for a next-generation aircraft concept. The project involved aerodynamic research, technical blueprint development, and detailed 3D execution. The final visualization showcases both exterior aesthetics and interior cabin design with attention to real-world engineering constraints.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-blue-ink-swirling-in-water-21808-large.mp4",
    images: [
      airplaneThumb,
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518224973136-3d7ca12c832a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["SolidWorks", "Blender", "Keyshot", "Substance Painter"],
    client: "Aviation Design Inc.",
    date: "December 2023"
  },
  {
    id: 8,
    title: "Extreme E",
    category: "Racing Visualization",
    imageSrc: extremeEThumb,
    alt: "Extreme E Racing Project",
    description: "Extreme E is a high-energy racing visualization project for an electric off-road racing series. This project required creating dynamic visuals to showcase these innovative vehicles in challenging environments. The work combines photorealistic vehicle modeling with environmental effects and dramatic lighting to capture the excitement and sustainable mission of the racing series.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-driving-through-a-forest-road-1626-large.mp4",
    images: [
      extremeEThumb,
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564591111131-48131e118ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Cinema 4D", "Unreal Engine", "After Effects", "DaVinci Resolve"],
    client: "Extreme E Racing",
    date: "February 2024"
  },
  {
    id: 9,
    title: "Motion Graphics",
    category: "UI Animation",
    imageSrc: arcaneThumb,
    alt: "Motion Graphics UI Animation",
    description: "Motion Graphics is a UI animation project designed for a tech company's product interface. This work combines clean graphic design with fluid, purposeful animation to enhance user experience and brand identity. The animated elements guide users through complex information hierarchies while maintaining aesthetic consistency across multiple platforms.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-31061-large.mp4",
    images: [
      arcaneThumb,
      "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["After Effects", "Illustrator", "Principle", "Lottie"],
    client: "TechVision Inc",
    date: "March 2024"
  }
];

// Helper function to get a project detail by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  return projectDetails.find(project => project.id === id);
};
