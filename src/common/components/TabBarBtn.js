import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';


const TabBarBtn = (props) => {
    console.log(props)
    const { accessibilityState: { selected } } = props
    const label = props.accessibilityLabel.split(',')[0]
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={[props.style, { borderBottomWidth: 3, borderBottomColor: selected ? "#008AFF" : "transparent", dislplay: "flex", flex: 1, justifyContent: "center", alignItems: "center" }]}>
                {props.icon && props.icon()}
                <Text>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TabBarBtn;