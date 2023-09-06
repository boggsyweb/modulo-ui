import React, { ReactNode } from 'react';
type ModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    children?: ReactNode;
    OutsideClick?: boolean;
};
declare const Modal: React.FC<ModalProps>;
export default Modal;
