import { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TriggerEvent, StyleProps, MenuId } from '../types';
export interface MenuProps extends StyleProps {
    /**
     * Unique id to identify the menu. Use to Trigger the corresponding menu
     */
    id: MenuId;
    /**
     * Any valid node that can be rendered
     */
    children: ReactNode;
    /**
     * Theme is appended to `react-contexify__theme--${given theme}`.
     *
     * Built-in theme are `light` and `dark`
     */
    theme?: string;
    /**
     * Animation is appended to `.react-contexify__will-enter--${given animation}`
     *
     * Built-in animations are fade, flip, pop, zoom
     */
    animation?: string;
}
interface MenuState {
    x: number;
    y: number;
    visible: boolean;
    nativeEvent: TriggerEvent;
    propsFromTrigger: object;
}
declare class Menu extends Component<MenuProps, MenuState> {
    static propTypes: {
        id: PropTypes.Validator<MenuId>;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        theme: PropTypes.Requireable<string>;
        animation: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    state: {
        x: number;
        y: number;
        visible: boolean;
        nativeEvent: TriggerEvent;
        propsFromTrigger: {};
    };
    menuRef: HTMLDivElement;
    unsub: (() => boolean)[];
    componentDidMount(): void;
    componentWillUnmount(): void;
    bindWindowEvent: () => void;
    unBindWindowEvent: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    hide: (event?: Event | undefined) => void;
    handleKeyboard: (e: KeyboardEvent) => void;
    setRef: (ref: HTMLDivElement) => void;
    setMenuPosition(): void;
    getMousePosition(e: TriggerEvent): {
        x: number;
        y: number;
    };
    show: (e: TriggerEvent, props: object) => void;
    render(): JSX.Element;
}
export { Menu };
