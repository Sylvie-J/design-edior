import { GradientStyle } from '@/app/libs/design-core';
import React from 'react';
import { SidebarProps } from './Sidebar';
interface ColorSidebarProps extends SidebarProps {
    selected: string | null;
    gradient?: {
        colors: string[];
        style: GradientStyle;
    } | null;
    useGradient?: boolean;
    onSelect: (color: string) => void;
    onChangeGradient?: (gradient: {
        colors: string[];
        style: GradientStyle;
    }) => void;
}
declare const _default: React.ForwardRefExoticComponent<ColorSidebarProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
