import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { PageLoader } from 'widgets/PageLoader';
import { Profile } from 'entities/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly ?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const reloadPage = () => {
        window.location.reload();
    };

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <PageLoader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                {error}
                <Button onClick={reloadPage}>
                    {t('Reload page')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            {data?.avatar && (
                <Avatar
                    src={data?.avatar}
                    size={100}
                    className={cls.avatar}
                    alt={t('Avatar')}
                />
            )}
            <Input
                name="firstname"
                value={data?.firstname}
                placeholder={t('Firstname')}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                name="lastname"
                value={data?.lastname}
                placeholder={t('Lastname')}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                name="age"
                value={data?.age}
                placeholder={t('Age')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                name="city"
                value={data?.city}
                placeholder={t('City')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                name="username"
                value={data?.username}
                placeholder={t('Username')}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                name="username"
                value={data?.avatar}
                placeholder={t('Avatar')}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                disabled={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                disabled={readonly}
            />
        </div>
    );
};
