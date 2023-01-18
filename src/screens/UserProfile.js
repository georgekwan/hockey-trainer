import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DataTable, IconButton } from 'react-native-paper';
import { theme } from '../core/theme.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const optionsPerPage = [2, 3, 4];

export const UserProfile = () => {
    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // borderColor: 'red',
                    // borderWidth: 3,
                    height: HEIGHT * 0.1,
                    marginTop: HEIGHT * 0.3,
                    alignItems: 'center',
                    paddingHorizontal: WIDTH * 0.03,
                }}
            >
                <Text
                    style={{
                        // paddingTop: WIDTH * 0.8,
                        fontSize: 26,
                        fontWeight: '900',
                        // paddingLeft: WIDTH * 0.1,
                        color: theme.colors.primary,
                    }}
                >
                    HISTORY
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        // borderColor: 'red',
                        // borderWidth: 3,
                        justifyContent: 'center',
                    }}
                >
                    <IconButton
                        default
                        type='contained'
                        icon='table'
                        iconColor={'black'}
                        size={40}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        icon='chart-line'
                        iconColor={'black'}
                        size={40}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </View>
            <ScrollView style={{ paddingBottom: WIDTH * 0.8 }}>
                <DataTable
                    style={{
                        // paddingTop: WIDTH * 0.05,
                        paddingTop: WIDTH * 0.005,
                        paddingHorizontal: WIDTH * 0.005,
                    }}
                >
                    <DataTable.Header>
                        <DataTable.Title>Pattern</DataTable.Title>
                        <DataTable.Title numeric>Accuracy</DataTable.Title>
                        <DataTable.Title sortDirection='descending' numeric>
                            Date
                        </DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>(5)Around the World</DataTable.Cell>
                        <DataTable.Cell numeric>87%</DataTable.Cell>
                        <DataTable.Cell numeric>Sep 21</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(11)Up Down</DataTable.Cell>
                        <DataTable.Cell numeric>92%</DataTable.Cell>
                        <DataTable.Cell numeric>Sep 28</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(11)Titanic</DataTable.Cell>
                        <DataTable.Cell numeric>76%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 2</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(5)Dump and Chase</DataTable.Cell>
                        <DataTable.Cell numeric>89%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 4</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(11)Riding Pine</DataTable.Cell>
                        <DataTable.Cell numeric>95%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 5</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(5)Frustrating One</DataTable.Cell>
                        <DataTable.Cell numeric>90%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 7</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(11)Riding Pine</DataTable.Cell>
                        <DataTable.Cell numeric>95%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 5</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(5)Frustrating One</DataTable.Cell>
                        <DataTable.Cell numeric>90%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 7</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(11)Up Down</DataTable.Cell>
                        <DataTable.Cell numeric>92%</DataTable.Cell>
                        <DataTable.Cell numeric>Sep 28</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(11)Titanic</DataTable.Cell>
                        <DataTable.Cell numeric>76%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 2</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(5)Dump and Chase</DataTable.Cell>
                        <DataTable.Cell numeric>89%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 4</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>(11)Riding Pine</DataTable.Cell>
                        <DataTable.Cell numeric>95%</DataTable.Cell>
                        <DataTable.Cell numeric>Oct 5</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </ScrollView>
        </>
    );
};

export default UserProfile;

const styles = StyleSheet.create({});
