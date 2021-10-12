import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { Constants } from 'expo';

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = { text: 'stranger' };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.largeTitle}>Welcome!</Text>
          <View style={styles.welcomeContainer}>
            <Text style={styles.label}>
              To get started, please enter your name.
            </Text>
          </View>
          <View style={styles.getStartedContainer}>
            <TextInput
              style={styles.getStartedText}
              placeholder="Hello stranger!"
              onChangeText={text => this.setState({ text })}
            />
          </View>
        </ScrollView>
        <View style={styles.tabBarInfoContainer}>
        <TouchableOpacity onPress={this._handleGoPress} style={styles.tabBarLink}>
          <Text style={styles.tabBarLinkText}>Let's go!</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  _handleGoPress = () => {
    Alert.alert('Yay!', 'Thanks, ' + this.state.text + '!');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  largeTitle: {
    margin: 48,
    fontSize: 52,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 15,
    alignItems: 'center',
  },
  btn: {
    fontSize: 18,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  tabBarLink: {
    paddingVertical: 15,
  },
  tabBarLinkText: {
    fontSize: 28,
    color: '#2e78b7',
  },
});
