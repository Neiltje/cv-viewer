function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /**
    * @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
    * (c) 2010-2020 Google LLC. https://angular.io/
    * License: MIT
    */


    (function (factory) {
      true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function () {
      'use strict';
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var Zone$1 = function (global) {
        var performance = global['performance'];

        function mark(name) {
          performance && performance['mark'] && performance['mark'](name);
        }

        function performanceMeasure(name, label) {
          performance && performance['measure'] && performance['measure'](name, label);
        }

        mark('Zone'); // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.

        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

        function __symbol__(name) {
          return symbolPrefix + name;
        }

        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

        if (global['Zone']) {
          // if global['Zone'] already exists (maybe zone.js was already loaded or
          // some other lib also registered a global object named Zone), we may need
          // to throw an error, but sometimes user may not want this error.
          // For example,
          // we have two web pages, page1 includes zone.js, page2 doesn't.
          // and the 1st time user load page1 and page2, everything work fine,
          // but when user load page2 again, error occurs because global['Zone'] already exists.
          // so we add a flag to let user choose whether to throw this error or not.
          // By default, if existing Zone is from zone.js, we will not throw the error.
          if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
          } else {
            return global['Zone'];
          }
        }

        var Zone = /*#__PURE__*/function () {
          function Zone(parent, zoneSpec) {
            _classCallCheck(this, Zone);

            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
          }

          _createClass(Zone, [{
            key: "get",
            value: function get(key) {
              var zone = this.getZoneWith(key);
              if (zone) return zone._properties[key];
            }
          }, {
            key: "getZoneWith",
            value: function getZoneWith(key) {
              var current = this;

              while (current) {
                if (current._properties.hasOwnProperty(key)) {
                  return current;
                }

                current = current._parent;
              }

              return null;
            }
          }, {
            key: "fork",
            value: function fork(zoneSpec) {
              if (!zoneSpec) throw new Error('ZoneSpec required!');
              return this._zoneDelegate.fork(this, zoneSpec);
            }
          }, {
            key: "wrap",
            value: function wrap(callback, source) {
              if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
              }

              var _callback = this._zoneDelegate.intercept(this, callback, source);

              var zone = this;
              return function () {
                return zone.runGuarded(_callback, this, arguments, source);
              };
            }
          }, {
            key: "run",
            value: function run(callback, applyThis, applyArgs, source) {
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runGuarded",
            value: function runGuarded(callback) {
              var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
              var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
              var source = arguments.length > 3 ? arguments[3] : undefined;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                try {
                  return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                _currentZoneFrame = _currentZoneFrame.parent;
              }
            }
          }, {
            key: "runTask",
            value: function runTask(task, applyThis, applyArgs) {
              if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
              } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
              // will run in notScheduled(canceled) state, we should not try to
              // run such kind of task but just return


              if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
              }

              var reEntryGuard = task.state != running;
              reEntryGuard && task._transitionTo(running, scheduled);
              task.runCount++;
              var previousTask = _currentTask;
              _currentTask = task;
              _currentZoneFrame = {
                parent: _currentZoneFrame,
                zone: this
              };

              try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                  task.cancelFn = undefined;
                }

                try {
                  return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                } catch (error) {
                  if (this._zoneDelegate.handleError(this, error)) {
                    throw error;
                  }
                }
              } finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                  if (task.type == eventTask || task.data && task.data.isPeriodic) {
                    reEntryGuard && task._transitionTo(scheduled, running);
                  } else {
                    task.runCount = 0;

                    this._updateTaskCount(task, -1);

                    reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                  }
                }

                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
              }
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(task) {
              if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;

                while (newZone) {
                  if (newZone === task.zone) {
                    throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                  }

                  newZone = newZone.parent;
                }
              }

              task._transitionTo(scheduling, notScheduled);

              var zoneDelegates = [];
              task._zoneDelegates = zoneDelegates;
              task._zone = this;

              try {
                task = this._zoneDelegate.scheduleTask(this, task);
              } catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
              }

              if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
              }

              return task;
            }
          }, {
            key: "scheduleMicroTask",
            value: function scheduleMicroTask(source, callback, data, customSchedule) {
              return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            }
          }, {
            key: "scheduleMacroTask",
            value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "scheduleEventTask",
            value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
              return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(task) {
              if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

              task._transitionTo(canceling, scheduled, running);

              try {
                this._zoneDelegate.cancelTask(this, task);
              } catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);

                this._zoneDelegate.handleError(this, err);

                throw err;
              }

              this._updateTaskCount(task, -1);

              task._transitionTo(notScheduled, canceling);

              task.runCount = 0;
              return task;
            }
          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(task, count) {
              var zoneDelegates = task._zoneDelegates;

              if (count == -1) {
                task._zoneDelegates = null;
              }

              for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
              }
            }
          }, {
            key: "parent",
            get: function get() {
              return this._parent;
            }
          }, {
            key: "name",
            get: function get() {
              return this._name;
            }
          }], [{
            key: "assertZonePatched",
            value: function assertZonePatched() {
              if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
              }
            }
          }, {
            key: "__load_patch",
            // tslint:disable-next-line:require-internal-with-underscore
            value: function __load_patch(name, fn) {
              if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                  throw Error('Already loaded patch: ' + name);
                }
              } else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
              }
            }
          }, {
            key: "root",
            get: function get() {
              var zone = Zone.current;

              while (zone.parent) {
                zone = zone.parent;
              }

              return zone;
            }
          }, {
            key: "current",
            get: function get() {
              return _currentZoneFrame.zone;
            }
          }, {
            key: "currentTask",
            get: function get() {
              return _currentTask;
            }
          }]);

          return Zone;
        }(); // tslint:disable-next-line:require-internal-with-underscore


        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
          name: '',
          onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
          },
          onScheduleTask: function onScheduleTask(delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
          },
          onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
            return delegate.invokeTask(target, task, applyThis, applyArgs);
          },
          onCancelTask: function onCancelTask(delegate, _, target, task) {
            return delegate.cancelTask(target, task);
          }
        };

        var ZoneDelegate = /*#__PURE__*/function () {
          function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            _classCallCheck(this, ZoneDelegate);

            this._taskCounts = {
              'microTask': 0,
              'macroTask': 0,
              'eventTask': 0
            };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
            this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
            this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
            this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
            this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
            this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

            if (zoneSpecHasTask || parentHasTask) {
              // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
              // a case all task related interceptors must go through this ZD. We can't short circuit it.
              this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
              this._hasTaskDlgt = parentDelegate;
              this._hasTaskDlgtOwner = this;
              this._hasTaskCurrZone = zone;

              if (!zoneSpec.onScheduleTask) {
                this._scheduleTaskZS = DELEGATE_ZS;
                this._scheduleTaskDlgt = parentDelegate;
                this._scheduleTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onInvokeTask) {
                this._invokeTaskZS = DELEGATE_ZS;
                this._invokeTaskDlgt = parentDelegate;
                this._invokeTaskCurrZone = this.zone;
              }

              if (!zoneSpec.onCancelTask) {
                this._cancelTaskZS = DELEGATE_ZS;
                this._cancelTaskDlgt = parentDelegate;
                this._cancelTaskCurrZone = this.zone;
              }
            }
          }

          _createClass(ZoneDelegate, [{
            key: "fork",
            value: function fork(targetZone, zoneSpec) {
              return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
            }
          }, {
            key: "intercept",
            value: function intercept(targetZone, callback, source) {
              return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
            }
          }, {
            key: "invoke",
            value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
              return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "handleError",
            value: function handleError(targetZone, error) {
              return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
            }
          }, {
            key: "scheduleTask",
            value: function scheduleTask(targetZone, task) {
              var returnTask = task;

              if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                  returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                } // clang-format off


                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

                if (!returnTask) returnTask = task;
              } else {
                if (task.scheduleFn) {
                  task.scheduleFn(task);
                } else if (task.type == microTask) {
                  scheduleMicroTask(task);
                } else {
                  throw new Error('Task is missing scheduleFn.');
                }
              }

              return returnTask;
            }
          }, {
            key: "invokeTask",
            value: function invokeTask(targetZone, task, applyThis, applyArgs) {
              return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
            }
          }, {
            key: "cancelTask",
            value: function cancelTask(targetZone, task) {
              var value;

              if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
              } else {
                if (!task.cancelFn) {
                  throw Error('Task is not cancelable');
                }

                value = task.cancelFn(task);
              }

              return value;
            }
          }, {
            key: "hasTask",
            value: function hasTask(targetZone, isEmpty) {
              // hasTask should not throw error so other ZoneDelegate
              // can still trigger hasTask callback
              try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
              } catch (err) {
                this.handleError(targetZone, err);
              }
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_updateTaskCount",
            value: function _updateTaskCount(type, count) {
              var counts = this._taskCounts;
              var prev = counts[type];
              var next = counts[type] = prev + count;

              if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
              }

              if (prev == 0 || next == 0) {
                var isEmpty = {
                  microTask: counts['microTask'] > 0,
                  macroTask: counts['macroTask'] > 0,
                  eventTask: counts['eventTask'] > 0,
                  change: type
                };
                this.hasTask(this.zone, isEmpty);
              }
            }
          }]);

          return ZoneDelegate;
        }();

        var ZoneTask = /*#__PURE__*/function () {
          function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            _classCallCheck(this, ZoneTask);

            // tslint:disable-next-line:require-internal-with-underscore
            this._zone = null;
            this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

            this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;

            if (!callback) {
              throw new Error('callback is not defined');
            }

            this.callback = callback;
            var self = this; // TODO: @JiaLiPassion options should have interface

            if (type === eventTask && options && options.useG) {
              this.invoke = ZoneTask.invokeTask;
            } else {
              this.invoke = function () {
                return ZoneTask.invokeTask.call(global, self, this, arguments);
              };
            }
          }

          _createClass(ZoneTask, [{
            key: "cancelScheduleRequest",
            value: function cancelScheduleRequest() {
              this._transitionTo(notScheduled, scheduling);
            } // tslint:disable-next-line:require-internal-with-underscore

          }, {
            key: "_transitionTo",
            value: function _transitionTo(toState, fromState1, fromState2) {
              if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;

                if (toState == notScheduled) {
                  this._zoneDelegates = null;
                }
              } else {
                throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
              }
            }
          }, {
            key: "toString",
            value: function toString() {
              if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
              } else {
                return Object.prototype.toString.call(this);
              }
            } // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)

          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
              };
            }
          }, {
            key: "zone",
            get: function get() {
              return this._zone;
            }
          }, {
            key: "state",
            get: function get() {
              return this._state;
            }
          }], [{
            key: "invokeTask",
            value: function invokeTask(task, target, args) {
              if (!task) {
                task = this;
              }

              _numberOfNestedTaskFrames++;

              try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
              } finally {
                if (_numberOfNestedTaskFrames == 1) {
                  drainMicroTaskQueue();
                }

                _numberOfNestedTaskFrames--;
              }
            }
          }]);

          return ZoneTask;
        }(); //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var symbolSetTimeout = __symbol__('setTimeout');

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;

        function scheduleMicroTask(task) {
          // if we are not running in any task, and there has not been anything scheduled
          // we must bootstrap the initial task creation by manually scheduling the drain
          if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
              if (global[symbolPromise]) {
                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
              }
            }

            if (nativeMicroTaskQueuePromise) {
              var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

              if (!nativeThen) {
                // native Promise is not patchable, we need to use `then` directly
                // issue 1078
                nativeThen = nativeMicroTaskQueuePromise['then'];
              }

              nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            } else {
              global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
          }

          task && _microTaskQueue.push(task);
        }

        function drainMicroTaskQueue() {
          if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;

            while (_microTaskQueue.length) {
              var queue = _microTaskQueue;
              _microTaskQueue = [];

              for (var i = 0; i < queue.length; i++) {
                var task = queue[i];

                try {
                  task.zone.runTask(task, null, null);
                } catch (error) {
                  _api.onUnhandledError(error);
                }
              }
            }

            _api.microtaskDrainDone();

            _isDrainingMicrotaskQueue = false;
          }
        } //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////


        var NO_ZONE = {
          name: 'NO ZONE'
        };
        var notScheduled = 'notScheduled',
            scheduling = 'scheduling',
            scheduled = 'scheduled',
            running = 'running',
            canceling = 'canceling',
            unknown = 'unknown';
        var microTask = 'microTask',
            macroTask = 'macroTask',
            eventTask = 'eventTask';
        var patches = {};
        var _api = {
          symbol: __symbol__,
          currentZoneFrame: function currentZoneFrame() {
            return _currentZoneFrame;
          },
          onUnhandledError: noop,
          microtaskDrainDone: noop,
          scheduleMicroTask: scheduleMicroTask,
          showUncaughtError: function showUncaughtError() {
            return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
          },
          patchEventTarget: function patchEventTarget() {
            return [];
          },
          patchOnProperties: noop,
          patchMethod: function patchMethod() {
            return noop;
          },
          bindArguments: function bindArguments() {
            return [];
          },
          patchThen: function patchThen() {
            return noop;
          },
          patchMacroTask: function patchMacroTask() {
            return noop;
          },
          setNativePromise: function setNativePromise(NativePromise) {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
              nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
          },
          patchEventPrototype: function patchEventPrototype() {
            return noop;
          },
          isIEOrEdge: function isIEOrEdge() {
            return false;
          },
          getGlobalObjects: function getGlobalObjects() {
            return undefined;
          },
          ObjectDefineProperty: function ObjectDefineProperty() {
            return noop;
          },
          ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
            return undefined;
          },
          ObjectCreate: function ObjectCreate() {
            return undefined;
          },
          ArraySlice: function ArraySlice() {
            return [];
          },
          patchClass: function patchClass() {
            return noop;
          },
          wrapWithCurrentZone: function wrapWithCurrentZone() {
            return noop;
          },
          filterProperties: function filterProperties() {
            return [];
          },
          attachOriginToPatched: function attachOriginToPatched() {
            return noop;
          },
          _redefineProperty: function _redefineProperty() {
            return noop;
          },
          patchCallbacks: function patchCallbacks() {
            return noop;
          }
        };
        var _currentZoneFrame = {
          parent: null,
          zone: new Zone(null, null)
        };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;

        function noop() {}

        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
      }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;

        function readableObjectToString(obj) {
          if (obj && obj.toString === Object.prototype.toString) {
            var className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
          }

          return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }

        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

        var symbolPromise = __symbol__('Promise');

        var symbolThen = __symbol__('then');

        var creationTrace = '__creationTrace__';

        api.onUnhandledError = function (e) {
          if (api.showUncaughtError()) {
            var rejection = e && e.rejection;

            if (rejection) {
              console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            } else {
              console.error(e);
            }
          }
        };

        api.microtaskDrainDone = function () {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        };

        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

        function handleUnhandledRejection(e) {
          api.onUnhandledError(e);

          try {
            var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

            if (typeof handler === 'function') {
              handler.call(this, e);
            }
          } catch (err) {}
        }

        function isThenable(value) {
          return value && value.then;
        }

        function forwardResolution(value) {
          return value;
        }

        function forwardRejection(rejection) {
          return ZoneAwarePromise.reject(rejection);
        }

        var symbolState = __symbol__('state');

        var symbolValue = __symbol__('value');

        var symbolFinally = __symbol__('finally');

        var symbolParentPromiseValue = __symbol__('parentPromiseValue');

        var symbolParentPromiseState = __symbol__('parentPromiseState');

        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;

        function makeResolver(promise, state) {
          return function (v) {
            try {
              resolvePromise(promise, state, v);
            } catch (err) {
              resolvePromise(promise, false, err);
            } // Do not return value or you will break the Promise spec.

          };
        }

        var once = function once() {
          var wasCalled = false;
          return function wrapper(wrappedFunction) {
            return function () {
              if (wasCalled) {
                return;
              }

              wasCalled = true;
              wrappedFunction.apply(null, arguments);
            };
          };
        };

        var TYPE_ERROR = 'Promise resolved with itself';

        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


        function resolvePromise(promise, state, value) {
          var onceWrapper = once();

          if (promise === value) {
            throw new TypeError(TYPE_ERROR);
          }

          if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;

            try {
              if (typeof value === 'object' || typeof value === 'function') {
                then = value && value.then;
              }
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
              return promise;
            } // if (value instanceof ZoneAwarePromise) {


            if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
              clearRejectedNoCatch(value);
              resolvePromise(promise, value[symbolState], value[symbolValue]);
            } else if (state !== REJECTED && typeof then === 'function') {
              try {
                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
              } catch (err) {
                onceWrapper(function () {
                  resolvePromise(promise, false, err);
                })();
              }
            } else {
              promise[symbolState] = state;
              var queue = promise[symbolValue];
              promise[symbolValue] = value;

              if (promise[symbolFinally] === symbolFinally) {
                // the promise is generated by Promise.prototype.finally
                if (state === RESOLVED) {
                  // the state is resolved, should ignore the value
                  // and use parent promise value
                  promise[symbolState] = promise[symbolParentPromiseState];
                  promise[symbolValue] = promise[symbolParentPromiseValue];
                }
              } // record task information in value when error occurs, so we can
              // do some additional work such as render longStackTrace


              if (state === REJECTED && value instanceof Error) {
                // check if longStackTraceZone is here
                var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

                if (trace) {
                  // only keep the long stack trace into error when in longStackTraceZone
                  ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: trace
                  });
                }
              }

              for (var i = 0; i < queue.length;) {
                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
              }

              if (queue.length == 0 && state == REJECTED) {
                promise[symbolState] = REJECTED_NO_CATCH;
                var uncaughtPromiseError = value;

                if (!isDisableWrappingUncaughtPromiseRejection) {
                  // If disable wrapping uncaught promise reject
                  // and the rejected value is an Error object,
                  // use the value instead of wrapping it.
                  try {
                    // Here we throws a new Error to print more readable error log
                    // and if the value is not an error, zone.js builds an `Error`
                    // Object here to attach the stack information.
                    throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
                  } catch (err) {
                    uncaughtPromiseError = err;
                  }
                }

                uncaughtPromiseError.rejection = value;
                uncaughtPromiseError.promise = promise;
                uncaughtPromiseError.zone = Zone.current;
                uncaughtPromiseError.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(uncaughtPromiseError);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          } // Resolving an already resolved promise is a noop.


          return promise;
        }

        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

        function clearRejectedNoCatch(promise) {
          if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
              var handler = Zone[REJECTION_HANDLED_HANDLER];

              if (handler && typeof handler === 'function') {
                handler.call(this, {
                  rejection: promise[symbolValue],
                  promise: promise
                });
              }
            } catch (err) {}

            promise[symbolState] = REJECTED;

            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
              if (promise === _uncaughtPromiseErrors[i].promise) {
                _uncaughtPromiseErrors.splice(i, 1);
              }
            }
          }
        }

        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
          clearRejectedNoCatch(promise);
          var promiseState = promise[symbolState];
          var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
          zone.scheduleMicroTask(source, function () {
            try {
              var parentPromiseValue = promise[symbolValue];
              var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

              if (isFinallyPromise) {
                // if the promise is generated from finally call, keep parent promise's state and value
                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                chainPromise[symbolParentPromiseState] = promiseState;
              } // should not pass value to finally callback


              var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
              resolvePromise(chainPromise, true, value);
            } catch (error) {
              // if error occurs, should always return this error
              resolvePromise(chainPromise, false, error);
            }
          }, chainPromise);
        }

        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

        var noop = function noop() {};

        var ZoneAwarePromise = /*#__PURE__*/function () {
          _createClass(ZoneAwarePromise, null, [{
            key: "toString",
            value: function toString() {
              return ZONE_AWARE_PROMISE_TO_STRING;
            }
          }, {
            key: "resolve",
            value: function resolve(value) {
              return resolvePromise(new this(null), RESOLVED, value);
            }
          }, {
            key: "reject",
            value: function reject(error) {
              return resolvePromise(new this(null), REJECTED, error);
            }
          }, {
            key: "race",
            value: function race(values) {
              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              });

              function onResolve(value) {
                resolve(value);
              }

              function onReject(error) {
                reject(error);
              }

              var _iterator = _createForOfIteratorHelper(values),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  if (!isThenable(value)) {
                    value = this.resolve(value);
                  }

                  value.then(onResolve, onReject);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return promise;
            }
          }, {
            key: "all",
            value: function all(values) {
              return ZoneAwarePromise.allWithCallback(values);
            }
          }, {
            key: "allSettled",
            value: function allSettled(values) {
              var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
              return P.allWithCallback(values, {
                thenCallback: function thenCallback(value) {
                  return {
                    status: 'fulfilled',
                    value: value
                  };
                },
                errorCallback: function errorCallback(err) {
                  return {
                    status: 'rejected',
                    reason: err
                  };
                }
              });
            }
          }, {
            key: "allWithCallback",
            value: function allWithCallback(values, callback) {
              var _this = this;

              var resolve;
              var reject;
              var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
              }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

              var unresolvedCount = 2;
              var valueIndex = 0;
              var resolvedValues = [];

              var _iterator2 = _createForOfIteratorHelper(values),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var value = _step2.value;

                  if (!isThenable(value)) {
                    value = _this.resolve(value);
                  }

                  var curValueIndex = valueIndex;

                  try {
                    value.then(function (value) {
                      resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                      unresolvedCount--;

                      if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                      }
                    }, function (err) {
                      if (!callback) {
                        reject(err);
                      } else {
                        resolvedValues[curValueIndex] = callback.errorCallback(err);
                        unresolvedCount--;

                        if (unresolvedCount === 0) {
                          resolve(resolvedValues);
                        }
                      }
                    });
                  } catch (thenErr) {
                    reject(thenErr);
                  }

                  unresolvedCount++;
                  valueIndex++;
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                } // Make the unresolvedCount zero-based again.

              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              unresolvedCount -= 2;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }

              return promise;
            }
          }]);

          function ZoneAwarePromise(executor) {
            _classCallCheck(this, ZoneAwarePromise);

            var promise = this;

            if (!(promise instanceof ZoneAwarePromise)) {
              throw new Error('Must be an instanceof Promise.');
            }

            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;

            try {
              executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            } catch (error) {
              resolvePromise(promise, false, error);
            }
          }

          _createClass(ZoneAwarePromise, [{
            key: "then",
            value: function then(onFulfilled, onRejected) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = this.constructor || ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
              }

              return chainPromise;
            }
          }, {
            key: "catch",
            value: function _catch(onRejected) {
              return this.then(null, onRejected);
            }
          }, {
            key: "finally",
            value: function _finally(onFinally) {
              var C = this.constructor[Symbol.species];

              if (!C || typeof C !== 'function') {
                C = ZoneAwarePromise;
              }

              var chainPromise = new C(noop);
              chainPromise[symbolFinally] = symbolFinally;
              var zone = Zone.current;

              if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
              } else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
              }

              return chainPromise;
            }
          }, {
            key: Symbol.toStringTag,
            get: function get() {
              return 'Promise';
            }
          }, {
            key: Symbol.species,
            get: function get() {
              return ZoneAwarePromise;
            }
          }]);

          return ZoneAwarePromise;
        }(); // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.


        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];

        var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

        var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

        if (!desc || desc.configurable) {
          desc && delete desc.writable;
          desc && delete desc.value;

          if (!desc) {
            desc = {
              configurable: true,
              enumerable: true
            };
          }

          desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
          };

          desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
              // if the NewNativePromise is ZoneAwarePromise
              // save to global
              global[ZONE_AWARE_PROMISE] = NewNativePromise;
            } else {
              // if the NewNativePromise is not ZoneAwarePromise
              // for example: after load zone.js, some library just
              // set es6-promise to global, if we set it to global
              // directly, assertZonePatched will fail and angular
              // will not loaded, so we just set the NewNativePromise
              // to global[symbolPromise], so the result is just like
              // we load ES6 Promise before zone.js
              global[symbolPromise] = NewNativePromise;

              if (!NewNativePromise.prototype[symbolThen]) {
                patchThen(NewNativePromise);
              }

              api.setNativePromise(NewNativePromise);
            }
          };

          ObjectDefineProperty(global, 'Promise', desc);
        }

        global['Promise'] = ZoneAwarePromise;

        var symbolThenPatched = __symbol__('thenPatched');

        function patchThen(Ctor) {
          var proto = Ctor.prototype;
          var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

          if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
          }

          var originalThen = proto.then; // Keep a reference to the original method.

          proto[symbolThen] = originalThen;

          Ctor.prototype.then = function (onResolve, onReject) {
            var _this2 = this;

            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
              originalThen.call(_this2, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
          };

          Ctor[symbolThenPatched] = true;
        }

        api.patchThen = patchThen;

        function zoneify(fn) {
          return function () {
            var resultPromise = fn.apply(this, arguments);

            if (resultPromise instanceof ZoneAwarePromise) {
              return resultPromise;
            }

            var ctor = resultPromise.constructor;

            if (!ctor[symbolThenPatched]) {
              patchThen(ctor);
            }

            return resultPromise;
          };
        }

        if (NativePromise) {
          patchThen(NativePromise);
          var fetch = global['fetch'];

          if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
          }
        } // This is not part of public API, but it is useful for tests, so we expose it.


        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Suppress closure compiler errors about unknown 'Zone' variable
       * @fileoverview
       * @suppress {undefinedVars,globalThis,missingRequire}
       */
      /// <reference types="node"/>
      // issue #989, to reduce bundle size, use short name

      /** Object.getOwnPropertyDescriptor */


      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      /** Object.defineProperty */

      var ObjectDefineProperty = Object.defineProperty;
      /** Object.getPrototypeOf */

      var ObjectGetPrototypeOf = Object.getPrototypeOf;
      /** Object.create */

      var ObjectCreate = Object.create;
      /** Array.prototype.slice */

      var ArraySlice = Array.prototype.slice;
      /** addEventListener string const */

      var ADD_EVENT_LISTENER_STR = 'addEventListener';
      /** removeEventListener string const */

      var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
      /** zoneSymbol addEventListener */

      var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
      /** zoneSymbol removeEventListener */


      var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
      /** true string const */


      var TRUE_STR = 'true';
      /** false string const */

      var FALSE_STR = 'false';
      /** Zone symbol prefix string const. */

      var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

      function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
      }

      function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
      }

      var zoneSymbol = Zone.__symbol__;
      var isWindowExists = typeof window !== 'undefined';
      var internalWindow = isWindowExists ? window : undefined;

      var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

      var REMOVE_ATTRIBUTE = 'removeAttribute';
      var NULL_ON_PROP_VALUE = [null];

      function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
          if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
          }
        }

        return args;
      }

      function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];

        var _loop3 = function _loop3(i) {
          var name = fnNames[i];
          var delegate = prototype[name];

          if (delegate) {
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

            if (!isPropertyWritable(prototypeDesc)) {
              return "continue";
            }

            prototype[name] = function (delegate) {
              var patched = function patched() {
                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
              };

              attachOriginToPatched(patched, delegate);
              return patched;
            }(delegate);
          }
        };

        for (var i = 0; i < fnNames.length; i++) {
          var _ret = _loop3(i);

          if (_ret === "continue") continue;
        }
      }

      function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
          return true;
        }

        if (propertyDesc.writable === false) {
          return false;
        }

        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
      }

      var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
      var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
      // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
      // this code.

      var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
      var zoneSymbolEventNames = {};

      var wrapFn = function wrapFn(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        }

        var eventNameSymbol = zoneSymbolEventNames[event.type];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }

        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;

        if (isBrowser && target === internalWindow && event.type === 'error') {
          // window.onerror have different signiture
          // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
          // and onerror callback will prevent default when callback return true
          var errorEvent = event;
          result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

          if (result === true) {
            event.preventDefault();
          }
        } else {
          result = listener && listener.apply(this, arguments);

          if (result != undefined && !result) {
            event.preventDefault();
          }
        }

        return result;
      };

      function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

        if (!desc && prototype) {
          // when patch window object, use prototype to check prop exist or not
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

          if (prototypeDesc) {
            desc = {
              enumerable: true,
              configurable: true
            };
          }
        } // if the descriptor not exists or is not configurable
        // just return


        if (!desc || !desc.configurable) {
          return;
        }

        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
          return;
        } // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified


        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];

        if (!eventNameSymbol) {
          eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }

        desc.set = function (newValue) {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return;
          }

          var previousValue = target[eventNameSymbol];

          if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
          } // issue #978, when onload handler was added before loading zone.js
          // we should remove it with originalDescSet


          if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
          }

          if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
          } else {
            target[eventNameSymbol] = null;
          }
        }; // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null


        desc.get = function () {
          // in some of windows's onproperty callback, this is undefined
          // so we need to check it
          var target = this;

          if (!target && obj === _global) {
            target = _global;
          }

          if (!target) {
            return null;
          }

          var listener = target[eventNameSymbol];

          if (listener) {
            return listener;
          } else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.call(this);

            if (value) {
              desc.set.call(this, value);

              if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                target.removeAttribute(prop);
              }

              return value;
            }
          }

          return null;
        };

        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
      }

      function patchOnProperties(obj, properties, prototype) {
        if (properties) {
          for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
          }
        } else {
          var onProperties = [];

          for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
              onProperties.push(prop);
            }
          }

          for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
          }
        }
      }

      var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

      function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass) return; // keep original class in global

        _global[zoneSymbol(className)] = OriginalClass;

        _global[className] = function () {
          var a = bindArguments(arguments, className);

          switch (a.length) {
            case 0:
              this[originalInstanceKey] = new OriginalClass();
              break;

            case 1:
              this[originalInstanceKey] = new OriginalClass(a[0]);
              break;

            case 2:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
              break;

            case 3:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
              break;

            case 4:
              this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
              break;

            default:
              throw new Error('Arg list too long.');
          }
        }; // attach original delegate to patched function


        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () {});
        var prop;

        for (prop in instance) {
          // https://bugs.webkit.org/show_bug.cgi?id=44721
          if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

          (function (prop) {
            if (typeof instance[prop] === 'function') {
              _global[className].prototype[prop] = function () {
                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
              };
            } else {
              ObjectDefineProperty(_global[className].prototype, prop, {
                set: function set(fn) {
                  if (typeof fn === 'function') {
                    this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                    // use it in Function.prototype.toString to return
                    // the native one.

                    attachOriginToPatched(this[originalInstanceKey][prop], fn);
                  } else {
                    this[originalInstanceKey][prop] = fn;
                  }
                },
                get: function get() {
                  return this[originalInstanceKey][prop];
                }
              });
            }
          })(prop);
        }

        for (prop in OriginalClass) {
          if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
          }
        }
      }

      function copySymbolProperties(src, dest) {
        if (typeof Object.getOwnPropertySymbols !== 'function') {
          return;
        }

        var symbols = Object.getOwnPropertySymbols(src);
        symbols.forEach(function (symbol) {
          var desc = Object.getOwnPropertyDescriptor(src, symbol);
          Object.defineProperty(dest, symbol, {
            get: function get() {
              return src[symbol];
            },
            set: function set(value) {
              if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                // if src[symbol] is not writable or not have a setter, just return
                return;
              }

              src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
          });
        });
      }

      var shouldCopySymbolProperties = false;

      function patchMethod(target, name, patchFn) {
        var proto = target;

        while (proto && !proto.hasOwnProperty(name)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && target[name]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = target;
        }

        var delegateName = zoneSymbol(name);
        var delegate = null;

        if (proto && !(delegate = proto[delegateName])) {
          delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
          // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

          var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

          if (isPropertyWritable(desc)) {
            var patchDelegate = patchFn(delegate, delegateName, name);

            proto[name] = function () {
              return patchDelegate(this, arguments);
            };

            attachOriginToPatched(proto[name], delegate);

            if (shouldCopySymbolProperties) {
              copySymbolProperties(delegate, proto[name]);
            }
          }
        }

        return delegate;
      } // TODO: @JiaLiPassion, support cancel task later if necessary


      function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;

        function scheduleTask(task) {
          var data = task.data;

          data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
          };

          setNative.apply(data.target, data.args);
          return task;
        }

        setNative = patchMethod(obj, funcName, function (delegate) {
          return function (self, args) {
            var meta = metaCreator(self, args);

            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
              return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            } else {
              // cause an error by calling it directly.
              return delegate.apply(self, args);
            }
          };
        });
      }

      function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
      }

      var isDetectedIEOrEdge = false;
      var ieOrEdge = false;

      function isIE() {
        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
          }
        } catch (error) {}

        return false;
      }

      function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
          return ieOrEdge;
        }

        isDetectedIEOrEdge = true;

        try {
          var ua = internalWindow.navigator.userAgent;

          if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
          }
        } catch (error) {}

        return ieOrEdge;
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // override Function.prototype.toString to make zone.js patched function
      // look like native function


      Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');

        var newFunctionToString = function toString() {
          if (typeof this === 'function') {
            var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

            if (originalDelegate) {
              if (typeof originalDelegate === 'function') {
                return originalFunctionToString.call(originalDelegate);
              } else {
                return Object.prototype.toString.call(originalDelegate);
              }
            }

            if (this === Promise) {
              var nativePromise = global[PROMISE_SYMBOL];

              if (nativePromise) {
                return originalFunctionToString.call(nativePromise);
              }
            }

            if (this === Error) {
              var nativeError = global[ERROR_SYMBOL];

              if (nativeError) {
                return originalFunctionToString.call(nativeError);
              }
            }
          }

          return originalFunctionToString.call(this);
        };

        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';

        Object.prototype.toString = function () {
          if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
          }

          return originalObjectToString.call(this);
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var passiveSupported = false;

      if (typeof window !== 'undefined') {
        try {
          var options = Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
            }
          });
          window.addEventListener('test', options, options);
          window.removeEventListener('test', options, options);
        } catch (err) {
          passiveSupported = false;
        }
      } // an identifier to tell ZoneTask do not create a new invoke closure


      var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
      };
      var zoneSymbolEventNames$1 = {};
      var globalSources = {};
      var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
      var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

      function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
      }

      function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

        var invokeTask = function invokeTask(task, target, event) {
          // for better performance, check isRemoved which is set
          // by removeEventListener
          if (task.isRemoved) {
            return;
          }

          var delegate = task.callback;

          if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) {
              return delegate.handleEvent(event);
            };

            task.originalDelegate = delegate;
          } // invoke static task.invoke


          task.invoke(task, target, [event]);
          var options = task.options;

          if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

            target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = false


        var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        }; // global shared zoneAwareCallback to handle all event callback with capture = true


        var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
          // https://github.com/angular/zone.js/issues/911, in IE, sometimes
          // event will be undefined, so we need to use window.event
          event = event || _global.event;

          if (!event) {
            return;
          } // event.target is needed for Samsung TV and SourceBuffer
          // || global is needed https://github.com/angular/zone.js/issues/190


          var target = this || event.target || _global;
          var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

          if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
              invokeTask(tasks[0], target, event);
            } else {
              // https://github.com/angular/zone.js/issues/836
              // copy the tasks array before invoke, to avoid
              // the callback will remove itself or other listener
              var copyTasks = tasks.slice();

              for (var i = 0; i < copyTasks.length; i++) {
                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                  break;
                }

                invokeTask(copyTasks[i], target, event);
              }
            }
          }
        };

        function patchEventTargetMethods(obj, patchOptions) {
          if (!obj) {
            return false;
          }

          var useGlobalCallback = true;

          if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
          }

          var validateHandler = patchOptions && patchOptions.vh;
          var checkDuplicate = true;

          if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
          }

          var returnTarget = false;

          if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
          }

          var proto = obj;

          while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
          }

          if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
          }

          if (!proto) {
            return false;
          }

          if (proto[zoneSymbolAddEventListener]) {
            return false;
          }

          var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
          // so we do not need to create a new object just for pass some data

          var taskData = {};
          var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
          var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
          var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
          var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
          var nativePrependEventListener;

          if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
          }
          /**
           * This util function will build an option object with passive option
           * to handle all possible input from the user.
           */


          function buildEventListenerOptions(options, passive) {
            if (!passiveSupported && typeof options === 'object' && options) {
              // doesn't support passive but user want to pass an object as options.
              // this will not work on some old browser, so we just pass a boolean
              // as useCapture parameter
              return !!options.capture;
            }

            if (!passiveSupported || !passive) {
              return options;
            }

            if (typeof options === 'boolean') {
              return {
                capture: options,
                passive: true
              };
            }

            if (!options) {
              return {
                passive: true
              };
            }

            if (typeof options === 'object' && options.passive !== false) {
              return Object.assign(Object.assign({}, options), {
                passive: true
              });
            }

            return options;
          }

          var customScheduleGlobal = function customScheduleGlobal(task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
              return;
            }

            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
          };

          var customCancelGlobal = function customCancelGlobal(task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
              var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
              var symbolEventName;

              if (symbolEventNames) {
                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
              }

              var existingTasks = symbolEventName && task.target[symbolEventName];

              if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                  var existingTask = existingTasks[i];

                  if (existingTask === task) {
                    existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                    task.isRemoved = true;

                    if (existingTasks.length === 0) {
                      // all tasks for the eventName + capture have gone,
                      // remove globalZoneAwareCallback and remove the task cache from target
                      task.allRemoved = true;
                      task.target[symbolEventName] = null;
                    }

                    break;
                  }
                }
              }
            } // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return


            if (!task.allRemoved) {
              return;
            }

            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
          };

          var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customSchedulePrepend = function customSchedulePrepend(task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
          };

          var customCancelNonGlobal = function customCancelNonGlobal(task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
          };

          var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
          var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

          var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
            var typeOfDelegate = typeof delegate;
            return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
          };

          var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
          var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

          var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

          var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
            var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
            var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
            return function () {
              var target = this || _global;
              var eventName = arguments[0];

              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var delegate = arguments[1];

              if (!delegate) {
                return nativeListener.apply(this, arguments);
              }

              if (isNode && eventName === 'uncaughtException') {
                // don't patch uncaughtException of nodejs to prevent endless loop
                return nativeListener.apply(this, arguments);
              } // don't create the bind delegate function for handleEvent
              // case here to improve addEventListener performance
              // we will create the bind delegate when invoke


              var isHandleEvent = false;

              if (typeof delegate !== 'function') {
                if (!delegate.handleEvent) {
                  return nativeListener.apply(this, arguments);
                }

                isHandleEvent = true;
              }

              if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                return;
              }

              var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
              var options = buildEventListenerOptions(arguments[2], passive);

              if (blackListedEvents) {
                // check black list
                for (var i = 0; i < blackListedEvents.length; i++) {
                  if (eventName === blackListedEvents[i]) {
                    if (passive) {
                      return nativeListener.call(target, eventName, delegate, options);
                    } else {
                      return nativeListener.apply(this, arguments);
                    }
                  }
                }
              }

              var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
              var once = options && typeof options === 'object' ? options.once : false;
              var zone = Zone.current;
              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (!symbolEventNames) {
                prepareEventNames(eventName, eventNameToString);
                symbolEventNames = zoneSymbolEventNames$1[eventName];
              }

              var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
              var existingTasks = target[symbolEventName];
              var isExisting = false;

              if (existingTasks) {
                // already have task registered
                isExisting = true;

                if (checkDuplicate) {
                  for (var _i = 0; _i < existingTasks.length; _i++) {
                    if (compare(existingTasks[_i], delegate)) {
                      // same callback, same capture, same event name, just return
                      return;
                    }
                  }
                }
              } else {
                existingTasks = target[symbolEventName] = [];
              }

              var source;
              var constructorName = target.constructor['name'];
              var targetSource = globalSources[constructorName];

              if (targetSource) {
                source = targetSource[eventName];
              }

              if (!source) {
                source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
              } // do not create a new object as task.data to pass those things
              // just use the global shared one


              taskData.options = options;

              if (once) {
                // if addEventListener with once options, we don't pass it to
                // native addEventListener, instead we keep the once setting
                // and handle ourselves.
                taskData.options.once = false;
              }

              taskData.target = target;
              taskData.capture = capture;
              taskData.eventName = eventName;
              taskData.isExisting = isExisting;
              var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

              if (data) {
                data.taskData = taskData;
              }

              var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
              // issue, https://github.com/angular/angular/issues/20442

              taskData.target = null; // need to clear up taskData because it is a global object

              if (data) {
                data.taskData = null;
              } // have to save those information to task in case
              // application may call task.zone.cancelTask() directly


              if (once) {
                options.once = true;
              }

              if (!(!passiveSupported && typeof task.options === 'boolean')) {
                // if not support passive, and we pass an option object
                // to addEventListener, we should save the options to task
                task.options = options;
              }

              task.target = target;
              task.capture = capture;
              task.eventName = eventName;

              if (isHandleEvent) {
                // save original delegate for compare to check duplicate
                task.originalDelegate = delegate;
              }

              if (!prepend) {
                existingTasks.push(task);
              } else {
                existingTasks.unshift(task);
              }

              if (returnTarget) {
                return target;
              }
            };
          };

          proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

          if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
          }

          proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var options = arguments[2];
            var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
            var delegate = arguments[1];

            if (!delegate) {
              return nativeRemoveEventListener.apply(this, arguments);
            }

            if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
              return;
            }

            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (compare(existingTask, delegate)) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  existingTask.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    existingTask.allRemoved = true;
                    target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                    // such as target.onclick = function() {}, so we need to clear this internal
                    // property too if all delegates all removed

                    if (typeof eventName === 'string') {
                      var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                      target[onPropertySymbol] = null;
                    }
                  }

                  existingTask.zone.cancelTask(existingTask);

                  if (returnTarget) {
                    return target;
                  }

                  return;
                }
              }
            } // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.


            return nativeRemoveEventListener.apply(this, arguments);
          };

          proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (patchOptions && patchOptions.transferEventName) {
              eventName = patchOptions.transferEventName(eventName);
            }

            var listeners = [];
            var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

            for (var i = 0; i < tasks.length; i++) {
              var task = tasks[i];
              var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              listeners.push(delegate);
            }

            return listeners;
          };

          proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];

            if (!eventName) {
              var keys = Object.keys(target);

              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
                // used for monitoring the removeListener call,
                // so just keep removeListener eventListener until
                // all other eventListeners are removed

                if (evtName && evtName !== 'removeListener') {
                  this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                }
              } // remove removeListener listener finally


              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            } else {
              if (patchOptions && patchOptions.transferEventName) {
                eventName = patchOptions.transferEventName(eventName);
              }

              var symbolEventNames = zoneSymbolEventNames$1[eventName];

              if (symbolEventNames) {
                var symbolEventName = symbolEventNames[FALSE_STR];
                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                var tasks = target[symbolEventName];
                var captureTasks = target[symbolCaptureEventName];

                if (tasks) {
                  var removeTasks = tasks.slice();

                  for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                    var task = removeTasks[_i2];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                  }
                }

                if (captureTasks) {
                  var _removeTasks = captureTasks.slice();

                  for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                    var _task = _removeTasks[_i3];

                    var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                    this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                  }
                }
              }
            }

            if (returnTarget) {
              return this;
            }
          }; // for native toString patch


          attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
          attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

          if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
          }

          if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
          }

          return true;
        }

        var results = [];

        for (var i = 0; i < apis.length; i++) {
          results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }

        return results;
      }

      function findEventTasks(target, eventName) {
        if (!eventName) {
          var foundTasks = [];

          for (var prop in target) {
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1];

            if (evtName && (!eventName || evtName === eventName)) {
              var tasks = target[prop];

              if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                  foundTasks.push(tasks[i]);
                }
              }
            }
          }

          return foundTasks;
        }

        var symbolEventName = zoneSymbolEventNames$1[eventName];

        if (!symbolEventName) {
          prepareEventNames(eventName);
          symbolEventName = zoneSymbolEventNames$1[eventName];
        }

        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];

        if (!captureFalseTasks) {
          return captureTrueTasks ? captureTrueTasks.slice() : [];
        } else {
          return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
        }
      }

      function patchEventPrototype(global, api) {
        var Event = global['Event'];

        if (Event && Event.prototype) {
          api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
            return function (self, args) {
              self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
              // in case in some hybrid application, some part of
              // application will be controlled by zone, some are not

              delegate && delegate.apply(self, args);
            };
          });
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);

        if (target[symbol]) {
          return;
        }

        var nativeDelegate = target[symbol] = target[method];

        target[method] = function (name, opts, options) {
          if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
              var source = "".concat(targetName, ".").concat(method, "::") + callback;
              var prototype = opts.prototype;

              if (prototype.hasOwnProperty(callback)) {
                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

                if (descriptor && descriptor.value) {
                  descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                  api._redefineProperty(opts.prototype, callback, descriptor);
                } else if (prototype[callback]) {
                  prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            });
          }

          return nativeDelegate.call(target, name, opts, options);
        };

        api.attachOriginToPatched(target[method], nativeDelegate);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
      var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
      var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
      var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
      var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
      var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
      var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
      var formEventNames = ['autocomplete', 'autocompleteerror'];
      var detailEventNames = ['toggle'];
      var frameEventNames = ['load'];
      var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
      var marqueeEventNames = ['bounce', 'finish', 'start'];
      var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
      var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
      var websocketEventNames = ['close', 'error', 'open', 'message'];
      var workerEventNames = ['error', 'message'];
      var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

      function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
          return onProperties;
        }

        var tip = ignoreProperties.filter(function (ip) {
          return ip.target === target;
        });

        if (!tip || tip.length === 0) {
          return onProperties;
        }

        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) {
          return targetIgnoreProperties.indexOf(op) === -1;
        });
      }

      function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
          return;
        }

        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
      }

      function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
          return;
        }

        if (Zone[api.symbol('patchEvents')]) {
          // events are already been patched by legacy patch.
          return;
        }

        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

        if (isBrowser) {
          var _internalWindow = window;
          var ignoreErrorProperties = isIE ? [{
            target: _internalWindow,
            ignoreProperties: ['error']
          }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
          // so we need to pass WindowPrototype to check onProp exist or not

          patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
          patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

          if (typeof _internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
          }

          patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
          patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
          patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
          patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
          patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
          var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

          if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
          }

          var Worker = _internalWindow['Worker'];

          if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
          }
        }

        var XMLHttpRequest = _global['XMLHttpRequest'];

        if (XMLHttpRequest) {
          // XMLHttpRequest is not available in ServiceWorker, so we need to check here
          patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget) {
          patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }

        if (typeof IDBIndex !== 'undefined') {
          patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
          patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }

        if (supportsWebSocket) {
          patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.

        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

        if (global[SYMBOL_UNPATCHED_EVENTS]) {
          global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }

        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
          Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
        }

        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;

        api.getGlobalObjects = function () {
          return {
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
          };
        };
      });
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var taskSymbol = zoneSymbol('zoneTask');

      function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};

        function scheduleTask(task) {
          var data = task.data;

          function timer() {
            try {
              task.invoke.apply(this, arguments);
            } finally {
              // issue-934, task will be cancelled
              // even it is a periodic task such as
              // setInterval
              if (!(task.data && task.data.isPeriodic)) {
                if (typeof data.handleId === 'number') {
                  // in non-nodejs env, we remove timerId
                  // from local cache
                  delete tasksByHandleId[data.handleId];
                } else if (data.handleId) {
                  // Node returns complex objects as handleIds
                  // we remove task reference from timer object
                  data.handleId[taskSymbol] = null;
                }
              }
            }
          }

          data.args[0] = timer;
          data.handleId = setNative.apply(window, data.args);
          return task;
        }

        function clearTask(task) {
          return clearNative(task.data.handleId);
        }

        setNative = patchMethod(window, setName, function (delegate) {
          return function (self, args) {
            if (typeof args[0] === 'function') {
              var _options = {
                isPeriodic: nameSuffix === 'Interval',
                delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
                args: args
              };
              var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

              if (!task) {
                return task;
              } // Node.js must additionally support the ref and unref functions.


              var handle = task.data.handleId;

              if (typeof handle === 'number') {
                // for non nodejs env, we save handleId: task
                // mapping in local cache for clearTimeout
                tasksByHandleId[handle] = task;
              } else if (handle) {
                // for nodejs env, we save task
                // reference in timerId Object for clearTimeout
                handle[taskSymbol] = task;
              } // check whether handle is null, because some polyfill or browser
              // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


              if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
                task.ref = handle.ref.bind(handle);
                task.unref = handle.unref.bind(handle);
              }

              if (typeof handle === 'number' || handle) {
                return handle;
              }

              return task;
            } else {
              // cause an error by calling it directly.
              return delegate.apply(window, args);
            }
          };
        });
        clearNative = patchMethod(window, cancelName, function (delegate) {
          return function (self, args) {
            var id = args[0];
            var task;

            if (typeof id === 'number') {
              // non nodejs env.
              task = tasksByHandleId[id];
            } else {
              // nodejs env.
              task = id && id[taskSymbol]; // other environments.

              if (!task) {
                task = id;
              }
            }

            if (task && typeof task.type === 'string') {
              if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                if (typeof id === 'number') {
                  delete tasksByHandleId[id];
                } else if (id) {
                  id[taskSymbol] = null;
                } // Do not cancel already canceled functions


                task.zone.cancelTask(task);
              }
            } else {
              // cause an error by calling it directly.
              delegate.apply(window, args);
            }
          };
        });
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function patchCustomElements(_global, api) {
        var _api$getGlobalObjects = api.getGlobalObjects(),
            isBrowser = _api$getGlobalObjects.isBrowser,
            isMix = _api$getGlobalObjects.isMix;

        if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
          return;
        }

        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
          // EventTarget is already patched.
          return;
        }

        var _api$getGlobalObjects2 = api.getGlobalObjects(),
            eventNames = _api$getGlobalObjects2.eventNames,
            zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
            TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
            FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
            ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


        for (var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          var falseEventName = eventName + FALSE_STR;
          var trueEventName = eventName + TRUE_STR;
          var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
          var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
          zoneSymbolEventNames[eventName] = {};
          zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
          zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }

        var EVENT_TARGET = _global['EventTarget'];

        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
          return;
        }

        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
      }

      function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
      }
      /**
       * @license
       * Copyright Google Inc. All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];

        if (legacyPatch) {
          legacyPatch();
        }
      });

      Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
      });

      Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
      });

      Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];

        for (var i = 0; i < blockingMethods.length; i++) {
          var name = blockingMethods[i];
          patchMethod(global, name, function (delegate, symbol, name) {
            return function (s, args) {
              return Zone.current.run(delegate, global, args, name);
            };
          });
        }
      });

      Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
          api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }

        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
        patchClass('IntersectionObserver');
        patchClass('FileReader');
      });

      Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
      });

      Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
      });

      Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

        function patchXHR(window) {
          var XMLHttpRequest = window['XMLHttpRequest'];

          if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
          }

          var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

          function findPendingTask(target) {
            return target[XHR_TASK];
          }

          var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

          if (!oriAddListener) {
            var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

            if (XMLHttpRequestEventTarget) {
              var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
              oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
          }

          var READY_STATE_CHANGE = 'readystatechange';
          var SCHEDULED = 'scheduled';

          function scheduleTask(task) {
            var data = task.data;
            var target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

            var listener = target[XHR_LISTENER];

            if (!oriAddListener) {
              oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
              oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }

            if (listener) {
              oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }

            var newListener = target[XHR_LISTENER] = function () {
              if (target.readyState === target.DONE) {
                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                // readyState=4 multiple times, so we need to check task state here
                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                  // check whether the xhr has registered onload listener
                  // if that is the case, the task should invoke after all
                  // onload listeners finish.
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  if (loadTasks && loadTasks.length > 0) {
                    var oriInvoke = task.invoke;

                    task.invoke = function () {
                      // need to load the tasks again, because in other
                      // load listener, they may remove themselves
                      var loadTasks = target[Zone.__symbol__('loadfalse')];

                      for (var i = 0; i < loadTasks.length; i++) {
                        if (loadTasks[i] === task) {
                          loadTasks.splice(i, 1);
                        }
                      }

                      if (!data.aborted && task.state === SCHEDULED) {
                        oriInvoke.call(task);
                      }
                    };

                    loadTasks.push(task);
                  } else {
                    task.invoke();
                  }
                } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                  // error occurs when xhr.send()
                  target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                }
              }
            };

            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            var storedTask = target[XHR_TASK];

            if (!storedTask) {
              target[XHR_TASK] = task;
            }

            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
          }

          function placeholderCallback() {}

          function clearTask(task) {
            var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.

            data.aborted = true;
            return abortNative.apply(data.target, data.args);
          }

          var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
            return function (self, args) {
              self[XHR_SYNC] = args[2] == false;
              self[XHR_URL] = args[1];
              return openNative.apply(self, args);
            };
          });
          var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
          var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
          var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
          var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
            return function (self, args) {
              if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
              }

              if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
              } else {
                var _options2 = {
                  target: self,
                  url: self[XHR_URL],
                  isPeriodic: false,
                  args: args,
                  aborted: false
                };
                var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                  // xhr request throw error when send
                  // we should invoke task instead of leaving a scheduled
                  // pending macroTask
                  task.invoke();
                }
              }
            };
          });
          var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
            return function (self, args) {
              var task = findPendingTask(self);

              if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || task.data && task.data.aborted) {
                  return;
                }

                task.zone.cancelTask(task);
              } else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
              } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
              // task
              // to cancel. Do nothing.

            };
          });
        }
      });

      Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
          patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
      });

      Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
          return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
              // windows has added unhandledrejection event listener
              // trigger the event listener
              var PromiseRejectionEvent = global['PromiseRejectionEvent'];

              if (PromiseRejectionEvent) {
                var evt = new PromiseRejectionEvent(evtName, {
                  promise: e.promise,
                  reason: e.rejection
                });
                eventTask.invoke(evt);
              }
            });
          };
        }

        if (global['PromiseRejectionEvent']) {
          Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
          Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
        }
      });
    });
    /***/

  },

  /***/
  "./src/app/api/api.module.ts":
  /*!***********************************!*\
    !*** ./src/app/api/api.module.ts ***!
    \***********************************/

  /*! exports provided: ApiModule */

  /***/
  function srcAppApiApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/api/configuration.ts");
    /* harmony import */


    var _api_cv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api/cv.service */
    "./src/app/api/api/cv.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiModule = /*#__PURE__*/function () {
      function ApiModule(parentModule, http) {
        _classCallCheck(this, ApiModule);

        if (parentModule) {
          throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }

        if (!http) {
          throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
        }
      }

      _createClass(ApiModule, null, [{
        key: "forRoot",
        value: function forRoot(configurationFactory) {
          return {
            ngModule: ApiModule,
            providers: [{
              provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
              useFactory: configurationFactory
            }]
          };
        }
      }]);

      return ApiModule;
    }();

    ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ApiModule
    });
    ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ApiModule_Factory(t) {
        return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], 8));
      },
      providers: [_api_cv_service__WEBPACK_IMPORTED_MODULE_2__["CvService"]],
      imports: [[]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          declarations: [],
          exports: [],
          providers: [_api_cv_service__WEBPACK_IMPORTED_MODULE_2__["CvService"]]
        }]
      }], function () {
        return [{
          type: ApiModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/api/api.ts":
  /*!********************************!*\
    !*** ./src/app/api/api/api.ts ***!
    \********************************/

  /*! exports provided: CvService, APIS */

  /***/
  function srcAppApiApiApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return APIS;
    });
    /* harmony import */


    var _cv_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./cv.service */
    "./src/app/api/api/cv.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CvService", function () {
      return _cv_service__WEBPACK_IMPORTED_MODULE_0__["CvService"];
    });

    var APIS = [_cv_service__WEBPACK_IMPORTED_MODULE_0__["CvService"]];
    /***/
  },

  /***/
  "./src/app/api/api/cv.service.ts":
  /*!***************************************!*\
    !*** ./src/app/api/api/cv.service.ts ***!
    \***************************************/

  /*! exports provided: CvService */

  /***/
  function srcAppApiApiCvServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvService", function () {
      return CvService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../encoder */
    "./src/app/api/encoder.ts");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../variables */
    "./src/app/api/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../configuration */
    "./src/app/api/configuration.ts");
    /**
     * CV Viewer
     * CV Viewer.
     *
     * OpenAPI spec version: 1.0.0
     * Contact: neilje123@gmail.com
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var CvService = /*#__PURE__*/function () {
      function CvService(httpClient, basePath, configuration) {
        _classCallCheck(this, CvService);

        this.httpClient = httpClient;
        this.basePath = 'https://localhost:9090';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(CvService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator3 = _createForOfIteratorHelper(consumes),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var consume = _step3.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return false;
        }
      }, {
        key: "getAllCVs",
        value: function getAllCVs() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/cv/getAll"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "getCvByName",
        value: function getCvByName(name) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling getCvByName.');
          }

          var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
            encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]()
          });

          if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', name);
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/cv/findByName/"), {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "login",
        value: function login(name) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling login.');
          }

          var headers = this.defaultHeaders; // authentication (basicAuth) required

          if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
          } // to determine the Accept header


          var httpHeaderAccepts = [];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.post("".concat(this.basePath, "/cv/login/").concat(encodeURIComponent(String(name))), null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "putCv",
        value: function putCv(cv) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (cv === null || cv === undefined) {
            throw new Error('Required parameter cv was null or undefined when calling putCv.');
          }

          var headers = this.defaultHeaders; // authentication (basicAuth) required

          if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
          } // to determine the Accept header


          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.put("".concat(this.basePath, "/cv"), cv, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return CvService;
    }();

    CvService.ɵfac = function CvService_Factory(t) {
      return new (t || CvService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"], 8));
    };

    CvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CvService,
      factory: CvService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/api/configuration.ts":
  /*!**************************************!*\
    !*** ./src/app/api/configuration.ts ***!
    \**************************************/

  /*! exports provided: Configuration */

  /***/
  function srcAppApiConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });

    var Configuration = /*#__PURE__*/function () {
      function Configuration() {
        var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Configuration);

        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
      }
      /**
       * Select the correct content-type to use for a request.
       * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
       * If no content type is found return the first found type if the contentTypes is not empty
       * @param contentTypes - the array of content types that are available for selection
       * @returns the selected content-type or <code>undefined</code> if no selection could be made.
       */


      _createClass(Configuration, [{
        key: "selectHeaderContentType",
        value: function selectHeaderContentType(contentTypes) {
          var _this3 = this;

          if (contentTypes.length == 0) {
            return undefined;
          }

          var type = contentTypes.find(function (x) {
            return _this3.isJsonMime(x);
          });

          if (type === undefined) {
            return contentTypes[0];
          }

          return type;
        }
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */

      }, {
        key: "selectHeaderAccept",
        value: function selectHeaderAccept(accepts) {
          var _this4 = this;

          if (accepts.length == 0) {
            return undefined;
          }

          var type = accepts.find(function (x) {
            return _this4.isJsonMime(x);
          });

          if (type === undefined) {
            return accepts[0];
          }

          return type;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */

      }, {
        key: "isJsonMime",
        value: function isJsonMime(mime) {
          var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
          return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
      }]);

      return Configuration;
    }();
    /***/

  },

  /***/
  "./src/app/api/encoder.ts":
  /*!********************************!*\
    !*** ./src/app/api/encoder.ts ***!
    \********************************/

  /*! exports provided: CustomHttpUrlEncodingCodec */

  /***/
  function srcAppApiEncoderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function () {
      return CustomHttpUrlEncodingCodec;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /**
    * CustomHttpUrlEncodingCodec
    * Fix plus sign (+) not encoding, so sent as blank space
    * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
    */


    var CustomHttpUrlEncodingCodec = /*#__PURE__*/function (_angular_common_http_) {
      _inherits(CustomHttpUrlEncodingCodec, _angular_common_http_);

      var _super = _createSuper(CustomHttpUrlEncodingCodec);

      function CustomHttpUrlEncodingCodec() {
        _classCallCheck(this, CustomHttpUrlEncodingCodec);

        return _super.apply(this, arguments);
      }

      _createClass(CustomHttpUrlEncodingCodec, [{
        key: "encodeKey",
        value: function encodeKey(k) {
          k = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeKey", this).call(this, k);
          return k.replace(/\+/gi, '%2B');
        }
      }, {
        key: "encodeValue",
        value: function encodeValue(v) {
          v = _get(_getPrototypeOf(CustomHttpUrlEncodingCodec.prototype), "encodeValue", this).call(this, v);
          return v.replace(/\+/gi, '%2B');
        }
      }]);

      return CustomHttpUrlEncodingCodec;
    }(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"]);
    /***/

  },

  /***/
  "./src/app/api/index.ts":
  /*!******************************!*\
    !*** ./src/app/api/index.ts ***!
    \******************************/

  /*! exports provided: CvService, APIS, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */

  /***/
  function srcAppApiIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./api/api */
    "./src/app/api/api/api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CvService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["CvService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"];
    });
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./variables */
    "./src/app/api/variables.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_FORMATS"];
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./configuration */
    "./src/app/api/configuration.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"];
    });
    /* harmony import */


    var _api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.module */
    "./src/app/api/api.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return _api_module__WEBPACK_IMPORTED_MODULE_3__["ApiModule"];
    });
    /***/

  },

  /***/
  "./src/app/api/variables.ts":
  /*!**********************************!*\
    !*** ./src/app/api/variables.ts ***!
    \**********************************/

  /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

  /***/
  function srcAppApiVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return COLLECTION_FORMATS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
    var COLLECTION_FORMATS = {
      'csv': ',',
      'tsv': '   ',
      'ssv': ' ',
      'pipes': '|'
    };
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.name = 'Angular';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["cv-viewer"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["p[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGFwcHNcXEN2Vmlld2VyXFxjbGllbnRcXHNyY1xcbWFpblxcY3Ytdmlld2VyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59IiwicCB7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'cv-viewer',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _cv_list_cv_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./cv-list/cv-list.component */
    "./src/app/cv-list/cv-list.component.ts");
    /* harmony import */


    var _cv_cv_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./cv/cv.component */
    "./src/app/cv/cv.component.ts");
    /* harmony import */


    var _cv_education_cv_education_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./cv-education/cv-education.component */
    "./src/app/cv-education/cv-education.component.ts");
    /* harmony import */


    var _cv_skills_cv_skills_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./cv-skills/cv-skills.component */
    "./src/app/cv-skills/cv-skills.component.ts");
    /* harmony import */


    var _cv_employment_cv_employment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./cv-employment/cv-employment.component */
    "./src/app/cv-employment/cv-employment.component.ts");
    /* harmony import */


    var _cv_interests_cv_interests_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./cv-interests/cv-interests.component */
    "./src/app/cv-interests/cv-interests.component.ts");
    /* harmony import */


    var _cv_summary_cv_summary_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./cv-summary/cv-summary.component */
    "./src/app/cv-summary/cv-summary.component.ts");
    /* harmony import */


    var _cv_bottom_bar_cv_bottom_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./cv-bottom-bar/cv-bottom-bar.component */
    "./src/app/cv-bottom-bar/cv-bottom-bar.component.ts");
    /* harmony import */


    var _cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./cv-heading/cv-heading.component */
    "./src/app/cv-heading/cv-heading.component.ts");
    /* harmony import */


    var _callback_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./callback.pipe */
    "./src/app/callback.pipe.ts");
    /* harmony import */


    var _order_by_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./order-by.pipe */
    "./src/app/order-by.pipe.ts");
    /* harmony import */


    var _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./order-by-date.pipe */
    "./src/app/order-by-date.pipe.ts");
    /* harmony import */


    var _cv_stars_cv_stars_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./cv-stars/cv-stars.component */
    "./src/app/cv-stars/cv-stars.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./common/datepicker/datepicker.component */
    "./src/app/common/datepicker/datepicker.component.ts");
    /* harmony import */


    var _cv_json_cv_json_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./cv-json/cv-json.component */
    "./src/app/cv-json/cv-json.component.ts");
    /* harmony import */


    var _api_index__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./api/index */
    "./src/app/api/index.ts");
    /* harmony import */


    var _cv_login_cv_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./cv-login/cv-login.component */
    "./src/app/cv-login/cv-login.component.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/authentication.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"],
        useValue: '/'
      }, _data_service__WEBPACK_IMPORTED_MODULE_32__["DataService"], _api_index__WEBPACK_IMPORTED_MODULE_35__["CvService"], _authentication_service__WEBPACK_IMPORTED_MODULE_37__["AuthenticationService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__["ClipboardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
        path: '',
        component: _cv_list_cv_list_component__WEBPACK_IMPORTED_MODULE_19__["CvListComponent"]
      }, {
        path: 'cvs/:cvName',
        component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_20__["CvComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_18__["TopBarComponent"], _cv_list_cv_list_component__WEBPACK_IMPORTED_MODULE_19__["CvListComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_20__["CvComponent"], _cv_education_cv_education_component__WEBPACK_IMPORTED_MODULE_21__["CvEducationComponent"], _cv_skills_cv_skills_component__WEBPACK_IMPORTED_MODULE_22__["CvSkillsComponent"], _cv_employment_cv_employment_component__WEBPACK_IMPORTED_MODULE_23__["CvEmploymentComponent"], _cv_interests_cv_interests_component__WEBPACK_IMPORTED_MODULE_24__["CvInterestsComponent"], _cv_summary_cv_summary_component__WEBPACK_IMPORTED_MODULE_25__["CvSummaryComponent"], _cv_bottom_bar_cv_bottom_bar_component__WEBPACK_IMPORTED_MODULE_26__["CvBottomBarComponent"], _cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_27__["CvHeadingComponent"], _callback_pipe__WEBPACK_IMPORTED_MODULE_28__["CallbackPipe"], _order_by_pipe__WEBPACK_IMPORTED_MODULE_29__["OrderByPipe"], _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_30__["OrderByDatePipe"], _cv_stars_cv_stars_component__WEBPACK_IMPORTED_MODULE_31__["CvStarsComponent"], _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_33__["DatePickerComponent"], _cv_json_cv_json_component__WEBPACK_IMPORTED_MODULE_34__["CvJsonComponent"], _cv_login_cv_login_component__WEBPACK_IMPORTED_MODULE_36__["CvLoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__["ClipboardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_16__["ClipboardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
            path: '',
            component: _cv_list_cv_list_component__WEBPACK_IMPORTED_MODULE_19__["CvListComponent"]
          }, {
            path: 'cvs/:cvName',
            component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_20__["CvComponent"]
          }])],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_18__["TopBarComponent"], _cv_list_cv_list_component__WEBPACK_IMPORTED_MODULE_19__["CvListComponent"], _cv_cv_component__WEBPACK_IMPORTED_MODULE_20__["CvComponent"], _cv_education_cv_education_component__WEBPACK_IMPORTED_MODULE_21__["CvEducationComponent"], _cv_skills_cv_skills_component__WEBPACK_IMPORTED_MODULE_22__["CvSkillsComponent"], _cv_employment_cv_employment_component__WEBPACK_IMPORTED_MODULE_23__["CvEmploymentComponent"], _cv_interests_cv_interests_component__WEBPACK_IMPORTED_MODULE_24__["CvInterestsComponent"], _cv_summary_cv_summary_component__WEBPACK_IMPORTED_MODULE_25__["CvSummaryComponent"], _cv_bottom_bar_cv_bottom_bar_component__WEBPACK_IMPORTED_MODULE_26__["CvBottomBarComponent"], _cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_27__["CvHeadingComponent"], _callback_pipe__WEBPACK_IMPORTED_MODULE_28__["CallbackPipe"], _order_by_pipe__WEBPACK_IMPORTED_MODULE_29__["OrderByPipe"], _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_30__["OrderByDatePipe"], _cv_stars_cv_stars_component__WEBPACK_IMPORTED_MODULE_31__["CvStarsComponent"], _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_33__["DatePickerComponent"], _cv_json_cv_json_component__WEBPACK_IMPORTED_MODULE_34__["CvJsonComponent"], _cv_login_cv_login_component__WEBPACK_IMPORTED_MODULE_36__["CvLoginComponent"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"],
            useValue: '/'
          }, _data_service__WEBPACK_IMPORTED_MODULE_32__["DataService"], _api_index__WEBPACK_IMPORTED_MODULE_35__["CvService"], _authentication_service__WEBPACK_IMPORTED_MODULE_37__["AuthenticationService"]],
          entryComponents: [_cv_json_cv_json_component__WEBPACK_IMPORTED_MODULE_34__["CvJsonComponent"], _cv_login_cv_login_component__WEBPACK_IMPORTED_MODULE_36__["CvLoginComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authentication.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/authentication.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./api/index */
    "./src/app/api/index.ts");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(cvService) {
        _classCallCheck(this, AuthenticationService);

        this.cvService = cvService;
        this.authenticated = false;
        this.userName = undefined;
        this.authenticatedNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(userName, userPassword) {
          var _this5 = this;

          this.cvService.configuration.username = userName;
          this.cvService.configuration.password = userPassword;
          this.cvService.login(userName).subscribe(function (response) {
            _this5.authenticated = true;
            _this5.userName = userName;

            _this5.authenticatedNotify.emit(_this5.authenticated);
          }, function (error) {
            _this5.authenticated = false;
            _this5.userName = undefined;

            _this5.authenticatedNotify.emit(_this5.authenticated);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticated = false;
          this.userName = undefined;
          this.cvService.configuration.username = undefined;
          this.cvService.configuration.password = undefined;
        }
      }, {
        key: "getAuthenticationEventEmitter",
        value: function getAuthenticationEventEmitter() {
          return this.authenticatedNotify;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
      return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_index__WEBPACK_IMPORTED_MODULE_1__["CvService"]));
    };

    AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticationService,
      factory: AuthenticationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _api_index__WEBPACK_IMPORTED_MODULE_1__["CvService"]
        }];
      }, {
        authenticatedNotify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/callback.pipe.ts":
  /*!**********************************!*\
    !*** ./src/app/callback.pipe.ts ***!
    \**********************************/

  /*! exports provided: CallbackPipe */

  /***/
  function srcAppCallbackPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallbackPipe", function () {
      return CallbackPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CallbackPipe = /*#__PURE__*/function () {
      function CallbackPipe() {
        _classCallCheck(this, CallbackPipe);
      }

      _createClass(CallbackPipe, [{
        key: "transform",
        value: function transform(items, callback) {
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          if (!items || !callback) {
            return items;
          }

          return items.filter(function (item) {
            return callback(item, args);
          });
        }
      }]);

      return CallbackPipe;
    }();

    CallbackPipe.ɵfac = function CallbackPipe_Factory(t) {
      return new (t || CallbackPipe)();
    };

    CallbackPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "callback",
      type: CallbackPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallbackPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'callback',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/datepicker/datepicker.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/common/datepicker/datepicker.component.ts ***!
    \***********************************************************/

  /*! exports provided: PICK_FORMATS, DatePickerComponent */

  /***/
  function srcAppCommonDatepickerDatepickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PICK_FORMATS", function () {
      return PICK_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function () {
      return DatePickerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    function DatePickerComponent_mat_form_field_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter date or use date picker ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatePickerComponent_mat_form_field_0_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.date = $event;
        })("dateChange", function DatePickerComponent_mat_form_field_0_Template_input_dateChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.dateChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-datepicker-toggle", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-datepicker", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function DatePickerComponent_mat_form_field_0_Template_mat_datepicker_closed_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.valueChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx_r0.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
      }
    }

    function DatePickerComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.date, "dd-MM-yyyy"));
      }
    }

    var PICK_FORMATS = {
      parse: {
        dateInput: {
          month: 'short',
          year: 'numeric',
          day: 'numeric'
        }
      },
      display: {
        dateInput: 'input',
        monthYearLabel: {
          year: 'numeric',
          month: 'short'
        },
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };

    var PickDateAdapter = /*#__PURE__*/function (_angular_material_cor) {
      _inherits(PickDateAdapter, _angular_material_cor);

      var _super2 = _createSuper(PickDateAdapter);

      function PickDateAdapter() {
        _classCallCheck(this, PickDateAdapter);

        return _super2.apply(this, arguments);
      }

      _createClass(PickDateAdapter, [{
        key: "parse",
        value: function parse(value) {
          if (typeof value === 'string' && value.indexOf('-') > -1) {
            var str = value.split('-');
            var year = Number(str[2]);
            var month = Number(str[1]) - 1;
            var date = Number(str[0]);
            return new Date(year, month, date);
          }

          var timestamp = typeof value === 'number' ? value : Date.parse(value);
          return isNaN(timestamp) ? null : new Date(timestamp);
        }
      }, {
        key: "format",
        value: function format(date, displayFormat) {
          if (displayFormat === 'input') {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'dd-MM-yyyy', this.locale);
            ;
          } else {
            return date.toDateString();
          }
        }
      }]);

      return PickDateAdapter;
    }(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]);

    var DatePickerComponent = /*#__PURE__*/function () {
      function DatePickerComponent(dataService) {
        _classCallCheck(this, DatePickerComponent);

        this.dataService = dataService;
        this.dateNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(DatePickerComponent, [{
        key: "valueChange",
        value: function valueChange() {
          this.dateNotify.emit(this.date);
        }
      }, {
        key: "dateChanged",
        value: function dateChanged(event) {
          this.dateNotify.emit(event.value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datePicker = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.date);
        }
      }]);

      return DatePickerComponent;
    }();

    DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) {
      return new (t || DatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
    };

    DatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DatePickerComponent,
      selectors: [["app-datepicker"]],
      inputs: {
        date: "date"
      },
      outputs: {
        dateNotify: "dateNotify",
        dateChange: "dateChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
        useClass: PickDateAdapter
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"],
        useValue: PICK_FORMATS
      }])],
      decls: 2,
      vars: 2,
      consts: [["class", "dateFormField", 4, "ngIf"], [4, "ngIf"], [1, "dateFormField"], ["matInput", "", 3, "matDatepicker", "ngModel", "ngModelChange", "dateChange"], ["matSuffix", "", 3, "for"], [3, "closed"], ["datePicker", ""]],
      template: function DatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatePickerComponent_mat_form_field_0_Template, 7, 3, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatePickerComponent_span_1_Template, 3, 4, "span", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".dateFormField[_ngcontent-%COMP%] {\n  padding: 0px;\n  height: 10px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2RhdGVwaWNrZXIvQzpcXGFwcHNcXEN2Vmlld2VyXFxjbGllbnRcXHNyY1xcbWFpblxcY3Ytdmlld2VyL3NyY1xcYXBwXFxjb21tb25cXGRhdGVwaWNrZXJcXGRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlRm9ybUZpZWxkIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gIGhlaWdodDogMHB4O1xyXG59IiwiLmRhdGVGb3JtRmllbGQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTBweDtcbn1cblxubWF0LWxhYmVsIHtcbiAgaGVpZ2h0OiAwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-datepicker',
          templateUrl: './datepicker.component.html',
          styleUrls: ['./datepicker.component.scss'],
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
            useClass: PickDateAdapter
          }, {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"],
            useValue: PICK_FORMATS
          }]
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }];
      }, {
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dateNotify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv-bottom-bar/cv-bottom-bar.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/cv-bottom-bar/cv-bottom-bar.component.ts ***!
    \**********************************************************/

  /*! exports provided: CvBottomBarComponent */

  /***/
  function srcAppCvBottomBarCvBottomBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvBottomBarComponent", function () {
      return CvBottomBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CvBottomBarComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Source: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.sourceURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sourceURL);
      }
    }

    var CvBottomBarComponent = /*#__PURE__*/function () {
      function CvBottomBarComponent() {
        _classCallCheck(this, CvBottomBarComponent);
      }

      _createClass(CvBottomBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvBottomBarComponent;
    }();

    CvBottomBarComponent.ɵfac = function CvBottomBarComponent_Factory(t) {
      return new (t || CvBottomBarComponent)();
    };

    CvBottomBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvBottomBarComponent,
      selectors: [["app-cv-bottom-bar"]],
      inputs: {
        footnote: "footnote",
        sourceURL: "sourceURL"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "bottomBar"], [4, "ngIf"], ["target", "_blank", "rel", "noopener", 3, "href"]],
      template: function CvBottomBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvBottomBarComponent_span_2_Template, 4, 2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.footnote, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sourceURL);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".bottomBar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  z-index: 1;\n  height: 3%;\n  width: 95%;\n  border-top-width: 2px;\n  border-top-style: solid;\n  border-top-color: #36458f;\n  background-color: white;\n  color: #36458f;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtYm90dG9tLWJhci9DOlxcYXBwc1xcQ3ZWaWV3ZXJcXGNsaWVudFxcc3JjXFxtYWluXFxjdi12aWV3ZXIvc3JjXFxhcHBcXGN2LWJvdHRvbS1iYXJcXGN2LWJvdHRvbS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWJvdHRvbS1iYXIvY3YtYm90dG9tLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2N2LWJvdHRvbS1iYXIvY3YtYm90dG9tLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b21CYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBoZWlnaHQ6IDMlO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMnB4O1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYig1NCwgNjksIDE0Myk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IHJnYig1NCwgNjksIDE0Myk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iLCIuYm90dG9tQmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIGhlaWdodDogMyU7XG4gIHdpZHRoOiA5NSU7XG4gIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3AtY29sb3I6ICMzNjQ1OGY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzM2NDU4ZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvBottomBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-bottom-bar',
          templateUrl: './cv-bottom-bar.component.html',
          styleUrls: ['./cv-bottom-bar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        footnote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sourceURL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv-education/cv-education.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/cv-education/cv-education.component.ts ***!
    \********************************************************/

  /*! exports provided: CvEducationComponent */

  /***/
  function srcAppCvEducationCvEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvEducationComponent", function () {
      return CvEducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cv-heading/cv-heading.component */
    "./src/app/cv-heading/cv-heading.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/datepicker/datepicker.component */
    "./src/app/common/datepicker/datepicker.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../order-by-date.pipe */
    "./src/app/order-by-date.pipe.ts");
    /* harmony import */


    var _order_by_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../order-by.pipe */
    "./src/app/order-by.pipe.ts");

    function CvEducationComponent_div_3_mat_expansion_panel_3_mat_icon_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_table_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "colgroup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "col", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "col", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEducationComponent_div_3_mat_expansion_panel_3_table_13_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return institution_r5.institution = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Start Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-datepicker", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvEducationComponent_div_3_mat_expansion_panel_3_table_13_Template_app_datepicker_dateNotify_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.updateStartDate(i_r6, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "End Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-datepicker", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvEducationComponent_div_3_mat_expansion_panel_3_table_13_Template_app_datepicker_dateNotify_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.updateEndDate(i_r6, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", institution_r5.institution);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", institution_r5.startDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", institution_r5.endDate);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_th_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_th_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](qualification_r23.type);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](qualification_r23.subject);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](qualification_r23.grade);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](qualification_r23.notes);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_5_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return qualification_r23.type = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", qualification_r23.type);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_6_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);

          var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return qualification_r23.subject = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", qualification_r23.subject);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_7_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);

          var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return qualification_r23.grade = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", qualification_r23.grade);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_8_Template_textarea_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);

          var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return qualification_r23.notes = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var qualification_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", qualification_r23.notes);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var j_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r56.removeQualification(i_r6, j_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "disable": a0
      };
    };

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_10_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, j_r24 <= 0 === true));
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_10_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var j_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r62.moveQualificationUp(i_r6, j_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_10_mat_icon_2_Template, 2, 3, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.dataService.editMode);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_11_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, j_r24 >= institution_r5.qualifications.length - 1 === true));
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_11_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var j_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r69.moveQualificationDown(i_r6, j_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_11_mat_icon_2_Template, 2, 3, "mat-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r35.dataService.editMode);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_1_Template, 2, 1, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_2_Template, 2, 1, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_3_Template, 2, 1, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_4_Template, 2, 1, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_5_Template, 2, 1, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_6_Template, 2, 1, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_7_Template, 2, 1, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_8_Template, 3, 1, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_9_Template, 4, 0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_10_Template, 3, 1, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_td_11_Template, 3, 1, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.dataService.editMode);
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_a_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEducationComponent_div_3_mat_expansion_panel_3_a_37_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r73.addQualification(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEducationComponent_div_3_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", null, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-description", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEducationComponent_div_3_mat_expansion_panel_3_Template_mat_panel_description_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r7._toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEducationComponent_div_3_mat_expansion_panel_3_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r6 = ctx.index;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r78.removeInstitution(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CvEducationComponent_div_3_mat_expansion_panel_3_mat_icon_11_Template, 2, 0, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CvEducationComponent_div_3_mat_expansion_panel_3_table_13_Template, 26, 3, "table", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "colgroup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "col", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Subject");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Grade");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Notes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CvEducationComponent_div_3_mat_expansion_panel_3_th_32_Template, 2, 0, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CvEducationComponent_div_3_mat_expansion_panel_3_th_33_Template, 2, 0, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CvEducationComponent_div_3_mat_expansion_panel_3_th_34_Template, 2, 0, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CvEducationComponent_div_3_mat_expansion_panel_3_tr_35_Template, 12, 11, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "orderBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CvEducationComponent_div_3_mat_expansion_panel_3_a_37_Template, 3, 0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var institution_r5 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", institution_r5.institution, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ( ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 10, institution_r5.startDate, "dd-MM-yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 13, institution_r5.endDate, "dd-MM-yyyy"), " ) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 16, institution_r5.qualifications, "grade"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);
      }
    }

    function CvEducationComponent_div_3_a_5_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEducationComponent_div_3_a_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEducationComponent_div_3_a_5_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r80.addInstitution();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvEducationComponent_div_3_a_5_mat_icon_1_Template, 2, 0, "mat-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.dataService.editMode);
      }
    }

    function CvEducationComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvEducationComponent_div_3_mat_expansion_panel_3_Template, 38, 19, "mat-expansion-panel", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "orderByDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvEducationComponent_div_3_a_5_Template, 2, 1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r0.education.institutions, "startDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataService.editMode);
      }
    }

    function CvEducationComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No institutions provided.\n");
      }
    }

    var CvEducationComponent = /*#__PURE__*/function () {
      function CvEducationComponent(dataService) {
        _classCallCheck(this, CvEducationComponent);

        this.dataService = dataService;
        this.title = "Education";
        this.textNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CvEducationComponent, [{
        key: "updateText",
        value: function updateText(text) {
          this.text = text;
          this.textNotify.emit(this.text);
        }
      }, {
        key: "updateStartDate",
        value: function updateStartDate(i, date) {
          this.education.institutions[i].startDate = date;
        }
      }, {
        key: "updateEndDate",
        value: function updateEndDate(i, date) {
          this.education.institutions[i].endDate = date;
        }
      }, {
        key: "addInstitution",
        value: function addInstitution() {
          this.education.institutions.push({
            institution: "New institution",
            qualifications: [{}]
          });
        }
      }, {
        key: "removeInstitution",
        value: function removeInstitution(i) {
          if (this.education.institutions.length == 1) {
            this.education.institutions[0] = {
              institution: "New institution",
              qualifications: [{}]
            };
          } else {
            this.education.institutions.splice(i, 1);
          }
        }
      }, {
        key: "addQualification",
        value: function addQualification(i) {
          this.education.institutions[i].qualifications.push({});
        }
      }, {
        key: "removeQualification",
        value: function removeQualification(i, j) {
          if (this.education.institutions[i].qualifications.length == 1) {
            this.education.institutions[i].qualifications[0] = {};
          } else {
            this.education.institutions[i].qualifications.splice(j, 1);
          }
        }
      }, {
        key: "moveQualificationUp",
        value: function moveQualificationUp(i, j) {
          this.education.institutions[i].qualifications.splice(j - 1, 0, this.education.institutions[i].qualifications.splice(j, 1)[0]);
        }
      }, {
        key: "moveQualificationDown",
        value: function moveQualificationDown(i, j) {
          this.education.institutions[i].qualifications.splice(j + 1, 0, this.education.institutions[i].qualifications.splice(j, 1)[0]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvEducationComponent;
    }();

    CvEducationComponent.ɵfac = function CvEducationComponent_Factory(t) {
      return new (t || CvEducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    CvEducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvEducationComponent,
      selectors: [["app-cv-education"]],
      inputs: {
        name: "name",
        text: "text",
        image: "image",
        education: "education"
      },
      outputs: {
        textNotify: "textNotify"
      },
      decls: 6,
      vars: 6,
      consts: [[3, "title", "name", "text", "image", "textNotify"], [4, "ngIf", "ngIfElse"], ["noDetails", ""], [1, "mat-accordion-div"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], ["panelH", ""], [1, "dateLight"], [3, "click"], ["matTooltip", "Remove institution", "aria-hidden", "false", 4, "ngIf"], ["class", "fullWidth", 4, "ngIf"], [1, "fullWidth"], ["span", "1", 2, "width", "10%"], ["span", "1", 2, "width", "20%"], ["span", "1", 2, "width", "50%"], [4, "ngIf"], ["matTooltip", "Remove institution", "aria-hidden", "false"], ["span", "1", 2, "width", "2%"], ["span", "1", 2, "width", "78"], ["type", "text", "name", "name", 1, "editable", 3, "ngModel", "ngModelChange"], [3, "date", "dateNotify"], ["class", "skillColumn", 4, "ngIf"], [1, "skillColumn"], ["type", "text", "name", "type", 1, "editable", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "subject", 1, "editable", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "grade", 1, "editable", 3, "ngModel", "ngModelChange"], [1, "editable"], ["name", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["matTooltip", "Remove qualification"], ["matTooltip", "Move up", "aria-hidden", "false", 3, "ngClass", 4, "ngIf"], ["matTooltip", "Move up", "aria-hidden", "false", 3, "ngClass"], ["matTooltip", "Move down", "aria-hidden", "false", 3, "ngClass", 4, "ngIf"], ["matTooltip", "Move down", "aria-hidden", "false", 3, "ngClass"], ["matTooltip", "Add new qualification"], ["matTooltip", "Add new institution", 4, "ngIf"], ["matTooltip", "Add new institution"]],
      template: function CvEducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cv-heading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvEducationComponent_Template_app_cv_heading_textNotify_0_listener($event) {
            return ctx.updateText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Institutions:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvEducationComponent_div_3_Template, 8, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvEducationComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("name", ctx.name)("text", ctx.text)("image", ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.education.institutions && ctx.education.institutions[0])("ngIfElse", _r1);
        }
      },
      directives: [_cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_2__["CvHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatePickerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      pipes: [_order_by_date_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderByDatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _order_by_pipe__WEBPACK_IMPORTED_MODULE_12__["OrderByPipe"]],
      styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #919edd;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #eff0f7;\n}\n\n.skillColumn[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  padding-right: 1%;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  font-weight: bold;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtZWR1Y2F0aW9uL0M6XFxhcHBzXFxDdlZpZXdlclxcY2xpZW50XFxzcmNcXG1haW5cXGN2LXZpZXdlci9zcmNcXGFwcFxcY3YtZWR1Y2F0aW9uXFxjdi1lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWVkdWNhdGlvbi9jdi1lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpRUFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvY3YtZWR1Y2F0aW9uL2N2LWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE1OCwgMjIxKTtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNDAsIDI0Nyk7XHJcbn1cclxuXHJcbi5za2lsbENvbHVtbiB7XHJcbiAgd2lkdGg6ICAyMCU7XHJcbn1cclxuXHJcbm1hdC1pY29uIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcclxuICB9XHJcbn0iLCJ0YWJsZSwgdGgsIHRkIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTllZGQ7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjc7XG59XG5cbi5za2lsbENvbHVtbiB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbm1hdC1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMSU7XG59XG5tYXQtaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvEducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-education',
          templateUrl: './cv-education.component.html',
          styleUrls: ['./cv-education.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        education: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        textNotify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv-employment/cv-employment.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/cv-employment/cv-employment.component.ts ***!
    \**********************************************************/

  /*! exports provided: CvEmploymentComponent */

  /***/
  function srcAppCvEmploymentCvEmploymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvEmploymentComponent", function () {
      return CvEmploymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cv-heading/cv-heading.component */
    "./src/app/cv-heading/cv-heading.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/datepicker/datepicker.component */
    "./src/app/common/datepicker/datepicker.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _order_by_date_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../order-by-date.pipe */
    "./src/app/order-by-date.pipe.ts");

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_mat_icon_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_div_12_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("End Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, institution_r5.endDate, "dd-MM-yyyy"), "");
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_div_12_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var note_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r19);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvEmploymentComponent_div_3_mat_expansion_panel_2_div_12_p_4_Template, 3, 4, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvEmploymentComponent_div_3_mat_expansion_panel_2_div_12_div_5_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Start Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, institution_r5.startDate, "dd-MM-yyyy"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", institution_r5.endDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", institution_r5.notes);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_mat_icon_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_Template_textarea_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var j_r23 = ctx.index;

          var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          return institution_r5.notes[j_r23] = $event;
        })("change", function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_Template_textarea_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var note_r22 = ctx.$implicit;
          var j_r23 = ctx.index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r29.updateNote(note_r22, i_r6, j_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var j_r23 = ctx.index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r31.addNote(i_r6, j_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_mat_icon_4_Template, 2, 0, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_Template_a_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var j_r23 = ctx.index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r33.removeNote(i_r6, j_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_mat_icon_6_Template, 2, 0, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r23 = ctx.index;

        var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", institution_r5.notes[j_r23]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.dataService.editMode);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "colgroup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "col", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "col", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "col", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return institution_r5.employer = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Start Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-datepicker", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_Template_app_datepicker_dateNotify_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r39.updateStartDate(i_r6, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "End Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "app-datepicker", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_Template_app_datepicker_dateNotify_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r41.updateEndDate(i_r6, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Notes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_div_32_Template, 7, 3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var institution_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", institution_r5.employer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", institution_r5.startDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", institution_r5.endDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", institution_r5.notes)("ngForTrackBy", ctx_r10.trackByFn);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_th_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_th_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_th_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, role_r44.startDate, "dd-MM-yyyy"));
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, role_r44.endDate, "dd-MM-yyyy"));
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r44.title);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var note_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r59);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_4_div_1_Template, 3, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", role_r44.notes);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-datepicker", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_5_Template_app_datepicker_dateNotify_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var j_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r61.updateRoleStartDate(i_r6, j_r45, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", role_r44.startDate);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-datepicker", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_6_Template_app_datepicker_dateNotify_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var j_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r66.updateRoleEndDate(i_r6, j_r45, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", role_r44.endDate);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_7_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return role_r44.title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", role_r44.title);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_mat_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_Template_textarea_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var k_r77 = ctx.index;

          var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          return role_r44.notes[k_r77] = $event;
        })("change", function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_Template_textarea_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var note_r76 = ctx.$implicit;
          var k_r77 = ctx.index;

          var j_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r83.updateRoleNote(note_r76, i_r6, j_r45, k_r77);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var k_r77 = ctx.index;

          var j_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r86.addRoleNote(i_r6, j_r45, k_r77);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_mat_icon_5_Template, 2, 0, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var k_r77 = ctx.index;

          var j_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r89.removeRoleNote(i_r6, j_r45, k_r77);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_mat_icon_7_Template, 2, 0, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var k_r77 = ctx.index;

        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", role_r44.notes[k_r77]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r75.dataService.editMode);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_div_1_Template, 8, 3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", role_r44.notes)("ngForTrackBy", ctx_r53.trackByFn);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var j_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r94.removeRole(i_r6, j_r45);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_1_Template, 3, 4, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_2_Template, 3, 4, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_3_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_4_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_5_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_6_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_7_Template, 2, 1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_8_Template, 2, 2, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_td_9_Template, 4, 0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.dataService.editMode);
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_a_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_mat_expansion_panel_2_a_35_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r100);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r98.addRole(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_mat_expansion_panel_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", null, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-description", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_mat_expansion_panel_2_Template_mat_panel_description_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r7._toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_mat_expansion_panel_2_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var i_r6 = ctx.index;

          var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r103.removeInstitution(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CvEmploymentComponent_div_3_mat_expansion_panel_2_mat_icon_11_Template, 2, 0, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CvEmploymentComponent_div_3_mat_expansion_panel_2_div_12_Template, 6, 6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CvEmploymentComponent_div_3_mat_expansion_panel_2_table_13_Template, 34, 5, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "colgroup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "col", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "col", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "col", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Start Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "End Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Notes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CvEmploymentComponent_div_3_mat_expansion_panel_2_th_30_Template, 2, 0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CvEmploymentComponent_div_3_mat_expansion_panel_2_th_31_Template, 2, 0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CvEmploymentComponent_div_3_mat_expansion_panel_2_th_32_Template, 2, 0, "th", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CvEmploymentComponent_div_3_mat_expansion_panel_2_tr_33_Template, 10, 9, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "orderByDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CvEmploymentComponent_div_3_mat_expansion_panel_2_a_35_Template, 3, 0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var institution_r5 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", institution_r5.employer, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ( ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 11, institution_r5.startDate, "dd-MM-yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 14, institution_r5.endDate, "dd-MM-yyyy"), " ) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 17, institution_r5.roles, "startDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);
      }
    }

    function CvEmploymentComponent_div_3_a_4_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvEmploymentComponent_div_3_a_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvEmploymentComponent_div_3_a_4_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

          var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r105.addInstitution();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvEmploymentComponent_div_3_a_4_mat_icon_1_Template, 2, 0, "mat-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.dataService.editMode);
      }
    }

    function CvEmploymentComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvEmploymentComponent_div_3_mat_expansion_panel_2_Template, 36, 20, "mat-expansion-panel", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "orderByDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvEmploymentComponent_div_3_a_4_Template, 2, 1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r0.employment.institutions, "startDate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataService.editMode);
      }
    }

    function CvEmploymentComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No institutions provided.\n");
      }
    }

    var CvEmploymentComponent = /*#__PURE__*/function () {
      function CvEmploymentComponent(dataService) {
        _classCallCheck(this, CvEmploymentComponent);

        this.dataService = dataService;
        this.title = "Employment";
        this.textNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CvEmploymentComponent, [{
        key: "updateText",
        value: function updateText(text) {
          this.text = text;
          this.textNotify.emit(this.text);
        }
      }, {
        key: "addInstitution",
        value: function addInstitution() {
          this.employment.institutions.push({
            institution: "New institution",
            roles: []
          });
          this.addRole(this.employment.institutions.length - 1);
        }
      }, {
        key: "removeInstitution",
        value: function removeInstitution(i) {
          if (this.employment.institutions.length == 1) {
            this.employment.institutions[0] = {
              institution: "New institution",
              roles: []
            };
            this.addRole(0);
          } else {
            this.employment.institutions.splice(i, 1);
          }
        }
      }, {
        key: "updateNote",
        value: function updateNote(note, i, j) {
          this.employment.institutions[i].notes[j] = note;
        }
      }, {
        key: "addNote",
        value: function addNote(i, j) {
          this.employment.institutions[i].notes.splice(j + 1, 0, "");
        }
      }, {
        key: "removeNote",
        value: function removeNote(i, j) {
          if (this.employment.institutions[i].notes.length == 1) {
            this.employment.institutions[i].notes[0] = "";
          } else {
            this.employment.institutions[i].notes.splice(j, 1);
          }
        }
      }, {
        key: "addRole",
        value: function addRole(i) {
          this.employment.institutions[i].roles.push({
            notes: []
          });
          this.addRoleNote(i, this.employment.institutions[i].roles.length - 1, 0);
        }
      }, {
        key: "removeRole",
        value: function removeRole(i, j) {
          if (this.employment.institutions[i].roles.length == 1) {
            this.employment.institutions[i].roles[0] = {
              notes: []
            };
            this.addRoleNote(i, 0, 0);
          } else {
            this.employment.institutions[i].roles.splice(j, 1);
          }
        }
      }, {
        key: "updateRoleNote",
        value: function updateRoleNote(note, i, j, k) {
          this.employment.institutions[i].roles[j].notes[k] = note;
        }
      }, {
        key: "addRoleNote",
        value: function addRoleNote(i, j, k) {
          if (k == 0) {
            this.employment.institutions[i].roles[j].notes.push("");
          } else {
            this.employment.institutions[i].roles[j].notes.splice(k + 1, 0, "");
          }
        }
      }, {
        key: "removeRoleNote",
        value: function removeRoleNote(i, j, k) {
          if (this.employment.institutions[i].roles[j].notes.length == 1) {
            this.employment.institutions[i].roles[j].notes[0] = "";
          } else {
            this.employment.institutions[i].roles[j].notes.splice(k, 1);
          }
        }
      }, {
        key: "updateStartDate",
        value: function updateStartDate(i, date) {
          this.employment.institutions[i].startDate = date;
        }
      }, {
        key: "updateEndDate",
        value: function updateEndDate(i, date) {
          this.employment.institutions[i].endDate = date;
        }
      }, {
        key: "updateRoleStartDate",
        value: function updateRoleStartDate(i, j, date) {
          this.employment.institutions[i].roles[j].startDate = date;
        }
      }, {
        key: "updateRoleEndDate",
        value: function updateRoleEndDate(i, j, date) {
          this.employment.institutions[i].roles[j].endDate = date;
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return index;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvEmploymentComponent;
    }();

    CvEmploymentComponent.ɵfac = function CvEmploymentComponent_Factory(t) {
      return new (t || CvEmploymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    CvEmploymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvEmploymentComponent,
      selectors: [["app-cv-employment"]],
      inputs: {
        name: "name",
        text: "text",
        image: "image",
        employment: "employment"
      },
      outputs: {
        textNotify: "textNotify"
      },
      decls: 6,
      vars: 6,
      consts: [[3, "title", "name", "text", "image", "textNotify"], ["class", "mat-accordion-div", 4, "ngIf", "ngIfElse"], ["noDetails", ""], [1, "mat-accordion-div"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], ["panelH", ""], [1, "dateLight"], [3, "click"], ["matTooltip", "Remove institution", "aria-hidden", "false", 4, "ngIf"], [4, "ngIf"], ["class", "fullWidth", 4, "ngIf"], [1, "fullWidth"], ["span", "1", 2, "width", "5%"], ["span", "1", 2, "width", "20%"], ["span", "1", 2, "width", "60%"], ["span", "1", 2, "width", "10%"], ["matTooltip", "Remove institution", "aria-hidden", "false"], ["span", "1", 2, "width", "2%"], ["span", "1", 2, "width", "78"], ["type", "text", "name", "employer", 1, "editable", 3, "ngModel", "ngModelChange"], [3, "date", "dateNotify"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "editable"], ["name", "text", "matInput", "", 3, "ngModel", "ngModelChange", "change"], ["type", "text", "name", "title", 1, "editable", 3, "ngModel", "ngModelChange"], ["matTooltip", "Remove role"], ["matTooltip", "Add new role"], ["matTooltip", "Add new institution", 4, "ngIf"], ["matTooltip", "Add new institution"]],
      template: function CvEmploymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cv-heading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvEmploymentComponent_Template_app_cv_heading_textNotify_0_listener($event) {
            return ctx.updateText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Employers:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvEmploymentComponent_div_3_Template, 7, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvEmploymentComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("name", ctx.name)("text", ctx.text)("image", ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employment.institutions && ctx.employment.institutions[0])("ngIfElse", _r1);
        }
      },
      directives: [_cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_2__["CvHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatePickerComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]],
      pipes: [_order_by_date_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderByDatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #919edd;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #eff0f7;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  font-weight: bold;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtZW1wbG95bWVudC9DOlxcYXBwc1xcQ3ZWaWV3ZXJcXGNsaWVudFxcc3JjXFxtYWluXFxjdi12aWV3ZXIvc3JjXFxhcHBcXGN2LWVtcGxveW1lbnRcXGN2LWVtcGxveW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWVtcGxveW1lbnQvY3YtZW1wbG95bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2N2LWVtcGxveW1lbnQvY3YtZW1wbG95bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLCB0aCwgdGQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxudGgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE1OCwgMjIxKTtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyNDAsIDI0Nyk7XHJcbn1cclxuXHJcbm1hdC1pY29uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbn0iLCJ0YWJsZSwgdGgsIHRkIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTllZGQ7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjc7XG59XG5cbm1hdC1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvEmploymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-employment',
          templateUrl: './cv-employment.component.html',
          styleUrls: ['./cv-employment.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        employment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        textNotify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv-heading/cv-heading.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/cv-heading/cv-heading.component.ts ***!
    \****************************************************/

  /*! exports provided: CvHeadingComponent */

  /***/
  function srcAppCvHeadingCvHeadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvHeadingComponent", function () {
      return CvHeadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CvHeadingComponent_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 5);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", "data:image/jpg;base64," + ctx_r0.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CvHeadingComponent_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No image provided.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvHeadingComponent_mat_form_field_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvHeadingComponent_mat_form_field_9_Template_textarea_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.text = $event;
        })("keyup", function CvHeadingComponent_mat_form_field_9_Template_textarea_keyup_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.changeMessage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.text);
      }
    }

    function CvHeadingComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.text);
      }
    }

    function CvHeadingComponent_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No details provided.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CvHeadingComponent = /*#__PURE__*/function () {
      function CvHeadingComponent(dataService) {
        _classCallCheck(this, CvHeadingComponent);

        this.dataService = dataService;
        this.textNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CvHeadingComponent, [{
        key: "changeMessage",
        value: function changeMessage() {
          this.textNotify.emit(this.text);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvHeadingComponent;
    }();

    CvHeadingComponent.ɵfac = function CvHeadingComponent_Factory(t) {
      return new (t || CvHeadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    CvHeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvHeadingComponent,
      selectors: [["app-cv-heading"]],
      inputs: {
        name: "name",
        title: "title",
        text: "text",
        image: "image"
      },
      outputs: {
        textNotify: "textNotify"
      },
      decls: 12,
      vars: 7,
      consts: [[1, "titleImg"], [3, "src", 4, "ngIf"], [4, "ngIf"], [1, "titleText"], ["class", "editable", 4, "ngIf"], [3, "src"], [1, "editable"], ["name", "text", "matInput", "", 3, "ngModel", "ngModelChange", "keyup"]],
      template: function CvHeadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvHeadingComponent_img_3_Template, 1, 1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvHeadingComponent_p_4_Template, 2, 0, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CvHeadingComponent_mat_form_field_9_Template, 2, 1, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CvHeadingComponent_span_10_Template, 2, 1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CvHeadingComponent_p_11_Template, 2, 0, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode && !ctx.text);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-style: double;\n  border-width: 4px;\n}\n\n.titleImg[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10%;\n}\n\n.titleText[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 20px;\n  vertical-align: top;\n  max-width: 80%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ndiv[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtaGVhZGluZy9DOlxcYXBwc1xcQ3ZWaWV3ZXJcXGNsaWVudFxcc3JjXFxtYWluXFxjdi12aWV3ZXIvc3JjXFxhcHBcXGN2LWhlYWRpbmdcXGN2LWhlYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWhlYWRpbmcvY3YtaGVhZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNHLFdBQUE7QUNDSCIsImZpbGUiOiJzcmMvYXBwL2N2LWhlYWRpbmcvY3YtaGVhZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XHJcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XHJcbn1cclxuXHJcbi50aXRsZUltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi50aXRsZVRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG59IiwiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zdHlsZTogZG91YmxlO1xuICBib3JkZXItd2lkdGg6IDRweDtcbn1cblxuLnRpdGxlSW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAlO1xufVxuXG4udGl0bGVUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1heC13aWR0aDogODAlO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvHeadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-heading',
          templateUrl: './cv-heading.component.html',
          styleUrls: ['./cv-heading.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        textNotify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv-interests/cv-interests.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/cv-interests/cv-interests.component.ts ***!
    \********************************************************/

  /*! exports provided: CvInterestsComponent */

  /***/
  function srcAppCvInterestsCvInterestsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvInterestsComponent", function () {
      return CvInterestsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../cv-heading/cv-heading.component */
    "./src/app/cv-heading/cv-heading.component.ts");

    var CvInterestsComponent = /*#__PURE__*/function () {
      function CvInterestsComponent() {
        _classCallCheck(this, CvInterestsComponent);

        this.title = "Interests";
        this.textNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CvInterestsComponent, [{
        key: "updateText",
        value: function updateText(text) {
          this.interests = text;
          this.textNotify.emit(this.interests);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvInterestsComponent;
    }();

    CvInterestsComponent.ɵfac = function CvInterestsComponent_Factory(t) {
      return new (t || CvInterestsComponent)();
    };

    CvInterestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvInterestsComponent,
      selectors: [["app-cv-interests"]],
      inputs: {
        name: "name",
        text: "text",
        image: "image",
        interests: "interests"
      },
      outputs: {
        textNotify: "textNotify"
      },
      decls: 1,
      vars: 4,
      consts: [[3, "title", "name", "text", "image", "textNotify"]],
      template: function CvInterestsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cv-heading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvInterestsComponent_Template_app_cv_heading_textNotify_0_listener($event) {
            return ctx.updateText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("name", ctx.name)("text", ctx.interests)("image", ctx.image);
        }
      },
      directives: [_cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_1__["CvHeadingComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2LWludGVyZXN0cy9jdi1pbnRlcmVzdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvInterestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-interests',
          templateUrl: './cv-interests.component.html',
          styleUrls: ['./cv-interests.component.scss']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        interests: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        textNotify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv-json/cv-json.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/cv-json/cv-json.component.ts ***!
    \**********************************************/

  /*! exports provided: CvJsonComponent */

  /***/
  function srcAppCvJsonCvJsonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvJsonComponent", function () {
      return CvJsonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");

    var CvJsonComponent = /*#__PURE__*/function () {
      function CvJsonComponent(dialogRef, data) {
        _classCallCheck(this, CvJsonComponent);

        this.dialogRef = dialogRef;
        this.cv = data;
      }

      _createClass(CvJsonComponent, [{
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cvJson = JSON.stringify(this.cv, null, 2);
        }
      }]);

      return CvJsonComponent;
    }();

    CvJsonComponent.ɵfac = function CvJsonComponent_Factory(t) {
      return new (t || CvJsonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    CvJsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvJsonComponent,
      selectors: [["app-cv-json"]],
      decls: 9,
      vars: 3,
      consts: [["mat-dialog-title", ""], ["readonly", "", 3, "ngModel", "ngModelChange"], [1, "mat-raised-button", 3, "cdkCopyToClipboard"], [1, "mat-raised-button", 3, "click"]],
      template: function CvJsonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvJsonComponent_Template_textarea_ngModelChange_3_listener($event) {
            return ctx.cvJson = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Copy to clipboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvJsonComponent_Template_button_click_7_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" CV JSON data for ", ctx.cv.name, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cvJson);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx.cvJson);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["CdkCopyToClipboard"]],
      styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  width: 90%;\n  height: 75%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 95%;\n  background-color: #f1f5de;\n  border-style: ridge;\n  border-color: black;\n  border-width: thin;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtanNvbi9DOlxcYXBwc1xcQ3ZWaWV3ZXJcXGNsaWVudFxcc3JjXFxtYWluXFxjdi12aWV3ZXIvc3JjXFxhcHBcXGN2LWpzb25cXGN2LWpzb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWpzb24vY3YtanNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2N2LWpzb24vY3YtanNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNzUlO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDk1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDUsIDIyMik7XHJcbiAgYm9yZGVyLXN0eWxlOiByaWRnZTtcclxuICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxufSIsIi5tYXQtZGlhbG9nLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzUlO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogOTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWRlO1xuICBib3JkZXItc3R5bGU6IHJpZGdlO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvJsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-json',
          templateUrl: './cv-json.component.html',
          styleUrls: ['./cv-json.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cv-list/cv-list.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/cv-list/cv-list.component.ts ***!
    \**********************************************/

  /*! exports provided: CvListComponent */

  /***/
  function srcAppCvListCvListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvListComponent", function () {
      return CvListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../api/index */
    "./src/app/api/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _order_by_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../order-by.pipe */
    "./src/app/order-by.pipe.ts");
    /* harmony import */


    var _callback_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../callback.pipe */
    "./src/app/callback.pipe.ts");

    var _c0 = function _c0(a1) {
      return ["/cvs", a1];
    };

    function CvListComponent_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cv_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", cv_r1.name + "'s CV")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, cv_r1.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cv_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", cv_r1.name + "'s CV")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, cv_r1.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cv_r1.oneLineSummary);
      }
    }

    var CvListComponent = /*#__PURE__*/function () {
      function CvListComponent(cvService, route, dataService) {
        _classCallCheck(this, CvListComponent);

        this.cvService = cvService;
        this.route = route;
        this.dataService = dataService;
      }

      _createClass(CvListComponent, [{
        key: "onKeyName",
        value: function onKeyName(event) {
          this.nameFilter = event.target.value;
        }
      }, {
        key: "onKeySummary",
        value: function onKeySummary(event) {
          this.summaryFilter = event.target.value;
        }
      }, {
        key: "filter",
        value: function filter(item, args) {
          return item == null || args[1] == null || item[args[0]] != null && item[args[0]].toUpperCase().includes(args[1].toUpperCase());
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.cvList = this.cvService.getAllCVs();
          this.route.paramMap.subscribe(function (params) {
            _this6.dataService.unsetCv();
          });
        }
      }]);

      return CvListComponent;
    }();

    CvListComponent.ɵfac = function CvListComponent_Factory(t) {
      return new (t || CvListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_index__WEBPACK_IMPORTED_MODULE_1__["CvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    CvListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvListComponent,
      selectors: [["app-cv-list"]],
      decls: 20,
      vars: 16,
      consts: [[1, "nameWidth"], ["placeholder", "Filter name ...", 3, "keyup"], ["placeholder", "Filter summary text ...", 3, "keyup"], [4, "ngFor", "ngForOf"], [3, "title", "routerLink"]],
      template: function CvListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please select from the following list of available CVs:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CvListComponent_Template_input_keyup_12_listener($event) {
            return ctx.onKeyName($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function CvListComponent_Template_input_keyup_14_listener($event) {
            return ctx.onKeySummary($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CvListComponent_tr_15_Template, 7, 10, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "orderBy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "callback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "callback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](17, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](18, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 14, ctx.cvList), ctx.filter, "name", ctx.nameFilter), ctx.filter, "oneLineSummary", ctx.summaryFilter), "name"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_order_by_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderByPipe"], _callback_pipe__WEBPACK_IMPORTED_MODULE_6__["CallbackPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\ntable[_ngcontent-%COMP%] {\n  min-width: 80%;\n  font-size: 20px;\n}\n\nth[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  border-bottom-color: black;\n  border-bottom-style: solid;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(n+3) {\n  background-color: #eff0f7;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(n+3):hover {\n  background-color: #919edd;\n  color: #fff;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: none;\n  border-bottom-width: 1px;\n  border-bottom-color: black;\n  border-bottom-style: solid;\n  width: 100%;\n  height: 100%;\n}\n\n.nameWidth[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtbGlzdC9DOlxcYXBwc1xcQ3ZWaWV3ZXJcXGNsaWVudFxcc3JjXFxtYWluXFxjdi12aWV3ZXIvc3JjXFxhcHBcXGN2LWxpc3RcXGN2LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWxpc3QvY3YtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2N2LWxpc3QvY3YtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIG1pbi13aWR0aDogODAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxudGgge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKG4rMykge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDI0MCwgMjQ3KTtcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKG4rMyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDE1OCwgMjIxKTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubmFtZVdpZHRoIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn0iLCJhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG50YWJsZSB7XG4gIG1pbi13aWR0aDogODAlO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbnRoIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG59XG5cbnRyOm50aC1jaGlsZChuKzMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmNztcbn1cblxudHI6bnRoLWNoaWxkKG4rMyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5ZWRkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubmFtZVdpZHRoIHtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-list',
          templateUrl: './cv-list.component.html',
          styleUrls: ['./cv-list.component.scss']
        }]
      }], function () {
        return [{
          type: _api_index__WEBPACK_IMPORTED_MODULE_1__["CvService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cv-login/cv-login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/cv-login/cv-login.component.ts ***!
    \************************************************/

  /*! exports provided: CvLoginComponent */

  /***/
  function srcAppCvLoginCvLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvLoginComponent", function () {
      return CvLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "errorMessage clearBoth": a0,
        "clearBoth": a1
      };
    };

    var CvLoginComponent = /*#__PURE__*/function () {
      function CvLoginComponent(dialogRef, authenticationService, formBuilder) {
        _classCallCheck(this, CvLoginComponent);

        this.dialogRef = dialogRef;
        this.authenticationService = authenticationService;
        this.formBuilder = formBuilder;
        this.loginError = false;
        this.loginForm = this.formBuilder.group({
          userName: '',
          userPassword: ''
        });
      }

      _createClass(CvLoginComponent, [{
        key: "login",
        value: function login(loginFormData) {
          this.authenticationService.login(loginFormData.userName, loginFormData.userPassword);
        }
      }, {
        key: "close",
        value: function close() {
          this.loginError = false;
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.authenticationService.getAuthenticationEventEmitter().subscribe(function (authenticated) {
            if (authenticated) {
              _this7.close();
            } else {
              _this7.loginError = true;
            }
          });
        }
      }]);

      return CvLoginComponent;
    }();

    CvLoginComponent.ɵfac = function CvLoginComponent_Factory(t) {
      return new (t || CvLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    CvLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvLoginComponent,
      selectors: [["app-cv-login"]],
      decls: 31,
      vars: 5,
      consts: [["mat-dialog-title", ""], [1, "fullWidth"], [1, "floatLeft", 2, "width", "80%"], [3, "formGroup", "ngSubmit"], ["span", "1", 2, "width", "30%"], ["span", "1", 2, "width", "2%"], ["span", "1", 2, "width", "68%"], ["id", "userName", "type", "text", "name", "userName", "formControlName", "userName", 1, "editable"], ["id", "userPassword", "type", "password", "name", "userPassword", "formControlName", "userPassword", 1, "editable"], [3, "ngClass"], ["type", "submit", 1, "mat-raised-button"], ["type", "button", 1, "mat-raised-button", 3, "click"]],
      template: function CvLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login to the CV Viewer to make changes.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CvLoginComponent_Template_form_ngSubmit_5_listener() {
            return ctx.login(ctx.loginForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "colgroup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "User name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enter valid user name and password.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvLoginComponent_Template_button_click_29_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.loginError, !ctx.loginError));
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      styles: [".errorMessage[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YtbG9naW4vQzpcXGFwcHNcXEN2Vmlld2VyXFxjbGllbnRcXHNyY1xcbWFpblxcY3Ytdmlld2VyL3NyY1xcYXBwXFxjdi1sb2dpblxcY3YtbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LWxvZ2luL2N2LWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jdi1sb2dpbi9jdi1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvck1lc3NhZ2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4iLCIuZXJyb3JNZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-login',
          templateUrl: './cv-login.component.html',
          styleUrls: ['./cv-login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cv-skills/cv-skills.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/cv-skills/cv-skills.component.ts ***!
    \**************************************************/

  /*! exports provided: CvSkillsComponent */

  /***/
  function srcAppCvSkillsCvSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvSkillsComponent", function () {
      return CvSkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cv-heading/cv-heading.component */
    "./src/app/cv-heading/cv-heading.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _cv_stars_cv_stars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../cv-stars/cv-stars.component */
    "./src/app/cv-stars/cv-stars.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _order_by_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../order-by.pipe */
    "./src/app/order-by.pipe.ts");

    function CvSkillsComponent_div_3_mat_expansion_panel_3_mat_icon_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "disable": a0
      };
    };

    function CvSkillsComponent_div_3_mat_expansion_panel_3_mat_icon_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, i_r6 <= 0 === true));
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_mat_icon_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, i_r6 >= ctx_r10.skills.skillGroups.length - 1 === true));
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_table_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "colgroup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "col", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "col", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "col", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Skill Group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSkillsComponent_div_3_mat_expansion_panel_3_table_13_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var skillGroup_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return skillGroup_r5.heading = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skillGroup_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skillGroup_r5.heading);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_th_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ability");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_th_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ability (Out of 10)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_th_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_th_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r25.type);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r25.experience);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cv-stars", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputLevel", skill_r25.ability)("inputMax", 10);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r25.notes);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_5_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return skill_r25.type = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r25.type);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_6_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return skill_r25.experience = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r25.experience);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_7_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return skill_r25.ability = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r25.ability);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_8_Template_textarea_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);

          var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return skill_r25.notes = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r25.notes);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r58.removeSkill(i_r6, j_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_10_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, j_r26 <= 0 === true));
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_10_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r64.moveSkillUp(i_r6, j_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_10_mat_icon_2_Template, 2, 3, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.dataService.editMode);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_11_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var skillGroup_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, j_r26 >= skillGroup_r5.skillSet.length - 1 === true));
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_11_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var j_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r71.moveSkillDown(i_r6, j_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_11_mat_icon_2_Template, 2, 3, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.dataService.editMode);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_1_Template, 2, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_2_Template, 2, 1, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_3_Template, 2, 2, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_4_Template, 2, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_5_Template, 2, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_6_Template, 2, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_7_Template, 2, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_8_Template, 3, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_9_Template, 4, 0, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_10_Template, 3, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_td_11_Template, 3, 1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_a_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_mat_expansion_panel_3_a_37_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);

          var i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r75.addSkill(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSkillsComponent_div_3_mat_expansion_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", null, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_mat_expansion_panel_3_Template_mat_panel_description_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          return _r7._toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_mat_expansion_panel_3_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var i_r6 = ctx.index;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r80.removeSkillGroup(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvSkillsComponent_div_3_mat_expansion_panel_3_mat_icon_7_Template, 2, 0, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_mat_expansion_panel_3_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var i_r6 = ctx.index;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r81.moveSkillGroupUp(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CvSkillsComponent_div_3_mat_expansion_panel_3_mat_icon_9_Template, 2, 3, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_mat_expansion_panel_3_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);

          var i_r6 = ctx.index;

          var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r82.moveSkillGroupDown(i_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CvSkillsComponent_div_3_mat_expansion_panel_3_mat_icon_11_Template, 2, 3, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CvSkillsComponent_div_3_mat_expansion_panel_3_table_13_Template, 12, 1, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "colgroup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "col", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Experience (years)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CvSkillsComponent_div_3_mat_expansion_panel_3_th_28_Template, 2, 0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CvSkillsComponent_div_3_mat_expansion_panel_3_th_29_Template, 2, 0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Notes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CvSkillsComponent_div_3_mat_expansion_panel_3_th_32_Template, 2, 0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CvSkillsComponent_div_3_mat_expansion_panel_3_th_33_Template, 2, 0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CvSkillsComponent_div_3_mat_expansion_panel_3_th_34_Template, 2, 0, "th", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CvSkillsComponent_div_3_mat_expansion_panel_3_tr_35_Template, 12, 11, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "orderBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CvSkillsComponent_div_3_mat_expansion_panel_3_a_37_Template, 3, 0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skillGroup_r5 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skillGroup_r5.heading, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 12, skillGroup_r5.skillSet, "seq"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.dataService.editMode);
      }
    }

    function CvSkillsComponent_div_3_a_5_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSkillsComponent_div_3_a_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSkillsComponent_div_3_a_5_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85);

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r84.addSkillGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSkillsComponent_div_3_a_5_mat_icon_1_Template, 2, 0, "mat-icon", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.dataService.editMode);
      }
    }

    function CvSkillsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSkillsComponent_div_3_mat_expansion_panel_3_Template, 38, 15, "mat-expansion-panel", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "orderBy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvSkillsComponent_div_3_a_5_Template, 2, 1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r0.skills.skillGroups, "seq"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dataService.editMode);
      }
    }

    function CvSkillsComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No skill groups provided.\n");
      }
    }

    var CvSkillsComponent = /*#__PURE__*/function () {
      function CvSkillsComponent(dataService) {
        _classCallCheck(this, CvSkillsComponent);

        this.dataService = dataService;
        this.title = "Skills";
        this.textNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CvSkillsComponent, [{
        key: "updateText",
        value: function updateText(text) {
          this.text = text;
          this.textNotify.emit(this.text);
        }
      }, {
        key: "reSequenceSkillsGroup",
        value: function reSequenceSkillsGroup() {
          var index = 0;
          this.skills.skillGroups.forEach(function (skillGroup) {
            skillGroup.seq = index++;
          });
        }
      }, {
        key: "addSkillGroup",
        value: function addSkillGroup() {
          this.skills.skillGroups.push({
            heading: "New skill group",
            skillSet: [{}]
          });
          this.reSequenceSkillsGroup();
        }
      }, {
        key: "removeSkillGroup",
        value: function removeSkillGroup(i) {
          if (this.skills.skillGroups.length == 1) {
            this.skills.skillGroups[0] = {
              heading: "New skill group",
              skillSet: [{}]
            };
          } else {
            this.skills.skillGroups.splice(i, 1);
          }

          this.reSequenceSkillsGroup();
        }
      }, {
        key: "moveSkillGroupUp",
        value: function moveSkillGroupUp(i) {
          this.skills.skillGroups.splice(i - 1, 0, this.skills.skillGroups.splice(i, 1)[0]);
          this.reSequenceSkillsGroup();
        }
      }, {
        key: "moveSkillGroupDown",
        value: function moveSkillGroupDown(i) {
          this.skills.skillGroups.splice(i + 1, 0, this.skills.skillGroups.splice(i, 1)[0]);
          this.reSequenceSkillsGroup();
        }
      }, {
        key: "reSequenceSkills",
        value: function reSequenceSkills(i) {
          var index = 0;
          this.skills.skillGroups[i].skillSet.forEach(function (skill) {
            skill.seq = index++;
          });
        }
      }, {
        key: "addSkill",
        value: function addSkill(i) {
          this.skills.skillGroups[i].skillSet.push({});
          this.reSequenceSkills(i);
        }
      }, {
        key: "removeSkill",
        value: function removeSkill(i, j) {
          if (this.skills.skillGroups[i].skillSet.length == 1) {
            this.skills.skillGroups[i].skillSet[0] = {};
          } else {
            this.skills.skillGroups[i].skillSet.splice(j, 1);
          }

          this.reSequenceSkills(i);
        }
      }, {
        key: "moveSkillUp",
        value: function moveSkillUp(i, j) {
          this.skills.skillGroups[i].skillSet.splice(j - 1, 0, this.skills.skillGroups[i].skillSet.splice(j, 1)[0]);
          this.reSequenceSkills(i);
        }
      }, {
        key: "moveSkillDown",
        value: function moveSkillDown(i, j) {
          this.skills.skillGroups[i].skillSet.splice(j + 1, 0, this.skills.skillGroups[i].skillSet.splice(j, 1)[0]);
          this.reSequenceSkills(i);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvSkillsComponent;
    }();

    CvSkillsComponent.ɵfac = function CvSkillsComponent_Factory(t) {
      return new (t || CvSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    CvSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvSkillsComponent,
      selectors: [["app-cv-skills"]],
      inputs: {
        name: "name",
        text: "text",
        image: "image",
        skills: "skills"
      },
      outputs: {
        textNotify: "textNotify"
      },
      decls: 6,
      vars: 6,
      consts: [[3, "title", "name", "text", "image", "textNotify"], [4, "ngIf", "ngIfElse"], ["noDetails", ""], [1, "mat-accordion-div"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], ["panelH", ""], [3, "click"], ["matTooltip", "Remove skill group", 4, "ngIf"], ["matTooltip", "Move up", "aria-hidden", "false", 3, "ngClass", 4, "ngIf"], ["matTooltip", "Move down", "aria-hidden", "false", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], [1, "fullWidth"], ["span", "1", 2, "width", "10%"], ["span", "1", 2, "width", "60%"], ["matTooltip", "Remove skill group"], ["matTooltip", "Move up", "aria-hidden", "false", 3, "ngClass"], ["matTooltip", "Move down", "aria-hidden", "false", 3, "ngClass"], ["span", "1", 2, "width", "20%"], ["span", "1", 2, "width", "2%"], ["span", "1", 2, "width", "78"], ["type", "text", "name", "skillGroup", 1, "editable", 3, "ngModel", "ngModelChange"], ["class", "centre", 4, "ngIf"], ["class", "tdNoWrap centre", 4, "ngIf"], [1, "centre"], [1, "tdNoWrap", "centre"], [3, "inputLevel", "inputMax"], ["type", "text", "name", "type", 1, "editable", 3, "ngModel", "ngModelChange"], ["type", "number", "step", "0.5", "min", "0", "name", "experience", 1, "editable", 3, "ngModel", "ngModelChange"], ["type", "number", "step", "0.5", "max", "10", "min", "0", "name", "ability", 1, "editable", 3, "ngModel", "ngModelChange"], [1, "editable"], ["name", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["matTooltip", "Remove skill"], ["matTooltip", "Add new skill"], ["matTooltip", "Add new skill group", 4, "ngIf"], ["matTooltip", "Add new skill group"]],
      template: function CvSkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cv-heading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvSkillsComponent_Template_app_cv_heading_textNotify_0_listener($event) {
            return ctx.updateText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skill groups:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSkillsComponent_div_3_Template, 8, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvSkillsComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("name", ctx.name)("text", ctx.text)("image", ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skills.skillGroups && ctx.skills.skillGroups[0])("ngIfElse", _r1);
        }
      },
      directives: [_cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_2__["CvHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _cv_stars_cv_stars_component__WEBPACK_IMPORTED_MODULE_8__["CvStarsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]],
      pipes: [_order_by_pipe__WEBPACK_IMPORTED_MODULE_11__["OrderByPipe"]],
      styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #919edd;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #eff0f7;\n}\n\n.tdNoWrap[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  font-weight: bold;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Ytc2tpbGxzL0M6XFxhcHBzXFxDdlZpZXdlclxcY2xpZW50XFxzcmNcXG1haW5cXGN2LXZpZXdlci9zcmNcXGFwcFxcY3Ytc2tpbGxzXFxjdi1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LXNraWxscy9jdi1za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlFQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jdi1za2lsbHMvY3Ytc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoLCB0ZCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NSwgMTU4LCAyMjEpO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDI0MCwgMjQ3KTtcclxufVxyXG5cclxuLnRkTm9XcmFwIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxubWF0LWljb246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcclxufSIsInRhYmxlLCB0aCwgdGQge1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkxOWVkZDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmNztcbn1cblxuLnRkTm9XcmFwIHtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbm1hdC1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvSkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-skills',
          templateUrl: './cv-skills.component.html',
          styleUrls: ['./cv-skills.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        skills: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        textNotify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv-stars/cv-stars.component.ts":
  /*!************************************************!*\
    !*** ./src/app/cv-stars/cv-stars.component.ts ***!
    \************************************************/

  /*! exports provided: CvStarsComponent */

  /***/
  function srcAppCvStarsCvStarsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvStarsComponent", function () {
      return CvStarsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function CvStarsComponent_div_0_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_border");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
      }
    }

    function CvStarsComponent_div_0_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_half");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
      }
    }

    function CvStarsComponent_div_0_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
      }
    }

    function CvStarsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvStarsComponent_div_0_mat_icon_1_Template, 2, 1, "mat-icon", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvStarsComponent_div_0_mat_icon_2_Template, 2, 1, "mat-icon", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvStarsComponent_div_0_mat_icon_3_Template, 2, 1, "mat-icon", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level < i_r2 + 0.5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 + 0.5 <= ctx_r0.level && ctx_r0.level < i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.level >= i_r2 + 1);
      }
    }

    var _c0 = function _c0() {
      return [];
    };

    var CvStarsComponent = /*#__PURE__*/function () {
      function CvStarsComponent() {
        _classCallCheck(this, CvStarsComponent);

        this.count = 5;
      }

      _createClass(CvStarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.level = this.count * this.inputLevel / this.inputMax;
        }
      }]);

      return CvStarsComponent;
    }();

    CvStarsComponent.ɵfac = function CvStarsComponent_Factory(t) {
      return new (t || CvStarsComponent)();
    };

    CvStarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvStarsComponent,
      selectors: [["app-cv-stars"]],
      inputs: {
        inputLevel: "inputLevel",
        inputMax: "inputMax",
        count: "count"
      },
      decls: 1,
      vars: 2,
      consts: [[4, "ngFor", "ngForOf"], ["class", "icon", 3, "inline", 4, "ngIf"], [1, "icon", 3, "inline"]],
      template: function CvStarsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CvStarsComponent_div_0_Template, 4, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0).constructor(ctx.count));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: [".icon[_ngcontent-%COMP%] {\n  vertical-align: top;\n  float: left;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Ytc3RhcnMvQzpcXGFwcHNcXEN2Vmlld2VyXFxjbGllbnRcXHNyY1xcbWFpblxcY3Ytdmlld2VyL3NyY1xcYXBwXFxjdi1zdGFyc1xcY3Ytc3RhcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LXN0YXJzL2N2LXN0YXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY3Ytc3RhcnMvY3Ytc3RhcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn0iLCIuaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvStarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-stars',
          templateUrl: './cv-stars.component.html',
          styleUrls: ['./cv-stars.component.scss']
        }]
      }], function () {
        return [];
      }, {
        inputLevel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inputMax: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        count: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv-summary/cv-summary.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/cv-summary/cv-summary.component.ts ***!
    \****************************************************/

  /*! exports provided: CvSummaryComponent */

  /***/
  function srcAppCvSummaryCvSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvSummaryComponent", function () {
      return CvSummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cv-heading/cv-heading.component */
    "./src/app/cv-heading/cv-heading.component.ts");
    /* harmony import */


    var _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common/datepicker/datepicker.component */
    "./src/app/common/datepicker/datepicker.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _cv_stars_cv_stars_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../cv-stars/cv-stars.component */
    "./src/app/cv-stars/cv-stars.component.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");

    function CvSummaryComponent_input_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_input_22_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.header.currentPosition = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.header.currentPosition);
      }
    }

    function CvSummaryComponent_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.header.currentPosition);
      }
    }

    function CvSummaryComponent_input_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_input_30_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.header.nationality = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.header.nationality);
      }
    }

    function CvSummaryComponent_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.header.nationality);
      }
    }

    function CvSummaryComponent_input_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_input_38_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.header.maritalStatus = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.header.maritalStatus);
      }
    }

    function CvSummaryComponent_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.header.maritalStatus);
      }
    }

    function CvSummaryComponent_div_52_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_div_52_input_1_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.header.addressLines[i_r26] = $event;
        })("change", function CvSummaryComponent_div_52_input_1_Template_input_change_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var addressLine_r25 = ctx_r35.$implicit;
          var i_r26 = ctx_r35.index;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.updateAddressLine(addressLine_r25, i_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.header.addressLines[i_r26]);
      }
    }

    function CvSummaryComponent_div_52_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_div_52_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_div_52_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var addressLine_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](addressLine_r25);
      }
    }

    function CvSummaryComponent_div_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSummaryComponent_div_52_input_1_Template, 1, 1, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSummaryComponent_div_52_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var i_r26 = ctx.index;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.addAddressLine(i_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSummaryComponent_div_52_mat_icon_3_Template, 2, 0, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSummaryComponent_div_52_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var i_r26 = ctx.index;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.removeAddressLine(i_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvSummaryComponent_div_52_mat_icon_5_Template, 2, 0, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvSummaryComponent_div_52_span_6_Template, 2, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.dataService.editMode);
      }
    }

    function CvSummaryComponent_input_59_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_input_59_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.header.emailAddress = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.header.emailAddress);
      }
    }

    function CvSummaryComponent_span_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.header.emailAddress);
      }
    }

    function CvSummaryComponent_input_67_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_input_67_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.header.phoneMobile = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.header.phoneMobile);
      }
    }

    function CvSummaryComponent_span_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.header.phoneMobile);
      }
    }

    function CvSummaryComponent_div_72_table_1_td_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-datepicker", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvSummaryComponent_div_72_table_1_td_17_Template_app_datepicker_dateNotify_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var i_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.updateStartDate(i_r46, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", recentWork_r45.startDate);
      }
    }

    function CvSummaryComponent_div_72_table_1_td_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-datepicker", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvSummaryComponent_div_72_table_1_td_23_Template_app_datepicker_dateNotify_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var i_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.updateEndDate(i_r46, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", recentWork_r45.endDate);
      }
    }

    function CvSummaryComponent_div_72_table_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "colgroup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "col", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "col", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "col", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_div_72_table_1_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63);

          var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return recentWork_r45.employer = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Start Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CvSummaryComponent_div_72_table_1_td_17_Template, 2, 1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "End Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CvSummaryComponent_div_72_table_1_td_23_Template, 2, 1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", recentWork_r45.employer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.dataService.editMode);
      }
    }

    function CvSummaryComponent_div_72_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentWork_r45.employer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ( ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, recentWork_r45.startDate, "dd-MM-yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, recentWork_r45.endDate, "dd-MM-yyyy"), " ) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recentWork_r45.notes);
      }
    }

    function CvSummaryComponent_div_72_mat_form_field_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_div_72_mat_form_field_3_Template_textarea_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return recentWork_r45.notes = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", recentWork_r45.notes);
      }
    }

    function CvSummaryComponent_div_72_div_6_input_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_div_72_div_6_input_1_Template_input_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

          var j_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return recentWork_r45.roles[j_r71] = $event;
        })("change", function CvSummaryComponent_div_72_div_6_input_1_Template_input_change_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var role_r70 = ctx_r81.$implicit;
          var j_r71 = ctx_r81.index;

          var i_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.updateRole(role_r70, i_r46, j_r71);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var recentWork_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", recentWork_r45.roles[j_r71]);
      }
    }

    function CvSummaryComponent_div_72_div_6_mat_icon_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_div_72_div_6_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_div_72_div_6_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var role_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("* ", role_r70, ";");
      }
    }

    function CvSummaryComponent_div_72_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSummaryComponent_div_72_div_6_input_1_Template, 1, 1, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSummaryComponent_div_72_div_6_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var j_r71 = ctx.index;

          var i_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.addRole(i_r46, j_r71);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSummaryComponent_div_72_div_6_mat_icon_3_Template, 2, 0, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSummaryComponent_div_72_div_6_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r88);

          var j_r71 = ctx.index;

          var i_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.removeRole(i_r46, j_r71);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvSummaryComponent_div_72_div_6_mat_icon_5_Template, 2, 0, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvSummaryComponent_div_72_div_6_span_6_Template, 2, 1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r50.dataService.editMode);
      }
    }

    function CvSummaryComponent_div_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSummaryComponent_div_72_table_1_Template, 24, 3, "table", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSummaryComponent_div_72_div_2_Template, 11, 10, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSummaryComponent_div_72_mat_form_field_3_Template, 2, 1, "mat-form-field", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Roles and Responsibilities:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvSummaryComponent_div_72_div_6_Template, 7, 4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recentWork_r45 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", recentWork_r45.roles)("ngForTrackBy", ctx_r11.trackByFn);
      }
    }

    function CvSummaryComponent_th_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ability");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_th_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ability (Out of 10)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_th_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_th_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_th_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CvSummaryComponent_tr_87_td_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_tr_87_td_1_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102);

          var skill_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return skill_r91.ability = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r91.ability);
      }
    }

    function CvSummaryComponent_tr_87_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cv-stars", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputLevel", skill_r91.ability)("inputMax", 10);
      }
    }

    function CvSummaryComponent_tr_87_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r91.skill);
      }
    }

    function CvSummaryComponent_tr_87_td_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CvSummaryComponent_tr_87_td_4_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r108);

          var skill_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return skill_r91.skill = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", skill_r91.skill);
      }
    }

    function CvSummaryComponent_tr_87_td_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSummaryComponent_tr_87_td_5_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

          var i_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r110.removeSkill(i_r92);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "disable": a0
      };
    };

    function CvSummaryComponent_tr_87_td_6_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, i_r92 <= 0 === true));
      }
    }

    function CvSummaryComponent_tr_87_td_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSummaryComponent_tr_87_td_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117);

          var i_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r115.moveSkillUp(i_r92);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSummaryComponent_tr_87_td_6_mat_icon_2_Template, 2, 3, "mat-icon", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r98.dataService.editMode);
      }
    }

    function CvSummaryComponent_tr_87_td_7_mat_icon_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_down");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

        var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, i_r92 >= ctx_r118.header.keySkills.length - 1 === true));
      }
    }

    function CvSummaryComponent_tr_87_td_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSummaryComponent_tr_87_td_7_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var i_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r120.moveSkillDown(i_r92);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSummaryComponent_tr_87_td_7_mat_icon_2_Template, 2, 3, "mat-icon", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r99.dataService.editMode);
      }
    }

    function CvSummaryComponent_tr_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CvSummaryComponent_tr_87_td_1_Template, 2, 1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CvSummaryComponent_tr_87_td_2_Template, 2, 2, "td", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvSummaryComponent_tr_87_td_3_Template, 2, 1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CvSummaryComponent_tr_87_td_4_Template, 2, 1, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CvSummaryComponent_tr_87_td_5_Template, 4, 0, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CvSummaryComponent_tr_87_td_6_Template, 3, 1, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvSummaryComponent_tr_87_td_7_Template, 3, 1, "td", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.dataService.editMode);
      }
    }

    function CvSummaryComponent_a_88_Template(rf, ctx) {
      if (rf & 1) {
        var _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CvSummaryComponent_a_88_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124);

          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r123.addSkill();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CvSummaryComponent = /*#__PURE__*/function () {
      function CvSummaryComponent(dataService) {
        _classCallCheck(this, CvSummaryComponent);

        this.dataService = dataService;
        this.title = "Summary";
        this.textNotify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CvSummaryComponent, [{
        key: "updateDate",
        value: function updateDate(date) {
          this.header.dateOfBirth = date;
        }
      }, {
        key: "updateText",
        value: function updateText(text) {
          this.text = text;
          this.textNotify.emit(this.text);
        }
      }, {
        key: "updateAddressLine",
        value: function updateAddressLine(addressLine, i) {
          this.header.addressLines[i] = addressLine;
        }
      }, {
        key: "addAddressLine",
        value: function addAddressLine(i) {
          this.header.addressLines.splice(i + 1, 0, "");
        }
      }, {
        key: "removeAddressLine",
        value: function removeAddressLine(i) {
          if (this.header.addressLines.length == 1) {
            this.header.addressLines[0] = "";
          } else {
            this.header.addressLines.splice(i, 1);
          }
        }
      }, {
        key: "updateStartDate",
        value: function updateStartDate(i, date) {
          this.header.recentWork[i].startDate = date;
        }
      }, {
        key: "updateEndDate",
        value: function updateEndDate(i, date) {
          this.header.recentWork[i].endDate = date;
        }
      }, {
        key: "updateRole",
        value: function updateRole(role, i, j) {
          this.header.recentWorkExperience[i].roles[j] = role;
        }
      }, {
        key: "addRole",
        value: function addRole(i, j) {
          this.header.recentWorkExperience[i].roles.splice(j + 1, 0, "");
        }
      }, {
        key: "removeRole",
        value: function removeRole(i, j) {
          if (this.header.recentWorkExperience[i].roles.length == 1) {
            this.header.recentWorkExperience[i].roles[0] = "";
          } else {
            this.header.recentWorkExperience[i].roles.splice(j, 1);
          }
        }
      }, {
        key: "addSkill",
        value: function addSkill() {
          this.header.keySkills.push({});
        }
      }, {
        key: "removeSkill",
        value: function removeSkill(i) {
          if (this.header.keySkills.length == 1) {
            this.header.keySkills[0] = "";
          } else {
            this.header.keySkills.splice(i, 1);
          }
        }
      }, {
        key: "moveSkillUp",
        value: function moveSkillUp(i) {
          this.header.keySkills.splice(i - 1, 0, this.header.keySkills.splice(i, 1)[0]);
        }
      }, {
        key: "moveSkillDown",
        value: function moveSkillDown(i) {
          this.header.keySkills.splice(i + 1, 0, this.header.keySkills.splice(i, 1)[0]);
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return index;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CvSummaryComponent;
    }();

    CvSummaryComponent.ɵfac = function CvSummaryComponent_Factory(t) {
      return new (t || CvSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]));
    };

    CvSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvSummaryComponent,
      selectors: [["app-cv-summary"]],
      inputs: {
        name: "name",
        text: "text",
        image: "image",
        header: "header"
      },
      outputs: {
        textNotify: "textNotify"
      },
      decls: 91,
      vars: 25,
      consts: [[3, "title", "name", "text", "image", "textNotify"], [1, "fullWidth"], [1, "floatLeft", 2, "width", "40%"], ["span", "1", 2, "width", "30%"], ["span", "1", 2, "width", "2%"], ["span", "1", 2, "width", "68%"], [3, "date", "dateNotify"], ["type", "text", "name", "currentPosition", "class", "editable", 3, "ngModel", "ngModelChange", 4, "ngIf"], [4, "ngIf"], ["type", "text", "name", "nationality", "class", "editable", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "name", "maritalStatus", "class", "editable", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "floatRight", 2, "width", "60%"], ["span", "1", 2, "width", "20%"], ["span", "1", 2, "width", "78%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "email", "name", "emailAddress", "class", "editable", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "tel", "name", "phoneMobile", "class", "editable", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "clearBoth", 2, "width", "90%"], [4, "ngFor", "ngForOf"], [1, "fullWidth", "alignLeft"], ["span", "1", 2, "width", "5%"], ["span", "1", 2, "width", "70%"], [3, "click", 4, "ngIf"], ["type", "text", "name", "currentPosition", 1, "editable", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "nationality", 1, "editable", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "maritalStatus", 1, "editable", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "addressLine", "class", "editable", "style", "width:80%", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], [3, "click"], ["type", "text", "name", "addressLine", 1, "editable", 2, "width", "80%", 3, "ngModel", "ngModelChange", "change"], ["type", "email", "name", "emailAddress", 1, "editable", 3, "ngModel", "ngModelChange"], ["type", "tel", "name", "phoneMobile", 1, "editable", 3, "ngModel", "ngModelChange"], ["class", "fullWidth", 4, "ngIf"], ["class", "editable", 4, "ngIf"], ["span", "1", 2, "width", "78"], ["type", "text", "name", "name", 1, "editable", 3, "ngModel", "ngModelChange"], [1, "floatLeft", "boldText"], [1, "dateLight", "floatLeft"], [1, "clearBoth"], [1, "editable"], ["name", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "role", "class", "editable", "style", "width:80%", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "text", "name", "role", 1, "editable", 2, "width", "80%", 3, "ngModel", "ngModelChange", "change"], ["class", "tdNoWrap centre", 4, "ngIf"], ["class", "centre", 4, "ngIf"], ["type", "number", "step", "0.5", "max", "10", "min", "0", "name", "ability", 1, "editable", 3, "ngModel", "ngModelChange"], [1, "tdNoWrap", "centre"], [3, "inputLevel", "inputMax"], ["type", "text", "name", "skill", 1, "editable", 3, "ngModel", "ngModelChange"], [1, "centre"], ["matTooltip", "Remove skill"], ["matTooltip", "Move up", "aria-hidden", "false", 3, "ngClass", 4, "ngIf"], ["matTooltip", "Move up", "aria-hidden", "false", 3, "ngClass"], ["matTooltip", "Move down", "aria-hidden", "false", 3, "ngClass", 4, "ngIf"], ["matTooltip", "Move down", "aria-hidden", "false", 3, "ngClass"], ["matTooltip", "Add new skill"]],
      template: function CvSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cv-heading", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvSummaryComponent_Template_app_cv_heading_textNotify_0_listener($event) {
            return ctx.updateText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "colgroup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date of Birth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-datepicker", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateNotify", function CvSummaryComponent_Template_app_datepicker_dateNotify_15_listener($event) {
            return ctx.updateDate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Current Position");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CvSummaryComponent_input_22_Template, 1, 1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CvSummaryComponent_span_23_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Nationality");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, CvSummaryComponent_input_30_Template, 1, 1, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CvSummaryComponent_span_31_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Marital Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CvSummaryComponent_input_38_Template, 1, 1, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CvSummaryComponent_span_39_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "colgroup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, CvSummaryComponent_div_52_Template, 7, 4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "E-Mail Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, CvSummaryComponent_input_59_Template, 1, 1, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, CvSummaryComponent_span_60_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Mobile Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, CvSummaryComponent_input_67_Template, 1, 1, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, CvSummaryComponent_span_68_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Recent Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, CvSummaryComponent_div_72_Template, 9, 5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Key Skills and Competencies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "colgroup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "col", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, CvSummaryComponent_th_80_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, CvSummaryComponent_th_81_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Skill");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CvSummaryComponent_th_84_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CvSummaryComponent_th_85_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, CvSummaryComponent_th_86_Template, 2, 0, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, CvSummaryComponent_tr_87_Template, 8, 7, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, CvSummaryComponent_a_88_Template, 3, 0, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("name", ctx.name)("text", ctx.text)("image", ctx.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.header.dateOfBirth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.header.addressLines)("ngForTrackBy", ctx.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.header.recentWorkExperience);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.header.keySkills);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode);
        }
      },
      directives: [_cv_heading_cv_heading_component__WEBPACK_IMPORTED_MODULE_2__["CvHeadingComponent"], _common_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__["DatePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _cv_stars_cv_stars_component__WEBPACK_IMPORTED_MODULE_9__["CvStarsComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  font-weight: bold;\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Ytc3VtbWFyeS9DOlxcYXBwc1xcQ3ZWaWV3ZXJcXGNsaWVudFxcc3JjXFxtYWluXFxjdi12aWV3ZXIvc3JjXFxhcHBcXGN2LXN1bW1hcnlcXGN2LXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2LXN1bW1hcnkvY3Ytc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpRUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY3Ytc3VtbWFyeS9jdi1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbm1hdC1pY29uOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbn0iLCJ0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbm1hdC1pY29uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv-summary',
          templateUrl: './cv-summary.component.html',
          styleUrls: ['./cv-summary.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        textNotify: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cv/cv.component.ts":
  /*!************************************!*\
    !*** ./src/app/cv/cv.component.ts ***!
    \************************************/

  /*! exports provided: CvComponent */

  /***/
  function srcAppCvCvComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvComponent", function () {
      return CvComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/index */
    "./src/app/api/index.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _cv_summary_cv_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../cv-summary/cv-summary.component */
    "./src/app/cv-summary/cv-summary.component.ts");
    /* harmony import */


    var _cv_education_cv_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../cv-education/cv-education.component */
    "./src/app/cv-education/cv-education.component.ts");
    /* harmony import */


    var _cv_skills_cv_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../cv-skills/cv-skills.component */
    "./src/app/cv-skills/cv-skills.component.ts");
    /* harmony import */


    var _cv_employment_cv_employment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../cv-employment/cv-employment.component */
    "./src/app/cv-employment/cv-employment.component.ts");
    /* harmony import */


    var _cv_interests_cv_interests_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../cv-interests/cv-interests.component */
    "./src/app/cv-interests/cv-interests.component.ts");
    /* harmony import */


    var _cv_bottom_bar_cv_bottom_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../cv-bottom-bar/cv-bottom-bar.component */
    "./src/app/cv-bottom-bar/cv-bottom-bar.component.ts");

    function CvComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Summary");
      }
    }

    function CvComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Education");
      }
    }

    function CvComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Skills");
      }
    }

    function CvComponent_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Employment");
      }
    }

    function CvComponent_ng_template_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Interests");
      }
    }

    var CvComponent = /*#__PURE__*/function () {
      function CvComponent(route, cvService, dataService) {
        _classCallCheck(this, CvComponent);

        this.route = route;
        this.cvService = cvService;
        this.dataService = dataService;
      }

      _createClass(CvComponent, [{
        key: "updateSummaryText",
        value: function updateSummaryText(text) {
          this.cv.summary = text;
        }
      }, {
        key: "updateEducationText",
        value: function updateEducationText(text) {
          this.cv.education.notes = text;
        }
      }, {
        key: "updateSkillsText",
        value: function updateSkillsText(text) {
          this.cv.skills.notes = text;
        }
      }, {
        key: "updateEmploymentText",
        value: function updateEmploymentText(text) {
          this.cv.employment.notes = text;
        }
      }, {
        key: "updateInterestsText",
        value: function updateInterestsText(text) {
          this.cv.interests = [];
          this.cv.interests.push(text);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.route.paramMap.subscribe(function (params) {
            _this8.cvService.getCvByName(params.get('cvName')).subscribe(function (cv) {
              _this8.cv = cv;

              _this8.dataService.setCv(_this8.cv);
            });
          });
        }
      }]);

      return CvComponent;
    }();

    CvComponent.ɵfac = function CvComponent_Factory(t) {
      return new (t || CvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_index__WEBPACK_IMPORTED_MODULE_2__["CvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]));
    };

    CvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvComponent,
      selectors: [["app-cv"]],
      decls: 23,
      vars: 22,
      consts: [["id", "main-content"], ["mat-tab-label", ""], [1, "mat-tab-content"], [3, "name", "text", "image", "header", "textNotify"], [3, "name", "text", "image", "education", "textNotify"], [3, "name", "text", "image", "skills", "textNotify"], [3, "name", "text", "image", "employment", "textNotify"], [3, "name", "text", "image", "interests", "textNotify"], [3, "footnote", "sourceURL"]],
      template: function CvComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CvComponent_ng_template_3_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-cv-summary", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvComponent_Template_app_cv_summary_textNotify_5_listener($event) {
            return ctx.updateSummaryText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CvComponent_ng_template_7_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-cv-education", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvComponent_Template_app_cv_education_textNotify_9_listener($event) {
            return ctx.updateEducationText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CvComponent_ng_template_11_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-cv-skills", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvComponent_Template_app_cv_skills_textNotify_13_listener($event) {
            return ctx.updateSkillsText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CvComponent_ng_template_15_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-cv-employment", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvComponent_Template_app_cv_employment_textNotify_17_listener($event) {
            return ctx.updateEmploymentText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-tab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CvComponent_ng_template_19_Template, 1, 0, "ng-template", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-cv-interests", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textNotify", function CvComponent_Template_app_cv_interests_textNotify_21_listener($event) {
            return ctx.updateInterestsText($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-cv-bottom-bar", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.cv.name)("text", ctx.cv.summary)("image", ctx.cv.image)("header", ctx.cv.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.cv.name)("text", ctx.cv.education.notes)("image", ctx.cv.image)("education", ctx.cv.education);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.cv.name)("text", ctx.cv.skills.notes)("image", ctx.cv.image)("skills", ctx.cv.skills);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.cv.name)("text", ctx.cv.employment.notes)("image", ctx.cv.image)("employment", ctx.cv.employment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.cv.name)("text", ctx.cv.summary)("image", ctx.cv.image)("interests", ctx.cv.interests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footnote", ctx.cv.footnote)("sourceURL", ctx.cv.sourceURL);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabLabel"], _cv_summary_cv_summary_component__WEBPACK_IMPORTED_MODULE_5__["CvSummaryComponent"], _cv_education_cv_education_component__WEBPACK_IMPORTED_MODULE_6__["CvEducationComponent"], _cv_skills_cv_skills_component__WEBPACK_IMPORTED_MODULE_7__["CvSkillsComponent"], _cv_employment_cv_employment_component__WEBPACK_IMPORTED_MODULE_8__["CvEmploymentComponent"], _cv_interests_cv_interests_component__WEBPACK_IMPORTED_MODULE_9__["CvInterestsComponent"], _cv_bottom_bar_cv_bottom_bar_component__WEBPACK_IMPORTED_MODULE_10__["CvBottomBarComponent"]],
      styles: ["[_nghost-%COMP%]     .mat-tab-group {\n  padding-top: 40px;\n  flex-direction: row;\n}\n[_nghost-%COMP%]     .mat-tab-header-pagination {\n  display: none !important;\n}\n[_nghost-%COMP%]     .mat-tab-labels {\n  flex-direction: column;\n  background-color: #eff0f7;\n}\n[_nghost-%COMP%]     .mat-tab-label:hover {\n  background-color: #919edd;\n  color: #fff;\n}\n[_nghost-%COMP%]     .mat-tab-label-active {\n  background-color: #36458f;\n  color: #fff;\n}\n[_nghost-%COMP%]     .mat-ink-bar {\n  height: 100%;\n  left: 98% !important;\n}\n[_nghost-%COMP%]     .mat-tab-content {\n  padding-left: 20px;\n  max-height: 680px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvQzpcXGFwcHNcXEN2Vmlld2VyXFxjbGllbnRcXHNyY1xcbWFpblxcY3Ytdmlld2VyL3NyY1xcYXBwXFxjdlxcY3YuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0RaO0FER1E7RUFDSSx3QkFBQTtBQ0RaO0FER1E7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FDRFo7QURJVTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0ZkO0FES1M7RUFDSyx5QkFBQTtFQUNBLFdBQUE7QUNIZDtBREtRO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDSFo7QURLUTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNIViIsImZpbGUiOiJzcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAubWF0LXRhYi1ncm91cCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC10YWItbGFiZWxzIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjQwLCAyNDcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxNTgsIDIyMSk7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NCwgNjksIDE0Myk7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtaW5rLWJhciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogOTglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtdGFiLWNvbnRlbnQge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogNjgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwIHtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmNztcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MTllZGQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjQ1OGY7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtaW5rLWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogOTglICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWF4LWhlaWdodDogNjgwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cv',
          templateUrl: './cv.component.html',
          styleUrls: ['./cv.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _api_index__WEBPACK_IMPORTED_MODULE_2__["CvService"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data.service.ts":
  /*!*********************************!*\
    !*** ./src/app/data.service.ts ***!
    \*********************************/

  /*! exports provided: DataService */

  /***/
  function srcAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _cv_json_cv_json_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cv-json/cv-json.component */
    "./src/app/cv-json/cv-json.component.ts");
    /* harmony import */


    var _api_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api/index */
    "./src/app/api/index.ts");

    var DataService = /*#__PURE__*/function () {
      function DataService(cvService, dialog) {
        _classCallCheck(this, DataService);

        this.cvService = cvService;
        this.dialog = dialog;
        this.editMode = false;
      }

      _createClass(DataService, [{
        key: "switchMode",
        value: function switchMode() {
          this.editMode = !this.editMode;
        }
      }, {
        key: "setEditOff",
        value: function setEditOff() {
          this.editMode = false;
        }
      }, {
        key: "hasCv",
        value: function hasCv() {
          return this.cv != null;
        }
      }, {
        key: "setCv",
        value: function setCv(cv) {
          this.cv = cv;
        }
      }, {
        key: "unsetCv",
        value: function unsetCv() {
          this.setCv(null);
          this.editMode = false;
        }
      }, {
        key: "copyCv",
        value: function copyCv() {
          this.openDialog();
        }
      }, {
        key: "saveCv",
        value: function saveCv() {
          this.cvService.putCv(this.cv).subscribe(function (response) {});
          this.editMode = false;
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.height = "600px";
          dialogConfig.width = "1000px";
          dialogConfig.data = this.cv;
          this.dialog.open(_cv_json_cv_json_component__WEBPACK_IMPORTED_MODULE_2__["CvJsonComponent"], dialogConfig);
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_index__WEBPACK_IMPORTED_MODULE_3__["CvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _api_index__WEBPACK_IMPORTED_MODULE_3__["CvService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/order-by-date.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/order-by-date.pipe.ts ***!
    \***************************************/

  /*! exports provided: OrderByDatePipe */

  /***/
  function srcAppOrderByDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderByDatePipe", function () {
      return OrderByDatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderByDatePipe = /*#__PURE__*/function () {
      function OrderByDatePipe() {
        _classCallCheck(this, OrderByDatePipe);
      }

      _createClass(OrderByDatePipe, [{
        key: "transform",
        value: function transform(array, prop) {
          return array == null ? array : array.sort(function (a, b) {
            return new Date(a[prop]) < new Date(b[prop]) ? 1 : new Date(a[prop]) === new Date(b[prop]) ? 0 : -1;
          });
        }
      }]);

      return OrderByDatePipe;
    }();

    OrderByDatePipe.ɵfac = function OrderByDatePipe_Factory(t) {
      return new (t || OrderByDatePipe)();
    };

    OrderByDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "orderByDate",
      type: OrderByDatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'orderByDate'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/order-by.pipe.ts":
  /*!**********************************!*\
    !*** ./src/app/order-by.pipe.ts ***!
    \**********************************/

  /*! exports provided: OrderByPipe */

  /***/
  function srcAppOrderByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderByPipe", function () {
      return OrderByPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderByPipe = /*#__PURE__*/function () {
      function OrderByPipe() {
        _classCallCheck(this, OrderByPipe);
      }

      _createClass(OrderByPipe, [{
        key: "transform",
        value: function transform(array, prop) {
          return array == null ? array : array.sort(function (a, b) {
            return a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1;
          });
        }
      }]);

      return OrderByPipe;
    }();

    OrderByPipe.ɵfac = function OrderByPipe_Factory(t) {
      return new (t || OrderByPipe)();
    };

    OrderByPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "orderBy",
      type: OrderByPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderByPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'orderBy'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-bar/top-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _cv_login_cv_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cv-login/cv-login.component */
    "./src/app/cv-login/cv-login.component.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../authentication.service */
    "./src/app/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TopBarComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_a_8_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.login();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "face");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TopBarComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_a_9_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "face");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("matTooltip", "", ctx_r1.authenticationService.userName, " - Logout");
      }
    }

    function TopBarComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_a_10_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.switchMode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TopBarComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_a_11_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.saveCv();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TopBarComponent_a_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_a_12_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.copyCv();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "content_copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent(dataService, authenticationService, dialog) {
        _classCallCheck(this, TopBarComponent);

        this.dataService = dataService;
        this.authenticationService = authenticationService;
        this.dialog = dialog;
      }

      _createClass(TopBarComponent, [{
        key: "switchMode",
        value: function switchMode() {
          this.dataService.switchMode();
        }
      }, {
        key: "copyCv",
        value: function copyCv() {
          this.dataService.copyCv();
        }
      }, {
        key: "saveCv",
        value: function saveCv() {
          this.dataService.saveCv();
        }
      }, {
        key: "login",
        value: function login() {
          this.openDialog();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.dataService.setEditOff();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialog",
        value: function openDialog() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.height = "220px";
          dialogConfig.width = "450px";
          this.dialog.open(_cv_login_cv_login_component__WEBPACK_IMPORTED_MODULE_2__["CvLoginComponent"], dialogConfig);
        }
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 13,
      vars: 9,
      consts: [[1, "topBar"], [1, "topBarText"], [3, "routerLink"], ["matTooltip", "Home - show CV list", "aria-hidden", "false"], [3, "click", 4, "ngIf"], [3, "click"], ["matTooltip", "Login", "aria-hidden", "false", 1, "loggedOut"], ["aria-hidden", "false", 3, "matTooltip"], ["matTooltip", "Toggle edit mode", "aria-hidden", "false"], ["matTooltip", "Save CV", "aria-hidden", "false"], ["matTooltip", "Copy CV JSON", "aria-hidden", "false"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CV Viewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TopBarComponent_a_8_Template, 3, 0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TopBarComponent_a_9_Template, 3, 1, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TopBarComponent_a_10_Template, 3, 0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TopBarComponent_a_11_Template, 3, 0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TopBarComponent_a_12_Template, 3, 0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticationService.authenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticationService.authenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.hasCv() && ctx.authenticationService.authenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode && ctx.authenticationService.authenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataService.editMode && ctx.authenticationService.authenticated);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #7a8add;\n}\n\n.topBar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 1;\n  padding-top: 10px;\n  width: 95%;\n  height: 40px;\n  background-color: white;\n  color: #36458f;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: #36458f;\n}\n\n.topBarText[_ngcontent-%COMP%] {\n  font-size: 50%;\n  float: left;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  float: right;\n  padding-right: 1%;\n}\n\nmat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.loggedOut[_ngcontent-%COMP%] {\n  color: #969ef0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci9DOlxcYXBwc1xcQ3ZWaWV3ZXJcXGNsaWVudFxcc3JjXFxtYWluXFxjdi12aWV3ZXIvc3JjXFxhcHBcXHRvcC1iYXJcXHRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQUk7RUFDQSxlQUFBO0FDRUo7O0FERUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTIyLCAxMzgsIDIyMSk7XHJcbn1cclxuXHJcbi50b3BCYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmdiKDU0LCA2OSwgMTQzKTtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDU0LCA2OSwgMTQzKTtcclxufVxyXG5cclxuLnRvcEJhclRleHQge1xyXG4gIGZvbnQtc2l6ZTogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nZ2VkT3V0IHtcclxuICBjb2xvcjogcmdiKDE1MCwgMTU4LCAyNDApO1xyXG59XHJcbiIsImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzdhOGFkZDtcbn1cblxuLnRvcEJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMzNjQ1OGY7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMzNjQ1OGY7XG59XG5cbi50b3BCYXJUZXh0IHtcbiAgZm9udC1zaXplOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5tYXQtaWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMSU7XG59XG5tYXQtaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2dlZE91dCB7XG4gIGNvbG9yOiAjOTY5ZWYwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-bar',
          templateUrl: './top-bar.component.html',
          styleUrls: ['./top-bar.component.scss']
        }]
      }], function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./polyfills */
    "./src/polyfills.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]).then(function (ref) {
      // Ensure Angular destroys itself on hot reloads.
      if (window['ngRef']) {
        window['ngRef'].destroy();
      }

      window['ngRef'] = ref; // Otherwise, log the boot error
    })["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
    /**
     * This file includes polyfills needed by Angular and is loaded before the app.
     * You can add your own extra polyfills to this file.
     *
     * This file is divided into 2 sections:
     *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
     *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
     *      file.
     *
     * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
     * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
     * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
     *
     * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
     */

    /***************************************************************************************************
     * BROWSER POLYFILLS
     */

    /** IE9, IE10 and IE11 requires all of the following polyfills. **/
    // import 'core-js/es6/symbol';
    // import 'core-js/es6/object';
    // import 'core-js/es6/function';
    // import 'core-js/es6/parse-int';
    // import 'core-js/es6/parse-float';
    // import 'core-js/es6/number';
    // import 'core-js/es6/math';
    // import 'core-js/es6/string';
    // import 'core-js/es6/date';
    // import 'core-js/es6/array';
    // import 'core-js/es6/regexp';
    // import 'core-js/es6/map';
    // import 'core-js/es6/set';

    /** IE10 and IE11 requires the following for NgClass support on SVG elements */
    // import 'classlist.js';  // Run `npm install --save classlist.js`.

    /** IE10 and IE11 requires the following to support `@angular/animation`. */
    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

    /** Evergreen browsers require these. **/
    // import 'core-js/es6/reflect';
    // import 'core-js/es7/reflect';

    /**
     * Web Animations `@angular/platform-browser/animations`
     * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
     * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
     */
    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

    /***************************************************************************************************
     * Zone JS is required by Angular itself.
     */
    // Included with Angular CLI.

    /***************************************************************************************************
     * APPLICATION IMPORTS
     */

    /**
     * Date, currency, decimal and percent pipes.
     * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
     */
    // import 'intl';  // Run `npm install --save intl`.

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\apps\CvViewer\client\src\main\cv-viewer\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map