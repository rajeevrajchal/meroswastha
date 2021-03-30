import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}>
              Mero Swastha
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
