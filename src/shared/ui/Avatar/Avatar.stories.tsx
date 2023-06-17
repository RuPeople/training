import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        // eslint-disable-next-line max-len
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0szgOQjoMtERPPGc94M59ryDj0IJgtUhlmALZEBY&s',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: 30,
};
