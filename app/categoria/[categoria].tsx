import { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

const ProductosPorCategoria = () => {
  const { categoria } = useLocalSearchParams();
  const [productos, setProductos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoria}`)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.log(error));
  }, [categoria]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos de {categoria}</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.product}
            onPress={() => router.push(`/producto/${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductosPorCategoria;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#EDE0D4" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  product: { padding: 15, backgroundColor: "white", marginVertical: 5, borderRadius: 5 },
  image: { width: 50, height: 50, marginRight: 10 },
});
