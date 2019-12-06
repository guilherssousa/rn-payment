import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import api from '../../config/api';

export default function Home() {
    const [user, setUser] = useState({});
    const [isGood, setGood] = useState(false);
    const [ad, setAd] = useState(false);

    useEffect(() => {
        async function loadUser() {
            const response = await api.get('https://api.github.com/users/guilherssousa');

            response.data.firstName = response.data.name.split(' ')[0]
            setUser(response.data);
            setAd(true);
        }
        
        loadUser()
    }, []);

    return (
        <View style={styles.container} >
            <LinearGradient
                style={styles.navbar}
                colors={['#de6262', '#ffb88c']}
            >
                <TouchableOpacity style={styles.userButton}>
                    <Image source={{ uri: user.avatar_url }} style={styles.userImage} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Icon name='qrcode' size={28} color='#fff' />
                </TouchableOpacity>
            </LinearGradient>
            <View style={{ top: -170 }}>
                <View style={styles.mainSection}>
                    <Text style={styles.hello}>Olá, { user.firstName }.</Text>

                    <View style={styles.activityContainer}>
                        <View style={styles.activityBox}>
                            <Icon style={styles.activityIcon} name="chevron-up" size={22} color='#0BAB64' />
                            <View>
                                <Text style={styles.activityName}>Saldo atual:</Text>
                                <Text style={styles.activityText}>R$300,00</Text>
                            </View>
                        </View>
                        <View style={styles.activityBox}>
                            <Icon style={styles.activityIcon} name="chevron-up" size={22} color='#0BAB64' />
                            <View>
                                <Text style={styles.activityName}>Último uso:</Text>
                                <Text style={styles.activityText}>R$23,99</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.functionsGrid}>
                    <TouchableOpacity style={styles.functionBox}>
                        <Icon name="donate" size={28} color='#de6262' />
                        <Text style={styles.functionBoxTitle}>Depositar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionBox}>
                        <Icon name="tshirt" size={28} color='#de6262' />
                        <Text style={styles.functionBoxTitle}>Sacar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.functionBox}>
                        <Icon name="book" size={28} color='#de6262' />
                        <Text style={styles.functionBoxTitle}>Extrato</Text>
                    </TouchableOpacity>
                </View>

                { ad && (
                    <TouchableOpacity style={styles.adContainer}>
                        <Image source={{ uri: 'https://i.imgur.com/2Jl7Ohn.png' }} style={styles.ad} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    adContainer: {
        margin: 25,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    ad: {
        resizeMode: 'cover',
        width: 361,
        height: 141,
        borderRadius: 10,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 80,
        padding: 25,
        paddingBottom: 150,
        borderRadius: 40,
        top: -60
    },
    userImage: {
        resizeMode: 'cover',
        width: 45,
        height: 45,
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#fff'
    },
    mainSection: {
        paddingLeft: 25,
    },
    hello: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },
    activityContainer: {
        marginTop: 10,
        marginRight: 25,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    activityBox: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: '50%'
    },
    activityName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    activityText: {
        color: '#7d7d7d',
    },
    activityIcon: {
        marginRight: 15
    },
    functionsGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        padding: 25,
        paddingBottom: 0
    },
    functionBox: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        elevation: 5,
    },
    functionBoxTitle: {
        fontWeight: 'bold'
    },
});
