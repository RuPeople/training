import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import GearShape from 'shared/assets/icons/gearshape.svg';
import {
 Button, ButtonBorderRadius, ButtonSize, ThemeButton,
} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Text',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const PrimaryDark = Template.bind({});
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
    theme: ThemeButton.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimarySizeS = Template.bind({});
PrimarySizeS.args = {
    size: ButtonSize.S,
};

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
    size: ButtonSize.M,
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    size: ButtonSize.L,
};

export const OutlineSizeS = Template.bind({});
OutlineSizeS.args = {
    size: ButtonSize.S,
    theme: ThemeButton.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    size: ButtonSize.M,
    theme: ThemeButton.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    size: ButtonSize.L,
    theme: ThemeButton.OUTLINE,
};

export const BorderRadiusS = Template.bind({});
BorderRadiusS.args = {
    borderRadius: ButtonBorderRadius.ROUND_S,
};

export const BorderRadiusM = Template.bind({});
BorderRadiusM.args = {
    borderRadius: ButtonBorderRadius.ROUND_M,
};

export const BorderRadiusL = Template.bind({});
BorderRadiusL.args = {
    borderRadius: ButtonBorderRadius.ROUND_L,
};

export const BorderRadiusAngled = Template.bind({});
BorderRadiusAngled.args = {
    borderRadius: ButtonBorderRadius.ANGLED,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: <GearShape />,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    children: '',
    icon: <GearShape />,
};
