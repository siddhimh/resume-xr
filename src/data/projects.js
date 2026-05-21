// Drop matching video files into /public/videos/ to enable hover/modal playback.
// Filenames must match the `video` paths below (e.g. /public/videos/pit-crew-vr.mp4).
export const PROJECTS = [
  {
    id: 'pit-crew-vr',
    title: 'Pit Crew VR',
    tagline: 'Collaborative multiplayer F1 pit stop',
    year: '2025',
    role: 'XR Developer',
    platform: 'Meta Quest',
    duration: 'Team project',
    stack: ['Unity', 'C#', 'XR Interaction Toolkit', 'Photon PUN 2', 'Mixamo'],
    description:
      'A three-player collaborative VR pit stop simulation where users coordinate as Spotter, Jack Operator, and Tire Swapper to complete a timed, five-step tire-change task in a shared virtual environment.',
    highlights: [
      'Built a three-player collaborative VR pit stop simulation where users coordinate as Spotter, Jack Operator, and Tire Swapper to complete a timed, five-step tire-change task in a shared virtual environment.',
      'Implemented networked role selection, scene transitions, synchronized object interactions, avatar animations, action audio, particle effects, and shared game-state logic using Photon PUN 2 RPCs.',
      'Developed a cinematic replay system with first-person VR views, fixed overview cameras, scripted director-camera movement, fade transitions, and Unity Recorder integration for highlight capture.'
    ],
    accent: ['#ff4a4a', '#ffb199'],
    video: '/videos/pit-crew-vr.mp4',
    links: [{ label: 'Case study', href: '#' }]
  },
  {
    id: 'hands-of-heritage',
    title: 'Hands of Heritage',
    tagline: 'Immersive cultural XR experience',
    year: '2025',
    role: 'XR Developer + Researcher',
    platform: 'Meta Quest',
    duration: 'Team project',
    stack: ['Unity', 'C#', 'Groq', 'Whisper', 'Google Cloud TTS', 'Blender', 'Mixamo'],
    description:
      'An immersive XR learning experience that teaches Warli, a traditional Indian folk art, through first-person village exploration, NPC-guided cultural storytelling, ritual-based interaction, and hands-on painting on virtual mud walls.',
    highlights: [
      'Built an immersive XR learning experience that teaches Warli, a traditional Indian folk art through first-person village exploration, NPC-guided cultural storytelling, ritual-based interaction, and hands-on painting on virtual mud walls.',
      'Designed scaffolded-to-freehand learning flows including shape tracing, motif assembly, ghost-outline guidance, bamboo-brush painting, and personalized drawing prompts generated through conversational AI dialogue.',
      'Conducted a mixed-methods user study with 12 participants, analyzing task duration, brush-stroke activity, canvas coverage, survey responses, and qualitative feedback to evaluate learning order, usability, comfort, and creative transfer.'
    ],
    accent: ['#b8743a', '#e8c697'],
    video: '/videos/hands-of-heritage.mp4',
    links: [{ label: 'Case study', href: '#' }]
  },
  {
    id: 'invisible-safety',
    title: 'Invisible Safety',
    tagline: 'XR urban risk visualization',
    year: '2024',
    role: 'XR + Data Visualization Developer',
    platform: 'WebXR · ARCore',
    duration: 'Team project',
    stack: ['Three.js', 'Deck.gl', 'Mapbox GL JS', 'WebXR', 'ARCore'],
    description:
      'An AR-based spatial visualization system for exploring hidden urban risks, combining a Deck.gl + Mapbox dashboard with a WebXR AR view that situates infrastructure and safety data in physical space.',
    highlights: [
      'Built an AR-based spatial visualization system for exploring hidden urban risks, combining a Deck.gl + Mapbox dashboard with a WebXR AR view that situates infrastructure and safety data in physical space.',
      'Designed layered geospatial visual encodings for subsurface infrastructure, street-level hazards, risk intensity, data confidence, and incident frequency using color, opacity, thickness, animation, and uncertainty regions.',
      'Integrated 6 NYC OpenData sources with 2M+ geocoded records spanning sewer networks, 311 incidents, DOT permits, NYPD complaints, Vision Zero collisions, and MapPLUTO footprints.'
    ],
    accent: ['#3a8fb8', '#a1d4e8'],
    video: '/videos/invisible-safety.mp4',
    links: [{ label: 'Live demo', href: '#' }, { label: 'Case study', href: '#' }]
  },
  {
    id: 'urban-digital-twin',
    title: 'Urban Digital Twin Dashboard',
    tagline: 'Interactive 3D city visualization',
    year: '2024',
    role: 'Full-stack + Data Visualization',
    platform: 'Web (browser)',
    duration: 'Solo project',
    stack: ['React', 'Three.js', 'Mapbox GL JS', 'GeoJSON', 'JavaScript'],
    description:
      'An interactive 3D urban visualization dashboard for exploring city-scale data through spatial navigation, layered geospatial views, and building-level interactions.',
    highlights: [
      'Built an interactive 3D urban visualization dashboard for exploring city-scale data through spatial navigation, layered geospatial views, and building-level interactions.',
      'Integrated Mapbox GL JS with Three.js to render 3D city context, custom visual layers, camera movement, and spatial data overlays.',
      'Designed a digital twin-style interface with dark-theme visual styling, depth cues, and interactive filtering to make complex urban datasets easier to interpret.'
    ],
    accent: ['#5a5acd', '#a8a8e8'],
    video: '/videos/urban-digital-twin.mp4',
    links: [{ label: 'Live demo', href: '#' }, { label: 'GitHub', href: '#' }]
  }
]
