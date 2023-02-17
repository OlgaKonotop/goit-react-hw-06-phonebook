// import PropTypes from 'prop-types';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Form } from '../Form/Form';
import { PhoneBook, Container, PhoneContacts } from './App.styled';

export default function App() {
  return (
    <Container>
      <PhoneBook>Телефонна книга</PhoneBook>
      <Form />
      <PhoneContacts>Контакти</PhoneContacts>
      <Filter></Filter>
      <ContactList />
    </Container>
  );
}

// App.propTypes = {
//   onSubmitName: PropTypes.object,
// };
