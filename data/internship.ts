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
        role: "Full-Stack Software Engineer",
        duration: "Apr 2026 - Jun 2026",
        bullets: [
            "Delivered an end-to-end FomoPay Terminal management module using Laravel, Inertia.js, Vue.js: moved FomoPay TIDs out of the POS terminals table into a dedicated, company-scoped PostgreSQL table, enforced one-to-one binding with database constraints and server-side validation (unique TID per company, cross-company access control), and built the admin UI so TIDs can be registered in advance, re-bound to another terminal, and kept when a terminal is removed.",
            "Rebuilt the Excel catalog import with Laravel Excel (Maatwebsite) to support on-demand import of any one of 23 catalog sheets (products, outlets, price levels, modifiers, folders, etc.), running imports as queued, chunked background jobs with company-scoped row validation and per-sheet progress broadcast via WebSocket, keeping the interface responsive during large imports.",
            "Resolved duplicate default sale prices in imported catalogs by adding a post-import normalizer that keeps exactly one default price per outlet product, ensuring consistent pricing across outlets.",
            "Implemented email delivery of Z-Read (end-of-shift) PDF reports, and fixed a data-loss issue in shift recomputation by deferring deletion of the previous PDF in MinIO until the database transaction commits, preserving report integrity when a recomputation fails.",
            "Redesigned the product, product category and layout pages and added traffic and category pie charts to the dashboard using Vue.js + Inertia.js, resolving responsive layout issues so the admin portal works well on both desktop and mobile.",
            "Wrote 18 feature tests (Pest/PHPUnit) covering create/update/delete flows and edge cases (duplicate TIDs, invalid terminal assignment, multi-tenant isolation), improving reliability before release.",
            "Wrote 5 dashboard user guides on an Astro + Starlight documentation site and localized the docs into Chinese (10 pages), giving Chinese-speaking merchants self-service guides for the POS and dashboard.",
        ],
        skills: ["Laravel", "Vue.js", "Inertia.js", "PostgreSQL", "Laravel Excel", "WebSocket", "MinIO", "Pest/PHPUnit", "Astro"],
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
