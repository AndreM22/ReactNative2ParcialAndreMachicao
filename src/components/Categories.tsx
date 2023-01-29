import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Categorie } from "./Categorie";

export const Categories = (props: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.tittle}>
                    Categories
                </Text>
                <Text style={styles.seeAll}>
                    See All
                </Text>
            </View>
            <ScrollView
                style={styles.ScrollView}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <Categorie title="Art" iconName="image-outline" />
                <Categorie title="Coding" iconName="laptop-outline" />
                <Categorie title="Design" iconName="brush-outline" />
                <Categorie title="Lifestyle" iconName="body-outline" />
                <Categorie title="Business" iconName="business-outline" />
            </ScrollView>
            <ScrollView
                style={styles.ScrollView}
                horizontal
                showsHorizontalScrollIndicator={false}>
                <Categorie title="Marketing" iconName="cash-outline" />
                <Categorie title="Math" iconName="calculator-outline" />
                <Categorie title="Fitness" iconName="barbell-outline" />
                <Categorie title="Music" iconName="headset-outline" />
                <Categorie title="Language" iconName="text-outline" />
            </ScrollView>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 15,
        marginTop: 10,
        marginHorizontal: 5
    },
    titleContainer: {
        height: 30,
        //backgroundColor:"cyan",
        marginHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        right: 0,
        left: 0
    },
    tittle: {
        fontSize: 22,
        color: "black",
        fontWeight: "500"
    },
    seeAll: {
        fontSize: 15,
        color: "#0e9bbb",
    },
    ScrollView: {

    }
});