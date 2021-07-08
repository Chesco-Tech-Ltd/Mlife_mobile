import React, { memo, useCallback } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthScreen } from 'app/ultis/layout';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useNavigation } from '@react-navigation/native';
import Stepper from 'react-native-stepper-ui';
import SvgLogo from 'app/svgs/Login/SvgLogo';
import ROUTES from 'app/ultis/routes';
import TextInputWala from 'app/components/TextInput';
import ButtonLinear from 'app/components/ButtonLinear';
import FONTS from 'app/ultis/fonts';
import { isLargeScreen } from 'app/screens/Login';
import PersonalDetails from './PersonalDetails';
import { Button } from 'react-native-paper';

const MyComponent = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};
const content = [
  <PersonalDetails />,
  <MyComponent title="Component 2" />,
  <MyComponent title="Component 3" />,
  <MyComponent title="Component 3" />,
];

const RegisterAccount = memo(() => {
  const navigation = useNavigation();
  const [active, setActive] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Stepper
          active={active}
          content={content}
          showButton={false}
          onNext={() => setActive((p) => p + 1)}
          onBack={() => setActive((p) => p - 1)}
          onFinish={() => Alert.alert('Finish')}
        />
      </View>
      <View
        style={{
          height: 10,
          borderColor: 'transparent',
          borderTopColor: '#ccc',
          borderWidth: 1,
          borderStyle: 'solid',
          width: '100%',
          height: 60,
          padding: 5,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          icon="arrow-left"
          mode="contained"
          contentStyle={{ height: 45, width: 100 }}
          style={{ backgroundColor: active !== 0 ? '#202A40' : '#ccc' }}
          onPress={() => console.log('Pressed')}>
          Back
        </Button>
        <View style={{ width: 5 }} />
        <Button
          icon="arrow-right"
          mode="contained"
          style={{ backgroundColor: '#ccc' }}
          contentStyle={{
            height: 45,
            width: 100,
            flexDirection: 'row-reverse',
            paddingLeft: 15,
          }}
          onPress={() => console.log('Pressed')}>
          Next
        </Button>
      </View>
    </View>
  );
});

export default RegisterAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: getBottomSpace(),
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingTop: 10,
    width: '100%',
  },
});
