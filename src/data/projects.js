// TODO: replace placeholder content + add real video files in /public/videos/
// Each project supports either `video` (mp4 path) or falls back to a gradient poster.
export const PROJECTS = [
  {
    id: 'spatial-canvas',
    title: 'Spatial Canvas',
    tagline: 'A drawing tool for Apple Vision Pro',
    year: '2025',
    role: 'Lead Developer',
    platform: 'visionOS',
    duration: '4 months',
    stack: ['Swift', 'RealityKit', 'SwiftUI', 'ARKit'],
    description:
      'A spatial drawing application that lets you paint in 3D around your environment using hand-tracking. Supports persistent room-anchored artwork, shared sessions, and a curated brush library tuned for natural pinch gestures.',
    highlights: [
      'Real-time hand-tracked brush strokes with sub-frame smoothing',
      'Room-anchored persistence using ARKit world maps',
      'SharePlay multi-user co-drawing sessions'
    ],
    accent: ['#ff6b4a', '#ffb199'],
    video: '/videos/spatial-canvas.mp4',
    links: [{ label: 'Case study', href: '#' }, { label: 'Demo reel', href: '#' }]
  },
  {
    id: 'orbit-quest',
    title: 'Orbit',
    tagline: 'Mixed-reality fitness for Meta Quest',
    year: '2024',
    role: 'XR Developer',
    platform: 'Meta Quest 3',
    duration: '6 months',
    stack: ['Unity', 'C#', 'OpenXR', 'Meta SDK'],
    description:
      'A mixed-reality rhythm game that uses your living room as the play space. Objects spawn around real furniture detected through scene understanding, and intensity adapts to your movement in real time.',
    highlights: [
      'Scene mesh integration with passthrough rendering',
      'Adaptive difficulty driven by tracked motion intensity',
      'Custom shader pipeline optimized for 90 Hz on Quest 3'
    ],
    accent: ['#7c5cff', '#b1a1ff'],
    video: '/videos/orbit.mp4',
    links: [{ label: 'Watch trailer', href: '#' }]
  },
  {
    id: 'web-xr-museum',
    title: 'Anywhere Museum',
    tagline: 'A WebXR exhibition platform',
    year: '2024',
    role: 'Full-stack + WebXR',
    platform: 'WebXR (browser)',
    duration: '3 months',
    stack: ['Three.js', 'React Three Fiber', 'WebXR', 'TypeScript'],
    description:
      'A browser-first virtual museum that runs on any device with a screen and unlocks full VR mode on supported headsets. Curators upload glTF artifacts and write spatial annotations through a simple CMS.',
    highlights: [
      'Cross-device renderer that scales from phone to Quest browser',
      'Streaming asset pipeline with progressive glTF loading',
      'WCAG-aligned spatial navigation with comfort presets'
    ],
    accent: ['#00b894', '#88e0c8'],
    video: '/videos/anywhere-museum.mp4',
    links: [{ label: 'Live demo', href: '#' }, { label: 'GitHub', href: '#' }]
  },
  {
    id: 'ar-onboarding',
    title: 'AR Onboarding Kit',
    tagline: 'Mobile AR for industrial training',
    year: '2023',
    role: 'AR Developer',
    platform: 'iOS · Android',
    duration: '5 months',
    stack: ['Unity', 'ARKit', 'ARCore', 'C#'],
    description:
      'A guided AR experience that teaches new operators how to safely set up factory equipment. Replaces 60-page PDFs with step-by-step holograms that anchor to real machinery.',
    highlights: [
      'Image-target driven multi-step procedures',
      'Offline-first content sync for shop-floor environments',
      '40% reduction in average onboarding time across pilot sites'
    ],
    accent: ['#14140f', '#5a5a52'],
    video: '/videos/ar-onboarding.mp4',
    links: [{ label: 'Case study', href: '#' }]
  },
  {
    id: 'hand-input-lab',
    title: 'Hand Input Lab',
    tagline: 'A toolkit for natural hand interaction',
    year: '2023',
    role: 'Solo project',
    platform: 'Unity · Quest · Vision Pro',
    duration: 'Ongoing',
    stack: ['Unity', 'C#', 'OpenXR', 'XR Interaction Toolkit'],
    description:
      'An open library of hand-tracked interaction primitives — pinches, grabs, two-handed manipulation, ergonomic UI panels — designed to feel right across hardware. Used as the base layer for several of my prototypes.',
    highlights: [
      'Cross-platform interaction abstraction over OpenXR',
      'Ergonomic UI panel system with comfort-aware placement',
      'Bundled gesture recogniser with low-latency thresholds'
    ],
    accent: ['#ff9d4a', '#ffd1a8'],
    video: '/videos/hand-input-lab.mp4',
    links: [{ label: 'GitHub', href: '#' }]
  },
  {
    id: 'mr-storyboard',
    title: 'MR Storyboard',
    tagline: 'A planning tool for spatial filmmakers',
    year: '2025',
    role: 'Designer + Developer',
    platform: 'visionOS · iPad',
    duration: '2 months',
    stack: ['Swift', 'RealityKit', 'USDZ', 'SwiftUI'],
    description:
      'A spatial storyboarding tool that lets directors block scenes with stand-in characters and camera frustums anchored in their physical set. Exports to USDZ for handoff into production pipelines.',
    highlights: [
      'Camera frustum + dolly simulation in mixed reality',
      'Live USDZ export with embedded scene metadata',
      'Companion iPad scrubber with timeline sync'
    ],
    accent: ['#5a5acd', '#a8a8e8'],
    video: '/videos/mr-storyboard.mp4',
    links: [{ label: 'Concept reel', href: '#' }]
  }
]
