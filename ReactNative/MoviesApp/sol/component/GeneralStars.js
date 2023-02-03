import { StyleSheet } from "react-native";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function GeneralStars(props) {
    return (
        <Stars
            default={props.vote / 2}
            count={5}
            half={true}
            fullStar={
                <Icon name={"star"} style={[styles.myStarStyle]} size={29} />
            }
            emptyStar={
                <Icon
                    name={"star-outline"}
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                    size={29}
                />
            }
            halfStar={
                <Icon
                    name={"star-half"}
                    style={[styles.myStarStyle]}
                    size={29}
                />
            }
        />
    );
}

const styles = StyleSheet.create({
    myStarStyle: {
        color: "#ffc300",
        backgroundColor: "transparent",
        width: 30,
    },
    myEmptyStarStyle: {
        color: "f7f7df",
    },
});
