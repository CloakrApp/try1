import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

function ProfileScreen() {
  const route = useRoute();
  const { username } = route.params;

  // Example news data
  const newsData = [
    { title: 'News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'News 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more news data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.usernameText}>{username}</Text>
      
      {/* Display news cards */}
      <View style={styles.newsContainer}>
        {newsData.map((news, index) => (
          <View style={styles.newsCard} key={index}>
            <Text style={styles.newsTitle}>{news.title}</Text>
            <Text style={styles.newsContent}>{news.content}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  usernameText: {
    fontSize: 18,
    marginBottom: 20,
  },
  newsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  newsCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsContent: {
    fontSize: 14,
  },
});

export default ProfileScreen;
