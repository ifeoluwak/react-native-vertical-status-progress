/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

import VerticalStatusProgress from 'react-native-vertical-status-progress';
import { colors } from '../../src/color';

const statuses = [
  {
    title: 'Sign Up Complete',
    subtitle: 'You have successfully signed up.',
    status: 'registered',
  },
  {
    title: 'Set up your account',
    subtitle: 'Add your account details to get started.',
    renderContent: (
      <TouchableOpacity>
        <Text>vbireuvgbireubgireuf</Text>
      </TouchableOpacity>
    ),
    status: 'setting_up',
  },
  {
    title: 'Account Verification',
    subtitle: 'We are verifying your account.',
    renderContent: (
      <View>
        <Text style={{}}>
          We will contact you shortly if we need any additional information.
          Please contact us if you have any questions. Check your email for
          updates.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: colors.ACCENT_BLUE,
            padding: 10,
            borderRadius: 5,
            width: 150,
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Text style={{ color: 'white' }}>Resend Email</Text>
        </TouchableOpacity>
      </View>
    ),
    status: 'verifying',
  },
  {
    title: 'Account Verified',
    subtitle: 'Your account has been verified.',
    status: 'waiting',
  },
  {
    title: 'All Set!',
    subtitle:
      "You're all set up and ready to go. Start using your account now.",
    renderContent: (
      <View>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ullam
          assumenda obcaecati? Minima libero vitae ducimus, omnis, excepturi
          saepe, doloribus corrupti hic deleniti id iure? Qui consequuntur at
          magnam consequatur!
        </Text>
      </View>
    ),
    status: 'ready',
  },
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [status, _] = useState('verifying');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <View>
          <VerticalStatusProgress
            statuses={statuses}
            showOrder
            showLastStick
            currentStatus={status}
            accordion
            openAccordionStatus
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
