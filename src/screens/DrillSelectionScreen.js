import * as React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Avatar, Button, List } from "react-native-paper";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const DrillSelectionScreen = () => {
  return <Text>Hello</Text>;
  return (
    <View style={({ flex: 1 }, { backgroundColor: "white" })}>
      <View style={[{ alignItems: "center" }, { justifyContent: "center" }]}>
        <Avatar.Icon size={150} icon="hockey-sticks" />
      </View>

      <View
        style={[
          { alignItems: "center" },
          { justifyContent: "center" },
          { marginTop: HEIGHT * 0.05 },
        ]}
      >
        {/* <Image
          source={require("../assets/harpia-logo.png")}
          style={{ resizeMode: "contain", height: HEIGHT * 0.085 }}
        /> */}
      </View>

      <View
        style={[
          { flexDirection: "row" },
          { alignItems: "center" },
          { justifyContent: "center" },
        ]}
      >
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: "800",
            textAlign: "center",
            paddingVertical: WIDTH * 0.02,
          }}
        >
          <List.Icon icon="hockey-puck" color="blue" />
          SELECT PATTERN
        </Text>
      </View>
      <ScrollView
        style={[
          { marginHorizontal: 5 },
          { borderColor: "red" },
          { borderWidth: 5 },
        ]}
      >
        <View
          style={[
            { flexDirection: "row" },
            { alignItems: "center" },
            { justifyContent: "spacing-between" },
            { margin: WIDTH * 0.015 },
          ]}
        >
          <Button
            mode="contained"
            onPress={() => console.log("Around the World")}
            style={styles.patternButton}
          >
            Around the World
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Pick’n Corners")}
            style={styles.patternButton}
          >
            Pick’n Corners
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Up Down")}
            style={styles.patternButton}
          >
            Up Down
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Downtown")}
            style={styles.patternButton}
          >
            Downtown
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Crash and Bang")}
            style={styles.patternButton}
          >
            Crash and Bang
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Titanic")}
            style={styles.patternButton}
          >
            Titanic
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Mom’s Cookies")}
            style={styles.patternButton}
          >
            Mom’s Cookies
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Riding Pine")}
            style={styles.patternButton}
          >
            Riding Pine
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("Dump and Chase")}
            style={styles.patternButton}
          >
            Dump and Chase
          </Button>
          <Button
            mode="contained"
            onPress={() => console.log("The Frustrating One")}
            style={styles.patternButton}
          >
            The Frustrating One
          </Button>
        </View>
      </ScrollView>
      <View
        style={[
          { flexDirection: "row" },
          { alignItems: "center" },
          { justifyContent: "center" },
        ]}
      >
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: "800",
            textAlign: "center",
            paddingVertical: WIDTH * 0.02,
          }}
        >
          <List.Icon icon="timer" color="blue" />
          SELECT TIMEOUT
        </Text>
      </View>

      <View
        style={[
          { flexDirection: "row" },
          { alignItems: "center" },
          { justifyContent: "space-between" },
          { margin: WIDTH * 0.015 },
          { borderColor: "red" },
          { borderWidth: 5 },
        ]}
      >
        <Button
          mode="contained"
          onPress={() => console.log("3 SEC")}
          style={[
            { width: WIDTH * 0.3 },
            { height: HEIGHT * 0.08 },
            { alignItems: "center" },
            { justifyContent: "center" },
            { borderRadius: 10 },
            { padding: 5 },
            { margin: 5 },
          ]}
        >
          3 SEC
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log("5 SEC")}
          style={[
            { width: WIDTH * 0.3 },
            { height: HEIGHT * 0.08 },
            { alignItems: "center" },
            { justifyContent: "center" },
            { borderRadius: 10 },
            { padding: 5 },
            { margin: 5 },
          ]}
        >
          5 SEC
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log("7 SEC")}
          style={[
            { width: WIDTH * 0.3 },
            { height: HEIGHT * 0.08 },
            { alignItems: "center" },
            { justifyContent: "center" },
            { borderRadius: 10 },
            { padding: 5 },
            { margin: 5 },
          ]}
        >
          7 SEC
        </Button>
      </View>
      <View style={{ margin: WIDTH * 0.025 }}>
        <View
          style={[
            { flexDirection: "row" },
            { alignItems: "center" },
            { justifyContent: "center" },
          ]}
        >
          <Button
            mode="contained"
            onPress={() => console.log("TRAIN NOW")}
            style={[
              { width: WIDTH * 0.8 },
              { height: HEIGHT * 0.06 },
              { alignItems: "center" },
              { justifyContent: "center" },
              { borderRadius: 25 },
            ]}
            labelStyle={[styles.fontStyles, styles.md3FontStyles]}
          >
            TRAIN NOW
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DrillSelectionScreen;

const styles = StyleSheet.create({
  md3FontStyles: {
    lineHeight: 32,
  },
  fontStyles: {
    fontWeight: "800",
    fontSize: 24,
  },
  patternButton: {
    width: WIDTH * 0.3,
    height: WIDTH * 0.3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    margin: 5,
    buttonColor: "blue",
  },
});
