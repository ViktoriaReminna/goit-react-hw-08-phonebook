import { Box } from 'components/Box';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/ContactFilter';
import style from './Contacts.module.css';
import { ContactForm } from 'components/FormContacts';

export default function ContactsPage() {
  return (
    <Box>
      <div className={style.box}>
        <h1 className={style.primeryTitle}>Phonebook</h1>
        <ContactForm />
        <h2 className={style.secondaryTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Box>
  );
}
