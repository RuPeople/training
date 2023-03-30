import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    args: {
        name: 'test',
        type: 'text',
    },
    decorators: [
        StoreDecorator({
            login: { username: '123', password: 'asd', isLoading: false },
        }),
    ],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoading = Template.bind({});
IsLoading.decorators = [StoreDecorator({
    login: { isLoading: true },
})];

export const WithError = Template.bind({});
WithError.decorators = [StoreDecorator({
    login: { error: 'ERROR' },
})];
