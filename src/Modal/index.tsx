import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, openModal, setOpenModal }: any) {
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
}

export { Modal };
