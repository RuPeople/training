import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Link, LinkTheme } from './Link';

export default {
    title: 'shared/Link',
    component: Link,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: LinkTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
    theme: LinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: LinkTheme.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Text',
    theme: LinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
