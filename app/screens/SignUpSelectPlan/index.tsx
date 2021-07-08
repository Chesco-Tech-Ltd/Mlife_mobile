import React, { memo, useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import ItemSelect from 'app/screens/SignUpSelectPlan/components/ItemSelect';
import SvgCash from 'app/svgs/PaymentMethod/SvgCash';
import SvgAdd from 'app/svgs/SvgAdd';
import SvgPayWithCredit from 'app/svgs/SvgPayWithCredit';
import SvgList from 'app/svgs/Explorer/SvgList';
import SvgProfile from 'app/svgs/Profile/SvgProfile';
import FONTS from 'app/ultis/fonts';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { widthScreen } from 'app/ultis/layout';
import navigation from 'app/navigation';

const SelectPlan = memo(() => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [plan, setPlan] = useState(0);
  const [isContinue, setContinue] = useState(false);

  const onSelect = useCallback((num) => {
    console.log(num);
    if (num === 1) navigation.navigate(ROUTES.RegisterAccount);
    else if (num === 2) navigation.navigate(ROUTES.Login);
  }, []);

  // console.log('selected', selected);
  useEffect(() => {
    if (plan !== 0 && selected !== 0) {
      setContinue(true);
    } else setContinue(false);
  }, [plan, selected]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={{ marginTop: 24, marginBottom: 20 }}>
          <Text style={styles.txtPrices}>Select your option</Text>
          <Text style={styles.txtExplain}>
            Welcome to domestic travel insurance mobile app
          </Text>
        </View>
        <View style={styles.selectView}>
          <ItemSelect
            title={'Register'}
            onPress={onSelect}
            num={1}
            isChoose={selected === 1}>
            <SvgAdd />
          </ItemSelect>
          <ItemSelect
            title={'Pay Premium'}
            onPress={onSelect}
            num={2}
            isChoose={selected === 2}>
            <SvgPayWithCredit />
          </ItemSelect>
        </View>

        <View style={styles.selectView}>
          <ItemSelect
            title={'Agent Login'}
            onPress={onSelect}
            num={3}
            isChoose={plan === 3}>
            <SvgProfile />
          </ItemSelect>
          <ItemSelect
            title={'Benfits'}
            onPress={onSelect}
            num={4}
            isChoose={plan === 4}>
            <SvgCash />
          </ItemSelect>
        </View>

        <View style={styles.selectView}>
          <ItemSelect
            title={"TC's"}
            onPress={onSelect}
            num={5}
            isChoose={plan === 5}>
            <SvgList />
          </ItemSelect>
          <ItemSelect
            title={'Settings'}
            onPress={onSelect}
            num={5}
            isChoose={plan === 6}>
            <SvgList />
          </ItemSelect>
        </View>

        {/* <View style={styles.billView}>
          <ItemBill />
          <SvgLine />
          <ItemBill />
          <SvgLine />
          <ItemBill />
        </View> */}
      </ScrollView>
      {/* {isContinue ? (
        <View style={styles.btnView}>
          <ButtonLinear
            title={'START WITH NEW BOX'}
            onPress={onPressContinue}
          />
        </View>
      ) : null} */}
    </View>
  );
});

export default SelectPlan;

const styles = StyleSheet.create({
  txtTitle: {
    color: '#1D1E2C',
    fontSize: 14,
    fontFamily: FONTS.Montserrat.Regular,
    marginRight: 4,
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectView: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  container: {
    backgroundColor: '#F7F7FB',
    paddingHorizontal: 24,
    justifyContent: 'center',
    flex: 1,
  },
  txtPrices: {
    color: '#1D1E2C',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: FONTS.Montserrat.Medium,
    marginBottom: 4,
  },
  txtExplain: {
    color: '#1D1E2C',
    fontSize: 14,
    lineHeight: 24,
    fontFamily: FONTS.Montserrat.Regular,
  },
  billView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 16,
    paddingBottom: getBottomSpace() + 120,
  },
  btnView: {
    position: 'absolute',
    bottom: 0,
    width: widthScreen,
    alignItems: 'center',
    paddingBottom: getBottomSpace() + 16,
    paddingHorizontal: 24,
  },
});
