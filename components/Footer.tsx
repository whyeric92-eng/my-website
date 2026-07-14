import { contact } from '@/data/contact';

export default function Footer() {
    return (
        <footer> 
            <div> {contact.email} </div>
            <div> {contact.linkedin} </div>
            <div> {contact.phoneNumber} </div>
        </footer>
    );
}