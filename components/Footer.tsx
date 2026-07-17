import { contact } from '@/data/contact';

export default function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-0 z-10 border-t border-zinc-200 bg-background/80 px-6 py-6 text-sm text-zinc-500 backdrop-blur dark:border-zinc-800 dark:text-zinc-400">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
                <a href={`mailto:${contact.email}`} className="hover:text-zinc-900 dark:hover:text-zinc-100">
                    {contact.email}
                </a>
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-zinc-700 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
                >
                    LinkedIn
                </a>
                <div>{contact.phoneNumber}</div>
            </div>
        </footer>
    );
}