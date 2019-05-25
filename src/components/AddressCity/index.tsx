import Taro, { Component } from '@tarojs/taro'
import { View, PickerView, PickerViewColumn } from '@tarojs/components'

import './index.less'
import address from '../../utils/city';

interface AddressProps {
  pickerShow:boolean,
  onHandleToggleShow:Function
}

class AddressPicker extends Component<AddressProps> {

  state = {
    value: [18, 0, 0],
    provinces: address.provinces,
    citys: address.citys[440000],
    areas: address.areas[440100],
    areaInfo: '',
  }

  cityChange (e) {
    const pickerValue = e.detail.value
    const { provinces, citys, value } = this.state
    const provinceNum = pickerValue[0]
    const cityNum = pickerValue[1]
    const countyNum = pickerValue[2]
    // 如果省份选择项和之前不一样，表示滑动了省份，此时市默认是省的第一组数据，
    if (value[0] != provinceNum) {
      const id = provinces[provinceNum].id
      this.setState({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id]
      })
    } else if (value[1] != cityNum) {
      // 滑动选择了第二项数据，即市，此时区显示省市对应的第一组数据
      const id = citys[cityNum].id
      this.setState({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id]
      })
    } else {
      // 滑动选择了区
      this.setState({
        value: [provinceNum, cityNum, countyNum]
      })
    }
  }

  //  params true代表传递地址，false不传递
  handlePickerShow (params: boolean) {
    if (params) {
      const { provinces, citys, areas, value } = this.state;
      // 将选择的城市信息显示到输入框
      let tempAreaInfo = '';
      if(areas[value[2]]){
        tempAreaInfo = provinces[value[0]].name + '' + citys[value[1]].name + areas[value[2]].name;
      }else {
        tempAreaInfo = provinces[value[0]].name + '' + citys[value[1]].name;
      }

      this.setState({
        areaInfo: tempAreaInfo
      }, () => {
        this.props.onHandleToggleShow(this.state.areaInfo)
      })
    }else {
      this.props.onHandleToggleShow(false)
    }
  }

  render () {
    const { provinces, citys, areas, value } = this.state
    const { pickerShow } = this.props
    return (
      <View className={pickerShow? 'address-picker-container show': 'address-picker-container'}>
        <View className='picker-content'>
          <View className='dialog-header'>
            <View className='dialog-button cancel' onClick={this.handlePickerShow.bind(this,false)}>取消</View>
            <View className='dialog-title'>请选择省市区</View>
            <View className='dialog-button' onClick={this.handlePickerShow.bind(this, true)}>确定</View>
          </View>
          <PickerView onChange={this.cityChange} value={value} className='picker-view-wrap'>
            <PickerViewColumn>
              {
                provinces.map((province, index) => {
                  return <View className='picker-item' key={index}>{province.name}</View>
                })
              }
            </PickerViewColumn>
            <PickerViewColumn>
              {
                citys.map((city, index) => {
                  return <View className='picker-item' key={index}>{city.name}</View>
                })
              }
            </PickerViewColumn>
            <PickerViewColumn>
              {
                areas.map((area, index) => {
                  return <View className='picker-item' key={index}>{area.name}</View>
                })
              }
            </PickerViewColumn>
          </PickerView>
        </View>
      </View>
    )
  }
}


export default AddressPicker
