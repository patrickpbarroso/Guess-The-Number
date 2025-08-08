import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function instructionText({children, style}){
    return <Text style={[styles.instructionText, style]}>{children}</Text>
};

export default instructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'poppins',
        color: Colors.white,
        fontSize: 24,
        },
});