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

export const App = () => {
  const [days, setDays] = useState(0);
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{display: 'flex', flexDirection: 'column'}}>
        <View style={{backgroundColor: '#d282d7', padding: 10}}>
          <Text style={{fontSize: 30, color: '#FFFFFF'}}>TwenyEightDays</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{marginTop: 200, fontSize: 50}}>{days} days</Text>
        </View>
        <TouchableHighlight
          style={{
            backgroundColor: '#d282d7',
            margin: 10,
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => setDays(days + 1)}>
          <Text style={{color: 'white'}}>Today</Text>
        </TouchableHighlight>
        <Datepicker />
      </ScrollView>
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
        <View>
            <TouchableHighlight
                style={{
                    backgroundColor: '#d282d7',
                    margin: 10,
                    padding: 10,
                    alignItems: 'center',
                    borderRadius: 10,
                }}
                onPress={showDatepicker}>
                <Text style={{color: 'white'}}>Date Picker</Text>
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