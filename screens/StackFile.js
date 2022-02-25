import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './Homepage';
import LeadershipScreen from './LeadershipScreen';
import SafetyScreen from './SafetyScreen';
import ImprovementScreen from './ImprovementScreen';
import QualityScreen from './QualityScreen';
import StandardizationScreen from './StandardizationScreen';
import JITScreen from './JITScreen';

const Stack = createNativeStackNavigator();

//This function creates a component that establishes the navigation stack
const StackFile = () => {
    return (
        <NavigationContainer>
            {/* When the app is loaded it navigates to the home page */}
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#242424'
                    },
                    headerTitle: (props) => (
                        <Logo/>
                    ),
                    headerBackTitle: 'Back'
                }}>
                <Stack.Screen name ="Home" component={Homepage}/>
                <Stack.Screen name ="Leadership" component={LeadershipScreen}/>
                <Stack.Screen name ="JIT" component={JITScreen}/>
                <Stack.Screen name ="Safety" component={SafetyScreen}/>
                <Stack.Screen name ="Quality" component={QualityScreen}/>
                <Stack.Screen name ="Standardization" component={StandardizationScreen}/>
                <Stack.Screen name ="Improvement" component={ImprovementScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Logo = () => {
    return (
        <Image style={styles.headerLogo} source={require('../assets/Mercedes-Benz-Logo.png')}/>
    )
}

const styles = StyleSheet.create ({
    headerLogo: {
        height: 36,
        width: 45,
        marginTop: -10,
        alignSelf: 'center'
    }
});

export default StackFile;