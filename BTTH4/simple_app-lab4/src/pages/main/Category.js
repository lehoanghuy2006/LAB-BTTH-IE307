// src/pages/main/Category.js
import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {fetchCategories, fetchProductionByCategory} from '@utils/reducer/category.js'
import {Loading} from '@pages/loading.js'
import {ProductItem} from '@pages/product/ProductItem.js'

const Tab = createMaterialTopTabNavigator();

export function Category (){
    const state = useSelector(state => state.category)
    const dispatch = useDispatch()
    const {categories} = state
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])
    if(state.loading) return <Loading/>
    return (
        categories.length > 0 && (
            <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 10 },
              tabBarItemStyle: { width: 90 },
              tabBarStyle: { backgroundColor: 'powderblue' },
            }}
            >
                <Tab.Screen name="All" component={ALlProduction}/>
                {categories.map((item, index) => {
                    return (
                        <Tab.Screen name={item} component={CategoryItem} key={index}/>
                    )
                })}
            </Tab.Navigator>
        )
    )
}

const ALlProduction = ({navigation}) => {
  const state = useSelector(state => state.production)
  const {production} = state
  if(!state.loading) {
    return (
      <ScrollView contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#badcfa",
        paddingBottom: 100
      }}>
        <View style={styles.container}>
          <View style={styles.production}>
            {production.map((item, index) => {
              return (
                <View style={styles.productionItem}>
                  <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {data: item})}>
                    <ProductItem data={item} key={item.id} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const CategoryItem = ({route, navigation}) => {
    // get screen name
    const {name} = route
    const state = useSelector(state => state.category)
    const {productionByCategory} = state
    const data = productionByCategory[name]

    if(!state.loading) {
        return (
            <ScrollView contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#badcfa",
                paddingBottom: 100
              }}>
                <View style={styles.container}>
                  <View style={styles.production}>
                    {data.map((item, index) => {
                      return (
                        <View style={styles.productionItem}>
                          <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {data: item})}>
                            <ProductItem data={item} key={item.id} />
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </ScrollView>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#badcfa",
      height: "100%",
      width: "100%",
    },
    production: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center",
      height: "100%",
      width: "100%",
    },
    productionItem: {
      height: "50%",
      width: "45%",
      marginBottom: 10,
    },
  });
  