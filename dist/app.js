"use strict";

var _promises = _interopRequireDefault(require("fs/promises"));

var _sync = _interopRequireDefault(require("csv-parse/lib/sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_promises["default"].readFile('').then(function (x) {
  var records = (0, _sync["default"])(x);
  records.map(function (record) {
    return console.log(record);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOlsiZnMiLCJyZWFkRmlsZSIsInRoZW4iLCJ4IiwicmVjb3JkcyIsIm1hcCIsInJlY29yZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBRUE7O0FBQ0E7Ozs7QUFFQUEscUJBQUdDLFFBQUgsQ0FBWSxFQUFaLEVBQWdCQyxJQUFoQixDQUFxQixVQUFBQyxDQUFDLEVBQUk7QUFDekIsTUFBTUMsT0FBTyxHQUFHLHNCQUFNRCxDQUFOLENBQWhCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFVBQUNDLE1BQUQ7QUFBQSxXQUFxQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosQ0FBckI7QUFBQSxHQUFiO0FBQ0EsQ0FIRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcCwgc2VhcmNoLCBkZXZlbG9wZXIgfSBmcm9tICdnb29nbGUtcGxheS1zY3JhcGVyJztcclxuaW1wb3J0IG9zIGZyb20gJ29zJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2Nzdi1wYXJzZS9saWIvc3luYyc7XHJcblxyXG5mcy5yZWFkRmlsZSgnJykudGhlbih4ID0+IHtcclxuXHRjb25zdCByZWNvcmRzID0gcGFyc2UoeCk7XHJcblx0cmVjb3Jkcy5tYXAoIChyZWNvcmQ6IHVua25vd24pID0+IGNvbnNvbGUubG9nKHJlY29yZCkgKTtcclxufSk7Il19