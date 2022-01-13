import "./EmployeeForm.css";
import { FC, useState } from "react";
import Swal from "sweetalert2";

const EmployeeForm: FC<{
  createEmployee: Function;
  openModal: boolean;
  setOpenModal: Function;
}> = ({ createEmployee, openModal, setOpenModal }) => {
  const RegexName: RegExp =
    /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]{3,60}(([ ][a-zA-Z\u00C0-\u024F\u1E00-\u1EFF ])?[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF ]*)*$/;
  const EmailRegex: RegExp =
    /^[a-z0-9!#$%&.'*+/=?^_`{|}~-]+@[a-z0-9-]+(\.[a-z0-9-]{2,})+$/i;

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
    if (!name) {
      Swal.fire({
        icon: "error",
        title: "Es necesario agregar el nombre",
      });
    }
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Es necesario agregar el correo",
      });
    }
    if (!telephone) {
      Swal.fire({
        icon: "error",
        title: "Es necesario agregar el telefono",
      });
    }
    if (!file) {
      Swal.fire({
        icon: "error",
        title: "Es necesario agregar una imagen",
      });
    }
    if (!RegexName.test(name)) {
      Swal.fire({
        icon: "error",
        title: "Ingrese un nombre valido",
      });
    }
    if (!EmailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Ingrese un correo valido",
      });
    }
    if (name && email && telephone && file) {
      createEmployee(name, email, telephone, file);
      setOpenModal(!openModal);
    }
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
        maxLength={80}
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Correo"
        maxLength={80}
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
