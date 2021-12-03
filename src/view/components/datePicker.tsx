import React, {useState} from "react";
import {Text, TouchableHighlight, View} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Button} from "./buttons";

export const Datepicker = (props: {dates: Date[], setDates: (dates: Date[])=>void}) => {
    const [date] = useState(new Date());
    const [show, setShow] = useState(false);
    return (
        <View>
            <Button onPress={()=>setShow(true)} text={"Date"} />
            {show && (
                <DateTimePicker
                    testID="datePicker"
                    value={date}
                    is24Hour={true}
                    display="default"
                    onChange={
                        (event: Event, date: Date|undefined)=>{
                            setShow(false);
                            if (date !== undefined) {
                                props.dates.push(date)
                                props.setDates(props.dates)
                            }
                        }
                    }
                />
            )}
        </View>
    );
};