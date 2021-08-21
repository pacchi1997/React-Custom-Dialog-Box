import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.cancel} />;
}

function Overlay(props) {
  return (
    <>
      <Backdrop cancel={props.cancel} />
      <Card classModal={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>

        <footer className={styles.actions}>
          <Button onClick={props.cancel}>OKay</Button>
        </footer>
      </Card>
    </>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          cancel={props.cancel}
        />,
        document.getElementById("overlay")
      )}
    </>
  );
}

export default ErrorModal;
