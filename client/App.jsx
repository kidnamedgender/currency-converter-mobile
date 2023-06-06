import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import SelectDropdown from "react-native-select-dropdown";

import {store} from './store';
import {Provider, useDispatch} from 'react-redux';
import {getValutes} from './store/slices/valuteSlice';

import {NativeRouter, useNavigate} from 'react-router-native';
import {Router} from "./router";

import {WithSplashScreen} from "./components/Splash";

import {useTranslation} from "react-i18next";

import './langs/i18n'

import style from './assets/style.scss'

function App() {
    const {t, i18n} = useTranslation()
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
    const changeLanguageHandler = (lang) => {
        i18n.changeLanguage(lang)
    }
    const handleScrollUp = (event) => {
        if (!event.nativeEvent.contentOffset.y) {
            dispatch(getValutes());
            console.log('Data update successfully');
        }
    }
    return (
        <View style={{flexDirection: 'row', ...style.base}}>
            <TouchableOpacity style={style.touchable} onPress={handleLeft}>
            </TouchableOpacity>
            <WithSplashScreen isAppReady={isAppReady} style={style.base}>
                <SafeAreaView style={style.base}>
                    <ScrollView
                        onScrollEndDrag={handleScrollUp}
                        style={style.base}>
                        <SelectDropdown data={i18n.languages} defaultValue={i18n.language}
                                        onSelect={value => changeLanguageHandler(value)}
                                        buttonStyle={{...style.lang_block, ...style.full_width}}>
                        </SelectDropdown>

                        <View style={style.base}>
                            <Router></Router>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </WithSplashScreen>
            <TouchableOpacity style={style.touchable} onPress={handleRight}>
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
