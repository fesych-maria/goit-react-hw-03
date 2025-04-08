import css from "./Contact.module.css";

const Contact = ({ name, number, id, handleClick }) => {
  return (
    <div className={css.wrapper}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => handleClick(id)}>Delete</button>
    </div>
  );
};

export default Contact;
