export const bio: string =
    'I am a Computer Science student at Nanyang Technological University (NTU) and a Science & Technology Scholar. As an aspiring full-stack developer, I spearhead the "AI Companion" mobile app, developing the frontend with React Native and building a high-performance FastAPI backend to integrate the Gemini API. As a proactive leader, I serve as a member of the Tanjong Pagar Community Club and successfully organized an internal football tournament for over 70 players. I am eager to connect with fellow innovators and explore 2026 Summer Internship opportunities in software development.';

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
        role: "Sports Interest Group - Sub Committee, Internal Tournament Organizer",
        duration: "Jan 2025 - Present",
        bullets: [
            "Orchestrated a large-scale internal tournament for more than 70 players, fostering community bonding and promoting an active lifestyle.",
            "Designed comprehensive match schedules and documentation, managing the end-to-end logistics from fixture planning to on-site execution.",
        ],
    },
    {
        organization: "NTU Chinese Society (NTUCS)",
        role: "Sub-Committee Member",
        duration: "Sep 2025 - Oct 2025",
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
