// src/pages/product/CartItem.js
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { Quantity, RemoveFromCart } from "@utils/reducer/user.js";
export const CartItem = ({ data, index }) => {
  const state = useSelector((state) => state.production);
  const dispatch = useDispatch();
  const { production } = state;
  const state2 = useSelector((state) => state.user);
  const { cart } = state2;
  let product = production.find((item) => item.id == data.productId);
  const deleteItem = (id) => {
        if(cart.products.length == 1){
            Alert.alert("Delete", "Are you sure you want to delete this item?", [
                {
                    text: "Yes",
                    onPress: () => {
                        dispatch(RemoveFromCart({id}))
                    }
                },
                {
                    text: "Cancel",
                    style: "cancel"
                }
            ])
        }
        else{
            dispatch(RemoveFromCart({id}))
        }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.productTitle}>{product.title}</Text>
      <View style={styles.productDetail}>
        <View>
          <Image
            source={{ uri: product.image }}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <View>
          <Text>${product.price}</Text>
          <View style={styles.quantity}>
            <Pressable
              onPress={() => {
                dispatch(Quantity({ index, type: "decrease" }));
              }}
            >
              <Text>-</Text>
            </Pressable>
            <Text>{data.quantity}</Text>
            <Pressable
              onPress={() => {
                dispatch(Quantity({ index, type: "increase" }));
              }}
            >
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={styles.productTitle}>
            Total {product.price * data.quantity}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>{
                deleteItem(product.id)
          }}>
            <Icon name="trash" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
