import { ReactNode } from 'react';
import I18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={I18nForTests}>
            {component}
        </I18nextProvider>,
    );
}
