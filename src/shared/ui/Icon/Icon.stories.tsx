import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import GearShape from 'shared/assets/icons/gearshape.svg';
import {
    Icon, IconSize,
} from './Icon';

export default {
    title: 'shared/Icon',
    component: Icon,
    args: {
        icon: <GearShape />,
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimarySizeS = Template.bind({});
PrimarySizeS.args = {
    size: IconSize.S,
};

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
    size: IconSize.M,
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    size: IconSize.L,
};
