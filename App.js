/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useEffect, useRef, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import CheckboxTree from 'react-native-checkbox-tree';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { recursiveData } from './src/Constant';

AntDesign.loadFont().then();
Ionicons.loadFont();

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Fragment } from 'react/cjs/react.production.min';

const recursiveData = [
  {
    shopReportName: 'Phones',
    shopCode: 'Phones',
    shopType: '2',
    shopId: 1,
    shopName: 'Phones',
    childs: [
      {
        shopReportName: 'Apple',
        shopCode: 'Apple',
        shopType: '3',
        shopId: 101,
        shopName: 'Apple',
        childs: [
          {
            shopReportName: 'iPhone6',
            shopCode: 'iPhone6',
            shopType: '4',
            shopId: 101,
            shopName: 'iPhone6',
            childs: [
              {
                shopReportName: '126GB',
                shopCode: 'iPhone6',
                shopType: '4',
                shopId: 3,
                shopName: '126GB',
                productCount: '200+ Devices',
                childs: [],
              },
              {
                shopReportName: '256GB',
                shopCode: 'iPhone6',
                shopType: '4',
                shopId: 3,
                shopName: '256GB',
                productCount: '100+ Devices',
                childs: [],
              },
              {
                shopReportName: '512GB',
                shopCode: 'iPhone6',
                shopType: '4',
                shopId: 3,
                shopName: '512GB',
                productCount: '20+ Devices',
                childs: [],
              }
            ],
          },
          {
            shopReportName: 'iPhone7',
            shopCode: 'iPhone7',
            shopType: '4',
            shopId: 102,
            shopName: 'iPhone7',
            childs: [
              {
                shopReportName: '126GB',
                shopCode: 'iPhone7',
                shopType: '4',
                shopId: 3,
                shopName: '126GB',
                childs: [],
              },
              {
                shopReportName: '256GB',
                shopCode: 'iPhone7',
                shopType: '4',
                shopId: 3,
                shopName: '256GB',
                childs: [],
              },
              {
                shopReportName: '512GB',
                shopCode: 'iPhone7',
                shopType: '4',
                shopId: 3,
                shopName: '512GB',
                childs: [],
              }
            ],
          },
        ],
      },
      {
        shopReportName: 'Samsung',
        shopCode: 'Samsung',
        shopType: '3',
        shopId: 102,
        shopName: 'Samsung',
        childs: [
          {
            shopReportName: 'Samsung1',
            shopCode: 'Samsung1',
            shopType: '4',
            shopId: 3,
            shopName: 'Samsung1',
            childs: [
              {
                shopReportName: '126GB',
                shopCode: 'Samsung1',
                shopType: '4',
                shopId: 3,
                shopName: '126GB',
                childs: [],
              },
              {
                shopReportName: '256GB',
                shopCode: 'Samsung1',
                shopType: '4',
                shopId: 3,
                shopName: '256GB',
                childs: [],
              },
              {
                shopReportName: '512GB',
                shopCode: 'Samsung1',
                shopType: '4',
                shopId: 3,
                shopName: '512GB',
                childs: [],
              }
            ],
          },
          {
            shopReportName: 'Samsung2',
            shopCode: 'Samsung2',
            shopType: '4',
            shopId: 3,
            shopName: 'Samsung2',
            childs: [
              {
                shopReportName: '126GB',
                shopCode: 'Samsung2',
                shopType: '4',
                shopId: 3,
                shopName: '126GB',
                childs: [],
              },
              {
                shopReportName: '256GB',
                shopCode: 'Samsung2',
                shopType: '4',
                shopId: 3,
                shopName: '256GB',
                childs: [],
              },
              {
                shopReportName: '512GB',
                shopCode: 'Samsung2',
                shopType: '4',
                shopId: 3,
                shopName: '512GB',
                childs: [],
              }
            ],
          },
        ],
      }
    ],
  },
  {
    shopReportName: 'Computers',
    shopCode: 'Computers',
    shopType: '2',
    shopId: 1,
    shopName: 'Computers',
    childs: [
      {
        shopReportName: 'Apple',
        shopCode: 'Apple',
        shopType: '3',
        shopId: 2,
        shopName: 'Apple',
        childs: [
          {
            shopReportName: 'iMac',
            shopCode: 'Apple',
            shopType: '3',
            shopId: 2,
            shopName: 'iMac',
            childs: [],
          },
          {
            shopReportName: 'MacBook Pro',
            shopCode: 'Apple',
            shopType: '3',
            shopId: 2,
            shopName: 'MacBook Pro',
            childs: [],
          }
        ],
      },
      {
        shopReportName: 'Microsoft',
        shopCode: 'Microsoft',
        shopType: '3',
        shopId: 2,
        shopName: 'Microsoft',
        childs: [
          {
            shopReportName: 'Dell',
            shopCode: 'Microsoft',
            shopType: '3',
            shopId: 2,
            shopName: 'Dell',
            childs: [],
          },
          {
            shopReportName: 'Lenova',
            shopCode: 'Microsoft',
            shopType: '3',
            shopId: 2,
            shopName: 'Lenova',
            childs: [],
          }
        ],
      },
    ],
  },
  {
    shopReportName: 'Watches',
    shopCode: 'Watches',
    shopType: '2',
    shopId: 1,
    shopName: 'Watches',
    childs: [
      {
        shopReportName: 'Apple',
        shopCode: 'Apple',
        shopType: '3',
        shopId: 2,
        shopName: 'Apple',
        childs: [
          {
            shopReportName: 'Apple Watch 7',
            shopCode: 'Apple',
            shopType: '3',
            shopId: 2,
            shopName: 'Apple Watch 7',
            childs: [],
          },
          {
            shopReportName: 'Apple Watch 3',
            shopCode: 'Apple',
            shopType: '3',
            shopId: 2,
            shopName: 'Apple Watch 3',
            childs: [],
          }
        ],
      },
      {
        shopReportName: 'Android',
        shopCode: 'Android',
        shopType: '3',
        shopId: 2,
        shopName: 'Android',
        childs: [
          {
            shopReportName: 'Sumsung',
            shopCode: 'Android',
            shopType: '3',
            shopId: 2,
            shopName: 'Sumsung',
            childs: [],
          },
          {
            shopReportName: 'Huawei',
            shopCode: 'Android',
            shopType: '3',
            shopId: 2,
            shopName: 'Huawei',
            childs: [],
          }
        ],
      },
    ],
  },
  {
    shopReportName: 'TVs',
    shopCode: 'TVs',
    shopType: '2',
    shopId: 1,
    shopName: 'TVs',
    childs: [
      {
        shopReportName: 'Apple',
        shopCode: 'Apple',
        shopType: '3',
        shopId: 2,
        shopName: 'Apple',
        childs: [
          {
            shopReportName: 'Apple TV',
            shopCode: 'Apple',
            shopType: '3',
            shopId: 2,
            shopName: 'Apple TV',
            childs: [],
          },
        ],
      },
      {
        shopReportName: 'LG',
        shopCode: 'LG',
        shopType: '3',
        shopId: 2,
        shopName: 'LG',
        childs: [
          {
            shopReportName: 'LG Model 1',
            shopCode: 'LG',
            shopType: '3',
            shopId: 2,
            shopName: 'LG Model 1',
            childs: [],
          },
          {
            shopReportName: 'LG Model 2',
            shopCode: 'LG',
            shopType: '3',
            shopId: 2,
            shopName: 'LG Model 2',
            childs: [],
          }
        ],
      },
    ],
  }
];


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  const [data, setData] = useState(recursiveData);
  const [selectedVarient, setSelectedVarient] = useState([]);
  const [filterVarient, setFilterVarient] = useState([]);
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  // const renderComponent1 = () => {
  //   console.log('uniqueVarient',uniqueVarient.length);
  //   return(<Fragment>
  //   {uniqueVarient.map(uniqeItem => (
  //     <View key={uniqeItem.shopReportName} style={{backgroundColor:'red'}}>
  //       {renderVarientComponent(uniqeItem)}
  //     </View>
  //   ))}
  // </Fragment>
  // )}

  const renderVarientComponent = () => {
    return(
    <ScrollView>
    {filterVarient.map(filterItem => (
      <View key={filterItem.shopReportName} style={{flexDirection:'row', backgroundColor:'transparent'}}>
          <View style={{backgroundColor:'gray',marginVertical:3,borderRadius:5}}>
            <Text style={styles.variantDesc}>{filterItem.shopCode}:{filterItem.shopReportName}</Text>
          </View>
      </View>
    ))}
  </ScrollView>
  )}


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
     <View style={styles.container}>
      <CheckboxTree
        data={data}
        textField="shopName"
        childField="childs"
        textStyle={{ color: 'black' }}
        iconColor="black"
        iconSize={26}
        openIcon={<AntDesign name="arrowdown" size={26} />}
        closeIcon={<AntDesign name="arrowright" size={26} />}
        renderItem={({ item, isSelect, isOpen, onOpen, onClose, onSelect }) => (
          <View style={styles.wrapItem1}>
            <View style={styles.wrapItem}>
            <TouchableOpacity onPress={onSelect}>
              <Ionicons
                size={26}
                name={isSelect ? 'checkbox-outline' : 'square-outline'}
              />
            </TouchableOpacity>
            {isOpen ? (
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.name}>{item.shopName}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={onOpen}>
                <Text style={styles.name}>{item.shopName}</Text>
              </TouchableOpacity>
            )}
            
            </View>
            { item.productCount ? (
              <View style={{backgroundColor:'transparent'}}>
                <Text style={styles.shortDesc}>{item.productCount}</Text>
            </View>
            ):<></>}
          </View>
        )}
        onSelect={item => {
          console.log(`Selected item`,item);
          setSelectedVarient([...item]);
          
          var arrFilter = item.filter(function(item){
              return item.shopCode != item.shopReportName;
          });

          // const arrayUniqueByKey = [...new Map(arrFilter.map(item =>
          //   [item[key1], item])).values()];

            setFilterVarient([...arrFilter]);
            //setUniqueVarient([...arrayUniqueByKey]);
          //console.log("FilterArray:",arrFilter);
          //console.log("Unique list",arrayUniqueByKey);
         }}
      />
      {
        selectedVarient.length ? renderVarientComponent() : null
      }
      
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    padding: 10,
    backgroundColor:'white'
  },
  wrapItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0,
    backgroundColor: 'transparent'
  },
  wrapItem1: {
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  icon: {
    marginHorizontal: 8,
  },
  name: {
    fontSize: 20,
    marginLeft: 8,
  },
  shortDesc: {
    marginLeft: 35,
    fontSize: 10,
  },
  variantDesc: {
    marginLeft: 5,
    fontSize: 10,
  },
});

export default App;
