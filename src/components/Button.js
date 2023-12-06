import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Button = ({
    styleButtonType,
    styleButtonText,
    onPress,
    title
}) => {
    return (
        <Pressable
            style={[styles.button, styleButtonType]}
            onPress={onPress}
        >
            <Text style={[styles.buttonText, styleButtonText]}>{title}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 10,
        width: 130,
        alignItems: "center"
    },
    buttonText: {
        color: "#fbfbfb"
    }
});
