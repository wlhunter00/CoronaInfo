import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useStyle } from "./../../styles/styles.js";
import { SourceItem } from "../../components/FooterComponents";
import BigHeaderScrollView from "../../components/BigHeaderScrollView.js";
import { FontAwesome } from "@expo/vector-icons";
import { StandardText } from "../../components/Texts.js";

export default function Sources({ route, navigation }) {
  const { styles, colors, isDark } = useStyle("container", "scrollViewContent");

  const initiallyOpenedSourceType =
    (route.params && route.params.initiallyOpenedSourceType) || false;

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundcolor }]}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <StandardText style={{ marginBottom: 20 }}>
          Learn where our information comes from
        </StandardText>
        <SourceItem
          navigation={navigation}
          typeSource={"Homepage Statistics"}
          isInitiallyOpened={
            initiallyOpenedSourceType === "Homepage Statistics"
          }
          sourcesList={[
            {
              title: "COVID-19 API",
              url: "https://covid19api.com/",
              headline:
                "A free API for data on the Coronavirus. Access data on COVID19 through an easy API for free. Data is sourced from Johns Hopkins CSSE",
            },
            {
              title: "John Hopkins CSSE",
              url:
                "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6",
              headline:
                "The 2019 Novel Coronavirus Visual Dashboard operated by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE).",
            },
            {
              title: "COVID19-API",
              url: "https://covid19-docs.chrismichael.now.sh/",
              headline:
                "This API provides updated real-time data on coronavirus cases from the worldometers page.",
            },
            {
              title: "The COVID Tracking Project",
              url: "https://covidtracking.com/",
              headline:
                "The COVID Tracking Project is a volunteer organization launched from The Atlantic and dedicated to collecting and publishing the data required to understand the COVID-19 outbreak in the United States.",
            }
          ]}
          key={"homepageStats"}
        />
        <SourceItem
          navigation={navigation}
          typeSource={"Live Tracker"}
          isInitiallyOpened={initiallyOpenedSourceType === "Live Tracker"}
          sourcesList={[
            {
              title: "Wordometers",
              url: "https://www.worldometers.info/coronavirus/",
              headline:
                "Live statistics and coronavirus news tracking the number of confirmed cases, recovered patients, tests, and death toll due to the COVID-19.",
            },
            {
              title: "John Hopkins CSSE",
              url:
                "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6",
              headline:
                "The 2019 Novel Coronavirus Visual Dashboard operated by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE).",
            },
            {
              title: "Government of Canada",
              url:
                "https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection.html",
              headline: "Coronavirus disease (COVID-19): Outbreak update",
            },
            {
              title: "Public Health England",
              url: "https://coronavirus.data.gov.uk/",
              headline: "Coronavirus (COVID-19) in the UK",
            },
            {
              title: "Australian Department of Health",
              url:
                "https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-current-situation-and-case-numbers",
              headline:
                "Coronavirus (COVID-19) current situation and case numbers",
            },
          ]}
          key={"liveTracker"}
        />
        <SourceItem
          navigation={navigation}
          typeSource={"Research Journals"}
          sourcesList={[
            {
              title: "The Lancet",
              url:
                "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30154-9/fulltext",
              headline:
                "A familial cluster of pneumonia associated with the 2019 novel coronavirus indicating person-to-person transmission: a study of a family cluster",
            },
            {
              title: "The Lancet",
              url:
                "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30211-7/fulltext",
              headline:
                "Epidemiological and clinical characteristics of 99 cases of 2019 novel coronavirus pneumonia in Wuhan, China: a descriptive study",
            },
            {
              title: "The Lancet",
              url:
                "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext",
              headline:
                "Clinical features of patients infected with 2019 novel coronavirus in Wuhan, China",
            },
            {
              title: "The Lancet",
              url:
                "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(20)30150-9/fulltext",
              headline: "Risk of COVID-19 for cancer patients",
            },
            {
              title: "Nature",
              headline:
                "Remdesivir and chloroquine effectively inhibit the recently emerged novel coronavirus (2019-nCoV) in vitro",
              url:
                "https://www.nature.com/articles/s41422-020-0282-0?fbclid=IwAR2wgEzxXL3pzUEefkN4dOTq_iIEoq5O88p9ZPRMgYlDxLpg_bISGT6RoZ4",
            },
            {
              title: "Tropical Medicine and International Health",
              url: "https://onlinelibrary.wiley.com/doi/full/10.1111/tmi.13383",
              headline: "The COVID‐19 epidemic",
            },
            {
              title:
                "https://onlinelibrary.wiley.com/doi/full/10.1111/tmi.13383",
              url:
                "https://mmrjournal.biomedcentral.com/articles/10.1186/s40779-020-0233-6",
              headline:
                "A rapid advice guideline for the diagnosis and treatment of 2019 novel coronavirus (2019-nCoV) infected pneumonia (standard version)",
            },
          ]}
          key={"researchJourn"}
        />
        <SourceItem
          navigation={navigation}
          typeSource={"Health Organizations"}
          sourcesList={[
            {
              title: "World Health Organization",
              headline:
                "WHO Director-General's opening remarks at the media briefing on COVID-19 - 11 March 2020",
              url:
                "https://www.who.int/dg/speeches/detail/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020",
            },
            {
              title: "World Health Organization",
              url:
                "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public",
              headline: "Coronavirus disease (COVID-19) advice for the public",
            },
            {
              title: "World Health Organization",
              headline:
                "Report of the WHO-China Joint Mission on Coronavirus Disease 2019 (COVID-19)",
              url:
                "https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf",
            },
            {
              title: "Johns Hopkins Medicine",
              headline: "Coronavirus Disease 2019: Myth vs. Fact",
              url:
                "https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/2019-novel-coronavirus-myth-versus-fact",
            },
            {
              title: "Harvard Medical School",
              headline: "Coronavirus Resource Center",
              url:
                "https://www.health.harvard.edu/diseases-and-conditions/coronavirus-resource-center",
            },
          ]}
          key={"healthOrg"}
        />
        <SourceItem
          navigation={navigation}
          typeSource={"News Outlet"}
          sourcesList={[
            {
              title: "Time Magazine",
              headline:
                "Experimental COVID-19 Vaccine Test Begins as U.S. Volunteer Receives First Shot",
              url:
                "https://time.com/5804092/experimental-covid-19-vaccine-test-begins-as-u-s-volunteer-receives-first-shot",
            },
            {
              title: "Bloomberg",
              headline:
                "Coronavirus Tests From LabCorp, Quest Will Cost $50 to $100",
              url:
                "https://www.bloomberg.com/news/articles/2020-03-15/coronavirus-tests-from-labcorp-quest-will-cost-50-to-100",
            },
            {
              title: "NBC News",
              headline:
                "What to do if you are concerned you have COVID-19, according to state health departments",
              url:
                "https://www.nbcnews.com/health/health-news/coronavirus-testing-information-covid-19-tests-according-state-health-departments-n1158041",
            },
            {
              title: "NPR",
              headline:
                "Seattle Health Care System Offers Drive-Through Coronavirus Testing For Workers",
              url:
                "https://www.npr.org/sections/health-shots/2020/03/08/813501632/seattle-health-care-system-offers-drive-through-coronavirus-testing-for-workers",
            },
          ]}
          key={"newsOut"}
        />
        <SourceItem
          navigation={navigation}
          typeSource={"Government Agencies"}
          sourcesList={[
            {
              title: "Centers for Disease Control and Prevention",
              headline: "How COVID-19  Spreads",
              url:
                "https://www.cdc.gov/coronavirus/2019-ncov/about/transmission.html",
            },
            {
              title: "Centers for Disease Control and Prevention",
              headline: "Are You at Higher Risk for Severe Illness?",
              url:
                "https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html",
            },
            {
              title: "Centers for Disease Control and Prevention",
              headline:
                "Steps to help prevent the spread of COVID-19 if you are sick",
              url:
                "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fsteps-when-sick.html",
            },
            {
              title: "Centers for Disease Control and Prevention",
              headline: "How to Protect Yourself",
              url:
                "https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fprevention.html",
            },
            {
              title: "Centers for Disease Control and Prevention",
              headline: "Symptoms",
              url:
                "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fsymptoms.html",
            },
            {
              title: "Centers for Disease Control and Prevention",
              headline:
                "Steps to help prevent the spread of COVID-19 if you are sick",
              url:
                "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html",
            },
            {
              title: "Centers for Disease Control and Prevention",
              headline:
                "Know the facts about coronavirus disease 2019 (COVID-19) and help stop the spread of rumors",
              url:
                "https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/share-facts.html",
            },
            {
              title: "Centers for Disease Control and Prevention",
              headline: "Testing in U.S.",
              url:
                "https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/testing-in-us.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Ftesting-in-us.html",
            },
          ]}
          key={"govAgen"}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
