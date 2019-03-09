import { Component, ReactNode, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { MenuItemEventHandler, TriggerEvent, StyleProps, InternalProps } from '../types';
export interface SubMenuProps extends StyleProps, InternalProps {
    /**
     * Any valid node that can be rendered
     */
    label: ReactNode;
    /**
     * Any valid node that can be rendered
     */
    children: ReactNode;
    /**
     * Render a custom arrow
     */
    arrow: ReactNode;
    /**
     * Disable or not the `Submenu`. If a function is used, a boolean must be returned
     */
    disabled: boolean | ((args: MenuItemEventHandler) => boolean);
}
interface SubMenuState {
    left?: string | number;
    right?: string | number;
    top?: string | number;
    bottom?: string | number;
}
declare class Submenu extends Component<SubMenuProps, SubMenuState> {
    static propTypes: {
        label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        nativeEvent: PropTypes.Requireable<object>;
        arrow: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        disabled: PropTypes.Requireable<boolean | ((...args: any[]) => any)>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        arrow: string;
        disabled: boolean;
        nativeEvent: TriggerEvent;
    };
    state: {
        left: string;
        top: number;
        bottom: string;
    };
    menu: HTMLElement;
    setRef: (ref: HTMLDivElement) => void;
    componentDidMount(): void;
    handleClick(e: SyntheticEvent): void;
    render(): JSX.Element;
}
export { Submenu };
