// Place walkthrough / diagram images in public/projects/urban-digital-twin/
// and reference them with `${IMG}/your-image.png` inside any section's `images`.
const IMG = '/projects/urban-digital-twin'

export const URBAN_DIGITAL_TWIN_CASE_STUDY = {
  focus: 'Spatial Computing + Data Viz',
  summary:
    'A browser-based, WebXR-capable 3D digital twin of Manhattan that renders thousands of real NYC buildings on a levitating tabletop — then lets you step inside at human eye level, all within a single WebGL canvas and AR session.',
  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'For this project, I designed and built an end-to-end WebXR digital twin of a New York City borough that runs entirely in the browser. It renders thousands of real NYC buildings — extruded from their actual PLUTO footprint polygons — onto a floating tabletop platform that you can orbit on desktop or place on a real surface in Augmented Reality on a Meta Quest headset, with no native app compilation required.',
        'The experience is built around a single signature idea: a continuous scale transition from city overview down to human eye level. Using React Three Fiber, Three.js, and @react-three/xr, the user surveys the borough on a levitating plinth, brushes a cluster of nearby buildings, then presses "Enter Scale" to step inside that block at 1.7 m eye height — walking real streets, reading real road names, and inspecting individual towers, all without ever leaving the single WebGL canvas or AR session.'
      ]
    },
    {
      title: 'Headline Metrics',
      stats: [
        { label: 'Buildings rendered per view', value: 'Up to 5,000' },
        { label: 'PLUTO sample rows', value: '~25,000' },
        { label: 'Human-scale eye height', value: '1.7 m' },
        { label: 'Contexts bridged', value: 'Desktop + Meta Quest AR' }
      ]
    },
    {
      title: 'Key Features',
      bullets: [
        {
          label: 'Seamless Scale Transition',
          text: 'The whole experience lives in one React Three Fiber canvas. Selecting a cluster and pressing "Enter Scale" reprojects it from a squeezed tabletop plinth into true 1:1 meters, dropping the viewer in at 1.7 m so a 12-story building correctly towers overhead — no scene reload, no separate screen.'
        },
        {
          label: 'Progressive Footprint Streaming',
          text: 'Every building renders instantly as an instanced box, then individually upgrades to a real extruded footprint polygon as its geometry resolves from the NYC Footprints API — so there is never a blank wait or one jarring swap, just a gradual flip from blocks to the true city silhouette.'
        },
        {
          label: 'Spatial 3D Interaction Widgets',
          text: 'Because immersive sessions composite only the WebGL scene, every AR control is purpose-built from Three.js meshes and troika text — a world-locked dashboard, cluster panel, info card, and controller guide — rather than DOM overlays that would be invisible in-headset.'
        },
        {
          label: 'Controller & Hand Gestures',
          text: 'Thumbstick resize and rotate, grip-squeeze to drag the floating city, and two-hand pinch to scale — all mutually gated so tabletop gestures and human-scale locomotion never fight over the same input.'
        },
        {
          label: 'Cluster Analysis & Height Probe',
          text: 'Radius-brushing a building walks the dataset once and returns a live summary (count, average and tallest floors, median year, density score, dominant land use). A Height Probe ranks any building against the dataset — "taller than N%" — via an O(log n) binary search over precomputed percentiles.'
        },
        {
          label: '"What-If" Scenario Massing',
          text: 'Raising a building\'s floor count renders a ghost of the original next to a solid proposed mass, backed by an external store so the adjustment persists across the tabletop ↔ human-scale transition.'
        }
      ]
    },
    {
      title: 'The Scale Transition',
      paragraphs: [
        'Two coordinate projections are the heart of the system: a fixed-worldSize projection for the tabletop (the whole borough squeezed onto a 12-unit plinth) and a true 1:1 meter projection for human scale (real proportions you can walk through). The conceptual spine moves through three stages, and every transition reuses one canvas and one XR session — which is what makes the borough → neighborhood → building zoom feel continuous rather than like loading separate screens.'
      ],
      steps: [
        'CITY — survey the borough on the levitating tabletop (worldSize 12, ~0.06 units per floor).',
        'NEIGHBORHOOD — select or radius-brush a cluster to get a halo plus a live summary of counts, median year, density, and dominant land use.',
        'HUMAN — "Enter Scale" reprojects the cluster at 3 m per floor and drops you in at 1.7 m eye height to walk real streets and read real road names.',
        'RETURN — the same canvas and XR session persist, so stepping back out to the tabletop is instant.'
      ]
    },
    {
      title: 'Data Layer',
      bullets: [
        {
          label: 'PLUTO Building Dataset',
          text: '~25,000 rows sampled from NYC\'s PLUTO dataset, loaded once at startup with d3.csv. Rows are coerced to numbers and filtered to drop null-island (0,0) coordinates — a single bad point would otherwise stretch the bounding box to the equator and collapse the whole model to a pixel.'
        },
        {
          label: 'NYC Building Footprints API',
          text: 'PLUTO only gives a lat/lng point, so real polygon geometry is fetched from NYC Open Data and matched to each record with client-side point-in-polygon ray-casting — batched 15 records per query, max 6 in flight, with a two-level (in-memory + sessionStorage) cache.'
        },
        {
          label: 'OpenStreetMap Overpass + Basemap Tiles',
          text: 'Overpass supplies street centrelines and names for human-scale roads, labels, and the minimap, while georeferenced XYZ raster tiles (Mapbox dark-v11 with a token, else keyless Carto) land footprints on their actual streets. Every network dependency degrades silently to a fallback.'
        }
      ]
    },
    {
      title: 'Human-Scale Mode',
      paragraphs: [
        'The signature feature. When you press "Enter Scale," the canvas is never unmounted — a street-level subtree mounts in place of the tabletop, so footprints and the XR session are never reloaded.'
      ],
      bullets: [
        {
          label: 'Meter-True Reprojection',
          text: 'The cluster is reprojected at true meters and re-extruded at 3 m per floor; the viewer is dropped at 1.7 m so towers correctly loom overhead.'
        },
        {
          label: 'Always-Legible Facades',
          text: 'Buildings use a shared unlit procedural window texture, so facades never darken with angle or distance and always read as buildings.'
        },
        {
          label: 'Streets, Labels & Minimap',
          text: 'A georeferenced raster ground, Overpass road ribbons with repeating street-name labels, and a head-locked overhead minimap keep the user oriented at eye level.'
        },
        {
          label: 'Walk Controls & Sealed Environment',
          text: 'Desktop uses PointerLock + WASD; AR uses thumbstick locomotion that glides the user through the block beyond their real floor space. A sky dome, follow-the-viewer ground, and PMREM environment seal AR passthrough into a VR-like street.'
        }
      ]
    },
    {
      title: 'Technologies Used',
      bullets: [
        { label: 'XR Rendering', text: 'React Three Fiber, Three.js, @react-three/xr, @react-three/drei, troika SDF text.' },
        { label: 'WebXR', text: 'WebXR Device API, createXRStore, controller & hand input, useXRHitTest surface placement.' },
        { label: 'Data & Color', text: 'D3 (d3.csv, quantile/percentile stats, sequential color ramps), GeoJSON footprint geometry.' },
        { label: 'External Services', text: 'NYC Open Data Building Footprints, OpenStreetMap Overpass API, Mapbox / Carto raster tiles.' },
        { label: 'Build & Deploy', text: 'React 18, Create React App, HTTPS dev server (required for navigator.xr), GitHub Pages.' },
        { label: 'Hardware', text: 'Desktop browser for preview; Meta Quest Browser over HTTPS for full AR.' }
      ]
    },
    {
      title: 'Challenges',
      paragraphs: [
        'Building this required solving several real-time rendering and XR-interaction problems at once. Re-merging 5,000 building geometries on every footprint batch would tank the frame rate, so fetches are throttled to 250 ms and the box and footprint layers coexist — instant boxes upgrade to real extrusions progressively rather than blocking on geometry. Selection fires on pointer-down rather than click, because in XR the controller ray drifts between trigger press and release and rarely lands on a small instance.',
        'The dual-projection design (a squeezed plinth for the tabletop versus true meters for human scale) is what lets one canvas serve both city overview and a walkable street. Keeping a single XR session across both modes means there is no re-enter, re-place, or re-load — but it also means every transform reset and capability gate has to be handled carefully so the model never re-enters tiny or the "Enter AR" button never appears on an insecure origin. Finally, every external dependency — footprints, Overpass roads, basemap tiles — fails silently to a fallback, so a slow or unreachable host degrades gracefully instead of breaking the scene.'
      ]
    },
    {
      title: 'Key Design Decisions',
      bullets: [
        { label: 'All AR UI in WebGL', text: 'Immersive sessions composite only the WebGL scene, so DOM overlays are invisible and unclickable in-headset — every control is a mesh.' },
        { label: 'Two Projections', text: 'A plinth needs everything squeezed; human scale needs true proportions to walk through — one shared projection could not do both.' },
        { label: 'Box + Footprint Layers Coexist', text: 'The scene is instant and upgrades progressively instead of waiting on geometry.' },
        { label: 'Single XR Session Across Modes', text: 'Keeps the tabletop ↔ human transition seamless with no re-enter, re-place, or re-load.' },
        { label: 'HTTPS Mandatory for AR', text: 'navigator.xr only exists on secure origins, so the app must be served over HTTPS or via GitHub Pages.' }
      ]
    }
  ]
}
