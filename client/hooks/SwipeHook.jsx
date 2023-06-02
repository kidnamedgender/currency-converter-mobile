import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export function useSwipe(onSwipeLeft, onSwipeRight, onSwipeUp, rangeOffset = 4) {

    let firstTouchX = 0
    let firstTouchY = 0

    // set user touch start position
    function onTouchStart(e) {
        firstTouchX = e.nativeEvent.pageX
        firstTouchY = e.nativeEvent.pageY
    }

    // when touch ends check for swipe directions
    function onTouchEnd(e) {

        // get touch position and screen size
        const positionX = e.nativeEvent.pageX
        const positionY = e.nativeEvent.pageY
        const range = windowWidth / rangeOffset

        // check if position is growing positively and has reached specified range

        if (positionY - firstTouchY > range) {
            onSwipeUp && onSwipeUp()
        }

        if (positionX - firstTouchX > range) {
            onSwipeRight && onSwipeRight()
        }
        // check if position is growing negatively and has reached specified range
        else if (firstTouchX - positionX > range) {
            onSwipeLeft && onSwipeLeft()
        }
    }

    return {onTouchStart, onTouchEnd};
}