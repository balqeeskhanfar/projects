import { StyleSheet, View, Text } from "react-native";
import { React, useState } from "react";
import Card from "../component/Card";
import { FlashList } from "@shopify/flash-list";
import useFetchSerise from "../hooks/useFetchSerise";
import { Picker } from "@react-native-picker/picker";

function selectedList(selectedValue) {
    if (selectedValue === "person") {
        return "person";
    } else if (selectedValue === "tv") {
        return "tv";
    } else {
        return "movie";
    }
}

export default function SeriesAndMoviesList({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("movie");

    const { data, isLoading, error, hasNextPage, fetchNextPage } =
        useFetchSerise(selectedList(selectedValue));

    if (isLoading)
        return (
            <View style={styles.loading}>
                <Text>Loading..</Text>
            </View>
        );
    if (error)
        return (
            <Text style={{ color: "red", marginTop: "20%" }}>
                error: {error.message}
            </Text>
        );

    const flattenData = data.pages.flatMap((page) => page.data);

    const loadNext = () => {
        fetchNextPage();
    };
    return (
        <>
            <Picker
                selectedValue={selectedValue}
                style={{
                    height: 180,
                    width: "100%",
                    backgroundColor: "#001d3d",
                    marginTop: -40,
                }}
                itemStyle={{ color: "#f7f7df" }}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);
                }}
            >
                <Picker.Item label="movies" value="movie" />
                <Picker.Item label="TVs" value="tv" />
                <Picker.Item label="people" value="person" />
            </Picker>
            <FlashList
                data={flattenData}
                renderItem={({ item }) => (
                    <Card
                        movie={item}
                        navigation={navigation}
                        selectedValue={selectedValue}
                    />
                )}
                estimatedItemSize={200}
                onEndReached={loadNext}
                onEndReachedThreshold={0.3}
                contentContainerStyle={styles.container}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: "10%",
        paddingBottom: "10%",
        backgroundColor: "#001d3d",
    },
});
