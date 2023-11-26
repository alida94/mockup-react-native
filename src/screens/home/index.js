import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native';
import { connect } from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import { List, SearchBar, Provider, Modal } from '@ant-design/react-native';
import Text from '@components/Text';
import useHook from './hook';
import Icon from 'react-native-vector-icons/AntDesign';

const Home = (props) => {
  const {height, width} = useWindowDimensions();
  const h = useHook(props);
  const initialRegion = {
    latitude: 3.1473964,
    longitude: 101.6984301,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0121,
  }

  const itemArr = (data, action) => (
    <>
      {data.map((item, key) => (
        <List.Item key={key}>
          <TouchableOpacity
            onPress={()=> action ? h.goTo(item) : null}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text children={item.name} />
          </TouchableOpacity>
        </List.Item>
      ))}
    </>
  )
  
  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        <MapView
          ref={h.mapRef}
          style={StyleSheet.absoluteFillObject}
          initialRegion={initialRegion}
        >
          <Marker
            coordinate={{
              latitude: h.focusMarker?.latitude || initialRegion?.latitude,
              longitude: h.focusMarker?.longitude || initialRegion?.longitude,
            }}
            title={h.focusMarker?.subName || 'Maybank'}
          />
        </MapView>
        <View style={{ position: 'absolute', top: 20, left: 20, right: 20, }}>
          <View style={{ flex:1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#ececec', justifyContent: 'space-around'}}>
            {(!h.openList) && (
              <Icon name='clockcircleo' size={32} color='black' style={{marginLeft: 5}} onPress={()=> h.isVisible(true)} />
            )}
            <View style={{ flex:1}}>
              <SearchBar
                value={h.searchKeyword}
                placeholder="Search by"
                onSubmit={(value) => h.setOpenList(false)}
                onChange={(value) => {h.setSearchKeyword(value); h.setOpenList(true)}}
                cancelText='Cancel'
                onCancel={() => {h.setSearchKeyword(''); h.setOpenList(false)}}
                style={{
                  height: 40
                }}
              />
            </View>
          </View>
          {(!!h.openList) && (
            <View style={{ height: 200, backgroundColor: 'white' }}>
              <ScrollView>
                <List>{itemArr(h.byFilter, true)}</List>
              </ScrollView>
            </View>
          )}
        </View>
        <Modal
          title="History"
          transparent
          onClose={()=> h.isVisible(false)}
          maskClosable
          visible={h.visible}
          closable
          >
          <View style={{height: height - 100 }}>
            <ScrollView>
              <List>{itemArr(h.history, false)}</List>
            </ScrollView>
          </View>
        </Modal>
      </SafeAreaView>
    </Provider>
  );
};

const mapStateToProps = (state) => ({
  history: state.history
});

export default connect(mapStateToProps)(Home);
