import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { useState } from 'react';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    args: {
        name: 'test',
        type: 'text',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    const { value } = args;
    const [inputValue, setInputValue] = useState(value ?? '');

    return (
        <Input
            {...args}
            onChange={(e) => {
                setInputValue(e);
            }}
            value={inputValue}
        />
    );
};

export const Primary = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    placeholder: 'Placeholder',
};

export const WithButton = Template.bind({});
WithButton.args = {
    value: 'ewqeqwe',
    withButton: true,
};

export const WithAutofocus = Template.bind({});
WithAutofocus.args = {
    autoFocus: true,
};
