import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import GeneralStars from "../component/GeneralStars";
import YoutubePlayer from "react-native-youtube-iframe";
import useFetchKey from "../hooks/useFetchKey";

export default function MovieDetails({ route }) {
    const { data, isLoading, error } = useFetchKey(
        "movie",
        route.params.movie.id
    );

    if (isLoading) return <Text>Loading...</Text>;
    if (error)
        return (
            <Text style={{ color: "red", marginTop: "20%" }}>
                error: {error.message}
            </Text>
        );

    return (
        <ScrollView style={styles.programsList}>
            <YoutubePlayer height={250} videoId={data} />

            <View
                style={{
                    borderRadius: 5,
                    width: 350,
                    margin: 10,
                    backgroundColor: "#003566",
                    alignSelf: "center",
                    display: "flex",
                    margin: 20,
                    padding: 20,
                }}
            >
                <Text style={[styles.text, { fontSize: 30 }]}>
                    {route.params.movie.title}
                </Text>

                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            color: "#ffc300",
                            width: 50,
                        }}
                    >
                        {route.params.movie.vote_average}
                    </Text>
                    <GeneralStars vote={route.params.movie.vote_average} />
                </View>

                <Text style={styles.text}>
                    {route.params.movie.original_language}
                </Text>
                <Text style={styles.text}>
                    vote count: {route.params.movie.vote_count}
                </Text>
                <Text
                    style={[
                        styles.text,
                        {
                            marginTop: "10%",
                            marginBottom: "10%",
                            width: "100%",
                            color: "#acacac",
                        },
                    ]}
                >
                    overview:
                    {"\n" + route.params.movie.overview}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    programsList: {
        display: "flex",
        backgroundColor: "#001d3d",
        width: "100%",
        alignContent: "center",
    },
    text: {
        color: "#f7f7df",
        width: 200,
        fontSize: "20%",
    },
});
