import React from 'react';
import {Text, View} from 'react-native';

import Section from '../../components/Section';
import Index from '../../components/ValuteItem';

import {useDispatch, useSelector} from 'react-redux';
import {getValutes} from '../../store/slices/valuteSlice';

import {useTranslation} from "react-i18next";

import style from './style.module.scss'

function Index() {


    const dispatch = useDispatch();
    const {valutes, status} = useSelector(state => state.valute);

    const {t} = useTranslation();

    React.useEffect(() => {
        dispatch(getValutes());
    }, [dispatch]);


    if (status === 'pending') {
        return (
            <Index>
                <Text
                    style={style.status_block}>
                    {t('demoScope.loading')}
                </Text>
            </Index>
        );
    }

    if (status === "rejected"){
        return (
            <Index>
                <Text
                    style={style.status_block}>
                    {t("demoScope.error")}
                </Text>
            </Index>
        );
    }

    return (
        <View>
            <Section title={t('demoScope.title_valutePage')}>
                <View style={style.list}>
                    {valutes?.map(el => (
                        <Index
                            key={el.id}
                            Name={el.Name}
                            Previous={el.Previous}
                            charCode={el.CharCode}
                            numCode={el.NumCode}
                            Value={el.Value}
                            Nominal={el.Nominal}></Index>
                    ))}
                </View>
            </Section>
        </View>
    );
}

export default Index;
