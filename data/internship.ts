export type Internship = {
    company: string;
    location: string;
    role: string;
    duration: string;
    bullets: string[];
    skills: string[];
};

export const internships: Internship[] = [
    {
        company: "Ordering Pte Ltd",
        location: "Singapore",
        role: "Full Stack Software Engineer",
        duration: "May 2026 - Jun 2026",
        bullets: [
            "Delivered an end-to-end FomoPay Terminal management module using Laravel, Inertia.js, Vue.js: designed and migrated a dedicated PostgreSQL schema to decouple FomoPay TIDs from POS terminals, implemented company-scoped CRUD with server-side validation (unique TID per company, one-to-one terminal assignment, cross-company access control), and built the admin UI for assigning and managing TIDs across outlets.",
            "Built and maintained an end-to-end Excel bulk-import module using Laravel Excel (Maatwebsite), Inertia.js, Vue.js: orchestrated multi-sheet imports across 20+ catalog sheets (products, outlets, price levels, modifiers, folders, etc.), implemented company-scoped row validation and upsert-based price ingestion with chunked/queued processing for large files, added post-import sale-price default normalization to prevent missing/duplicate defaults, and delivered real-time import progress/success/failure feedback via queued jobs and WebSocket broadcasting.",
            "Built and improved the Z-Read recompute flow for a multi-outlet POS system: recalculate shift totals from receipts, regenerate end-of-shift PDF reports, and persist documents to S3-compatible object storage (MinIO) with polymorphic database associations.",
            "Enhanced reusable Vue.js UI components (side-panel modals, CRUD forms, validation/error states) across the admin portal, improving layout consistency and interaction patterns for create/update/delete workflows.",
            "Added automated feature tests (Pest/PHPUnit) covering create/update/delete flows and edge cases (duplicate TIDs, invalid terminal assignment, multi-tenant isolation), improving reliability before release.",
            "Developed a static documentation site (Astro + Starlight) for Akiba; organized multi-section content architecture for POS and dashboard guides.",
        ],
        skills: ["Astro", "PostgreSQL", "Vue.js", "Laravel", "PHPUnit", "Inertia.js"],
    },
    {
        company: "Bank of Communications",
        location: "Sichuan Provincial Branch, China",
        role: "Fintech Intern & Part of Customer Service Team",
        duration: "Nov 2025 - Dec 2025",
        bullets: [
            "Used advanced formulas (VLOOKUP, INDEX/MATCH) and automated Excel templates for pivot tables, boosted team productivity 3x by optimizing processes and automating manual data entry.",
            "Empowered colleagues by providing training on Excel automation features, enabling the team to streamline daily administrative workflows and significantly increasing overall office productivity.",
            "Managed over 50 inquiries daily, improving customer service efficiency, optimizing lobby traffic flow, and reduced customer waiting time.",
        ],
        skills: ["Microsoft Excel"],
    },
];
