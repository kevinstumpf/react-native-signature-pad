# react-native-signature-pad
React Native wrapper around @[szimek's](https://github.com/szimek) HTML Canvas based [Signature Pad](https://github.com/szimek/signature_pad)

- Supports Android and iOS
- Tested with RN 0.20
- Can easily be rotated using the "transform" style

## Demo

![SignaturePadDemo](https://cloud.githubusercontent.com/assets/7293984/13274796/f3bf0370-da62-11e5-88df-5827a9617e77.png)

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

export default class Demo extends Component {
  render = () => {
    return (
      <View style={{flex: 1}}>
          <SignaturePad onError={this._signaturePadError}
                        onChange={this._signaturePadChange}
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
