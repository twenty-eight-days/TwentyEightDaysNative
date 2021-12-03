import {Text, View} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import React from "react";

export const Header = () => {
    return (
        <View style={tailwind.style('p-4 bg-pink-600 flex flex-row')}>
            <Text style={tailwind.style('text-4xl text-white')}>TwenyEightDays</Text>
            <Text style={tailwind.style('text-4xl ml-auto text-white')}>28</Text>
        </View>
    )
}
