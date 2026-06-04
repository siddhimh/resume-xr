// Diagram images live in public/projects/hands-of-heritage/
const IMG = '/projects/hands-of-heritage'

export const HANDS_OF_HERITAGE_CASE_STUDY = {
  focus: 'Design + Interaction',
  summary:
    'An immersive Meta Quest 3 learning system for Warli art — pairing a culturally situated VR village, elder-led storytelling, and an AI voice pipeline with embodied drawing practice, evaluated through a counterbalanced user study.',
  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Hands of Heritage is an immersive Meta Quest 3 experience that teaches Warli art through a culturally situated VR village, elder-led storytelling, voice interaction, and embodied drawing practice. Rather than presenting the art as a flat tutorial, it situates the learner inside the cultural context the art comes from.',
        'The experience deliberately shifts learning from passive observation to active apprenticeship: the user enters a Warli village, absorbs cultural meaning through an elder NPC, practices the visual grammar through scaffolded drawing, and finally creates a personalized artwork generated from their own spoken answers — moving from contextual priming, to scaffolded practice, to freehand creative transfer.'
      ]
    },
    {
      title: 'Headline Metrics',
      stats: [
        { label: 'Target platform', value: 'Meta Quest 3' },
        { label: 'Study participants', value: '12' },
        { label: 'Learning progression', value: '3 stages' },
        { label: 'Scaffold-first speed-up', value: '~22% faster' }
      ]
    },
    {
      title: 'Problem & Design Goal',
      bullets: [
        'Many users can view traditional Indian art but cannot read its symbols, structure, or cultural meaning.',
        'The experience needed to teach cultural context and procedural skill at once, without overwhelming users inside VR.',
        'Use the village environment itself as the interface — not just decoration — so learning is spatial and embodied.',
        'Support a clear progression from contextual priming, to scaffolded practice, to freehand creative transfer.'
      ]
    },
    {
      title: 'Key Features',
      bullets: [
        {
          label: 'Culturally Situated Village',
          text: 'A hand-built Warli village — thatched huts, wall paintings, animals, clay pots, a campfire, carts, hay bales, and terrain under warm lighting with spatial audio — that frames every learning moment in its cultural setting.'
        },
        {
          label: 'NPC-Guided Learning Journey',
          text: 'A child NPC welcomes the user and leads them across a three-stop village tour toward Ramu, the elder artist, who explains the materials and visual grammar of Warli art.'
        },
        {
          label: 'Embodied Drawing Progression',
          text: 'A rice-grinding ritual, ghost-guided tracing, XR socket-based motif assembly, reference-based drawing, and finally personalized freehand creation — each step moving the learner closer to drawing unaided.'
        },
        {
          label: 'World-Space UI & References',
          text: 'Instruction, reference art, and prompts are placed diegetically in world space and on the village\'s mud walls, so the interface never breaks the sense of being inside the village.'
        },
        {
          label: 'AI-Personalized Final Artwork',
          text: 'The user\'s spoken answers are turned into a tailored Warli drawing prompt, so the closing creative piece reflects their own story rather than a fixed template.'
        }
      ]
    },
    {
      title: 'Design Flow',
      paragraphs: [
        'Cultural context, environmental references, elder dialogue, visual grammar, and world-space UI all prepare the user for embodied creation. The design flow below traces how each layer builds toward the final freehand artwork.'
      ],
      images: [
        {
          src: `${IMG}/design-flow.png`,
          alt: 'Hands of Heritage design flow diagram showing cultural context through embodied creation',
          caption: 'Design flow — from cultural priming and environmental references through to embodied creation.'
        }
      ]
    },
    {
      title: 'Interaction Flow',
      steps: [
        'Village orientation and spatial audio establish the environment as part of the learning, not a backdrop.',
        'The child NPC leads the user to the elder artist; Ramu explains the materials and visual grammar of Warli art.',
        'Voice responses, captured through trigger-based recording, become the creative inputs for personalization.',
        'The learner moves through the rice-grinding ritual, scaffolded tracing, and motif assembly, then transfers to freehand drawing.',
        'Interactions are logged throughout — duration, brush strokes, canvas coverage, and task submissions — for the study.'
      ],
      images: [
        {
          src: `${IMG}/interaction-flow.png`,
          alt: 'Hands of Heritage interaction flow from village exploration to personalized freehand drawing',
          caption: 'Interaction flow — village exploration through to personalized freehand drawing.'
        }
      ]
    },
    {
      title: 'AI & Voice Pipeline',
      bullets: [
        {
          label: 'Speech-to-Text',
          text: 'Groq Whisper transcribes the user\'s spoken answers captured via trigger-based recording in-headset.'
        },
        {
          label: 'Conversational Dialogue',
          text: 'Groq LLaMA drives the elder NPC\'s responses, keeping the exchange natural rather than menu-driven.'
        },
        {
          label: 'Spoken Responses',
          text: 'Google Cloud TTS voices the NPC back to the user, completing a fully spoken conversational loop.'
        },
        {
          label: 'Personalized Prompt Generation',
          text: 'Answers about place, characters, activity, and mood are composed into the prompt that generates the final personalized Warli drawing.'
        }
      ]
    },
    {
      title: 'Technologies Used',
      bullets: [
        { label: 'Engine & XR', text: 'Unity, C#, XR Interaction Toolkit, Meta Quest 3.' },
        { label: 'AI Voice Pipeline', text: 'Groq Whisper (speech-to-text), Groq LLaMA (NPC dialogue), Google Cloud TTS (spoken responses).' },
        { label: '3D Content & Animation', text: 'Blender for environment and asset modeling, Mixamo for character animation.' },
        { label: 'Interaction', text: 'World-space UI, XR sockets, trigger-based voice recording, and embodied drawing on virtual mud walls.' }
      ]
    },
    {
      title: 'User Study',
      paragraphs: [
        'The experience was evaluated through a counterbalanced study with 12 participants, comparing a Scaffolding → Freehand learning order against a Freehand → Scaffolding order to see how sequencing affects performance. The scaffold-first order produced faster freehand drawing on the comparable task.'
      ],
      stats: [
        { label: 'Scaffolding → Freehand (Test 2)', value: '152.59 s avg' },
        { label: 'Freehand → Scaffolding (Test 2)', value: '195.92 s avg' },
        { label: 'Speed improvement', value: '~22% faster' },
        { label: 'Participants', value: '12' }
      ]
    },
    {
      title: 'Qualitative Findings',
      bullets: [
        'Priming built early mental models for the circle, triangle, and square logic before users began drawing.',
        'The rice-grinding ritual helped users feel painting as a cultural process, not only a digital task.',
        'Scaffolding supported recall of body proportions and motif structure during the freehand stage.',
        'Across the board, users preferred active making over passive observation.'
      ]
    }
  ]
}
