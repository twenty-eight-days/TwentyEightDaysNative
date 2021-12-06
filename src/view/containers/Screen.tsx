import React, {useState} from 'react';
import {MainScreen} from './MainScreen';
import {Provider} from 'react-redux';
import {store} from '../../model';
import tailwind from "tailwind-react-native-classnames";
import {SafeAreaView, StatusBar} from "react-native";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Screen = () => {
    const [main, setMain] = useState(<MainScreen />)
    return (
        <Provider store={store}>
            <SafeAreaView style={tailwind.style('text-black h-full')}>
                <StatusBar />
                <Header />
                {main}
                <Footer  setMain={setMain}/>
            </SafeAreaView>
        </Provider>
    );
}
