import { FC } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal: FC<{
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: Function;
}> = ({ children, openModal, setOpenModal }) => {
  return ReactDOM.createPortal(
    openModal && (
      <div className="modal-wrapper" onClick={() => setOpenModal(false)}>
        <div
          className="modal-content"
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    ),
    document.getElementById("modal") as Element
  );
};

export { Modal };
