import { FC } from "react";

const EmployeeItem: FC<{
  name: string;
  email: string;
  telephone: string;
  img: string;
  id: string;
  deleteEmployee: Function;
}> = ({ name, email, telephone, img, id, deleteEmployee }) => {
  const deleteItem = () => {
    deleteEmployee(id);
  };

  return (
    <>
      <div className="EmployeeItem">
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <h3>{email}</h3>
          <h3>{telephone}</h3>
        </div>
        <button type="button" onClick={deleteItem}>
          Delete
        </button>
      </div>
    </>
  );
};

export { EmployeeItem };
