const Contact = ({ name, number, id, handleClick }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => handleClick(id)}>Delete</button>
    </div>
  );
};

export default Contact;
