import classes from "./Modal.module.css";
const Modal = ({ children, setDisplayAlert }) => {
  return (
    <div className={classes.modal}>
      <div className={classes["modal-content"]}>
        <span onClick={() => setDisplayAlert(false)} className={classes.close}>
          &times;
        </span>
        <div className={classes.children}>{children}</div>
      </div>
    </div>
  );
};
export default Modal;
