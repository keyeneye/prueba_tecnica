import React, { FC, useState } from "react";

const EmployeeCreate: FC<{ createEmployee: Function }> = ({
  createEmployee,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [file, setFile] = useState();
  return <div></div>;
};

export { EmployeeCreate };
