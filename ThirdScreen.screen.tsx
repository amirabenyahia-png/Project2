import React, {useState} from 'react';
import {
  PermissionsAndroid,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Provider as PaperProvider, Text, TextInput} from 'react-native-paper';
import {Button, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ImagePicker from 'react-native-image-crop-picker';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';
import {
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  Switch,
  Title,
  Paragraph,
  Alert,
  ToastAndroid,
} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import StepIndicator from 'react-native-step-indicator';
import {ThirdScreenStyle} from './ThirdScreen.style';
import {Signature} from './Signature';

import DateTimePicker from '@react-native-community/datetimepicker';

export const ThirdScreen = ({navigation, value}) => {
  const [x, setX] = useState(0);
  const [image1, setImage1] = useState(
    'https://image.flaticon.com/icons/png/512/916/916762.png',
  );
  const [image2, setImage2] = useState(
    'https://image.flaticon.com/icons/png/512/916/916762.png',
  );
  const [image3, setImage3] = useState(
    'https://image.flaticon.com/icons/png/512/916/916762.png',
  );
  const [image4, setImage4] = useState(
    'https://image.flaticon.com/icons/png/512/916/916762.png',
  );

  const [press1, setPress1] = useState(false);
  const [press2, setPress2] = useState(false);
  const [press3, setPress3] = useState(false);
  const [press4, setPress4] = useState(false);
  const [press5, setPress5] = useState(false);
  const [pic, setPic] = useState(false);

  function notifyMessage(msg: string) {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  }

  const takePhotoFromCamera = () => {
    if (!press1) {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7,
      })
        .then(image1 => {
          console.log(image1);
          setImage1(image1.path);
          setPress2(true);
          setPress1(true);
          setX(x + 1);
        })
        .catch(e => {
          notifyMessage(String(e));
        });
    }

    if (press2) {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7,
      })
        .then(image2 => {
          console.log(image2);
          setImage2(image2.path);
          setPress3(true);
          setPress2(false);
          setX(x + 1);
        })
        .catch(e => {
          notifyMessage(String(e));
        });
    }
    if (press3) {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7,
      })
        .then(image3 => {
          console.log(image3);
          setImage3(image3.path);
          setPress4(true);
          setPress3(false);
          setX(x + 1);
        })
        .catch(e => {
          notifyMessage(String(e));
        });
    }
    if (press4) {
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7,
      })
        .then(image4 => {
          console.log(image4);
          setImage4(image4.path);
          setPress5(true);
          setPress4(false);
          setX(x + 1);
        })
        .catch(e => {
          notifyMessage(String(e));
        });
    }
    if (press5) {
      notifyMessage('Just 4 pictures are allowed');
    }
  };

  //toggle button 1
  const [isEnabledone, setIsEnabledone] = useState(false);
  const toggleSwitchone = () =>
    setIsEnabledone(previousState => !previousState);

  //toggle button 2
  const [isEnabledtwo, setIsEnabledtwo] = useState(false);
  const toggleSwitchtwo = () =>
    setIsEnabledtwo(previousState => !previousState);
  //toggle button 3
  const [isEnabledthree, setIsEnabledthree] = useState(false);
  const toggleSwitchthree = () =>
    setIsEnabledthree(previousState => !previousState);
  //toggle button 4
  const [isEnabledfour, setIsEnabledfour] = useState(false);
  const toggleSwitchfour = () =>
    setIsEnabledfour(previousState => !previousState);
  //toggle button 5
  const [isEnabledfive, setIsEnabledfive] = useState(false);
  const toggleSwitchfive = () =>
    setIsEnabledfive(previousState => !previousState);

  //important for datepicker
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const handleFocus = state => {
    setFocus(state);
  };
  //This is for focus method for TextInput
  const [focus, setFocus] = useState(false);

  return (
    <View style={{flex: 1}}>
      <ProgressSteps
        activeStepIconBorderColor="#E07C16"
        completedProgressBarColor="#E07C16"
        completedStepIconColor="#E07C16"
        labelColor="#E07C16"
        activeLabelColor="#000000"
        topOffset={3}
        borderWidth={2}>
        <ProgressStep
          label="Step 1"
          nextBtnTextStyle={ThirdScreenStyle.buttonTextStyle}
          style={{justifyContent: 'center'}}>
          <PaperProvider>
            <View style={ThirdScreenStyle.view1}>
              <Text style={{marginTop: 8}}>Classification</Text>
              <TextInput
                label={!focus ? 'Classification' : ''}
                keyboardType="default"
                underlineColor="#E07C16"
                blurOnSubmit={false}
                // editable={false}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.Text}></TextInput>
            </View>
            <View style={ThirdScreenStyle.view2}>
              <Text style={{marginTop: 30}}>Officer:</Text>
              <TextInput
                // label="linda gasdallah(110)"

                underlineColor="#E07C16"
                blurOnSubmit={false}
                editable={false}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.TextInput1}>
                linda gasdallah(110)
              </TextInput>
            </View>
            <View style={ThirdScreenStyle.view2}>
              <Text style={{marginTop: 10}}>From</Text>
              <View style={ThirdScreenStyle.view3}>
                <TextInput
                  underlineColor="#E07C16"
                  blurOnSubmit={false}
                  editable={false}
                  theme={{
                    colors: {primary: '#E07C16'},
                  }}
                  style={ThirdScreenStyle.TextInput2}>
                  29-07-2021
                </TextInput>
                <TextInput
                  label="HH:mm"
                  underlineColor="#E07C16"
                  onFocus={showTimepicker}
                  theme={{
                    colors: {primary: '#E07C16'},
                  }}
                  style={ThirdScreenStyle.TextInput3}>
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
                  )}
                  {/* {date.toISOString().slice(0, 10)} */}
                </TextInput>
              </View>
            </View>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 10}}>To</Text>
              <TextInput
                underlineColor="#E07C16"
                blurOnSubmit={false}
                editable={false}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.TextInput4}>
                29-07-2021 09:58
              </TextInput>
            </View>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 15}}>Site</Text>
              <ScrollView horizontal>
                <TextInput
                  underlineColor="#E07C16"
                  blurOnSubmit={false}
                  editable={false}
                  theme={{
                    colors: {primary: '#E07C16'},
                  }}
                  style={ThirdScreenStyle.TextInput1}>
                  You are not on Site.Please go to the Site and try again You
                  are not on Site.Please go to the Site and try again
                </TextInput>
              </ScrollView>
            </View>
            <View style={ThirdScreenStyle.view4}>
              <Text style={{marginTop: 25}}>Address</Text>
              <TextInput
                label="Address:"
                underlineColor="#E07C16"
                blurOnSubmit={false}
                editable={false}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.TextInput5}></TextInput>
            </View>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 15}}>Post Code</Text>
              <TextInput
                label={!focus ? 'Post Code' : ''}
                keyboardType="default"
                underlineColor="#E07C16"
                blurOnSubmit={false}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.Text}></TextInput>
            </View>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 10}}>Support staff contacted</Text>
              <View style={ThirdScreenStyle.view5}>
                <Switch
                  trackColor={{false: '#fce1c3', true: '#fbe7ce'}}
                  thumbColor={isEnabledone ? '#f09a2b' : '#f4f3f4'}
                  onValueChange={toggleSwitchone}
                  value={isEnabledone}
                />
              </View>
            </View>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 15}}>By whom</Text>
              <TextInput
                label={!focus ? 'By whom' : ''}
                keyboardType="default"
                underlineColor="#E07C16"
                blurOnSubmit={false}
                editable={isEnabledone ? true : false}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.Text}></TextInput>
            </View>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 15}}>Time</Text>
              <TextInput
                label={!focus ? 'HH:mm' : ''}
                keyboardType="default"
                underlineColor="#E07C16"
                blurOnSubmit={false}
                editable={isEnabledone ? true : false}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.Text}></TextInput>
            </View>
          </PaperProvider>
        </ProgressStep>

        <ProgressStep
          label="Step 2"
          previousBtnTextStyle={ThirdScreenStyle.buttonTextStyle}
          nextBtnTextStyle={ThirdScreenStyle.buttonTextStyle}>
          <PaperProvider>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 8}}>Fire Brigade Called</Text>
              <View
                style={{
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginLeft: 170,
                }}>
                <Switch
                  trackColor={{false: '#fce1c3', true: '#fbe7ce'}}
                  thumbColor={isEnabledtwo ? '#f09a2b' : '#f4f3f4'}
                  onValueChange={toggleSwitchtwo}
                  value={isEnabledtwo}
                />
              </View>
            </View>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 8}}>Ambulance Called</Text>
              <View style={ThirdScreenStyle.view5}>
                <Switch
                  trackColor={{false: '#fce1c3', true: '#fbe7ce'}}
                  thumbColor={isEnabledthree ? '#f09a2b' : '#f4f3f4'}
                  onValueChange={toggleSwitchthree}
                  value={isEnabledthree}
                />
              </View>
            </View>
            <View style={ThirdScreenStyle.view3}>
              <Text style={{marginTop: 8}}>Police Called </Text>
              <View style={ThirdScreenStyle.view5}>
                <Switch
                  trackColor={{false: '#fce1c3', true: '#fbe7ce'}}
                  thumbColor={isEnabledfour ? '#f09a2b' : '#f4f3f4'}
                  onValueChange={toggleSwitchfour}
                  value={isEnabledfour}
                />
              </View>
            </View>
            <View style={ThirdScreenStyle.view6}>
              <Text style={{marginTop: 15}}>Police Station</Text>
              <TextInput
                label={!focus ? 'Police Station' : ''}
                keyboardType="default"
                underlineColor="#E07C16"
                blurOnSubmit={false}
                editable={isEnabledfour ? true : false}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.Text}></TextInput>
            </View>
            <View style={ThirdScreenStyle.view6}>
              <Text style={{marginTop: 15}}>Police Contacted By</Text>
              <TextInput
                label={!focus ? 'Police Contacted By' : ''}
                keyboardType="default"
                underlineColor="#E07C16"
                blurOnSubmit={false}
                editable={isEnabledfour ? true : false}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.Text}></TextInput>
            </View>
            <View style={ThirdScreenStyle.view7}>
              <Text style={{marginTop: 8}}>By whom</Text>
              <TextInput
                label={!focus ? 'By whom' : ''}
                keyboardType="default"
                underlineColor="#E07C16"
                blurOnSubmit={false}
                editable={false}
                onFocus={() => handleFocus(true)}
                onBlur={() => handleFocus(false)}
                theme={{
                  colors: {primary: '#E07C16'},
                }}
                style={ThirdScreenStyle.Text}></TextInput>
            </View>
          </PaperProvider>
        </ProgressStep>
        <ProgressStep
          label="Step 3"
          labelStyle={{color: '#E07C16'}}
          previousBtnTextStyle={ThirdScreenStyle.buttonTextStyle}
          nextBtnTextStyle={ThirdScreenStyle.buttonTextStyle}>
          <View style={ThirdScreenStyle.view1}>
            <Text style={{marginTop: 8}}>Damage To Property caused</Text>
            <View style={ThirdScreenStyle.view5}>
              <Switch
                trackColor={{false: '#fce1c3', true: '#fbe7ce'}}
                thumbColor={isEnabledfive ? '#f09a2b' : '#f4f3f4'}
                onValueChange={toggleSwitchfive}
                value={isEnabledfive}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              margin: 10,
              height: 70,
              marginBottom: 0,
            }}>
            <Text style={{fontWeight: 'bold'}}>
              I declare that the information given in the repot{'\n'}
              to be true and all details correct to the best of my{'\n'}
              knowlegde
            </Text>
          </View>
          <View style={ThirdScreenStyle.view3}>
            <TextInput
              label={!focus ? 'Report Details' : ''}
              keyboardType="default"
              underlineColor="#E07C16"
              blurOnSubmit={false}
              // editable={false}
              onFocus={() => handleFocus(true)}
              onBlur={() => handleFocus(false)}
              theme={{
                colors: {primary: '#E07C16'},
              }}
              style={ThirdScreenStyle.Text}></TextInput>
          </View>
          <View>
            <Button
              onPress={() => {
                navigation.navigate('Profile');
              }}
              icon={{
                name: 'menu',
                size: 15,
                color: 'white',
              }}
              title="Upload Signature"
              buttonStyle={{
                backgroundColor: '#e88720',
                marginLeft: 60,
                marginRight: 0,
                height: 30,
                width: 150,
                marginTop: 10,
              }}
              containerStyle={{
                height: 30,
                justifyContent: 'center',
                marginHorizontal: 20,
                // marginBottom: 10,
              }}
              titleStyle={{
                fontSize: 9,
                fontWeight: 'bold',
                marginTop: 0,
                padding: 9,
                textAlign: 'center',
              }}
            />
          </View>

          <View style={{marginTop: 50, marginLeft: 10}}>
            <Button
              onPress={takePhotoFromCamera}
              icon={{
                name: 'camera',
                size: 15,
                color: 'white',
              }}
              title={
                x === 0 ? 'Take Picture' : 'Take Picture (' + String(x) + '/4)'
              }
              buttonStyle={{
                backgroundColor: '#e88720',
                marginLeft: 50,
                marginRight: 0,
                height: 30,
                width: 250,
                marginBottom: 35,
              }}
              containerStyle={{
                height: 50,
                justifyContent: 'center',
                marginHorizontal: 20,
              }}
              titleStyle={{
                fontSize: 9,
                fontWeight: 'bold',
                marginTop: 0,
                padding: 9,
              }}
            />
            {/* <ScrollView
              horizontal
              contentContainerStyle={{justifyContent: 'space-between'}}>
              <ImageBackground
                source={image}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </ImageBackground>
              <Icon
                name="image"
                color="#6b6d6a"
                onPress={() => console.log('hello')}
                iconStyle={{width: 12}}
                size={110}
              />
              <Icon
                name="image"
                color="#6b6d6a"
                onPress={() => console.log('hello')}
                iconStyle={{width: 12}}
                size={110}
              />
              <Icon
                name="image"
                color="#6b6d6a"
                onPress={() => console.log('hello')}
                iconStyle={{width: 12}}
                size={110}
              />
            </ScrollView> */}
            <ScrollView
              horizontal
              contentContainerStyle={{justifyContent: 'space-between'}}>
              <ImageBackground
                source={{
                  uri: image1,
                }}
                style={{height: 150, width: 150, marginRight: 10}}
                // imageStyle={{borderRadius: 15}}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </ImageBackground>
              <ImageBackground
                source={{
                  uri: image2,
                }}
                style={{height: 150, width: 150, marginRight: 10}}
                // imageStyle={{borderRadius: 15}}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </ImageBackground>
              <ImageBackground
                source={{
                  uri: image3,
                }}
                style={{height: 150, width: 150, marginRight: 10}}
                // imageStyle={{borderRadius: 15}}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </ImageBackground>
              <ImageBackground
                source={{
                  uri: image4,
                }}
                style={{height: 150, width: 150, marginRight: 10}}
                // imageStyle={{borderRadius: 15}}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}></View>
              </ImageBackground>
            </ScrollView>
            <View>
              <Button
                icon={{
                  name: 'menu',
                  size: 15,
                  color: 'white',
                }}
                title="Upload all"
                buttonStyle={{
                  backgroundColor: '#e88720',
                  marginLeft: 60,
                  marginRight: 0,
                  height: 30,
                  width: 150,
                  marginTop: 10,
                }}
                containerStyle={{
                  height: 30,
                  justifyContent: 'center',
                  marginHorizontal: 20,
                  // marginBottom: 10,
                }}
                titleStyle={{
                  fontSize: 9,
                  fontWeight: 'bold',
                  marginTop: 0,
                  padding: 9,
                  textAlign: 'center',
                }}
              />
            </View>
            {value && <Text>Signature is ready</Text>}
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

function ProfileScreen({navigation, onchange}) {
  const [y, setY] = useState(false);

  return (
    <View style={ThirdScreenStyle.container2}>
      <View style={{flex: 1, flexDirection: 'row', marginTop: 30}}>
        <RNSketchCanvas
          containerStyle={{backgroundColor: 'transparent', flex: 1}}
          canvasStyle={{backgroundColor: 'transparent', flex: 1}}
          defaultStrokeIndex={0}
          defaultStrokeWidth={5}
          closeComponent={
            <View style={ThirdScreenStyle.functionButton}>
              <Text style={{color: 'white'}}>Close</Text>
            </View>
          }
          onStrokeEnd={() => {
            onchange(true);
          }}
          onClosePressed={() => {
            navigation.navigate('ThirdPage');
          }}
          // onStrokeEnd={() => {
          //   if (Platform.OS === 'android') {
          //     ToastAndroid.show('Signature ready to upload', ToastAndroid.LONG);
          //   } else {
          //     AlertIOS.alert('Signature ready to upload');
          //   }
          // }}

          undoComponent={
            <View style={ThirdScreenStyle.functionButton}>
              <Text style={{color: 'white'}}>Undo</Text>
            </View>
          }
          clearComponent={
            <View style={ThirdScreenStyle.functionButton}>
              <Text style={{color: 'white'}}>Clear</Text>
            </View>
          }
          eraseComponent={
            <View style={ThirdScreenStyle.functionButton}>
              <Text style={{color: 'white'}}>Eraser</Text>
            </View>
          }
          strokeComponent={color => (
            <View
              style={[
                {backgroundColor: color},
                ThirdScreenStyle.strokeColorButton,
              ]}
            />
          )}
          strokeSelectedComponent={(color, index, changed) => {
            return (
              <View
                style={[
                  {backgroundColor: color, borderWidth: 2},
                  ThirdScreenStyle.strokeColorButton,
                ]}
              />
            );
          }}
          //option for changing the size of drawing tool
          strokeWidthComponent={w => {
            return (
              <View style={ThirdScreenStyle.strokeWidthButton}>
                <View
                  style={{
                    backgroundColor: 'white',
                    marginHorizontal: 2.5,
                    width: Math.sqrt(w / 3) * 10,
                    height: Math.sqrt(w / 3) * 10,
                    borderRadius: (Math.sqrt(w / 3) * 10) / 2,
                  }}
                />
              </View>
            );
          }}
          saveComponent={
            <View style={ThirdScreenStyle.functionButton}>
              <Text style={{color: 'white'}}>Save</Text>
            </View>
          }
          savePreference={() => {
            return {
              folder: 'RNSketchCanvas',
              filename: String(Math.ceil(Math.random() * 100000000)),
              transparent: false,
              imageType: 'png',
            };
          }}
          //onSketchSaved={(success, filePath) => { alert('filePath: ' + filePath); }}
        />
      </View>
    </View>
  );
}
const Stack = createStackNavigator();

function MyStack() {
  const [z, setZ] = useState(false);
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ThirdPage"
        // component={ThirdScreen}
        render={() => <ThirdScreen navigation={navigation} value={z} />}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        // component={ProfileScreen}
        render={() => <ProfileScreen navigation={navigation} onchange={setZ} />}
        options={{
          title: 'Signature',
          headerStyle: {
            height: 40,
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            fontSize: 20,
            color: '#2a8495',
          },
          headerTintColor: '#2a8495',
        }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;
