import { StyleSheet, Image, Text, View, ScrollView } from "react-native";

export default function PersonCardDetails({ navigation, route }) {
    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`;
    };

    return (
        <>
            <ScrollView style={styles.programsList}>
                <View style={{ width: "100%", backgroundColor: "#003566" }}>
                    <Image
                        source={{
                            uri: getPosterURL(route.params.person.profile_path),
                        }}
                        style={{
                            width: 200,
                            height: 300,
                            borderRadius: 3,
                            alignSelf: "center",
                        }}
                    />
                </View>

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
                        {route.params.person.name}
                    </Text>

                    <Text style={styles.text}>
                        {route.params.person.original_language}
                    </Text>
                    {route.params.person.known_for[0] && (
                        <Text
                            style={[
                                styles.text,
                                {
                                    marginTop: "10%",
                                    marginBottom: "10%",
                                    width: "70%",
                                },
                            ]}
                        >
                            known for:
                            {route.params.person.known_for.map((movie) => {
                                return (
                                    <Text
                                        key={movie.id}
                                        style={[
                                            styles.text,
                                            { color: "#acacac" },
                                        ]}
                                        onPress={() =>
                                            navigation.navigate("details", {
                                                movie: movie,
                                            })
                                        }
                                    >
                                        {"\n" + movie.title}
                                    </Text>
                                );
                            })}
                        </Text>
                    )}
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    programsList: {
        display: "flex",
        backgroundColor: "#001d3d",
        width: "100%",
    },
    text: {
        color: "#f7f7df",
        width: 200,
        fontSize: "20%",
    },
});
