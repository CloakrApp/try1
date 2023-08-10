import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ProfileScreen from './pages/ProfileScreen';
const Stack = createStackNavigator();

// Screen for Sign Up
function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={homeScreenOptions} />
        <Stack.Screen name="SignUp" component={SignUp} options={screenOptions} />
        <Stack.Screen name="Profile" component={Profile} options={screenOptions} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={screenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>New to Cloakr?</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Sign up" onPress={() => navigation.navigate('SignUp')} />
        <Text style={styles.dividerText}>Already signed up?</Text>
        <Button title="Login" onPress={() => console.log("Login pressed")} />
      </View>
    </View>
  );
}

const homeScreenOptions = {
  headerShown: false, // Hide the header for the HomeScreen
};

const screenOptions = {
  // headerStyle: {
  //   backgroundColor: '#f4511e',
  // },
  headerTintColor: '#000', //Header Text color
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    marginTop: 20,
    width: '80%',
  },
  dividerText: {
    marginVertical: 10,
    color: '#888',
  },
});
