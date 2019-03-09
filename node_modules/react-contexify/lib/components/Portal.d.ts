import { PureComponent, ReactNode } from 'react';
declare class Portal extends PureComponent<{
    children: ReactNode;
}> {
    state: {
        canRender: boolean;
    };
    container: HTMLDivElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): false | import("react").ReactPortal;
}
export { Portal };
