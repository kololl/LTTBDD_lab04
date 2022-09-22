import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image, Button
} from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{
        flex: 1, backgroundColor: '#ffffff',
        flexDirection: 'row', justifyContent: 'space-between',
      }} >
        <Image
          source={require('./assets/book.png')}
        />
        <View>
          <Text style={{ fontWeight: 'bold' }}>
            Nguyên hàm tích phân và ứng dụng</Text>
          <Text></Text>
          <Text style={{ fontWeight: 'bold' }}>
            Cung cấp bởi Tiki Trading</Text>

          <Text style={{ fontWeight: 'bold', color: '#EE0D0D' }}>
            141.800 đ</Text>

          <Text style={{ fontWeight: 'bold', color: '#EE0D0D' }}>
            141.800 đ</Text>
          <Text></Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={require('./assets/btnminus.png')}></Image>
            <Text style={{ marginLeft: 20 }}>1</Text>
            <Image source={require('./assets/btnadd.png')} style={{ marginLeft: 20 }}></Image>
            <Text style={{ color: '#134FEC', marginLeft: 70 }}>Mua sau</Text>

          </View>

        </View>


      </View>

      <View style={{ flex: 2, flexDirection: "column", justifyContent: 'space-between', marginTop: 120 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: 'bold' }}>
            Mã giảm giá đã lưu</Text>
          <Text style={{ color: '#134FEC', marginLeft: 40 }}>
            Xem tại đây</Text>
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }} >
          <Button title="Mã giảm giá"   ></Button>
          <Image source={require('./assets/Group12.png')}></Image>

        </View>


      </View>


      <View style={{ backgroundColor: '#C4C4C4', height: 20, marginTop: 80 }}>

      </View>
      <View style={{ backgroundColor: '#ffffff', flexDirection: "row", height: 50 }} >

        <Text style={{ fontWeight: 'bold', marginTop: 15 }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={{ fontWeight: 'bold', color: '#134FEC', marginTop: 15 }}>
          Nhập tại đây?
        </Text>
      </View>
      <View style={{ backgroundColor: '#C4C4C4', height: 20 }}>

      </View>
      <View style={{ backgroundColor: '#ffffff', flexDirection: "row", height: 40, marginTop: 20 }} >
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          Tạm tính
        </Text>
        <Text style={{ fontWeight: 'bold', color: '#EE0D0D', marginLeft: 200, fontSize: 20 }}>
          141.800 đ
        </Text>
      </View>
      <View style={{ backgroundColor: '#C4C4C4', height: 150 }}>

      </View>
      <View style={{ flex: 3, backgroundColor: '#ffffff', flexDirection: "row", marginTop: 20 }} >
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          Thành tiền
        </Text>
        <Text style={{ fontWeight: 'bold', color: '#EE0D0D', marginLeft: 180, fontSize: 20 }}>
          141.800 đ
        </Text>
      </View>
      <View style={{ backgroundColor: '#E53935', }}>
        <Text style={{ color: '#FFFFFF', textAlign: 'center', height: 50, marginTop: 20, fontSize: 25 }}>
          TIẾN HÀNH ĐẶT HÀNG
        </Text>

      </View>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,

  },
});

export default Flex; 