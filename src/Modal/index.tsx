import ReactDOM from "react-dom";

function Modal({ children }: any) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal") || document.createElement("div")
  );
}

export { Modal };
