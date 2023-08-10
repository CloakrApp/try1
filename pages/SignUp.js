import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

function SignUp() {
  const [aadharNumber, setAadharNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');

  // Get the navigation object
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (showOtpInput) {
      // Perform OTP verification or other actions here
      console.log('Verified OTP:', otp);
      // Navigate to the "Profile" screen
      navigation.navigate('Profile');
    } else {
      // Perform any action you want with the entered Aadhar number
      console.log('Submitted Aadhar Number:', aadharNumber);
      setShowOtpInput(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{showOtpInput ? 'Enter OTP' : 'Enter your Aadhar number'}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => (showOtpInput ? setOtp(text) : setAadharNumber(text))}
        value={showOtpInput ? otp : aadharNumber}
        keyboardType={showOtpInput ? 'numeric' : 'default'}
        placeholder={showOtpInput ? 'OTP' : 'Aadhar Number'}
      />
      <Button
        title={showOtpInput ? 'Verify OTP' : 'Submit'}
        onPress={handleSubmit}
        style={styles.btn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  topText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  btn: {
    borderRadius: 10,
  },
});

export default SignUp;
