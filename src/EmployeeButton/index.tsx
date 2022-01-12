import React, { FC } from "react";

const EmployeeButton: FC<{
  openModal: boolean;
  setOpenModal: Function;
}> = ({ openModal, setOpenModal }) => {
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <button className="EmployeeButton" onClick={toggleModal}>
      +
    </button>
  );
};

export { EmployeeButton };
