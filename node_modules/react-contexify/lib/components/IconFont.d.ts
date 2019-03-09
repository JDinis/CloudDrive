import { SFC, ReactNode } from 'react';
import { StyleProps } from '../types';
export interface IconFontProps extends StyleProps {
    /**
     * Any valid node that can be rendered
     */
    children?: ReactNode;
}
declare const IconFont: SFC<IconFontProps>;
export { IconFont };
