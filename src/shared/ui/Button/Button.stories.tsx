import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

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

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: SizeButton.L,
    },
};

export const OutlineSizeM: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
        size: SizeButton.M,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const backgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND,
    },
};

export const invertedBackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareL: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.L,
    },
};

export const SquareM: Story = {
    args: {
        children: '>',
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: SizeButton.M,
    },
};
