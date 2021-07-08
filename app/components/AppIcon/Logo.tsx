import React from 'react';
import { View, Text, Image } from 'react-native';

const AppLogo = () => {
  return (
    <View style={{ paddingLeft: 20 }}>
      <Text>
        <Image
          style={{ width: 20, height: 40}}
          source={require('../../assets/mlife-logo-icon.png')}
        />
      </Text>
    </View>
  );
};

export default AppLogo;
