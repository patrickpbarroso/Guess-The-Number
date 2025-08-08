import { Text, View, StyleSheet, Dimensions } from 'react-native'

import Colors from '../../constants/colors'

function NumberContainer({children}){
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: deviceWidth < 380 ? 12 : 5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 3,
        alignSelf: 'stretch',
        borderBottomColor: 'white',
    },
    numberText: {
        color: Colors.white,
        fontSize: deviceWidth < 380 ? 28 : 46,
        fontFamily: 'poppins-bold'
    }
})