import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DataTable } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const TableView = () => {
  return (
    <ScrollView
      style={{
        marginBottom: WIDTH * 0.01,
        // borderColor: 'red',
        // borderWidth: 3,
        // height: HEIGHT * 0.9,
      }}>
      <DataTable
        style={{
          // paddingTop: WIDTH * 0.05,
          // borderColor: 'red',
          // borderWidth: 3,
          paddingHorizontal: WIDTH * 0.005,
        }}>
        <DataTable.Header>
          <DataTable.Title>Pattern</DataTable.Title>
          <DataTable.Title numeric>Accuracy</DataTable.Title>
          <DataTable.Title sortDirection="descending" numeric>
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
  );
};

// const styles = StyleSheet.create({});
