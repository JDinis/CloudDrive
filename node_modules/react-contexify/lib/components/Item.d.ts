import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { MenuItemEventHandler, StyleProps, InternalProps } from '../types';
export interface ItemProps extends StyleProps, InternalProps {
    /**
     * Any valid node that can be rendered
     */
    children: ReactNode;
    /**
     * Passed to the `Item` onClick callback. Accessible via `props`
     */
    data?: object;
    /**
     * Disable or not the `Item`. If a function is used, a boolean must be returned
     */
    disabled: boolean | ((args: MenuItemEventHandler) => boolean);
    /**
     * Callback when the current `Item` is clicked. The callback give you access to the current event and also the data passed
     * to the `Item`.
     * `({ event, props }) => ...`
     */
    onClick: (args: MenuItemEventHandler) => any;
}
declare class Item extends Component<ItemProps> {
    static propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        data: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean | ((...args: any[]) => any)>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        nativeEvent: PropTypes.Requireable<object>;
        propsFromTrigger: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        disabled: boolean;
        onClick: () => void;
    };
    isDisabled: boolean;
    constructor(props: ItemProps);
    handleClick: (e: React.MouseEvent<Element>) => void;
    render(): JSX.Element;
}
export { Item };
