import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {store} from "./store";
import {Provider} from "react-redux";
import {WithSplashScreen} from "./components/Splash";

import {NativeRouter, Route, Routes} from "react-router-native";
import ConverterPage from "./pages/ConverterPage";
import ValutePage from "./pages/ValutePage";

function App() {
    const [isAppReady, setIsAppReady] = React.useState(false)
    React.useEffect(() => {
        setIsAppReady(true);
    }, [isAppReady]);
    return (
        <WithSplashScreen isAppReady={isAppReady}>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic">
                    <Routes>
                        <Route path={'/'} element={<ValutePage/>}/>
                        <Route path={'/converter'} element={<ConverterPage/>}/>
                    </Routes>
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




