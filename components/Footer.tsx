import { contact } from '@/data/contact';

export default function Footer() {
    return (
        <footer> 
            <div> {contact.email} </div>
            <a href={contact.linkedin}> {contact.linkedin} </a>
            <div> {contact.phoneNumber} </div>
        </footer>
    );
}