// Place walkthrough / diagram images in public/projects/invisible-safety/
// and reference them with `${IMG}/your-image.png` inside any section's `images`.
const IMG = '/projects/invisible-safety'

export const INVISIBLE_SAFETY_CASE_STUDY = {
  focus: 'AR Spatial Data Visualization + Geospatial Engineering',
  summary:
    'An AR spatial visualization system that lifts urban risk out of spreadsheets and into the place where it matters. It pairs a top-down Deck.gl + Mapbox analysis dashboard with a WebXR AR view, and its centerpiece is a circular tabletop "storm diorama" — a physical-feeling puck of city you place on a real surface and watch escalate from calm to an overflow that spills over the edge.',
  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Invisible Safety surfaces the urban risks usually trapped in spreadsheets: subsurface infrastructure, street-level hazards, and historic incident patterns. It pairs a top-down Deck.gl + Mapbox dashboard for analysis with a WebXR AR view for embodied exploration, so you can walk past a sidewalk and see the sewer lines, permits, and incident histories layered underneath it.',
        'The signature artifact is the AR Storm Event Simulation: a circular tabletop diorama, roughly 1.1 m across at scale, that reads as a physical object sitting on a real table. It models how a storm loads a New York City sewershed — rain falling on a block, runoff entering the basin, flow building through the trunk lines, and a Combined Sewer Outfall (CSO) discharging when the system hits capacity.',
        'The diorama is a conceptual load model, not a hydraulic prediction. Its four storm states (Calm, Light rain, Heavy rain, Overflow) are designed to make a causal story legible — where stress concentrates, and why — rather than to forecast real discharge volumes. That framing is carried as a persistent disclaimer in the AR overlay.'
      ]
    },
    {
      title: 'Headline Metrics',
      stats: [
        { label: 'OpenData sources integrated', value: '6 NYC datasets' },
        { label: 'Geocoded records', value: '2M+' },
        { label: 'Storm states', value: '4 (Calm → Overflow)' },
        { label: 'Diorama scale', value: '~1.1 m tabletop' }
      ]
    },
    {
      title: 'Two Views, One System',
      paragraphs: [
        'The project deliberately offers the same risk data through two complementary lenses, because analysis and intuition want different things from a visualization.'
      ],
      bullets: [
        {
          label: 'Analysis Dashboard',
          text: 'A top-down Deck.gl + Mapbox GL JS view for reading the city at scale — layered geospatial encodings for subsurface infrastructure, street-level hazards, risk intensity, data confidence, and incident frequency using color, opacity, thickness, animation, and uncertainty regions.'
        },
        {
          label: 'AR Storm Diorama',
          text: 'A WebXR AR view that situates one sewershed in physical space on a table you can walk around, crouch to, and point at — trading breadth for embodiment so the data becomes something you encounter rather than something you read.'
        }
      ]
    },
    {
      title: 'The Storm Diorama',
      paragraphs: [
        'The diorama is built as a layered, physical-feeling model rather than a floating chart. Every layer is clipped to the 500 m data circle so the object reads as a solid puck of city, not a square plane with data scattered on it.'
      ],
      bullets: [
        {
          label: 'The Puck',
          text: 'A low, thick cylinder with a stone/asphalt side wall, a slightly raised rim, and an embossed "N" north indicator — the body that makes the model read as a real object on the table.'
        },
        {
          label: 'Surface Layer',
          text: 'A circular city-block top with a street-grid texture. Risk cells rise as beveled rectangular blocks — height and warmth scaled by risk — so they read as buildings, not bar-chart columns.'
        },
        {
          label: 'Sewershed Layer',
          text: 'Translucent blue basin regions with a boundary line draped on the surface and clipped to the circle, showing which area drains to the modeled outfall.'
        },
        {
          label: 'Underground Layer',
          text: 'The trunk-line sewer network rendered inside the puck volume, visible through a translucent cutaway band in the side wall, with teal flow particles. The selected CSO outfall is a glowing teal pin that pierces surface to underground.'
        }
      ]
    },
    {
      title: 'Reading a Storm: The Four States',
      paragraphs: [
        'A single Storm Intensity slider drives the whole scene through four escalating states, each visually distinct within about a second of the change so the causal story stays readable.'
      ],
      steps: [
        'Calm — a static baseline, clean enough for callouts and orientation.',
        'Light rain — rain confined to the cylinder footprint, a runoff sheen accumulating in the sewershed, and pipe flow speeding up.',
        'Heavy rain — high-risk cells rise and pulse warm, complaint clusters surface as red markers, and flow particles run fast and bright.',
        'Overflow — the outfall discharges an orange waterfall over the puck edge, high-risk areas lock at capacity color, and an animated stress trace draws the causal path from complaints to risk cell to pipe to CSO.'
      ]
    },
    {
      title: 'Point-and-Select Interaction',
      paragraphs: [
        'Beyond placing the model and adjusting the storm, the diorama is inspectable: you can point at any element and pull up what it is.'
      ],
      bullets: [
        {
          label: 'Cross-Device Ray Picking',
          text: 'On Quest, a controller ray from the tracked-pointer pose; on phones, a screen tap unprojected through the camera. A tap that hits a selectable object selects it; a miss steps the storm intensity.'
        },
        {
          label: 'Instanced-Mesh Mapping',
          text: 'Hits on instanced risk cells and complaint clusters resolve through their instanceId back to the underlying data record, while individual CSO pins map by reference — so a selection always names a real feature.'
        },
        {
          label: 'In-World Labels',
          text: 'The selected element gets an in-scene SDF text label showing its name and one stat (risk, complaint count, or vulnerability), repositioned on each selection — necessary because the Quest Browser ignores DOM overlay, so all in-headset UI lives in the scene.'
        }
      ]
    },
    {
      title: 'Overlay & Information Design',
      bullets: [
        {
          label: 'Anchor Info Card',
          text: 'Once placed, a persistent card names the modeled outfall — CSO id, receiving waterbody, nearby complaints, and peak local risk.'
        },
        {
          label: 'Storm Intensity Slider',
          text: 'A horizontal slider with four labeled stops (Calm · Light · Heavy · Overflow) as the primary control, with an accessible value text for screen readers.'
        },
        {
          label: 'High Storm Stress Alert',
          text: 'At overflow, a warning card surfaces the CSO id, complaints, peak risk, and a computed "primary driver" sentence derived from the outfall\'s largest vulnerability factor — turning the spectacle into an explanation.'
        },
        {
          label: 'Callouts & Legend',
          text: 'Leader-line labels for the key elements and a compact color legend (risk, sewershed, pipes, flow, CSO, complaints, overflow), with callouts auto-hiding at heavy/overflow so they never clutter the payoff state.'
        }
      ]
    },
    {
      title: 'Data Foundation',
      paragraphs: [
        'The visualizations sit on a geospatial pipeline that integrates six NYC OpenData sources into a unified, radius-filtered model of more than two million geocoded records.'
      ],
      bullets: [
        'Sewer networks — the trunk-line geometry and CSO outfalls that the underground layer renders.',
        '311 service requests — the complaint clusters that surface as risk signal.',
        'DOT permits — street-level work and disruption.',
        'NYPD complaints — neighborhood incident patterns.',
        'Vision Zero collisions — historic crash hotspots.',
        'MapPLUTO footprints — the building/parcel geometry behind the surface blocks.'
      ]
    },
    {
      title: 'Engineering & Performance',
      paragraphs: [
        'The AR scene is built directly on Three.js and the WebXR session/hit-test API, holding to a strict frame budget so it stays at 60 fps on phones and 72 fps on Quest even in the overflow state.'
      ],
      bullets: [
        {
          label: 'Instancing Everywhere',
          text: 'Risk cells, complaint clusters, and surface blocks render as InstancedMesh to keep draw calls low; per-instance attributes drive pulsing and capacity states without spawning per-object meshes.'
        },
        {
          label: 'Particle Systems',
          text: 'Rain, pipe-flow, and the overflow spill are GPU point systems with allocation-free per-frame updates — the hero outfall\'s edge waterfall arcs toward the nearest rim point and falls down the wall.'
        },
        {
          label: 'Transparency Discipline',
          text: 'The translucent cutaway band, basin fill, water sheen, and clusters can stack several layers deep, so overdraw is the closest-watched cost; transparent layers are capped and draw order is managed deliberately.'
        },
        {
          label: 'Single Source of Truth',
          text: 'Storm intensity, phase, anchor, and selection live in one zustand store — read transiently by the render loop and reactively by the React UI — replacing an error-prone pattern of mirroring the same state across React, refs, and the scene.'
        }
      ]
    },
    {
      title: 'A Measured Tech Stack',
      paragraphs: [
        'The AR build was put together as a deliberate study of the Three.js ecosystem, adopting one library at a time against a vanilla baseline and keeping each only where measurement justified it.'
      ],
      bullets: [
        {
          label: 'zustand',
          text: 'Transient (per-frame) and reactive (re-render) state are collapsed into one store, ending the error-prone pattern of mirroring the same state across React, refs, and the scene.'
        },
        {
          label: 'Raycasting + three-mesh-bvh',
          text: 'Picking runs on THREE.Raycaster; a BVH acceleration structure was benchmarked at the scene\'s ~120 low-poly objects and documented as overkill here, kept in reserve for the full-res polygon meshes where it earns its keep.'
        },
        {
          label: 'troika-three-text',
          text: 'SDF in-world text drives the headset UI, beating canvas-sprite labels at small sizes and oblique angles, pooled under a strict three-label budget.'
        },
        {
          label: 'maath easing',
          text: 'Exponential damp toward targets replaced fixed-timestep lerps, making animation genuinely framerate-independent across a 60 Hz phone and a 72/90 Hz headset.'
        }
      ]
    },
    {
      title: 'Technologies Used',
      bullets: [
        { label: 'AR Rendering', text: 'Three.js with the WebXR session and hit-test APIs, targeting ARCore-class Android and the Quest Browser.' },
        { label: 'Analysis Dashboard', text: 'Deck.gl layered over Mapbox GL JS for top-down geospatial visualization.' },
        { label: 'State', text: 'zustand as a single transient/reactive source of truth for storm, anchor, and selection.' },
        { label: 'Interaction & Text', text: 'THREE.Raycaster (with optional three-mesh-bvh) for picking and troika-three-text for in-world labels.' },
        { label: 'Motion', text: 'maath easing for framerate-independent animation.' },
        { label: 'Data', text: 'A geospatial pipeline integrating six NYC OpenData sources and 2M+ geocoded records.' }
      ]
    },
    {
      title: 'Challenges & Design Decisions',
      paragraphs: [
        'The central design challenge was making a sewershed legible as a physical object. Rebuilding from a flat data plane into a clipped circular puck with an underground cutaway meant every layer — basin fills, pipes, blocks — had to be clamped to the data circle, and the riskiest performance item turned out to be the transparency overdraw of looking through a translucent wall into the volume. Reading the network inside the puck without blowing the frame budget drove the choice of a translucent band over a literal geometry cutaway.',
        'The second thread was honesty. Because the simulation is a conceptual load model rather than a hydraulic forecast, the information design had to escalate dramatically enough to tell a causal story — the overflow waterfall, the stress trace, the primary-driver sentence — while a persistent disclaimer keeps the claim modest. The goal throughout is the question the whole project asks: what changes when safety data stops being something you read on a screen and starts being something you encounter in the place where it matters.'
      ]
    }
  ]
}
