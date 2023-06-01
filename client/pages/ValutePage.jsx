import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {getValutes} from '../store/slices/valuteSlice';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Section from '../components/Section';
import ValuteItem from '../components/ValuteItem';
import {useNavigate} from 'react-router-native';

function ValutePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {valutes, status} = useSelector(state => state.valute);

  React.useEffect(() => {
    dispatch(getValutes());
  }, [dispatch]);

  if (status === 'pending') {
    return (
      <Text style={{textAlign: 'center', marginTop: 20, fontSize: 24}}>
        Загрузка...
      </Text>
    );
  }

  return (
    <View>
      <Button onPress={() => navigate('/converter')} title="Конвертер" />
      <Section title="Валюты">
        <View style={styles.valutes}>
          {valutes?.map(el => (
            <ValuteItem
              key={el.id}
              Name={el.Name}
              Previous={el.Previous}
              charCode={el.CharCode}
              numCode={el.NumCode}
              Value={el.Value}></ValuteItem>
          ))}
        </View>
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  valutes: {
    display: 'flex',
    flexDirection: 'column',
  },
});
export default ValutePage;
