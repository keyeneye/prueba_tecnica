import React, { FC, useState } from "react";

const EmployeeForm: FC<{ createEmployee: Function }> = ({ createEmployee }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [file, setFile] = useState();
  const onSubmit = (e: any) => {
    e.preventDefault();
    createEmployee(name, email, telephone, file);
  };
  return (
    <form onSubmit={onSubmit}>
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
      <input
        onChange={(e: any) => setFile(e.target.files[0])}
        type="file"
        accept="image/*"
      />
      <button type="submit">Cargar</button>
    </form>
  );
};

export { EmployeeForm };
