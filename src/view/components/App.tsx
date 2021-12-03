import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import tailwind from 'tailwind-react-native-classnames';

export const App = () => {
  const [days, setDays] = useState(12);
  return (
    <SafeAreaView>
      <StatusBar />
      <View
        style={tailwind.style('flex flex-col')}>
        <View style={tailwind.style('p-4 bg-pink-600')}>
          <Text style={tailwind.style('text-4xl text-white')}>TwenyEightDays</Text>
        </View>
        <View style={tailwind.style(' my-20')}>
          <Text style={tailwind.style('text-4xl text-black m-auto font-black')}>{days} days</Text>
        </View>
        <View style={tailwind.style('flex flex-row m-10')}>
            <TouchableHighlight
                style={tailwind.style('bg-pink-600 rounded text-white w-40 p-4 mr-auto')}
                onPress={() => setDays(days + 1)}>
                <Text style={tailwind.style('mx-auto text-white')}>Today</Text>
            </TouchableHighlight>
            <Datepicker />
        </View>
        <ScrollView style={tailwind.style('m-10')}>
            <Text style={tailwind.style('text-2xl font-black text-black')}>Recordings</Text>
            <Text style={tailwind.style('text-xl font-black text-black')}>01.12.2021 🩸</Text>
            <Text style={tailwind.style('text-xl font-black text-black')}>01.11.2021 🩸</Text>
            <Text style={tailwind.style('text-xl font-black text-black')}>01.10.2021 🩸</Text>
            <Text style={tailwind.style('text-xl font-black text-black')}>01.09.2021 🩸</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export const Datepicker = () => {
    const [date] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const showMode = () => {
        setShow(true);
    };

    const showDatepicker = () => {
        showMode();
    };

    return (
        <View style={tailwind.style('bg-pink-600 rounded p-4 ml-auto w-40')}>
            <TouchableHighlight
                onPress={showDatepicker}>
                <Text style={tailwind.style('mx-auto  text-white')}>Date Picker</Text>
            </TouchableHighlight>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    is24Hour={true}
                    display="default"
                    onChange={()=>{}}
                />
            )}
        </View>
    );
};