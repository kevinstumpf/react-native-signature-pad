'use strict';

import React, { Component, PropTypes } from 'react';
import {
  View,
  WebView,
  StyleSheet,
} from 'react-native';


import htmlContent from './injectedHtml';
import injectedSignaturePad from './injectedJavaScript/signaturePad';
import injectedApplication from './injectedJavaScript/application';
import injectedErrorHandler from './injectedJavaScript/errorHandler';
import injectedExecuteNativeFunction from './injectedJavaScript/executeNativeFunction';

class SignaturePad extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    onError: PropTypes.func,
    style: View.propTypes.style,
    penColor: PropTypes.string,
    dataURL: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {
    },
    onError: () => {

    },
    style: {}
  };

  constructor(props) {
    super(props);
    this.state = {base64DataUrl: props.dataURL || null};
    const { backgroundColor } = StyleSheet.flatten(props.style);
    var injectedJavaScript = injectedExecuteNativeFunction
      + injectedErrorHandler
      + injectedSignaturePad
      + injectedApplication(props.penColor, backgroundColor, props.dataURL);
    var html = htmlContent(injectedJavaScript);
    this.source = {html}; //We don't use WebView's injectedJavaScript because on Android, the WebView re-injects the JavaScript upon every url change. Given that we use url changes to communicate signature changes to the React Native app, the JS is re-injected every time a stroke is drawn.
  }

  _attemptToExecuteNativeFunctionFromWebViewMessage = (message) => {
    if(message.executeFunction && message.arguments) {
      var referencedFunction = this['_bridged_' + message.executeFunction];
      if(typeof(referencedFunction) === 'function') {
        referencedFunction.apply(this, [message.arguments]);
        return true;
      }
    }

    return false;
  };

  _onMessage = (e) => {
    const message = JSON.parse(e.nativeEvent.data);
    this._attemptToExecuteNativeFunctionFromWebViewMessage(message)
  }

  _bridged_jsError = (args) => {
    this.props.onError({details: args});
  };

  _bridged_finishedStroke = ({base64DataUrl}) => {
    this.props.onChange({base64DataUrl});
    this.setState({base64DataUrl});
  };

  _renderError = (args) => {
    this.props.onError({details: args});
  };

  _renderLoading = (args) => {

  };

  render = () => {
    return (
        <WebView automaticallyAdjustContentInsets={false}
                 onNavigationStateChange={this._onNavigationChange}
                 renderError={this._renderError}
                 renderLoading={this._renderLoading}
                 onMessage={this._onMessage}
                 source={this.source}
                 javaScriptEnabled={true}
                 style={this.props.style}/>
    )
  };
}

module.exports = SignaturePad;
