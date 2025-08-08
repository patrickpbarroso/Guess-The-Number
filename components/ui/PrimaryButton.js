import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors'

function PrimaryButton({ children, onPress }){
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed 
                        ? [styles.buttonInnerContainer, styles.pressed] 
                        : styles.buttonInnerContainer
                } 
                onPress={onPress} 
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 5,
        margin: 2,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.white,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: Colors.red,
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
});