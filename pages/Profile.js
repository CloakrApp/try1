import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

function Profile() {
  const [username, setUsername] = useState('');

    // Get the navigation object
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('ProfileScreen', { username });
  }
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Design your profile</Text>
      <Text style={styles.subText}>
        To protect your anonymity, we suggest you choose a name from below.
      </Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Choose your username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
      </View>
      <Button
        title="Done"
        onPress={() => console.log("Login pressed")} 
      />
      <Text></Text>
      <Button
        title="ProfileScreen"
        onPress={handleSubmit} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  topText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  inputBox: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
  },
});

export default Profile;
