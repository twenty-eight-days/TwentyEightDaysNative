import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import tailwind from 'tailwind-react-native-classnames';

export const DataScreen = () => {
    return (
        <View style={tailwind.style('flex flex-col my-auto')}>
            <Text style={tailwind.style('m-auto text-2xl')}>DATA SCREEN</Text>
        </View>
    );
};
