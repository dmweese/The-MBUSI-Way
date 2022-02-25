import React from 'react';
import { WebView } from 'react-native-webview'

const SafetyScreen = ({ navigation }) => {
    return (
        <WebView style={{flex: 1}} 
        source={{uri: 'https://www.google.com'}}/>
    )
}

export default SafetyScreen;