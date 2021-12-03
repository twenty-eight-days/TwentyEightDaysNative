import {Image, Text, TouchableHighlight, View} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import React from "react";

export const ButtonImg = (
    props: {
        onPress: (f: any)=>void
        text: string,
        src: any
    },
) => {
    return(
        <TouchableHighlight
        style={tailwind.style('bg-pink-600 rounded text-white w-40 p-4 mr-auto')}
        onPress={props.onPress}>
        <View style={tailwind.style('flex flex-row')}>
            <Image
                style={tailwind.style('h-6 w-6 m-auto')}
                resizeMethod={"scale"}
                source={props.src} />
            <Text style={tailwind.style('m-auto text-white text-2xl')}>
                {props.text}
            </Text>
        </View>
    </TouchableHighlight>
    )
}
export const Button = (
    props: {
        onPress: (f: any)=>void
        text: string
    },
) => {
    return(
        <TouchableHighlight
            style={tailwind.style('bg-pink-600 rounded text-white w-40 p-4 mr-auto')}
            onPress={props.onPress}>
            <View style={tailwind.style('flex flex-row')}>
                <Text style={tailwind.style('m-auto text-white text-2xl')}>
                    {props.text}
                </Text>
            </View>
        </TouchableHighlight>
    )
}