import React, {useRef} from 'react';
import {Button, Modal as BootstrapModal} from 'react-bootstrap';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    actionEnabled?: boolean;
    size?: 'sm' | 'lg' | 'xl' | undefined;
    disabled?: boolean;
    secondaryAction?: boolean;
    secondaryActionLabel?: string;
    onSecondaryAction?: () => void;
    withoutSubmit?: boolean;
}

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                         onSubmit,
                                         title,
                                         body,
                                         actionLabel,
                                         actionEnabled= true,
                                         footer,
                                         size,
                                         disabled,
                                         secondaryAction,
                                         secondaryActionLabel,
                                         onSecondaryAction,
                                         withoutSubmit
                                     }) => {
    // if onSecondaryAction is not provided, set it to onClose
    onSecondaryAction = onSecondaryAction || onClose;
    return (
        <BootstrapModal show={isOpen} onHide={onClose} centered size={size} animation>
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>{title}</BootstrapModal.Title>
            </BootstrapModal.Header>

            <BootstrapModal.Body>{body}</BootstrapModal.Body>
            {!withoutSubmit && (
            <BootstrapModal.Footer>

                <Button variant="primary" onClick={onSubmit} disabled={disabled || !actionEnabled}>
                    {actionLabel}
                </Button>

                {secondaryAction && (
                    <Button variant="secondary" onClick={onSecondaryAction} disabled={disabled}>
                        {secondaryActionLabel}
                    </Button>
                )}

            </BootstrapModal.Footer>
            )}
        </BootstrapModal>
    );
};

export default Modal;
