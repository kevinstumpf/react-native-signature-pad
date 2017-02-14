# react-native-signature-pad
React Native wrapper around @[szimek's](https://github.com/szimek) HTML5 Canvas based [Signature Pad](https://github.com/szimek/signature_pad)

- Supports Android and iOS
- Pure JavaScript implementation with no native dependencies
- Tested with RN 0.20
- Can easily be rotated using the "transform" style
- Generates a base64 encoded png image of the signature

## Demo

![SignaturePadDemo](https://cloud.githubusercontent.com/assets/7293984/13297035/303fefc6-dae5-11e5-99e8-edb8335633b5.gif) ![SignaturePadDemoAndroid](https://cloud.githubusercontent.com/assets/7293984/13299954/72bc3bf4-daf2-11e5-8606-388c05c26d6d.gif)

## Installation

```sh
npm install --save react-native-signature-pad
```

## Example

```js
var React = require('react-native');

var {
  View,
  Component,
  } = React;

var SignaturePad = require('react-native-signature-pad');

// Adjust accordingly
var defaultWidth = 100;
var defaultHeight = 100;

export default class Demo extends Component {
  render = () => {
    return (
      <View style={{flex: 1}}>
          <SignaturePad onError={this._signaturePadError}
                        onChange={this._signaturePadChange}
                        defaultWidth={defaultWidth}
                        defaultHeight={defaultHeight}
                        style={{flex: 1, backgroundColor: 'white'}}/>
      </View>
    )
  };

  _signaturePadError = (error) => {
    console.error(error);
  };

  _signaturePadChange = ({base64DataUrl}) => {
    console.log("Got new signature: " + base64DataUrl);
  };
}
```
