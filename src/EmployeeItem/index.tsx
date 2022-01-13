import { FC } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./EmployeeItem.css";

const EmployeeItem: FC<{
  name: string;
  email: string;
  telephone: string;
  img: string;
  id: string;
  deleteEmployee: Function;
}> = ({ name, email, telephone, img, id, deleteEmployee }) => {
  const deleteItem = () => {
    deleteEmployee(id, name);
  };

  return (
    <>
      <div className="EmployeeItem">
        <img className="EmployeeItem__image" src={img} alt={name} />
        <div className="EmployeeItem__description">
          <div className="EmployeeItem__description__text">
            <p>{name}</p>
            <p>{email}</p>
            <p>{telephone}</p>
          </div>
          <button
            className="EmployeeItem__button"
            type="button"
            onClick={deleteItem}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export { EmployeeItem };
