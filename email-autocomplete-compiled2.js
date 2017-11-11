var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _desc,
    _value,
    _class2,
    _descriptor,
    _jsxFileName = 'src/EmailAutocompleteInput.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

var EmailAutocompleteInput = observer(_class = (_class2 = function (_React$Component) {
  _inherits(EmailAutocompleteInput, _React$Component);

  function EmailAutocompleteInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EmailAutocompleteInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmailAutocompleteInput.__proto__ || Object.getPrototypeOf(EmailAutocompleteInput)).call.apply(_ref, [this].concat(args))), _this), _this.domains = _this.props.domains || ['yahoo.com', 'hotmail.com', 'gmail.com', 'me.com', 'aol.com', 'mac.com', 'live.com', 'googlemail.com', 'msn.com', 'facebook.com', 'verizon.net', 'outlook.com', 'icloud.com'], _this.prevValue = '', _initDefineProp(_this, 'email', _descriptor, _this), _this.handleChange = function (_ref2) {
      var value = _ref2.target.value;

      var suggestion = _this.suggest(value);
      _this.email = value + suggestion;
      if (suggestion) _this.highlight(suggestion);
      _this.props.onChange(_this.email);
      _this.prevValue = value;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EmailAutocompleteInput, [{
    key: 'suggest',
    value: function suggest(email) {
      var _email$split = email.split('@'),
          _email$split2 = _slicedToArray(_email$split, 2),
          emailName = _email$split2[0],
          partialDomain = _email$split2[1];

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

      return React.createElement('input', _extends({}, props, {
        className: className + ' email-autocomplete-input',
        value: this.email,
        onChange: this.handleChange,
        ref: function ref(r) {
          return _this3._input = r;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    }
  }]);

  return EmailAutocompleteInput;
}(React.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'email', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return this.props.value || '';
  }
})), _class2)) || _class;

export { EmailAutocompleteInput as default };
module.exports = exports['default'];
