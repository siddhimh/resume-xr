export const PROJECTS = [
  
  {
    id: 'hands-of-heritage',
    title: 'Hands of Heritage',
    tagline: 'Immersive cultural XR experience',
    year: '2026',
    type: 'Team project',
    platform: 'Meta Quest',
    demo: 'https://drive.google.com/file/d/1FdmWYslcEZZcKnix1qM6nal7YwTN4Lz9/view?usp=drive_link',
    stack: ['Unity', 'C#', 'Groq', 'Whisper', 'Google Cloud TTS', 'Blender', 'Mixamo'],
    description:
     'Hands of Heritage is an immersive XR experience that turns Warli, a traditional Indian folk art, into something you learn by doing. Instead of watching tutorials or reading about technique, you walk into a virtual village, listen to NPCs share the cultural context behind each motif, and paint directly onto mud walls with a bamboo brush. The interactions are gestural and conversational: you trace shapes with your hand, speak to NPCs to ask for guidance, and complete ritual steps in the order they were traditionally performed. The project explores how XR can teach a craft the way it has historically been passed down: through observation, ritual, and practice, not instruction.  ',
    highlights: [
      'Immersive XR learning experience teaching Warli through first-person village exploration, NPC-guided cultural storytelling, ritual-based interaction, and hands-on painting on virtual mud walls.',
      'Scaffolded-to-freehand learning flows including shape tracing, motif assembly, ghost-outline guidance, bamboo-brush painting, and personalized drawing prompts generated through conversational AI dialogue.',
      'Mixed-methods user study with 12 participants - analyzing task duration, brush-stroke activity, canvas coverage, survey responses, and qualitative feedback on learning order, usability, comfort, and creative transfer.'
    ],
    accent: ['#b8743a', '#e8c697'],
   
  },
  {
    id: 'pit-crew-vr',
    title: 'Pit Crew VR',
    tagline: 'Collaborative multiplayer F1 pit stop',
    year: '2026',
    type: 'Solo project',
    platform: 'Meta Quest',
    demo: '',
    stack: ['Unity', 'C#', 'XR Interaction Toolkit', 'Photon PUN 2', 'Mixamo'],
    description:
      'Pit Crew VR is a collaborative VR experience built around one of the most tightly coordinated moments in sport: an F1 pit stop. Three players split into asymmetric roles (Spotter, Jack Operator, Tire Swapper) and complete a timed, five-step tire change as a synchronized unit. The project explores what shared presence in VR actually requires when success depends on physical timing, role-specific actions, and real-time coordination, not just being in the same space.',
    highlights: [
      'Three-player collaborative VR pit stop where users coordinate as Spotter, Jack Operator, and Tire Swapper to complete a timed, five-step tire-change task in a shared virtual environment.',
      'Networked role selection, scene transitions, synchronized object interactions, avatar animations, action audio, particle effects, and shared game-state logic implemented through Photon PUN 2 RPCs.',
      'Cinematic replay system with first-person VR views, fixed overview cameras, scripted director-camera movement, fade transitions, and Unity Recorder integration for highlight capture.'
    ],
    accent: ['#b8743a', '#e8c697'],
   
  },
  {
    id: 'invisible-safety',
    title: 'Invisible Safety',
    tagline: 'XR urban risk visualization',
    year: '2026',
    type: 'Solo project',
    platform: 'WebXR · ARCore',
    demo: '',
    stack: ['Three.js', 'Deck.gl', 'Mapbox GL JS', 'WebXR', 'ARCore'],
    description:
      'Invisible Safety is an AR spatial visualization system that surfaces the urban risks usually trapped in spreadsheets: subsurface infrastructure, street-level hazards, and historic incident patterns. It pairs a top-down Deck.gl + Mapbox dashboard for analysis with a WebXR AR view for embodied exploration, so you can walk past a sidewalk and see the sewer lines, permits, and incident histories layered underneath it. The project asks what changes when safety data stops being something you read on a screen and starts being something you encounter in the place where it matters.',
    highlights: [
      'AR-based spatial visualization system combining a Deck.gl + Mapbox dashboard with a WebXR AR view that situates infrastructure and safety data in physical space.',
      'Layered geospatial visual encodings for subsurface infrastructure, street-level hazards, risk intensity, data confidence, and incident frequency using color, opacity, thickness, animation, and uncertainty regions.',
      'Integrated 6 NYC OpenData sources with 2M+ geocoded records: sewer networks, 311 incidents, DOT permits, NYPD complaints, Vision Zero collisions, and MapPLUTO footprints.'
    ],
    accent: ['#b8743a', '#e8c697'],
    
  },
  {
    id: 'urban-digital-twin',
    title: 'Urban Digital Twin Dashboard',
    tagline: 'Interactive 3D city visualization',
    year: '2025',
    type: 'Solo project',
    platform: 'Web Browser',
    demo: '',
    stack: ['React', 'Three.js', 'Mapbox GL JS', 'GeoJSON', 'JavaScript'],
    description:
     'Urban Digital Twin Dashboard is an interactive 3D urban visualization built to make city-scale data legible at a glance. The city itself is rendered as 3D context, with building geometry, street layouts, and surrounding terrain, so that data layers attach to real spatial reference points instead of floating over a flat map. That spatial grounding keeps everything in a single continuous frame: you can zoom from a neighborhood overview down to building-level detail without losing where you are. The visual language borrows from operations-center and digital-twin interfaces, dark-themed and depth-cued, designed for dense data without visual fatigue.',
    highlights: [
      'Interactive 3D urban visualization dashboard for exploring city-scale data through spatial navigation, layered geospatial views, and building-level interactions.',
      'Mapbox GL JS integrated with Three.js to render 3D city context, custom visual layers, camera movement, and spatial data overlays.',
      'Digital twin-style interface with dark-theme visual styling, depth cues, and interactive filtering to make complex urban datasets easier to interpret.'
    ],
    accent: ['#b8743a', '#e8c697'],
   
  }
]
