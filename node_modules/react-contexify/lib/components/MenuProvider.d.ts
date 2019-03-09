import { Component, ReactNode, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { MenuId, StyleProps } from '../types';
export interface MenuProviderProps extends StyleProps {
    /**
     * Unique id to identify the menu. Use to Trigger the corresponding menu
     */
    id: MenuId;
    /**
     * Any valid node that can be rendered
     */
    children: ReactNode;
    /**
     * Any valid node that can be rendered or a function returning a valid react node
     */
    component: ReactNode | ((args?: any) => ReactNode);
    /**
     * Render props
     */
    render?: (args?: any) => ReactNode;
    /**
     * Any react event
     * `onClick`, `onContextMenu`, ...
     */
    event: string;
    /**
     * Store children ref
     * `default: true`
     */
    storeRef: boolean;
    /**
     * Any valid object, data are passed to the menu item callback
     */
    data?: object;
}
declare class MenuProvider extends Component<MenuProviderProps> {
    static propTypes: {
        id: PropTypes.Validator<MenuId>;
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        component: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        render: PropTypes.Requireable<(...args: any[]) => any>;
        event: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        storeRef: PropTypes.Requireable<boolean>;
        data: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        component: string;
        event: string;
        storeRef: boolean;
    };
    childrenRefs: HTMLElement[];
    handleEvent: (e: SyntheticEvent<Element>) => void;
    setChildRef: (ref: HTMLElement) => number | true;
    getChildren(): import("react").ReactChild[];
    render(): {} | null | undefined;
}
export { MenuProvider };
