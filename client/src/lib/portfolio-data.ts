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
      "@assets/ue_nodes_virtualset.png",
      "@assets/ue_nodes2_virtualset.png"
    ],
    technologies: ["Blender", "Unreal Engine", "Substance Painter", "Photoshop"]
  },
  {
    id: 2,
    title: "Bossfight",
    category: "Character Design & Animation",
    imageSrc: bossfightThumb,
    alt: "Bossfight Character Design",
    description: "In this project, we worked on a Bossfight scene based on an online challenge. This project was done in teams of three, where I worked on the monster and helped with the scene in Unreal Engine.\n\nI modeled, sculpted, rigged, and animated the 3D model for this project in Blender. I also did the texturing in Substance Painter. During the process, I created several animations, some of which did not make it into the final product. I also helped with setting up the scene and some basic particle effects in Unreal Engine.",
    videoSrc: "https://www.youtube.com/embed/BAHKMTgQBLE",
    images: [
      bossfightThumb,
      "https://images.unsplash.com/photo-1551197831-6ab738125013?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558244402-285bc9c209a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Blender", "Substance Painter", "Unreal Engine"],
    date: "March 2023"
  },
  {
    id: 3,
    title: "Robot Factory",
    category: "3D Environment",
    imageSrc: factoryThumb,
    alt: "Robot Factory Environment",
    description: "This is a project I made during the first year of my studies. The idea was to create a looping video of a robot factory in Unity, so that, as a class, we could have a long video for the school's open day.\n\nIt was a solo project, so I modeled, rigged, and animated everything in Maya. I also did the texturing in Substance Painter. In Unity, I assembled the scene, added some post-processing, and added some particles.",
    videoSrc: "https://www.youtube.com/embed/IahaNhiPxjE",
    images: [
      factoryThumb,
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Unity", "Maya", "Substance Painter"],
    date: "June 2023"
  },
  {
    id: 4,
    title: "Invasion",
    category: "VFX Composition",
    imageSrc: invasionThumb,
    alt: "Invasion VFX Project",
    description: "This is a project I worked on alone. We got to choose what we wanted to work on in school, so I chose to work in Unreal Engine to gain more experience with it.\n\nIn this project, I had the idea of a city being attacked by aliens. I used a city map from Unreal and added a spaceship model to it. I created a few shots and animated the rockets using splines. Then I made a PNG sequence of a kind of monster, which I also placed in the scene, and finally added some sound effects and did post-processing in After Effects.",
    videoSrc: "https://www.youtube.com/embed/mcSA92lROPw",
    images: [
      invasionThumb,
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Blender", "Unreal Engine", "After Effects"],
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
    title: "Warplanes",
    category: "Vehicle Modeling",
    imageSrc: "/attached_assets/warplanes_thumb.png",
    alt: "Warplanes Project",
    description: "Warplanes is a comprehensive 3D modeling project showcasing military aircraft design. The project demonstrates advanced modeling techniques, realistic texturing, and dynamic environment integration.",
    videoSrc: "https://www.youtube.com/embed/kd7MUfb-Cbc",
    images: [
      "/attached_assets/warplanes_thumb.png",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518224973136-3d7ca12c832a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Blender", "Substance Painter", "After Effects"],
    date: "December 2023"
  },
  {
    id: 8,
    title: "Extreme E",
    category: "Racing Visualization",
    imageSrc: extremeEThumb,
    alt: "Extreme E Racing Project",
    description: "'Extreme E' was an assignment we had to make for school using Unreal Engine 5. We were tasked with creating a realtime digital environment, being provided a car which we had to manually rig and animate. A lot of teamwork and storyboarding went into this project, together with 2 classmates.\n\nI was responsible for the desert and the factory scenes, I made the desert map using Gaea and importing it in Unreal. I then added foliage and some details from Quixelbridge. I downloaded the factory map and changed a few things to make a nice scene for the car. I rigged the car and animated it using a splinetool in unreal. In the end I added some dust particles for a better effect.",
    videoSrc: "https://www.youtube.com/embed/2wlNoVFcmbs",
    images: [
      extremeEThumb,
      "https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564591111131-48131e118ac0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Unreal Engine 5", "Gaea", "Blender"],
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
