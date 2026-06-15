import { HANDS_OF_HERITAGE_CASE_STUDY } from './caseStudies/hands-of-heritage.js'
import { URBAN_DIGITAL_TWIN_CASE_STUDY } from './caseStudies/urban-digital-twin.js'
import { PIT_CREW_VR_CASE_STUDY } from './caseStudies/pit-crew-vr.js'
import { INVISIBLE_SAFETY_CASE_STUDY } from './caseStudies/invisible-safety.js'

export const PROJECTS = [
  
  {
    id: 'hands-of-heritage',
    title: 'Hands of Heritage',
    tagline: 'Immersive VR learning system for Warli art and cultural storytelling',
    year: '2026',
    type: 'Team project',
    platform: 'Meta Quest 3',
    core: ['Virtual Reality', 'Cultural HCI', 'AI Voice Pipeline'],
    category: 'Immersive VR Experiences',
    demo: 'https://drive.google.com/file/d/1FdmWYslcEZZcKnix1qM6nal7YwTN4Lz9/view?usp=drive_link',
    stack: [
      'Unity', 'C#', 'Meta Quest 3', 'XR Interaction Toolkit',
      'Groq Whisper', 'Groq LLaMA', 'Google Cloud TTS', 'Blender', 'Mixamo'
    ],
    description:
      'Hands of Heritage is an immersive Meta Quest 3 experience that teaches Warli art through a culturally situated VR village, elder-led storytelling, voice interaction, and embodied drawing practice. Users move from observation to apprenticeship: exploring a Warli village, learning visual grammar through NPC-guided cultural priming, and creating a personalized final artwork.',
    highlights: [
      'Designed a culturally situated VR village with elder-led storytelling, world-space UI, environmental reference art, and embodied drawing practice on virtual mud walls.',
      'Built an AI voice pipeline using Groq Whisper, Groq LLaMA, and Google Cloud TTS for conversational NPC dialogue and personalized Warli drawing prompts from user responses.',
      'Evaluated through a counterbalanced user study with 12 participants, comparing scaffold-first and freehand-first learning orders across duration, brush strokes, canvas coverage, and qualitative feedback.'
    ],
    accent: ['#b8743a', '#e8c697'],
    caseStudy: HANDS_OF_HERITAGE_CASE_STUDY
  },
  {
    id: 'pit-crew-vr',
    title: 'Pit Crew VR',
    tagline: 'Collaborative multiplayer F1 pit stop',
    year: '2026',
    type: 'Solo project',
    platform: 'Meta Quest',
    core: ['Multiplayer VR', 'Real-Time Networking', 'Interaction Design'],
    category: 'Immersive VR Experiences',
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
    caseStudy: PIT_CREW_VR_CASE_STUDY
  },
  {
    id: 'invisible-safety',
    title: 'Invisible Safety',
    tagline: 'XR urban risk visualization',
    year: '2026',
    type: 'Solo project',
    platform: 'WebXR · ARCore',
    core: ['Augmented Reality', 'Geospatial Viz', 'Data Engineering'],
    category: 'Spatial Computing & Urban Visualization',
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
    caseStudy: INVISIBLE_SAFETY_CASE_STUDY
  },
  {
    id: 'urban-digital-twin',
    title: 'Levitating City Twin',
    tagline: 'WebXR/AR urban morphology explorer for NYC',
    year: '2026',
    type: 'Solo project',
    platform: 'Web Browser · Meta Quest AR',
    core: ['Spatial Computing', 'WebXR / AR', 'Data Visualization'],
    category: 'Spatial Computing & Urban Visualization',
    // Add a walkthrough clip later — local file in public/projects/urban-digital-twin/
    // (e.g. demo: '/projects/urban-digital-twin/demo.mp4') or a Google Drive link.
    demo: '',
    stack: ['React 18', 'React Three Fiber', 'Three.js', '@react-three/xr', 'D3', 'WebXR'],
    description:
     'Levitating City Twin is a browser-based, WebXR-capable 3D digital twin of Manhattan that extrudes thousands of real NYC buildings from their actual footprint polygons onto a floating tabletop you can orbit on desktop or place on a real surface in AR. Its signature idea is a continuous scale transition: survey the borough on a levitating plinth, brush a cluster of buildings, then step inside that block at 1.7 m eye height to walk real streets and inspect towers — all without ever leaving the single WebGL canvas or AR session.',
    highlights: [
      'Seamless tabletop-to-human-scale transition inside one WebGL canvas and one XR session, driven by dual projections (fixed-worldSize plinth vs. true 1:1 meter human scale).',
      'Streams real building geometry from the NYC Footprints API: every building renders instantly as an instanced box, then individually upgrades to a merged extruded footprint as its polygon resolves.',
      'Full in-headset WebGL control panel, controller/hand gestures (resize, rotate, grab-move, pinch), hit-test surface placement, cluster analysis, Height Probe, and "what-if" scenario massing.'
    ],
    accent: ['#b8743a', '#e8c697'],
    caseStudy: URBAN_DIGITAL_TWIN_CASE_STUDY
  }
]

export function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id)
}

export function getVideoEmbed(url) {
  if (!url) return null

  if (url.startsWith('/') || /\.(mp4|webm|ogg)(\?|$)/i.test(url)) {
    return { type: 'video', src: url }
  }

  const driveMatch = url.match(/\/file\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/)
  if (url.includes('drive.google.com') && driveMatch) {
    return {
      type: 'iframe',
      src: `https://drive.google.com/file/d/${driveMatch[1]}/preview`
    }
  }

  return { type: 'link', src: url }
}
