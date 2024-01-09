import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  body: {
    marginLeft: 20,
    marginRight: 20,
  },
  headerimg: {
    width: 100,
    height: 100,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  headertitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  display: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
  },
  displayRight: {
    textAlign: "right",
    marginTop: 10,
    color: "hotpink",
    marginBottom: 30,
  },
  btnLogin: {
    borderRadius: 20,
    height: 40,
  },
  option: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  img: {
    width: 50,
    height: 50,
    margin: 20,
  },
  headertitle2: {
    color: "hotpink",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: "100%",
  },
});
