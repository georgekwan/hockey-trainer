import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Avatar, Card, Text, List } from "react-native-paper";
import { theme } from "../core/theme";

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const HomeScreen = () => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <View>
        <Card.Content>
          <View>
            <Text
              style={{
                fontSize: WIDTH * 0.08,
                fontWeight: "bold",
                paddingLeft: 5,
                paddingVertical: WIDTH * 0.02,
              }}
            >
              Welcome, Josh!
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Avatar.Icon size={100} icon="face-man-shimmer" />
            <View
              style={{
                paddingLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: WIDTH * 0.08,
                  fontWeight: "800",
                  paddingLeft: 5,
                }}
              >
                LAST TRAINING
              </Text>
              <Text
                style={{
                  fontSize: WIDTH * 0.05,
                  fontWeight: "500",
                  paddingLeft: 5,
                  paddingVertical: WIDTH * 0.02,
                }}
              >
                Mom's cookies pattern
              </Text>
            </View>
          </View>
          <View
            style={
              ({ flexDirection: "column" },
              { justifyContent: "space-around" },
              { margin: WIDTH * 0.005 })
            }
          >
            <Text
              style={{
                fontSize: WIDTH * 0.08,
                fontWeight: "800",
                paddingLeft: 5,
                paddingVertical: WIDTH * 0.02,
              }}
            >
              OVERALL STATS
            </Text>
            <Text
              style={{
                fontSize: WIDTH * 0.05,
                fontWeight: "500",
                paddingLeft: 5,
                paddingVertical: WIDTH * 0.001,
              }}
            >
              <List.Icon icon="bullseye-arrow" color={theme.colors.primary} />
              Average accuracy: 88%
            </Text>
            <Text
              style={{
                fontSize: WIDTH * 0.05,
                fontWeight: "500",
                paddingLeft: 5,
                paddingVertical: WIDTH * 0.001,
              }}
            >
              <List.Icon icon="target" color={theme.colors.primary} />
              Total shots taken: 165
            </Text>
          </View>
          <View
            style={
              ({ flexDirection: "column" },
              { justifyContent: "space-around" },
              { margin: WIDTH * 0.005 })
            }
          >
            <Text
              style={{
                fontSize: WIDTH * 0.05,
                fontWeight: "800",
                // paddingLeft: 5,
                paddingVertical: WIDTH * 0.02,
              }}
            >
              RECOMMENDED PATTERN:
            </Text>
            <Text
              style={{
                fontSize: WIDTH * 0.05,
                fontWeight: "500",
                // paddingLeft: 5,
                paddingVertical: WIDTH * 0.001,
              }}
            >
              Top-Left
            </Text>
          </View>
        </Card.Content>
      </View>
    </Card>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: { width: "100%", height: "50%", borderColor: "red", borderWidth: 5 },
});
