import { Portal, PortalTarget } from "components";

interface ModalProps {
  handleClose: () => void;
}

export const Modal = ({ handleClose }: ModalProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <div>
        <p>You have registered at pixema</p>
        <button onClick={handleClose}>OK</button>
      </div>
    </Portal>
  );
};
