import { FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardMovies } from "../../components/CardMovies";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

export function Home() {
    const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);

    useEffect(() => {
        loadMoreData();
    }, []);

    const loadMoreData = async () => {
        const response = await api.get("/movie/popular");
        setDiscoveryMovies(response.data.results);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>What do you want to watch?</Text>
                <View style={styles.containerInput}>
                    <TextInput 
                        placeholderTextColor={"#fff"}
                        placeholder="Search"
                        style={styles.input}
                    />
                    <MagnifyingGlass color='#fff' size={20} weight="light" />
                </View>
            </View>
            <View>
                <FlatList
                    data={discoveryMovies}
                    numColumns={3}
                    renderItem={(item) => <CardMovies data={item.item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 25,
                        paddingBottom: 200,
                        alignItems: 'center'
                    }}
                />
            </View>
        </View>
    )
}