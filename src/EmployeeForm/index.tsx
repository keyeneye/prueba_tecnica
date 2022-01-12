import "./EmployeeForm.css";
import { FC, useState } from "react";

const EmployeeForm: FC<{
  createEmployee: Function;
  openModal: boolean;
  setOpenModal: Function;
}> = ({ createEmployee, openModal, setOpenModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [file, setFile] = useState();
  const [imgPreview, setImgPreview] = useState("/no_image.jpg");
  const onCancel = () => {
    setOpenModal(!openModal);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (name && email && telephone && file) {
      createEmployee(name, email, telephone, file);
    }
    setOpenModal(!openModal);
  };
  const setImage = (e: any) => {
    const file = e.target.files[0];
    setFile(file);
    setImgPreview(URL.createObjectURL(file));
  };
  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      <div className="EmployeeForm__container">
        <img
          className="EmployeeForm__container__img"
          src={imgPreview}
          alt={name + email}
        />
      </div>
      <div className="EmployeeForm__container__upload">
        <input
          className="EmployeeForm__container__input"
          id="employee_image"
          onChange={setImage}
          type="file"
          accept="image/*"
        />
        <label className="" htmlFor="employee_image">
          Cargar imagen
        </label>
      </div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Nombre"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Correo"
      />
      <input
        onChange={(e) => setTelephone(e.target.value)}
        type="tel"
        placeholder="Telefono"
        maxLength={10}
      />
      <div className="EmployeeForm__buttons">
        <button
          className="EmployeeForm__cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="EmployeeForm__add" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
};

export { EmployeeForm };
