import {Dimensions, StyleSheet} from "react-native";

const SCREEN_WIDTH = Dimensions.get('screen').width
export const styles = StyleSheet.create({
    lang_block: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
    },
    full_width: {
        width: '100%',
    },
    base: {
        backgroundColor: '#ffffff',
        height: '100%'
    },
    touchable: {
        flex: 1,
        width: (SCREEN_WIDTH / 2),
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
    },
    loading: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000',
    },
    wrapper: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    input: {
        width: '100%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        paddingLeft: 10,
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.05)',
        color: '#000000',
    },

    sectionContainer: {
        marginVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: '#ffffff',
        minWidth: 370
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000',
    },


    base_text_color: {
        color: '#000000',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 15,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.04)',
    },
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
    },
    opacity: {
        opacity: 0.8,
    },
    name: {
        width: 200,
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    values: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    codes: {
        display: 'flex',
    },
    fontSize_l: {
        fontSize: 12,
    },
    percents: {
        fontSize: 10,
        color: 'blue',
    },

})