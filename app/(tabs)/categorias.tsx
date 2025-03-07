import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Categorias = () => {
  const [categorias, setCategorias] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategorias(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => router.push(`/categoria/${item}`)}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categorias;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#EDE0D4" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  category: { padding: 15, backgroundColor: "#D4A373", marginVertical: 5, borderRadius: 5 },
  categoryText: { fontSize: 18, color: "white" },
});
