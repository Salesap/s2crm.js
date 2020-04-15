/**
 * Simple JS library for S2CRM
 * @see {@link https://github.com/salesap/s2crm.js}
 * @license MIT
 * @version 0.1
 * @author S2CRM <info@salesap.ru> 
 */
 
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var S2CRM = /*#__PURE__*/function () {
  function S2CRM(hash) {
    _classCallCheck(this, S2CRM);

    this.hash = hash;
  }

  _createClass(S2CRM, [{
    key: "notification",
    value: function notification(text) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
      window.parent.postMessage({
        action: 'notification',
        hash: this.hash,
        data: {
          message: text,
          type: type
        }
      }, '*');
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      window.parent.postMessage({
        action: 'close_modal',
        hash: this.hash,
        data: {}
      }, '*');
    }
  }]);

  return S2CRM;
}();