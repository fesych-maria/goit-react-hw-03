import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, handleClick }) => {
  return (
    <div className={css.wrapper}>
      <div>
        <div>
          <FaUser />
          <p>{name}</p>
        </div>
        <div>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={() => handleClick(id)}>Delete</button>
    </div>
  );
};

export default Contact;
