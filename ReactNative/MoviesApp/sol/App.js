import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SeriesAndMoviesList from "./screens/SeriesAndMoviesList";
import MovieDetails from "./screens/MovieDetails";
import PersonCardDetails from "./screens/PersonCardDetails";
import TvDetails from "./screens/TvDetails";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <QueryClientProvider client={queryClient}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="SeriesAndMoviesList"
                        component={SeriesAndMoviesList}
                        options={{ title: "Welcome" }}
                    />
                    <Stack.Screen name="details" component={MovieDetails} />
                    <Stack.Screen
                        name="personDetails"
                        component={PersonCardDetails}
                    />
                    <Stack.Screen name="tvDetails" component={TvDetails} />
                </Stack.Navigator>
            </QueryClientProvider>
        </NavigationContainer>
    );
};

export default App;
