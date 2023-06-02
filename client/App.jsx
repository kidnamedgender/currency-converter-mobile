import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import {useSwipe} from "./hooks/SwipeHook";

import {store} from './store';
import {Provider, useDispatch} from 'react-redux';
import {WithSplashScreen} from './components/Splash';

import {NativeRouter, Route, Routes, useNavigate} from 'react-router-native';
import ConverterPage from './pages/ConverterPage';
import ValutePage from './pages/ValutePage';
import {getValutes} from "./store/slices/valuteSlice";

function App() {
    const [isAppReady, setIsAppReady] = React.useState(false);
    React.useEffect(() => {
        setIsAppReady(true);
    }, [isAppReady]);
    const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight, onSwipeUp, 6)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function onSwipeLeft() {
        navigate('/converter')
    }

    function onSwipeRight() {
        navigate('/')
    }

    function onSwipeUp() {
        dispatch(getValutes());
        console.log('Data update successfully')
    }

    return (
        <WithSplashScreen isAppReady={isAppReady} style={{height: '100%'}}>
            <SafeAreaView style={{height: '100%'}}>
                <ScrollView onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd} style={{height: '100%'}}>
                    <View style={{backgroundColor: '#ffffff', height: '100%'}}>
                        <Routes>
                            <Route path={'/'} element={<ValutePage/>}/>
                            <Route path={'/converter'} element={<ConverterPage/>}/>
                        </Routes>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </WithSplashScreen>
    );
}

export default () => {
    return (
        <NativeRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </NativeRouter>
    );
};
