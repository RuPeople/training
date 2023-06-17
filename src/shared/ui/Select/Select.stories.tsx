import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    args: {
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select: ',
    options: [
        { value: '123', content: 'first' },
        { value: '4321', content: 'second' },
    ],
};
