import { MenuId } from '../types';
import React from 'react';
export interface ContextMenu {
    show: (params: {
        id: MenuId;
        event: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent;
        props?: object;
    }) => void;
    hideAll: () => void;
}
declare const contextMenu: ContextMenu;
export { contextMenu };
