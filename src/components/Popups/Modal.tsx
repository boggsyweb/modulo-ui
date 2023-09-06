import styled from '@emotion/styled'
import React, { ReactNode, MouseEvent, useRef } from 'react';

type ModalProps = {
    isOpen?: boolean;
    onClose: () => void;
    children?: ReactNode;
    OutsideClick?: boolean;
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const ModalContent = styled.div`
  padding: 1.5em;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const Modal: React.FC<ModalProps> = ({ 
    isOpen, 
    onClose, 
    OutsideClick = true,
    children 
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (OutsideClick && modalRef.current === event.target) {
          onClose();
        }
        
      };    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={handleOutsideClick} ref={modalRef}>
            <ModalContent>
                {children}
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </ModalOverlay>
    )
};
export default Modal