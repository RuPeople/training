import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useAppDispatch } from 'shared/lib/store/useAppDispatch';
import { useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const dispatch = useAppDispatch();

    const handleOnClose = useCallback(() => {
        dispatch(loginActions.clearError());

        onClose();
    }, [dispatch, onClose]);

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            isOpen={isOpen}
            onClose={handleOnClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
