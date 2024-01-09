// src/pages/main/Home.js
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProduction,
  fetchLatestProduction,
  fetchOldestProduction,
} from "@utils/reducer/production.js";
import { useEffect } from "react";
import { Loading } from "@pages/loading.js";
import { ProductItem } from "@pages/product/ProductItem.js";
import { Banner } from "@pages/product/Banner.js";

export function Home({navigation}) {
  const state = useSelector((state) => state.production);
  const { production, hotProduction, newProduction } = state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduction());
    dispatch(fetchLatestProduction());
    dispatch(fetchOldestProduction());
  }, []);

  return state.loading ? (
    <Loading />
  ) : (
    <ScrollView contentContainerStyle={{
      backgroundColor: "#badcfa",
      padding: 10
    }}>
      <View>
        <Banner />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
          Hot Production
        </Text>
        <View style={styles.production}>
          {hotProduction.map((item, index) => {
            return (
              <View style={styles.productionItem}>
                <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", {data: item})}>
                  <ProductItem data={item} key={item.id} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
          New Production
        </Text>
        <View style={styles.production}>
          {newProduction.map((item, index) => {
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
    height: "70%",
    width: "100%",
  },
  productionItem: {
    height: "15%",
    width: "45%",
    marginBottom: 10,
  },
});
