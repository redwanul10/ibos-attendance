import React, { useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview'
import { View } from 'react-native'
import mapHtml from './MapContent';


const Map = (props) => {

    const { lat, long, location, userName } = props
    console.log(props)
    const mapRef = useRef()
    // console.log(location)
    useEffect(() => {
        if (location.latitude && location.latitude) {
            mapRef.current.postMessage(JSON.stringify({ latitude: location.latitude, longitude: location.longitude }));
            // console.log({ lat, long })
        }

    }, [lat, long])

    return (
        <View style={{ width: "100%", height: 200, marginBottom: 10 }}>
            <WebView
                ref={mapRef}
                originWhitelist={['*']}
                source={{ html: mapHtml || "<h1>Hello</h1>" }}
                style={{ height: "100%" }}
                onLoad={() => mapRef.current.postMessage(JSON.stringify({ userName, latitude: location.latitude, longitude: location.longitude }))}
                // style={{ width: "100%", height: 50, backgroundColor: "red" }}
                scalesPageToFit={true}
                scrollEnabled={false}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            // injectedJavaScript={'window.document.querySelector("body").style.backgroundColor = "transparent"'}
            // containerStyle={{ backgroundColor: "red" }}
            />
        </View>
    );
}

export default Map;