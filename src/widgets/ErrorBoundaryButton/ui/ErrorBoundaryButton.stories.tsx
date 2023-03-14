import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ErrorBoundaryButton } from './ErrorBoundaryButton';

export default {
    title: 'dev/widgets/ErrorBoundaryButton',
    component: ErrorBoundaryButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorBoundaryButton>;

const Template:
    ComponentStory<typeof ErrorBoundaryButton> = () => <ErrorBoundaryButton />;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
