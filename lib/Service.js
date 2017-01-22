"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Vue = _interopRequire(require("vue"));

var VueResource = _interopRequire(require("vue-resource"));

Vue.use(VueResource);

var Service = (function () {
    function Service(apiUrl) {
        _classCallCheck(this, Service);

        this.apiUrl = apiUrl;
    }

    _createClass(Service, {
        get: {
            value: function get(route) {
                return Vue.http.get(this.apiUrl + route);
            }
        },
        post: {
            value: function post(route, body) {
                return Vue.http.post(this.apiUrl + route, body);
            }
        },
        put: {
            value: function put(route, body) {
                return Vue.http.put(this.apiUrl + route, body);
            }
        },
        "delete": {
            value: function _delete(route) {
                return Vue.http["delete"](this.apiUrl + route);
            }
        }
    });

    return Service;
})();

module.exports = Service;