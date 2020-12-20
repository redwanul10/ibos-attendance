import React, { useEffect } from 'react'
import { Text, View, StatusBar, SafeAreaView, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { Container, Row } from 'native-base';
import ProfileInfo from '../../../../common/components/ProfileInfo';

import DepartmentList from './DepartmentList';
import TutorialSection from './TutorialSection';
import FeedbackSection from './FeedbackSection';
import backgroundImage from '../../../../assets/images/dshboardBg2.png';
import ReportCard from './ReportCard';
import globalStyle from '../../../../common/styles/global';
import { WebView } from 'react-native-webview'
import Html from './chart.html'


const html = `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  </head>
  <body>
  <div class="container">
  <div class="row">
     

      <div class="col-12 chart">
          <canvas id="myChart2" width="500" height="500"></canvas>
      </div>
  </div>
  
</div>
    <script >
    


let labels2 = ['USA', 'BAN', 'China ', 'Lufthansa'];
let data2 = [10, 10, 10, 10];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "Number of passengers carried in 2017 (in mio.)",
            display: true
        },
        legend: {
          display: false
        }
    }
});


let labels3 = ['Attack', 'Defense', 'Passing', 'Tackle', 'Speed'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'Messi',
            fill: true,
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "rgba(179, 181, 198, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179, 181, 198, 1)",
            data: [50, 12, 55, 7, 29]
          },
          {
            label: 'Ronaldo',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [51, 10, 32, 20, 44]
          }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        }
    }
});

let labels4 = ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Others(23)'];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Population of the European Union (in mio)",
            display: true
        }
    }
});

    </script>
  </body>
</html>
`

const HomePage = () => {

    useEffect(() => {
        StatusBar.setBackgroundColor("#008AFF")
    }, [])

    return (
        <>
            <ImageBackground source={backgroundImage} style={style.backgroundImage}>
                <View style={style.container}>
                    <SafeAreaView>
                        <View style={{ paddingHorizontal: 20 }}>
                            <ScrollView
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                            >
                                <ProfileInfo />
                                {/* <DepartmentList /> */}

                                <Text style={[globalStyle.sectionTitle, style.titleMargin]}>Today's Report</Text>
                                <View style={[style.row, { marginHorizontal: -5 }]}>
                                    <ReportCard />
                                    <ReportCard />
                                    <ReportCard />
                                    <ReportCard />

                                </View>

                                <Text style={[globalStyle.sectionTitle, style.titleMargin]}>Sales Statistics</Text>

                                <View style={{ backgroundColor: "white", paddingVertical: 10 }}>
                                    <WebView
                                        originWhitelist={['*']}
                                        source={{ html }}
                                        // style={{ flex: 1, backgroundColor: "red" }}
                                        style={{ height: 300, backgroundColor: "transparent" }}
                                        scalesPageToFit={true}
                                        scrollEnabled={false}
                                        bounces={false}
                                        showsHorizontalScrollIndicator={false}
                                        showsVerticalScrollIndicator={false}
                                        injectedJavaScript={'window.document.querySelector("body").style.backgroundColor = "transparent"'}
                                    // containerStyle={{ backgroundColor: "red" }}
                                    />
                                </View>
                            </ScrollView>
                        </View>

                    </SafeAreaView>
                    {/* <TutorialSection /> */}
                    {/* <FeedbackSection /> */}
                    {/* <WebView
                        originWhitelist={['*']}
                        source={{ html }}
                        // style={{ flex: 1, backgroundColor: "red" }}
                        style={{ backgroundColor: "transparent" }}
                        scalesPageToFit={true}
                        scrollEnabled={false}
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        injectedJavaScript={'window.document.querySelector("body").style.backgroundColor = "transparent"'}
                    // containerStyle={{ backgroundColor: "red" }}
                    /> */}

                </View>

            </ImageBackground>

        </>
    );
}

export default HomePage;

const style = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "100%"
    },
    container: {
        paddingVertical: 10,
        flex: 1
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    titleMargin: {
        marginTop: 35,
        marginBottom: 15
    }
})