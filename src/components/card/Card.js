import { useState } from 'react';
import PropTypes from 'prop-types';
import DisplayCard from './DisplayCard';
import EditableCard from './EditableCard';

const Card = props => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <EditableCard
          onConfirm={() => setIsEditing(false)}
          onCancel={() => setIsEditing(false)}
          {...props}
        />
      ) : (
        <DisplayCard onEdit={() => setIsEditing(true)} {...props} />
      )}
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number.isRequired,
  isUnusual: PropTypes.bool.isRequired,
};

export default Card;
