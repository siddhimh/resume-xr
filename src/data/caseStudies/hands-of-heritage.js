const IMG = '/projects/hands-of-heritage'

export const HANDS_OF_HERITAGE_CASE_STUDY = {
  focus: 'Design + Interaction',
  summary:
    'An immersive Meta Quest 3 learning system for Warli art, cultural context, embodied interaction, and AI-guided personalization.',
  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'Hands of Heritage is an immersive Meta Quest 3 experience that teaches Warli art through a culturally situated VR village, elder-led storytelling, voice interaction, and embodied drawing practice.',
        'The experience shifts learning from passive observation to active apprenticeship: users enter a Warli village, understand cultural meaning, practice visual grammar, and create a personalized final artwork.'
      ]
    },
    {
      title: 'Problem & Design Goal',
      bullets: [
        'Many users can view traditional Indian art but cannot read its symbols, structure, or cultural meaning.',
        'The experience needed to teach cultural context and procedural skill without overwhelming users inside VR.',
        'Use the village environment as the interface — not just decoration.',
        'Support a progression from contextual priming to scaffolded practice to freehand creative transfer.'
      ]
    },
    {
      title: 'Key Features',
      groups: [
        {
          subtitle: 'Culturally situated village environment',
          bullets: [
            'Thatched huts, Warli wall paintings, animals, clay pots, campfire, trees, carts, hay bales, terrain, warm lighting, and spatial audio.'
          ]
        },
        {
          subtitle: 'NPC-guided learning journey',
          bullets: [
            'A child NPC welcomes the user and leads them toward Ramu, the elder artist across a three-stop village tour.'
          ]
        },
        {
          subtitle: 'Embodied drawing progression',
          bullets: [
            'Rice grinding ritual, ghost-guided tracing, XR socket-based motif assembly, reference-based drawing, and personalized freehand creation.'
          ]
        }
      ]
    },
    {
      title: 'Design Flow',
      paragraphs: [
        'Cultural context, environmental references, elder dialogue, visual grammar, and world-space UI prepare the user for embodied creation.'
      ],
      images: [
        {
          src: `${IMG}/design-flow.png`,
          alt: 'Hands of Heritage design flow diagram showing cultural context through embodied creation'
        }
      ]
    },
    {
      title: 'Interaction Flow',
      steps: [
        'Village orientation and spatial audio establish the environment as part of learning.',
        'Child NPC leads the user to the elder artist; Ramu explains materials and visual grammar.',
        'Voice responses via trigger-based recording become creative inputs for personalization.',
        'Rice grinding ritual, scaffolded tracing, motif assembly, then freehand transfer.',
        'Interactions are logged for duration, strokes, coverage, and task submissions.'
      ],
      images: [
        {
          src: `${IMG}/interaction-flow.png`,
          alt: 'Hands of Heritage interaction flow from village exploration to personalized freehand drawing'
        }
      ]
    },
    {
      title: 'AI & Voice Pipeline',
      bullets: [
        'Groq Whisper for speech-to-text, Groq LLaMA for elder NPC dialogue, Google Cloud TTS for spoken responses.',
        'Player answers about place, characters, activity, and mood generate the final Warli drawing prompt.'
      ]
    },
    {
      title: 'User Study',
      paragraphs: [
        'A counterbalanced study with 12 participants compared Scaffolding → Freehand vs Freehand → Scaffolding learning orders.'
      ],
      stats: [
        { label: 'Test 2 (Scaffolding → Freehand)', value: '152.59 sec avg' },
        { label: 'Test 2 (Freehand → Scaffolding)', value: '195.92 sec avg' },
        { label: 'Speed improvement', value: '~22% faster scaffold-first' },
        { label: 'Participants', value: '12' }
      ]
    },
    {
      title: 'Qualitative Findings',
      bullets: [
        'Priming built early mental models for circle, triangle, square logic before drawing.',
        'Rice grinding helped users feel painting as a cultural process, not only a digital task.',
        'Scaffolding supported recall of body proportions and motif structure during freehand drawing.',
        'Users preferred active making over passive observation.'
      ]
    }
  ]
}
