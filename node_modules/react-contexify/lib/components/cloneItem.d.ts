import { ReactNode, ReactElement } from 'react';
import { TriggerEvent } from '../types';
export declare function cloneItem(children: ReactNode, props: {
    nativeEvent: TriggerEvent;
    propsFromTrigger?: object;
}): ReactElement<any>[];
