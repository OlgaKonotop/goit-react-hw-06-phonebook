import {
  Contact,
  Button,
  ContactCard,
} from 'components/ContactItem/ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <ContactCard>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={handleDelete}>
        Видалити
      </Button>
    </ContactCard>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
