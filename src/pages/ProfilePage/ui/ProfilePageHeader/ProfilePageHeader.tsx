import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/store/useAppDispatch';
import { memo, useCallback } from 'react';
import {
    updateProfileData,
} from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const handleOnEditButtonClick = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const handleOnCancelButtonClick = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const handleOnSaveButtonClick = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text as="h2" className={cls.title}>{t('Profile')}</Text>
            <div className={cls.buttons}>
                {readonly && (
                    <Button
                        onClick={handleOnEditButtonClick}
                        theme={ThemeButton.OUTLINE}
                        size={ButtonSize.M}
                    >
                        {t('Edit')}
                    </Button>
                )}
                {!readonly && (
                    <>
                        <Button
                            theme={ThemeButton.OUTLINE}
                            size={ButtonSize.M}
                            onClick={handleOnCancelButtonClick}
                        >
                            {t('Cancel')}
                        </Button>
                        <Button
                            theme={ThemeButton.PRIMARY}
                            size={ButtonSize.M}
                            onClick={handleOnSaveButtonClick}
                        >
                            {t('Save')}
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
});
