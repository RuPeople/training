import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileIsLoading } from 'entities/Profile';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { PageLoader } from 'widgets/PageLoader';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const reloadPage = () => {
        window.location.reload();
    };

    if (isLoading) {
        return (
            <PageLoader />
        );
    }

    if (error) {
        return (
            <>
                {error}
                <Button onClick={reloadPage}>
                    {t('Reload page')}
                </Button>
            </>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text as="h2" className={cls.title}>{t('Profile')}</Text>
                <Button theme={ThemeButton.OUTLINE} size={ButtonSize.M}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    name="firstname"
                    value={data?.firstname}
                    placeholder={t('Firstname')}
                />
                <Input
                    name="lastname"
                    value={data?.lastname}
                    placeholder={t('Lastname')}
                />
            </div>
        </div>
    );
};
