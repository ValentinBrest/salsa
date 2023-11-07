import { useMediaQuery } from 'react-responsive';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, Modal } from 'shared/ui';

import './FormModal.scss';

interface FormModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    isMounted: boolean;
}

export const FormModal = (props: FormModalProps) => {
    const { className, isOpen, onClose, isMounted} = props;
    const isTabletScreen = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <Modal
            className={classNames('modalX', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            isMounted={isMounted}
        >
            <Card>Здесь дожна быть политика конфиденциальности</Card>
        </Modal>
    );
};
