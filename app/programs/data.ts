export type Program = {
  slug: string;
  age: string;
  name: string;
  img: string;
  desc: string;
  details: { heading: string; body: string }[];
};

export const programs: Program[] = [
  {
    slug: "infant",
    age: "6 weeks – 8 months",
    name: "Infant",
    img: "/images/bba_infant.jpg",
    desc: "English & Mandarin immersion setting and kindergarten readiness preparation through our play-based curriculum introduces world cultures & traditions through daily explorations.\n\nFrom 6 weeks to 8 months, infants undergo rapid development, especially in areas such as motor skills, language acquisition, emotional attachment, and cause-interaction. This period is crucial for the development of the brain's sensory abilities, and socialization skills. With appropriate stimulation and interaction from parents or caregivers, infants can fully realize their potential during this critical phase.",
    details: [
      {
        heading: "Language Stimulation",
        body: "Talk to Your Baby: Even though infants cannot respond with words, it's important to engage in frequent 'conversations' with them. Use simple, clear language to describe objects, actions, and emotions daily — 'This is an apple,' 'Mommy is here' — which helps babies understand language meaning.\n\nReading and Storytelling: Singing songs and reading books gives your baby understanding of the world. Repetitive phrases and repetitive language are especially beneficial for language development.",
      },
      {
        heading: "Sensory Play and Exploration",
        body: "Tactile Play: Introduce infants to different textures and materials like soft stuffed animals, hard blocks, and smooth plastic toys to stimulate their senses and sense of touch. These tactile experiences help infants' cognitive abilities develop.\n\nVisual Stimulation: Present objects with bright colors and simple shapes, which can capture the baby's attention and aid in their visual development. Large brightly colored building blocks are great tools for visual exploration.\n\nAuditory Play: Expose your baby to different sounds (like music, jingling bells, or animal sounds) to encourage distinguishing between different sounds. This auditory stimulation is key to developing listening and language skills.",
      },
      {
        heading: "Encouraging Motor Skills",
        body: "Crawling Practice: Encourage your baby to reach for objects and use of reach to motivate them to move forward. Crawling strengthens their muscles and helps improve their coordination.\n\nAssisted Standing: When your baby can support themselves, let them practice standing with support, which helps develop leg strength and balance.\n\nGrasping and Releasing: Provide toys or objects your baby can grasp and practice transferring between hands. These activities build fine motor skills and hand-eye coordination.",
      },
    ],
  },
  {
    slug: "waddle",
    age: "9 months – 13 months",
    name: "Waddle",
    img: "/images/bba_waddler.jpg",
    desc: "English & Mandarin immersion setting and kindergarten readiness preparation through our play-based curriculum introduces world cultures & traditions through daily explorations.\n\nFrom 9 months to 13 months, toddlers become increasingly independent yet curious about their environments. They become more mobile, begin to express themselves verbally, and engage in more complex interactions with their environment and caregivers. It is a crucial time for fostering key developmental skills.",
    details: [
      {
        heading: "Language Stimulation",
        body: "Talk to Your Baby: Even though toddlers are still developing language, it's important to engage in frequent conversations with them. Use simple, clear language and describe objects, actions or emotions — e.g., 'This is an apple,' 'Mommy is here' — which helps babies understand language meaning.\n\nSinging and Storytelling: Singing songs and reading simple picture books will help your baby develop a sense of rhythm and an understanding of the sounds of speech. Rhymes and repetitive language are especially beneficial for language development.",
      },
      {
        heading: "Sensory Play and Exploration",
        body: "Tactile Play: Introduce different textures and materials like soft stuffed animals, hard blocks, and smooth plastic toys to stimulate your baby's sense of touch. These tactile experiences help them distinguish between stimuli.\n\nVisual Stimulation: Present objects with bright colors and simple shapes to help them pay attention and develop visually. Large picture books or colorful blocks are great tools for visual exploration.\n\nAuditory Play: Expose your baby to various sounds (like music, jingling bells, or animal sounds) to help them begin distinguishing between different sounds. This auditory stimulation is key to developing listening and language skills.",
      },
      {
        heading: "Encouraging Motor Skills",
        body: "Crawling: Encourage your baby to crawl by placing toys just out of reach to motivate them to move forward. Crawling strengthens their muscles and helps improve their coordination.\n\nAssisted Standing: When your baby can support themselves, let them practice standing with support, which helps develop leg strength and balance.\n\nGrasping and Releasing: Provide toys or objects that allow your baby to practice grasping, holding, and releasing. These activities build fine motor skills and hand-eye coordination.",
      },
    ],
  },
  {
    slug: "toddler",
    age: "12 – 24 months",
    name: "Toddler",
    img: "/images/bba_toddler.jpg",
    desc: "The preschool program at Bright Beams Academy School offers a variety of learning opportunities focused on preparing your child for preschool.\n\nThe period between 12 to 24 months is marked by significant growth in both physical and cognitive development. During this time, toddlers become more mobile, begin to express themselves verbally, and engage in more complex interactions with their environment and caregivers. It is a crucial time for fostering key developmental skills, cognitive growth, social development, and early learning experiences.",
    details: [
      {
        heading: "Language Development",
        body: "Vocabulary Growth & Communication Skills: As a toddler progresses, they are exposed to more language than they might encounter at home, which helps expand their vocabulary. Teachers use simple, concrete language to describe objects and activities, helping children understand new words and how to use them.\n\nListening and Comprehension: School activities help in developing listening skills. Children learn to understand simple commands and follow directions.",
      },
      {
        heading: "Social Skills Development",
        body: "Peer Interaction: A school setting provides countless opportunities to play, communicate, and bond with peers. These interactions not only help toddlers develop skills, but also help them develop empathy, communication, and learn to handle conflicts and cooperate with others.\n\nGroup Tasks and Sharing: School education encourages activities that involve taking turns and sharing toys, helping children learn about cooperation and the social rules of the classroom.",
      },
      {
        heading: "Cognitive and Motor Development",
        body: "Exploration and Learning: Toddlers participate in activities such as building blocks, puzzles, and shape sorting that promote cognitive development. These activities help children understand problem-solving and develop an understanding of the world around them.\n\nCreativity and Imagination: Children are encouraged to explore various creative activities such as drawing, singing, and role-playing. This creative play stimulates imagination and encourages cognitive and emotional development.",
      },
    ],
  },
  {
    slug: "early-preschool",
    age: "2 – 4 Years",
    name: "Early Preschool",
    img: "/images/bba_pschool.jpg",
    desc: "The preschool program at Bright Beams Academy is focused on preparing your child for kindergarten.\n\nThe age of 2 years is a pivotal time in a child's development. At this stage, children are becoming increasingly independent, more curious about their environment, and developing more language and social skills. Early school education for 2-year-olds focuses on building emerging abilities and helping children grow in a structured yet playful setting. This is a period when children begin to make more meaningful connections with the world around them.",
    details: [
      {
        heading: "Language-Enriched Environment",
        body: "Talking and Listening: Teachers consistently narrate what they are doing and create conversations throughout the day. For example, when a child picks up a toy, the teacher can say, 'You are stacking the blocks! Can you put the red one on top?' This narration engages children in language and reinforces their understanding.\n\nStorytime and Singing: Regular storytelling and songs engage children in language interactively, making books and music especially effective tools for early literacy.",
      },
      {
        heading: "Social and Emotional Learning",
        body: "Guided Play: Teachers facilitate play that encourages social interactions — building block houses together, stacking blocks, having pretend play — so children practice language and cooperation through play.\n\nManaging Emotions: Teachers model emotional awareness by naming feelings: 'You look upset' or 'You seem so happy,' and encourage children to talk about what they're feeling. This helps children understand the connection between their feelings and actions.\n\nTeaching Sharing and Taking Turns: Teachers use consistent rules and offer praise when children engage in cooperative behavior, helping them learn the social skills they'll need in kindergarten.",
      },
      {
        heading: "Exploration, Play and Self-Care",
        body: "Exploration and Discovery: Teachers provide safe, engaging activities that allow children to explore their interests — filling and dumping containers, sorting colors and shapes, or playing musical instruments — developing fine motor skills and curiosity.\n\nActive Play: Schools support physical development through running, jumping, and throwing activities that develop large muscle control and coordination.\n\nTeaching Self-Help Skills: Teachers model and encourage self-help skills such as washing hands, putting on shoes, and cleaning up. Providing small choices throughout the day helps children practice decision-making and builds independence and confidence.",
      },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
