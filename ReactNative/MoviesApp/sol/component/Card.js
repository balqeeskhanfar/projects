import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import GeneralStars from "./GeneralStars";

export default function Card({ movie, navigation, selectedValue }) {
    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;
    };

    return (
        <>
            {selectedValue === "movie" && (
                <TouchableOpacity
                    style={styles.programsList}
                    onPress={() =>
                        navigation.navigate("details", { movie: movie })
                    }
                >
                    <Image
                        source={{ uri: getPosterURL(movie.poster_path) }}
                        style={{ width: 100, height: 150 }}
                    />
                    <View style={styles.card}>
                        <View style={{ height: 83 }}>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "20%",
                                }}
                            >
                                {movie.title}
                            </Text>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "15%",
                                    marginTop: 4,
                                }}
                            >
                                {movie.release_date}
                            </Text>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "15%",
                                }}
                            >
                                {movie.original_language}
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 15,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 30,
                                    color: "#ffc300",
                                    width: 50,
                                }}
                            >
                                {movie.vote_average}
                            </Text>
                            <GeneralStars vote={movie.vote_average} />
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            {selectedValue === "person" && (
                <TouchableOpacity
                    style={styles.programsList}
                    onPress={() =>
                        navigation.navigate("personDetails", { person: movie })
                    }
                >
                    <Image
                        source={{ uri: getPosterURL(movie.profile_path) }}
                        style={{ width: 100, height: 150 }}
                    />
                    <View style={styles.card}>
                        <View style={{ height: 83 }}>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "20%",
                                }}
                            >
                                {movie.name}
                            </Text>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "15%",
                                    marginTop: 4,
                                }}
                            >
                                {movie.gender == 1 ? "female" : "male"}
                            </Text>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "15%",
                                }}
                            >
                                {movie.original_language}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            {selectedValue === "tv" && (
                <TouchableOpacity
                    style={styles.programsList}
                    onPress={() =>
                        navigation.navigate("tvDetails", { person: movie })
                    }
                >
                    <Image
                        source={{ uri: getPosterURL(movie.poster_path) }}
                        style={{ width: 100, height: 150 }}
                    />
                    <View style={styles.card}>
                        <View style={{ height: 83 }}>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "20%",
                                }}
                            >
                                {movie.name}
                            </Text>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "15%",
                                    marginTop: 4,
                                }}
                            >
                                {movie.first_air_date}
                            </Text>
                            <Text
                                style={{
                                    color: "#f7f7df",
                                    width: 200,
                                    fontSize: "15%",
                                }}
                            >
                                {movie.original_language}
                            </Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: 15,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 30,
                                    color: "#ffc300",
                                    width: 50,
                                }}
                            >
                                {movie.vote_average}
                            </Text>
                            <GeneralStars vote={movie.vote_average} />
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: "10%",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    programsList: {
        display: "flex",
        flexDirection: "row",
        borderRadius: 5,
        width: 320,
        margin: 10,
        backgroundColor: "#003566",
        alignSelf: "center",
    },
    card: {
        margin: 8,
    },
});
