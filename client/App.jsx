import React from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';

import {store} from './store';
import {Provider, useDispatch} from 'react-redux';

import {NativeRouter, Route, Routes, useNavigate} from 'react-router-native';
import {getValutes} from './store/slices/valuteSlice';
import ValutePage from "./pages/ValutePage";
import ConverterPage from "./pages/ConverterPage";
import {WithSplashScreen} from "./components/Splash";

const SCREEN_WIDTH = Dimensions.get("screen").width

function App() {

    const [isAppReady, setIsAppReady] = React.useState(false);
    React.useEffect(() => {
        setIsAppReady(true);
    }, [isAppReady]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRight = () => {
        navigate('/converter');
    }
    const handleLeft = () => {
        navigate('/');
    }

    const handleScrollUp = (event) => {
        if (!event.nativeEvent.contentOffset.y) {
            dispatch(getValutes());
            console.log('Data update successfully');
        }
    }

    return (
        <View style={{flexDirection: 'row', ...styles.base}}>
            <TouchableOpacity style={styles.touchable} onPress={handleLeft}>
            </TouchableOpacity>
            <WithSplashScreen isAppReady={isAppReady} style={styles.base}>
                <SafeAreaView style={styles.base}>
                    <ScrollView
                        onScrollEndDrag={handleScrollUp}
                        style={styles.base}>
                        <View style={styles.base}>
                            <Routes>
                                <Route path={'/'} element={<ValutePage/>}/>
                                <Route path={'/converter'} element={<ConverterPage/>}/>
                            </Routes>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </WithSplashScreen>
            <TouchableOpacity style={styles.touchable} onPress={handleRight}>
            </TouchableOpacity>
        </View>
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

const styles = StyleSheet.create({
    base: {
        backgroundColor: '#ffffff',
        height: '100%'
    },
    touchable: {
        flex: 1,
        width: (SCREEN_WIDTH / 2),
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
});
