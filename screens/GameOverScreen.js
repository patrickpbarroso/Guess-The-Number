import { View, Image, Text, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import Title from '../components/ui/title'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if (width < 380){
        imageSize= 150;
    }

    if (height < 400){
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={onStartNewGame}>New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // borderRadius: deviceWidth < 380 ? 75: 150,
        // width: deviceWidth < 380 ? 150: 300,
        // height: deviceWidth < 380 ? 150: 300,
        borderWidth: 3,
        borderColor: Colors.red,
        overflow: 'hidden',
        margin: 40
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'poppins',
        fontSize: 20,
        color: Colors.white,
        textAlign: 'center',
        marginBottom: 24,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        marginHorizontal: 30
    },
    highlight: {
        fontFamily: 'poppins',
        color: Colors.primary500
    }
});