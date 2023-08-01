import { StyleSheet, Dimensions} from "react-native";


export default StyleSheet.create({
    
    card_main: {
        backgroundColor: '#e0e0e0',
        margin: 10,
        borderRadius: 10,
        width: Dimensions.get('window').width / 2.5 ,
        height: Dimensions.get('window').height /3.2 ,
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'column',
    },
    card_body: {
        margin: 10,
    },
    image_container: {
        height: Dimensions.get('window').height / 5, 
        width: Dimensions.get('window').width / 3,
        alignSelf: 'center',
        borderRadius: 10,
    },
    title_text: {
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 5,
    },
    price_text: {
        paddingTop: 5,
    },
    status_text: {
        color: 'red',
        fontSize: 12,
        textAlign: 'right',
    },
});
