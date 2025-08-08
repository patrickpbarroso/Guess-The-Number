import { Text, StyleSheet, Platform} from 'react-native'

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'poppins-bold',
        fontSize: 46,
        color: 'white',
        textAlign: 'center',
        padding: 12,
        maxWidth: '80%'
    }
})