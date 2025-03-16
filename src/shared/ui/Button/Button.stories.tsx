import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};
export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
