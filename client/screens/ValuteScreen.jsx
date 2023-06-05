import React from 'react';
import {Text, View} from 'react-native';

import Section from '../components/Section';
import ValuteItem from '../components/ValuteItem';

import {useDispatch, useSelector} from 'react-redux';
import {getValutes} from '../store/slices/valuteSlice';


import {useTranslation} from "react-i18next";

import {styles} from "../assets/styles";

function ValuteScreen() {


    const dispatch = useDispatch();
    const {valutes, status} = useSelector(state => state.valute);

    const {t} = useTranslation();

    React.useEffect(() => {
        dispatch(getValutes());
    }, [dispatch]);


    if (status === 'pending') {
        return (
            <Section>
                <Text
                    style={styles.loading}>
                    {t('demoScope.loading')}
                </Text>
            </Section>
        );
    }

    return (
        <View>
            <Section title={t('demoScope.title_valutePage')}>
                <View style={styles.list}>
                    {valutes?.map(el => (
                        <ValuteItem
                            key={el.id}
                            Name={el.Name}
                            Previous={el.Previous}
                            charCode={el.CharCode}
                            numCode={el.NumCode}
                            Value={el.Value}
                            Nominal={el.Nominal}></ValuteItem>
                    ))}
                </View>
            </Section>
        </View>
    );
}

export default ValuteScreen;
