// src/pages/main/Cart.js
import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { useCurrentUser } from "@context/userContext.js";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "@pages/product/CartItem.js";

export function Cart({navigation}) {
  const state = useSelector((state) => state.user);
  const state2 = useSelector((state) => state.production);
  const {cart} = state;
  const cartProduct = cart.products;
  const {production} = state2;

  const total = cartProduct.reduce((total, item) => {
    let product = production.find((product) => product.id == item.productId);
    return total + product.price * item.quantity;
  }, 0);

  return (
    <View style={styles.container}>
      <ScrollView>
      {cartProduct.length == 0 ? (
        <View style={styles.shoping}>
          <Text>Shopping now</Text>
          <Button title="Shopping now" onPress={() => navigation.navigate('Home')} />
          </View>
      ) : (
        cartProduct.map((item, index) => {
            return <CartItem data={item} index={index}/>;
        })
      )}
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: ${total}</Text>
        <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  total:{
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  shoping:{
    alignItems: 'center',
    justifyContent: 'center',
  },
})