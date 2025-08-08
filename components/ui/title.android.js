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
        maxWidth: '80%',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,  
    }
})