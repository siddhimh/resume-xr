// Place walkthrough / diagram images in public/projects/pit-crew-vr/
// and reference them with `${IMG}/your-image.png` inside any section's `images`.
const IMG = '/projects/pit-crew-vr'

export const PIT_CREW_VR_CASE_STUDY = {
  focus: 'Multiplayer VR + Real-Time Networking',
  summary:
    'A three-player collaborative VR experience built around one of the most tightly coordinated moments in sport — an F1 pit stop. Players split into asymmetric roles and complete a timed, five-step tire change as a synchronized unit, with a full F1-broadcast layer of cameras, replays, and recording wrapped around the gameplay.',
  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Pit Crew VR puts you and two friends inside a Formula 1 pit box with a single instruction: "You have a few seconds. Don\'t mess it up." Three players assume distinct, asymmetric roles within the crew — Spotter, Jack Operator, and Tire Swapper — and must coordinate a precisely-sequenced tire change under time pressure, simulating the high-stakes choreography of a real Grand Prix pit stop.',
        'The project explores what shared presence in VR actually requires when success depends on physical timing, role-specific actions, and real-time coordination — not just being in the same space. It is built in Unity 2022.3 LTS, networked with Photon PUN2 for cross-headset multiplayer, and uses the XR Interaction Toolkit for hand-tracked interactions, targeting Meta Quest.',
        'Around the core gameplay sits a full "F1 broadcast" layer: a wall-mounted pit board timer, a multi-camera director system, automatic dual-stream recording, and a cinematic replay that flies through the pit box after every round so the crew can relive — and argue about — exactly what went wrong.'
      ]
    },
    {
      title: 'Headline Metrics',
      stats: [
        { label: 'Networked players', value: '3 asymmetric roles' },
        { label: 'Gameplay sequence', value: '5 synchronized steps' },
        { label: 'Director waypoints', value: '8 cinematic shots' },
        { label: 'Recording streams', value: 'Dual MP4 @ 1080p' }
      ]
    },
    {
      title: 'The Five Moments That Matter',
      paragraphs: [
        'The fun comes from urgency, physicality, spectacle, and friends laughing together through the chaos and miscommunication. The entire design is organized around making five moments excellent — everything else is decoration.'
      ],
      steps: [
        'Radio call — "Box box box!" sets the pulse racing.',
        'Car arrival — the screech, the smoke, the urgency.',
        'Frantic scramble — the five steps where chaos becomes coordination.',
        'Car launch — the roar, the chirp, the satisfaction of a job done.',
        'Result reveal — the time, the rating, the bragging rights.'
      ]
    },
    {
      title: 'Key Features',
      bullets: [
        {
          label: 'Asymmetric Three-Player Roles',
          text: 'Spotter, Jack Operator, and Tire Swapper each have role-specific actions and spawn points. No player can finish the stop alone — the design forces communication and physical timing between teammates rather than parallel solo work.'
        },
        {
          label: 'Synchronized Five-Step Gameplay',
          text: 'The core tire-change loop runs as a five-step state machine synchronized across all clients via Photon RPCs, so every headset agrees on whose turn it is and when the stop is complete.'
        },
        {
          label: 'Networked Lobby & Role Selection',
          text: 'A three-stage flow (Welcome → role cards → All Crew Ready) lets players claim Spotter, Jack Operator, or Tire Swapper from floating cards in a Red Bull-branded garage before a faded transition into the pit box.'
        },
        {
          label: 'State-Driven Pit Board Timer',
          text: 'A wall-mounted F1-style timer changes color with game state — gold when ready, red while running, green on the final time — giving the crew a single shared focal point under pressure.'
        },
        {
          label: 'Cinematic Replay Flyover',
          text: 'A single "Watch Replay" button teleports players to a viewing spot and triggers a director-camera flyover through eight cinematic waypoints, shown as a fullscreen overlay so the whole crew watches the same cut.'
        },
        {
          label: 'Automatic Dual-Stream Recording',
          text: 'Every round is captured to two paired MP4 files — a top-down overview of the full stop and the cinematic director cut — making highlight capture and sharing effortless.'
        }
      ]
    },
    {
      title: 'Multiplayer Architecture',
      paragraphs: [
        'The networking backbone is Photon PUN2, chosen for reliable cross-headset state replication on Quest. Three players join a shared room, claim a role, and transition together from the Lobby scene to the PitStop scene with a synchronized fade.'
      ],
      bullets: [
        {
          label: 'RPC-Driven Game State',
          text: 'The five-step pit-stop sequence is advanced through Photon RPCs, so step transitions, completion, and timing stay consistent across every client without a divergent local state.'
        },
        {
          label: 'Networked Scene Flow',
          text: 'Role selection, the three-stage lobby UI, and the Lobby → PitStop transition are all synchronized, so the crew always enters the pit box together and in the right roles.'
        },
        {
          label: 'QuickTest Solo Mode',
          text: 'A QuickTest object bypasses the Photon requirement, auto-starts a round after two seconds, and exposes a Force Complete option — enabling a full solo development cycle without needing two other headsets online.'
        }
      ]
    },
    {
      title: 'Broadcast & Cinematic System',
      paragraphs: [
        'The "broadcast" phase transforms a functional pit stop into a broadcast-quality experience. Three cameras work together: the player\'s VR view, a top-down overview, and a scripted director camera.'
      ],
      bullets: [
        {
          label: 'Main Camera (XR)',
          text: 'The player\'s in-headset VR view, rendered to the primary display.'
        },
        {
          label: 'Overview Camera',
          text: 'A fixed top-down view rendered to a RenderTexture (OverviewRT), used to record the full round from start to finish.'
        },
        {
          label: 'Director Camera',
          text: 'A cinematic camera that flies through eight waypoints, rendered to DirectorRT and surfaced to players through a fullscreen CinematicScreenCanvas overlay during replay.'
        },
        {
          label: 'Results Screen',
          text: 'After the cinematic ends, a results canvas replaces the pit board timer in the same world position to reveal the rating, star tier (Bronze / Silver / Gold), and an F1 record comparison.'
        }
      ]
    },
    {
      title: 'Recording System',
      bullets: [
        {
          label: 'Dual Paired Output',
          text: 'Each round writes two MP4 files — Overview_<timestamp>.mp4 and Director_<timestamp>.mp4 — sharing a single timestamp so the top-down and cinematic cuts of the same stop are trivially easy to pair.'
        },
        {
          label: 'Format & Coverage',
          text: '1920×1080 at 30 FPS via Unity Recorder. The overview captures the entire round; the director stream captures only the cinematic playback.'
        }
      ]
    },
    {
      title: 'Technologies Used',
      bullets: [
        { label: 'Engine', text: 'Unity 2022.3 LTS.' },
        { label: 'Networking', text: 'Photon PUN2 for cross-headset multiplayer and RPC-driven game state.' },
        { label: 'VR Interaction', text: 'XR Interaction Toolkit for hand-tracked grabs and role-specific actions.' },
        { label: 'Cameras & Capture', text: 'RenderTextures, scripted director-camera waypoints, and Unity Recorder for dual MP4 output.' },
        { label: 'Animation', text: 'Mixamo animations for player avatars and pit-lane NPCs.' },
        { label: 'Hardware', text: 'Meta Quest (Android build target).' }
      ]
    },
    {
      title: 'Development Phases',
      paragraphs: [
        'The project is structured across seven phases, progressing from foundational infrastructure through to polished cinematic spectacle. The foundation and broadcast layers are functional; the remaining phases layer on drama, life, and audio.'
      ],
      steps: [
        'Foundation — both scenes, multiplayer, role flow, and the core five-step gameplay loop (complete).',
        'Central Broadcast Elements — timer, multi-camera director system, recording, and cinematic replay (functional, results screen integrating).',
        'Cinematic Moments — car arrival and launch sequences, "Box box box!" radio call, and a 3-2-1-GO countdown.',
        'Living World NPCs — lollipop man, driver helmet, and a walking mechanic to populate the pit lane.',
        'Player Avatars — full Red Bull pit-crew bodies with role-specific Mixamo animations synced over Photon.',
        'Audio Mastery — engineer voice lines, race commentary, layered ambience, and action-specific SFX.',
        'Polish & Testing — particle effects, transitions, Quest performance optimization, and multiplayer bug fixing.'
      ]
    },
    {
      title: 'Challenges & Design Decisions',
      paragraphs: [
        'The central challenge was making coordination feel real rather than incidental. Asymmetric roles and a strict five-step sequence mean the experience only works when all three players communicate and time their actions — but that same strictness has to stay perfectly consistent across three independent headsets, which is why the entire game state advances through Photon RPCs rather than local logic.',
        'A second thread was capturing the spectacle. Wrapping a hand-tracked VR task in an F1-broadcast layer required a multi-camera system, RenderTexture-based overview and director feeds, and automatic dual-stream recording — all running alongside the live VR render without compromising the on-headset experience. Throughout, a QuickTest mode that bypasses Photon kept solo iteration fast despite the project being fundamentally three-player.'
      ]
    }
  ]
}
