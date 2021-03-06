import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { useStyle } from "./../../styles/styles.js";
import { SourceItem } from "../../components/FooterComponents";
import { WebView } from "react-native-webview";
import { Entypo } from "@expo/vector-icons";
import { StandardText } from "./../../components/Texts.js";
import { ScrollView } from "react-native-gesture-handler";

export default function ContactUs({ route, navigation }) {
  const { styles, colors, isDark } = useStyle(
    "container",
    "boxContainer",
    "subtitle",
    "scrollViewContent"
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
     
          <StandardText>
            Find our email or fill out the form to get in touch with the team.
          </StandardText>

      <View  style={{ height: 480, marginVertical: 20, borderRadius: 5, overflow: "hidden" }}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scrollEnabled={false}
          source={{
            uri:
              "https://us19.list-manage.com/survey?u=31c07122a61d1793401ba033b&id=869072057c"
          }}
         style={{flex: 1}}
        />
        </View>
      <View style={[styles.boxContainer, { marginBottom: 20 }]}>
        <Text style={[styles.subtitle, { marginTop: 0 }]}>
          For app-related inquiries reach out to us at
          info@LFRinternational.org.
        </Text>
      </View>
      <View style={[styles.boxContainer, { marginBottom: 20 }]}>
        <Text style={[styles.subtitle, { marginTop: 0 }]}>
          For press inquiries please reach out to satvik@runawayapp.com.
        </Text>
      </View>
    </ScrollView>
  );
}
