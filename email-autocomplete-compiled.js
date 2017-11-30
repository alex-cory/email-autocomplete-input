var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _desc,
    _value,
    _class2,
    _descriptor,
    _descriptor2,
    _jsxFileName = 'src/EmailAutocompleteInput.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { observer } from 'mobx-react';
import { observable, toJS } from 'mobx';

var EmailAutocompleteInput = observer(_class = (_class2 = function (_Component) {
  _inherits(EmailAutocompleteInput, _Component);

  function EmailAutocompleteInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EmailAutocompleteInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmailAutocompleteInput.__proto__ || Object.getPrototypeOf(EmailAutocompleteInput)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, 'email', _descriptor, _this), _initDefineProp(_this, 'isValid', _descriptor2, _this), _this.domains = [].concat(_toConsumableArray(_this.props.domains || []), ['yahoo.com', 'hotmail.com', 'gmail.com', 'me.com', 'aol.com', 'mac.com', 'live.com', 'googlemail.com', 'msn.com', 'facebook.com', 'verizon.net', 'outlook.com', 'icloud.com', 'table.co']), _this.prevValue = '', _this.prevEmail = '', _this.handleChange = function (_ref2) {
      var value = _ref2.target.value;

      var suggestion = _this.suggest(value);
      _this.email = value + suggestion;
      if (suggestion) _this.highlight(suggestion);
      _this.props.onChange(_this.email);
      if (_this.props.validate) _this.validate();
      _this.prevValue = value;
      _this.prevEmail = value + suggestion;
    }, _this.validate = function () {
      var inputIsFocused = _this._input === document.activeElement;
      var isValidEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line
      if (!toJS(_this.email)) {
        _this.isValid = null;
      } else if (isValidEmail.test(_this.email)) {
        _this.isValid = 'yes';
      } else if (inputIsFocused && _this.prevEmail.length !== _this.email.length) {
        _this.isValid = 'maybe';
      } else {
        _this.isValid = 'no';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // yes, no, maybe, null


  _createClass(EmailAutocompleteInput, [{
    key: 'suggest',
    value: function suggest(email) {
      var _email$split = email.split('@'),
          _email$split2 = _slicedToArray(_email$split, 2),
          emailName = _email$split2[0],
          partialDomain = _email$split2[1]; // eslint-disable-line


      if (!partialDomain || email.length <= this.prevValue.length) return '';
      var domain = this.domains.find(function (d) {
        return d.indexOf(partialDomain) === 0;
      }) || '';
      return domain.replace(partialDomain, '');
    }
  }, {
    key: 'highlight',
    value: function highlight(suggestion) {
      var _this2 = this;

      setTimeout(function () {
        var startPos = _this2.email.lastIndexOf(suggestion);
        var endPos = startPos + suggestion.length;
        _this2._input.setSelectionRange(startPos, endPos);
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['className']);

      return React.createElement(Input, _extends({}, props, {
        isValid: this.isValid,
        className: className + ' email-autocomplete-input',
        value: this.email,
        onFocus: this.validate,
        onBlur: this.validate,
        onChange: this.handleChange,
        innerRef: function innerRef(r) {
          return _this3._input = r;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }));
    }
  }]);

  return EmailAutocompleteInput;
}(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'email', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return this.props.value || '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'isValid', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class2)) || _class;

export { EmailAutocompleteInput as default };


var borderColors = {
  yes: '#28a745',
  maybe: '#cfdc00',
  no: '#dc3545'
};

var outlineColors = { // source: http://bit.ly/2j2sbyx
  yes: 'rgba(40, 167, 69, .25)',
  maybe: 'rgba(207, 220, 0, .25)',
  no: 'rgba(220, 53, 69, .25)'
};

var Input = styled.input.withConfig({
  displayName: 'EmailAutocompleteInput__Input'
})(['', ''], function (_ref3) {
  var validate = _ref3.validate,
      isValid = _ref3.isValid;
  return validate && css(['outline:none;', ''], isValid && css(['&:focus{box-shadow:0 0 0 0.2rem ', ';}border:1px solid ', ' !important;transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s;'], outlineColors[isValid], borderColors[isValid]));
});
