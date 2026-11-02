export const bio: string[] = [
    "I am a Computer Science student at Nanyang Technological University (NTU) and a Science & Technology Scholar. I enjoy building full-stack products end to end, and I am increasingly interested in applications powered by large language models.",
    "During my internship at Ordering Pte Ltd, I worked across the Laravel, Vue.js and PostgreSQL stack of a multi-outlet POS platform, building payment terminal management, a queued catalog import pipeline with real-time progress, and reliability fixes for end-of-shift reporting.",
    'Outside work, I built and published "AI Companion" (TPCC-app) on the App Store and Google Play: a React Native app backed by a FastAPI service that integrates Google Gemini through the Agent Development Kit, deployed on Google Cloud Run with a CI/CD pipeline. I am currently learning Java and Spring Boot through a personal project.',
    "Beyond tech, I volunteer with the Tanjong Pagar Community Club, where I organised an internal football tournament for over 70 players.",
];

export type Education = {
    school: string;
    degree: string;
    duration: string;
    details: string[];
};

export const education: Education = {
    school: "Nanyang Technological University, Singapore",
    degree: "Bachelor of Computing in Computer Science",
    duration: "Aug 2025 - Present",
    details: [
        "CGPA: 4.9/5.0 (Equivalent to Highest Distinction)",
        "NTU Science and Technology Undergraduate Scholarship (S&T Scholarship)",
        "Ranked 1st out of 50 scholars in both Overall and Mathematics assessments during the Bridging Programme.",
    ],
};

export type CommunityExperience = {
    organization: string;
    role: string;
    duration: string;
    bullets: string[];
};

export const communityExperience: CommunityExperience[] = [
    {
        organization: "Tanjong Pagar Community Club",
        role: "Sports Interest Group - Sub-Committee, Internal Tournament Organizer",
        duration: "Jan 2025 - Present",
        bullets: [
            "Orchestrated a large-scale internal tournament for more than 70 players, fostering community bonding and promoting an active lifestyle.",
            "Designed comprehensive match schedules and documentation, managing the end-to-end logistics from fixture planning to on-site execution.",
        ],
    },
    {
        organization: "NTU Chinese Society (NTUCS)",
        role: "Sub-Committee Member",
        duration: "Sep 2025 - Present",
        bullets: [
            "Coordinated logistics and operations for annual Mid-Autumn Festival celebration, attracting over 100+ participants.",
            "Collaborated with a team of 20+ to execute event programs, ensuring smooth transitions between cultural performances and interactive booths.",
        ],
    },
];

export const hobbies: string[] = [
    "Travelling",
    "Football",
    "Reading (Sci-Fi/Tech)",
    "Puzzle Solving",
];
