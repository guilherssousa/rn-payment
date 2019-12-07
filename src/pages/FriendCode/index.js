import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function FriendCode({ navigation }) {
    function handleHome() {
        navigation.navigate('Navigator')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.exitButton} onPress={handleHome} > 
                <Icon name="chevron-left" size={28} />
            </TouchableOpacity>

            <View style={styles.article}>
                <View style={styles.section}>
                    <Text style={styles.sectionText}>Adicione amigos na sua conta</Text>

                    <View style={styles.functionList}>
                    <TouchableOpacity style={styles.function}>
                            <View style={styles.functionInfo}>
                                <Icon name='user' size={32} />
                                <Text style={styles.functionInfoText}>Use o código de amigo</Text>
                            </View>
                            <Icon name="chevron-right" size={32} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.function}>
                            <View style={styles.functionInfo}>
                                <Icon name='qrcode' size={32} />
                                <Text style={styles.functionInfoText}>Use seu QR Code para adicionar</Text>
                            </View>
                            <Icon name="chevron-right" size={32} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.function}>
                            <View style={styles.functionInfo}>
                                <Icon name='qrcode' size={32} />
                                <Text style={styles.functionInfoText}>Escaneie o código de amigo</Text>
                            </View>
                            <Icon name="chevron-right" size={32} />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.friendCode}>Seu código de amigo: RFD9H898HGF</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    exitButton: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        marginBottom: 15
    },
    friendCode: {
        textAlign: 'center'
    },
    sectionText: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
    functionList: {
        padding: 20,
    },
    function: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    functionInfo: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    functionInfoText: {
        marginLeft: 10,
        fontWeight: '700'
    }
 });