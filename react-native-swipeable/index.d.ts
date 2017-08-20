import {Component} from 'react';

declare module 'react-native-swipeable'
{

    interface Props
    {
        onLeftActionRelease ?: () => void
        onRightActionRelease ?: () => void
        onRef ?: () => void
        onPanAnimatedValueRef ?: () => void

        children ?: JSX.Element
        leftContent ?: JSX.Element
        rightContent ?: JSX.Element
        leftButtons ?: Array<JSX.Element>
        rightButtons ?: Array<JSX.Element>

        leftActionActivationDistance ?: number
        rightActionActivationDistance ?: number
        leftButtonWidth ?: number
        rightButtonWidth ?: number
    }

    export default class Swipeable extends Component<Props, any> {}

}


