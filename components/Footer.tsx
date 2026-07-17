import { Mail, ExternalLink, Phone } from 'lucide-react';
import { contact } from '@/data/contact';

export default function Footer() {
    return (
        <footer className="fixed inset-x-0 bottom-0 z-10 border-t border-zinc-200 bg-background/80 px-6 py-4 text-sm text-zinc-500 backdrop-blur dark:border-zinc-800 dark:text-zinc-400">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
                <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-1.5 hover:text-accent"
                >
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                    {contact.email}
                </a>
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 font-medium text-zinc-700 hover:text-accent dark:text-zinc-300"
                >
                    <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                    LinkedIn
                </a>
                <div className="flex items-center gap-1.5">
                    <Phone className="h-4 w-4" strokeWidth={1.75} />
                    {contact.phoneNumber}
                </div>
            </div>
        </footer>
    );
}