"use strict";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function makeMap(str, expectsLowerCase) {
  const set2 = new Set(str.split(","));
  return expectsLowerCase ? (val) => set2.has(val.toLowerCase()) : (val) => set2.has(val);
}
const EMPTY_OBJ = Object.freeze({});
const EMPTY_ARR = Object.freeze([]);
const NOOP = () => {
};
const NO = () => false;
const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject$1 = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
const isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str) => {
  const s = str ? `on${capitalize(str)}` : ``;
  return s;
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns$1 = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject$1(val)) {
    return String(val);
  }
  return val;
};
const stringifySymbol = (v, i = "") => {
  var _a;
  return isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v;
};
const SLOT_DEFAULT_NAME = "d";
const ON_SHOW = "onShow";
const ON_HIDE = "onHide";
const ON_LAUNCH = "onLaunch";
const ON_ERROR = "onError";
const ON_THEME_CHANGE = "onThemeChange";
const ON_PAGE_NOT_FOUND = "onPageNotFound";
const ON_UNHANDLE_REJECTION = "onUnhandledRejection";
const ON_EXIT = "onExit";
const ON_LOAD = "onLoad";
const ON_READY = "onReady";
const ON_UNLOAD = "onUnload";
const ON_INIT = "onInit";
const ON_SAVE_EXIT_STATE = "onSaveExitState";
const ON_RESIZE = "onResize";
const ON_BACK_PRESS = "onBackPress";
const ON_PAGE_SCROLL = "onPageScroll";
const ON_TAB_ITEM_TAP = "onTabItemTap";
const ON_REACH_BOTTOM = "onReachBottom";
const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
const ON_SHARE_TIMELINE = "onShareTimeline";
const ON_ADD_TO_FAVORITES = "onAddToFavorites";
const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";
const customizeRE = /:/g;
function customizeEvent(str) {
  return camelize(str.replace(customizeRE, "-"));
}
function hasLeadingSlash(str) {
  return str.indexOf("/") === 0;
}
function addLeadingSlash(str) {
  return hasLeadingSlash(str) ? str : "/" + str;
}
const invokeArrayFns = (fns, arg) => {
  let ret;
  for (let i = 0; i < fns.length; i++) {
    ret = fns[i](arg);
  }
  return ret;
};
function once(fn, ctx = null) {
  let res;
  return (...args) => {
    if (fn) {
      res = fn.apply(ctx, args);
      fn = null;
    }
    return res;
  };
}
function getValueByDataPath(obj, path) {
  if (!isString(path)) {
    return;
  }
  path = path.replace(/\[(\d+)\]/g, ".$1");
  const parts = path.split(".");
  let key = parts[0];
  if (!obj) {
    obj = {};
  }
  if (parts.length === 1) {
    return obj[key];
  }
  return getValueByDataPath(obj[key], parts.slice(1).join("."));
}
function sortObject(obj) {
  let sortObj = {};
  if (isPlainObject$1(obj)) {
    Object.keys(obj).sort().forEach((key) => {
      const _key = key;
      sortObj[_key] = obj[_key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
const encode = encodeURIComponent;
function stringifyQuery(obj, encodeStr = encode) {
  const res = obj ? Object.keys(obj).map((key) => {
    let val = obj[key];
    if (typeof val === void 0 || val === null) {
      val = "";
    } else if (isPlainObject$1(val)) {
      val = JSON.stringify(val);
    }
    return encodeStr(key) + "=" + encodeStr(val);
  }).filter((x) => x.length > 0).join("&") : null;
  return res ? `?${res}` : "";
}
const PAGE_HOOKS = [
  ON_INIT,
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_SHARE_APP_MESSAGE,
  ON_ADD_TO_FAVORITES,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
function isRootHook(name) {
  return PAGE_HOOKS.indexOf(name) > -1;
}
const UniLifecycleHooks = [
  ON_SHOW,
  ON_HIDE,
  ON_LAUNCH,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION,
  ON_EXIT,
  ON_INIT,
  ON_LOAD,
  ON_READY,
  ON_UNLOAD,
  ON_RESIZE,
  ON_BACK_PRESS,
  ON_PAGE_SCROLL,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_SHARE_TIMELINE,
  ON_ADD_TO_FAVORITES,
  ON_SHARE_APP_MESSAGE,
  ON_SAVE_EXIT_STATE,
  ON_NAVIGATION_BAR_BUTTON_TAP,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED,
  ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED
];
const MINI_PROGRAM_PAGE_RUNTIME_HOOKS = /* @__PURE__ */ (() => {
  return {
    onPageScroll: 1,
    onShareAppMessage: 1 << 1,
    onShareTimeline: 1 << 2
  };
})();
function isUniLifecycleHook(name, value, checkType = true) {
  if (checkType && !isFunction(value)) {
    return false;
  }
  if (UniLifecycleHooks.indexOf(name) > -1) {
    return true;
  } else if (name.indexOf("on") === 0) {
    return true;
  }
  return false;
}
let vueApp;
const createVueAppHooks = [];
function onCreateVueApp(hook) {
  if (vueApp) {
    return hook(vueApp);
  }
  createVueAppHooks.push(hook);
}
function invokeCreateVueAppHook(app) {
  vueApp = app;
  createVueAppHooks.forEach((hook) => hook(app));
}
const invokeCreateErrorHandler = once((app, createErrorHandler2) => {
  if (isFunction(app._component.onError)) {
    return createErrorHandler2(app);
  }
});
const E = function() {
};
E.prototype = {
  on: function(name, callback, ctx) {
    var e2 = this.e || (this.e = {});
    (e2[name] || (e2[name] = [])).push({
      fn: callback,
      ctx
    });
    return this;
  },
  once: function(name, callback, ctx) {
    var self2 = this;
    function listener() {
      self2.off(name, listener);
      callback.apply(ctx, arguments);
    }
    listener._ = callback;
    return this.on(name, listener, ctx);
  },
  emit: function(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;
    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }
    return this;
  },
  off: function(name, callback) {
    var e2 = this.e || (this.e = {});
    var evts = e2[name];
    var liveEvents = [];
    if (evts && callback) {
      for (var i = evts.length - 1; i >= 0; i--) {
        if (evts[i].fn === callback || evts[i].fn._ === callback) {
          evts.splice(i, 1);
          break;
        }
      }
      liveEvents = evts;
    }
    liveEvents.length ? e2[name] = liveEvents : delete e2[name];
    return this;
  }
};
var E$1 = E;
const LOCALE_ZH_HANS = "zh-Hans";
const LOCALE_ZH_HANT = "zh-Hant";
const LOCALE_EN = "en";
const LOCALE_FR = "fr";
const LOCALE_ES = "es";
function include(str, parts) {
  return !!parts.find((part) => str.indexOf(part) !== -1);
}
function startsWith(str, parts) {
  return parts.find((part) => str.indexOf(part) === 0);
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, "-");
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === "chinese") {
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf("zh") === 0) {
    if (locale.indexOf("-hans") > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("-hant") > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  const lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
function getBaseSystemInfo() {
  return wx.getSystemInfoSync();
}
function validateProtocolFail(name, msg) {
  console.warn(`${name}: ${msg}`);
}
function validateProtocol(name, data, protocol, onFail) {
  if (!onFail) {
    onFail = validateProtocolFail;
  }
  for (const key in protocol) {
    const errMsg = validateProp$1(key, data[key], protocol[key], !hasOwn(data, key));
    if (isString(errMsg)) {
      onFail(name, errMsg);
    }
  }
}
function validateProtocols(name, args, protocol, onFail) {
  if (!protocol) {
    return;
  }
  if (!isArray(protocol)) {
    return validateProtocol(name, args[0] || /* @__PURE__ */ Object.create(null), protocol, onFail);
  }
  const len = protocol.length;
  const argsLen = args.length;
  for (let i = 0; i < len; i++) {
    const opts = protocol[i];
    const data = /* @__PURE__ */ Object.create(null);
    if (argsLen > i) {
      data[opts.name] = args[i];
    }
    validateProtocol(name, data, { [opts.name]: opts }, onFail);
  }
}
function validateProp$1(name, value, prop, isAbsent) {
  if (!isPlainObject$1(prop)) {
    prop = { type: prop };
  }
  const { type, required, validator } = prop;
  if (required && isAbsent) {
    return 'Missing required args: "' + name + '"';
  }
  if (value == null && !required) {
    return;
  }
  if (type != null) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType$1(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      return getInvalidTypeMessage$1(name, value, expectedTypes);
    }
  }
  if (validator) {
    return validator(value);
  }
}
const isSimpleType$1 = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol");
function assertType$1(value, type) {
  let valid;
  const expectedType = getType$1(type);
  if (isSimpleType$1(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else {
    {
      valid = value instanceof type;
    }
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage$1(name, value, expectedTypes) {
  let message = `Invalid args: type check failed for args "${name}". Expected ${expectedTypes.map(capitalize).join(", ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue$1(value, expectedType);
  const receivedValue = styleValue$1(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable$1(expectedType) && !isBoolean$1(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable$1(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function getType$1(ctor) {
  const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : "";
}
function styleValue$1(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable$1(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean$1(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
function tryCatch(fn) {
  return function() {
    try {
      return fn.apply(fn, arguments);
    } catch (e2) {
      console.error(e2);
    }
  };
}
let invokeCallbackId = 1;
const invokeCallbacks = {};
function addInvokeCallback(id, name, callback, keepAlive = false) {
  invokeCallbacks[id] = {
    name,
    keepAlive,
    callback
  };
  return id;
}
function invokeCallback(id, res, extras) {
  if (typeof id === "number") {
    const opts = invokeCallbacks[id];
    if (opts) {
      if (!opts.keepAlive) {
        delete invokeCallbacks[id];
      }
      return opts.callback(res, extras);
    }
  }
  return res;
}
const API_SUCCESS = "success";
const API_FAIL = "fail";
const API_COMPLETE = "complete";
function getApiCallbacks(args) {
  const apiCallbacks = {};
  for (const name in args) {
    const fn = args[name];
    if (isFunction(fn)) {
      apiCallbacks[name] = tryCatch(fn);
      delete args[name];
    }
  }
  return apiCallbacks;
}
function normalizeErrMsg(errMsg, name) {
  if (!errMsg || errMsg.indexOf(":fail") === -1) {
    return name + ":ok";
  }
  return name + errMsg.substring(errMsg.indexOf(":fail"));
}
function createAsyncApiCallback(name, args = {}, { beforeAll, beforeSuccess } = {}) {
  if (!isPlainObject$1(args)) {
    args = {};
  }
  const { success, fail, complete } = getApiCallbacks(args);
  const hasSuccess = isFunction(success);
  const hasFail = isFunction(fail);
  const hasComplete = isFunction(complete);
  const callbackId = invokeCallbackId++;
  addInvokeCallback(callbackId, name, (res) => {
    res = res || {};
    res.errMsg = normalizeErrMsg(res.errMsg, name);
    isFunction(beforeAll) && beforeAll(res);
    if (res.errMsg === name + ":ok") {
      isFunction(beforeSuccess) && beforeSuccess(res, args);
      hasSuccess && success(res);
    } else {
      hasFail && fail(res);
    }
    hasComplete && complete(res);
  });
  return callbackId;
}
const HOOK_SUCCESS = "success";
const HOOK_FAIL = "fail";
const HOOK_COMPLETE = "complete";
const globalInterceptors = {};
const scopedInterceptors = {};
function wrapperHook(hook, params) {
  return function(data) {
    return hook(data, params) || data;
  };
}
function queue$2(hooks, data, params) {
  let promise = false;
  for (let i = 0; i < hooks.length; i++) {
    const hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      const res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then() {
          },
          catch() {
          }
        };
      }
    }
  }
  return promise || {
    then(callback) {
      return callback(data);
    },
    catch() {
    }
  };
}
function wrapperOptions(interceptors2, options = {}) {
  [HOOK_SUCCESS, HOOK_FAIL, HOOK_COMPLETE].forEach((name) => {
    const hooks = interceptors2[name];
    if (!isArray(hooks)) {
      return;
    }
    const oldCallback = options[name];
    options[name] = function callbackInterceptor(res) {
      queue$2(hooks, res, options).then((res2) => {
        return isFunction(oldCallback) && oldCallback(res2) || res2;
      });
    };
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  const returnValueHooks = [];
  if (isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push(...globalInterceptors.returnValue);
  }
  const interceptor = scopedInterceptors[method];
  if (interceptor && isArray(interceptor.returnValue)) {
    returnValueHooks.push(...interceptor.returnValue);
  }
  returnValueHooks.forEach((hook) => {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  const interceptor = /* @__PURE__ */ Object.create(null);
  Object.keys(globalInterceptors).forEach((hook) => {
    if (hook !== "returnValue") {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  const scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach((hook) => {
      if (hook !== "returnValue") {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options, params) {
  const interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (isArray(interceptor.invoke)) {
      const res = queue$2(interceptor.invoke, options);
      return res.then((options2) => {
        return api(wrapperOptions(getApiInterceptorHooks(method), options2), ...params);
      });
    } else {
      return api(wrapperOptions(interceptor, options), ...params);
    }
  }
  return api(options, ...params);
}
function hasCallback(args) {
  if (isPlainObject$1(args) && [API_SUCCESS, API_FAIL, API_COMPLETE].find((cb) => isFunction(args[cb]))) {
    return true;
  }
  return false;
}
function handlePromise(promise) {
  return promise;
}
function promisify$1(name, fn) {
  return (args = {}, ...rest) => {
    if (hasCallback(args)) {
      return wrapperReturnValue(name, invokeApi(name, fn, args, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve, reject) => {
      invokeApi(name, fn, extend(args, { success: resolve, fail: reject }), rest);
    })));
  };
}
function formatApiArgs(args, options) {
  const params = args[0];
  if (!options || !options.formatArgs || !isPlainObject$1(options.formatArgs) && isPlainObject$1(params)) {
    return;
  }
  const formatArgs = options.formatArgs;
  const keys = Object.keys(formatArgs);
  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const formatterOrDefaultValue = formatArgs[name];
    if (isFunction(formatterOrDefaultValue)) {
      const errMsg = formatterOrDefaultValue(args[0][name], params);
      if (isString(errMsg)) {
        return errMsg;
      }
    } else {
      if (!hasOwn(params, name)) {
        params[name] = formatterOrDefaultValue;
      }
    }
  }
}
function invokeSuccess(id, name, res) {
  const result = {
    errMsg: name + ":ok"
  };
  return invokeCallback(id, extend(res || {}, result));
}
function invokeFail(id, name, errMsg, errRes = {}) {
  const apiErrMsg = name + ":fail" + (errMsg ? " " + errMsg : "");
  delete errRes.errCode;
  let res = extend({ errMsg: apiErrMsg }, errRes);
  return invokeCallback(id, res);
}
function beforeInvokeApi(name, args, protocol, options) {
  {
    validateProtocols(name, args, protocol);
  }
  if (options && options.beforeInvoke) {
    const errMsg2 = options.beforeInvoke(args);
    if (isString(errMsg2)) {
      return errMsg2;
    }
  }
  const errMsg = formatApiArgs(args, options);
  if (errMsg) {
    return errMsg;
  }
}
function parseErrMsg(errMsg) {
  if (!errMsg || isString(errMsg)) {
    return errMsg;
  }
  if (errMsg.stack) {
    console.error(errMsg.message + "\n" + errMsg.stack);
    return errMsg.message;
  }
  return errMsg;
}
function wrapperTaskApi(name, fn, protocol, options) {
  return (args) => {
    const id = createAsyncApiCallback(name, args, options);
    const errMsg = beforeInvokeApi(name, [args], protocol, options);
    if (errMsg) {
      return invokeFail(id, name, errMsg);
    }
    return fn(args, {
      resolve: (res) => invokeSuccess(id, name, res),
      reject: (errMsg2, errRes) => invokeFail(id, name, parseErrMsg(errMsg2), errRes)
    });
  };
}
function wrapperSyncApi(name, fn, protocol, options) {
  return (...args) => {
    const errMsg = beforeInvokeApi(name, args, protocol, options);
    if (errMsg) {
      throw new Error(errMsg);
    }
    return fn.apply(null, args);
  };
}
function wrapperAsyncApi(name, fn, protocol, options) {
  return wrapperTaskApi(name, fn, protocol, options);
}
function defineSyncApi(name, fn, protocol, options) {
  return wrapperSyncApi(name, fn, protocol, options);
}
function defineAsyncApi(name, fn, protocol, options) {
  return promisify$1(name, wrapperAsyncApi(name, fn, protocol, options));
}
const API_UPX2PX = "upx2px";
const Upx2pxProtocol = [
  {
    name: "upx",
    type: [Number, String],
    required: true
  }
];
const EPS = 1e-4;
const BASE_DEVICE_WIDTH = 750;
let isIOS = false;
let deviceWidth = 0;
let deviceDPR = 0;
function checkDeviceWidth() {
  const { platform, pixelRatio, windowWidth } = getBaseSystemInfo();
  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === "ios";
}
const upx2px = defineSyncApi(API_UPX2PX, (number, newDeviceWidth) => {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  let width = newDeviceWidth || deviceWidth;
  let result = number / BASE_DEVICE_WIDTH * width;
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}, Upx2pxProtocol);
const API_ADD_INTERCEPTOR = "addInterceptor";
const API_REMOVE_INTERCEPTOR = "removeInterceptor";
const AddInterceptorProtocol = [
  {
    name: "method",
    type: [String, Object],
    required: true
  }
];
const RemoveInterceptorProtocol = AddInterceptorProtocol;
function mergeInterceptorHook(interceptors2, interceptor) {
  Object.keys(interceptor).forEach((hook) => {
    if (isFunction(interceptor[hook])) {
      interceptors2[hook] = mergeHook(interceptors2[hook], interceptor[hook]);
    }
  });
}
function removeInterceptorHook(interceptors2, interceptor) {
  if (!interceptors2 || !interceptor) {
    return;
  }
  Object.keys(interceptor).forEach((name) => {
    const hooks = interceptors2[name];
    const hook = interceptor[name];
    if (isArray(hooks) && isFunction(hook)) {
      remove(hooks, hook);
    }
  });
}
function mergeHook(parentVal, childVal) {
  const res = childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  const res = [];
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
const addInterceptor = defineSyncApi(API_ADD_INTERCEPTOR, (method, interceptor) => {
  if (isString(method) && isPlainObject$1(interceptor)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), interceptor);
  } else if (isPlainObject$1(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}, AddInterceptorProtocol);
const removeInterceptor = defineSyncApi(API_REMOVE_INTERCEPTOR, (method, interceptor) => {
  if (isString(method)) {
    if (isPlainObject$1(interceptor)) {
      removeInterceptorHook(scopedInterceptors[method], interceptor);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject$1(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}, RemoveInterceptorProtocol);
const interceptors = {};
const API_ON = "$on";
const OnProtocol = [
  {
    name: "event",
    type: String,
    required: true
  },
  {
    name: "callback",
    type: Function,
    required: true
  }
];
const API_ONCE = "$once";
const OnceProtocol = OnProtocol;
const API_OFF = "$off";
const OffProtocol = [
  {
    name: "event",
    type: [String, Array]
  },
  {
    name: "callback",
    type: Function
  }
];
const API_EMIT = "$emit";
const EmitProtocol = [
  {
    name: "event",
    type: String,
    required: true
  }
];
const emitter = new E$1();
const $on = defineSyncApi(API_ON, (name, callback) => {
  emitter.on(name, callback);
  return () => emitter.off(name, callback);
}, OnProtocol);
const $once = defineSyncApi(API_ONCE, (name, callback) => {
  emitter.once(name, callback);
  return () => emitter.off(name, callback);
}, OnceProtocol);
const $off = defineSyncApi(API_OFF, (name, callback) => {
  if (!name) {
    emitter.e = {};
    return;
  }
  if (!isArray(name))
    name = [name];
  name.forEach((n) => emitter.off(n, callback));
}, OffProtocol);
const $emit = defineSyncApi(API_EMIT, (name, ...args) => {
  emitter.emit(name, ...args);
}, EmitProtocol);
let cid;
let cidErrMsg;
let enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e2) {
  }
  return message;
}
function invokePushCallback(args) {
  if (args.type === "enabled") {
    enabled = true;
  } else if (args.type === "clientId") {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === "pushMsg") {
    const message = {
      type: "receive",
      data: normalizePushMessage(args.message)
    };
    for (let i = 0; i < onPushMessageCallbacks.length; i++) {
      const callback = onPushMessageCallbacks[i];
      callback(message);
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === "click") {
    onPushMessageCallbacks.forEach((callback) => {
      callback({
        type: "click",
        data: normalizePushMessage(args.message)
      });
    });
  }
}
const getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid2, errMsg) {
  getPushCidCallbacks.forEach((callback) => {
    callback(cid2, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
const API_GET_PUSH_CLIENT_ID = "getPushClientId";
const getPushClientId = defineAsyncApi(API_GET_PUSH_CLIENT_ID, (_, { resolve, reject }) => {
  Promise.resolve().then(() => {
    if (typeof enabled === "undefined") {
      enabled = false;
      cid = "";
      cidErrMsg = "uniPush is not enabled";
    }
    getPushCidCallbacks.push((cid2, errMsg) => {
      if (cid2) {
        resolve({ cid: cid2 });
      } else {
        reject(errMsg);
      }
    });
    if (typeof cid !== "undefined") {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
});
const onPushMessageCallbacks = [];
const onPushMessage = (fn) => {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
const offPushMessage = (fn) => {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    const index2 = onPushMessageCallbacks.indexOf(fn);
    if (index2 > -1) {
      onPushMessageCallbacks.splice(index2, 1);
    }
  }
};
const SYNC_API_RE = /^\$|getLocale|setLocale|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getDeviceInfo|getAppBaseInfo|getWindowInfo|getSystemSetting|getAppAuthorizeSetting/;
const CONTEXT_API_RE = /^create|Manager$/;
const CONTEXT_API_RE_EXC = ["createBLEConnection"];
const ASYNC_API = ["createBLEConnection"];
const CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== "onPush";
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function(onfinally) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(onfinally && onfinally()).then(() => value), (reason) => promise.resolve(onfinally && onfinally()).then(() => {
      throw reason;
    }));
  };
}
function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  if (!isFunction(api)) {
    return api;
  }
  return function promiseApi(options = {}, ...rest) {
    if (isFunction(options.success) || isFunction(options.fail) || isFunction(options.complete)) {
      return wrapperReturnValue(name, invokeApi(name, api, options, rest));
    }
    return wrapperReturnValue(name, handlePromise(new Promise((resolve, reject) => {
      invokeApi(name, api, extend({}, options, {
        success: resolve,
        fail: reject
      }), rest);
    })));
  };
}
const CALLBACKS = ["success", "fail", "cancel", "complete"];
function initWrapper(protocols2) {
  function processCallback(methodName, method, returnValue) {
    return function(res) {
      return method(processReturnValue(methodName, res, returnValue));
    };
  }
  function processArgs(methodName, fromArgs, argsOption = {}, returnValue = {}, keepFromArgs = false) {
    if (isPlainObject$1(fromArgs)) {
      const toArgs = keepFromArgs === true ? fromArgs : {};
      if (isFunction(argsOption)) {
        argsOption = argsOption(fromArgs, toArgs) || {};
      }
      for (const key in fromArgs) {
        if (hasOwn(argsOption, key)) {
          let keyOption = argsOption[key];
          if (isFunction(keyOption)) {
            keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
          }
          if (!keyOption) {
            console.warn(`微信小程序 ${methodName} 暂不支持 ${key}`);
          } else if (isString(keyOption)) {
            toArgs[keyOption] = fromArgs[key];
          } else if (isPlainObject$1(keyOption)) {
            toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
          }
        } else if (CALLBACKS.indexOf(key) !== -1) {
          const callback = fromArgs[key];
          if (isFunction(callback)) {
            toArgs[key] = processCallback(methodName, callback, returnValue);
          }
        } else {
          if (!keepFromArgs && !hasOwn(toArgs, key)) {
            toArgs[key] = fromArgs[key];
          }
        }
      }
      return toArgs;
    } else if (isFunction(fromArgs)) {
      fromArgs = processCallback(methodName, fromArgs, returnValue);
    }
    return fromArgs;
  }
  function processReturnValue(methodName, res, returnValue, keepReturnValue = false) {
    if (isFunction(protocols2.returnValue)) {
      res = protocols2.returnValue(methodName, res);
    }
    return processArgs(methodName, res, returnValue, {}, keepReturnValue);
  }
  return function wrapper(methodName, method) {
    if (!hasOwn(protocols2, methodName)) {
      return method;
    }
    const protocol = protocols2[methodName];
    if (!protocol) {
      return function() {
        console.error(`微信小程序 暂不支持${methodName}`);
      };
    }
    return function(arg1, arg2) {
      let options = protocol;
      if (isFunction(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      const args = [arg1];
      if (typeof arg2 !== "undefined") {
        args.push(arg2);
      }
      const returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  };
}
const getLocale = () => {
  const app = isFunction(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
};
const setLocale = (locale) => {
  const app = isFunction(getApp) && getApp();
  if (!app) {
    return false;
  }
  const oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach((fn) => fn({ locale }));
    return true;
  }
  return false;
};
const onLocaleChangeCallbacks = [];
const onLocaleChange = (fn) => {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
};
if (typeof global !== "undefined") {
  global.getLocale = getLocale;
}
const UUID_KEY = "__DC_STAT_UUID";
let deviceId;
function useDeviceId(global2 = wx) {
  return function addDeviceId(_, toRes) {
    deviceId = deviceId || global2.getStorageSync(UUID_KEY);
    if (!deviceId) {
      deviceId = Date.now() + "" + Math.floor(Math.random() * 1e7);
      wx.setStorage({
        key: UUID_KEY,
        data: deviceId
      });
    }
    toRes.deviceId = deviceId;
  };
}
function addSafeAreaInsets(fromRes, toRes) {
  if (fromRes.safeArea) {
    const safeArea = fromRes.safeArea;
    toRes.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: fromRes.windowWidth - safeArea.right,
      bottom: fromRes.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(fromRes, toRes) {
  const { brand = "", model = "", system = "", language = "", theme, version: version2, platform, fontSizeSetting, SDKVersion, pixelRatio, deviceOrientation } = fromRes;
  let osName = "";
  let osVersion = "";
  {
    osName = system.split(" ")[0] || "";
    osVersion = system.split(" ")[1] || "";
  }
  let hostVersion = version2;
  let deviceType = getGetDeviceType(fromRes, model);
  let deviceBrand = getDeviceBrand(brand);
  let _hostName = getHostName(fromRes);
  let _deviceOrientation = deviceOrientation;
  let _devicePixelRatio = pixelRatio;
  let _SDKVersion = SDKVersion;
  const hostLanguage = language.replace(/_/g, "-");
  const parameters = {
    appId: "",
    appName: "TerrainTies",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.29",
    uniRuntimeVersion: "4.29",
    uniPlatform: "mp-weixin",
    deviceBrand,
    deviceModel: model,
    deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion,
    hostTheme: theme,
    hostVersion,
    hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: void 0,
    osTheme: void 0,
    ua: void 0,
    hostPackageName: void 0,
    browserName: void 0,
    browserVersion: void 0
  };
  extend(toRes, parameters);
}
function getGetDeviceType(fromRes, model) {
  let deviceType = fromRes.deviceType || "phone";
  {
    const deviceTypeMaps = {
      ipad: "pad",
      windows: "pc",
      mac: "pc"
    };
    const deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    const _model = model.toLocaleLowerCase();
    for (let index2 = 0; index2 < deviceTypeMapsKeys.length; index2++) {
      const _m = deviceTypeMapsKeys[index2];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  let deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = deviceBrand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale ? getLocale() : defaultLanguage;
}
function getHostName(fromRes) {
  const _platform = "WeChat";
  let _hostName = fromRes.hostName || _platform;
  {
    if (fromRes.environment) {
      _hostName = fromRes.environment;
    } else if (fromRes.host && fromRes.host.env) {
      _hostName = fromRes.host.env;
    }
  }
  return _hostName;
}
const getSystemInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    useDeviceId()(fromRes, toRes);
    populateParameters(fromRes, toRes);
  }
};
const getSystemInfoSync = getSystemInfo;
const redirectTo = {};
const previewImage = {
  args(fromArgs, toArgs) {
    let currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    const urls = fromArgs.urls;
    if (!isArray(urls)) {
      return;
    }
    const len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      toArgs.current = urls[currentIndex];
      toArgs.urls = urls.filter((item, index2) => index2 < currentIndex ? item !== urls[currentIndex] : true);
    } else {
      toArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
const showActionSheet = {
  args(fromArgs, toArgs) {
    toArgs.alertText = fromArgs.title;
  }
};
const getDeviceInfo = {
  returnValue: (fromRes, toRes) => {
    const { brand, model } = fromRes;
    let deviceType = getGetDeviceType(fromRes, model);
    let deviceBrand = getDeviceBrand(brand);
    useDeviceId()(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      deviceType,
      deviceBrand,
      deviceModel: model
    }));
  }
};
const getAppBaseInfo = {
  returnValue: (fromRes, toRes) => {
    const { version: version2, language, SDKVersion, theme } = fromRes;
    let _hostName = getHostName(fromRes);
    let hostLanguage = language.replace(/_/g, "-");
    toRes = sortObject(extend(toRes, {
      hostVersion: version2,
      hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      appId: "",
      appName: "TerrainTies",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage)
    }));
  }
};
const getWindowInfo = {
  returnValue: (fromRes, toRes) => {
    addSafeAreaInsets(fromRes, toRes);
    toRes = sortObject(extend(toRes, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
const getAppAuthorizeSetting = {
  returnValue: function(fromRes, toRes) {
    const { locationReducedAccuracy } = fromRes;
    toRes.locationAccuracy = "unsupported";
    if (locationReducedAccuracy === true) {
      toRes.locationAccuracy = "reduced";
    } else if (locationReducedAccuracy === false) {
      toRes.locationAccuracy = "full";
    }
  }
};
const baseApis = {
  $on,
  $off,
  $once,
  $emit,
  upx2px,
  interceptors,
  addInterceptor,
  removeInterceptor,
  onCreateVueApp,
  invokeCreateVueAppHook,
  getLocale,
  setLocale,
  onLocaleChange,
  getPushClientId,
  onPushMessage,
  offPushMessage,
  invokePushCallback
};
function initUni(api, protocols2, platform = wx) {
  const wrapper = initWrapper(protocols2);
  const UniProxyHandlers = {
    get(target, key) {
      if (hasOwn(target, key)) {
        return target[key];
      }
      if (hasOwn(api, key)) {
        return promisify(key, api[key]);
      }
      if (hasOwn(baseApis, key)) {
        return promisify(key, baseApis[key]);
      }
      return promisify(key, wrapper(key, platform[key]));
    }
  };
  return new Proxy({}, UniProxyHandlers);
}
function initGetProvider(providers) {
  return function getProvider2({ service, success, fail, complete }) {
    let res;
    if (providers[service]) {
      res = {
        errMsg: "getProvider:ok",
        service,
        provider: providers[service]
      };
      isFunction(success) && success(res);
    } else {
      res = {
        errMsg: "getProvider:fail:服务[" + service + "]不存在"
      };
      isFunction(fail) && fail(res);
    }
    isFunction(complete) && complete(res);
  };
}
const objectKeys = [
  "qy",
  "env",
  "error",
  "version",
  "lanDebug",
  "cloud",
  "serviceMarket",
  "router",
  "worklet",
  "__webpack_require_UNI_MP_PLUGIN__"
];
const singlePageDisableKey = ["lanDebug", "router", "worklet"];
const launchOption = wx.getLaunchOptionsSync ? wx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof wx[key] === "function";
}
function initWx() {
  const newWx = {};
  for (const key in wx) {
    if (isWxKey(key)) {
      newWx[key] = wx[key];
    }
  }
  if (typeof globalThis !== "undefined" && typeof requireMiniProgram === "undefined") {
    globalThis.wx = newWx;
  }
  return newWx;
}
const mocks$1 = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
const getProvider = initGetProvider({
  oauth: ["weixin"],
  share: ["weixin"],
  payment: ["wxpay"],
  push: ["weixin"]
});
function initComponentMocks(component) {
  const res = /* @__PURE__ */ Object.create(null);
  mocks$1.forEach((name) => {
    res[name] = component[name];
  });
  return res;
}
function createSelectorQuery() {
  const query = wx$2.createSelectorQuery();
  const oldIn = query.in;
  query.in = function newIn(component) {
    return oldIn.call(this, initComponentMocks(component));
  };
  return query;
}
const wx$2 = initWx();
let baseInfo = wx$2.getAppBaseInfo && wx$2.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx$2.getSystemInfoSync();
}
const host = baseInfo ? baseInfo.host : null;
const shareVideoMessage = host && host.env === "SAAASDK" ? wx$2.miniapp.shareVideoMessage : wx$2.shareVideoMessage;
var shims = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createSelectorQuery,
  getProvider,
  shareVideoMessage
});
const compressImage = {
  args(fromArgs, toArgs) {
    if (fromArgs.compressedHeight && !toArgs.compressHeight) {
      toArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !toArgs.compressWidth) {
      toArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  compressImage,
  getAppAuthorizeSetting,
  getAppBaseInfo,
  getDeviceInfo,
  getSystemInfo,
  getSystemInfoSync,
  getWindowInfo,
  previewImage,
  redirectTo,
  showActionSheet
});
const wx$1 = initWx();
var index = initUni(shims, protocols, wx$1);
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
function toRaw$1(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw$1(raw) : observed;
}
function isRef$1(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const stack$1 = [];
function pushWarningContext$1(vnode) {
  stack$1.push(vnode);
}
function popWarningContext$1() {
  stack$1.pop();
}
function warn$1$1(msg, ...args) {
  const instance = stack$1.length ? stack$1[stack$1.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace$1();
  if (appWarnHandler) {
    callWithErrorHandling$1(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName$1(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace$1(trace));
    }
    console.warn(...warnArgs);
  }
}
function getComponentTrace$1() {
  let currentVNode = stack$1[stack$1.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace$1(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry$1(entry));
  });
  return logs;
}
function formatTraceEntry$1({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName$1(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps$1(vnode.props), close] : [open + close];
}
function formatProps$1(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp$1(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp$1(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef$1(value)) {
    value = formatProp$1(key, toRaw$1(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw$1(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling$1(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError$1(err, instance, type);
  }
}
function handleError$1(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings$1[type];
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling$1(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError$1(err, type, contextVNode, throwInDev);
}
function logError$1(err, type, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings$1[type];
    if (contextVNode) {
      pushWarningContext$1(contextVNode);
    }
    warn$1$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext$1();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  }
}
let isFlushing$1 = false;
let isFlushPending$1 = false;
const queue$1 = [];
let flushIndex$1 = 0;
const pendingPostFlushCbs$1 = [];
let activePostFlushCbs$1 = null;
let postFlushIndex$1 = 0;
const resolvedPromise$1 = /* @__PURE__ */ Promise.resolve();
const RECURSION_LIMIT$1 = 100;
function findInsertionIndex$1(id) {
  let start = flushIndex$1 + 1;
  let end = queue$1.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue$1[middle];
    const middleJobId = getId$1(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob$1(job) {
  if (!queue$1.length || !queue$1.includes(
    job,
    isFlushing$1 && job.allowRecurse ? flushIndex$1 + 1 : flushIndex$1
  )) {
    if (job.id == null) {
      queue$1.push(job);
    } else {
      queue$1.splice(findInsertionIndex$1(job.id), 0, job);
    }
    queueFlush$1();
  }
}
function queueFlush$1() {
  if (!isFlushing$1 && !isFlushPending$1) {
    isFlushPending$1 = true;
    resolvedPromise$1.then(flushJobs$1);
  }
}
function queuePostFlushCb$1(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs$1 || !activePostFlushCbs$1.includes(
      cb,
      cb.allowRecurse ? postFlushIndex$1 + 1 : postFlushIndex$1
    )) {
      pendingPostFlushCbs$1.push(cb);
    }
  } else {
    pendingPostFlushCbs$1.push(...cb);
  }
  queueFlush$1();
}
function flushPostFlushCbs$1(seen) {
  if (pendingPostFlushCbs$1.length) {
    const deduped = [...new Set(pendingPostFlushCbs$1)].sort(
      (a, b) => getId$1(a) - getId$1(b)
    );
    pendingPostFlushCbs$1.length = 0;
    if (activePostFlushCbs$1) {
      activePostFlushCbs$1.push(...deduped);
      return;
    }
    activePostFlushCbs$1 = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex$1 = 0; postFlushIndex$1 < activePostFlushCbs$1.length; postFlushIndex$1++) {
      if (checkRecursiveUpdates$1(seen, activePostFlushCbs$1[postFlushIndex$1])) {
        continue;
      }
      activePostFlushCbs$1[postFlushIndex$1]();
    }
    activePostFlushCbs$1 = null;
    postFlushIndex$1 = 0;
  }
}
const getId$1 = (job) => job.id == null ? Infinity : job.id;
const comparator$1 = (a, b) => {
  const diff2 = getId$1(a) - getId$1(b);
  if (diff2 === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff2;
};
function flushJobs$1(seen) {
  isFlushPending$1 = false;
  isFlushing$1 = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue$1.sort(comparator$1);
  const check = (job) => checkRecursiveUpdates$1(seen, job);
  try {
    for (flushIndex$1 = 0; flushIndex$1 < queue$1.length; flushIndex$1++) {
      const job = queue$1[flushIndex$1];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling$1(job, null, 14);
      }
    }
  } finally {
    flushIndex$1 = 0;
    queue$1.length = 0;
    flushPostFlushCbs$1(seen);
    isFlushing$1 = false;
    if (queue$1.length || pendingPostFlushCbs$1.length) {
      flushJobs$1(seen);
    }
  }
}
function checkRecursiveUpdates$1(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT$1) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName$1(instance.type);
      handleError$1(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
const hmrDirtyComponents = /* @__PURE__ */ new Set();
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent$1(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    instance.effect.dirty = true;
    instance.update();
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      instance.parent.effect.dirty = true;
      queueJob$1(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
  }
  queuePostFlushCb$1(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(
        normalizeClassComponent(instance.type)
      );
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e2) {
      console.error(e2);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key]))
      setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1)
        setters.forEach((set2) => set2(v));
      else
        setters[0](v);
    };
  };
  registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => v
  );
  registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => v
  );
}
const classifyRE$1 = /(?:^|[-_])(\w)/g;
const classify$1 = (str) => str.replace(classifyRE$1, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName$1(Component2, includeInferred = true) {
  return isFunction(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName$1(instance, Component2, isRoot = false) {
  let name = getComponentName$1(Component2);
  if (!name && Component2.__file) {
    const match = Component2.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component2) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify$1(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent$1(value) {
  return isFunction(value) && "__vccOpts" in value;
}
/**
* @dcloudio/uni-mp-vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn$2(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect2, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect2);
  }
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else {
    warn$2(
      `onScopeDispose() is called when there is no active effect scope to be associated with.`
    );
  }
}
let activeEffect;
class ReactiveEffect2 {
  constructor(fn, trigger2, scheduler, scope) {
    this.fn = fn;
    this.trigger = trigger2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this._dirtyLevel = 4;
    this._trackId = 0;
    this._runnings = 0;
    this._shouldSchedule = false;
    this._depsLength = 0;
    recordEffectScope(this, scope);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1;
      pauseTracking();
      for (let i = 0; i < this._depsLength; i++) {
        const dep = this.deps[i];
        if (dep.computed) {
          triggerComputed(dep.computed);
          if (this._dirtyLevel >= 4) {
            break;
          }
        }
      }
      if (this._dirtyLevel === 1) {
        this._dirtyLevel = 0;
      }
      resetTracking();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(v) {
    this._dirtyLevel = v ? 4 : 0;
  }
  run() {
    this._dirtyLevel = 0;
    if (!this.active) {
      return this.fn();
    }
    let lastShouldTrack = shouldTrack;
    let lastEffect = activeEffect;
    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }
  stop() {
    var _a;
    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      (_a = this.onStop) == null ? void 0 : _a.call(this);
      this.active = false;
    }
  }
}
function triggerComputed(computed2) {
  return computed2.value;
}
function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
  if (effect2.deps.length > effect2._depsLength) {
    for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
      cleanupDepEffect(effect2.deps[i], effect2);
    }
    effect2.deps.length = effect2._depsLength;
  }
}
function cleanupDepEffect(dep, effect2) {
  const trackId = dep.get(effect2);
  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);
    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
  pauseScheduleStack++;
}
function resetScheduling() {
  pauseScheduleStack--;
  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  var _a;
  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    const oldDep = effect2.deps[effect2._depsLength];
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }
      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }
    {
      (_a = effect2.onTrack) == null ? void 0 : _a.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
    }
  }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  var _a;
  pauseScheduling();
  for (const effect2 of dep.keys()) {
    let tracking;
    if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
      effect2._dirtyLevel = dirtyLevel;
    }
    if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      {
        (_a = effect2.onTrigger) == null ? void 0 : _a.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
      }
      effect2.trigger();
      if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
        effect2._shouldSchedule = false;
        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }
  resetScheduling();
}
const createDep = (cleanup, computed2) => {
  const dep = /* @__PURE__ */ new Map();
  dep.cleanup = cleanup;
  dep.computed = computed2;
  return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
    }
    trackEffect(
      activeEffect,
      dep,
      {
        target,
        type,
        key
      }
    );
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  pauseScheduling();
  for (const dep of deps) {
    if (dep) {
      triggerEffects(
        dep,
        4,
        {
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        }
      );
    }
  }
  resetScheduling();
}
function getDepFromReactive(object, key) {
  var _a;
  return (_a = targetMap.get(object)) == null ? void 0 : _a.get(key);
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      pauseScheduling();
      const res = toRaw(this)[key].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler2 {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler2 extends BaseReactiveHandler2 {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler2 extends BaseReactiveHandler2 {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    {
      warn$2(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    {
      warn$2(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler2();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler2();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler2(
  true
);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler2(true);
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn$2(
        `${capitalize(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    warn$2(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    {
      warn$2(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
function markRaw(value) {
  if (Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
const COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this.getter = getter;
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect2(
      () => getter(this._value),
      () => triggerRefValue(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    );
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
      triggerRefValue(self2, 4);
    }
    trackRefValue(self2);
    if (self2.effect._dirtyLevel >= 2) {
      if (this._warnRecursive) {
        warn$2(COMPUTED_SIDE_EFFECT_WARN, `

getter: `, this.getter);
      }
      triggerRefValue(self2, 2);
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(v) {
    this.effect.dirty = v;
  }
  // #endregion
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      warn$2("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.effect.onTrack = debugOptions.onTrack;
    cRef.effect.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
function trackRefValue(ref2) {
  var _a;
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    trackEffect(
      activeEffect,
      (_a = ref2.dep) != null ? _a : ref2.dep = createDep(
        () => ref2.dep = void 0,
        ref2 instanceof ComputedRefImpl ? ref2 : void 0
      ),
      {
        target: ref2,
        type: "get",
        key: "value"
      }
    );
  }
}
function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    triggerEffects(
      dep,
      dirtyLevel,
      {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      }
    );
  }
}
function isRef(r2) {
  return !!(r2 && r2.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, 4, newVal);
    }
  }
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
const shallowUnwrapHandlers = {
  get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
function toRefs(object) {
  if (!isProxy(object)) {
    warn$2(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
class ObjectRefImpl {
  constructor(_object, _key, _defaultValue) {
    this._object = _object;
    this._key = _key;
    this._defaultValue = _defaultValue;
    this.__v_isRef = true;
  }
  get value() {
    const val = this._object[this._key];
    return val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(toRaw(this._object), this._key);
  }
}
class GetterRefImpl {
  constructor(_getter) {
    this._getter = _getter;
    this.__v_isRef = true;
    this.__v_isReadonly = true;
  }
  get value() {
    return this._getter();
  }
}
function toRef(source, key, defaultValue) {
  if (isRef(source)) {
    return source;
  } else if (isFunction(source)) {
    return new GetterRefImpl(source);
  } else if (isObject(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  const val = source[key];
  return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  const values = [];
  for (let i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }
  return values;
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings[type] || type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings[type] || type;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      console.error(err);
    } else {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
let currentFlushPromise = null;
const RECURSION_LIMIT = 100;
function nextTick$1(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function hasQueueJob(job) {
  return queue.indexOf(job) > -1;
}
function invalidateJob(job) {
  const i = queue.indexOf(job);
  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = isFlushing ? flushIndex + 1 : 0) {
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.pre) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      cb();
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff2 = getId(a) - getId(b);
  if (diff2 === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff2;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
let devtools;
let buffer = [];
let devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools) {
    devtools.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook(hook, target) {
  var _a, _b;
  devtools = hook;
  if (devtools) {
    devtools.enabled = true;
    buffer.forEach(({ event, args }) => devtools.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook(newHook, target);
    });
    setTimeout(() => {
      if (!devtools) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app, version2) {
  emit$1("app:init", app, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
const devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* COMPONENT_ADDED */
);
const devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* COMPONENT_UPDATED */
);
const _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* COMPONENT_REMOVED */
);
const devtoolsComponentRemoved = (component) => {
  if (devtools && typeof devtools.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      // fixed by xxxxxx
      // 为 0 是 App，无 parent 是 Page 指向 App
      component.uid === 0 ? void 0 : component.parent ? component.parent.uid : 0,
      component
    );
  };
}
const devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* PERFORMANCE_START */
);
const devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit",
    component.appContext.app,
    component,
    event,
    params
  );
}
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted)
    return;
  const props = instance.vnode.props || EMPTY_OBJ;
  {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
          warn$1(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(
              `Invalid event arguments: event validation failed for event "${event}".`
            );
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modelArg = isModelListener2 && event.slice(7);
  if (modelArg && modelArg in props) {
    const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
    const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
    if (trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  {
    devtoolsComponentEmit(instance, event, args);
  }
  {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
          event
        )}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
let currentRenderingInstance = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  instance && instance.type.__scopeId || null;
  return prev;
}
const INITIAL_WATCHER_VALUE = {};
function watch(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, {
  immediate,
  deep,
  flush,
  once: once2,
  onTrack,
  onTrigger
} = EMPTY_OBJ) {
  if (cb && once2) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      unwatch();
    };
  }
  if (deep !== void 0 && typeof deep === "number") {
    warn$1(
      `watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`
    );
  }
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn$1(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (once2 !== void 0) {
      warn$1(
        `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const warnInvalidSource = (s2) => {
    warn$1(
      `Invalid watch source: `,
      s2,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const instance = currentInstance;
  const reactiveGetter = (source2) => deep === true ? source2 : (
    // for deep: false, only traverse root-level properties
    traverse(source2, deep === false ? 1 : void 0)
  );
  let getter;
  let forceTrigger = false;
  let isMultiSource = false;
  if (isRef(source)) {
    getter = () => source.value;
    forceTrigger = isShallow(source);
  } else if (isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s2) => isReactive(s2) || isShallow(s2));
    getter = () => source.map((s2) => {
      if (isRef(s2)) {
        return s2.value;
      } else if (isReactive(s2)) {
        return reactiveGetter(s2);
      } else if (isFunction(s2)) {
        return callWithErrorHandling(s2, instance, 2);
      } else {
        warnInvalidSource(s2);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = () => callWithErrorHandling(source, instance, 2);
    } else {
      getter = () => {
        if (cleanup) {
          cleanup();
        }
        return callWithAsyncErrorHandling(
          source,
          instance,
          3,
          [onCleanup]
        );
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    getter = () => traverse(baseGetter());
  }
  let cleanup;
  let onCleanup = (fn) => {
    cleanup = effect2.onStop = () => {
      callWithErrorHandling(fn, instance, 4);
      cleanup = effect2.onStop = void 0;
    };
  };
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = () => {
    if (!effect2.active || !effect2.dirty) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
        if (cleanup) {
          cleanup();
        }
        callWithAsyncErrorHandling(cb, instance, 3, [
          newValue,
          // pass undefined as the old value when it's changed for the first time
          oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
          onCleanup
        ]);
        oldValue = newValue;
      }
    } else {
      effect2.run();
    }
  };
  job.allowRecurse = !!cb;
  let scheduler;
  if (flush === "sync") {
    scheduler = job;
  } else if (flush === "post") {
    scheduler = () => queuePostRenderEffect$1(job, instance && instance.suspense);
  } else {
    job.pre = true;
    if (instance)
      job.id = instance.uid;
    scheduler = () => queueJob(job);
  }
  const effect2 = new ReactiveEffect2(getter, NOOP, scheduler);
  const scope = getCurrentScope();
  const unwatch = () => {
    effect2.stop();
    if (scope) {
      remove(scope.effects, effect2);
    }
  };
  {
    effect2.onTrack = onTrack;
    effect2.onTrigger = onTrigger;
  }
  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = effect2.run();
    }
  } else if (flush === "post") {
    queuePostRenderEffect$1(
      effect2.run.bind(effect2),
      instance && instance.suspense
    );
  } else {
    effect2.run();
  }
  return unwatch;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
function traverse(value, depth, currentDepth = 0, seen) {
  if (!isObject(value) || value["__v_skip"]) {
    return value;
  }
  if (depth && depth > 0) {
    if (currentDepth >= depth) {
      return value;
    }
    currentDepth++;
  }
  seen = seen || /* @__PURE__ */ new Set();
  if (seen.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, depth, currentDepth, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, currentDepth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, currentDepth, seen);
    });
  } else if (isPlainObject$1(value)) {
    for (const key in value) {
      traverse(value[key], depth, currentDepth, seen);
    }
  }
  return value;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        {
          warn$1(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin2, ...options) {
        if (installedPlugins.has(plugin2)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin2 && isFunction(plugin2.install)) {
          installedPlugins.add(plugin2);
          plugin2.install(app, ...options);
        } else if (isFunction(plugin2)) {
          installedPlugins.add(plugin2);
          plugin2(app, ...options);
        } else {
          warn$1(
            `A plugin must either be a function or an object with an "install" function.`
          );
        }
        return app;
      },
      mixin(mixin) {
        {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else {
            warn$1(
              "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
            );
          }
        }
        return app;
      },
      component(name, component) {
        {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      // fixed by xxxxxx
      mount() {
      },
      // fixed by xxxxxx
      unmount() {
      },
      provide(key, value) {
        if (key in context.provides) {
          warn$1(
            `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
          );
        }
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
let currentApp = null;
function provide(key, value) {
  if (!currentInstance) {
    {
      warn$1(`provide() can only be used inside setup().`);
    }
  } else {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
    if (currentInstance.type.mpType === "app") {
      currentInstance.appContext.app.provide(key, value);
    }
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = currentInstance || currentRenderingInstance;
  if (instance || currentApp) {
    const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
function hasInjectionContext() {
  return !!(currentInstance || currentRenderingInstance || currentApp);
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    if (isRootHook(type)) {
      target = target.root;
    }
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      if (target.isUnmounted) {
        return;
      }
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else {
    const apiName = toHandlerKey(
      (ErrorTypeStrings[type] || type.replace(/^on/, "")).replace(/ hook$/, "")
    );
    warn$1(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup().`
    );
  }
}
const createHook = (lifecycle) => (hook, target = currentInstance) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
);
const onBeforeMount = createHook("bm");
const onMounted = createHook("m");
const onBeforeUpdate = createHook("bu");
const onUpdated = createHook("u");
const onBeforeUnmount = createHook("bum");
const onUnmounted = createHook("um");
const onServerPrefetch = createHook("sp");
const onRenderTriggered = createHook(
  "rtg"
);
const onRenderTracked = createHook(
  "rtc"
);
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
const getPublicInstance = (i) => {
  if (!i)
    return null;
  if (isStatefulComponent(i))
    return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};
const publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    // fixed by xxxxxx vue-i18n 在 dev 模式，访问了 $el，故模拟一个假的
    // $el: i => i.vnode.el,
    $el: (i) => i.__$el || (i.__$el = {}),
    $data: (i) => i.data,
    $props: (i) => shallowReadonly(i.props),
    $attrs: (i) => shallowReadonly(i.attrs),
    $slots: (i) => shallowReadonly(i.slots),
    $refs: (i) => shallowReadonly(i.refs),
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => resolveMergedOptions(i),
    $forceUpdate: (i) => i.f || (i.f = () => {
      i.effect.dirty = true;
      queueJob(i.update);
    }),
    // $nextTick: i => i.n || (i.n = nextTick.bind(i.proxy!)),// fixed by xxxxxx
    $watch: (i) => instanceWatch.bind(i)
  })
);
const isReservedPrefix = (key) => key === "_" || key === "$";
const hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
const PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    let normalizedProps;
    if (key[0] !== "$") {
      const n2 = accessCache[key];
      if (n2 !== void 0) {
        switch (n2) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (
        // only cache other properties when instance has declared (thus stable)
        // props
        (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
      ) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance, "get", key);
      } else if (key === "$slots") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn$1(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(
        `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, propsOptions }
  }, key) {
    let normalizedProps;
    return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(
          `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
let shouldCacheAccess = true;
function applyOptions$1(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook$1(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = createDuplicateChecker();
  {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        }
        {
          checkDuplicateProperties("Methods", key);
        }
      } else {
        warn$1(
          `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
        );
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$1(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!isObject(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get2 === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
        warn$1(
          `Write operation failed: computed property "${key}" is readonly.`
        );
      };
      const c2 = computed({
        get: get2,
        set: set2
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c2.value,
        set: (v) => c2.value = v
      });
      {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  {
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
  }
  {
    if (created) {
      callHook$1(created, instance, "c");
    }
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components)
    instance.components = components;
  if (directives)
    instance.directives = directives;
  if (instance.ctx.$onApplyOptions) {
    instance.ctx.$onApplyOptions(options, instance, publicThis);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook$1(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      watch(getter, handler);
    } else {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch(getter, handler, raw);
      } else {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m2) => mergeOptions(resolved, m2, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m2) => mergeOptions(to, m2, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
const internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray$1,
  created: mergeAsArray$1,
  beforeMount: mergeAsArray$1,
  mounted: mergeAsArray$1,
  beforeUpdate: mergeAsArray$1,
  updated: mergeAsArray$1,
  beforeDestroy: mergeAsArray$1,
  beforeUnmount: mergeAsArray$1,
  destroyed: mergeAsArray$1,
  unmounted: mergeAsArray$1,
  activated: mergeAsArray$1,
  deactivated: mergeAsArray$1,
  errorCaptured: mergeAsArray$1,
  serverPrefetch: mergeAsArray$1,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray$1(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to)
    return from;
  if (!from)
    return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray$1(to[key], from[key]);
  }
  return merged;
}
function initProps$1(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = {};
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId)
      return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance, "set", "$attrs");
  }
  {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys)
        needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        if (prop) {
          const booleanIndex = getTypeIndex(Boolean, prop.type);
          const stringIndex = getTypeIndex(String, prop.type);
          prop[
            0
            /* shouldCast */
          ] = booleanIndex > -1;
          prop[
            1
            /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex;
          if (booleanIndex > -1 || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  } else {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function isSameType(a, b) {
  return getType(a) === getType(b);
}
function getTypeIndex(type, expectedTypes) {
  if (isArray(expectedTypes)) {
    return expectedTypes.findIndex((t2) => isSameType(t2, type));
  } else if (isFunction(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }
  return -1;
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  for (const key in options) {
    let opt = options[key];
    if (opt == null)
      continue;
    validateProp(
      key,
      resolvedValues[key],
      opt,
      shallowReadonly(resolvedValues),
      !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key))
    );
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  const { type, required, validator, skipCheck } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
const isSimpleType = /* @__PURE__ */ makeMap(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (isSimpleType(expectedType)) {
    const t2 = typeof value;
    valid = t2 === expectedType.toLowerCase();
    if (!valid && t2 === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else if (expectedType === "null") {
    valid = value === null;
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
let supported;
let perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    perf.mark(endTag);
    perf.measure(
      `<${formatComponentName(instance, instance.type)}> ${type}`,
      startTag,
      endTag
    );
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
const queuePostRenderEffect$1 = queuePostFlushCb;
const Fragment = Symbol.for("v-fgt");
const Text = Symbol.for("v-txt");
const Comment = Symbol.for("v-cmt");
const Static = Symbol.for("v-stc");
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
const InternalObjectKey = `__vInternal`;
function guardReactiveProps(props) {
  if (!props)
    return null;
  return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
}
const emptyAppContext = createAppContext();
let uid = 0;
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  {
    instance.ctx = createDevRenderContext(instance);
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
let internalSetCurrentInstance;
let setInSSRSetupState;
{
  internalSetCurrentInstance = (i) => {
    currentInstance = i;
  };
  setInSSRSetupState = (v) => {
    isInSSRComponentSetup = v;
  };
}
const setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
const unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
const isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, { isNativeTag }) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1(
      "Do not use built-in or reserved HTML elements as component id: " + name
    );
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
let isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false) {
  isSSR && setInSSRSetupState(isSSR);
  const {
    props
    /*, children*/
  } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps$1(instance, props, isStateful, isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component2 = instance.type;
  {
    if (Component2.name) {
      validateComponentName(Component2.name, instance.appContext.config);
    }
    if (Component2.components) {
      const names = Object.keys(Component2.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component2.directives) {
      const names = Object.keys(Component2.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component2.compilerOptions && isRuntimeOnly()) {
      warn$1(
        `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
      );
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
  {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component2;
  if (setup) {
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    pauseTracking();
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        shallowReadonly(instance.props),
        setupContext
      ]
    );
    resetTracking();
    reset();
    if (isPromise(setupResult)) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      {
        warn$1(
          `setup() returned a Promise, but the version of Vue you are using does not support it yet.`
        );
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(
        `setup() should not return VNodes directly - return a render function instead.`
      );
    }
    {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(
      `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
    );
  }
  finishComponentSetup(instance, isSSR);
}
let compile;
const isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component2 = instance.type;
  if (!instance.render) {
    instance.render = Component2.render || NOOP;
  }
  {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions$1(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
  if (!Component2.render && instance.render === NOOP && !isSSR) {
    if (Component2.template) {
      warn$1(
        `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
      );
    } else {
      warn$1(`Component is missing template or render function.`);
    }
  }
}
function getAttrsProxy(instance) {
  return instance.attrsProxy || (instance.attrsProxy = new Proxy(
    instance.attrs,
    {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn$1(`setupContext.attrs is readonly.`);
        return false;
      }
    }
  ));
}
function getSlotsProxy(instance) {
  return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
    get(target, key) {
      track(instance, "get", "$slots");
      return target[key];
    }
  }));
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray(exposed)) {
            exposedType = "array";
          } else if (isRef(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(
            `expose() should be passed a plain object, received ${exposedType}.`
          );
        }
      }
    }
    instance.exposed = exposed || {};
  };
  {
    return Object.freeze({
      get attrs() {
        return getAttrsProxy(instance);
      },
      get slots() {
        return getSlotsProxy(instance);
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  }
}
function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        }
        return instance.proxy[key];
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  }
}
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component2, includeInferred = true) {
  return isFunction(Component2) ? Component2.displayName || Component2.name : Component2.name || includeInferred && Component2.__name;
}
function formatComponentName(instance, Component2, isRoot = false) {
  let name = getComponentName(Component2);
  if (!name && Component2.__file) {
    const match = Component2.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component2) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
const computed = (getterOrOptions, debugOptions) => {
  const c2 = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c2._warnRecursive = true;
    }
  }
  return c2;
};
const version = "3.4.21";
const warn = warn$1;
function unwrapper(target) {
  return unref(target);
}
const ARRAYTYPE = "[object Array]";
const OBJECTTYPE = "[object Object]";
function diff(current, pre) {
  const result = {};
  syncKeys(current, pre);
  _diff(current, pre, "", result);
  return result;
}
function syncKeys(current, pre) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
    for (let key in pre) {
      const currentValue = current[key];
      if (currentValue === void 0) {
        current[key] = null;
      } else {
        syncKeys(currentValue, pre[key]);
      }
    }
  } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
    if (current.length >= pre.length) {
      pre.forEach((item, index2) => {
        syncKeys(current[index2], item);
      });
    }
  }
}
function _diff(current, pre, path, result) {
  current = unwrapper(current);
  if (current === pre)
    return;
  const rootCurrentType = toTypeString(current);
  const rootPreType = toTypeString(pre);
  if (rootCurrentType == OBJECTTYPE) {
    if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
      setResult(result, path, current);
    } else {
      for (let key in current) {
        const currentValue = unwrapper(current[key]);
        const preValue = pre[key];
        const currentType = toTypeString(currentValue);
        const preType = toTypeString(preValue);
        if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
          if (currentValue != preValue) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key,
              currentValue
            );
          }
        } else if (currentType == ARRAYTYPE) {
          if (preType != ARRAYTYPE) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key,
              currentValue
            );
          } else {
            if (currentValue.length < preValue.length) {
              setResult(
                result,
                (path == "" ? "" : path + ".") + key,
                currentValue
              );
            } else {
              currentValue.forEach((item, index2) => {
                _diff(
                  item,
                  preValue[index2],
                  (path == "" ? "" : path + ".") + key + "[" + index2 + "]",
                  result
                );
              });
            }
          }
        } else if (currentType == OBJECTTYPE) {
          if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
            setResult(
              result,
              (path == "" ? "" : path + ".") + key,
              currentValue
            );
          } else {
            for (let subKey in currentValue) {
              _diff(
                currentValue[subKey],
                preValue[subKey],
                (path == "" ? "" : path + ".") + key + "." + subKey,
                result
              );
            }
          }
        }
      }
    }
  } else if (rootCurrentType == ARRAYTYPE) {
    if (rootPreType != ARRAYTYPE) {
      setResult(result, path, current);
    } else {
      if (current.length < pre.length) {
        setResult(result, path, current);
      } else {
        current.forEach((item, index2) => {
          _diff(item, pre[index2], path + "[" + index2 + "]", result);
        });
      }
    }
  } else {
    setResult(result, path, current);
  }
}
function setResult(result, k, v) {
  result[k] = v;
}
function hasComponentEffect(instance) {
  return queue.includes(instance.update);
}
function flushCallbacks(instance) {
  const ctx = instance.ctx;
  const callbacks = ctx.__next_tick_callbacks;
  if (callbacks && callbacks.length) {
    const copies = callbacks.slice(0);
    callbacks.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }
}
function nextTick(instance, fn) {
  const ctx = instance.ctx;
  if (!ctx.__next_tick_pending && !hasComponentEffect(instance)) {
    return nextTick$1(fn && fn.bind(instance.proxy));
  }
  let _resolve;
  if (!ctx.__next_tick_callbacks) {
    ctx.__next_tick_callbacks = [];
  }
  ctx.__next_tick_callbacks.push(() => {
    if (fn) {
      callWithErrorHandling(
        fn.bind(instance.proxy),
        instance,
        14
      );
    } else if (_resolve) {
      _resolve(instance.proxy);
    }
  });
  return new Promise((resolve2) => {
    _resolve = resolve2;
  });
}
function clone(src, seen) {
  src = unwrapper(src);
  const type = typeof src;
  if (type === "object" && src !== null) {
    let copy = seen.get(src);
    if (typeof copy !== "undefined") {
      return copy;
    }
    if (isArray(src)) {
      const len = src.length;
      copy = new Array(len);
      seen.set(src, copy);
      for (let i = 0; i < len; i++) {
        copy[i] = clone(src[i], seen);
      }
    } else {
      copy = {};
      seen.set(src, copy);
      for (const name in src) {
        if (hasOwn(src, name)) {
          copy[name] = clone(src[name], seen);
        }
      }
    }
    return copy;
  }
  if (type !== "symbol") {
    return src;
  }
}
function deepCopy(src) {
  return clone(src, typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
}
function getMPInstanceData(instance, keys) {
  const data = instance.data;
  const ret = /* @__PURE__ */ Object.create(null);
  keys.forEach((key) => {
    ret[key] = data[key];
  });
  return ret;
}
function patch(instance, data, oldData) {
  if (!data) {
    return;
  }
  data = deepCopy(data);
  const ctx = instance.ctx;
  const mpType = ctx.mpType;
  if (mpType === "page" || mpType === "component") {
    data.r0 = 1;
    const mpInstance = ctx.$scope;
    const keys = Object.keys(data);
    const diffData = diff(data, oldData || getMPInstanceData(mpInstance, keys));
    if (Object.keys(diffData).length) {
      ctx.__next_tick_pending = true;
      mpInstance.setData(diffData, () => {
        ctx.__next_tick_pending = false;
        flushCallbacks(instance);
      });
      flushPreFlushCbs();
    } else {
      flushCallbacks(instance);
    }
  }
}
function initAppConfig(appConfig) {
  appConfig.globalProperties.$nextTick = function $nextTick(fn) {
    return nextTick(this.$, fn);
  };
}
function onApplyOptions(options, instance, publicThis) {
  instance.appContext.config.globalProperties.$applyOptions(
    options,
    instance,
    publicThis
  );
  const computedOptions = options.computed;
  if (computedOptions) {
    const keys = Object.keys(computedOptions);
    if (keys.length) {
      const ctx = instance.ctx;
      if (!ctx.$computedKeys) {
        ctx.$computedKeys = [];
      }
      ctx.$computedKeys.push(...keys);
    }
  }
  delete instance.ctx.$onApplyOptions;
}
function setRef$1(instance, isUnmount = false) {
  const {
    setupState,
    $templateRefs,
    ctx: { $scope, $mpPlatform }
  } = instance;
  if ($mpPlatform === "mp-alipay") {
    return;
  }
  if (!$templateRefs || !$scope) {
    return;
  }
  if (isUnmount) {
    return $templateRefs.forEach(
      (templateRef) => setTemplateRef(templateRef, null, setupState)
    );
  }
  const check = $mpPlatform === "mp-baidu" || $mpPlatform === "mp-toutiao";
  const doSetByRefs = (refs) => {
    const mpComponents = (
      // 字节小程序 selectAllComponents 可能返回 null
      // https://github.com/dcloudio/uni-app/issues/3954
      ($scope.selectAllComponents(".r") || []).concat(
        $scope.selectAllComponents(".r-i-f") || []
      )
    );
    return refs.filter((templateRef) => {
      const refValue = findComponentPublicInstance(mpComponents, templateRef.i);
      if (check && refValue === null) {
        return true;
      }
      setTemplateRef(templateRef, refValue, setupState);
      return false;
    });
  };
  const doSet = () => {
    const refs = doSetByRefs($templateRefs);
    if (refs.length && instance.proxy && instance.proxy.$scope) {
      instance.proxy.$scope.setData({ r1: 1 }, () => {
        doSetByRefs(refs);
      });
    }
  };
  if ($scope._$setRef) {
    $scope._$setRef(doSet);
  } else {
    nextTick(instance, doSet);
  }
}
function toSkip(value) {
  if (isObject(value)) {
    markRaw(value);
  }
  return value;
}
function findComponentPublicInstance(mpComponents, id) {
  const mpInstance = mpComponents.find(
    (com) => com && (com.properties || com.props).uI === id
  );
  if (mpInstance) {
    const vm = mpInstance.$vm;
    if (vm) {
      return getExposeProxy(vm.$) || vm;
    }
    return toSkip(mpInstance);
  }
  return null;
}
function setTemplateRef({ r: r2, f: f2 }, refValue, setupState) {
  if (isFunction(r2)) {
    r2(refValue, {});
  } else {
    const _isString = isString(r2);
    const _isRef = isRef(r2);
    if (_isString || _isRef) {
      if (f2) {
        if (!_isRef) {
          return;
        }
        if (!isArray(r2.value)) {
          r2.value = [];
        }
        const existing = r2.value;
        if (existing.indexOf(refValue) === -1) {
          existing.push(refValue);
          if (!refValue) {
            return;
          }
          onBeforeUnmount(() => remove(existing, refValue), refValue.$);
        }
      } else if (_isString) {
        if (hasOwn(setupState, r2)) {
          setupState[r2] = refValue;
        }
      } else if (isRef(r2)) {
        r2.value = refValue;
      } else {
        warnRef(r2);
      }
    } else {
      warnRef(r2);
    }
  }
}
function warnRef(ref2) {
  warn("Invalid template ref type:", ref2, `(${typeof ref2})`);
}
const queuePostRenderEffect = queuePostFlushCb;
function mountComponent(initialVNode, options) {
  const instance = initialVNode.component = createComponentInstance(initialVNode, options.parentComponent, null);
  {
    instance.ctx.$onApplyOptions = onApplyOptions;
    instance.ctx.$children = [];
  }
  if (options.mpType === "app") {
    instance.render = NOOP;
  }
  if (options.onBeforeSetup) {
    options.onBeforeSetup(instance, options);
  }
  {
    pushWarningContext(initialVNode);
    startMeasure(instance, `mount`);
  }
  {
    startMeasure(instance, `init`);
  }
  setupComponent(instance);
  {
    endMeasure(instance, `init`);
  }
  {
    if (options.parentComponent && instance.proxy) {
      options.parentComponent.ctx.$children.push(getExposeProxy(instance) || instance.proxy);
    }
  }
  setupRenderEffect(instance);
  {
    popWarningContext();
    endMeasure(instance, `mount`);
  }
  return instance.proxy;
}
const getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
function renderComponentRoot(instance) {
  const {
    type: Component2,
    vnode,
    proxy,
    withProxy,
    props,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    data,
    setupState,
    ctx,
    uid: uid2,
    appContext: {
      app: {
        config: {
          globalProperties: { pruneComponentPropsCache: pruneComponentPropsCache2 }
        }
      }
    },
    inheritAttrs
  } = instance;
  instance.$templateRefs = [];
  instance.$ei = 0;
  pruneComponentPropsCache2(uid2);
  instance.__counter = instance.__counter === 0 ? 1 : 0;
  let result;
  const prev = setCurrentRenderingInstance(instance);
  try {
    if (vnode.shapeFlag & 4) {
      fallthroughAttrs(inheritAttrs, props, propsOptions, attrs);
      const proxyToUse = withProxy || proxy;
      result = render.call(
        proxyToUse,
        proxyToUse,
        renderCache,
        props,
        setupState,
        data,
        ctx
      );
    } else {
      fallthroughAttrs(
        inheritAttrs,
        props,
        propsOptions,
        Component2.props ? attrs : getFunctionalFallthrough(attrs)
      );
      const render2 = Component2;
      result = render2.length > 1 ? render2(props, { attrs, slots, emit: emit2 }) : render2(
        props,
        null
        /* we know it doesn't need it */
      );
    }
  } catch (err) {
    handleError(err, instance, 1);
    result = false;
  }
  setRef$1(instance);
  setCurrentRenderingInstance(prev);
  return result;
}
function fallthroughAttrs(inheritAttrs, props, propsOptions, fallthroughAttrs2) {
  if (props && fallthroughAttrs2 && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs2).filter(
      (key) => key !== "class" && key !== "style"
    );
    if (!keys.length) {
      return;
    }
    if (propsOptions && keys.some(isModelListener)) {
      keys.forEach((key) => {
        if (!isModelListener(key) || !(key.slice(9) in propsOptions)) {
          props[key] = fallthroughAttrs2[key];
        }
      });
    } else {
      keys.forEach((key) => props[key] = fallthroughAttrs2[key]);
    }
  }
}
const updateComponentPreRender = (instance) => {
  pauseTracking();
  flushPreFlushCbs();
  resetTracking();
};
function componentUpdateScopedSlotsFn() {
  const scopedSlotsData = this.$scopedSlotsData;
  if (!scopedSlotsData || scopedSlotsData.length === 0) {
    return;
  }
  const mpInstance = this.ctx.$scope;
  const oldData = mpInstance.data;
  const diffData = /* @__PURE__ */ Object.create(null);
  scopedSlotsData.forEach(({ path, index: index2, data }) => {
    const oldScopedSlotData = getValueByDataPath(oldData, path);
    const diffPath = isString(index2) ? `${path}.${index2}` : `${path}[${index2}]`;
    if (typeof oldScopedSlotData === "undefined" || typeof oldScopedSlotData[index2] === "undefined") {
      diffData[diffPath] = data;
    } else {
      const diffScopedSlotData = diff(
        data,
        oldScopedSlotData[index2]
      );
      Object.keys(diffScopedSlotData).forEach((name) => {
        diffData[diffPath + "." + name] = diffScopedSlotData[name];
      });
    }
  });
  scopedSlotsData.length = 0;
  if (Object.keys(diffData).length) {
    mpInstance.setData(diffData);
  }
}
function toggleRecurse({ effect: effect2, update }, allowed) {
  effect2.allowRecurse = update.allowRecurse = allowed;
}
function setupRenderEffect(instance) {
  const updateScopedSlots = componentUpdateScopedSlotsFn.bind(
    instance
  );
  instance.$updateScopedSlots = () => nextTick$1(() => queueJob(updateScopedSlots));
  const componentUpdateFn = () => {
    if (!instance.isMounted) {
      onBeforeUnmount(() => {
        setRef$1(instance, true);
      }, instance);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      {
        devtoolsComponentAdded(instance);
      }
    } else {
      const { next, bu, u } = instance;
      {
        pushWarningContext(next || instance.vnode);
      }
      toggleRecurse(instance, false);
      updateComponentPreRender();
      if (bu) {
        invokeArrayFns$1(bu);
      }
      toggleRecurse(instance, true);
      {
        startMeasure(instance, `patch`);
      }
      patch(instance, renderComponentRoot(instance));
      {
        endMeasure(instance, `patch`);
      }
      if (u) {
        queuePostRenderEffect(u);
      }
      {
        devtoolsComponentUpdated(instance);
      }
      {
        popWarningContext();
      }
    }
  };
  const effect2 = instance.effect = new ReactiveEffect2(
    componentUpdateFn,
    NOOP,
    () => queueJob(update),
    instance.scope
    // track it in component's effect scope
  );
  const update = instance.update = () => {
    if (effect2.dirty) {
      effect2.run();
    }
  };
  update.id = instance.uid;
  toggleRecurse(instance, true);
  {
    effect2.onTrack = instance.rtc ? (e2) => invokeArrayFns$1(instance.rtc, e2) : void 0;
    effect2.onTrigger = instance.rtg ? (e2) => invokeArrayFns$1(instance.rtg, e2) : void 0;
    update.ownerInstance = instance;
  }
  update();
}
function unmountComponent(instance) {
  const { bum, scope, update, um } = instance;
  if (bum) {
    invokeArrayFns$1(bum);
  }
  scope.stop();
  if (update) {
    update.active = false;
  }
  if (um) {
    queuePostRenderEffect(um);
  }
  queuePostRenderEffect(() => {
    instance.isUnmounted = true;
  });
  {
    devtoolsComponentRemoved(instance);
  }
}
const oldCreateApp = createAppAPI();
function getTarget() {
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof my !== "undefined") {
    return my;
  }
}
function createVueApp(rootComponent, rootProps = null) {
  const target = getTarget();
  target.__VUE__ = true;
  {
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const app = oldCreateApp(rootComponent, rootProps);
  const appContext = app._context;
  initAppConfig(appContext.config);
  const createVNode2 = (initialVNode) => {
    initialVNode.appContext = appContext;
    initialVNode.shapeFlag = 6;
    return initialVNode;
  };
  const createComponent2 = function createComponent22(initialVNode, options) {
    return mountComponent(createVNode2(initialVNode), options);
  };
  const destroyComponent = function destroyComponent2(component) {
    return component && unmountComponent(component.$);
  };
  app.mount = function mount() {
    rootComponent.render = NOOP;
    const instance = mountComponent(
      createVNode2({ type: rootComponent }),
      {
        mpType: "app",
        mpInstance: null,
        parentComponent: null,
        slots: [],
        props: null
      }
    );
    app._instance = instance.$;
    {
      devtoolsInitApp(app, version);
    }
    instance.$app = app;
    instance.$createComponent = createComponent2;
    instance.$destroyComponent = destroyComponent;
    appContext.$appInstance = instance;
    return instance;
  };
  app.unmount = function unmount() {
    warn(`Cannot unmount an app.`);
  };
  return app;
}
function injectLifecycleHook(name, hook, publicThis, instance) {
  if (isFunction(hook)) {
    injectHook(name, hook.bind(publicThis), instance);
  }
}
function initHooks$1(options, instance, publicThis) {
  const mpType = options.mpType || publicThis.$mpType;
  if (!mpType || mpType === "component") {
    return;
  }
  Object.keys(options).forEach((name) => {
    if (isUniLifecycleHook(name, options[name], false)) {
      const hooks = options[name];
      if (isArray(hooks)) {
        hooks.forEach((hook) => injectLifecycleHook(name, hook, publicThis, instance));
      } else {
        injectLifecycleHook(name, hooks, publicThis, instance);
      }
    }
  });
}
function applyOptions$2(options, instance, publicThis) {
  initHooks$1(options, instance, publicThis);
}
function set$2(target, key, val) {
  return target[key] = val;
}
function $callMethod(method, ...args) {
  const fn = this[method];
  if (fn) {
    return fn(...args);
  }
  console.error(`method ${method} not found`);
  return null;
}
function createErrorHandler(app) {
  return function errorHandler(err, instance, _info) {
    if (!instance) {
      throw err;
    }
    const appInstance = app._instance;
    if (!appInstance || !appInstance.proxy) {
      throw err;
    }
    {
      appInstance.proxy.$callHook(ON_ERROR, err);
    }
  };
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function initOptionMergeStrategies(optionMergeStrategies) {
  UniLifecycleHooks.forEach((name) => {
    optionMergeStrategies[name] = mergeAsArray;
  });
}
let realAtob;
const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== "function") {
  realAtob = function(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, "");
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }
    str += "==".slice(2 - (str.length & 3));
    var bitmap;
    var result = "";
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length; ) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split("").map(function(c2) {
    return "%" + ("00" + c2.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
}
function getCurrentUserInfo() {
  const token = index.getStorageSync("uni_id_token") || "";
  const tokenArr = token.split(".");
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  let userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1e3;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(globalProperties) {
  globalProperties.uniIDHasRole = function(roleId) {
    const { role } = getCurrentUserInfo();
    return role.indexOf(roleId) > -1;
  };
  globalProperties.uniIDHasPermission = function(permissionId) {
    const { permission } = getCurrentUserInfo();
    return this.uniIDHasRole("admin") || permission.indexOf(permissionId) > -1;
  };
  globalProperties.uniIDTokenValid = function() {
    const { tokenExpired } = getCurrentUserInfo();
    return tokenExpired > Date.now();
  };
}
function initApp(app) {
  const appConfig = app._context.config;
  appConfig.errorHandler = invokeCreateErrorHandler(app, createErrorHandler);
  initOptionMergeStrategies(appConfig.optionMergeStrategies);
  const globalProperties = appConfig.globalProperties;
  {
    uniIdMixin(globalProperties);
  }
  {
    globalProperties.$set = set$2;
    globalProperties.$applyOptions = applyOptions$2;
    globalProperties.$callMethod = $callMethod;
  }
  {
    index.invokeCreateVueAppHook(app);
  }
}
const propsCaches = /* @__PURE__ */ Object.create(null);
function renderProps(props) {
  const { uid: uid2, __counter } = getCurrentInstance();
  const propsId = (propsCaches[uid2] || (propsCaches[uid2] = [])).push(guardReactiveProps(props)) - 1;
  return uid2 + "," + propsId + "," + __counter;
}
function pruneComponentPropsCache(uid2) {
  delete propsCaches[uid2];
}
function findComponentPropsData(up) {
  if (!up) {
    return;
  }
  const [uid2, propsId] = up.split(",");
  if (!propsCaches[uid2]) {
    return;
  }
  return propsCaches[uid2][parseInt(propsId)];
}
var plugin = {
  install(app) {
    initApp(app);
    app.config.globalProperties.pruneComponentPropsCache = pruneComponentPropsCache;
    const oldMount = app.mount;
    app.mount = function mount(rootContainer) {
      const instance = oldMount.call(app, rootContainer);
      const createApp2 = getCreateApp();
      if (createApp2) {
        createApp2(instance);
      } else {
        if (typeof createMiniProgramApp !== "undefined") {
          createMiniProgramApp(instance);
        }
      }
      return instance;
    };
  }
};
function getCreateApp() {
  const method = "createApp";
  if (typeof global !== "undefined" && typeof global[method] !== "undefined") {
    return global[method];
  } else if (typeof my !== "undefined") {
    return my[method];
  }
}
function vOn(value, key) {
  const instance = getCurrentInstance();
  const ctx = instance.ctx;
  const extraKey = typeof key !== "undefined" && (ctx.$mpPlatform === "mp-weixin" || ctx.$mpPlatform === "mp-qq" || ctx.$mpPlatform === "mp-xhs") && (isString(key) || typeof key === "number") ? "_" + key : "";
  const name = "e" + instance.$ei++ + extraKey;
  const mpInstance = ctx.$scope;
  if (!value) {
    delete mpInstance[name];
    return name;
  }
  const existingInvoker = mpInstance[name];
  if (existingInvoker) {
    existingInvoker.value = value;
  } else {
    mpInstance[name] = createInvoker(value, instance);
  }
  return name;
}
function createInvoker(initialValue, instance) {
  const invoker = (e2) => {
    patchMPEvent(e2);
    let args = [e2];
    if (e2.detail && e2.detail.__args__) {
      args = e2.detail.__args__;
    }
    const eventValue = invoker.value;
    const invoke = () => callWithAsyncErrorHandling(patchStopImmediatePropagation(e2, eventValue), instance, 5, args);
    const eventTarget = e2.target;
    const eventSync = eventTarget ? eventTarget.dataset ? String(eventTarget.dataset.eventsync) === "true" : false : false;
    if (bubbles.includes(e2.type) && !eventSync) {
      setTimeout(invoke);
    } else {
      const res = invoke();
      if (e2.type === "input" && (isArray(res) || isPromise(res))) {
        return;
      }
      return res;
    }
  };
  invoker.value = initialValue;
  return invoker;
}
const bubbles = [
  // touch事件暂不做延迟，否则在 Android 上会影响性能，比如一些拖拽跟手手势等
  // 'touchstart',
  // 'touchmove',
  // 'touchcancel',
  // 'touchend',
  "tap",
  "longpress",
  "longtap",
  "transitionend",
  "animationstart",
  "animationiteration",
  "animationend",
  "touchforcechange"
];
function patchMPEvent(event) {
  if (event.type && event.target) {
    event.preventDefault = NOOP;
    event.stopPropagation = NOOP;
    event.stopImmediatePropagation = NOOP;
    if (!hasOwn(event, "detail")) {
      event.detail = {};
    }
    if (hasOwn(event, "markerId")) {
      event.detail = typeof event.detail === "object" ? event.detail : {};
      event.detail.markerId = event.markerId;
    }
    if (isPlainObject$1(event.detail) && hasOwn(event.detail, "checked") && !hasOwn(event.detail, "value")) {
      event.detail.value = event.detail.checked;
    }
    if (isPlainObject$1(event.detail)) {
      event.target = extend({}, event.target, event.detail);
    }
  }
}
function patchStopImmediatePropagation(e2, value) {
  if (isArray(value)) {
    const originalStop = e2.stopImmediatePropagation;
    e2.stopImmediatePropagation = () => {
      originalStop && originalStop.call(e2);
      e2._stopped = true;
    };
    return value.map((fn) => (e3) => !e3._stopped && fn(e3));
  } else {
    return value;
  }
}
function vFor(source, renderItem) {
  let ret;
  if (isArray(source) || isString(source)) {
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i, i);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source)) {
      warn(`The v-for range expect an integer value but got ${source}.`);
      return [];
    }
    ret = new Array(source);
    for (let i = 0; i < source; i++) {
      ret[i] = renderItem(i + 1, i, i);
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, i));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i);
      }
    }
  } else {
    ret = [];
  }
  return ret;
}
const o = (value, key) => vOn(value, key);
const f = (source, renderItem) => vFor(source, renderItem);
const e = (target, ...sources) => extend(target, ...sources);
const t = (val) => toDisplayString(val);
const p = (props) => renderProps(props);
function createApp$1(rootComponent, rootProps = null) {
  rootComponent && (rootComponent.mpType = "app");
  return createVueApp(rootComponent, rootProps).use(plugin);
}
const createSSRApp = createApp$1;
const MP_METHODS = [
  "createSelectorQuery",
  "createIntersectionObserver",
  "selectAllComponents",
  "selectComponent"
];
function createEmitFn(oldEmit, ctx) {
  return function emit2(event, ...args) {
    const scope = ctx.$scope;
    if (scope && event) {
      const detail = { __args__: args };
      {
        scope.triggerEvent(event, detail);
      }
    }
    return oldEmit.apply(this, [event, ...args]);
  };
}
function initBaseInstance(instance, options) {
  const ctx = instance.ctx;
  ctx.mpType = options.mpType;
  ctx.$mpType = options.mpType;
  ctx.$mpPlatform = "mp-weixin";
  ctx.$scope = options.mpInstance;
  ctx.$mp = {};
  {
    ctx._self = {};
  }
  instance.slots = {};
  if (isArray(options.slots) && options.slots.length) {
    options.slots.forEach((name) => {
      instance.slots[name] = true;
    });
    if (instance.slots[SLOT_DEFAULT_NAME]) {
      instance.slots.default = true;
    }
  }
  ctx.getOpenerEventChannel = function() {
    {
      return options.mpInstance.getOpenerEventChannel();
    }
  };
  ctx.$hasHook = hasHook;
  ctx.$callHook = callHook;
  instance.emit = createEmitFn(instance.emit, ctx);
}
function initComponentInstance(instance, options) {
  initBaseInstance(instance, options);
  const ctx = instance.ctx;
  MP_METHODS.forEach((method) => {
    ctx[method] = function(...args) {
      const mpInstance = ctx.$scope;
      if (mpInstance && mpInstance[method]) {
        return mpInstance[method].apply(mpInstance, args);
      }
    };
  });
}
function initMocks(instance, mpInstance, mocks2) {
  const ctx = instance.ctx;
  mocks2.forEach((mock) => {
    if (hasOwn(mpInstance, mock)) {
      instance[mock] = ctx[mock] = mpInstance[mock];
    }
  });
}
function hasHook(name) {
  const hooks = this.$[name];
  if (hooks && hooks.length) {
    return true;
  }
  return false;
}
function callHook(name, args) {
  if (name === "mounted") {
    callHook.call(this, "bm");
    this.$.isMounted = true;
    name = "m";
  }
  const hooks = this.$[name];
  return hooks && invokeArrayFns(hooks, args);
}
const PAGE_INIT_HOOKS = [
  ON_LOAD,
  ON_SHOW,
  ON_HIDE,
  ON_UNLOAD,
  ON_RESIZE,
  ON_TAB_ITEM_TAP,
  ON_REACH_BOTTOM,
  ON_PULL_DOWN_REFRESH,
  ON_ADD_TO_FAVORITES
  // 'onReady', // lifetimes.ready
  // 'onPageScroll', // 影响性能，开发者手动注册
  // 'onShareTimeline', // 右上角菜单，开发者手动注册
  // 'onShareAppMessage' // 右上角菜单，开发者手动注册
];
function findHooks(vueOptions, hooks = /* @__PURE__ */ new Set()) {
  if (vueOptions) {
    Object.keys(vueOptions).forEach((name) => {
      if (isUniLifecycleHook(name, vueOptions[name])) {
        hooks.add(name);
      }
    });
    {
      const { extends: extendsOptions, mixins } = vueOptions;
      if (mixins) {
        mixins.forEach((mixin) => findHooks(mixin, hooks));
      }
      if (extendsOptions) {
        findHooks(extendsOptions, hooks);
      }
    }
  }
  return hooks;
}
function initHook(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function(args) {
      return this.$vm && this.$vm.$callHook(hook, args);
    };
  }
}
const EXCLUDE_HOOKS = [ON_READY];
function initHooks(mpOptions, hooks, excludes = EXCLUDE_HOOKS) {
  hooks.forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initUnknownHooks(mpOptions, vueOptions, excludes = EXCLUDE_HOOKS) {
  findHooks(vueOptions).forEach((hook) => initHook(mpOptions, hook, excludes));
}
function initRuntimeHooks(mpOptions, runtimeHooks) {
  if (!runtimeHooks) {
    return;
  }
  const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
  hooks.forEach((hook) => {
    if (runtimeHooks & MINI_PROGRAM_PAGE_RUNTIME_HOOKS[hook]) {
      initHook(mpOptions, hook, []);
    }
  });
}
const findMixinRuntimeHooks = /* @__PURE__ */ once(() => {
  const runtimeHooks = [];
  const app = isFunction(getApp) && getApp({ allowDefault: true });
  if (app && app.$vm && app.$vm.$) {
    const mixins = app.$vm.$.appContext.mixins;
    if (isArray(mixins)) {
      const hooks = Object.keys(MINI_PROGRAM_PAGE_RUNTIME_HOOKS);
      mixins.forEach((mixin) => {
        hooks.forEach((hook) => {
          if (hasOwn(mixin, hook) && !runtimeHooks.includes(hook)) {
            runtimeHooks.push(hook);
          }
        });
      });
    }
  }
  return runtimeHooks;
});
function initMixinRuntimeHooks(mpOptions) {
  initHooks(mpOptions, findMixinRuntimeHooks());
}
const HOOKS = [
  ON_SHOW,
  ON_HIDE,
  ON_ERROR,
  ON_THEME_CHANGE,
  ON_PAGE_NOT_FOUND,
  ON_UNHANDLE_REJECTION
];
function parseApp(instance, parseAppOptions) {
  const internalInstance = instance.$;
  const appOptions = {
    globalData: instance.$options && instance.$options.globalData || {},
    $vm: instance,
    // mp-alipay 组件 data 初始化比 onLaunch 早，提前挂载
    onLaunch(options) {
      this.$vm = instance;
      const ctx = internalInstance.ctx;
      if (this.$vm && ctx.$scope) {
        return;
      }
      initBaseInstance(internalInstance, {
        mpType: "app",
        mpInstance: this,
        slots: []
      });
      ctx.globalData = this.globalData;
      instance.$callHook(ON_LAUNCH, options);
    }
  };
  const { onError } = internalInstance;
  if (onError) {
    internalInstance.appContext.config.errorHandler = (err) => {
      instance.$callHook(ON_ERROR, err);
    };
  }
  initLocale(instance);
  const vueOptions = instance.$.type;
  initHooks(appOptions, HOOKS);
  initUnknownHooks(appOptions, vueOptions);
  {
    const methods = vueOptions.methods;
    methods && extend(appOptions, methods);
  }
  if (parseAppOptions) {
    parseAppOptions.parse(appOptions);
  }
  return appOptions;
}
function initCreateApp(parseAppOptions) {
  return function createApp2(vm) {
    return App(parseApp(vm, parseAppOptions));
  };
}
function initCreateSubpackageApp(parseAppOptions) {
  return function createApp2(vm) {
    const appOptions = parseApp(vm, parseAppOptions);
    const app = isFunction(getApp) && getApp({
      allowDefault: true
    });
    if (!app)
      return;
    vm.$.ctx.$scope = app;
    const globalData = app.globalData;
    if (globalData) {
      Object.keys(appOptions.globalData).forEach((name) => {
        if (!hasOwn(globalData, name)) {
          globalData[name] = appOptions.globalData[name];
        }
      });
    }
    Object.keys(appOptions).forEach((name) => {
      if (!hasOwn(app, name)) {
        app[name] = appOptions[name];
      }
    });
    initAppLifecycle(appOptions, vm);
  };
}
function initAppLifecycle(appOptions, vm) {
  if (isFunction(appOptions.onLaunch)) {
    const args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch(args);
  }
  if (isFunction(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow((args) => {
      vm.$callHook("onShow", args);
    });
  }
  if (isFunction(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide((args) => {
      vm.$callHook("onHide", args);
    });
  }
}
function initLocale(appVm) {
  const locale = ref(normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  Object.defineProperty(appVm, "$locale", {
    get() {
      return locale.value;
    },
    set(v) {
      locale.value = v;
    }
  });
}
function initVueIds(vueIds, mpInstance) {
  if (!vueIds) {
    return;
  }
  const ids = vueIds.split(",");
  const len = ids.length;
  if (len === 1) {
    mpInstance._$vueId = ids[0];
  } else if (len === 2) {
    mpInstance._$vueId = ids[0];
    mpInstance._$vuePid = ids[1];
  }
}
const EXTRAS = ["externalClasses"];
function initExtraOptions(miniProgramComponentOptions, vueOptions) {
  EXTRAS.forEach((name) => {
    if (hasOwn(vueOptions, name)) {
      miniProgramComponentOptions[name] = vueOptions[name];
    }
  });
}
const WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach((name) => {
      const matches = name.match(WORKLET_RE);
      if (matches) {
        const workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
function initWxsCallMethods(methods, wxsCallMethods) {
  if (!isArray(wxsCallMethods)) {
    return;
  }
  wxsCallMethods.forEach((callMethod) => {
    methods[callMethod] = function(args) {
      return this.$vm[callMethod](args);
    };
  });
}
function selectAllComponents(mpInstance, selector, $refs) {
  const components = mpInstance.selectAllComponents(selector);
  components.forEach((component) => {
    const ref2 = component.properties.uR;
    $refs[ref2] = component.$vm || component;
  });
}
function initRefs(instance, mpInstance) {
  Object.defineProperty(instance, "refs", {
    get() {
      const $refs = {};
      selectAllComponents(mpInstance, ".r", $refs);
      const forComponents = mpInstance.selectAllComponents(".r-i-f");
      forComponents.forEach((component) => {
        const ref2 = component.properties.uR;
        if (!ref2) {
          return;
        }
        if (!$refs[ref2]) {
          $refs[ref2] = [];
        }
        $refs[ref2].push(component.$vm || component);
      });
      return $refs;
    }
  });
}
function findVmByVueId(instance, vuePid) {
  const $children = instance.$children;
  for (let i = $children.length - 1; i >= 0; i--) {
    const childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  let parentVm;
  for (let i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
const builtInProps = [
  // 百度小程序,快手小程序自定义组件不支持绑定动态事件，动态dataset，故通过props传递事件信息
  // event-opts
  "eO",
  // 组件 ref
  "uR",
  // 组件 ref-in-for
  "uRIF",
  // 组件 id
  "uI",
  // 组件类型 m: 小程序组件
  "uT",
  // 组件 props
  "uP",
  // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
  "uS"
];
function initDefaultProps(options, isBehavior = false) {
  const properties = {};
  if (!isBehavior) {
    builtInProps.forEach((name) => {
      properties[name] = {
        type: null,
        value: ""
      };
    });
    properties.uS = {
      type: null,
      value: [],
      observer: function(newVal) {
        const $slots = /* @__PURE__ */ Object.create(null);
        newVal && newVal.forEach((slotName) => {
          $slots[slotName] = true;
        });
        this.setData({
          $slots
        });
      }
    };
  }
  if (options.behaviors) {
    if (options.behaviors.includes("wx://form-field")) {
      if (!options.properties || !options.properties.name) {
        properties.name = {
          type: null,
          value: ""
        };
      }
      if (!options.properties || !options.properties.value) {
        properties.value = {
          type: null,
          value: ""
        };
      }
    }
  }
  return properties;
}
function initVirtualHostProps(options) {
  const properties = {};
  {
    if (options && options.virtualHost) {
      properties.virtualHostStyle = {
        type: null,
        value: ""
      };
      properties.virtualHostClass = {
        type: null,
        value: ""
      };
    }
  }
  return properties;
}
function initProps(mpComponentOptions) {
  if (!mpComponentOptions.properties) {
    mpComponentOptions.properties = {};
  }
  extend(mpComponentOptions.properties, initDefaultProps(mpComponentOptions), initVirtualHostProps(mpComponentOptions.options));
}
const PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function parsePropType(type, defaultValue) {
  if (isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function normalizePropType(type, defaultValue) {
  const res = parsePropType(type);
  return PROP_TYPES.indexOf(res) !== -1 ? res : null;
}
function initPageProps({ properties }, rawProps) {
  if (isArray(rawProps)) {
    rawProps.forEach((key) => {
      properties[key] = {
        type: String,
        value: ""
      };
    });
  } else if (isPlainObject$1(rawProps)) {
    Object.keys(rawProps).forEach((key) => {
      const opts = rawProps[key];
      if (isPlainObject$1(opts)) {
        let value = opts.default;
        if (isFunction(value)) {
          value = value();
        }
        const type = opts.type;
        opts.type = normalizePropType(type);
        properties[key] = {
          type: opts.type,
          value
        };
      } else {
        properties[key] = {
          type: normalizePropType(opts)
        };
      }
    });
  }
}
function findPropsData(properties, isPage2) {
  return (isPage2 ? findPagePropsData(properties) : findComponentPropsData(properties.uP)) || {};
}
function findPagePropsData(properties) {
  const propsData = {};
  if (isPlainObject$1(properties)) {
    Object.keys(properties).forEach((name) => {
      if (builtInProps.indexOf(name) === -1) {
        propsData[name] = properties[name];
      }
    });
  }
  return propsData;
}
function initFormField(vm) {
  const vueOptions = vm.$options;
  if (isArray(vueOptions.behaviors) && vueOptions.behaviors.includes("uni://form-field")) {
    vm.$watch("modelValue", () => {
      vm.$scope && vm.$scope.setData({
        name: vm.name,
        value: vm.modelValue
      });
    }, {
      immediate: true
    });
  }
}
function initData(_) {
  return {};
}
function initPropsObserver(componentOptions) {
  const observe = function observe2() {
    const up = this.properties.uP;
    if (!up) {
      return;
    }
    if (this.$vm) {
      updateComponentProps(up, this.$vm.$);
    } else if (this.properties.uT === "m") {
      updateMiniProgramComponentProperties(up, this);
    }
  };
  {
    if (!componentOptions.observers) {
      componentOptions.observers = {};
    }
    componentOptions.observers.uP = observe;
  }
}
function updateMiniProgramComponentProperties(up, mpInstance) {
  const prevProps = mpInstance.properties;
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps, false)) {
    mpInstance.setData(nextProps);
  }
}
function updateComponentProps(up, instance) {
  const prevProps = toRaw(instance.props);
  const nextProps = findComponentPropsData(up) || {};
  if (hasPropsChanged(prevProps, nextProps)) {
    updateProps(instance, nextProps, prevProps, false);
    if (hasQueueJob(instance.update)) {
      invalidateJob(instance.update);
    }
    {
      instance.update();
    }
  }
}
function hasPropsChanged(prevProps, nextProps, checkLen = true) {
  const nextKeys = Object.keys(nextProps);
  if (checkLen && nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (nextProps[key] !== prevProps[key]) {
      return true;
    }
  }
  return false;
}
function initBehaviors(vueOptions) {
  const vueBehaviors = vueOptions.behaviors;
  let vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  const behaviors = [];
  if (isArray(vueBehaviors)) {
    vueBehaviors.forEach((behavior) => {
      behaviors.push(behavior.replace("uni://", "wx://"));
      if (behavior === "uni://form-field") {
        if (isArray(vueProps)) {
          vueProps.push("name");
          vueProps.push("modelValue");
        } else {
          vueProps.name = {
            type: String,
            default: ""
          };
          vueProps.modelValue = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ""
          };
        }
      }
    });
  }
  return behaviors;
}
function applyOptions(componentOptions, vueOptions) {
  componentOptions.data = initData();
  componentOptions.behaviors = initBehaviors(vueOptions);
}
function parseComponent(vueOptions, { parse, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 }) {
  vueOptions = vueOptions.default || vueOptions;
  const options = {
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true,
    pureDataPattern: /^uP$/
  };
  if (isArray(vueOptions.mixins)) {
    vueOptions.mixins.forEach((item) => {
      if (isObject(item.options)) {
        extend(options, item.options);
      }
    });
  }
  if (vueOptions.options) {
    extend(options, vueOptions.options);
  }
  const mpComponentOptions = {
    options,
    lifetimes: initLifetimes2({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }),
    pageLifetimes: {
      show() {
        this.$vm && this.$vm.$callHook("onPageShow");
      },
      hide() {
        this.$vm && this.$vm.$callHook("onPageHide");
      },
      resize(size2) {
        this.$vm && this.$vm.$callHook("onPageResize", size2);
      }
    },
    methods: {
      __l: handleLink2
    }
  };
  {
    applyOptions(mpComponentOptions, vueOptions);
  }
  initProps(mpComponentOptions);
  initPropsObserver(mpComponentOptions);
  initExtraOptions(mpComponentOptions, vueOptions);
  initWxsCallMethods(mpComponentOptions.methods, vueOptions.wxsCallMethods);
  {
    initWorkletMethods(mpComponentOptions.methods, vueOptions.methods);
  }
  if (parse) {
    parse(mpComponentOptions, { handleLink: handleLink2 });
  }
  return mpComponentOptions;
}
function initCreateComponent(parseOptions2) {
  return function createComponent2(vueComponentOptions) {
    return Component(parseComponent(vueComponentOptions, parseOptions2));
  };
}
let $createComponentFn;
let $destroyComponentFn;
function getAppVm() {
  return getApp().$vm;
}
function $createComponent(initialVNode, options) {
  if (!$createComponentFn) {
    $createComponentFn = getAppVm().$createComponent;
  }
  const proxy = $createComponentFn(initialVNode, options);
  return getExposeProxy(proxy.$) || proxy;
}
function $destroyComponent(instance) {
  if (!$destroyComponentFn) {
    $destroyComponentFn = getAppVm().$destroyComponent;
  }
  return $destroyComponentFn(instance);
}
function parsePage(vueOptions, parseOptions2) {
  const { parse, mocks: mocks2, isPage: isPage2, initRelation: initRelation2, handleLink: handleLink2, initLifetimes: initLifetimes2 } = parseOptions2;
  const miniProgramPageOptions = parseComponent(vueOptions, {
    mocks: mocks2,
    isPage: isPage2,
    initRelation: initRelation2,
    handleLink: handleLink2,
    initLifetimes: initLifetimes2
  });
  initPageProps(miniProgramPageOptions, (vueOptions.default || vueOptions).props);
  const methods = miniProgramPageOptions.methods;
  methods.onLoad = function(query) {
    this.options = query;
    this.$page = {
      fullPath: addLeadingSlash(this.route + stringifyQuery(query))
    };
    return this.$vm && this.$vm.$callHook(ON_LOAD, query);
  };
  initHooks(methods, PAGE_INIT_HOOKS);
  {
    initUnknownHooks(methods, vueOptions);
  }
  initRuntimeHooks(methods, vueOptions.__runtimeHooks);
  initMixinRuntimeHooks(methods);
  parse && parse(miniProgramPageOptions, { handleLink: handleLink2 });
  return miniProgramPageOptions;
}
function initCreatePage(parseOptions2) {
  return function createPage2(vuePageOptions) {
    return Component(parsePage(vuePageOptions, parseOptions2));
  };
}
function initCreatePluginApp(parseAppOptions) {
  return function createApp2(vm) {
    initAppLifecycle(parseApp(vm, parseAppOptions), vm);
  };
}
const MPPage = Page;
const MPComponent = Component;
function initTriggerEvent(mpInstance) {
  const oldTriggerEvent = mpInstance.triggerEvent;
  const newTriggerEvent = function(event, ...args) {
    return oldTriggerEvent.apply(mpInstance, [customizeEvent(event), ...args]);
  };
  try {
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initMiniProgramHook(name, options, isComponent) {
  const oldHook = options[name];
  if (!oldHook) {
    options[name] = function() {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function(...args) {
      initTriggerEvent(this);
      return oldHook.apply(this, args);
    };
  }
}
Page = function(options) {
  initMiniProgramHook(ON_LOAD, options);
  return MPPage(options);
};
Component = function(options) {
  initMiniProgramHook("created", options);
  const isVueComponent = options.properties && options.properties.uP;
  if (!isVueComponent) {
    initProps(options);
    initPropsObserver(options);
  }
  return MPComponent(options);
};
function initLifetimes({ mocks: mocks2, isPage: isPage2, initRelation: initRelation2, vueOptions }) {
  return {
    attached() {
      let properties = this.properties;
      initVueIds(properties.uI, this);
      const relationOptions = {
        vuePid: this._$vuePid
      };
      initRelation2(this, relationOptions);
      const mpInstance = this;
      const isMiniProgramPage = isPage2(mpInstance);
      let propsData = properties;
      this.$vm = $createComponent({
        type: vueOptions,
        props: findPropsData(propsData, isMiniProgramPage)
      }, {
        mpType: isMiniProgramPage ? "page" : "component",
        mpInstance,
        slots: properties.uS || {},
        // vueSlots
        parentComponent: relationOptions.parent && relationOptions.parent.$,
        onBeforeSetup(instance, options) {
          initRefs(instance, mpInstance);
          initMocks(instance, mpInstance, mocks2);
          initComponentInstance(instance, options);
        }
      });
      if (!isMiniProgramPage) {
        initFormField(this.$vm);
      }
    },
    ready() {
      if (this.$vm) {
        {
          this.$vm.$callHook("mounted");
          this.$vm.$callHook(ON_READY);
        }
      }
    },
    detached() {
      if (this.$vm) {
        pruneComponentPropsCache(this.$vm.$.uid);
        $destroyComponent(this.$vm);
      }
    }
  };
}
const mocks = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];
function isPage(mpInstance) {
  return !!mpInstance.route;
}
function initRelation(mpInstance, detail) {
  mpInstance.triggerEvent("__l", detail);
}
function handleLink(event) {
  const detail = event.detail || event.value;
  const vuePid = detail.vuePid;
  let parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  detail.parent = parentVm;
}
var parseOptions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  handleLink,
  initLifetimes,
  initRelation,
  isPage,
  mocks
});
const createApp = initCreateApp();
const createPage = initCreatePage(parseOptions);
const createComponent = initCreateComponent(parseOptions);
const createPluginApp = initCreatePluginApp();
const createSubpackageApp = initCreateSubpackageApp();
{
  wx.createApp = global.createApp = createApp;
  wx.createPage = createPage;
  wx.createComponent = createComponent;
  wx.createPluginApp = global.createPluginApp = createPluginApp;
  wx.createSubpackageApp = global.createSubpackageApp = createSubpackageApp;
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var EasemobChat = { exports: {} };
(function(module2, exports2) {
  !function(e2, t2) {
    module2.exports = t2();
  }(self, function() {
    return function() {
      var e2 = { 188: function(e3, t3, r2) {
        var o3, n, i;
        !function(a) {
          if (null != t3 && "number" != typeof t3.nodeType)
            e3.exports = a();
          else if (null != r2.amdO)
            n = [], void 0 === (i = "function" == typeof (o3 = a) ? o3.apply(t3, n) : o3) || (e3.exports = i);
          else {
            var s = a(), c = "undefined" != typeof self ? self : $.global;
            "function" != typeof c.btoa && (c.btoa = s.btoa), "function" != typeof c.atob && (c.atob = s.atob);
          }
        }(function() {
          var e4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          function t4(e5) {
            this.message = e5;
          }
          return t4.prototype = new Error(), t4.prototype.name = "InvalidCharacterError", { btoa: function(r3) {
            for (var o4, n2, i2 = String(r3), a = 0, s = e4, c = ""; i2.charAt(0 | a) || (s = "=", a % 1); c += s.charAt(63 & o4 >> 8 - a % 1 * 8)) {
              if ((n2 = i2.charCodeAt(a += 3 / 4)) > 255)
                throw new t4("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
              o4 = o4 << 8 | n2;
            }
            return c;
          }, atob: function(r3) {
            var o4 = String(r3).replace(/[=]+$/, "");
            if (o4.length % 4 == 1)
              throw new t4("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var n2, i2, a = 0, s = 0, c = ""; i2 = o4.charAt(s++); ~i2 && (n2 = a % 4 ? 64 * n2 + i2 : i2, a++ % 4) ? c += String.fromCharCode(255 & n2 >> (-2 * a & 6)) : 0)
              i2 = e4.indexOf(i2);
            return c;
          } };
        });
      }, 720: function(e3) {
        e3.exports = r2;
        var t3 = null;
        try {
          t3 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch (e4) {
        }
        function r2(e4, t4, r3) {
          this.low = 0 | e4, this.high = 0 | t4, this.unsigned = !!r3;
        }
        function o3(e4) {
          return true === (e4 && e4.__isLong__);
        }
        r2.prototype.__isLong__, Object.defineProperty(r2.prototype, "__isLong__", { value: true }), r2.isLong = o3;
        var n = {}, i = {};
        function a(e4, t4) {
          var r3, o4, a2;
          return t4 ? (a2 = 0 <= (e4 >>>= 0) && e4 < 256) && (o4 = i[e4]) ? o4 : (r3 = c(e4, (0 | e4) < 0 ? -1 : 0, true), a2 && (i[e4] = r3), r3) : (a2 = -128 <= (e4 |= 0) && e4 < 128) && (o4 = n[e4]) ? o4 : (r3 = c(e4, e4 < 0 ? -1 : 0, false), a2 && (n[e4] = r3), r3);
        }
        function s(e4, t4) {
          if (isNaN(e4))
            return t4 ? E2 : g;
          if (t4) {
            if (e4 < 0)
              return E2;
            if (e4 >= h)
              return R;
          } else {
            if (e4 <= -f2)
              return O;
            if (e4 + 1 >= f2)
              return _;
          }
          return e4 < 0 ? s(-e4, t4).neg() : c(e4 % p2 | 0, e4 / p2 | 0, t4);
        }
        function c(e4, t4, o4) {
          return new r2(e4, t4, o4);
        }
        r2.fromInt = a, r2.fromNumber = s, r2.fromBits = c;
        var u = Math.pow;
        function l(e4, t4, r3) {
          if (0 === e4.length)
            throw Error("empty string");
          if ("NaN" === e4 || "Infinity" === e4 || "+Infinity" === e4 || "-Infinity" === e4)
            return g;
          if ("number" == typeof t4 ? (r3 = t4, t4 = false) : t4 = !!t4, (r3 = r3 || 10) < 2 || 36 < r3)
            throw RangeError("radix");
          var o4;
          if ((o4 = e4.indexOf("-")) > 0)
            throw Error("interior hyphen");
          if (0 === o4)
            return l(e4.substring(1), t4, r3).neg();
          for (var n2 = s(u(r3, 8)), i2 = g, a2 = 0; a2 < e4.length; a2 += 8) {
            var c2 = Math.min(8, e4.length - a2), d2 = parseInt(e4.substring(a2, a2 + c2), r3);
            if (c2 < 8) {
              var p3 = s(u(r3, c2));
              i2 = i2.mul(p3).add(s(d2));
            } else
              i2 = (i2 = i2.mul(n2)).add(s(d2));
          }
          return i2.unsigned = t4, i2;
        }
        function d(e4, t4) {
          return "number" == typeof e4 ? s(e4, t4) : "string" == typeof e4 ? l(e4, t4) : c(e4.low, e4.high, "boolean" == typeof t4 ? t4 : e4.unsigned);
        }
        r2.fromString = l, r2.fromValue = d;
        var p2 = 4294967296, h = p2 * p2, f2 = h / 2, m = a(1 << 24), g = a(0);
        r2.ZERO = g;
        var E2 = a(0, true);
        r2.UZERO = E2;
        var y = a(1);
        r2.ONE = y;
        var v = a(1, true);
        r2.UONE = v;
        var T = a(-1);
        r2.NEG_ONE = T;
        var _ = c(-1, 2147483647, false);
        r2.MAX_VALUE = _;
        var R = c(-1, -1, true);
        r2.MAX_UNSIGNED_VALUE = R;
        var O = c(0, -2147483648, false);
        r2.MIN_VALUE = O;
        var I = r2.prototype;
        I.toInt = function() {
          return this.unsigned ? this.low >>> 0 : this.low;
        }, I.toNumber = function() {
          return this.unsigned ? (this.high >>> 0) * p2 + (this.low >>> 0) : this.high * p2 + (this.low >>> 0);
        }, I.toString = function(e4) {
          if ((e4 = e4 || 10) < 2 || 36 < e4)
            throw RangeError("radix");
          if (this.isZero())
            return "0";
          if (this.isNegative()) {
            if (this.eq(O)) {
              var t4 = s(e4), r3 = this.div(t4), o4 = r3.mul(t4).sub(this);
              return r3.toString(e4) + o4.toInt().toString(e4);
            }
            return "-" + this.neg().toString(e4);
          }
          for (var n2 = s(u(e4, 6), this.unsigned), i2 = this, a2 = ""; ; ) {
            var c2 = i2.div(n2), l2 = (i2.sub(c2.mul(n2)).toInt() >>> 0).toString(e4);
            if ((i2 = c2).isZero())
              return l2 + a2;
            for (; l2.length < 6; )
              l2 = "0" + l2;
            a2 = "" + l2 + a2;
          }
        }, I.getHighBits = function() {
          return this.high;
        }, I.getHighBitsUnsigned = function() {
          return this.high >>> 0;
        }, I.getLowBits = function() {
          return this.low;
        }, I.getLowBitsUnsigned = function() {
          return this.low >>> 0;
        }, I.getNumBitsAbs = function() {
          if (this.isNegative())
            return this.eq(O) ? 64 : this.neg().getNumBitsAbs();
          for (var e4 = 0 != this.high ? this.high : this.low, t4 = 31; t4 > 0 && 0 == (e4 & 1 << t4); t4--)
            ;
          return 0 != this.high ? t4 + 33 : t4 + 1;
        }, I.isZero = function() {
          return 0 === this.high && 0 === this.low;
        }, I.eqz = I.isZero, I.isNegative = function() {
          return !this.unsigned && this.high < 0;
        }, I.isPositive = function() {
          return this.unsigned || this.high >= 0;
        }, I.isOdd = function() {
          return 1 == (1 & this.low);
        }, I.isEven = function() {
          return 0 == (1 & this.low);
        }, I.equals = function(e4) {
          return o3(e4) || (e4 = d(e4)), (this.unsigned === e4.unsigned || this.high >>> 31 != 1 || e4.high >>> 31 != 1) && this.high === e4.high && this.low === e4.low;
        }, I.eq = I.equals, I.notEquals = function(e4) {
          return !this.eq(e4);
        }, I.neq = I.notEquals, I.ne = I.notEquals, I.lessThan = function(e4) {
          return this.comp(e4) < 0;
        }, I.lt = I.lessThan, I.lessThanOrEqual = function(e4) {
          return this.comp(e4) <= 0;
        }, I.lte = I.lessThanOrEqual, I.le = I.lessThanOrEqual, I.greaterThan = function(e4) {
          return this.comp(e4) > 0;
        }, I.gt = I.greaterThan, I.greaterThanOrEqual = function(e4) {
          return this.comp(e4) >= 0;
        }, I.gte = I.greaterThanOrEqual, I.ge = I.greaterThanOrEqual, I.compare = function(e4) {
          if (o3(e4) || (e4 = d(e4)), this.eq(e4))
            return 0;
          var t4 = this.isNegative(), r3 = e4.isNegative();
          return t4 && !r3 ? -1 : !t4 && r3 ? 1 : this.unsigned ? e4.high >>> 0 > this.high >>> 0 || e4.high === this.high && e4.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e4).isNegative() ? -1 : 1;
        }, I.comp = I.compare, I.negate = function() {
          return !this.unsigned && this.eq(O) ? O : this.not().add(y);
        }, I.neg = I.negate, I.add = function(e4) {
          o3(e4) || (e4 = d(e4));
          var t4 = this.high >>> 16, r3 = 65535 & this.high, n2 = this.low >>> 16, i2 = 65535 & this.low, a2 = e4.high >>> 16, s2 = 65535 & e4.high, u2 = e4.low >>> 16, l2 = 0, p3 = 0, h2 = 0, f3 = 0;
          return h2 += (f3 += i2 + (65535 & e4.low)) >>> 16, p3 += (h2 += n2 + u2) >>> 16, l2 += (p3 += r3 + s2) >>> 16, l2 += t4 + a2, c((h2 &= 65535) << 16 | (f3 &= 65535), (l2 &= 65535) << 16 | (p3 &= 65535), this.unsigned);
        }, I.subtract = function(e4) {
          return o3(e4) || (e4 = d(e4)), this.add(e4.neg());
        }, I.sub = I.subtract, I.multiply = function(e4) {
          if (this.isZero())
            return g;
          if (o3(e4) || (e4 = d(e4)), t3)
            return c(t3.mul(this.low, this.high, e4.low, e4.high), t3.get_high(), this.unsigned);
          if (e4.isZero())
            return g;
          if (this.eq(O))
            return e4.isOdd() ? O : g;
          if (e4.eq(O))
            return this.isOdd() ? O : g;
          if (this.isNegative())
            return e4.isNegative() ? this.neg().mul(e4.neg()) : this.neg().mul(e4).neg();
          if (e4.isNegative())
            return this.mul(e4.neg()).neg();
          if (this.lt(m) && e4.lt(m))
            return s(this.toNumber() * e4.toNumber(), this.unsigned);
          var r3 = this.high >>> 16, n2 = 65535 & this.high, i2 = this.low >>> 16, a2 = 65535 & this.low, u2 = e4.high >>> 16, l2 = 65535 & e4.high, p3 = e4.low >>> 16, h2 = 65535 & e4.low, f3 = 0, E3 = 0, y2 = 0, v2 = 0;
          return y2 += (v2 += a2 * h2) >>> 16, E3 += (y2 += i2 * h2) >>> 16, y2 &= 65535, E3 += (y2 += a2 * p3) >>> 16, f3 += (E3 += n2 * h2) >>> 16, E3 &= 65535, f3 += (E3 += i2 * p3) >>> 16, E3 &= 65535, f3 += (E3 += a2 * l2) >>> 16, f3 += r3 * h2 + n2 * p3 + i2 * l2 + a2 * u2, c((y2 &= 65535) << 16 | (v2 &= 65535), (f3 &= 65535) << 16 | (E3 &= 65535), this.unsigned);
        }, I.mul = I.multiply, I.divide = function(e4) {
          if (o3(e4) || (e4 = d(e4)), e4.isZero())
            throw Error("division by zero");
          var r3, n2, i2;
          if (t3)
            return this.unsigned || -2147483648 !== this.high || -1 !== e4.low || -1 !== e4.high ? c((this.unsigned ? t3.div_u : t3.div_s)(this.low, this.high, e4.low, e4.high), t3.get_high(), this.unsigned) : this;
          if (this.isZero())
            return this.unsigned ? E2 : g;
          if (this.unsigned) {
            if (e4.unsigned || (e4 = e4.toUnsigned()), e4.gt(this))
              return E2;
            if (e4.gt(this.shru(1)))
              return v;
            i2 = E2;
          } else {
            if (this.eq(O))
              return e4.eq(y) || e4.eq(T) ? O : e4.eq(O) ? y : (r3 = this.shr(1).div(e4).shl(1)).eq(g) ? e4.isNegative() ? y : T : (n2 = this.sub(e4.mul(r3)), i2 = r3.add(n2.div(e4)));
            if (e4.eq(O))
              return this.unsigned ? E2 : g;
            if (this.isNegative())
              return e4.isNegative() ? this.neg().div(e4.neg()) : this.neg().div(e4).neg();
            if (e4.isNegative())
              return this.div(e4.neg()).neg();
            i2 = g;
          }
          for (n2 = this; n2.gte(e4); ) {
            r3 = Math.max(1, Math.floor(n2.toNumber() / e4.toNumber()));
            for (var a2 = Math.ceil(Math.log(r3) / Math.LN2), l2 = a2 <= 48 ? 1 : u(2, a2 - 48), p3 = s(r3), h2 = p3.mul(e4); h2.isNegative() || h2.gt(n2); )
              h2 = (p3 = s(r3 -= l2, this.unsigned)).mul(e4);
            p3.isZero() && (p3 = y), i2 = i2.add(p3), n2 = n2.sub(h2);
          }
          return i2;
        }, I.div = I.divide, I.modulo = function(e4) {
          return o3(e4) || (e4 = d(e4)), t3 ? c((this.unsigned ? t3.rem_u : t3.rem_s)(this.low, this.high, e4.low, e4.high), t3.get_high(), this.unsigned) : this.sub(this.div(e4).mul(e4));
        }, I.mod = I.modulo, I.rem = I.modulo, I.not = function() {
          return c(~this.low, ~this.high, this.unsigned);
        }, I.and = function(e4) {
          return o3(e4) || (e4 = d(e4)), c(this.low & e4.low, this.high & e4.high, this.unsigned);
        }, I.or = function(e4) {
          return o3(e4) || (e4 = d(e4)), c(this.low | e4.low, this.high | e4.high, this.unsigned);
        }, I.xor = function(e4) {
          return o3(e4) || (e4 = d(e4)), c(this.low ^ e4.low, this.high ^ e4.high, this.unsigned);
        }, I.shiftLeft = function(e4) {
          return o3(e4) && (e4 = e4.toInt()), 0 == (e4 &= 63) ? this : e4 < 32 ? c(this.low << e4, this.high << e4 | this.low >>> 32 - e4, this.unsigned) : c(0, this.low << e4 - 32, this.unsigned);
        }, I.shl = I.shiftLeft, I.shiftRight = function(e4) {
          return o3(e4) && (e4 = e4.toInt()), 0 == (e4 &= 63) ? this : e4 < 32 ? c(this.low >>> e4 | this.high << 32 - e4, this.high >> e4, this.unsigned) : c(this.high >> e4 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        }, I.shr = I.shiftRight, I.shiftRightUnsigned = function(e4) {
          if (o3(e4) && (e4 = e4.toInt()), 0 == (e4 &= 63))
            return this;
          var t4 = this.high;
          return e4 < 32 ? c(this.low >>> e4 | t4 << 32 - e4, t4 >>> e4, this.unsigned) : c(32 === e4 ? t4 : t4 >>> e4 - 32, 0, this.unsigned);
        }, I.shru = I.shiftRightUnsigned, I.shr_u = I.shiftRightUnsigned, I.toSigned = function() {
          return this.unsigned ? c(this.low, this.high, false) : this;
        }, I.toUnsigned = function() {
          return this.unsigned ? this : c(this.low, this.high, true);
        }, I.toBytes = function(e4) {
          return e4 ? this.toBytesLE() : this.toBytesBE();
        }, I.toBytesLE = function() {
          var e4 = this.high, t4 = this.low;
          return [255 & t4, t4 >>> 8 & 255, t4 >>> 16 & 255, t4 >>> 24, 255 & e4, e4 >>> 8 & 255, e4 >>> 16 & 255, e4 >>> 24];
        }, I.toBytesBE = function() {
          var e4 = this.high, t4 = this.low;
          return [e4 >>> 24, e4 >>> 16 & 255, e4 >>> 8 & 255, 255 & e4, t4 >>> 24, t4 >>> 16 & 255, t4 >>> 8 & 255, 255 & t4];
        }, r2.fromBytes = function(e4, t4, o4) {
          return o4 ? r2.fromBytesLE(e4, t4) : r2.fromBytesBE(e4, t4);
        }, r2.fromBytesLE = function(e4, t4) {
          return new r2(e4[0] | e4[1] << 8 | e4[2] << 16 | e4[3] << 24, e4[4] | e4[5] << 8 | e4[6] << 16 | e4[7] << 24, t4);
        }, r2.fromBytesBE = function(e4, t4) {
          return new r2(e4[4] << 24 | e4[5] << 16 | e4[6] << 8 | e4[7], e4[0] << 24 | e4[1] << 16 | e4[2] << 8 | e4[3], t4);
        };
      }, 969: function(e3) {
        function t3() {
          this._listeners = {};
        }
        e3.exports = t3, t3.prototype.on = function(e4, t4, r2) {
          return (this._listeners[e4] || (this._listeners[e4] = [])).push({ fn: t4, ctx: r2 || this }), this;
        }, t3.prototype.off = function(e4, t4) {
          if (void 0 === e4)
            this._listeners = {};
          else if (void 0 === t4)
            this._listeners[e4] = [];
          else
            for (var r2 = this._listeners[e4], o3 = 0; o3 < r2.length; )
              r2[o3].fn === t4 ? r2.splice(o3, 1) : ++o3;
          return this;
        }, t3.prototype.emit = function(e4) {
          var t4 = this._listeners[e4];
          if (t4) {
            for (var r2 = [], o3 = 1; o3 < arguments.length; )
              r2.push(arguments[o3++]);
            for (o3 = 0; o3 < t4.length; )
              t4[o3].fn.apply(t4[o3++].ctx, r2);
          }
          return this;
        };
      }, 728: function(e3) {
        e3.exports = function(e4, t3) {
          for (var r2 = new Array(arguments.length - 1), o3 = 0, n = 2, i = true; n < arguments.length; )
            r2[o3++] = arguments[n++];
          return new Promise(function(n2, a) {
            r2[o3] = function(e5) {
              if (i)
                if (i = false, e5)
                  a(e5);
                else {
                  for (var t4 = new Array(arguments.length - 1), r3 = 0; r3 < t4.length; )
                    t4[r3++] = arguments[r3];
                  n2.apply(null, t4);
                }
            };
            try {
              e4.apply(t3 || null, r2);
            } catch (e5) {
              i && (i = false, a(e5));
            }
          });
        };
      }, 440: function(e3) {
        var t3 = e3.exports;
        t3.length = function(e4) {
          var t4 = e4.length;
          if (!t4)
            return 0;
          for (var r3 = 0; --t4 % 4 > 1 && "=" === e4.charAt(t4); )
            ++r3;
          return Math.ceil(3 * e4.length) / 4 - r3;
        };
        for (var r2 = new Array(64), o3 = new Array(123), n = 0; n < 64; )
          o3[r2[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
        t3.encode = function(e4, t4, o4) {
          for (var n2, i2 = null, a = [], s = 0, c = 0; t4 < o4; ) {
            var u = e4[t4++];
            switch (c) {
              case 0:
                a[s++] = r2[u >> 2], n2 = (3 & u) << 4, c = 1;
                break;
              case 1:
                a[s++] = r2[n2 | u >> 4], n2 = (15 & u) << 2, c = 2;
                break;
              case 2:
                a[s++] = r2[n2 | u >> 6], a[s++] = r2[63 & u], c = 0;
            }
            s > 8191 && ((i2 || (i2 = [])).push(String.fromCharCode.apply(String, a)), s = 0);
          }
          return c && (a[s++] = r2[n2], a[s++] = 61, 1 === c && (a[s++] = 61)), i2 ? (s && i2.push(String.fromCharCode.apply(String, a.slice(0, s))), i2.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
        };
        var i = "invalid encoding";
        t3.decode = function(e4, t4, r3) {
          for (var n2, a = r3, s = 0, c = 0; c < e4.length; ) {
            var u = e4.charCodeAt(c++);
            if (61 === u && s > 1)
              break;
            if (void 0 === (u = o3[u]))
              throw Error(i);
            switch (s) {
              case 0:
                n2 = u, s = 1;
                break;
              case 1:
                t4[r3++] = n2 << 2 | (48 & u) >> 4, n2 = u, s = 2;
                break;
              case 2:
                t4[r3++] = (15 & n2) << 4 | (60 & u) >> 2, n2 = u, s = 3;
                break;
              case 3:
                t4[r3++] = (3 & n2) << 6 | u, s = 0;
            }
          }
          if (1 === s)
            throw Error(i);
          return r3 - a;
        }, t3.test = function(e4) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e4);
        };
      }, 72: function(e3) {
        e3.exports = o3;
        var t3, r2 = /\/|\./;
        function o3(e4, t4) {
          r2.test(e4) || (e4 = "google/protobuf/" + e4 + ".proto", t4 = { nested: { google: { nested: { protobuf: { nested: t4 } } } } }), o3[e4] = t4;
        }
        o3("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } }), o3("duration", { Duration: t3 = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } } }), o3("timestamp", { Timestamp: t3 }), o3("empty", { Empty: { fields: {} } }), o3("struct", { Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } }, Value: { oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } }, fields: { nullValue: { type: "NullValue", id: 1 }, numberValue: { type: "double", id: 2 }, stringValue: { type: "string", id: 3 }, boolValue: { type: "bool", id: 4 }, structValue: { type: "Struct", id: 5 }, listValue: { type: "ListValue", id: 6 } } }, NullValue: { values: { NULL_VALUE: 0 } }, ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } } }), o3("wrappers", { DoubleValue: { fields: { value: { type: "double", id: 1 } } }, FloatValue: { fields: { value: { type: "float", id: 1 } } }, Int64Value: { fields: { value: { type: "int64", id: 1 } } }, UInt64Value: { fields: { value: { type: "uint64", id: 1 } } }, Int32Value: { fields: { value: { type: "int32", id: 1 } } }, UInt32Value: { fields: { value: { type: "uint32", id: 1 } } }, BoolValue: { fields: { value: { type: "bool", id: 1 } } }, StringValue: { fields: { value: { type: "string", id: 1 } } }, BytesValue: { fields: { value: { type: "bytes", id: 1 } } } }), o3("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } }), o3.get = function(e4) {
          return o3[e4] || null;
        };
      }, 525: function(e3, t3, r2) {
        var o3, n, i = e3.exports;
        function a(e4, t4, r3, i2) {
          var a2 = i2.m, s2 = i2.d, c = i2.types, u = i2.ksi, l = void 0 !== u;
          if (e4.resolvedType)
            if (e4.resolvedType instanceof o3) {
              for (var d = l ? s2[r3][u] : s2[r3], p2 = e4.resolvedType.values, h = Object.keys(p2), f2 = 0; f2 < h.length; f2++)
                if (!(e4.repeated && p2[h[f2]] === e4.typeDefault || h[f2] != d && p2[h[f2]] != d)) {
                  l ? a2[r3][u] = p2[h[f2]] : a2[r3] = p2[h[f2]];
                  break;
                }
            } else {
              if ("object" != typeof (l ? s2[r3][u] : s2[r3]))
                throw TypeError(e4.fullName + ": object expected");
              l ? a2[r3][u] = c[t4].fromObject(s2[r3][u]) : a2[r3] = c[t4].fromObject(s2[r3]);
            }
          else {
            var m = false;
            switch (e4.type) {
              case "double":
              case "float":
                l ? a2[r3][u] = Number(s2[r3][u]) : a2[r3] = Number(s2[r3]);
                break;
              case "uint32":
              case "fixed32":
                l ? a2[r3][u] = s2[r3][u] >>> 0 : a2[r3] = s2[r3] >>> 0;
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                l ? a2[r3][u] = 0 | s2[r3][u] : a2[r3] = 0 | s2[r3];
                break;
              case "uint64":
                m = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                n.Long ? l ? a2[r3][u] = n.Long.fromValue(s2[r3][u]).unsigned = m : a2[r3] = n.Long.fromValue(s2[r3]).unsigned = m : "string" == typeof (l ? s2[r3][u] : s2[r3]) ? l ? a2[r3][u] = parseInt(s2[r3][u], 10) : a2[r3] = parseInt(s2[r3], 10) : "number" == typeof (l ? s2[r3][u] : s2[r3]) ? l ? a2[r3][u] = s2[r3][u] : a2[r3] = s2[r3] : "object" == typeof (l ? s2[r3][u] : s2[r3]) && (l ? a2[r3][u] = new n.LongBits(s2[r3][u].low >>> 0, s2[r3][u].high >>> 0).toNumber(m) : a2[r3] = new n.LongBits(s2[r3].low >>> 0, s2[r3].high >>> 0).toNumber(m));
                break;
              case "bytes":
                "string" == typeof (l ? s2[r3][u] : s2[r3]) ? l ? n.base64.decode(s2[r3][u], a2[r3][u] = n.newBuffer(n.base64.length(s2[r3][u])), 0) : n.base64.decode(s2[r3], a2[r3] = n.newBuffer(n.base64.length(s2[r3])), 0) : (l ? s2[r3][u] : s2[r3]).length && (l ? a2[r3][u] = s2[r3][u] : a2[r3] = s2[r3]);
                break;
              case "string":
                l ? a2[r3][u] = String(s2[r3][u]) : a2[r3] = String(s2[r3]);
                break;
              case "bool":
                l ? a2[r3][u] = Boolean(s2[r3][u]) : a2[r3] = Boolean(s2[r3]);
            }
          }
        }
        function s(e4, t4, r3, i2) {
          var a2 = i2.m, s2 = i2.d, c = i2.types, u = i2.ksi, l = i2.o, d = void 0 !== u;
          if (e4.resolvedType)
            e4.resolvedType instanceof o3 ? d ? s2[r3][u] = l.enums === String ? c[t4].values[a2[r3][u]] : a2[r3][u] : s2[r3] = l.enums === String ? c[t4].values[a2[r3]] : a2[r3] : d ? s2[r3][u] = c[t4].toObject(a2[r3][u], l) : s2[r3] = c[t4].toObject(a2[r3], l);
          else {
            var p2 = false;
            switch (e4.type) {
              case "double":
              case "float":
                d ? s2[r3][u] = l.json && !isFinite(a2[r3][u]) ? String(a2[r3][u]) : a2[r3][u] : s2[r3] = l.json && !isFinite(a2[r3]) ? String(a2[r3]) : a2[r3];
                break;
              case "uint64":
                p2 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                "number" == typeof a2[r3][u] ? d ? s2[r3][u] = l.longs === String ? String(a2[r3][u]) : a2[r3][u] : s2[r3] = l.longs === String ? String(a2[r3]) : a2[r3] : d ? s2[r3][u] = l.longs === String ? n.Long.prototype.toString.call(a2[r3][u]) : l.longs === Number ? new n.LongBits(a2[r3][u].low >>> 0, a2[r3][u].high >>> 0).toNumber(p2) : a2[r3][u] : s2[r3] = l.longs === String ? n.Long.prototype.toString.call(a2[r3]) : l.longs === Number ? new n.LongBits(a2[r3].low >>> 0, a2[r3].high >>> 0).toNumber(p2) : a2[r3];
                break;
              case "bytes":
                d ? s2[r3][u] = l.bytes === String ? n.base64.encode(a2[r3][u], 0, a2[r3][u].length) : l.bytes === Array ? Array.prototype.slice.call(a2[r3][u]) : a2[r3][u] : s2[r3] = l.bytes === String ? n.base64.encode(a2[r3], 0, a2[r3].length) : l.bytes === Array ? Array.prototype.slice.call(a2[r3]) : a2[r3];
                break;
              default:
                d ? s2[r3][u] = a2[r3][u] : s2[r3] = a2[r3];
            }
          }
        }
        i._configure = function() {
          o3 = r2(582), n = r2(935);
        }, i.fromObject = function(e4) {
          var t4 = e4.fieldsArray;
          return function(e5) {
            return function(r3) {
              if (r3 instanceof this.ctor)
                return r3;
              if (!t4.length)
                return new this.ctor();
              for (var i2 = new this.ctor(), s2 = 0; s2 < t4.length; ++s2) {
                var c, u = t4[s2].resolve(), l = u.name;
                if (u.map) {
                  if (r3[l]) {
                    if ("object" != typeof r3[l])
                      throw TypeError(u.fullName + ": object expected");
                    i2[l] = {};
                  }
                  var d = Object.keys(r3[l]);
                  for (c = 0; c < d.length; ++c)
                    a(u, s2, l, n.merge(n.copy(e5), { m: i2, d: r3, ksi: d[c] }));
                } else if (u.repeated) {
                  if (r3[l]) {
                    if (!Array.isArray(r3[l]))
                      throw TypeError(u.fullName + ": array expected");
                    for (i2[l] = [], c = 0; c < r3[l].length; ++c)
                      a(u, s2, l, n.merge(n.copy(e5), { m: i2, d: r3, ksi: c }));
                  }
                } else
                  (u.resolvedType instanceof o3 || null != r3[l]) && a(u, s2, l, n.merge(n.copy(e5), { m: i2, d: r3 }));
              }
              return i2;
            };
          };
        }, i.toObject = function(e4) {
          var t4 = e4.fieldsArray.slice().sort(n.compareFieldsById);
          return function(r3) {
            return t4.length ? function(i2, a2) {
              a2 = a2 || {};
              for (var c, u, l = {}, d = [], p2 = [], h = [], f2 = 0; f2 < t4.length; ++f2)
                t4[f2].partOf || (t4[f2].resolve().repeated ? d : t4[f2].map ? p2 : h).push(t4[f2]);
              if (d.length && (a2.arrays || a2.defaults))
                for (f2 = 0; f2 < d.length; ++f2)
                  l[d[f2].name] = [];
              if (p2.length && (a2.objects || a2.defaults))
                for (f2 = 0; f2 < p2.length; ++f2)
                  l[p2[f2].name] = {};
              if (h.length && a2.defaults)
                for (f2 = 0; f2 < h.length; ++f2)
                  if (u = (c = h[f2]).name, c.resolvedType instanceof o3)
                    l[u] = a2.enums = String ? c.resolvedType.valuesById[c.typeDefault] : c.typeDefault;
                  else if (c.long)
                    if (n.Long) {
                      var m = new n.Long(c.typeDefault.low, c.typeDefault.high, c.typeDefault.unsigned);
                      l[u] = a2.longs === String ? m.toString() : a2.longs === Number ? m.toNumber() : m;
                    } else
                      l[u] = a2.longs === String ? c.typeDefault.toString() : c.typeDefault.toNumber();
                  else
                    c.bytes ? l[u] = a2.bytes === String ? String.fromCharCode.apply(String, c.typeDefault) : Array.prototype.slice.call(c.typeDefault).join("*..*").split("*..*") : l[u] = c.typeDefault;
              for (f2 = 0; f2 < t4.length; ++f2) {
                u = (c = t4[f2]).name;
                var E2, y, v = e4._fieldsArray.indexOf(c);
                if (c.map) {
                  if (i2[u] && (E2 = Object.keys(i2[u]).length))
                    for (l[u] = {}, y = 0; y < E2.length; ++y)
                      s(c, v, u, n.merge(n.copy(r3), { m: i2, d: l, ksi: E2[y], o: a2 }));
                } else if (c.repeated) {
                  if (i2[u] && i2[u].length)
                    for (l[u] = [], y = 0; y < i2[u].length; ++y)
                      s(c, v, u, n.merge(n.copy(r3), { m: i2, d: l, ksi: y, o: a2 }));
                } else
                  null != i2[u] && i2.hasOwnProperty(u) && s(c, v, u, n.merge(n.copy(r3), { m: i2, d: l, o: a2 })), c.partOf && a2.oneofs && (l[c.partOf.name] = u);
              }
              return l;
            } : function() {
              return {};
            };
          };
        };
      }, 888: function(e3, t3, r2) {
        var o3, n, i;
        function a(e4) {
          return "missing required '" + e4.name + "'";
        }
        function s(e4) {
          return function(t4) {
            var r3 = t4.Reader, s2 = t4.types, c = t4.util;
            return function(t5, u) {
              t5 instanceof r3 || (t5 = r3.create(t5));
              for (var l, d = void 0 === u ? t5.len : t5.pos + u, p2 = new this.ctor(); t5.pos < d; ) {
                var h = t5.uint32();
                if (e4.group && 4 == (7 & h))
                  break;
                for (var f2 = h >>> 3, m = 0, g = false; m < e4.fieldsArray.length; ++m) {
                  var E2 = e4._fieldsArray[m].resolve(), y = E2.name, v = E2.resolvedType instanceof o3 ? "int32" : E2.type;
                  if (f2 == E2.id) {
                    if (g = true, E2.map)
                      t5.skip().pos++, p2[y] === c.emptyObject && (p2[y] = {}), l = t5[E2.keyType](), t5.pos++, null != n.long[E2.keyType] ? null == n.basic[v] ? p2[y]["object" == typeof l ? c.longToHash(l) : l] = s2[m].decode(t5, t5.uint32()) : p2[y]["object" == typeof l ? c.longToHash(l) : l] = t5[v]() : null == n.basic[v] ? p2[y] = s2[m].decode(t5, t5.uint32()) : p2[y] = t5[v]();
                    else if (E2.repeated)
                      if (p2[y] && p2[y].length || (p2[y] = []), null != n.packed[v] && 2 == (7 & h))
                        for (var T = t5.uint32() + t5.pos; t5.pos < T; )
                          p2[y].push(t5[v]());
                      else
                        null == n.basic[v] ? E2.resolvedType.group ? p2[y].push(s2[m].decode(t5)) : p2[y].push(s2[m].decode(t5, t5.uint32())) : p2[y].push(t5[v]());
                    else
                      null == n.basic[v] ? E2.resolvedType.group ? p2[y] = s2[m].decode(t5) : p2[y] = s2[m].decode(t5, t5.uint32()) : p2[y] = t5[v]();
                    break;
                  }
                }
                g || (console.log("t", h), t5.skipType(7 & h));
              }
              for (m = 0; m < e4._fieldsArray.length; ++m) {
                var _ = e4._fieldsArray[m];
                if (_.required && !p2.hasOwnProperty(_.name))
                  throw i.ProtocolError(a(_), { instance: p2 });
              }
              return p2;
            };
          };
        }
        e3.exports = s, s._configure = function() {
          o3 = r2(582), n = r2(696), i = r2(935);
        };
      }, 929: function(e3, t3, r2) {
        var o3, n;
        function i(e4) {
          return function(t4) {
            var r3 = t4.Writer, i2 = t4.types, a = t4.util;
            return function(t5, s) {
              s = s || r3.create();
              for (var c = e4.fieldsArray.slice().sort(a.compareFieldsById), u = 0; u < c.length; u++) {
                var l = c[u], d = e4._fieldsArray.indexOf(l), p2 = l.resolvedType instanceof o3 ? "uint32" : l.type, h = n.basic[p2], f2 = t5[l.name];
                if (l.resolvedType instanceof o3 && "string" == typeof f2 && (f2 = i2[d].values[f2]), l.map) {
                  if (null != f2 && t5.hasOwnProperty(l.name))
                    for (var m = Object.keys(f2), g = 0; g < m.length; ++g)
                      s.uint32((l.id << 3 | 2) >>> 0).fork().uint32(8 | n.mapKey[l.keyType])[l.keyType](m[g]), void 0 === h ? i2[d].encode(f2[m[g]], s.uint32(18).fork()).ldelim().ldelim() : s.uint32(16 | h)[p2](f2[m[g]]).ldelim();
                } else if (l.repeated) {
                  if (f2 && f2.length)
                    if (l.packed && void 0 !== n.packed[p2]) {
                      s.uint32((l.id << 3 | 2) >>> 0).fork();
                      for (var E2 = 0; E2 < f2.length; E2++)
                        s[p2](f2[E2]);
                      s.ldelim();
                    } else
                      for (var y = 0; y < f2.length; y++)
                        void 0 === h ? l.resolvedType.group ? i2[d].encode(f2[y], s.uint32((l.id << 3 | 3) >>> 0)).uint32((l.id << 3 | 4) >>> 0) : i2[d].encode(f2[y], s.uint32((l.id << 3 | 2) >>> 0).fork()).ldelim() : s.uint32((l.id << 3 | h) >>> 0)[p2](f2[y]);
                } else
                  (!l.optional || null != f2 && t5.hasOwnProperty(l.name)) && (l.optional || null != f2 && t5.hasOwnProperty(l.name) || console.warn("注意啦!!!很大概率会报错 类型:", t5.$type ? t5.$type.name : "不晓得", "没有设置对应的属性:", l.name, "检查是不是proto文件属性设置为了required"), void 0 === h ? l.resolvedType.group ? i2[d].encode(f2, s.uint32((l.id << 3 | 3) >>> 0)).uint32((l.id << 3 | 4) >>> 0) : i2[d].encode(f2, s.uint32((l.id << 3 | 2) >>> 0).fork()).ldelim() : s.uint32((l.id << 3 | h) >>> 0)[p2](f2));
              }
              return s;
            };
          };
        }
        e3.exports = i, i._configure = function() {
          o3 = r2(582), n = r2(696);
        };
      }, 582: function(e3, t3, r2) {
        e3.exports = i;
        var o3 = r2(998);
        ((i.prototype = Object.create(o3.prototype)).constructor = i).className = "Enum";
        var n = r2(476);
        function i(e4, t4, r3, n2, i2) {
          if (o3.call(this, e4, r3), t4 && "object" != typeof t4)
            throw TypeError("values must be an object");
          if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = n2, this.comments = i2 || {}, this.reserved = void 0, t4)
            for (var a = Object.keys(t4), s = 0; s < a.length; ++s)
              "number" == typeof t4[a[s]] && (this.valuesById[this.values[a[s]] = t4[a[s]]] = a[s]);
        }
        i.fromJSON = function(e4, t4) {
          var r3 = new i(e4, t4.values, t4.options, t4.comment, t4.comments);
          return r3.reserved = t4.reserved, r3;
        }, i.prototype.toJSON = function(e4) {
          var t4 = !!e4 && Boolean(e4.keepComments);
          return util.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t4 ? this.comment : void 0, "comments", t4 ? this.comments : void 0]);
        }, i.prototype.add = function(e4, t4, r3) {
          if (!util.isString(e4))
            throw TypeError("name must be a string");
          if (!util.isInteger(t4))
            throw TypeError("id must be an integer");
          if (void 0 !== this.values[e4])
            throw Error("duplicate name '" + e4 + "' in " + this);
          if (this.isReservedId(t4))
            throw Error("id " + t4 + " is reserved in " + this);
          if (this.isReservedName(e4))
            throw Error("name '" + e4 + "' is reserved in " + this);
          if (void 0 !== this.valuesById[t4]) {
            if (!this.options || !this.options.allow_alias)
              throw Error("duplicate id " + t4 + " in " + this);
            this.values[e4] = t4;
          } else
            this.valuesById[this.values[e4] = t4] = e4;
          return this.comments[e4] = r3 || null, this;
        }, i.prototype.remove = function(e4) {
          if (!util.isString(e4))
            throw TypeError("name must be a string");
          var t4 = this.values[e4];
          if (null == t4)
            throw Error("name '" + e4 + "' does not exist in " + this);
          return delete this.valuesById[t4], delete this.values[e4], delete this.comments[e4], this;
        }, i.prototype.isReservedId = function(e4) {
          return n.isReservedId(this.reserved, e4);
        }, i.prototype.isReservedName = function(e4) {
          return n.isReservedName(this.reserved, e4);
        };
      }, 286: function(e3, t3, r2) {
        e3.exports = u;
        var o3, n, i, a, s = r2(998);
        ((u.prototype = Object.create(s.prototype)).constructor = u).className = "Field";
        var c = /^required|optional|repeated$/;
        function u(e4, t4, r3, o4, a2, u2, l) {
          if (i.isObject(o4) ? (l = a2, u2 = o4, o4 = a2 = void 0) : i.isObject(a2) && (l = u2, u2 = a2, a2 = void 0), s.call(this, e4, u2), !i.isInteger(t4) || t4 < 0)
            throw TypeError("id must be a non-negative integer");
          if (!i.isString(r3))
            throw TypeError("type must be a string");
          if (void 0 !== o4 && !c.test(o4 = o4.toString().toLowerCase()))
            throw TypeError("rule must be a string rule");
          if (void 0 !== a2 && !i.isString(a2))
            throw TypeError("extend must be a string");
          this.rule = o4 && "optional" !== o4 ? o4 : void 0, this.type = r3, this.id = t4, this.extend = a2 || void 0, this.required = "required" === o4, this.optional = !this.required, this.repeated = "repeated" === o4, this.map = false, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!i.Long && void 0 !== n.long[r3], this.bytes = "bytes" === r3, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = l;
        }
        u.fromJSON = function(e4, t4) {
          return new u(e4, t4.id, t4.type, t4.rule, t4.extend, t4.options, t4.comment);
        }, Object.defineProperty(u.prototype, "packed", { get: function() {
          return null === this._packed && (this._packed = false !== this.getOption("packed")), this._packed;
        } }), u.prototype.setOption = function(e4, t4, r3) {
          return "packed" === e4 && (this._packed = null), s.prototype.setOption.call(this, e4, t4, r3);
        }, u.prototype.toJSON = function(e4) {
          var t4 = !!e4 && Boolean(e4.keepComments);
          return i.toObject(["rule", "optional" !== this.rule && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t4 ? this.comment : void 0]);
        }, u.prototype.resolve = function() {
          if (this.resolved)
            return this;
          if (void 0 === (this.typeDefault = n.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof a ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof o3 && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (true !== this.options.packed && (void 0 === this.options.packed || !this.resolvedType || this.resolvedType instanceof o3) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long)
            this.typeDefault = i.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0)), Object.freeze && Object.freeze(this.typeDefault);
          else if (this.bytes && "string" == typeof this.typeDefault) {
            var e4;
            i.utf8.write(this.typeDefault, e4 = i.newBuffer(i.utf8.length(this.typeDefault)), 0), this.typeDefault = e4;
          }
          return this.map ? this.defaultValue = i.emptyObject : this.repeated ? this.defaultValue = i.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof a && (this.parent.ctor.prototype[this.name] = this.defaultValue), s.prototype.resolve.call(this);
        }, u.d = function(e4, t4, r3, o4) {
          return "function" == typeof t4 ? t4 = i.decorateType(t4).name : t4 && "object" == typeof t4 && (t4 = i.decorateEnum(t4).name), function(n2, a2) {
            i.decorateType(n2.constructor).add(new u(a2, e4, t4, r3, { default: o4 }));
          };
        }, u._configure = function() {
          a = r2(192), o3 = r2(582), n = r2(696), i = r2(935);
        };
      }, 283: function(e3) {
        function t3(e4) {
          return "undefined" != typeof Float32Array ? function() {
            var t4 = new Float32Array([-0]), r3 = new Uint8Array(t4.buffer), o4 = 128 === r3[3];
            function n2(e5, o5, n3) {
              t4[0] = e5, o5[n3] = r3[0], o5[n3 + 1] = r3[1], o5[n3 + 2] = r3[2], o5[n3 + 3] = r3[3];
            }
            function i2(e5, o5, n3) {
              t4[0] = e5, o5[n3] = r3[3], o5[n3 + 1] = r3[2], o5[n3 + 2] = r3[1], o5[n3 + 3] = r3[0];
            }
            function a(e5, o5) {
              return r3[0] = e5[o5], r3[1] = e5[o5 + 1], r3[2] = e5[o5 + 2], r3[3] = e5[o5 + 3], t4[0];
            }
            function s(e5, o5) {
              return r3[3] = e5[o5], r3[2] = e5[o5 + 1], r3[1] = e5[o5 + 2], r3[0] = e5[o5 + 3], t4[0];
            }
            e4.writeFloatLE = o4 ? n2 : i2, e4.writeFloatBE = o4 ? i2 : n2, e4.readFloatLE = o4 ? a : s, e4.readFloatBE = o4 ? s : a;
          }() : function() {
            function t4(e5, t5, r3, o4) {
              var n2 = t5 < 0 ? 1 : 0;
              if (n2 && (t5 = -t5), 0 === t5)
                e5(1 / t5 > 0 ? 0 : 2147483648, r3, o4);
              else if (isNaN(t5))
                e5(2143289344, r3, o4);
              else if (t5 > 34028234663852886e22)
                e5((n2 << 31 | 2139095040) >>> 0, r3, o4);
              else if (t5 < 11754943508222875e-54)
                e5((n2 << 31 | Math.round(t5 / 1401298464324817e-60)) >>> 0, r3, o4);
              else {
                var i2 = Math.floor(Math.log(t5) / Math.LN2);
                e5((n2 << 31 | i2 + 127 << 23 | 8388607 & Math.round(t5 * Math.pow(2, -i2) * 8388608)) >>> 0, r3, o4);
              }
            }
            function a(e5, t5, r3) {
              var o4 = e5(t5, r3), n2 = 2 * (o4 >> 31) + 1, i2 = o4 >>> 23 & 255, a2 = 8388607 & o4;
              return 255 === i2 ? a2 ? NaN : n2 * (1 / 0) : 0 === i2 ? 1401298464324817e-60 * n2 * a2 : n2 * Math.pow(2, i2 - 150) * (a2 + 8388608);
            }
            e4.writeFloatLE = t4.bind(null, r2), e4.writeFloatBE = t4.bind(null, o3), e4.readFloatLE = a.bind(null, n), e4.readFloatBE = a.bind(null, i);
          }(), "undefined" != typeof Float64Array ? function() {
            var t4 = new Float64Array([-0]), r3 = new Uint8Array(t4.buffer), o4 = 128 === r3[7];
            function n2(e5, o5, n3) {
              t4[0] = e5, o5[n3] = r3[0], o5[n3 + 1] = r3[1], o5[n3 + 2] = r3[2], o5[n3 + 3] = r3[3], o5[n3 + 4] = r3[4], o5[n3 + 5] = r3[5], o5[n3 + 6] = r3[6], o5[n3 + 7] = r3[7];
            }
            function i2(e5, o5, n3) {
              t4[0] = e5, o5[n3] = r3[7], o5[n3 + 1] = r3[6], o5[n3 + 2] = r3[5], o5[n3 + 3] = r3[4], o5[n3 + 4] = r3[3], o5[n3 + 5] = r3[2], o5[n3 + 6] = r3[1], o5[n3 + 7] = r3[0];
            }
            function a(e5, o5) {
              return r3[0] = e5[o5], r3[1] = e5[o5 + 1], r3[2] = e5[o5 + 2], r3[3] = e5[o5 + 3], r3[4] = e5[o5 + 4], r3[5] = e5[o5 + 5], r3[6] = e5[o5 + 6], r3[7] = e5[o5 + 7], t4[0];
            }
            function s(e5, o5) {
              return r3[7] = e5[o5], r3[6] = e5[o5 + 1], r3[5] = e5[o5 + 2], r3[4] = e5[o5 + 3], r3[3] = e5[o5 + 4], r3[2] = e5[o5 + 5], r3[1] = e5[o5 + 6], r3[0] = e5[o5 + 7], t4[0];
            }
            e4.writeDoubleLE = o4 ? n2 : i2, e4.writeDoubleBE = o4 ? i2 : n2, e4.readDoubleLE = o4 ? a : s, e4.readDoubleBE = o4 ? s : a;
          }() : function() {
            function t4(e5, t5, r3, o4, n2, i2) {
              var a2 = o4 < 0 ? 1 : 0;
              if (a2 && (o4 = -o4), 0 === o4)
                e5(0, n2, i2 + t5), e5(1 / o4 > 0 ? 0 : 2147483648, n2, i2 + r3);
              else if (isNaN(o4))
                e5(0, n2, i2 + t5), e5(2146959360, n2, i2 + r3);
              else if (o4 > 17976931348623157e292)
                e5(0, n2, i2 + t5), e5((a2 << 31 | 2146435072) >>> 0, n2, i2 + r3);
              else {
                var s;
                if (o4 < 22250738585072014e-324)
                  e5((s = o4 / 5e-324) >>> 0, n2, i2 + t5), e5((a2 << 31 | s / 4294967296) >>> 0, n2, i2 + r3);
                else {
                  var c = Math.floor(Math.log(o4) / Math.LN2);
                  1024 === c && (c = 1023), e5(4503599627370496 * (s = o4 * Math.pow(2, -c)) >>> 0, n2, i2 + t5), e5((a2 << 31 | c + 1023 << 20 | 1048576 * s & 1048575) >>> 0, n2, i2 + r3);
                }
              }
            }
            function a(e5, t5, r3, o4, n2) {
              var i2 = e5(o4, n2 + t5), a2 = e5(o4, n2 + r3), s = 2 * (a2 >> 31) + 1, c = a2 >>> 20 & 2047, u = 4294967296 * (1048575 & a2) + i2;
              return 2047 === c ? u ? NaN : s * (1 / 0) : 0 === c ? 5e-324 * s * u : s * Math.pow(2, c - 1075) * (u + 4503599627370496);
            }
            e4.writeDoubleLE = t4.bind(null, r2, 0, 4), e4.writeDoubleBE = t4.bind(null, o3, 4, 0), e4.readDoubleLE = a.bind(null, n, 0, 4), e4.readDoubleBE = a.bind(null, i, 4, 0);
          }(), e4;
        }
        function r2(e4, t4, r3) {
          t4[r3] = 255 & e4, t4[r3 + 1] = e4 >>> 8 & 255, t4[r3 + 2] = e4 >>> 16 & 255, t4[r3 + 3] = e4 >>> 24;
        }
        function o3(e4, t4, r3) {
          t4[r3] = e4 >>> 24, t4[r3 + 1] = e4 >>> 16 & 255, t4[r3 + 2] = e4 >>> 8 & 255, t4[r3 + 3] = 255 & e4;
        }
        function n(e4, t4) {
          return (e4[t4] | e4[t4 + 1] << 8 | e4[t4 + 2] << 16 | e4[t4 + 3] << 24) >>> 0;
        }
        function i(e4, t4) {
          return (e4[t4] << 24 | e4[t4 + 1] << 16 | e4[t4 + 2] << 8 | e4[t4 + 3]) >>> 0;
        }
        e3.exports = t3(t3);
      }, 939: function(e3) {
        e3.exports = r2;
        var t3 = null;
        try {
          t3 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch (e4) {
        }
        function r2(e4, t4, r3) {
          this.low = 0 | e4, this.high = 0 | t4, this.unsigned = !!r3;
        }
        function o3(e4) {
          return true === (e4 && e4.__isLong__);
        }
        r2.prototype.__isLong__, Object.defineProperty(r2.prototype, "__isLong__", { value: true }), r2.isLong = o3;
        var n = {}, i = {};
        function a(e4, t4) {
          var r3, o4, a2;
          return t4 ? (a2 = 0 <= (e4 >>>= 0) && e4 < 256) && (o4 = i[e4]) ? o4 : (r3 = c(e4, (0 | e4) < 0 ? -1 : 0, true), a2 && (i[e4] = r3), r3) : (a2 = -128 <= (e4 |= 0) && e4 < 128) && (o4 = n[e4]) ? o4 : (r3 = c(e4, e4 < 0 ? -1 : 0, false), a2 && (n[e4] = r3), r3);
        }
        function s(e4, t4) {
          if (isNaN(e4))
            return t4 ? E2 : g;
          if (t4) {
            if (e4 < 0)
              return E2;
            if (e4 >= h)
              return R;
          } else {
            if (e4 <= -f2)
              return O;
            if (e4 + 1 >= f2)
              return _;
          }
          return e4 < 0 ? s(-e4, t4).neg() : c(e4 % p2 | 0, e4 / p2 | 0, t4);
        }
        function c(e4, t4, o4) {
          return new r2(e4, t4, o4);
        }
        r2.fromInt = a, r2.fromNumber = s, r2.fromBits = c;
        var u = Math.pow;
        function l(e4, t4, r3) {
          if (0 === e4.length)
            throw Error("empty string");
          if ("NaN" === e4 || "Infinity" === e4 || "+Infinity" === e4 || "-Infinity" === e4)
            return g;
          if ("number" == typeof t4 ? (r3 = t4, t4 = false) : t4 = !!t4, (r3 = r3 || 10) < 2 || 36 < r3)
            throw RangeError("radix");
          var o4;
          if ((o4 = e4.indexOf("-")) > 0)
            throw Error("interior hyphen");
          if (0 === o4)
            return l(e4.substring(1), t4, r3).neg();
          for (var n2 = s(u(r3, 8)), i2 = g, a2 = 0; a2 < e4.length; a2 += 8) {
            var c2 = Math.min(8, e4.length - a2), d2 = parseInt(e4.substring(a2, a2 + c2), r3);
            if (c2 < 8) {
              var p3 = s(u(r3, c2));
              i2 = i2.mul(p3).add(s(d2));
            } else
              i2 = (i2 = i2.mul(n2)).add(s(d2));
          }
          return i2.unsigned = t4, i2;
        }
        function d(e4, t4) {
          return "number" == typeof e4 ? s(e4, t4) : "string" == typeof e4 ? l(e4, t4) : c(e4.low, e4.high, "boolean" == typeof t4 ? t4 : e4.unsigned);
        }
        r2.fromString = l, r2.fromValue = d;
        var p2 = 4294967296, h = p2 * p2, f2 = h / 2, m = a(1 << 24), g = a(0);
        r2.ZERO = g;
        var E2 = a(0, true);
        r2.UZERO = E2;
        var y = a(1);
        r2.ONE = y;
        var v = a(1, true);
        r2.UONE = v;
        var T = a(-1);
        r2.NEG_ONE = T;
        var _ = c(-1, 2147483647, false);
        r2.MAX_VALUE = _;
        var R = c(-1, -1, true);
        r2.MAX_UNSIGNED_VALUE = R;
        var O = c(0, -2147483648, false);
        r2.MIN_VALUE = O;
        var I = r2.prototype;
        I.toInt = function() {
          return this.unsigned ? this.low >>> 0 : this.low;
        }, I.toNumber = function() {
          return this.unsigned ? (this.high >>> 0) * p2 + (this.low >>> 0) : this.high * p2 + (this.low >>> 0);
        }, I.toString = function(e4) {
          if ((e4 = e4 || 10) < 2 || 36 < e4)
            throw RangeError("radix");
          if (this.isZero())
            return "0";
          if (this.isNegative()) {
            if (this.eq(O)) {
              var t4 = s(e4), r3 = this.div(t4), o4 = r3.mul(t4).sub(this);
              return r3.toString(e4) + o4.toInt().toString(e4);
            }
            return "-" + this.neg().toString(e4);
          }
          for (var n2 = s(u(e4, 6), this.unsigned), i2 = this, a2 = ""; ; ) {
            var c2 = i2.div(n2), l2 = (i2.sub(c2.mul(n2)).toInt() >>> 0).toString(e4);
            if ((i2 = c2).isZero())
              return l2 + a2;
            for (; l2.length < 6; )
              l2 = "0" + l2;
            a2 = "" + l2 + a2;
          }
        }, I.getHighBits = function() {
          return this.high;
        }, I.getHighBitsUnsigned = function() {
          return this.high >>> 0;
        }, I.getLowBits = function() {
          return this.low;
        }, I.getLowBitsUnsigned = function() {
          return this.low >>> 0;
        }, I.getNumBitsAbs = function() {
          if (this.isNegative())
            return this.eq(O) ? 64 : this.neg().getNumBitsAbs();
          for (var e4 = 0 != this.high ? this.high : this.low, t4 = 31; t4 > 0 && 0 == (e4 & 1 << t4); t4--)
            ;
          return 0 != this.high ? t4 + 33 : t4 + 1;
        }, I.isZero = function() {
          return 0 === this.high && 0 === this.low;
        }, I.eqz = I.isZero, I.isNegative = function() {
          return !this.unsigned && this.high < 0;
        }, I.isPositive = function() {
          return this.unsigned || this.high >= 0;
        }, I.isOdd = function() {
          return 1 == (1 & this.low);
        }, I.isEven = function() {
          return 0 == (1 & this.low);
        }, I.equals = function(e4) {
          return o3(e4) || (e4 = d(e4)), (this.unsigned === e4.unsigned || this.high >>> 31 != 1 || e4.high >>> 31 != 1) && this.high === e4.high && this.low === e4.low;
        }, I.eq = I.equals, I.notEquals = function(e4) {
          return !this.eq(e4);
        }, I.neq = I.notEquals, I.ne = I.notEquals, I.lessThan = function(e4) {
          return this.comp(e4) < 0;
        }, I.lt = I.lessThan, I.lessThanOrEqual = function(e4) {
          return this.comp(e4) <= 0;
        }, I.lte = I.lessThanOrEqual, I.le = I.lessThanOrEqual, I.greaterThan = function(e4) {
          return this.comp(e4) > 0;
        }, I.gt = I.greaterThan, I.greaterThanOrEqual = function(e4) {
          return this.comp(e4) >= 0;
        }, I.gte = I.greaterThanOrEqual, I.ge = I.greaterThanOrEqual, I.compare = function(e4) {
          if (o3(e4) || (e4 = d(e4)), this.eq(e4))
            return 0;
          var t4 = this.isNegative(), r3 = e4.isNegative();
          return t4 && !r3 ? -1 : !t4 && r3 ? 1 : this.unsigned ? e4.high >>> 0 > this.high >>> 0 || e4.high === this.high && e4.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e4).isNegative() ? -1 : 1;
        }, I.comp = I.compare, I.negate = function() {
          return !this.unsigned && this.eq(O) ? O : this.not().add(y);
        }, I.neg = I.negate, I.add = function(e4) {
          o3(e4) || (e4 = d(e4));
          var t4 = this.high >>> 16, r3 = 65535 & this.high, n2 = this.low >>> 16, i2 = 65535 & this.low, a2 = e4.high >>> 16, s2 = 65535 & e4.high, u2 = e4.low >>> 16, l2 = 0, p3 = 0, h2 = 0, f3 = 0;
          return h2 += (f3 += i2 + (65535 & e4.low)) >>> 16, p3 += (h2 += n2 + u2) >>> 16, l2 += (p3 += r3 + s2) >>> 16, l2 += t4 + a2, c((h2 &= 65535) << 16 | (f3 &= 65535), (l2 &= 65535) << 16 | (p3 &= 65535), this.unsigned);
        }, I.subtract = function(e4) {
          return o3(e4) || (e4 = d(e4)), this.add(e4.neg());
        }, I.sub = I.subtract, I.multiply = function(e4) {
          if (this.isZero())
            return g;
          if (o3(e4) || (e4 = d(e4)), t3)
            return c(t3.mul(this.low, this.high, e4.low, e4.high), t3.get_high(), this.unsigned);
          if (e4.isZero())
            return g;
          if (this.eq(O))
            return e4.isOdd() ? O : g;
          if (e4.eq(O))
            return this.isOdd() ? O : g;
          if (this.isNegative())
            return e4.isNegative() ? this.neg().mul(e4.neg()) : this.neg().mul(e4).neg();
          if (e4.isNegative())
            return this.mul(e4.neg()).neg();
          if (this.lt(m) && e4.lt(m))
            return s(this.toNumber() * e4.toNumber(), this.unsigned);
          var r3 = this.high >>> 16, n2 = 65535 & this.high, i2 = this.low >>> 16, a2 = 65535 & this.low, u2 = e4.high >>> 16, l2 = 65535 & e4.high, p3 = e4.low >>> 16, h2 = 65535 & e4.low, f3 = 0, E3 = 0, y2 = 0, v2 = 0;
          return y2 += (v2 += a2 * h2) >>> 16, E3 += (y2 += i2 * h2) >>> 16, y2 &= 65535, E3 += (y2 += a2 * p3) >>> 16, f3 += (E3 += n2 * h2) >>> 16, E3 &= 65535, f3 += (E3 += i2 * p3) >>> 16, E3 &= 65535, f3 += (E3 += a2 * l2) >>> 16, f3 += r3 * h2 + n2 * p3 + i2 * l2 + a2 * u2, c((y2 &= 65535) << 16 | (v2 &= 65535), (f3 &= 65535) << 16 | (E3 &= 65535), this.unsigned);
        }, I.mul = I.multiply, I.divide = function(e4) {
          if (o3(e4) || (e4 = d(e4)), e4.isZero())
            throw Error("division by zero");
          var r3, n2, i2;
          if (t3)
            return this.unsigned || -2147483648 !== this.high || -1 !== e4.low || -1 !== e4.high ? c((this.unsigned ? t3.div_u : t3.div_s)(this.low, this.high, e4.low, e4.high), t3.get_high(), this.unsigned) : this;
          if (this.isZero())
            return this.unsigned ? E2 : g;
          if (this.unsigned) {
            if (e4.unsigned || (e4 = e4.toUnsigned()), e4.gt(this))
              return E2;
            if (e4.gt(this.shru(1)))
              return v;
            i2 = E2;
          } else {
            if (this.eq(O))
              return e4.eq(y) || e4.eq(T) ? O : e4.eq(O) ? y : (r3 = this.shr(1).div(e4).shl(1)).eq(g) ? e4.isNegative() ? y : T : (n2 = this.sub(e4.mul(r3)), i2 = r3.add(n2.div(e4)));
            if (e4.eq(O))
              return this.unsigned ? E2 : g;
            if (this.isNegative())
              return e4.isNegative() ? this.neg().div(e4.neg()) : this.neg().div(e4).neg();
            if (e4.isNegative())
              return this.div(e4.neg()).neg();
            i2 = g;
          }
          for (n2 = this; n2.gte(e4); ) {
            r3 = Math.max(1, Math.floor(n2.toNumber() / e4.toNumber()));
            for (var a2 = Math.ceil(Math.log(r3) / Math.LN2), l2 = a2 <= 48 ? 1 : u(2, a2 - 48), p3 = s(r3), h2 = p3.mul(e4); h2.isNegative() || h2.gt(n2); )
              h2 = (p3 = s(r3 -= l2, this.unsigned)).mul(e4);
            p3.isZero() && (p3 = y), i2 = i2.add(p3), n2 = n2.sub(h2);
          }
          return i2;
        }, I.div = I.divide, I.modulo = function(e4) {
          return o3(e4) || (e4 = d(e4)), t3 ? c((this.unsigned ? t3.rem_u : t3.rem_s)(this.low, this.high, e4.low, e4.high), t3.get_high(), this.unsigned) : this.sub(this.div(e4).mul(e4));
        }, I.mod = I.modulo, I.rem = I.modulo, I.not = function() {
          return c(~this.low, ~this.high, this.unsigned);
        }, I.and = function(e4) {
          return o3(e4) || (e4 = d(e4)), c(this.low & e4.low, this.high & e4.high, this.unsigned);
        }, I.or = function(e4) {
          return o3(e4) || (e4 = d(e4)), c(this.low | e4.low, this.high | e4.high, this.unsigned);
        }, I.xor = function(e4) {
          return o3(e4) || (e4 = d(e4)), c(this.low ^ e4.low, this.high ^ e4.high, this.unsigned);
        }, I.shiftLeft = function(e4) {
          return o3(e4) && (e4 = e4.toInt()), 0 == (e4 &= 63) ? this : e4 < 32 ? c(this.low << e4, this.high << e4 | this.low >>> 32 - e4, this.unsigned) : c(0, this.low << e4 - 32, this.unsigned);
        }, I.shl = I.shiftLeft, I.shiftRight = function(e4) {
          return o3(e4) && (e4 = e4.toInt()), 0 == (e4 &= 63) ? this : e4 < 32 ? c(this.low >>> e4 | this.high << 32 - e4, this.high >> e4, this.unsigned) : c(this.high >> e4 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        }, I.shr = I.shiftRight, I.shiftRightUnsigned = function(e4) {
          if (o3(e4) && (e4 = e4.toInt()), 0 == (e4 &= 63))
            return this;
          var t4 = this.high;
          return e4 < 32 ? c(this.low >>> e4 | t4 << 32 - e4, t4 >>> e4, this.unsigned) : c(32 === e4 ? t4 : t4 >>> e4 - 32, 0, this.unsigned);
        }, I.shru = I.shiftRightUnsigned, I.shr_u = I.shiftRightUnsigned, I.toSigned = function() {
          return this.unsigned ? c(this.low, this.high, false) : this;
        }, I.toUnsigned = function() {
          return this.unsigned ? this : c(this.low, this.high, true);
        }, I.toBytes = function(e4) {
          return e4 ? this.toBytesLE() : this.toBytesBE();
        }, I.toBytesLE = function() {
          var e4 = this.high, t4 = this.low;
          return [255 & t4, t4 >>> 8 & 255, t4 >>> 16 & 255, t4 >>> 24, 255 & e4, e4 >>> 8 & 255, e4 >>> 16 & 255, e4 >>> 24];
        }, I.toBytesBE = function() {
          var e4 = this.high, t4 = this.low;
          return [e4 >>> 24, e4 >>> 16 & 255, e4 >>> 8 & 255, 255 & e4, t4 >>> 24, t4 >>> 16 & 255, t4 >>> 8 & 255, 255 & t4];
        }, r2.fromBytes = function(e4, t4, o4) {
          return o4 ? r2.fromBytesLE(e4, t4) : r2.fromBytesBE(e4, t4);
        }, r2.fromBytesLE = function(e4, t4) {
          return new r2(e4[0] | e4[1] << 8 | e4[2] << 16 | e4[3] << 24, e4[4] | e4[5] << 8 | e4[6] << 16 | e4[7] << 24, t4);
        }, r2.fromBytesBE = function(e4, t4) {
          return new r2(e4[4] << 24 | e4[5] << 16 | e4[6] << 8 | e4[7], e4[0] << 24 | e4[1] << 16 | e4[2] << 8 | e4[3], t4);
        };
      }, 365: function(e3, t3, r2) {
        e3.exports = n;
        var o3 = r2(935);
        function n(e4, t4) {
          this.lo = e4 >>> 0, this.hi = t4 >>> 0;
        }
        var i = n.zero = new n(0, 0);
        i.toNumber = function() {
          return 0;
        }, i.zzEncode = i.zzDecode = function() {
          return this;
        }, i.length = function() {
          return 1;
        };
        var a = n.zeroHash = "\0\0\0\0\0\0\0\0";
        n.fromNumber = function(e4) {
          if (0 === e4)
            return i;
          var t4 = e4 < 0;
          t4 && (e4 = -e4);
          var r3 = e4 >>> 0, o4 = (e4 - r3) / 4294967296 >>> 0;
          return t4 && (o4 = ~o4 >>> 0, r3 = ~r3 >>> 0, ++r3 > 4294967295 && (r3 = 0, ++o4 > 4294967295 && (o4 = 0))), new n(r3, o4);
        }, n.from = function(e4) {
          if ("number" == typeof e4)
            return n.fromNumber(e4);
          if ("string" == typeof e4 || e4 instanceof String) {
            if (!o3.Long)
              return n.fromNumber(parseInt(e4, 10));
            e4 = o3.Long.fromString(e4);
          }
          return e4.low || e4.high ? new n(e4.low >>> 0, e4.high >>> 0) : i;
        }, n.prototype.toNumber = function(e4) {
          if (!e4 && this.hi >>> 31) {
            var t4 = 1 + ~this.lo >>> 0, r3 = ~this.hi >>> 0;
            return t4 || (r3 = r3 + 1 >>> 0), -(t4 + 4294967296 * r3);
          }
          return this.lo + 4294967296 * this.hi;
        }, n.prototype.toLong = function(e4) {
          return o3.Long ? new o3.Long(0 | this.lo, 0 | this.hi, Boolean(e4)) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e4) };
        };
        var s = String.prototype.charCodeAt;
        n.fromHash = function(e4) {
          return e4 === a ? i : new n((s.call(e4, 0) | s.call(e4, 1) << 8 | s.call(e4, 2) << 16 | s.call(e4, 3) << 24) >>> 0, (s.call(e4, 4) | s.call(e4, 5) << 8 | s.call(e4, 6) << 16 | s.call(e4, 7) << 24) >>> 0);
        }, n.prototype.toHash = function() {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        }, n.prototype.zzEncode = function() {
          var e4 = this.hi >> 31;
          return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e4) >>> 0, this.lo = (this.lo << 1 ^ e4) >>> 0, this;
        }, n.prototype.zzDecode = function() {
          var e4 = -(1 & this.lo);
          return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e4) >>> 0, this.hi = (this.hi >>> 1 ^ e4) >>> 0, this;
        }, n.prototype.length = function() {
          var e4 = this.lo, t4 = (this.lo >>> 28 | this.hi << 4) >>> 0, r3 = this.hi >>> 24;
          return 0 === r3 ? 0 === t4 ? e4 < 16384 ? e4 < 128 ? 1 : 2 : e4 < 2097152 ? 3 : 4 : t4 < 16384 ? t4 < 128 ? 5 : 6 : t4 < 2097152 ? 7 : 8 : r3 < 128 ? 9 : 10;
        };
      }, 435: function(e3, t3, r2) {
        e3.exports = a;
        var o3, n, i = r2(286);
        function a(e4, t4, r3, o4, a2, s) {
          if (i.call(this, e4, t4, o4, void 0, void 0, a2, s), !n.isString(r3))
            throw TypeError("keyType must be a string");
          this.keyType = r3, this.resolvedKeyType = null, this.map = true;
        }
        ((a.prototype = Object.create(i.prototype)).constructor = a).className = "MapField", a.fromJSON = function(e4, t4) {
          return new a(e4, t4.id, t4.keyType, t4.type, t4.options, t4.comment);
        }, a.prototype.toJSON = function(e4) {
          var t4 = !!e4 && Boolean(e4.keepComments);
          return n.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t4 ? this.comment : void 0]);
        }, a.prototype.resolve = function() {
          if (this.resolved)
            return this;
          if (void 0 === o3.mapKey[this.keyType])
            throw Error("invalid key type: " + this.keyType);
          return i.prototype.resolve.call(this);
        }, a.d = function(e4, t4, r3) {
          return "function" == typeof r3 ? r3 = n.decorateType(r3).name : r3 && "object" == typeof r3 && (r3 = n.decorateEnum(r3).name), function(o4, i2) {
            n.decorateType(o4.constructor).add(new a(i2, e4, t4, r3));
          };
        }, a._configure = function() {
          o3 = r2(696), n = r2(935);
        };
      }, 339: function(e3, t3, r2) {
        var o3;
        function n(e4) {
          if (e4)
            for (var t4 = Object.keys(e4), r3 = 0; r3 < t4.length; ++r3)
              this[t4[r3]] = e4[t4[r3]];
        }
        e3.exports = n, n.create = function(e4) {
          return this.$type.create(e4);
        }, n.encode = function(e4, t4) {
          return arguments.length ? 1 == arguments.length ? this.$type.encode(arguments[0]) : this.$type.encode(arguments[0], arguments[1]) : this.$type.encode(this);
        }, n.encodeDelimited = function(e4, t4) {
          return this.$type.encodeDelimited(e4, t4);
        }, n.decode = function(e4) {
          return this.$type.decode(e4);
        }, n.decodeDelimited = function(e4) {
          return this.$type.decodeDelimited(e4);
        }, n.verify = function(e4) {
          return this.$type.verify(e4);
        }, n.fromObject = function(e4) {
          return this.$type.fromObject(e4);
        }, n.toObject = function(e4, t4) {
          return e4 = e4 || this, this.$type.toObject(e4, t4);
        }, n.prototype.toJSON = function() {
          return this.$type.toObject(this, o3.toJSONOptions);
        }, n.set = function(e4, t4) {
          n[e4] = t4;
        }, n.get = function(e4) {
          return n[e4];
        }, n._configure = function() {
          o3 = r2(935);
        };
      }, 484: function(e3, t3, r2) {
        e3.exports = i;
        var o3, n = r2(998);
        function i(e4, t4, r3, i2, a, s, c, u) {
          if (o3.isObject(a) ? (c = a, a = s = void 0) : o3.isObject(s) && (c = s, s = void 0), void 0 !== t4 && !o3.isString(t4))
            throw TypeError("type must be a string");
          if (!o3.isString(r3))
            throw TypeError("requestType must be a string");
          if (!o3.isString(i2))
            throw TypeError("responseType must be a string");
          n.call(this, e4, c), this.type = t4 || "rpc", this.requestType = r3, this.requestStream = !!a || void 0, this.responseType = i2, this.responseStream = !!s || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = u;
        }
        ((i.prototype = Object.create(n.prototype)).constructor = i).className = "Method", i.fromJSON = function(e4, t4) {
          return new i(e4, t4.type, t4.requestType, t4.responseType, t4.requestStream, t4.responseStream, t4.options, t4.comment);
        }, i.prototype.toJSON = function(e4) {
          var t4 = !!e4 && Boolean(e4.keepComments);
          return o3.toObject(["type", "rpc" !== this.type && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t4 ? this.comment : void 0]);
        }, i.prototype.resolve = function() {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), n.prototype.resolve.call(this));
        }, i._configure = function() {
          o3 = r2(935);
        };
      }, 476: function(e3, t3, r2) {
        e3.exports = l;
        var o3, n, i, a, s, c = r2(998);
        function u(e4, t4) {
          if (e4 && e4.length) {
            for (var r3 = {}, o4 = 0; o4 < e4.length; ++o4)
              r3[e4[o4].name] = e4[o4].toJSON(t4);
            return r3;
          }
        }
        function l(e4, t4) {
          c.call(this, e4, t4), this.nested = void 0, this._nestedArray = null;
        }
        function d(e4) {
          return e4._nestedArray = null, e4;
        }
        ((l.prototype = Object.create(c.prototype)).constructor = l).className = "Namespace", l.fromJSON = function(e4, t4) {
          return new l(e4, t4.options).addJSON(t4.nested);
        }, l.arrayToJSON = u, l.isReservedId = function(e4, t4) {
          if (e4) {
            for (var r3 = 0; r3 < e4.length; ++r3)
              if ("string" != typeof e4[r3] && e4[r3][0] <= t4 && e4[r3][1] >= t4)
                return true;
          }
          return false;
        }, l.isReservedName = function(e4, t4) {
          if (e4) {
            for (var r3 = 0; r3 < e4.length; ++r3)
              if (e4[r3] === t4)
                return true;
          }
          return false;
        }, Object.defineProperty(l.prototype, "nestedArray", { get: function() {
          return this._nestedArray || (this._nestedArray = i.toArray(this.nested));
        } }), l.prototype.toJSON = function(e4) {
          return i.toObject(["options", this.options, "nested", u(this.nestedArray, e4)]);
        }, l.prototype.addJSON = function(e4) {
          if (e4)
            for (var t4, r3 = Object.keys(e4), i2 = 0; i2 < r3.length; ++i2)
              t4 = e4[r3[i2]], this.add((void 0 !== t4.fields ? a.fromJSON : void 0 !== t4.values ? o3.fromJSON : void 0 !== t4.methods ? s.fromJSON : void 0 !== t4.id ? n.fromJSON : l.fromJSON)(r3[i2], t4));
          return this;
        }, l.prototype.get = function(e4) {
          return this.nested && this.nested[e4] || null;
        }, l.prototype.getEnum = function(e4) {
          if (this.nested && this.nested[e4] instanceof o3)
            return this.nested[e4].values;
          throw Error("no such enum: " + e4);
        }, l.prototype.add = function(e4) {
          if (!(e4 instanceof n && void 0 !== e4.extend || e4 instanceof a || e4 instanceof o3 || e4 instanceof s || e4 instanceof l))
            throw TypeError("object must be a valid nested object");
          if (this.nested) {
            var t4 = this.get(e4.name);
            if (t4) {
              if (!(t4 instanceof l && e4 instanceof l) || t4 instanceof a || t4 instanceof s)
                throw Error("duplicate name '" + e4.name + "' in " + this);
              for (var r3 = t4.nestedArray, i2 = 0; i2 < r3.length; ++i2)
                e4.add(r3[i2]);
              this.remove(t4), this.nested || (this.nested = {}), e4.setOptions(t4.options, true);
            }
          } else
            this.nested = {};
          return this.nested[e4.name] = e4, e4.onAdd(this), d(this);
        }, l.prototype.remove = function(e4) {
          if (!(e4 instanceof c))
            throw TypeError("object must be a ReflectionObject");
          if (e4.parent !== this)
            throw Error(e4 + " is not a member of " + this);
          return delete this.nested[e4.name], Object.keys(this.nested).length || (this.nested = void 0), e4.onRemove(this), d(this);
        }, l.prototype.define = function(e4, t4) {
          if (i.isString(e4))
            e4 = e4.split(".");
          else if (!Array.isArray(e4))
            throw TypeError("illegal path");
          if (e4 && e4.length && "" === e4[0])
            throw Error("path must be relative");
          for (var r3 = this; e4.length > 0; ) {
            var o4 = e4.shift();
            if (r3.nested && r3.nested[o4]) {
              if (!((r3 = r3.nested[o4]) instanceof l))
                throw Error("path conflicts with non-namespace objects");
            } else
              r3.add(r3 = new l(o4));
          }
          return t4 && r3.addJSON(t4), r3;
        }, l.prototype.resolveAll = function() {
          for (var e4 = this.nestedArray, t4 = 0; t4 < e4.length; )
            e4[t4] instanceof l ? e4[t4++].resolveAll() : e4[t4++].resolve();
          return this.resolve();
        }, l.prototype.lookup = function(e4, t4, r3) {
          if ("boolean" == typeof t4 ? (r3 = t4, t4 = void 0) : t4 && !Array.isArray(t4) && (t4 = [t4]), i.isString(e4) && e4.length) {
            if ("." === e4)
              return this.root;
            e4 = e4.split(".");
          } else if (!e4.length)
            return this;
          if ("" === e4[0])
            return this.root.lookup(e4.slice(1), t4);
          var o4 = this.get(e4[0]);
          if (o4) {
            if (1 === e4.length) {
              if (!t4 || t4.indexOf(o4.constructor) > -1)
                return o4;
            } else if (o4 instanceof l && (o4 = o4.lookup(e4.slice(1), t4, true)))
              return o4;
          } else
            for (var n2 = 0; n2 < this.nestedArray.length; ++n2)
              if (this._nestedArray[n2] instanceof l && (o4 = this._nestedArray[n2].lookup(e4, t4, true)))
                return o4;
          return null === this.parent || r3 ? null : this.parent.lookup(e4, t4);
        }, l.prototype.lookupType = function(e4) {
          var t4 = this.lookup(e4, [a]);
          if (!t4)
            throw Error("no such type: " + e4);
          return t4;
        }, l.prototype.lookupEnum = function(e4) {
          var t4 = this.lookup(e4, [o3]);
          if (!t4)
            throw Error("no such Enum '" + e4 + "' in " + this);
          return t4;
        }, l.prototype.lookupTypeOrEnum = function(e4) {
          var t4 = this.lookup(e4, [a, o3]);
          if (!t4)
            throw Error("no such Type or Enum '" + e4 + "' in " + this);
          return t4;
        }, l.prototype.lookupService = function(e4) {
          var t4 = this.lookup(e4, [s]);
          if (!t4)
            throw Error("no such Service '" + e4 + "' in " + this);
          return t4;
        }, l._configure = function() {
          o3 = r2(582), n = r2(286), i = r2(935), a = r2(192), s = r2(447);
        };
      }, 998: function(e3, t3, r2) {
        var o3, n;
        function i(e4, t4) {
          if (!o3.isString(e4))
            throw TypeError("name must be a string");
          if (t4 && !o3.isObject(t4))
            throw TypeError("options must be an object");
          this.options = t4, this.name = e4, this.parent = null, this.resolved = false, this.comment = null, this.filename = null;
        }
        e3.exports = i, i.className = "ReflectionObject", Object.defineProperties(i.prototype, { root: { get: function() {
          for (var e4 = this; null !== e4.parent; )
            e4 = e4.parent;
          return e4;
        } }, fullName: { get: function() {
          for (var e4 = [this.name], t4 = this.parent; t4; )
            e4.unshift(t4.name), t4 = t4.parent;
          return e4.join(".");
        } } }), i.prototype.toJSON = function() {
          throw Error();
        }, i.prototype.onAdd = function(e4) {
          this.parent && this.parent !== e4 && this.parent.remove(this), this.parent = e4, this.resolved = false;
          var t4 = e4.root;
          t4 instanceof n && t4._handleAdd(this);
        }, i.prototype.onRemove = function(e4) {
          var t4 = e4.root;
          t4 instanceof n && t4._handleRemove(this), this.parent = null, this.resolved = false;
        }, i.prototype.resolve = function() {
          return this.resolved || this.root instanceof n && (this.resolved = true), this;
        }, i.prototype.getOption = function(e4) {
          if (this.options)
            return this.options[e4];
        }, i.prototype.setOption = function(e4, t4, r3) {
          return r3 && this.options && void 0 !== this.options[e4] || ((this.options || (this.options = {}))[e4] = t4), this;
        }, i.prototype.setOptions = function(e4, t4) {
          if (e4)
            for (var r3 = Object.keys(e4), o4 = 0; o4 < r3.length; ++o4)
              this.setOption(r3[o4], e4[r3[o4]], t4);
          return this;
        }, i.prototype.toString = function() {
          var e4 = this.constructor.className, t4 = this.fullName;
          return t4.length ? e4 + " " + t4 : e4;
        }, i._configure = function(e4) {
          n = r2(685), o3 = r2(935);
        };
      }, 735: function(e3, t3, r2) {
        e3.exports = a;
        var o3, n, i = r2(998);
        function a(e4, t4, r3, o4) {
          if (Array.isArray(t4) || (r3 = t4, t4 = void 0), i.call(this, e4, r3), void 0 !== t4 && !Array.isArray(t4))
            throw TypeError("fieldNames must be an Array");
          this.oneof = t4 || [], this.fieldsArray = [], this.comment = o4;
        }
        function s(e4) {
          if (e4.parent)
            for (var t4 = 0; t4 < e4.fieldsArray.length; ++t4)
              e4.fieldsArray[t4].parent || e4.parent.add(e4.fieldsArray[t4]);
        }
        ((a.prototype = Object.create(i.prototype)).constructor = a).className = "OneOf", a.fromJSON = function(e4, t4) {
          return new a(e4, t4.oneof, t4.options, t4.comment);
        }, a.prototype.toJSON = function(e4) {
          var t4 = !!e4 && Boolean(e4.keepComments);
          return n.toObject(["options", this.options, "oneof", this.oneof, "comment", t4 ? this.comment : void 0]);
        }, a.prototype.add = function(e4) {
          if (!(e4 instanceof o3))
            throw TypeError("field must be a Field");
          return e4.parent && e4.parent !== this.parent && e4.parent.remove(e4), this.oneof.push(e4.name), this.fieldsArray.push(e4), e4.partOf = this, s(this), this;
        }, a.prototype.remove = function(e4) {
          if (!(e4 instanceof o3))
            throw TypeError("field must be a Field");
          var t4 = this.fieldsArray.indexOf(e4);
          if (t4 < 0)
            throw Error(e4 + " is not a member of " + this);
          return this.fieldsArray.splice(t4, 1), (t4 = this.oneof.indexOf(e4.name)) > -1 && this.oneof.splice(t4, 1), e4.partOf = null, this;
        }, a.prototype.onAdd = function(e4) {
          i.prototype.onAdd.call(this, e4);
          for (var t4 = 0; t4 < this.oneof.length; ++t4) {
            var r3 = e4.get(this.oneof[t4]);
            r3 && !r3.partOf && (r3.partOf = this, this.fieldsArray.push(r3));
          }
          s(this);
        }, a.prototype.onRemove = function(e4) {
          for (var t4, r3 = 0; r3 < this.fieldsArray.length; ++r3)
            (t4 = this.fieldsArray[r3]).parent && t4.parent.remove(t4);
          i.prototype.onRemove.call(this, e4);
        }, a.d = function() {
          for (var e4 = new Array(arguments.length), t4 = 0; t4 < arguments.length; )
            e4[t4] = arguments[t4++];
          return function(t5, r3) {
            n.decorateType(t5.constructor).add(new a(r3, e4)), Object.defineProperty(t5, r3, { get: n.oneOfGetter(e4), set: n.oneOfSetter(e4) });
          };
        }, a._configure = function() {
          o3 = r2(286), n = r2(935);
        };
      }, 845: function(e3, t3, r2) {
        var o3, n, i, a, s, c, u, l, d, p2, h;
        e3.exports = I, I.filename = null, I.defaults = { keepCase: false };
        var f2 = /^[1-9][0-9]*$/, m = /^-?[1-9][0-9]*$/, g = /^0[x][0-9a-fA-F]+$/, E2 = /^-?0[x][0-9a-fA-F]+$/, y = /^0[0-7]+$/, v = /^-?0[0-7]+$/, T = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, _ = /^[a-zA-Z_][a-zA-Z_0-9]*$/, R = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/, O = /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/;
        function I(e4, t4, r3) {
          t4 instanceof n || (r3 = t4, t4 = new n()), r3 || (r3 = I.defaults);
          var S, C, N, A, M, b = o3(e4, r3.alternateCommentMode || false), U = b.next, P = b.push, w = b.peek, k = b.skip, L = b.cmnt, D = true, x = false, G = t4, B = r3.keepCase ? function(e5) {
            return e5;
          } : h.camelCase;
          function H(e5, t5, r4) {
            var o4 = I.filename;
            return r4 || (I.filename = null), Error("illegal " + (t5 || "token") + " '" + e5 + "' (" + (o4 ? o4 + ", " : "") + "line " + b.line + ")");
          }
          function j() {
            var e5, t5 = [];
            do {
              if ('"' !== (e5 = U()) && "'" !== e5)
                throw H(e5);
              t5.push(U()), k(e5), e5 = w();
            } while ('"' === e5 || "'" === e5);
            return t5.join("");
          }
          function F(e5) {
            var t5 = U();
            switch (t5) {
              case "'":
              case '"':
                return P(t5), j();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function(e6, t6) {
                var r4 = 1;
                switch ("-" === e6.charAt(0) && (r4 = -1, e6 = e6.substring(1)), e6) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return r4 * (1 / 0);
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (f2.test(e6))
                  return r4 * parseInt(e6, 10);
                if (g.test(e6))
                  return r4 * parseInt(e6, 16);
                if (y.test(e6))
                  return r4 * parseInt(e6, 8);
                if (T.test(e6))
                  return r4 * parseFloat(e6);
                throw H(e6, "number", true);
              }(t5);
            } catch (r4) {
              if (e5 && R.test(t5))
                return t5;
              throw H(t5, "value");
            }
          }
          function W(e5, t5) {
            var r4, o4;
            do {
              !t5 || '"' !== (r4 = w()) && "'" !== r4 ? e5.push([o4 = K(U()), k("to", true) ? K(U()) : o4]) : e5.push(j());
            } while (k(",", true));
            k(";");
          }
          function K(e5, t5) {
            switch (e5) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }
            if (!t5 && "-" === e5.charAt(0))
              throw H(e5, "id");
            if (m.test(e5))
              return parseInt(e5, 10);
            if (E2.test(e5))
              return parseInt(e5, 16);
            if (v.test(e5))
              return parseInt(e5, 8);
            throw H(e5, "id");
          }
          function q() {
            if (void 0 !== S)
              throw H("package");
            if (S = U(), !R.test(S))
              throw H(S, "name");
            G = G.define(S), k(";");
          }
          function z() {
            var e5, t5 = w();
            switch (t5) {
              case "weak":
                e5 = N || (N = []), U();
                break;
              case "public":
                U();
              default:
                e5 = C || (C = []);
            }
            t5 = j(), k(";"), e5.push(t5);
          }
          function V() {
            if (k("="), A = j(), !(x = "proto3" === A) && "proto2" !== A)
              throw H(A, "syntax");
            k(";");
          }
          function J(e5, t5) {
            switch (t5) {
              case "option":
                return Q(e5, t5), k(";"), true;
              case "message":
                return function(e6, t6) {
                  if (!_.test(t6 = U()))
                    throw H(t6, "type name");
                  var r4 = new i(t6);
                  X(r4, function(e7) {
                    if (!J(r4, e7))
                      switch (e7) {
                        case "map":
                          !function(e8) {
                            k("<");
                            var t7 = U();
                            if (void 0 === p2.mapKey[t7])
                              throw H(t7, "type");
                            k(",");
                            var r5 = U();
                            if (!R.test(r5))
                              throw H(r5, "type");
                            k(">");
                            var o4 = U();
                            if (!_.test(o4))
                              throw H(o4, "name");
                            k("=");
                            var n2 = new s(B(o4), K(U()), t7, r5);
                            X(n2, function(e9) {
                              if ("option" !== e9)
                                throw H(e9);
                              Q(n2, e9), k(";");
                            }, function() {
                              ee(n2);
                            }), e8.add(n2);
                          }(r4);
                          break;
                        case "required":
                        case "optional":
                        case "repeated":
                          Y(r4, e7);
                          break;
                        case "oneof":
                          !function(e8, t7) {
                            if (!_.test(t7 = U()))
                              throw H(t7, "name");
                            var r5 = new c(B(t7));
                            X(r5, function(e9) {
                              "option" === e9 ? (Q(r5, e9), k(";")) : (P(e9), Y(r5, "optional"));
                            }), e8.add(r5);
                          }(r4, e7);
                          break;
                        case "extensions":
                          W(r4.extensions || (r4.extensions = []));
                          break;
                        case "reserved":
                          W(r4.reserved || (r4.reserved = []), true);
                          break;
                        default:
                          if (!x || !R.test(e7))
                            throw H(e7);
                          P(e7), Y(r4, "optional");
                      }
                  }), e6.add(r4);
                }(e5, t5), true;
              case "enum":
                return function(e6, t6) {
                  if (!_.test(t6 = U()))
                    throw H(t6, "name");
                  var r4 = new u(t6);
                  X(r4, function(e7) {
                    switch (e7) {
                      case "option":
                        Q(r4, e7), k(";");
                        break;
                      case "reserved":
                        W(r4.reserved || (r4.reserved = []), true);
                        break;
                      default:
                        !function(e8, t7) {
                          if (!_.test(t7))
                            throw H(t7, "name");
                          k("=");
                          var r5 = K(U(), true), o4 = {};
                          X(o4, function(e9) {
                            if ("option" !== e9)
                              throw H(e9);
                            Q(o4, e9), k(";");
                          }, function() {
                            ee(o4);
                          }), e8.add(t7, r5, o4.comment);
                        }(r4, e7);
                    }
                  }), e6.add(r4);
                }(e5, t5), true;
              case "service":
                return function(e6, t6) {
                  if (!_.test(t6 = U()))
                    throw H(t6, "service name");
                  var r4 = new l(t6);
                  X(r4, function(e7) {
                    if (!J(r4, e7)) {
                      if ("rpc" !== e7)
                        throw H(e7);
                      !function(e8, t7) {
                        var r5 = t7;
                        if (!_.test(t7 = U()))
                          throw H(t7, "name");
                        var o4, n2, i2, a2, s2 = t7;
                        if (k("("), k("stream", true) && (n2 = true), !R.test(t7 = U()))
                          throw H(t7);
                        if (o4 = t7, k(")"), k("returns"), k("("), k("stream", true) && (a2 = true), !R.test(t7 = U()))
                          throw H(t7);
                        i2 = t7, k(")");
                        var c2 = new d(s2, r5, o4, i2, n2, a2);
                        X(c2, function(e9) {
                          if ("option" !== e9)
                            throw H(e9);
                          Q(c2, e9), k(";");
                        }), e8.add(c2);
                      }(r4, e7);
                    }
                  }), e6.add(r4);
                }(e5, t5), true;
              case "extend":
                return function(e6, t6) {
                  if (!R.test(t6 = U()))
                    throw H(t6, "reference");
                  var r4 = t6;
                  X(null, function(t7) {
                    switch (t7) {
                      case "required":
                      case "repeated":
                      case "optional":
                        Y(e6, t7, r4);
                        break;
                      default:
                        if (!x || !R.test(t7))
                          throw H(t7);
                        P(t7), Y(e6, "optional", r4);
                    }
                  });
                }(e5, t5), true;
            }
            return false;
          }
          function X(e5, t5, r4) {
            var o4 = b.line;
            if (e5 && (e5.comment = L(), e5.filename = I.filename), k("{", true)) {
              for (var n2; "}" !== (n2 = U()); )
                t5(n2);
              k(";", true);
            } else
              r4 && r4(), k(";"), e5 && "string" != typeof e5.comment && (e5.comment = L(o4));
          }
          function Y(e5, t5, r4) {
            var o4 = U();
            if ("group" !== o4) {
              if (!R.test(o4))
                throw H(o4, "type");
              var n2 = U();
              if (!_.test(n2))
                throw H(n2, "name");
              n2 = B(n2), k("=");
              var s2 = new a(n2, K(U()), o4, t5, r4);
              X(s2, function(e6) {
                if ("option" !== e6)
                  throw H(e6);
                Q(s2, e6), k(";");
              }, function() {
                ee(s2);
              }), e5.add(s2), x || !s2.repeated || void 0 === p2.packed[o4] && void 0 !== p2.basic[o4] || s2.setOption("packed", false, true);
            } else
              !function(e6, t6) {
                var r5 = U();
                if (!_.test(r5))
                  throw H(r5, "name");
                var o5 = h.lcFirst(r5);
                r5 === o5 && (r5 = h.ucFirst(r5)), k("=");
                var n3 = K(U()), s3 = new i(r5);
                s3.group = true;
                var c2 = new a(o5, n3, r5, t6);
                c2.filename = I.filename, X(s3, function(e7) {
                  switch (e7) {
                    case "option":
                      Q(s3, e7), k(";");
                      break;
                    case "required":
                    case "optional":
                    case "repeated":
                      Y(s3, e7);
                      break;
                    default:
                      throw H(e7);
                  }
                }), e6.add(s3).add(c2);
              }(e5, t5);
          }
          function Q(e5, t5) {
            var r4 = k("(", true);
            if (!R.test(t5 = U()))
              throw H(t5, "name");
            var o4 = t5;
            r4 && (k(")"), o4 = "(" + o4 + ")", t5 = w(), O.test(t5) && (o4 += t5, U())), k("="), Z(e5, o4);
          }
          function Z(e5, t5) {
            if (k("{", true))
              do {
                if (!_.test(M = U()))
                  throw H(M, "name");
                "{" === w() ? Z(e5, t5 + "." + M) : (k(":"), "{" === w() ? Z(e5, t5 + "." + M) : $2(e5, t5 + "." + M, F(true)));
              } while (!k("}", true));
            else
              $2(e5, t5, F(true));
          }
          function $2(e5, t5, r4) {
            e5.setOption && e5.setOption(t5, r4);
          }
          function ee(e5) {
            if (k("[", true)) {
              do {
                Q(e5, "option");
              } while (k(",", true));
              k("]");
            }
            return e5;
          }
          for (; null !== (M = U()); )
            switch (M) {
              case "package":
                if (!D)
                  throw H(M);
                q();
                break;
              case "import":
                if (!D)
                  throw H(M);
                z();
                break;
              case "syntax":
                if (!D)
                  throw H(M);
                V();
                break;
              case "option":
                if (!D)
                  throw H(M);
                Q(G, M), k(";");
                break;
              default:
                if (J(G, M)) {
                  D = false;
                  continue;
                }
                throw H(M);
            }
          return I.filename = null, { package: S, imports: C, weakImports: N, syntax: A, root: t4 };
        }
        I._configure = function() {
          o3 = r2(869), n = r2(685), i = r2(192), a = r2(286), s = r2(435), c = r2(735), u = r2(582), l = r2(447), d = r2(484), p2 = r2(696), h = r2(935);
        };
      }, 444: function(e3) {
        var t3 = e3.exports, r2 = t3.isAbsolute = function(e4) {
          return /^(?:\/|\w+:)/.test(e4);
        }, o3 = t3.normalize = function(e4) {
          var t4 = (e4 = e4.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), o4 = r2(e4), n = "";
          o4 && (n = t4.shift() + "/");
          for (var i = 0; i < t4.length; )
            ".." === t4[i] ? i > 0 && ".." !== t4[i - 1] ? t4.splice(--i, 2) : o4 ? t4.splice(i, 1) : ++i : "." === t4[i] ? t4.splice(i, 1) : ++i;
          return n + t4.join("/");
        };
        t3.resolve = function(e4, t4, n) {
          return n || (t4 = o3(t4)), r2(t4) ? t4 : (n || (e4 = o3(e4)), (e4 = e4.replace(/(?:\/|^)[^/]+$/, "")).length ? o3(e4 + "/" + t4) : t4);
        };
      }, 997: function(e3) {
        e3.exports = function(e4, t3, r2) {
          var o3 = r2 || 8192, n = o3 >>> 1, i = null, a = o3;
          return function(r3) {
            if (r3 < 1 || r3 > n)
              return e4(r3);
            a + r3 > o3 && (i = e4(o3), a = 0);
            var s = t3.call(i, a, a += r3);
            return 7 & a && (a = 1 + (7 | a)), s;
          };
        };
      }, 494: function(e3, t3, r2) {
        e3.exports = s;
        var o3, n, i = r2(935);
        function a(e4, t4) {
          return RangeError("index out of range: " + e4.pos + " + " + (t4 || 1) + " > " + e4.len);
        }
        function s(e4) {
          this.buf = e4, this.pos = 0, this.len = e4.length;
        }
        var c, u = "undefined" != typeof Uint8Array ? function(e4) {
          return e4 instanceof Uint8Array || Array.isArray(e4) ? new s(e4) : ("undefined" != typeof ArrayBuffer && e4 instanceof ArrayBuffer && console.warn(""), new s(new Uint8Array(e4)));
        } : function(e4) {
          if (Array.isArray(e4))
            return new s(e4);
        };
        function l() {
          var e4 = new o3(0, 0), t4 = 0;
          if (!(this.len - this.pos > 4)) {
            for (; t4 < 3; ++t4) {
              if (this.pos >= this.len)
                throw a(this);
              if (e4.lo = (e4.lo | (127 & this.buf[this.pos]) << 7 * t4) >>> 0, this.buf[this.pos++] < 128)
                return e4;
            }
            return e4.lo = (e4.lo | (127 & this.buf[this.pos++]) << 7 * t4) >>> 0, e4;
          }
          for (; t4 < 4; ++t4)
            if (e4.lo = (e4.lo | (127 & this.buf[this.pos]) << 7 * t4) >>> 0, this.buf[this.pos++] < 128)
              return e4;
          if (e4.lo = (e4.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e4.hi = (e4.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128)
            return e4;
          if (t4 = 0, this.len - this.pos > 4) {
            for (; t4 < 5; ++t4)
              if (e4.hi = (e4.hi | (127 & this.buf[this.pos]) << 7 * t4 + 3) >>> 0, this.buf[this.pos++] < 128)
                return e4;
          } else
            for (; t4 < 5; ++t4) {
              if (this.pos >= this.len)
                throw a(this);
              if (e4.hi = (e4.hi | (127 & this.buf[this.pos]) << 7 * t4 + 3) >>> 0, this.buf[this.pos++] < 128)
                return e4;
            }
          throw Error("invalid varint encoding");
        }
        function d(e4, t4) {
          return (e4[t4 - 4] | e4[t4 - 3] << 8 | e4[t4 - 2] << 16 | e4[t4 - 1] << 24) >>> 0;
        }
        function p2() {
          if (this.pos + 8 > this.len)
            throw a(this, 8);
          return new o3(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4));
        }
        s.create = i.Buffer ? function(e4) {
          return (s.create = function(e5) {
            return i.Buffer.isBuffer(e5) ? new (void 0)(e5) : u(e5);
          })(e4);
        } : u, s.prototype._slice = i.Array.prototype.subarray || i.Array.prototype.slice, s.prototype.uint32 = (c = 4294967295, function() {
          if (c = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128)
            return c;
          if (c = (c | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128)
            return c;
          if (c = (c | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128)
            return c;
          if (c = (c | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128)
            return c;
          if (c = (c | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)
            return c;
          if ((this.pos += 5) > this.len)
            throw this.pos = this.len, a(this, 10);
          return c;
        }), s.prototype.int32 = function() {
          return 0 | this.uint32();
        }, s.prototype.sint32 = function() {
          var e4 = this.uint32();
          return e4 >>> 1 ^ -(1 & e4) | 0;
        }, s.prototype.bool = function() {
          return 0 !== this.uint32();
        }, s.prototype.fixed32 = function() {
          if (this.pos + 4 > this.len)
            throw a(this, 4);
          return d(this.buf, this.pos += 4);
        }, s.prototype.sfixed32 = function() {
          if (this.pos + 4 > this.len)
            throw a(this, 4);
          return 0 | d(this.buf, this.pos += 4);
        }, s.prototype.float = function() {
          if (this.pos + 4 > this.len)
            throw a(this, 4);
          var e4 = i.float.readFloatLE(this.buf, this.pos);
          return this.pos += 4, e4;
        }, s.prototype.double = function() {
          if (this.pos + 8 > this.len)
            throw a(this, 4);
          var e4 = i.float.readDoubleLE(this.buf, this.pos);
          return this.pos += 8, e4;
        }, s.prototype.bytes = function() {
          var e4 = this.uint32(), t4 = this.pos, r3 = this.pos + e4;
          if (r3 > this.len)
            throw a(this, e4);
          return this.pos += e4, Array.isArray(this.buf) ? this.buf.slice(t4, r3) : t4 === r3 ? new this.buf.constructor(0) : this._slice.call(this.buf, t4, r3);
        }, s.prototype.string = function() {
          var e4 = this.bytes();
          return n.read(e4, 0, e4.length);
        }, s.prototype.skip = function(e4) {
          if ("number" == typeof e4) {
            if (this.pos + e4 > this.len)
              throw a(this, e4);
            this.pos += e4;
          } else
            do {
              if (this.pos >= this.len)
                throw a(this);
            } while (128 & this.buf[this.pos++]);
          return this;
        }, s.prototype.skipType = function(e4) {
          switch (e4) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; 4 != (e4 = 7 & this.uint32()); )
                this.skipType(e4);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + e4 + " at offset " + this.pos);
          }
          return this;
        }, s._configure = function() {
          o3 = r2(365), n = r2(498);
          var e4 = i.Long ? "toLong" : "toNumber";
          i.merge(s.prototype, { int64: function() {
            return l.call(this)[e4](false);
          }, uint64: function() {
            return l.call(this)[e4](true);
          }, sint64: function() {
            return l.call(this).zzDecode()[e4](false);
          }, fixed64: function() {
            return p2.call(this)[e4](true);
          }, sfixed64: function() {
            return p2.call(this)[e4](false);
          } });
        };
      }, 685: function(e3, t3, r2) {
        e3.exports = d;
        var o3 = r2(476);
        ((d.prototype = Object.create(o3.prototype)).constructor = d).className = "Root";
        var n, i, a, s = r2(286), c = r2(582), u = r2(735), l = r2(935);
        function d(e4) {
          o3.call(this, "", e4), this.deferred = [], this.files = [], this.names = [];
        }
        function p2() {
        }
        d.fromJSON = function(e4, t4) {
          return e4 = "string" == typeof e4 ? JSON.parse(e4) : e4, t4 || (t4 = new d()), e4.options && t4.setOptions(e4.options), t4.addJSON(e4.nested);
        }, d.prototype.resolvePath = l.path.resolve, d.prototype.parseFromPbString = function e4(t4, r3, o4) {
          "function" == typeof r3 && (o4 = r3, r3 = void 0);
          var n2 = this;
          if (!o4)
            return l.asPromise(e4, n2, t4, r3);
          var s2 = null;
          if ("string" == typeof t4)
            s2 = JSON.parse(t4);
          else {
            if ("object" != typeof t4)
              return void console.log("pb格式转化失败");
            s2 = t4;
          }
          function c2(e5, t5) {
            if (o4) {
              var r4 = o4;
              o4 = null, r4(e5, t5);
            }
          }
          function u2(e5, t5) {
            try {
              if (l.isString(t5) && "{" === t5.charAt(0) && (t5 = JSON.parse(t5)), l.isString(t5)) {
                i.filename = e5;
                var o5, a2 = i(t5, n2, r3), s3 = 0;
                if (a2.imports)
                  for (; s3 < a2.imports.length; ++s3)
                    d2(o5 = a2.imports[s3]);
                if (a2.weakImports) {
                  for (s3 = 0; s3 < a2.weakImports.length; ++s3)
                    o5 = a2.weakImports[s3];
                  d2(o5);
                }
              } else
                n2.setOptions(t5.options).addJSON(t5.nested);
            } catch (e6) {
              c2(e6);
            }
            c2(null, n2);
          }
          function d2(e5) {
            n2.names.indexOf(e5) > -1 || (n2.names.push(e5), e5 in a && u2(e5, a[e5]));
          }
          u2(s2.name, s2.pbJsonStr);
        }, d.prototype.load = function e4(t4, r3, o4) {
          "function" == typeof r3 && (o4 = r3, r3 = void 0);
          var n2 = this;
          if (!o4)
            return l.asPromise(e4, n2, t4, r3);
          var s2 = o4 === p2;
          function c2(e5, t5) {
            if (o4) {
              var r4 = o4;
              if (o4 = null, s2)
                throw e5;
              r4(e5, t5);
            }
          }
          function u2(e5, t5) {
            try {
              if (l.isString(t5) && "{" === t5.charAt(0) && (t5 = JSON.parse(t5)), l.isString(t5)) {
                i.filename = e5;
                var o5, a2 = i(t5, n2, r3), u3 = 0;
                if (a2.imports)
                  for (; u3 < a2.imports.length; ++u3)
                    (o5 = n2.resolvePath(e5, a2.imports[u3])) && d2(o5);
                if (a2.weakImports)
                  for (u3 = 0; u3 < a2.weakImports.length; ++u3)
                    (o5 = n2.resolvePath(e5, a2.weakImports[u3])) && d2(o5, true);
              } else
                n2.setOptions(t5.options).addJSON(t5.nested);
            } catch (e6) {
              c2(e6);
            }
            s2 || h2 || c2(null, n2);
          }
          function d2(e5, t5) {
            var r4 = e5.lastIndexOf("google/protobuf/");
            if (r4 > -1) {
              var i2 = e5.substring(r4);
              i2 in a && (e5 = i2);
            }
            if (!(n2.files.indexOf(e5) > -1))
              if (n2.files.push(e5), e5 in a)
                s2 ? u2(e5, a[e5]) : (++h2, setTimeout(function() {
                  --h2, u2(e5, a[e5]);
                }));
              else if (s2) {
                var d3;
                try {
                  d3 = l.fs.readFileSync(e5).toString("utf8");
                } catch (e6) {
                  return void (t5 || c2(e6));
                }
                u2(e5, d3);
              } else
                ++h2, l.fetch(e5, function(r5, i3) {
                  --h2, o4 && (r5 ? t5 ? h2 || c2(null, n2) : c2(r5) : u2(e5, i3));
                });
          }
          var h2 = 0;
          l.isString(t4) && (t4 = [t4]);
          for (var f3, m = 0; m < t4.length; ++m)
            (f3 = n2.resolvePath("", t4[m])) && d2(f3);
          if (s2)
            return n2;
          h2 || c2(null, n2);
        }, d.prototype.loadSync = function(e4, t4) {
          if (!l.isNode)
            throw Error("not supported");
          return this.load(e4, t4, p2);
        }, d.prototype.resolveAll = function() {
          if (this.deferred.length)
            throw Error("unresolvable extensions: " + this.deferred.map(function(e4) {
              return "'extend " + e4.extend + "' in " + e4.parent.fullName;
            }).join(", "));
          return o3.prototype.resolveAll.call(this);
        };
        var h = /^[A-Z]/;
        function f2(e4, t4) {
          var r3 = t4.parent.lookup(t4.extend);
          if (r3) {
            var o4 = new s(t4.fullName, t4.id, t4.type, t4.rule, void 0, t4.options);
            return o4.declaringField = t4, t4.extensionField = o4, r3.add(o4), true;
          }
          return false;
        }
        d.prototype._handleAdd = function(e4) {
          if (e4 instanceof s)
            void 0 === e4.extend || e4.extensionField || f2(0, e4) || this.deferred.push(e4);
          else if (e4 instanceof c)
            h.test(e4.name) && (e4.parent[e4.name] = e4.values);
          else if (!(e4 instanceof u)) {
            if (e4 instanceof n)
              for (var t4 = 0; t4 < this.deferred.length; )
                f2(0, this.deferred[t4]) ? this.deferred.splice(t4, 1) : ++t4;
            for (var r3 = 0; r3 < e4.nestedArray.length; ++r3)
              this._handleAdd(e4._nestedArray[r3]);
            h.test(e4.name) && (e4.parent[e4.name] = e4);
          }
        }, d.prototype._handleRemove = function(e4) {
          if (e4 instanceof s) {
            if (void 0 !== e4.extend)
              if (e4.extensionField)
                e4.extensionField.parent.remove(e4.extensionField), e4.extensionField = null;
              else {
                var t4 = this.deferred.indexOf(e4);
                t4 > -1 && this.deferred.splice(t4, 1);
              }
          } else if (e4 instanceof c)
            h.test(e4.name) && delete e4.parent[e4.name];
          else if (e4 instanceof o3) {
            for (var r3 = 0; r3 < e4.nestedArray.length; ++r3)
              this._handleRemove(e4._nestedArray[r3]);
            h.test(e4.name) && delete e4.parent[e4.name];
          }
        }, d._configure = function() {
          n = r2(192), i = r2(845), a = r2(72), s = r2(286), c = r2(582), u = r2(735), l = r2(935);
        };
      }, 889: function(e3) {
        e3.exports = {};
      }, 325: function(e3, t3, r2) {
        e3.exports = n;
        var o3 = r2(935);
        function n(e4, t4, r3) {
          if ("function" != typeof e4)
            throw TypeError("rpcImpl must be a function");
          o3.EventEmitter.call(this), this.rpcImpl = e4, this.requestDelimited = Boolean(t4), this.responseDelimited = Boolean(r3);
        }
        (n.prototype = Object.create(o3.EventEmitter.prototype)).constructor = n, n.prototype.rpcCall = function e4(t4, r3, n2, i, a) {
          if (!i)
            throw TypeError("request must be specified");
          var s = this;
          if (!a)
            return o3.asPromise(e4, s, t4, r3, n2, i);
          if (s.rpcImpl)
            try {
              return s.rpcImpl(t4, r3[s.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(e5, r4) {
                if (e5)
                  return s.emit("error", e5, t4), a(e5);
                if (null !== r4) {
                  if (!(r4 instanceof n2))
                    try {
                      r4 = n2[s.responseDelimited ? "decodeDelimited" : "decode"](r4);
                    } catch (e6) {
                      return s.emit("error", e6, t4), a(e6);
                    }
                  return s.emit("data", r4, t4), a(null, r4);
                }
                s.end(true);
              });
            } catch (e5) {
              return s.emit("error", e5, t4), void setTimeout(function() {
                a(e5);
              }, 0);
            }
          else
            setTimeout(function() {
              a(Error("already ended"));
            }, 0);
        }, n.prototype.end = function(e4) {
          return this.rpcImpl && (e4 || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
        };
      }, 447: function(e3, t3, r2) {
        e3.exports = s;
        var o3, n, i, a = r2(476);
        function s(e4, t4) {
          a.call(this, e4, t4), this.methods = {}, this._methodsArray = null;
        }
        function c(e4) {
          return e4._methodsArray = null, e4;
        }
        ((s.prototype = Object.create(a.prototype)).constructor = s).className = "Service", s.fromJSON = function(e4, t4) {
          var r3 = new s(e4, t4.options);
          if (t4.methods)
            for (var n2 = Object.keys(t4.methods), i2 = 0; i2 < n2.length; ++i2)
              r3.add(o3.fromJSON(n2[i2], t4.methods[n2[i2]]));
          return t4.nested && r3.addJSON(t4.nested), r3.comment = t4.comment, r3;
        }, s.prototype.toJSON = function(e4) {
          var t4 = a.prototype.toJSON.call(this, e4), r3 = !!e4 && Boolean(e4.keepComments);
          return n.toObject(["options", t4 && t4.options || void 0, "methods", a.arrayToJSON(this.methodsArray, e4) || {}, "nested", t4 && t4.nested || void 0, "comment", r3 ? this.comment : void 0]);
        }, Object.defineProperty(s.prototype, "methodsArray", { get: function() {
          return this._methodsArray || (this._methodsArray = n.toArray(this.methods));
        } }), s.prototype.get = function(e4) {
          return this.methods[e4] || a.prototype.get.call(this, e4);
        }, s.prototype.resolveAll = function() {
          for (var e4 = this.methodsArray, t4 = 0; t4 < e4.length; ++t4)
            e4[t4].resolve();
          return a.prototype.resolve.call(this);
        }, s.prototype.add = function(e4) {
          if (this.get(e4.name))
            throw Error("duplicate name '" + e4.name + "' in " + this);
          return e4 instanceof o3 ? (this.methods[e4.name] = e4, e4.parent = this, c(this)) : a.prototype.add.call(this, e4);
        }, s.prototype.remove = function(e4) {
          if (e4 instanceof o3) {
            if (this.methods[e4.name] !== e4)
              throw Error(e4 + " is not a member of " + this);
            return delete this.methods[e4.name], e4.parent = null, c(this);
          }
          return a.prototype.remove.call(this, e4);
        }, s.prototype.create = function(e4, t4, r3) {
          for (var o4, a2 = new i.Service(e4, t4, r3), s2 = 0; s2 < this.methodsArray.length; ++s2) {
            var c2 = n.lcFirst((o4 = this._methodsArray[s2]).resolve().name).replace(/[^$\w_]/g, "");
            a2[c2] = n.codegen(["r", "c"], n.isReserved(c2) ? c2 + "_" : c2)("return this.rpcCall(m,q,s,r,c)")({ m: o4, q: o4.resolvedRequestType.ctor, s: o4.resolvedResponseType.ctor });
          }
          return a2;
        }, s._configure = function() {
          o3 = r2(484), n = r2(935), i = r2(325);
        };
      }, 869: function(e3) {
        e3.exports = d;
        var t3 = /[\s{}=;:[\],'"()<>]/g, r2 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, o3 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, n = /^ *[*/]+ */, i = /^\s*\*?\/*/, a = /\n/g, s = /\s/, c = /\\(.?)/g, u = { 0: "\0", r: "\r", n: "\n", t: "	" };
        function l(e4) {
          return e4.replace(c, function(e5, t4) {
            switch (t4) {
              case "\\":
              case "":
                return t4;
              default:
                return u[t4] || "";
            }
          });
        }
        function d(e4, c2) {
          e4 = e4.toString();
          var u2 = 0, d2 = e4.length, p2 = 1, h = null, f2 = null, m = 0, g = false, E2 = [], y = null;
          function v(e5) {
            return Error("illegal " + e5 + " (line " + p2 + ")");
          }
          function T(t4) {
            return e4.charAt(t4);
          }
          function _(t4, r3) {
            h = e4.charAt(t4++), m = p2, g = false;
            var o4, s2 = t4 - (c2 ? 2 : 3);
            do {
              if (--s2 < 0 || "\n" === (o4 = e4.charAt(s2))) {
                g = true;
                break;
              }
            } while (" " === o4 || "	" === o4);
            for (var u3 = e4.substring(t4, r3).split(a), l2 = 0; l2 < u3.length; ++l2)
              u3[l2] = u3[l2].replace(c2 ? i : n, "").trim();
            f2 = u3.join("\n").trim();
          }
          function R(t4) {
            var r3 = O(t4), o4 = e4.substring(t4, r3);
            return /^\s*\/{1,2}/.test(o4);
          }
          function O(e5) {
            for (var t4 = e5; t4 < d2 && "\n" !== T(t4); )
              t4++;
            return t4;
          }
          function I() {
            if (E2.length > 0)
              return E2.shift();
            if (y)
              return function() {
                var t4 = "'" === y ? o3 : r2;
                t4.lastIndex = u2 - 1;
                var n3 = t4.exec(e4);
                if (!n3)
                  throw v("string");
                return u2 = t4.lastIndex, S(y), y = null, l(n3[1]);
              }();
            var n2, i2, a2, h2, f3;
            do {
              if (u2 === d2)
                return null;
              for (n2 = false; s.test(a2 = T(u2)); )
                if ("\n" === a2 && ++p2, ++u2 === d2)
                  return null;
              if ("/" === T(u2)) {
                if (++u2 === d2)
                  throw v("comment");
                if ("/" === T(u2))
                  if (c2) {
                    if (h2 = u2, f3 = false, R(u2)) {
                      f3 = true;
                      do {
                        if ((u2 = O(u2)) === d2)
                          break;
                        u2++;
                      } while (R(u2));
                    } else
                      u2 = Math.min(d2, O(u2) + 1);
                    f3 && _(h2, u2), p2++, n2 = true;
                  } else {
                    for (f3 = "/" === T(h2 = u2 + 1); "\n" !== T(++u2); )
                      if (u2 === d2)
                        return null;
                    ++u2, f3 && _(h2, u2 - 1), ++p2, n2 = true;
                  }
                else {
                  if ("*" !== (a2 = T(u2)))
                    return "/";
                  h2 = u2 + 1, f3 = c2 || "*" === T(h2);
                  do {
                    if ("\n" === a2 && ++p2, ++u2 === d2)
                      throw v("comment");
                    i2 = a2, a2 = T(u2);
                  } while ("*" !== i2 || "/" !== a2);
                  ++u2, f3 && _(h2, u2 - 2), n2 = true;
                }
              }
            } while (n2);
            var m2 = u2;
            if (t3.lastIndex = 0, !t3.test(T(m2++)))
              for (; m2 < d2 && !t3.test(T(m2)); )
                ++m2;
            var g2 = e4.substring(u2, u2 = m2);
            return '"' !== g2 && "'" !== g2 || (y = g2), g2;
          }
          function S(e5) {
            E2.push(e5);
          }
          function C() {
            if (!E2.length) {
              var e5 = I();
              if (null === e5)
                return null;
              S(e5);
            }
            return E2[0];
          }
          return Object.defineProperty({ next: I, peek: C, push: S, skip: function(e5, t4) {
            var r3 = C();
            if (r3 === e5)
              return I(), true;
            if (!t4)
              throw v("token '" + r3 + "', '" + e5 + "' expected");
            return false;
          }, cmnt: function(e5) {
            var t4 = null;
            return void 0 === e5 ? m === p2 - 1 && (c2 || "*" === h || g) && (t4 = f2) : (m < e5 && C(), m !== e5 || g || !c2 && "/" !== h || (t4 = f2)), t4;
          } }, "line", { get: function() {
            return p2;
          } });
        }
        d.unescape = l;
      }, 192: function(e3, t3, r2) {
        e3.exports = y;
        var o3, n, i, a, s, c, u, l, d, p2, h, f2, m, g, E2 = r2(476);
        function y(e4, t4) {
          E2.call(this, e4, t4), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
        }
        function v(e4) {
          return e4._fieldsById = e4._fieldsArray = e4._oneofsArray = null, delete e4.encode, delete e4.decode, delete e4.verify, e4;
        }
        ((y.prototype = Object.create(E2.prototype)).constructor = y).className = "Type", Object.defineProperties(y.prototype, { fieldsById: { get: function() {
          if (this._fieldsById)
            return this._fieldsById;
          this._fieldsById = {};
          for (var e4 = Object.keys(this.fields), t4 = 0; t4 < e4.length; ++t4) {
            var r3 = this.fields[e4[t4]], o4 = r3.id;
            if (this._fieldsById[o4])
              throw Error("duplicate id " + o4 + " in " + this);
            this._fieldsById[o4] = r3;
          }
          return this._fieldsById;
        } }, fieldsArray: { get: function() {
          return this._fieldsArray || (this._fieldsArray = u.toArray(this.fields));
        } }, oneofsArray: { get: function() {
          return this._oneofsArray || (this._oneofsArray = u.toArray(this.oneofs));
        } }, ctor: { get: function() {
          return this._ctor || (this.ctor = y.generateConstructor(this));
        }, set: function(e4) {
          var t4 = e4.prototype;
          t4 instanceof i || ((e4.prototype = new i()).constructor = e4, u.merge(e4.prototype, t4)), e4.$type = e4.prototype.$type = this, u.merge(e4, i, true), u.merge(e4.prototype, i, true), this._ctor = e4;
          for (var r3 = 0; r3 < this.fieldsArray.length; ++r3)
            this._fieldsArray[r3].resolve();
          var o4 = {};
          for (r3 = 0; r3 < this.oneofsArray.length; ++r3) {
            var n2 = this._oneofsArray[r3].resolve().name, a2 = function(e5) {
              for (var t5 = {}, r4 = 0; r4 < e5.length; ++r4)
                t5[e5[r4]] = 0;
              return { setter: function(r5) {
                if (!(e5.indexOf(r5) < 0)) {
                  t5[r5] = 1;
                  for (var o5 = 0; o5 < e5.length; ++o5)
                    e5[o5] !== r5 && delete this[e5[o5]];
                }
              }, getter: function() {
                for (var e6 = Object.keys(this), r5 = e6.length - 1; r5 > -1; --r5)
                  if (1 === t5[e6[r5]] && void 0 !== this[e6[r5]] && null !== this[e6[r5]])
                    return e6[r5];
              } };
            }(this._oneofsArray[r3].oneof);
            o4[n2] = { get: a2.getter, set: a2.setter };
          }
          r3 && Object.defineProperties(e4.prototype, o4);
        } } }), y.generateConstructor = function(e4) {
          return function(t4) {
            for (var r3, o4 = 0; o4 < e4.fieldsArray.length; o4++)
              (r3 = e4._fieldsArray[o4]).map ? this[r3.name] = {} : r3.repeated && (this[r3.name] = []);
            if (t4)
              for (var n2 = Object.keys(t4), i2 = 0; i2 < n2.length; ++i2)
                null != t4[n2[i2]] && (this[n2[i2]] = t4[n2[i2]]);
          };
        }, y.fromJSON = function(e4, t4) {
          var r3 = new y(e4, t4.options);
          r3.extensions = t4.extensions, r3.reserved = t4.reserved;
          for (var i2 = Object.keys(t4.fields), s2 = 0; s2 < i2.length; ++s2)
            r3.add((void 0 !== t4.fields[i2[s2]].keyType ? g.fromJSON : n.fromJSON)(i2[s2], t4.fields[i2[s2]]));
          if (t4.oneofs)
            for (i2 = Object.keys(t4.oneofs), s2 = 0; s2 < i2.length; ++s2)
              r3.add(a.fromJSON(i2[s2], t4.oneofs[i2[s2]]));
          if (t4.nested)
            for (i2 = Object.keys(t4.nested), s2 = 0; s2 < i2.length; ++s2) {
              var c2 = t4.nested[i2[s2]];
              r3.add((void 0 !== c2.id ? n.fromJSON : void 0 !== c2.fields ? y.fromJSON : void 0 !== c2.values ? o3.fromJSON : void 0 !== c2.methods ? h.fromJSON : E2.fromJSON)(i2[s2], c2));
            }
          return t4.extensions && t4.extensions.length && (r3.extensions = t4.extensions), t4.reserved && t4.reserved.length && (r3.reserved = t4.reserved), t4.group && (r3.group = true), t4.comment && (r3.comment = t4.comment), r3;
        }, y.prototype.toJSON = function(e4) {
          var t4 = E2.prototype.toJSON.call(this, e4), r3 = !!e4 && Boolean(e4.keepComments);
          return { options: t4 && t4.options || void 0, oneofs: E2.arrayToJSON(this.oneofsArray, e4), fields: E2.arrayToJSON(this.fieldsArray.filter(function(e5) {
            return !e5.declaringField;
          }), e4) || {}, extensions: this.extensions && this.extensions.length ? this.extensions : void 0, reserved: this.reserved && this.reserved.length ? this.reserved : void 0, group: this.group || void 0, nested: t4 && t4.nested || void 0, comment: r3 ? this.comment : void 0 };
        }, y.prototype.resolveAll = function() {
          for (var e4 = this.fieldsArray, t4 = 0; t4 < e4.length; )
            e4[t4++].resolve();
          var r3 = this.oneofsArray;
          for (t4 = 0; t4 < r3.length; )
            r3[t4++].resolve();
          return E2.prototype.resolveAll.call(this);
        }, y.prototype.get = function(e4) {
          return this.fields[e4] || this.oneofs && this.oneofs[e4] || this.nested && this.nested[e4] || null;
        }, y.prototype.add = function(e4) {
          if (this.get(e4.name))
            throw Error("duplicate name '" + e4.name + "' in " + this);
          if (e4 instanceof n && void 0 === e4.extend) {
            if (this._fieldsById && this._fieldsById[e4.id])
              throw Error("duplicate id " + e4.id + " in " + this);
            if (this.isReservedId(e4.id))
              throw Error("id " + e4.id + " is reserved in " + this);
            if (this.isReservedName(e4.name))
              throw Error("name '" + e4.name + "' is reserved in " + this);
            return e4.parent && e4.parent.remove(e4), this.fields[e4.name] = e4, e4.message = this, e4.onAdd(this), v(this);
          }
          return e4 instanceof a ? (this.oneofs || (this.oneofs = {}), this.oneofs[e4.name] = e4, e4.onAdd(this), v(this)) : E2.prototype.add.call(this, e4);
        }, y.prototype.remove = function(e4) {
          if (e4 instanceof n && void 0 === e4.extend) {
            if (!this.fields || this.fields[e4.name] !== e4)
              throw Error(e4 + " is not a member of " + this);
            return delete this.fields[e4.name], e4.parent = null, e4.onRemove(this), v(this);
          }
          if (e4 instanceof a) {
            if (!this.oneofs || this.oneofs[e4.name] !== e4)
              throw Error(e4 + " is not a member of " + this);
            return delete this.oneofs[e4.name], e4.parent = null, e4.onRemove(this), v(this);
          }
          return E2.prototype.remove.call(this, e4);
        }, y.prototype.isReservedId = function(e4) {
          return E2.isReservedId(this.reserved, e4);
        }, y.prototype.isReservedName = function(e4) {
          return E2.isReservedName(this.reserved, e4);
        }, y.prototype.create = function(e4) {
          return new this.ctor(e4);
        }, y.prototype.setup = function() {
          for (var e4 = this.fullName, t4 = [], r3 = 0; r3 < this.fieldsArray.length; ++r3)
            t4.push(this._fieldsArray[r3].resolve().resolvedType);
          this.encode = d(this)({ Writer: s, types: t4, util: u }), this.decode = p2(this)({ Reader: c, types: t4, util: u }), this.verify = l(this)({ types: t4, util: u }), this.fromObject = m.fromObject(this)({ types: t4, util: u }), this.toObject = m.toObject(this)({ types: t4, util: u });
          var o4 = f2[e4];
          if (o4) {
            var n2 = Object.create(this);
            n2.fromObject = this.fromObject, this.fromObject = o4.fromObject.bind(n2), n2.toObject = this.toObject, this.toObject = o4.toObject.bind(n2);
          }
          return this;
        }, y.prototype.encode = function(e4, t4) {
          return this.setup().encode(e4, t4);
        }, y.prototype.encodeDelimited = function(e4, t4) {
          return this.encode(e4, t4 && t4.len ? t4.fork() : t4).ldelim();
        }, y.prototype.decode = function(e4, t4) {
          return this.setup().decode(e4, t4);
        }, y.prototype.decodeDelimited = function(e4) {
          return e4 instanceof c || (e4 = c.create(e4)), this.decode(e4, e4.uint32());
        }, y.prototype.verify = function(e4) {
          return this.setup().verify(e4);
        }, y.prototype.fromObject = function(e4) {
          return this.setup().fromObject(e4);
        }, y.prototype.toObject = function(e4, t4) {
          return this.setup().toObject(e4, t4);
        }, y.d = function(e4) {
          return function(t4) {
            u.decorateType(t4, e4);
          };
        }, y._configure = function() {
          o3 = r2(582), n = r2(286), i = r2(339), a = r2(735), s = r2(244), c = r2(494), u = r2(935), l = r2(216), d = r2(929), p2 = r2(888), h = r2(447), f2 = r2(834), m = r2(525), g = r2(435);
        };
      }, 696: function(e3, t3, r2) {
        var o3 = e3.exports, n = r2(935), i = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function a(e4, t4) {
          var r3 = 0, o4 = {};
          for (t4 |= 0; r3 < e4.length; )
            o4[i[r3 + t4]] = e4[r3++];
          return o4;
        }
        o3.basic = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), o3.defaults = a([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", n.emptyArray, null]), o3.long = a([0, 0, 0, 1, 1], 7), o3.mapKey = a([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), o3.packed = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]), o3._configure = function() {
          n = r2(935);
        };
      }, 498: function(e3) {
        var t3 = e3.exports;
        t3.length = function(e4) {
          for (var t4 = 0, r2 = 0, o3 = 0; o3 < e4.length; ++o3)
            (r2 = e4.charCodeAt(o3)) < 128 ? t4 += 1 : r2 < 2048 ? t4 += 2 : 55296 == (64512 & r2) && 56320 == (64512 & e4.charCodeAt(o3 + 1)) ? (++o3, t4 += 4) : t4 += 3;
          return t4;
        }, t3.read = function(e4, t4, r2) {
          if (r2 - t4 < 1)
            return "";
          for (var o3, n = null, i = [], a = 0; t4 < r2; )
            (o3 = e4[t4++]) < 128 ? i[a++] = o3 : o3 > 191 && o3 < 224 ? i[a++] = (31 & o3) << 6 | 63 & e4[t4++] : o3 > 239 && o3 < 365 ? (o3 = ((7 & o3) << 18 | (63 & e4[t4++]) << 12 | (63 & e4[t4++]) << 6 | 63 & e4[t4++]) - 65536, i[a++] = 55296 + (o3 >> 10), i[a++] = 56320 + (1023 & o3)) : i[a++] = (15 & o3) << 12 | (63 & e4[t4++]) << 6 | 63 & e4[t4++], a > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, i)), a = 0);
          return n ? (a && n.push(String.fromCharCode.apply(String, i.slice(0, a))), n.join("")) : String.fromCharCode.apply(String, i.slice(0, a));
        }, t3.write = function(e4, t4, r2) {
          for (var o3, n, i = r2, a = 0; a < e4.length; ++a)
            (o3 = e4.charCodeAt(a)) < 128 ? t4[r2++] = o3 : o3 < 2048 ? (t4[r2++] = o3 >> 6 | 192, t4[r2++] = 63 & o3 | 128) : 55296 == (64512 & o3) && 56320 == (64512 & (n = e4.charCodeAt(a + 1))) ? (o3 = 65536 + ((1023 & o3) << 10) + (1023 & n), ++a, t4[r2++] = o3 >> 18 | 240, t4[r2++] = o3 >> 12 & 63 | 128, t4[r2++] = o3 >> 6 & 63 | 128, t4[r2++] = 63 & o3 | 128) : (t4[r2++] = o3 >> 12 | 224, t4[r2++] = o3 >> 6 & 63 | 128, t4[r2++] = 63 & o3 | 128);
          return r2 - i;
        };
      }, 935: function(e3, t3, r2) {
        var o3 = e3.exports, n = r2(889);
        o3.LongBits = r2(365), o3.Long = r2(939), o3.pool = r2(997), o3.float = r2(283), o3.asPromise = r2(728), o3.EventEmitter = r2(969), o3.path = r2(444), o3.base64 = r2(440), o3.utf8 = r2(498), o3.compareFieldsById = function(e4, t4) {
          return e4.id - t4.id;
        }, o3.toArray = function(e4) {
          if (e4) {
            for (var t4 = Object.keys(e4), r3 = new Array(t4.length), o4 = 0; o4 < t4.length; )
              r3[o4] = e4[t4[o4++]];
            return r3;
          }
          return [];
        }, o3.toObject = function(e4) {
          for (var t4 = {}, r3 = 0; r3 < e4.length; ) {
            var o4 = e4[r3++], n2 = e4[r3++];
            void 0 !== n2 && (t4[o4] = n2);
          }
          return t4;
        }, o3.isString = function(e4) {
          return "string" == typeof e4 || e4 instanceof String;
        }, o3.isReserved = function(e4) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e4);
        }, o3.isObject = function(e4) {
          return e4 && "object" == typeof e4;
        }, o3.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, o3.oneOfGetter = function(e4) {
          for (var t4 = {}, r3 = 0; r3 < e4.length; ++r3)
            t4[e4[r3]] = 1;
          return function() {
            for (var e5 = Object.keys(this), r4 = e5.length - 1; r4 > -1; --r4)
              if (1 === t4[e5[r4]] && void 0 !== this[e5[r4]] && null !== this[e5[r4]])
                return e5[r4];
          };
        }, o3.oneOfSetter = function(e4) {
          return function(t4) {
            for (var r3 = 0; r3 < e4.length; ++r3)
              e4[r3] !== t4 && delete this[e4[r3]];
          };
        }, o3.merge = function(e4, t4, r3) {
          for (var o4 = Object.keys(t4), n2 = 0; n2 < o4.length; ++n2)
            void 0 !== e4[o4[n2]] && r3 || (e4[o4[n2]] = t4[o4[n2]]);
          return e4;
        }, o3.decorateType = function(e4, t4) {
          if (e4.$type)
            return t4 && e4.$type.name !== t4 && (o3.decorateRoot.remove(e4.$type), e4.$type.name = t4, o3.decorateRoot.add(e4.$type)), e4.$type;
          Type || (Type = r2(192));
          var n2 = new Type(t4 || e4.name);
          return o3.decorateRoot.add(n2), n2.ctor = e4, Object.defineProperty(e4, "$type", { value: n2, enumerable: false }), Object.defineProperty(e4.prototype, "$type", { value: n2, enumerable: false }), n2;
        }, o3.emptyArray = Object.freeze ? Object.freeze([]) : [], o3.emptyObject = Object.freeze ? Object.freeze({}) : {}, o3.longToHash = function(e4) {
          return e4 ? o3.LongBits.from(e4).toHash() : o3.LongBits.zeroHash;
        }, o3.copy = function(e4) {
          if ("object" != typeof e4)
            return e4;
          var t4 = {};
          for (var r3 in e4)
            t4[r3] = e4[r3];
          return t4;
        }, o3.deepCopy = function e4(t4) {
          if ("object" != typeof t4)
            return t4;
          var r3 = {};
          for (var o4 in t4)
            r3[o4] = e4(t4[o4]);
          return r3;
        }, o3.ProtocolError = function(e4) {
          function t4(e5, r3) {
            if (!(this instanceof t4))
              return new t4(e5, r3);
            Object.defineProperty(this, "message", { get: function() {
              return e5;
            } }), Error.captureStackTrace ? Error.captureStackTrace(this, t4) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), r3 && merge(this, r3);
          }
          return (t4.prototype = Object.create(Error.prototype)).constructor = t4, Object.defineProperty(t4.prototype, "name", { get: function() {
            return e4;
          } }), t4.prototype.toString = function() {
            return this.name + ": " + this.message;
          }, t4;
        }, o3.toJSONOptions = { longs: String, enums: String, bytes: String, json: true }, o3.Buffer = null, o3.newBuffer = function(e4) {
          return "number" == typeof e4 ? new o3.Array(e4) : "undefined" == typeof Uint8Array ? e4 : new Uint8Array(e4);
        }, o3.stringToBytes = function(e4) {
          var t4, r3, o4 = [];
          t4 = e4.length;
          for (var n2 = 0; n2 < t4; n2++)
            (r3 = e4.charCodeAt(n2)) >= 65536 && r3 <= 1114111 ? (o4.push(r3 >> 18 & 7 | 240), o4.push(r3 >> 12 & 63 | 128), o4.push(r3 >> 6 & 63 | 128), o4.push(63 & r3 | 128)) : r3 >= 2048 && r3 <= 65535 ? (o4.push(r3 >> 12 & 15 | 224), o4.push(r3 >> 6 & 63 | 128), o4.push(63 & r3 | 128)) : r3 >= 128 && r3 <= 2047 ? (o4.push(r3 >> 6 & 31 | 192), o4.push(63 & r3 | 128)) : o4.push(255 & r3);
          return o4;
        }, o3.byteToString = function(e4) {
          if ("string" == typeof e4)
            return e4;
          for (var t4 = "", r3 = e4, o4 = 0; o4 < r3.length; o4++) {
            var n2 = r3[o4].toString(2), i = n2.match(/^1+?(?=0)/);
            if (i && 8 == n2.length) {
              for (var a = i[0].length, s = r3[o4].toString(2).slice(7 - a), c = 1; c < a; c++)
                s += r3[c + o4].toString(2).slice(2);
              t4 += String.fromCharCode(parseInt(s, 2)), o4 += a - 1;
            } else
              t4 += String.fromCharCode(r3[o4]);
          }
          return t4;
        }, o3.isInteger = Number.isInteger || function(e4) {
          return "number" == typeof e4 && isFinite(e4) && Math.floor(e4) === e4;
        }, Object.defineProperty(o3, "decorateRoot", { get: function() {
          return n.decorated || (n.decorated = new (r2(685))());
        } });
      }, 216: function(e3, t3, r2) {
        var o3, n;
        function i(e4, t4) {
          return e4.name + ": " + t4 + (e4.repeated && "array" !== t4 ? "[]" : e4.map && "object" !== t4 ? "{k:" + e4.keyType + "}" : "") + " expected";
        }
        function a(e4, t4, r3, a2) {
          var s2 = a2.types;
          if (e4.resolvedType)
            if (e4.resolvedType instanceof o3) {
              if (Object.keys(e4.resolvedType.values).indexOf(r3) < 0)
                return i(e4, "enum value");
            } else {
              var c2 = s2[t4].verify(r3);
              if (c2)
                return e4.name + "." + c2;
            }
          else
            switch (e4.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                if (!n.isInteger(r3))
                  return i(e4, "integer");
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                if (!(n.isInteger(r3) || r3 && n.isInteger(r3.low) && n.isInteger(r3.high)))
                  return i(e4, "integer|Long");
                break;
              case "float":
              case "double":
                if ("number" != typeof r3)
                  return i(e4, "number");
                break;
              case "bool":
                if ("boolean" != typeof r3)
                  return i(e4, "boolean");
                break;
              case "string":
                if (!n.isString(r3))
                  return i(e4, "string");
                break;
              case "bytes":
                if (!(r3 && "number" == typeof r3.length || n.isString(r3)))
                  return i(e4, "buffer");
            }
        }
        function s(e4, t4) {
          switch (e4.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              if (!n.key32Re.test(t4))
                return i(e4, "integer key");
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              if (!n.key64Re.test(t4))
                return i(e4, "integer|Long key");
              break;
            case "bool":
              if (!n.key2Re.test(t4))
                return i(e4, "boolean key");
          }
        }
        function c(e4) {
          return function(t4) {
            return function(r3) {
              var o4;
              if ("object" != typeof r3 || null === r3)
                return "object expected";
              var c2, u = {};
              e4.oneofsArray.length && (c2 = {});
              for (var l = 0; l < e4.fieldsArray.length; ++l) {
                var d, p2 = e4._fieldsArray[l].resolve(), h = r3[p2.name];
                if (!p2.optional || null != h && r3.hasOwnProperty(p2.name))
                  if (p2.map) {
                    if (!n.isObject(h))
                      return i(p2, "object");
                    var f2 = Object.keys(h);
                    for (d = 0; d < f2.length; ++d) {
                      if (o4 = s(p2, f2[d]))
                        return o4;
                      if (o4 = a(p2, l, h[f2[d]], t4))
                        return o4;
                    }
                  } else if (p2.repeated) {
                    if (!Array.isArray(h))
                      return i(p2, "array");
                    for (d = 0; d < h.length; ++d)
                      if (o4 = a(p2, l, h[d], t4))
                        return o4;
                  } else {
                    if (p2.partOf) {
                      var m = p2.partOf.name;
                      if (1 === u[p2.partOf.name] && 1 === c2[m])
                        return p2.partOf.name + ": multiple values";
                      c2[m] = 1;
                    }
                    if (o4 = a(p2, l, h, t4))
                      return o4;
                  }
              }
            };
          };
        }
        e3.exports = c, c._configure = function() {
          o3 = r2(582), n = r2(935);
        };
      }, 834: function(e3, t3, r2) {
        var o3, n = t3;
        n[".google.protobuf.Any"] = { fromObject: function(e4) {
          if (e4 && e4["@type"]) {
            var t4 = this.lookup(e4["@type"]);
            if (t4) {
              var r3 = "." === e4["@type"].charAt(0) ? e4["@type"].substr(1) : e4["@type"];
              return this.create({ type_url: "/" + r3, value: t4.encode(t4.fromObject(e4)).finish() });
            }
          }
          return this.fromObject(e4);
        }, toObject: function(e4, t4) {
          if (t4 && t4.json && e4.type_url && e4.value) {
            var r3 = e4.type_url.substring(e4.type_url.lastIndexOf("/") + 1), n2 = this.lookup(r3);
            n2 && (e4 = n2.decode(e4.value));
          }
          if (!(e4 instanceof this.ctor) && e4 instanceof o3) {
            var i = e4.$type.toObject(e4, t4);
            return i["@type"] = e4.$type.fullName, i;
          }
          return this.toObject(e4, t4);
        } }, n._configure = function() {
          o3 = r2(339);
        };
      }, 244: function(e3, t3, r2) {
        e3.exports = u;
        var o3, n = r2(935), i = r2(498);
        function a(e4, t4, r3) {
          this.fn = e4, this.len = t4, this.next = void 0, this.val = r3;
        }
        function s() {
        }
        function c(e4) {
          this.head = e4.head, this.tail = e4.tail, this.len = e4.len, this.next = e4.states;
        }
        function u() {
          this.len = 0, this.head = new a(s, 0, 0), this.tail = this.head, this.states = null;
        }
        function l(e4, t4, r3) {
          t4[r3] = 255 & e4;
        }
        function d(e4, t4) {
          this.len = e4, this.next = void 0, this.val = t4;
        }
        function p2(e4, t4, r3) {
          for (; e4.hi; )
            t4[r3++] = 127 & e4.lo | 128, e4.lo = (e4.lo >>> 7 | e4.hi << 25) >>> 0, e4.hi >>>= 7;
          for (; e4.lo > 127; )
            t4[r3++] = 127 & e4.lo | 128, e4.lo = e4.lo >>> 7;
          t4[r3++] = e4.lo;
        }
        function h(e4, t4, r3) {
          t4[r3] = 255 & e4, t4[r3 + 1] = e4 >>> 8 & 255, t4[r3 + 2] = e4 >>> 16 & 255, t4[r3 + 3] = e4 >>> 24;
        }
        u.create = n.Buffer ? function() {
          return (u.create = function() {
            return new (void 0)();
          })();
        } : function() {
          return new u();
        }, u.alloc = function(e4) {
          return new n.Array(e4);
        }, n.Array !== Array && (u.alloc = n.pool(u.alloc, n.Array.prototype.subarray)), u.prototype._push = function(e4, t4, r3) {
          return this.tail = this.tail.next = new a(e4, t4, r3), this.len += t4, this;
        }, d.prototype = Object.create(a.prototype), d.prototype.fn = function(e4, t4, r3) {
          for (; e4 > 127; )
            t4[r3++] = 127 & e4 | 128, e4 >>>= 7;
          t4[r3] = e4;
        }, u.prototype.uint32 = function(e4) {
          return this.len += (this.tail = this.tail.next = new d((e4 >>>= 0) < 128 ? 1 : e4 < 16384 ? 2 : e4 < 2097152 ? 3 : e4 < 268435456 ? 4 : 5, e4)).len, this;
        }, u.prototype.int32 = function(e4) {
          return e4 < 0 ? this._push(p2, 10, o3.fromNumber(e4)) : this.uint32(e4);
        }, u.prototype.sint32 = function(e4) {
          return this.uint32((e4 << 1 ^ e4 >> 31) >>> 0);
        }, u.prototype.uint64 = function(e4) {
          var t4 = o3.from(e4);
          return this._push(p2, t4.length(), t4);
        }, u.prototype.int64 = u.prototype.uint64, u.prototype.sint64 = function(e4) {
          var t4 = o3.from(e4).zzEncode();
          return this._push(p2, t4.length(), t4);
        }, u.prototype.bool = function(e4) {
          return this._push(l, 1, e4 ? 1 : 0);
        }, u.prototype.fixed32 = function(e4) {
          return this._push(h, 4, e4 >>> 0);
        }, u.prototype.sfixed32 = u.prototype.fixed32, u.prototype.fixed64 = function(e4) {
          var t4 = o3.from(e4);
          return this._push(h, 4, t4.lo)._push(h, 4, t4.hi);
        }, u.prototype.sfixed64 = u.prototype.fixed64, u.prototype.float = function(e4) {
          return this._push(n.float.writeFloatLE, 4, e4);
        }, u.prototype.double = function(e4) {
          return this._push(n.float.writeDoubleLE, 8, e4);
        };
        var f2 = n.Array.prototype.set ? function(e4, t4, r3) {
          t4.set(e4, r3);
        } : function(e4, t4, r3) {
          for (var o4 = 0; o4 < e4.length; ++o4)
            t4[r3 + o4] = e4[o4];
        };
        u.prototype.bytes = function(e4) {
          var t4 = e4.length >>> 0;
          if (!t4)
            return this._push(l, 1, 0);
          if (n.isString(e4)) {
            var r3 = u.alloc(t4 = i.length(e4));
            i.write(e4, r3, 0), e4 = r3;
          }
          return this.uint32(t4)._push(f2, t4, e4);
        }, u.prototype.string = function(e4) {
          var t4 = i.length(e4);
          return t4 ? this.uint32(t4)._push(i.write, t4, e4) : this._push(l, 1, 0);
        }, u.prototype.fork = function() {
          return this.states = new c(this), this.head = this.tail = new a(s, 0, 0), this.len = 0, this;
        }, u.prototype.reset = function() {
          return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new a(s, 0, 0), this.len = 0), this;
        }, u.prototype.ldelim = function() {
          var e4 = this.head, t4 = this.tail, r3 = this.len;
          return this.reset().uint32(r3), r3 && (this.tail.next = e4.next, this.tail = t4, this.len += r3), this;
        }, u.prototype.finish = function() {
          for (var e4 = this.head.next, t4 = this.constructor.alloc(this.len), r3 = 0; e4; )
            e4.fn(e4.val, t4, r3), r3 += e4.len, e4 = e4.next;
          return t4;
        }, u._configure = function() {
          o3 = r2(365), r2(440), i = r2(498);
        };
      } }, t2 = {};
      function r(o3) {
        var n = t2[o3];
        if (void 0 !== n)
          return n.exports;
        var i = t2[o3] = { exports: {} };
        return e2[o3](i, i.exports, r), i.exports;
      }
      r.amdO = {}, r.n = function(e3) {
        var t3 = e3 && e3.__esModule ? function() {
          return e3.default;
        } : function() {
          return e3;
        };
        return r.d(t3, { a: t3 }), t3;
      }, r.d = function(e3, t3) {
        for (var o3 in t3)
          r.o(t3, o3) && !r.o(e3, o3) && Object.defineProperty(e3, o3, { enumerable: true, get: t3[o3] });
      }, r.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e3) {
          if ("object" == typeof window)
            return window;
        }
      }(), r.o = function(e3, t3) {
        return Object.prototype.hasOwnProperty.call(e3, t3);
      }, r.r = function(e3) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
      };
      var o2 = {};
      return function() {
        r.r(o2), r.d(o2, { default: function() {
          return As;
        } });
        var e3 = {};
        r.r(e3), r.d(e3, { acceptContactInvite: function() {
          return ao;
        }, acceptInvitation: function() {
          return io;
        }, addContact: function() {
          return ro;
        }, addConversationMark: function() {
          return wo;
        }, addReaction: function() {
          return yo;
        }, addToBlackList: function() {
          return uo;
        }, addUsersToBlacklist: function() {
          return lo;
        }, addUsersToBlocklist: function() {
          return po;
        }, declineContactInvite: function() {
          return co;
        }, declineInvitation: function() {
          return so;
        }, deleteAllMessagesAndConversations: function() {
          return xo;
        }, deleteContact: function() {
          return no;
        }, deleteConversation: function() {
          return Vr;
        }, deleteReaction: function() {
          return vo;
        }, deleteSession: function() {
          return zr;
        }, fetchHistoryMessages: function() {
          return $r;
        }, fetchUserInfoById: function() {
          return Yr;
        }, getAllContacts: function() {
          return bo;
        }, getBlacklist: function() {
          return xr;
        }, getBlocklist: function() {
          return Gr;
        }, getContacts: function() {
          return Hr;
        }, getContactsWithCursor: function() {
          return Uo;
        }, getConversationlist: function() {
          return Kr;
        }, getHistoryMessages: function() {
          return to;
        }, getReactionDetail: function() {
          return Ro;
        }, getReactionList: function() {
          return To;
        }, getReactionlist: function() {
          return _o;
        }, getRoster: function() {
          return Br;
        }, getSelfIdsOnOtherPlatform: function() {
          return Do;
        }, getServerConversations: function() {
          return So;
        }, getServerConversationsByFilter: function() {
          return Lo;
        }, getServerPinnedConversations: function() {
          return No;
        }, getServerPinnedMessages: function() {
          return jo;
        }, getSessionList: function() {
          return Wr;
        }, getTokenExpireTimestamp: function() {
          return Zr;
        }, modifyMessage: function() {
          return Eo;
        }, pinConversation: function() {
          return Ao;
        }, pinMessage: function() {
          return Bo;
        }, recallMessage: function() {
          return go;
        }, removeConversationMark: function() {
          return ko;
        }, removeFromBlackList: function() {
          return ho;
        }, removeHistoryMessages: function() {
          return Io;
        }, removeRoster: function() {
          return oo;
        }, removeUserFromBlackList: function() {
          return fo;
        }, removeUserFromBlocklist: function() {
          return mo;
        }, reportMessage: function() {
          return Oo;
        }, setContactRemark: function() {
          return Mo;
        }, unbindPushToken: function() {
          return Fo;
        }, unpinMessage: function() {
          return Ho;
        }, updateCurrentUserNick: function() {
          return Qr;
        }, updateOwnUserInfo: function() {
          return Jr;
        }, updateUserInfo: function() {
          return Xr;
        }, uploadPushToken: function() {
          return Fr;
        }, uploadToken: function() {
          return jr;
        } });
        var t3 = {};
        r.r(t3), r.d(t3, { acceptGroupInvite: function() {
          return On;
        }, acceptGroupJoinRequest: function() {
          return vn;
        }, addUsersToGroupAllowlist: function() {
          return Qn;
        }, addUsersToGroupWhitelist: function() {
          return Yn;
        }, agreeInviteIntoGroup: function() {
          return Rn;
        }, agreeJoinGroup: function() {
          return yn;
        }, blockGroup: function() {
          return Vo;
        }, blockGroupMember: function() {
          return Gn;
        }, blockGroupMembers: function() {
          return Hn;
        }, blockGroupMessages: function() {
          return Jo;
        }, changeGroupOwner: function() {
          return en;
        }, changeOwner: function() {
          return $o;
        }, createGroup: function() {
          return zo;
        }, createGroupNew: function() {
          return qo;
        }, deleteGroupSharedFile: function() {
          return di;
        }, destroyGroup: function() {
          return pn;
        }, disableSendGroupMsg: function() {
          return Jn;
        }, dissolveGroup: function() {
          return dn;
        }, downloadGroupSharedFile: function() {
          return fi;
        }, enableSendGroupMsg: function() {
          return Xn;
        }, fetchGroupAnnouncement: function() {
          return ci;
        }, fetchGroupSharedFileList: function() {
          return pi;
        }, getGroup: function() {
          return Qo;
        }, getGroupAdmin: function() {
          return an;
        }, getGroupAllowlist: function() {
          return ri;
        }, getGroupBlacklist: function() {
          return zn;
        }, getGroupBlacklistNew: function() {
          return qn;
        }, getGroupBlocklist: function() {
          return Vn;
        }, getGroupInfo: function() {
          return tn;
        }, getGroupMemberAttributes: function() {
          return gi;
        }, getGroupMembersAttributes: function() {
          return Ei;
        }, getGroupMsgReadUser: function() {
          return si;
        }, getGroupMuteList: function() {
          return Ln;
        }, getGroupMutelist: function() {
          return Dn;
        }, getGroupSharedFilelist: function() {
          return hi;
        }, getGroupWhitelist: function() {
          return ti;
        }, getJoinedGroups: function() {
          return Zo;
        }, getMuted: function() {
          return kn;
        }, getPublicGroups: function() {
          return Yo;
        }, groupBlockMulti: function() {
          return Bn;
        }, groupBlockSingle: function() {
          return xn;
        }, inviteToGroup: function() {
          return mn;
        }, inviteUsersToGroup: function() {
          return gn;
        }, isGroupWhiteUser: function() {
          return oi;
        }, isInGroupAllowlist: function() {
          return ii;
        }, isInGroupMutelist: function() {
          return ai;
        }, isInGroupWhiteList: function() {
          return ni;
        }, joinGroup: function() {
          return En;
        }, leaveGroup: function() {
          return fn;
        }, listGroupMember: function() {
          return on;
        }, listGroupMembers: function() {
          return nn;
        }, listGroups: function() {
          return Xo;
        }, modifyGroup: function() {
          return rn;
        }, mute: function() {
          return bn;
        }, muteGroupMember: function() {
          return Un;
        }, quitGroup: function() {
          return hn;
        }, rejectGroupInvite: function() {
          return Sn;
        }, rejectGroupJoinRequest: function() {
          return _n;
        }, rejectInviteIntoGroup: function() {
          return In;
        }, rejectJoinGroup: function() {
          return Tn;
        }, removeAdmin: function() {
          return un;
        }, removeGroupAdmin: function() {
          return ln;
        }, removeGroupAllowlistMember: function() {
          return ei;
        }, removeGroupBlockMulti: function() {
          return Wn;
        }, removeGroupBlockSingle: function() {
          return jn;
        }, removeGroupMember: function() {
          return Nn;
        }, removeGroupMembers: function() {
          return Mn;
        }, removeGroupWhitelistMember: function() {
          return $n;
        }, removeMultiGroupMember: function() {
          return An;
        }, removeMute: function() {
          return Pn;
        }, removeSingleGroupMember: function() {
          return Cn;
        }, rmUsersFromGroupWhitelist: function() {
          return Zn;
        }, setAdmin: function() {
          return sn;
        }, setGroupAdmin: function() {
          return cn;
        }, setGroupMemberAttributes: function() {
          return mi;
        }, unblockGroupMember: function() {
          return Fn;
        }, unblockGroupMembers: function() {
          return Kn;
        }, unmuteGroupMember: function() {
          return wn;
        }, updateGroupAnnouncement: function() {
          return ui;
        }, uploadGroupSharedFile: function() {
          return li;
        } });
        var n = {};
        r.r(n), r.d(n, { addUsersToChatRoom: function() {
          return Ni;
        }, addUsersToChatRoomAllowlist: function() {
          return ra;
        }, addUsersToChatRoomWhitelist: function() {
          return ta;
        }, blockChatRoomMember: function() {
          return Wi;
        }, blockChatRoomMembers: function() {
          return qi;
        }, chatRoomBlockMulti: function() {
          return Ki;
        }, chatRoomBlockSingle: function() {
          return Fi;
        }, createChatRoom: function() {
          return vi;
        }, deleteChatRoomSharedFile: function() {
          return fa;
        }, destroyChatRoom: function() {
          return Ti;
        }, disableSendChatRoomMsg: function() {
          return $i;
        }, enableSendChatRoomMsg: function() {
          return ea;
        }, fetchChatRoomAnnouncement: function() {
          return da;
        }, fetchChatRoomSharedFileList: function() {
          return ma;
        }, getChatRoomAdmin: function() {
          return wi;
        }, getChatRoomAllowlist: function() {
          return sa;
        }, getChatRoomAttributes: function() {
          return Ea;
        }, getChatRoomBlacklist: function() {
          return Qi;
        }, getChatRoomBlacklistNew: function() {
          return Yi;
        }, getChatRoomBlocklist: function() {
          return Zi;
        }, getChatRoomDetails: function() {
          return _i;
        }, getChatRoomMuteList: function() {
          return Hi;
        }, getChatRoomMuted: function() {
          return Bi;
        }, getChatRoomMutelist: function() {
          return ji;
        }, getChatRoomSharedFilelist: function() {
          return ga;
        }, getChatRoomWhitelist: function() {
          return aa;
        }, getChatRooms: function() {
          return yi;
        }, getJoinedChatRooms: function() {
          return Ra;
        }, isChatRoomWhiteUser: function() {
          return ca;
        }, isInChatRoomAllowlist: function() {
          return ua;
        }, isInChatRoomMutelist: function() {
          return la;
        }, joinChatRoom: function() {
          return Ai;
        }, leaveChatRoom: function() {
          return bi;
        }, listChatRoomMember: function() {
          return Ui;
        }, listChatRoomMembers: function() {
          return Pi;
        }, modifyChatRoom: function() {
          return Ri;
        }, muteChatRoomMember: function() {
          return Di;
        }, quitChatRoom: function() {
          return Mi;
        }, removeChatRoomAdmin: function() {
          return Li;
        }, removeChatRoomAllowlistMember: function() {
          return ia;
        }, removeChatRoomAttribute: function() {
          return _a;
        }, removeChatRoomAttributes: function() {
          return Ta;
        }, removeChatRoomBlockMulti: function() {
          return Ji;
        }, removeChatRoomBlockSingle: function() {
          return zi;
        }, removeChatRoomMember: function() {
          return Ii;
        }, removeChatRoomMembers: function() {
          return Ci;
        }, removeChatRoomWhitelistMember: function() {
          return na;
        }, removeMultiChatRoomMember: function() {
          return Si;
        }, removeMuteChatRoomMember: function() {
          return xi;
        }, removeSingleChatRoomMember: function() {
          return Oi;
        }, rmUsersFromChatRoomWhitelist: function() {
          return oa;
        }, setChatRoomAdmin: function() {
          return ki;
        }, setChatRoomAttribute: function() {
          return va;
        }, setChatRoomAttributes: function() {
          return ya;
        }, unblockChatRoomMember: function() {
          return Vi;
        }, unblockChatRoomMembers: function() {
          return Xi;
        }, unmuteChatRoomMember: function() {
          return Gi;
        }, updateChatRoomAnnouncement: function() {
          return pa;
        }, uploadChatRoomSharedFile: function() {
          return ha;
        } });
        var i = {};
        r.r(i), r.d(i, { getPresenceStatus: function() {
          return ba;
        }, getSubscribedPresenceList: function() {
          return Aa;
        }, getSubscribedPresencelist: function() {
          return Ma;
        }, publishPresence: function() {
          return Sa;
        }, subscribePresence: function() {
          return Ca;
        }, unsubscribePresence: function() {
          return Na;
        } });
        var a = {};
        r.r(a), r.d(a, { clearRemindTypeForConversation: function() {
          return ka;
        }, getPushPerformLanguage: function() {
          return Ga;
        }, getSilentModeForAll: function() {
          return Pa;
        }, getSilentModeForConversation: function() {
          return La;
        }, getSilentModeForConversations: function() {
          return Da;
        }, getSilentModeRemindTypeConversations: function() {
          return Ba;
        }, setPushPerformLanguage: function() {
          return xa;
        }, setSilentModeForAll: function() {
          return Ua;
        }, setSilentModeForConversation: function() {
          return wa;
        } });
        var s = {};
        r.r(s), r.d(s, { changeChatThreadName: function() {
          return za;
        }, createChatThread: function() {
          return Fa;
        }, destroyChatThread: function() {
          return qa;
        }, getChatThreadDetail: function() {
          return $a;
        }, getChatThreadLastMessage: function() {
          return Qa;
        }, getChatThreadMembers: function() {
          return Va;
        }, getChatThreads: function() {
          return Ya;
        }, getJoinedChatThreads: function() {
          return Xa;
        }, joinChatThread: function() {
          return Wa;
        }, leaveChatThread: function() {
          return Ka;
        }, removeChatThreadMember: function() {
          return Ja;
        } });
        var c = {};
        r.r(c), r.d(c, { getSupportedLanguages: function() {
          return es;
        }, translateMessage: function() {
          return ts;
        } });
        var u = {};
        function l() {
          u.converter._configure(), u.decoder._configure(), u.encoder._configure(), u.Field._configure(), u.MapField._configure(), u.Message._configure(), u.Namespace._configure(), u.Method._configure(), u.ReflectionObject._configure(), u.OneOf._configure(), u.parse._configure(), u.Reader._configure(), u.Root._configure(), u.Service._configure(), u.verifier._configure(), u.Type._configure(), u.types._configure(), u.wrappers._configure(), u.Writer._configure();
        }
        u.build = "minimal", u.Writer = r(244), u.encoder = r(929), u.Reader = r(494), u.util = r(935), u.rpc = r(325), u.roots = r(889), u.verifier = r(216), u.tokenize = r(869), u.parse = r(845), u.common = r(72), u.ReflectionObject = r(998), u.Namespace = r(476), u.Root = r(685), u.Enum = r(582), u.Type = r(192), u.Field = r(286), u.OneOf = r(735), u.MapField = r(435), u.Service = r(447), u.Method = r(484), u.converter = r(525), u.decoder = r(888), u.Message = r(339), u.wrappers = r(834), u.types = r(696), u.util = r(935), u.configure = l, u.load = function(e4, t4, r2) {
          return "function" == typeof t4 ? (r2 = t4, t4 = new u.Root()) : t4 || (t4 = new u.Root()), t4.load(e4, r2);
        }, u.loadSync = function(e4, t4) {
          return t4 || (t4 = new u.Root()), t4.loadSync(e4);
        }, u.parseFromPbString = function(e4, t4, r2) {
          return "function" == typeof t4 ? (r2 = t4, t4 = new u.Root()) : t4 || (t4 = new u.Root()), t4.parseFromPbString(e4, r2);
        }, l();
        var d, p2 = u, h = r(720), f2 = r.n(h), m = function() {
          function e4(e5) {
            this.type = e5.type, this.message = e5.message, this.data = e5.data;
          }
          return e4.create = function(t4) {
            return new e4(t4);
          }, e4;
        }();
        !function(e4) {
          e4[e4.REQUEST_SUCCESS = 0] = "REQUEST_SUCCESS", e4[e4.REQUEST_TIMEOUT = -1] = "REQUEST_TIMEOUT", e4[e4.REQUEST_UNKNOWN = -2] = "REQUEST_UNKNOWN", e4[e4.REQUEST_PARAMETER_ERROR = -3] = "REQUEST_PARAMETER_ERROR", e4[e4.REQUEST_ABORT = -4] = "REQUEST_ABORT", e4[e4.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR = 0] = "WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR", e4[e4.WEBIM_CONNCTION_OPEN_ERROR = 1] = "WEBIM_CONNCTION_OPEN_ERROR", e4[e4.WEBIM_CONNCTION_AUTH_ERROR = 2] = "WEBIM_CONNCTION_AUTH_ERROR", e4[e4.WEBIM_CONNCTION_OPEN_USERGRID_ERROR = 3] = "WEBIM_CONNCTION_OPEN_USERGRID_ERROR", e4[e4.WEBIM_CONNCTION_ATTACH_ERROR = 4] = "WEBIM_CONNCTION_ATTACH_ERROR", e4[e4.WEBIM_CONNCTION_ATTACH_USERGRID_ERROR = 5] = "WEBIM_CONNCTION_ATTACH_USERGRID_ERROR", e4[e4.WEBIM_CONNCTION_REOPEN_ERROR = 6] = "WEBIM_CONNCTION_REOPEN_ERROR", e4[e4.WEBIM_CONNCTION_SERVER_CLOSE_ERROR = 7] = "WEBIM_CONNCTION_SERVER_CLOSE_ERROR", e4[e4.WEBIM_CONNCTION_SERVER_ERROR = 8] = "WEBIM_CONNCTION_SERVER_ERROR", e4[e4.WEBIM_CONNCTION_IQ_ERROR = 9] = "WEBIM_CONNCTION_IQ_ERROR", e4[e4.WEBIM_CONNCTION_PING_ERROR = 10] = "WEBIM_CONNCTION_PING_ERROR", e4[e4.WEBIM_CONNCTION_NOTIFYVERSION_ERROR = 11] = "WEBIM_CONNCTION_NOTIFYVERSION_ERROR", e4[e4.WEBIM_CONNCTION_GETROSTER_ERROR = 12] = "WEBIM_CONNCTION_GETROSTER_ERROR", e4[e4.WEBIM_CONNCTION_CROSSDOMAIN_ERROR = 13] = "WEBIM_CONNCTION_CROSSDOMAIN_ERROR", e4[e4.WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES = 14] = "WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES", e4[e4.WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR = 15] = "WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR", e4[e4.WEBIM_CONNCTION_DISCONNECTED = 16] = "WEBIM_CONNCTION_DISCONNECTED", e4[e4.WEBIM_CONNCTION_AJAX_ERROR = 17] = "WEBIM_CONNCTION_AJAX_ERROR", e4[e4.WEBIM_CONNCTION_JOINROOM_ERROR = 18] = "WEBIM_CONNCTION_JOINROOM_ERROR", e4[e4.WEBIM_CONNCTION_GETROOM_ERROR = 19] = "WEBIM_CONNCTION_GETROOM_ERROR", e4[e4.WEBIM_CONNCTION_GETROOMINFO_ERROR = 20] = "WEBIM_CONNCTION_GETROOMINFO_ERROR", e4[e4.WEBIM_CONNCTION_GETROOMMEMBER_ERROR = 21] = "WEBIM_CONNCTION_GETROOMMEMBER_ERROR", e4[e4.WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR = 22] = "WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR", e4[e4.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR = 23] = "WEBIM_CONNCTION_LOAD_CHATROOM_ERROR", e4[e4.WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR = 24] = "WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR", e4[e4.WEBIM_CONNCTION_JOINCHATROOM_ERROR = 25] = "WEBIM_CONNCTION_JOINCHATROOM_ERROR", e4[e4.WEBIM_CONNCTION_QUITCHATROOM_ERROR = 26] = "WEBIM_CONNCTION_QUITCHATROOM_ERROR", e4[e4.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR = 27] = "WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR", e4[e4.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR = 28] = "WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR", e4[e4.WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR = 29] = "WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR", e4[e4.WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR = 30] = "WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR", e4[e4.WEBIM_CONNCTION_CALLBACK_INNER_ERROR = 31] = "WEBIM_CONNCTION_CALLBACK_INNER_ERROR", e4[e4.WEBIM_CONNCTION_CLIENT_OFFLINE = 32] = "WEBIM_CONNCTION_CLIENT_OFFLINE", e4[e4.WEBIM_CONNCTION_CLIENT_LOGOUT = 33] = "WEBIM_CONNCTION_CLIENT_LOGOUT", e4[e4.WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR = 34] = "WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR", e4[e4.WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP = 35] = "WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP", e4[e4.WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP = 36] = "WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP", e4[e4.WEBIM_CONNECTION_ACCEPT_JOIN_GROUP = 37] = "WEBIM_CONNECTION_ACCEPT_JOIN_GROUP", e4[e4.WEBIM_CONNECTION_DECLINE_JOIN_GROUP = 38] = "WEBIM_CONNECTION_DECLINE_JOIN_GROUP", e4[e4.WEBIM_CONNECTION_CLOSED = 39] = "WEBIM_CONNECTION_CLOSED", e4[e4.WEBIM_CONNECTION_ERROR = 40] = "WEBIM_CONNECTION_ERROR", e4[e4.MAX_LIMIT = 50] = "MAX_LIMIT", e4[e4.MESSAGE_NOT_FOUND = 51] = "MESSAGE_NOT_FOUND", e4[e4.NO_PERMISSION = 52] = "NO_PERMISSION", e4[e4.OPERATION_UNSUPPORTED = 53] = "OPERATION_UNSUPPORTED", e4[e4.OPERATION_NOT_ALLOWED = 54] = "OPERATION_NOT_ALLOWED", e4[e4.WEBIM_TOKEN_EXPIRED = 56] = "WEBIM_TOKEN_EXPIRED", e4[e4.WEBIM_SERVER_SERVING_DISABLED = 57] = "WEBIM_SERVER_SERVING_DISABLED", e4[e4.WEBIM_UPLOADFILE_BROWSER_ERROR = 100] = "WEBIM_UPLOADFILE_BROWSER_ERROR", e4[e4.WEBIM_UPLOADFILE_ERROR = 101] = "WEBIM_UPLOADFILE_ERROR", e4[e4.WEBIM_UPLOADFILE_NO_LOGIN = 102] = "WEBIM_UPLOADFILE_NO_LOGIN", e4[e4.WEBIM_UPLOADFILE_NO_FILE = 103] = "WEBIM_UPLOADFILE_NO_FILE", e4[e4.WEBIM_DOWNLOADFILE_ERROR = 200] = "WEBIM_DOWNLOADFILE_ERROR", e4[e4.WEBIM_DOWNLOADFILE_NO_LOGIN = 201] = "WEBIM_DOWNLOADFILE_NO_LOGIN", e4[e4.WEBIM_DOWNLOADFILE_BROWSER_ERROR = 202] = "WEBIM_DOWNLOADFILE_BROWSER_ERROR", e4[e4.PARSE_FILE_ERROR = 203] = "PARSE_FILE_ERROR", e4[e4.USER_NOT_FOUND = 204] = "USER_NOT_FOUND", e4[e4.MESSAGE_PARAMETER_ERROR = 205] = "MESSAGE_PARAMETER_ERROR", e4[e4.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE = 206] = "WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE", e4[e4.WEBIM_CONNCTION_USER_REMOVED = 207] = "WEBIM_CONNCTION_USER_REMOVED", e4[e4.WEBIM_USER_ALREADY_LOGIN = 208] = "WEBIM_USER_ALREADY_LOGIN", e4[e4.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD = 216] = "WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD", e4[e4.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE = 217] = "WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE", e4[e4.USER_MUTED_BY_ADMIN = 219] = "USER_MUTED_BY_ADMIN", e4[e4.USER_NOT_FRIEND = 221] = "USER_NOT_FRIEND", e4[e4.WEBIM_MESSAGE_REC_TEXT = 300] = "WEBIM_MESSAGE_REC_TEXT", e4[e4.WEBIM_MESSAGE_REC_TEXT_ERROR = 301] = "WEBIM_MESSAGE_REC_TEXT_ERROR", e4[e4.WEBIM_MESSAGE_REC_EMOTION = 302] = "WEBIM_MESSAGE_REC_EMOTION", e4[e4.WEBIM_MESSAGE_REC_PHOTO = 303] = "WEBIM_MESSAGE_REC_PHOTO", e4[e4.SERVER_GET_DNSLIST_FAILED = 304] = "SERVER_GET_DNSLIST_FAILED", e4[e4.WEBIM_MESSAGE_REC_AUDIO_FILE = 305] = "WEBIM_MESSAGE_REC_AUDIO_FILE", e4[e4.WEBIM_MESSAGE_REC_VEDIO = 306] = "WEBIM_MESSAGE_REC_VEDIO", e4[e4.WEBIM_MESSAGE_REC_VEDIO_FILE = 307] = "WEBIM_MESSAGE_REC_VEDIO_FILE", e4[e4.WEBIM_MESSAGE_REC_FILE = 308] = "WEBIM_MESSAGE_REC_FILE", e4[e4.WEBIM_MESSAGE_SED_TEXT = 309] = "WEBIM_MESSAGE_SED_TEXT", e4[e4.WEBIM_MESSAGE_SED_EMOTION = 310] = "WEBIM_MESSAGE_SED_EMOTION", e4[e4.WEBIM_MESSAGE_SED_PHOTO = 311] = "WEBIM_MESSAGE_SED_PHOTO", e4[e4.WEBIM_MESSAGE_SED_AUDIO = 312] = "WEBIM_MESSAGE_SED_AUDIO", e4[e4.WEBIM_MESSAGE_SED_AUDIO_FILE = 313] = "WEBIM_MESSAGE_SED_AUDIO_FILE", e4[e4.WEBIM_MESSAGE_SED_VEDIO = 314] = "WEBIM_MESSAGE_SED_VEDIO", e4[e4.WEBIM_MESSAGE_SED_VEDIO_FILE = 315] = "WEBIM_MESSAGE_SED_VEDIO_FILE", e4[e4.WEBIM_MESSAGE_SED_FILE = 316] = "WEBIM_MESSAGE_SED_FILE", e4[e4.WEBIM_MESSAGE_SED_ERROR = 317] = "WEBIM_MESSAGE_SED_ERROR", e4[e4.STATUS_INIT = 400] = "STATUS_INIT", e4[e4.STATUS_DOLOGIN_USERGRID = 401] = "STATUS_DOLOGIN_USERGRID", e4[e4.STATUS_DOLOGIN_IM = 402] = "STATUS_DOLOGIN_IM", e4[e4.STATUS_OPENED = 403] = "STATUS_OPENED", e4[e4.STATUS_CLOSING = 404] = "STATUS_CLOSING", e4[e4.STATUS_CLOSED = 405] = "STATUS_CLOSED", e4[e4.STATUS_ERROR = 406] = "STATUS_ERROR", e4[e4.SERVER_BUSY = 500] = "SERVER_BUSY", e4[e4.MESSAGE_INCLUDE_ILLEGAL_CONTENT = 501] = "MESSAGE_INCLUDE_ILLEGAL_CONTENT", e4[e4.MESSAGE_EXTERNAL_LOGIC_BLOCKED = 502] = "MESSAGE_EXTERNAL_LOGIC_BLOCKED", e4[e4.SERVER_UNKNOWN_ERROR = 503] = "SERVER_UNKNOWN_ERROR", e4[e4.MESSAGE_RECALL_TIME_LIMIT = 504] = "MESSAGE_RECALL_TIME_LIMIT", e4[e4.SERVICE_NOT_ENABLED = 505] = "SERVICE_NOT_ENABLED", e4[e4.SERVICE_NOT_ALLOW_MESSAGING = 506] = "SERVICE_NOT_ALLOW_MESSAGING", e4[e4.SERVICE_NOT_ALLOW_MESSAGING_MUTE = 507] = "SERVICE_NOT_ALLOW_MESSAGING_MUTE", e4[e4.MESSAGE_MODERATION_BLOCKED = 508] = "MESSAGE_MODERATION_BLOCKED", e4[e4.MESSAGE_CURRENT_LIMITING = 509] = "MESSAGE_CURRENT_LIMITING", e4[e4.MESSAGE_WEBSOCKET_DISCONNECTED = 510] = "MESSAGE_WEBSOCKET_DISCONNECTED", e4[e4.MESSAGE_SIZE_LIMIT = 511] = "MESSAGE_SIZE_LIMIT", e4[e4.MESSAGE_SEND_TIMEOUT = 512] = "MESSAGE_SEND_TIMEOUT", e4[e4.GROUP_NOT_EXIST = 605] = "GROUP_NOT_EXIST", e4[e4.GROUP_NOT_JOINED = 602] = "GROUP_NOT_JOINED", e4[e4.GROUP_MEMBERS_FULL = 606] = "GROUP_MEMBERS_FULL", e4[e4.PERMISSION_DENIED = 603] = "PERMISSION_DENIED", e4[e4.WEBIM_LOAD_MSG_ERROR = 604] = "WEBIM_LOAD_MSG_ERROR", e4[e4.GROUP_ALREADY_JOINED = 601] = "GROUP_ALREADY_JOINED", e4[e4.GROUP_MEMBERS_LIMIT = 607] = "GROUP_MEMBERS_LIMIT", e4[e4.GROUP_IS_DISABLED = 608] = "GROUP_IS_DISABLED", e4[e4.GROUP_MEMBER_ATTRIBUTES_SET_FAILED = 609] = "GROUP_MEMBER_ATTRIBUTES_SET_FAILED", e4[e4.REST_PARAMS_STATUS = 700] = "REST_PARAMS_STATUS", e4[e4.CHATROOM_NOT_JOINED = 702] = "CHATROOM_NOT_JOINED", e4[e4.CHATROOM_MEMBERS_FULL = 704] = "CHATROOM_MEMBERS_FULL", e4[e4.CHATROOM_NOT_EXIST = 705] = "CHATROOM_NOT_EXIST", e4[e4.LOCAL_DB_OPERATION_FAILED = 800] = "LOCAL_DB_OPERATION_FAILED", e4[e4.SDK_RUNTIME_ERROR = 999] = "SDK_RUNTIME_ERROR", e4[e4.PRESENCE_PARAM_EXCEED = 1100] = "PRESENCE_PARAM_EXCEED", e4[e4.REACTION_ALREADY_ADDED = 1101] = "REACTION_ALREADY_ADDED", e4[e4.REACTION_CREATING = 1102] = "REACTION_CREATING", e4[e4.REACTION_OPERATION_IS_ILLEGAL = 1103] = "REACTION_OPERATION_IS_ILLEGAL", e4[e4.TRANSLATION_NOT_VALID = 1200] = "TRANSLATION_NOT_VALID", e4[e4.TRANSLATION_TEXT_TOO_LONG = 1201] = "TRANSLATION_TEXT_TOO_LONG", e4[e4.TRANSLATION_FAILED = 1204] = "TRANSLATION_FAILED", e4[e4.THREAD_NOT_EXIST = 1300] = "THREAD_NOT_EXIST", e4[e4.THREAD_ALREADY_EXIST = 1301] = "THREAD_ALREADY_EXIST", e4[e4.MODIFY_MESSAGE_NOT_EXIST = 1302] = "MODIFY_MESSAGE_NOT_EXIST", e4[e4.MODIFY_MESSAGE_FORMAT_ERROR = 1303] = "MODIFY_MESSAGE_FORMAT_ERROR", e4[e4.MODIFY_MESSAGE_FAILED = 1304] = "MODIFY_MESSAGE_FAILED", e4[e4.CONVERSATION_NOT_EXIST = 1400] = "CONVERSATION_NOT_EXIST";
        }(d || (d = {}));
        var g, E2, y, v, T, _, R = function() {
          return R = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, R.apply(this, arguments);
        }, O = function(e4, t4, r2, o3) {
          var n2, i2, a2, s2, c2, u2, l2, p3, h2, f3, m2, g2, E3, y2, v2, T2, _2, O2, I2, S2, C2, N2, A2, M2, b2 = e4.response;
          b2 && "string" == typeof b2 && (b2 = JSON.parse(b2));
          var U2 = e4.status, P2 = { elapse: o3, httpCode: U2, errDesc: null == b2 ? void 0 : b2.error_description };
          if (400 === U2) {
            if (40002 === b2.error_code)
              return void t4({ type: d.THREAD_ALREADY_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
            if (40009 === b2.error_code)
              return void t4({ type: d.OPERATION_UNSUPPORTED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
            if (60005 === b2.error_code)
              return void t4({ type: d.GROUP_MEMBER_ATTRIBUTES_SET_FAILED, message: (null == b2 ? void 0 : b2.desc) || (null == b2 ? void 0 : b2.error_description), extraInfo: P2 });
            if (60010 === b2.error_code)
              return void ((null == b2 ? void 0 : b2.error_description.includes("exceeds chatgroup user metadata single value limit")) ? t4({ type: d.MAX_LIMIT, message: (null == b2 ? void 0 : b2.desc) || b2.error_description, extraInfo: P2 }) : t4({ type: d.NO_PERMISSION, message: (null == b2 ? void 0 : b2.desc) || b2.error_description, extraInfo: P2 }));
            if (60011 === b2.error_code)
              return void t4({ type: d.CHATROOM_NOT_JOINED, message: null == b2 ? void 0 : b2.desc, extraInfo: P2 });
            if (14403 === b2.error_code)
              return void t4({ type: d.WEBIM_UPLOADFILE_ERROR, message: null == b2 ? void 0 : b2.error_description, data: b2, extraInfo: P2 });
            if (60006 === b2.error_code || 60007 === b2.error_code || 60009 === b2.error_code || 60012 === b2.error_code)
              return void t4({ type: d.MAX_LIMIT, message: (null == b2 ? void 0 : b2.desc) || (null == b2 ? void 0 : b2.error_description), extraInfo: P2 });
            if (91104 === b2.error_code)
              return void t4({ type: d.NO_PERMISSION, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
            if (null === (n2 = b2.error_description) || void 0 === n2 ? void 0 : n2.includes("are not members of this group"))
              return (null === (i2 = e4.responseURL) || void 0 === i2 ? void 0 : i2.includes("chatgroups")) ? t4({ type: d.GROUP_NOT_JOINED, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : t4({ type: d.CHATROOM_NOT_JOINED, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }), void r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: null == b2 ? void 0 : b2.error_description, data: e4.responseText, extraInfo: P2 });
            if ("the app not open presence" === (null == b2 ? void 0 : b2.result))
              return void t4({ type: d.SERVICE_NOT_ENABLED, message: null == b2 ? void 0 : b2.result, extraInfo: P2 });
            if (null == b2 ? void 0 : b2.error_description.includes("remark length must less"))
              return void t4({ type: d.MAX_LIMIT, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
            switch (null == b2 ? void 0 : b2.error_description) {
              case "the user is already operation this message":
                t4({ type: d.REACTION_ALREADY_ADDED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "The quantity has exceeded the limit!":
                t4({ type: d.MAX_LIMIT, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "The user not in this group!":
                t4({ type: d.GROUP_NOT_JOINED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "the user operation is illegal!":
                t4({ type: d.REACTION_OPERATION_IS_ILLEGAL, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "this appKey is not open reaction service!":
              case "this appKey not open message roaming":
                t4({ type: d.SERVICE_NOT_ENABLED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "this message is creating reaction, please try again.":
                t4({ type: d.REACTION_CREATING, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "groupId can not be null!":
                t4({ type: d.GROUP_NOT_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "The input text is too long.":
                t4({ type: d.TRANSLATION_TEXT_TOO_LONG, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "The target language is not valid.":
                t4({ type: d.TRANSLATION_NOT_VALID, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "report failed, get message by id failed":
                t4({ type: d.MESSAGE_NOT_FOUND, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "ext is too big ":
                t4({ type: d.PRESENCE_PARAM_EXCEED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "Request body not readable.Please check content type is correct!":
              case "param mark must be not empty, please check!":
              case "param mark illegal, please check it!":
              case "param pin_msg_id illegal, please check it!":
                t4({ type: d.REQUEST_PARAMETER_ERROR, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              case "updateRemark | they are not friends, please add as a friend first.":
                t4({ type: d.USER_NOT_FRIEND, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
                break;
              default:
                t4({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: null == b2 ? void 0 : b2.error_description, data: e4.responseText, extraInfo: P2 }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: null == b2 ? void 0 : b2.error_description, data: e4.responseText, extraInfo: P2 });
            }
          } else if (401 === U2)
            40001 === b2.error_code || 60001 === b2.error_code || "Unable to authenticate (OAuth)" === b2.error_description ? t4({ type: d.NO_PERMISSION, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : (r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.responseText, message: e4.responseText, extraInfo: P2 }), t4({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.responseText, message: e4.responseText, extraInfo: P2 }));
          else if (403 === U2)
            4e4 === b2.error_code || 60004 === b2.error_code || 15002 === b2.error_code ? t4({ type: d.SERVICE_NOT_ENABLED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 40003 === b2.error_code || 40004 === b2.error_code ? t4({ type: d.THREAD_ALREADY_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 40005 === b2.error_code || 40007 === b2.error_code || 91002 === b2.error_code ? t4({ type: d.MAX_LIMIT, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 60002 === b2.error_code ? t4({ type: d.PERMISSION_DENIED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 91101 === b2.error_code ? t4({ type: d.MAX_LIMIT, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 91102 === b2.error_code && t4({ type: d.REQUEST_PARAMETER_ERROR, message: b2.error_description, extraInfo: P2 }), "group member list is full!" === b2.error_description ? (null === (a2 = e4.responseURL) || void 0 === a2 ? void 0 : a2.includes("chatgroups")) ? t4({ type: d.GROUP_MEMBERS_FULL, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : t4({ type: d.CHATROOM_MEMBERS_FULL, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (s2 = b2.error_description) || void 0 === s2 ? void 0 : s2.includes(b2.error_description.includes("already in group"))) ? (null === (c2 = e4.responseURL) || void 0 === c2 ? void 0 : c2.includes("chatgroups")) && t4({ type: d.GROUP_ALREADY_JOINED, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (u2 = b2.error_description) || void 0 === u2 ? void 0 : u2.includes("are not members of this group")) ? (null === (l2 = e4.responseURL) || void 0 === l2 ? void 0 : l2.includes("chatgroups")) ? t4({ type: d.GROUP_NOT_JOINED, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : t4({ type: d.CHATROOM_NOT_JOINED, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (p3 = b2.error_description) || void 0 === p3 ? void 0 : p3.includes("service not open!")) || (null === (h2 = b2.error_description) || void 0 === h2 ? void 0 : h2.includes("message report not open")) || (null === (f3 = b2.error_description) || void 0 === f3 ? void 0 : f3.includes("messageroaming function not open")) ? t4({ type: d.SERVICE_NOT_ENABLED, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (m2 = b2.error_description) || void 0 === m2 ? void 0 : m2.includes("members size is greater than max user size !")) ? t4({ type: d.GROUP_MEMBERS_LIMIT, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (g2 = b2.error_description) || void 0 === g2 ? void 0 : g2.includes("can not operate this group, reason: group is disabled")) ? t4({ type: d.GROUP_IS_DISABLED, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : (null === (E3 = b2.error_description) || void 0 === E3 ? void 0 : E3.includes("Invitee's contact max count")) || (null === (y2 = b2.error_description) || void 0 === y2 ? void 0 : y2.includes("Inviter's contact max count")) ? t4({ type: d.MAX_LIMIT, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : t4({ type: d.PERMISSION_DENIED, data: e4.response || e4.responseText, message: "permission denied", extraInfo: R(R({}, P2), { errDesc: "permission denied" }) }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.responseText, message: e4.responseText, extraInfo: P2 });
          else if (404 === U2)
            40011 === b2.error_code ? t4({ type: d.THREAD_NOT_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 40012 === b2.error_code ? t4({ type: d.NO_PERMISSION, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 60003 === b2.error_code || 20004 === b2.error_code ? t4({ type: d.GROUP_NOT_JOINED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }) : 91001 === b2.error_code && t4({ type: d.CONVERSATION_NOT_EXIST, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 }), (null === (v2 = b2.error_description) || void 0 === v2 ? void 0 : v2.includes("do not find this group")) || (null === (T2 = b2.error_description) || void 0 === T2 ? void 0 : T2.includes("does not exist")) ? (null === (_2 = e4.responseURL) || void 0 === _2 ? void 0 : _2.includes("chatgroups")) ? t4({ type: d.GROUP_NOT_EXIST, data: e4.response || e4.responseText, message: "The chat room dose not exist.", extraInfo: R(R({}, P2), { errDesc: "The chat room dose not exist." }) }) : t4({ type: d.CHATROOM_NOT_EXIST, data: e4.response || e4.responseText, message: "The chat room dose not exist.", extraInfo: R(R({}, P2), { errDesc: "The chat room dose not exist." }) }) : (null === (O2 = b2.error_description) || void 0 === O2 ? void 0 : O2.includes("username")) && (null === (I2 = b2.error_description) || void 0 === I2 ? void 0 : I2.includes("doesn't exist!'")) || (null === (S2 = b2.error_description) || void 0 === S2 ? void 0 : S2.includes("user not found")) || (null === (C2 = b2.error_description) || void 0 === C2 ? void 0 : C2.includes("Service resource not found")) && "UserNotFoundException" === (null == b2 ? void 0 : b2.exception) ? t4({ type: d.USER_NOT_FOUND, data: e4.response || e4.responseText, message: b2.error_description, extraInfo: P2 }) : b2.error_description.includes("user session pin message not exist") ? t4({ type: d.MESSAGE_NOT_FOUND, message: b2.error_description, extraInfo: P2 }) : t4({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.response || e4.responseText, message: e4.responseText, extraInfo: P2 }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.response || e4.responseText, message: e4.responseText, extraInfo: P2 });
          else if (406 === U2)
            90004 === b2.error_code && t4({ type: d.OPERATION_NOT_ALLOWED, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
          else if (429 === U2 || 503 === U2) {
            if (null === (N2 = b2.error_description) || void 0 === N2 ? void 0 : N2.includes("The request has reached the maximum limit"))
              return void t4({ type: d.MAX_LIMIT, message: e4.responseText, extraInfo: P2 });
            if (null === (A2 = b2.error_description) || void 0 === A2 ? void 0 : A2.includes("upload client logs reached limit"))
              return void t4({ type: d.MAX_LIMIT, message: e4.responseText });
            t4({ type: d.SERVER_BUSY, data: e4.response || e4.responseText, message: "Server is busy.", extraInfo: R(R({}, P2), { errDesc: "Server is busy." }) }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.responseText, message: "Server is busy.", extraInfo: R(R({}, P2), { errDesc: "Server is busy." }) });
          } else if (500 === U2) {
            if (40006 === b2.error_code || 40008 === b2.error_code || 40010 === b2.error_code)
              return void t4({ type: d.SERVER_UNKNOWN_ERROR, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
            if (90005 === b2.error_code || 99999 === b2.error_code)
              return void t4({ type: d.REQUEST_UNKNOWN, message: null == b2 ? void 0 : b2.error_description, extraInfo: P2 });
            if (null === (M2 = b2.error_description) || void 0 === M2 ? void 0 : M2.includes("translte failed!"))
              return void t4({ type: d.TRANSLATION_FAILED, message: e4.responseText, extraInfo: P2 });
            t4({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.responseText, message: "", extraInfo: P2 }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.responseText, message: "", extraInfo: P2 });
          } else
            t4({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.responseText, message: e4.responseText, extraInfo: R(R({}, P2), { errDesc: "ajax error" }) }), r2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: e4.responseText, message: e4.responseText, extraInfo: R(R({}, P2), { errDesc: "ajax error" }) });
        };
        !function(e4) {
          e4[e4.UNKNOWOPERATION = -1] = "UNKNOWOPERATION", e4[e4.REST_GET_SESSION_LIST = 1] = "REST_GET_SESSION_LIST", e4[e4.REST_DEL_SESSION = 2] = "REST_DEL_SESSION", e4[e4.REST_GET_HISTORY_MESSAGE = 3] = "REST_GET_HISTORY_MESSAGE", e4[e4.REST_PIN_CONVERSATION = 4] = "REST_PIN_CONVERSATION", e4[e4.REST_MARK_CONVERSATION = 5] = "REST_MARK_CONVERSATION", e4[e4.REST_UPLOAD_FILE_IN_PARTS = 6] = "REST_UPLOAD_FILE_IN_PARTS", e4[e4.REST_DELETE_MESSAGES_CONVERSATIONS = 7] = "REST_DELETE_MESSAGES_CONVERSATIONS", e4[e4.REST_PIN_MESSAGE = 8] = "REST_PIN_MESSAGE", e4[e4.REST_FETCH_PINMESSAGES = 9] = "REST_FETCH_PINMESSAGES", e4[e4.REST_OPERATE = 100] = "REST_OPERATE", e4[e4.MSYNC_SENDMESSAGE = 101] = "MSYNC_SENDMESSAGE", e4[e4.MSYNC_RECALLMESSAGE = 102] = "MSYNC_RECALLMESSAGE", e4[e4.MSYNC_MODIFYMESSAGE = 103] = "MSYNC_MODIFYMESSAGE", e4[e4.MSYNC_OPERATE = 200] = "MSYNC_OPERATE", e4[e4.ROSTER_ADD = 201] = "ROSTER_ADD", e4[e4.ROSTER_REMOVE = 202] = "ROSTER_REMOVE", e4[e4.ROSTER_ACCEPT = 203] = "ROSTER_ACCEPT", e4[e4.ROSTER_DECLINE = 204] = "ROSTER_DECLINE", e4[e4.ROSTER_BAN = 205] = "ROSTER_BAN", e4[e4.ROSTER_ALLOW = 206] = "ROSTER_ALLOW", e4[e4.ROSTER_BLACKLIST = 207] = "ROSTER_BLACKLIST", e4[e4.ROSTER_CONTACTS = 208] = "ROSTER_CONTACTS", e4[e4.ROSTER_GET_ALL_CONTACTS_REMARKS = 209] = "ROSTER_GET_ALL_CONTACTS_REMARKS", e4[e4.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE = 210] = "ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE", e4[e4.ROSTER_SET_CONTACT_REMARK = 211] = "ROSTER_SET_CONTACT_REMARK", e4[e4.ROSTER_OPERATE = 300] = "ROSTER_OPERATE", e4[e4.USER_LOGIN = 301] = "USER_LOGIN", e4[e4.USER_CREATE = 302] = "USER_CREATE", e4[e4.USER_UPDATE_USERINFO = 303] = "USER_UPDATE_USERINFO", e4[e4.USER_FETCH_USERINFO = 304] = "USER_FETCH_USERINFO", e4[e4.USER_UPDATE_NICK = 305] = "USER_UPDATE_NICK", e4[e4.USER_UPLOAD_PUSH_TOKEN = 306] = "USER_UPLOAD_PUSH_TOKEN", e4[e4.USER_LOGGEDIN_OTHER_PLATFORM = 307] = "USER_LOGGEDIN_OTHER_PLATFORM", e4[e4.USER_OPERATE = 400] = "USER_OPERATE", e4[e4.GROUP_CREATEGROUP = 401] = "GROUP_CREATEGROUP", e4[e4.GROUP_BLOCK_MESSAGE = 402] = "GROUP_BLOCK_MESSAGE", e4[e4.GROUP_FETCH_PUBLICGROUPS_WITHCURSOR = 403] = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e4[e4.GROUP_FETCH_USERS_GROUP = 404] = "GROUP_FETCH_USERS_GROUP", e4[e4.GROUP_CHANGE_OWNER = 405] = "GROUP_CHANGE_OWNER", e4[e4.GROUP_FETCH_SPECIFICATION = 406] = "GROUP_FETCH_SPECIFICATION", e4[e4.GROUP_CHANGE_GROUPATTRIBUTE = 407] = "GROUP_CHANGE_GROUPATTRIBUTE", e4[e4.GROUP_FETCH_MEMEBERS = 408] = "GROUP_FETCH_MEMEBERS", e4[e4.GROUP_GET_ADMIN = 409] = "GROUP_GET_ADMIN", e4[e4.GROUP_SET_ADMIN = 410] = "GROUP_SET_ADMIN", e4[e4.GROUP_REMOVE_ADMIN = 411] = "GROUP_REMOVE_ADMIN", e4[e4.GROUP_DESTOTYGROUP = 412] = "GROUP_DESTOTYGROUP", e4[e4.GROUP_LEAVEGROUP = 413] = "GROUP_LEAVEGROUP", e4[e4.GROUP_INVITE_TO_GROUP = 414] = "GROUP_INVITE_TO_GROUP", e4[e4.GROUP_JOIN_PUBLICGROUP = 415] = "GROUP_JOIN_PUBLICGROUP", e4[e4.GROUP_ACCEPT_JOINPUBLICGROUPAPPL = 416] = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e4[e4.GROUP_DECLINE_JOINPUBLICGROUPAPPL = 417] = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e4[e4.GROUP_ACCEPT_INVITATION = 418] = "GROUP_ACCEPT_INVITATION", e4[e4.GROUP_DECLINE_INVITATION = 419] = "GROUP_DECLINE_INVITATION", e4[e4.GROUP_REMOVE_MEMBER = 420] = "GROUP_REMOVE_MEMBER", e4[e4.GROUP_REMOVE_MEMBERS = 421] = "GROUP_REMOVE_MEMBERS", e4[e4.GROUP_MUTE_MEMBERS = 422] = "GROUP_MUTE_MEMBERS", e4[e4.GROUP_UNMUTE_MEMBERS = 423] = "GROUP_UNMUTE_MEMBERS", e4[e4.GROUP_FETCH_MUTES = 424] = "GROUP_FETCH_MUTES", e4[e4.GROUP_BLOCK_MEMBER = 425] = "GROUP_BLOCK_MEMBER", e4[e4.GROUP_BLOCK_MEMBERS = 426] = "GROUP_BLOCK_MEMBERS", e4[e4.GROUP_UNBLOCK_MEMBER = 427] = "GROUP_UNBLOCK_MEMBER", e4[e4.GROUP_UNBLOCK_MEMBERS = 428] = "GROUP_UNBLOCK_MEMBERS", e4[e4.GROUP_GET_BLOCK_LIST = 429] = "GROUP_GET_BLOCK_LIST", e4[e4.GROUP_MUTE_ALLMEMBERS = 430] = "GROUP_MUTE_ALLMEMBERS", e4[e4.GROUP_UNMUTE_ALLMEMBERS = 431] = "GROUP_UNMUTE_ALLMEMBERS", e4[e4.GROUP_ADD_WHITELIST = 432] = "GROUP_ADD_WHITELIST", e4[e4.GROUP_REMOVE_WHITELIST = 433] = "GROUP_REMOVE_WHITELIST", e4[e4.GROUP_FETCH_WHITELIST = 434] = "GROUP_FETCH_WHITELIST", e4[e4.GROUP_IS_IN_WHITELIST = 435] = "GROUP_IS_IN_WHITELIST", e4[e4.GROUP_GET_READ_USERS = 436] = "GROUP_GET_READ_USERS", e4[e4.GROUP_FETCH_ANNOUNCEMENT = 437] = "GROUP_FETCH_ANNOUNCEMENT", e4[e4.GROUP_UPDATE_ANNOUNCEMENT = 438] = "GROUP_UPDATE_ANNOUNCEMENT", e4[e4.GROUP_UPLOAD_SHAREDFILE = 439] = "GROUP_UPLOAD_SHAREDFILE", e4[e4.GROUP_DELETE_SHAREDFILE = 440] = "GROUP_DELETE_SHAREDFILE", e4[e4.GROUP_FETCH_SHAREDFILE = 441] = "GROUP_FETCH_SHAREDFILE", e4[e4.GROUP_DOWNLOAD_SHAREDFILE = 442] = "GROUP_DOWNLOAD_SHAREDFILE", e4[e4.GROUP_MEMBER_SET_META_DATA = 443] = "GROUP_MEMBER_SET_META_DATA", e4[e4.GROUP_MEMBER_FETCH_META_DATA = 444] = "GROUP_MEMBER_FETCH_META_DATA", e4[e4.GROUP_OPERATE = 500] = "GROUP_OPERATE", e4[e4.CHATROOM_FETCH_CHATROOMSWITHPAGE = 501] = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e4[e4.CHATROOM_CREATECHATROOM = 502] = "CHATROOM_CREATECHATROOM", e4[e4.CHATROOM_DESTORYCHATROOM = 503] = "CHATROOM_DESTORYCHATROOM", e4[e4.CHATROOM_FETCH_SPECIFICATION = 504] = "CHATROOM_FETCH_SPECIFICATION", e4[e4.CHATROOM_CHANGE_ATTRIBUTE = 505] = "CHATROOM_CHANGE_ATTRIBUTE", e4[e4.CHATROOM_REMOVE_MEMBER = 506] = "CHATROOM_REMOVE_MEMBER", e4[e4.CHATROOM_REMOVE_MEMBERS = 507] = "CHATROOM_REMOVE_MEMBERS", e4[e4.CHATROOM_ADD_MEMBERS = 508] = "CHATROOM_ADD_MEMBERS", e4[e4.CHATROOM_JOINCAHTROOM = 509] = "CHATROOM_JOINCAHTROOM", e4[e4.CHATROOM_LEAVECAHTROOM = 510] = "CHATROOM_LEAVECAHTROOM", e4[e4.CHATROOM_FETCH_MEMBERS = 511] = "CHATROOM_FETCH_MEMBERS", e4[e4.CHATROOM_GET_ADMIN = 512] = "CHATROOM_GET_ADMIN", e4[e4.CHATROOM_SET_ADMIN = 513] = "CHATROOM_SET_ADMIN", e4[e4.CHATROOM_REMOVE_ADMIN = 514] = "CHATROOM_REMOVE_ADMIN", e4[e4.CHATROOM_MUTE_USER = 515] = "CHATROOM_MUTE_USER", e4[e4.CHATROOM_UNMUTE_USER = 516] = "CHATROOM_UNMUTE_USER", e4[e4.CHATROOM_FETCH_MUTES = 517] = "CHATROOM_FETCH_MUTES", e4[e4.CHATROOM_BLOCK_USER = 518] = "CHATROOM_BLOCK_USER", e4[e4.CHATROOM_BLOCK_USERS = 519] = "CHATROOM_BLOCK_USERS", e4[e4.CHATROOM_UNBLOCK_USER = 520] = "CHATROOM_UNBLOCK_USER", e4[e4.CHATROOM_UNBLOCK_USERS = 521] = "CHATROOM_UNBLOCK_USERS", e4[e4.CHATROOM_FETCH_BANS = 522] = "CHATROOM_FETCH_BANS", e4[e4.CHATROOM_MUTE_ALLMEMEBERS = 523] = "CHATROOM_MUTE_ALLMEMEBERS", e4[e4.CHATROOM_UNMUTE_ALLMEMEBERS = 524] = "CHATROOM_UNMUTE_ALLMEMEBERS", e4[e4.CHATROOM_ADD_WHITELIST = 525] = "CHATROOM_ADD_WHITELIST", e4[e4.CHATROOM_REMOVE_WHITELIST = 526] = "CHATROOM_REMOVE_WHITELIST", e4[e4.CHATROOM_FETCH_WHITELIST = 527] = "CHATROOM_FETCH_WHITELIST", e4[e4.CHATROOM_FETCH_MEMBERIN_WHITELIST = 528] = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e4[e4.CHATROOM_FETCH_ANNOUNCEMENT = 529] = "CHATROOM_FETCH_ANNOUNCEMENT", e4[e4.CHATROOM_UPDATE_ANNOUNCEMENT = 530] = "CHATROOM_UPDATE_ANNOUNCEMENT", e4[e4.CHATROOM_REMOVE_SHARE_FILE = 531] = "CHATROOM_REMOVE_SHARE_FILE", e4[e4.CHATROOM_GET_SHARE_FILE_LIST = 532] = "CHATROOM_GET_SHARE_FILE_LIST", e4[e4.CHATROOM_UPLOAD_FILE = 533] = "CHATROOM_UPLOAD_FILE", e4[e4.CHATROOM_SET_META_DATA = 534] = "CHATROOM_SET_META_DATA", e4[e4.CHATROOM_DELETE_META_DATA = 535] = "CHATROOM_DELETE_META_DATA", e4[e4.CHATROOM_FETCH_META_DATA = 536] = "CHATROOM_FETCH_META_DATA", e4[e4.CHATROOM_FETCH_USER_JOINED_CHATROOM = 537] = "CHATROOM_FETCH_USER_JOINED_CHATROOM", e4[e4.CHATROOM_OPERATE = 600] = "CHATROOM_OPERATE";
        }(g || (g = {})), function(e4) {
          e4.SDK_INTERNAL = "SDK_INTERNAL", e4.LOGIN = "USER_LOGIN", e4.REGISTER = "USER_CREATE", e4.GET_CHATROOM_LIST = "CHATROOM_FETCH_CHATROOMSWITHPAGE", e4.CREATE_CHATROOM = "CHATROOM_CREATECHATROOM", e4.DESTROY_CHATROOM = "CHATROOM_DESTORYCHATROOM", e4.GET_CHATROOM_DETAIL = "CHATROOM_FETCH_SPECIFICATION", e4.MODIFY_CHATROOM = "CHATROOM_CHANGE_ATTRIBUTE", e4.REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBER", e4.MULTI_REMOVE_CHATROOM_MEMBER = "CHATROOM_REMOVE_MEMBERS", e4.ADD_USERS_TO_CHATROOM = "CHATROOM_ADD_MEMBERS", e4.JOIN_CHATROOM = "CHATROOM_JOINCAHTROOM", e4.QUIT_CHATROOM = "CHATROOM_LEAVECAHTROOM", e4.LIST_CHATROOM_MEMBERS = "CHATROOM_FETCH_MEMBERS", e4.GET_CHATROOM_ADMIN = "CHATROOM_GET_ADMIN", e4.SET_CHATROOM_ADMIN = "CHATROOM_SET_ADMIN", e4.REMOVE_CHATROOM_ADMIN = "CHATROOM_REMOVE_ADMIN", e4.MUTE_CHATROOM_MEMBER = "CHATROOM_MUTE_USER", e4.REMOVE_MUTE_CHATROOM_MEMBER = "CHATROOM_UNMUTE_USER", e4.GET_MUTE_CHATROOM_MEMBERS = "CHATROOM_FETCH_MUTES", e4.SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USER", e4.MULTI_SET_CHATROOM_MEMBER_TO_BLACK = "CHATROOM_BLOCK_USERS", e4.REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USER", e4.MULTI_REMOVE_CHATROOM_MEMBER_BLACK = "CHATROOM_UNBLOCK_USERS", e4.GET_CHATROOM_BLOCK_MEMBERS = "CHATROOM_FETCH_BANS", e4.DISABLED_CHATROOM_SEND_MSG = "CHATROOM_MUTE_ALLMEMEBERS", e4.ENABLE_CHATROOM_SEND_MSG = "CHATROOM_UNMUTE_ALLMEMEBERS", e4.ADD_CHATROOM_WHITE_USERS = "CHATROOM_ADD_WHITELIST", e4.REMOVE_CHATROOM_WHITE_USERS = "CHATROOM_REMOVE_WHITELIST", e4.GET_CHATROOM_WHITE_USERS = "CHATROOM_FETCH_WHITELIST", e4.CHECK_CHATROOM_WHITE_USER = "CHATROOM_FETCH_MEMBERIN_WHITELIST", e4.GET_CHATROOM_ANN = "CHATROOM_FETCH_ANNOUNCEMENT", e4.UPDATE_CHATROOM_ANN = "CHATROOM_UPDATE_ANNOUNCEMENT", e4.DELETE_CHATROOM_FILE = "CHATROOM_REMOVE_SHARE_FILE", e4.GET_CHATROOM_FILES = "CHATROOM_GET_SHARE_FILE_LIST", e4.UPLOAD_CHATROOM_FILE = "CHATROOM_UPLOAD_FILE", e4.SET_CHATROOM_ATTR = "CHATROOM_SET_META_DATA", e4.DELETE_CHATROOM_ATTR = "CHATROOM_DELETE_META_DATA", e4.GET_CHATROOM_ATTR = "CHATROOM_FETCH_META_DATA", e4.GET_USER_JOINED_CHATROOM = "CHATROOM_FETCH_USER_JOINED_CHATROOM", e4.CREATE_GROUP = "GROUP_CREATEGROUP", e4.BLOCK_GROUP = "GROUP_BLOCK_MESSAGE", e4.LIST_GROUP = "GROUP_FETCH_PUBLICGROUPS_WITHCURSOR", e4.GET_USER_GROUP = "GROUP_FETCH_USERS_GROUP", e4.CHANGE_OWNER = "GROUP_CHANGE_OWNER", e4.GET_GROUP_INFO = "GROUP_FETCH_SPECIFICATION", e4.MODIFY_GROUP = "GROUP_CHANGE_GROUPATTRIBUTE", e4.LIST_GROUP_MEMBER = "GROUP_FETCH_MEMEBERS", e4.GET_GROUP_ADMIN = "GROUP_GET_ADMIN", e4.SET_GROUP_ADMIN = "GROUP_SET_ADMIN", e4.REMOVE_GROUP_ADMIN = "GROUP_REMOVE_ADMIN", e4.DISSOLVE_GROUP = "GROUP_DESTOTYGROUP", e4.QUIT_GROUP = "GROUP_LEAVEGROUP", e4.INVITE_TO_GROUP = "GROUP_INVITE_TO_GROUP", e4.JOIN_GROUP = "GROUP_JOIN_PUBLICGROUP", e4.AGREE_JOIN_GROUP = "GROUP_ACCEPT_JOINPUBLICGROUPAPPL", e4.REJECT_JOIN_GROUP = "GROUP_DECLINE_JOINPUBLICGROUPAPPL", e4.AGREE_INVITE_GROUP = "GROUP_ACCEPT_INVITATION", e4.REJECT_INVITE_GROUP = "GROUP_DECLINE_INVITATION", e4.REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBER", e4.MULTI_REMOVE_GROUP_MEMBER = "GROUP_REMOVE_MEMBERS", e4.MUTE_GROUP_MEMBER = "GROUP_MUTE_MEMBERS", e4.UNMUTE_GROUP_MEMBER = "GROUP_UNMUTE_MEMBERS", e4.GET_GROUP_MUTE_LIST = "GROUP_FETCH_MUTES", e4.BLOCK_GROUP_MEMBER = "GROUP_BLOCK_MEMBER", e4.BLOCK_GROUP_MEMBERS = "GROUP_BLOCK_MEMBERS", e4.UNBLOCK_GROUP_MEMBER = "GROUP_UNBLOCK_MEMBER", e4.UNBLOCK_GROUP_MEMBERS = "GROUP_UNBLOCK_MEMBERS", e4.GET_GROUP_BLACK_LIST = "GROUP_GET_BLOCK_LIST", e4.DISABLED_SEND_GROUP_MSG = "GROUP_MUTE_ALLMEMBERS", e4.ENABLE_SEND_GROUP_MSG = "GROUP_UNMUTE_ALLMEMBERS", e4.ADD_USERS_TO_GROUP_WHITE = "GROUP_ADD_WHITELIST", e4.REMOVE_GROUP_WHITE_MEMBER = "GROUP_REMOVE_WHITELIST", e4.GET_GROUP_WHITE_LIST = "GROUP_FETCH_WHITELIST", e4.IS_IN_GROUP_WHITE_LIST = "GROUP_IS_IN_WHITELIST", e4.GET_GROUP_MSG_READ_USER = "GROUP_GET_READ_USERS", e4.GET_GROUP_ANN = "GROUP_FETCH_ANNOUNCEMENT", e4.UPDATE_GROUP_ANN = "GROUP_UPDATE_ANNOUNCEMENT", e4.UPLOAD_GROUP_FILE = "GROUP_UPLOAD_SHAREDFILE", e4.DELETE_GROUP_FILE = "GROUP_DELETE_SHAREDFILE", e4.GET_GROUP_FILE_LIST = "GROUP_FETCH_SHAREDFILE", e4.DOWN_GROUP_FILE = "GROUP_DOWNLOAD_SHAREDFILE", e4.SET_GROUP_MEMBER_ATTRS = "GROUP_MEMBER_SET_META_DATA", e4.GET_GROUP_MEMBER_ATTR = "GROUP_MEMBER_FETCH_META_DATA", e4.GET_SESSION_LIST = "REST_GET_SESSION_LIST", e4.DELETE_SESSION = "REST_DEL_SESSION", e4.GET_HISTORY_MSG = "REST_GET_HISTORY_MESSAGE", e4.PIN_CONVERSATION = "REST_PIN_CONVERSATION", e4.REST_UPLOAD_FILE_IN_PARTS = "REST_UPLOAD_FILE_IN_PARTS", e4.REST_DELETE_MESSAGES_CONVERSATIONS = "REST_DELETE_MESSAGES_CONVERSATIONS", e4.MARK_CONVERSATION = "REST_MARK_CONVERSATION", e4.REST_FETCH_PINMESSAGES = "REST_FETCH_PINMESSAGES", e4.REST_PIN_MESSAGE = "REST_PIN_MESSAGE", e4.UPDATE_USER_INFO = "USER_UPDATE_USERINFO", e4.GET_USER_INFO = "USER_FETCH_USERINFO", e4.UPDATE_USER_NICK = "USER_UPDATE_NICK", e4.UPLOAD_PUSH_TOKEN = "USER_UPLOAD_PUSH_TOKEN", e4.USER_LOGGEDIN_OTHER_PLATFORM = "USER_LOGGEDIN_OTHER_PLATFORM", e4.GET_BLACK_LIST = "ROSTER_BLACKLIST", e4.GET_CONTACTS = "ROSTER_CONTACTS", e4.ROSTER_GET_ALL_CONTACTS_REMARKS = "ROSTER_GET_ALL_CONTACTS_REMARKS", e4.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE = "ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE", e4.ROSTER_SET_CONTACT_REMARK = "ROSTER_SET_CONTACT_REMARK", e4.ROSTER_ADD = "ROSTER_ADD", e4.ROSTER_REMOVE = "ROSTER_REMOVE", e4.ROSTER_ACCEPT = "ROSTER_ACCEPT", e4.ROSTER_DECLINE = "ROSTER_DECLINE", e4.ROSTER_BAN = "ROSTER_BAN", e4.ROSTER_ALLOW = "ROSTER_ALLOW", e4.SEND_MSG = "MSYNC_SENDMESSAGE", e4.UPLOAD_MSG_ATTACH = "UPLOAD_MSG_ATTACH", e4.SEND_RECALL_MSG = "MSYNC_RECALLMESSAGE", e4.MODIFY_MESSAGE = "MSYNC_MODIFYMESSAGE";
        }(E2 || (E2 = {})), function(e4) {
          e4.GET_DNS = "REST_DNSLIST", e4.LOGIN_BY_AGORA_TOKEN = "LOGIN_BY_AGORA_TOKEN", e4.LOGIN_BY_PWD = "LOGIN_BY_PWD", e4.RESISTER = "REGISTER", e4.REST_INIT_UPLOAD_TASK_IN_PARTS = "REST_INIT_UPLOAD_TASK_IN_PARTS", e4.REST_UPLOAD_PART = "REST_UPLOAD_PART", e4.REST_COMPLETE_UPLOAD_PART = "REST_COMPLETE_UPLOAD_PART", e4.REST_ABORT_UPLOAD_PART = "REST_ABORT_UPLOAD_PART", e4.CONNECT_WEBSOCKET = "CONNECT_WEBSOCKET";
        }(y || (y = {})), function(e4) {
          e4[e4["5G"] = 7] = "5G", e4[e4["4G"] = 7] = "4G", e4[e4["3G"] = 7] = "3G", e4[e4["2G"] = 7] = "2G", e4[e4["SLOW-2G"] = 7] = "SLOW-2G", e4[e4.WIFI = 2] = "WIFI", e4[e4.LAN = 1] = "LAN", e4[e4.DISCONNECTED = 0] = "DISCONNECTED", e4[e4.NONE = 0] = "NONE", e4[e4.UNKNOWN = -1] = "UNKNOWN", e4[e4["WEBIM UNABLE TO GET"] = -2] = "WEBIM UNABLE TO GET";
        }(v || (v = {})), function(e4) {
          e4[e4.success = 200] = "success", e4[e4.failed = 500] = "failed", e4[e4.disconnect = -1] = "disconnect", e4[e4.closed = 401] = "closed", e4[e4.notFound = 404] = "notFound", e4[e4.reachLimit = 429] = "reachLimit";
        }(T || (T = {})), function(e4) {
          e4[e4.web = 0] = "web", e4[e4.native = 1] = "native";
        }(_ || (_ = {}));
        var I = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), C = 1e3, N = 9675, A = -1;
        function M() {
          console.log && (console.log.apply ? console.log.apply(console, Array.prototype.slice.call(arguments)) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
        }
        var b, U = "undefined" != typeof window && void 0 !== window.navigator && /Trident\/|MSIE /.test(window.navigator.userAgent), P = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, w = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        }, k = function() {
        }, L = {};
        !function(e4) {
          e4[e4.TRACE = 0] = "TRACE", e4[e4.DEBUG = 1] = "DEBUG", e4[e4.INFO = 2] = "INFO", e4[e4.WARN = 3] = "WARN", e4[e4.ERROR = 4] = "ERROR", e4[e4.SILENT = 5] = "SILENT";
        }(b || (b = {}));
        var D = function() {
          function e4(e5, t4, r2) {
            this.name = e5 || "defaultLogger", this.currentLevel = 0, this.useCookiePersist = false, this.storageLogLevelKey = "loglevel", this.levels = b, this.consoleLogVisibility = true, this.logMethods = ["trace", "debug", "info", "warn", "error"], this.methodFactory = r2 || this.defaultMethodFactory, this.report = false;
            var o3 = this._getPersistedLevel();
            null == o3 && (o3 = null === t4 ? "WARN" : t4), this.logs = [], this.reportLogs = [], this.reportInterval = 3e5, this.timer = null, this.config = { useCache: false, maxCache: 3145728, color: "", background: "" }, this.logBytes = 0, this.setLevel(o3, false, "");
          }
          return e4.prototype.reportLog = function() {
            var e5, t4, r2;
            return P(this, void 0, void 0, function() {
              var o3, n2, i2, a2, s2, c2, u2, l2;
              return w(this, function(d2) {
                switch (d2.label) {
                  case 0:
                    if (0 === (null === (e5 = this.reportLogs) || void 0 === e5 ? void 0 : e5.length))
                      return [2];
                    for (o3 = 2097152, n2 = this.reportLogs.join("\n") + "\n", i2 = n2.length, a2 = []; i2 > o3; )
                      a2.push(n2.substring(0, o3)), i2 -= o3, n2 = n2.substring(o3);
                    a2.push(n2), s2 = 0, c2 = a2, d2.label = 1;
                  case 1:
                    if (!(s2 < c2.length))
                      return [3, 8];
                    if (u2 = c2[s2], this.reportLogs = [], !(null === (r2 = null === (t4 = this.connection) || void 0 === t4 ? void 0 : t4.context) || void 0 === r2 ? void 0 : r2.accessToken))
                      return [2];
                    d2.label = 2;
                  case 2:
                    return d2.trys.push([2, 4, , 5]), [4, this.reportData(u2)];
                  case 3:
                    return "ok" !== (null == (l2 = d2.sent()) ? void 0 : l2.status) && this.reportLogs.unshift(u2), [3, 5];
                  case 4:
                    return d2.sent(), this.reportLogs.unshift(u2), [3, 5];
                  case 5:
                    return [4, _e.delay(3e3)];
                  case 6:
                    d2.sent(), d2.label = 7;
                  case 7:
                    return s2++, [3, 1];
                  case 8:
                    return [2];
                }
              });
            });
          }, e4.prototype.reportData = function(e5) {
            var t4, r2 = this;
            if (this.connection) {
              var o3 = this.connection.context || {}, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = o3.userId, c2 = { url: "".concat(null === (t4 = this.connection) || void 0 === t4 ? void 0 : t4.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/users/").concat(s2, "/client/logs"), type: "POST", data: JSON.stringify({ resource: this.connection.clientResource || "random_".concat(Date.now()), logContent: e5 }), dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
              return se.call(this.connection, c2).then(function(e6) {
                return r2.log("report log success", e6), e6;
              }).catch(function(e6) {
                r2.error("report log error", e6);
              });
            }
            this.error("report log error", "connection is null");
          }, e4.prototype._regularlyReportLogs = function() {
            var e5, t4 = this;
            this.timer && clearInterval(this.timer), (null !== (e5 = this.reportInterval) && void 0 !== e5 ? e5 : 0) < 6e4 && (this.reportInterval = 6e4), this.timer = setInterval(function() {
              t4.reportLog();
            }, this.reportInterval || 3e5);
          }, e4.prototype._stopReportLogs = function() {
            return P(this, void 0, void 0, function() {
              return w(this, function(e5) {
                switch (e5.label) {
                  case 0:
                    return e5.trys.push([0, 2, , 3]), [4, this.reportLog()];
                  case 1:
                    return e5.sent(), [3, 3];
                  case 2:
                    return e5.sent(), this.error("report log error when stopping upload"), [3, 3];
                  case 3:
                    return this.reportLogs = [], clearInterval(this.timer), [2];
                }
              });
            });
          }, e4.prototype.setConfig = function(e5) {
            this.config = e5;
          }, e4.prototype.getLevel = function() {
            return this.currentLevel;
          }, e4.prototype.setLevel = function(e5, t4, r2) {
            if ("string" == typeof e5 && (e5 = b[e5]), void 0 === e5 && (e5 = 0), !("number" == typeof e5 && e5 >= 0 && e5 <= this.levels.SILENT))
              throw Error("log.setLevel() called with invalid level: " + e5);
            if (this.currentLevel = e5, false !== t4 && this._persistLevel(e5), this.replaceLoggingMethods(e5, r2 || ""), "undefined" == typeof console && e5 < b.SILENT)
              throw Error("No console available for logging");
          }, e4.prototype.setDefaultLevel = function(e5) {
            this._getPersistedLevel() || this.setLevel(e5, false, "");
          }, e4.prototype.enableAll = function(e5) {
            this.setLevel(this.levels.TRACE, true, "");
          }, e4.prototype.disableAll = function(e5) {
            this.setLevel(this.levels.SILENT, true, "");
          }, e4.prototype.getLogs = function() {
            return this.logs;
          }, e4.prototype.download = function() {
            if ("undefined" != typeof window && "undefined" != typeof document) {
              var e5 = this.getLogs().join("\n"), t4 = new Blob([e5], { type: "text/plain;charset=UTF-8" }), r2 = window.URL.createObjectURL(t4), o3 = document.createElement("a");
              o3.style.display = "none", o3.href = r2, o3.setAttribute("download", "sdklog"), document.body.appendChild(o3), o3.click();
            }
          }, e4.prototype.setConsoleLogVisibility = function(e5) {
            this.consoleLogVisibility = e5;
          }, e4.prototype._bindMethod = function(e5, t4, r2) {
            var o3 = this, n2 = e5[t4], i2 = this.getTime();
            if (r2)
              return this._cacheLog;
            if ("function" == typeof n2.bind)
              return function() {
                for (var r3 = [], i3 = 0; i3 < arguments.length; i3++)
                  r3[i3] = arguments[i3];
                var a2 = o3.getTime();
                o3.consoleLogVisibility && n2.call.apply(n2, function(e6, t5, r4) {
                  if (r4 || 2 === arguments.length)
                    for (var o4, n3 = 0, i4 = t5.length; n3 < i4; n3++)
                      !o4 && n3 in t5 || (o4 || (o4 = Array.prototype.slice.call(t5, 0, n3)), o4[n3] = t5[n3]);
                  return e6.concat(o4 || Array.prototype.slice.call(t5));
                }([e5, "".concat(a2, " IM SDK [").concat("log" === t4 ? "debug" : t4, "]: ")], r3, false)), o3.onLog && o3.onLog({ time: a2, level: "log" === t4 ? "debug" : t4, logs: r3 }), o3._cacheReportLogs.apply(o3, r3);
              };
            try {
              return Function.prototype.bind.call(n2, e5, "".concat(i2, " IM SDK [").concat("log" === t4 ? "debug" : t4, "]: "));
            } catch (t5) {
              return function() {
                return Function.prototype.apply.apply(n2, [e5, arguments]);
              };
            }
          }, e4.prototype.getTime = function() {
            var e5 = /* @__PURE__ */ new Date();
            return e5.toTimeString().split(" ")[0] + ":" + e5.getMilliseconds();
          }, e4.prototype._cacheLog = function() {
            for (var e5 = [], t4 = 0; t4 < arguments.length; t4++)
              e5[t4] = arguments[t4];
            var r2 = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", o3 = "";
            e5.forEach(function(e6) {
              o3 += "object" == typeof e6 ? JSON.stringify(e6) + " " : e6 + " ";
            }), this._cacheLogCall(r2 + o3), this._cacheReportLogs.apply(this, e5);
          }, e4.prototype._cacheLogCall = function(e5) {
            var t4 = e5.length, r2 = this.logBytes + t4, o3 = this.config.maxCache;
            if (!(t4 >= o3)) {
              if (r2 < o3)
                this.logBytes += t4;
              else
                for (var n2 = r2 - o3, i2 = 0; i2 < n2; ) {
                  var a2 = this.logs.shift();
                  void 0 !== a2 && (i2 += a2.length);
                }
              this.logs.push(e5);
            }
          }, e4.prototype._cacheReportLogs = function() {
            for (var e5 = [], t4 = 0; t4 < arguments.length; t4++)
              e5[t4] = arguments[t4];
            if (this.report) {
              var r2 = (/* @__PURE__ */ new Date()).toLocaleString() + ": ", o3 = "";
              e5.forEach(function(e6) {
                o3 += "object" == typeof e6 ? JSON.stringify(e6) + " " : e6 + " ";
              }), this.reportLogs.push(r2 + o3);
            }
          }, e4.prototype._getPersistedLevel = function() {
            var e5;
            if ("undefined" == typeof window)
              return 5;
            if ("undefined" === (e5 = window && window.localStorage && window.localStorage[this.storageLogLevelKey])) {
              var t4 = window.document.cookie, r2 = t4.indexOf(encodeURIComponent(this.storageLogLevelKey));
              -1 !== r2 && (e5 = /^([^;]+)/.exec(t4.slice(r2))[1]);
            }
            return e5 || 5;
          }, e4.prototype._persistLevel = function(e5) {
            var t4 = this.logMethods[e5] || "SILENT";
            "undefined" != typeof window && (window.localStorage && (window.localStorage[this.storageLogLevelKey] = t4), this.useCookiePersist && (window.document.cookie = encodeURIComponent(this.storageLogLevelKey) + "=" + t4 + ";"));
          }, e4.prototype.replaceLoggingMethods = function(e5, t4) {
            for (var r2 = this, o3 = 0; o3 < this.logMethods.length; o3++) {
              var n2 = this.logMethods[o3];
              this[n2] = o3 < e5 ? function() {
                for (var e6 = [], t5 = 0; t5 < arguments.length; t5++)
                  e6[t5] = arguments[t5];
                r2.report && r2._cacheReportLogs.apply(r2, e6);
              } : this.methodFactory(n2, e5, t4);
            }
            this.log = this.debug;
          }, e4.prototype.defaultMethodFactory = function(e5, t4, r2) {
            return this.realMethod(e5) || this.enableLoggingWhenConsoleArrives.apply(this, [e5, t4, r2]);
          }, e4.prototype.realMethod = function(e5) {
            return "debug" === e5 && (e5 = "log"), "undefined" != typeof console && ("trace" === e5 && U ? M : void 0 !== console[e5] ? this._bindMethod(console, e5, this.config.useCache) : void 0 !== console.log ? this._bindMethod(console, "log", this.config.useCache) : k);
          }, e4.prototype.enableLoggingWhenConsoleArrives = function(e5, t4, r2) {
            return (function() {
              "undefined" != typeof console && (this.replaceLoggingMethods.call(this, t4, r2), this[e5].apply(this, arguments));
            }).bind(this);
          }, e4;
        }(), x = new D();
        x.getLogger = function(e4) {
          if ("string" != typeof e4 || "" === e4)
            throw new TypeError("You must supply a name when creating a logger.");
          return this;
        };
        var G = "undefined" != typeof window ? window.log : void 0;
        x.noConflict = function() {
          return "undefined" != typeof window && window.log === x && (window.log = G), x;
        }, x.getLoggers = function() {
          return L;
        }, x.initReport = function(e4) {
          var t4 = e4.report, r2 = e4.reportInterval, o3 = e4.connection;
          x.report = t4, x.reportInterval = r2, x.connection = o3, t4 && x._regularlyReportLogs();
        };
        var B = x, H = 5242880, j = 5242880, F = { size: 0 }, W = 15e3, K = 15e3, q = 3e5, z = 1e4, V = 1e4, J = 3e5, X = [d.MAX_LIMIT, d.WEBIM_TOKEN_EXPIRED, d.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, d.USER_NOT_FOUND, d.WEBIM_CONNCTION_AUTH_ERROR, d.REQUEST_PARAMETER_ERROR, d.WEBIM_CONNCTION_AUTH_ERROR, d.WEBIM_SERVER_SERVING_DISABLED], Y = function() {
          return Y = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, Y.apply(this, arguments);
        };
        function Q() {
          var e4 = this.context, t4 = e4.orgName, r2 = e4.appName, o3 = e4.accessToken, n2 = { url: "".concat(this.apiUrl, "/").concat(t4, "/").concat(r2, "/sdk/chatfiles/part-upload"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + o3 } };
          return B.debug("Call multipartInit"), se.call(this, n2, E2.SDK_INTERNAL).then(function(e5) {
            var t5 = e5.entities[0];
            return { data: { fileMaxSize: t5.file_upper_limit, partMinSize: t5.part_lower_limit, uuid: t5.uuid }, extraInfo: e5.extraInfo, type: e5.type };
          });
        }
        function Z(e4) {
          var t4 = this;
          return new Promise(function(r2, o3) {
            var n2, i2, a2 = (/* @__PURE__ */ new Date()).getTime(), s2 = t4.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p3 = e4.uuid, h2 = e4.partNumber, f3 = e4.part, m2 = e4.onProgress, g2 = "".concat(t4.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/chatfiles/part-upload/").concat(p3), E3 = new XMLHttpRequest();
            B.debug("Call multipartUpload"), E3.upload && (null === (i2 = (n2 = E3.upload).addEventListener) || void 0 === i2 || i2.call(n2, "progress", function(e5) {
              null == m2 || m2(e5);
            }, false)), E3.addEventListener("abort", function() {
              o3({ type: d.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: E3, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E3.status || -1, errDesc: "Request Abort", url: g2 } });
            }, false), E3.addEventListener("error", function() {
              o3({ type: d.WEBIM_UPLOADFILE_ERROR, data: E3, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E3.status || -1, errDesc: "request error", url: g2 } });
            }, false), E3.addEventListener("load", function() {
              try {
                var e5 = JSON.parse(E3.responseText);
                if (200 !== E3.status)
                  return o3({ type: d.WEBIM_UPLOADFILE_ERROR, data: e5, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E3.status || -1, errDesc: "part upload failed", url: g2 } }), false;
                try {
                  r2(Y(Y({}, e5), { extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E3.status || -1, url: g2 } }));
                } catch (e6) {
                  o3({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: e6, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E3.status || -1, errDesc: "part upload failed", url: g2 } });
                }
              } catch (e6) {
                o3({ type: d.WEBIM_UPLOADFILE_ERROR, data: E3.responseText, extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E3.status || -1, errDesc: "part upload failed", url: g2 } });
              }
            }, false), E3.addEventListener("timeout", function() {
              o3({ type: d.REQUEST_TIMEOUT, message: "request timeout", extraInfo: { elapse: (/* @__PURE__ */ new Date()).getTime() - a2, httpCode: E3.status || -1, errDesc: "request timeout", url: g2 } });
            }, false);
            var y2 = new FormData();
            y2.append("part_file", f3), y2.append("part_number", h2), E3.timeout = q, E3.open("PUT", g2), E3.setRequestHeader("restrict-access", "true"), E3.setRequestHeader("Accept", "*/*"), E3.setRequestHeader("Authorization", "Bearer " + l2), E3.send(y2);
          });
        }
        function $2(e4) {
          var t4 = e4.uuid, r2 = e4.thumbnailHeight, o3 = e4.thumbnailWidth, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/sdk/chatfiles/part-upload/").concat(t4, "?restrict-access=true");
          o3 && (c2 += "&thumbnail-width=".concat(o3)), r2 && (c2 += "&thumbnail-height=".concat(r2));
          var u2 = { url: c2, dataType: "json", type: "POST", headers: { Authorization: "Bearer " + s2 } };
          return B.debug("Call multipartComplete"), se.call(this, u2, E2.SDK_INTERNAL);
        }
        function ee(e4) {
          var t4 = e4.uuid, r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/sdk/chatfiles/part-upload/").concat(t4), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + i2 } };
          return B.debug("Call multipartAbort"), se.call(this, a2, E2.SDK_INTERNAL);
        }
        var te = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, re = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        }, oe = function() {
          function e4(e5, t4) {
            var r2 = this;
            this.handleUploadProgress = function(e6, t5) {
              var o3, n2;
              if (e6.total) {
                r2.progressArr[t5] = e6.loaded;
                var i2 = r2.progressArr.reduce(function(e7, t6) {
                  return e7 + t6;
                }, 0);
                null === (n2 = (o3 = r2.options).onFileUploadProgress) || void 0 === n2 || n2.call(o3, { isTrusted: e6.isTrusted, type: e6.type, loaded: i2 > r2.file.size ? r2.file.size : i2, total: r2.file.size, lengthComputable: e6.lengthComputable });
              }
            }, this.uuid = "", this.pool = [], this.progressArr = [], this.connection = e5, this.options = t4, this.partSize = H, this.file = t4.file, this.init(), this.rpt = this.connection.dataReport.geOperateFun({ operationName: E2.REST_UPLOAD_FILE_IN_PARTS });
          }
          return e4.prototype.init = function() {
            var e5, t4, r2, o3;
            return te(this, void 0, void 0, function() {
              var n2, i2, a2, s2, c2, u2, l2, p3, h2, f3, m2, g2, E3, v2, T2;
              return re(this, function(_2) {
                switch (_2.label) {
                  case 0:
                    return _2.trys.push([0, 4, , 6]), [4, Q.call(this.connection)];
                  case 1:
                    return n2 = _2.sent(), i2 = n2.data || {}, a2 = i2.fileMaxSize, s2 = void 0 === a2 ? 0 : a2, c2 = i2.partMinSize, u2 = void 0 === c2 ? H : c2, l2 = i2.uuid, p3 = void 0 === l2 ? "" : l2, h2 = n2.extraInfo, g2 = h2.elapse, E3 = h2.httpCode, T2 = h2.url, this.partSize = u2, this.uuid = p3, F.size = u2, B.debug("multipartInit success", "uuid: ".concat(p3), "fileMaxSize: ".concat(s2), "partMinSize: ".concat(u2)), this.file.size > s2 ? [4, this.multipartAbort()] : [3, 3];
                  case 2:
                    return _2.sent(), null === (t4 = (e5 = this.options).onFileUploadError) || void 0 === t4 || t4.call(e5, { code: d.WEBIM_UPLOADFILE_ERROR, message: "The file size exceeds the maximum limit" }), [2];
                  case 3:
                    return this.rpt({ data: { requestUrl: T2, requestName: y.REST_INIT_UPLOAD_TASK_IN_PARTS, requestElapse: g2, requestMethod: "POST", isSuccess: 1, code: E3 } }), this.upload(), [3, 6];
                  case 4:
                    return f3 = _2.sent(), m2 = (null == f3 ? void 0 : f3.extraInfo) || {}, g2 = m2.elapse, E3 = m2.httpCode, v2 = m2.errDesc, T2 = m2.url, this.rpt({ data: { requestUrl: T2, requestName: y.REST_INIT_UPLOAD_TASK_IN_PARTS, requestElapse: g2, requestMethod: "POST", isSuccess: 0, codeDesc: v2, code: E3 } }), [4, this.multipartAbort()];
                  case 5:
                    return _2.sent(), null === (o3 = null === (r2 = this.options) || void 0 === r2 ? void 0 : r2.onInitFail) || void 0 === o3 || o3.call(r2), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }, e4.prototype.upload = function() {
            var e5, t4, r2;
            return te(this, void 0, void 0, function() {
              var o3, n2, i2, a2, s2, c2, u2 = this;
              return re(this, function(l2) {
                switch (l2.label) {
                  case 0:
                    new FileReader().readAsArrayBuffer(this.file), o3 = this.file.size, n2 = Math.ceil(o3 / this.partSize), l2.label = 1;
                  case 1:
                    l2.trys.push([1, 7, , 9]), i2 = function(t5) {
                      var r3, n3, i3, s3;
                      return re(this, function(c3) {
                        switch (c3.label) {
                          case 0:
                            return r3 = t5 * a2.partSize, n3 = Math.min(o3, r3 + a2.partSize), i3 = null === (e5 = a2.file) || void 0 === e5 ? void 0 : e5.slice(r3, n3), (s3 = Z.call(a2.connection, { uuid: a2.uuid, partNumber: "".concat(t5 + 1), part: i3, onProgress: function(e6) {
                              u2.handleUploadProgress(e6, t5);
                            } })).then(function(e6) {
                              var t6 = (null == e6 ? void 0 : e6.extraInfo) || {}, r4 = t6.elapse, o4 = t6.httpCode, n4 = t6.url;
                              u2.rpt({ data: { requestUrl: n4, requestName: y.REST_UPLOAD_PART, requestElapse: r4, isSuccess: 1, requestMethod: "PUT", code: o4 } }), u2.handleTask(s3);
                            }), s3.catch(function(e6) {
                              var t6 = (null == e6 ? void 0 : e6.extraInfo) || {}, r4 = t6.elapse, o4 = t6.httpCode, n4 = t6.url, i4 = t6.errDesc;
                              u2.rpt({ data: { requestUrl: n4, requestName: y.REST_UPLOAD_PART, requestElapse: r4, isSuccess: 0, requestMethod: "PUT", code: o4, codeDesc: i4 } }), delete e6.extraInfo;
                            }), a2.pool.push(s3), 4 !== a2.pool.length ? [3, 2] : [4, Promise.race(a2.pool)];
                          case 1:
                            c3.sent(), c3.label = 2;
                          case 2:
                            return [2];
                        }
                      });
                    }, a2 = this, s2 = 0, l2.label = 2;
                  case 2:
                    return s2 < n2 ? [5, i2(s2)] : [3, 5];
                  case 3:
                    l2.sent(), l2.label = 4;
                  case 4:
                    return s2++, [3, 2];
                  case 5:
                    return [4, Promise.all(this.pool)];
                  case 6:
                    return l2.sent(), this.multipartComplete(), [3, 9];
                  case 7:
                    return c2 = l2.sent(), [4, this.multipartAbort()];
                  case 8:
                    return l2.sent(), this.rpt({ data: { isLastApi: 1, isSuccess: 0 } }), null === (r2 = (t4 = this.options).onFileUploadError) || void 0 === r2 || r2.call(t4, c2), [3, 9];
                  case 9:
                    return [2];
                }
              });
            });
          }, e4.prototype.multipartComplete = function() {
            var e5, t4, r2, o3;
            return te(this, void 0, void 0, function() {
              var n2, i2, a2, s2, c2, u2, l2, d2, p3, h2, f3;
              return re(this, function(m2) {
                switch (m2.label) {
                  case 0:
                    return m2.trys.push([0, 2, , 3]), n2 = this.options.thumbnailInfo || {}, i2 = n2.width, a2 = n2.height, [4, $2.call(this.connection, { uuid: this.uuid, thumbnailHeight: a2, thumbnailWidth: i2 })];
                  case 1:
                    return s2 = m2.sent(), c2 = (null == s2 ? void 0 : s2.extraInfo) || {}, d2 = c2.elapse, p3 = c2.httpCode, f3 = c2.url, this.rpt({ data: { requestUrl: f3, requestName: y.REST_COMPLETE_UPLOAD_PART, requestElapse: d2, requestMethod: "POST", isSuccess: 1, code: p3 } }), this.rpt({ data: { isLastApi: 1, isSuccess: 1 } }), null === (t4 = (e5 = this.options).onFileUploadComplete) || void 0 === t4 || t4.call(e5, s2), [3, 3];
                  case 2:
                    return u2 = m2.sent(), l2 = (null == u2 ? void 0 : u2.extraInfo) || {}, d2 = l2.elapse, p3 = l2.httpCode, h2 = l2.errDesc, f3 = l2.url, this.rpt({ data: { requestUrl: f3, requestName: y.REST_COMPLETE_UPLOAD_PART, requestElapse: d2, requestMethod: "POST", isSuccess: 0, codeDesc: h2, code: p3 } }), this.rpt({ data: { isLastApi: 1, isSuccess: 0 } }), null === (o3 = (r2 = this.options).onFileUploadError) || void 0 === o3 || o3.call(r2, u2), [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          }, e4.prototype.multipartAbort = function() {
            return te(this, void 0, void 0, function() {
              var e5, t4, r2, o3, n2, i2, a2, s2;
              return re(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if (!this.uuid)
                      return [2];
                    c2.label = 1;
                  case 1:
                    return c2.trys.push([1, 3, , 4]), [4, ee.call(this.connection, { uuid: this.uuid })];
                  case 2:
                    return e5 = c2.sent(), t4 = (null == e5 ? void 0 : e5.extraInfo) || {}, n2 = t4.elapse, i2 = t4.httpCode, s2 = t4.url, this.rpt({ data: { requestUrl: s2, requestName: y.REST_ABORT_UPLOAD_PART, requestElapse: n2, requestMethod: "DELETE", isSuccess: 1, code: i2 } }), [3, 4];
                  case 3:
                    return r2 = c2.sent(), o3 = (null == r2 ? void 0 : r2.extraInfo) || {}, n2 = o3.elapse, i2 = o3.httpCode, a2 = o3.errDesc, s2 = o3.url, this.rpt({ data: { requestUrl: s2, requestName: y.REST_ABORT_UPLOAD_PART, requestElapse: n2, requestMethod: "DELETE", isSuccess: 0, codeDesc: a2, code: i2 } }), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }, e4.prototype.handleTask = function(e5) {
            var t4 = this.pool.findIndex(function(t5) {
              return t5 === e5;
            });
            this.pool.splice(t4, 1);
          }, e4;
        }(), ne = function(e4) {
          var t4, r2, o3 = this, n2 = (/* @__PURE__ */ new Date()).getTime(), i2 = e4.apiUrl, a2 = e4.orgName, s2 = e4.appName, c2 = e4.operateName, u2 = e4.accessToken, l2 = e4.uploadUrl || "".concat(i2, "/").concat(a2, "/").concat(s2, "/chatfiles"), p3 = function(t5) {
            var r3 = (/* @__PURE__ */ new Date()).getTime() - n2;
            o3.dataReport && c2 && [E2.UPLOAD_MSG_ATTACH, E2.UPLOAD_CHATROOM_FILE, E2.UPLOAD_GROUP_FILE].includes(c2) && o3.dataReport.geOperateFun({ operationName: c2 })({ isEndApi: true, data: { isSuccess: 0, requestMethod: "POST", requestName: c2, requestElapse: r3, requestUrl: l2, code: (null == f3 ? void 0 : f3.status) || 0, codeDesc: "upload file error" } }), e4.onFileUploadError && e4.onFileUploadError(t5);
          };
          function h2(e5) {
            p3({ type: d.WEBIM_UPLOADFILE_ERROR, data: f3 });
          }
          var f3 = new XMLHttpRequest();
          f3.upload && (null === (r2 = (t4 = f3.upload).addEventListener) || void 0 === r2 || r2.call(t4, "progress", e4.onFileUploadProgress || ae, false)), f3.addEventListener("abort", e4.onFileUploadCanceled || ae, false), f3.addEventListener("error", h2, false), f3.addEventListener("load", function(t5) {
            try {
              var r3 = JSON.parse(f3.responseText);
              if (400 === f3.status)
                return p3({ type: d.WEBIM_UPLOADFILE_ERROR, data: r3 }), false;
              try {
                !function(t6) {
                  var r4 = (/* @__PURE__ */ new Date()).getTime() - n2;
                  o3.dataReport && c2 && [E2.UPLOAD_MSG_ATTACH, E2.UPLOAD_CHATROOM_FILE, E2.UPLOAD_GROUP_FILE].includes(c2) && o3.dataReport.geOperateFun({ operationName: c2 })({ isEndApi: true, data: { isSuccess: (null == t6 ? void 0 : t6.error) ? 0 : 1, requestMethod: "POST", requestName: c2, requestElapse: r4, requestUrl: l2, code: f3.status, codeDesc: (null == t6 ? void 0 : t6.error_description) || "" } }), e4.onFileUploadComplete && e4.onFileUploadComplete(t6);
                }(r3);
              } catch (t6) {
                p3({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, data: t6 });
              }
            } catch (t6) {
              p3({ type: d.WEBIM_UPLOADFILE_ERROR, data: f3.responseText });
            }
          }, false), f3.addEventListener("timeout", h2, false), f3.timeout = q, f3.open("POST", l2), f3.setRequestHeader("restrict-access", "true"), f3.setRequestHeader("Accept", "*/*"), f3.setRequestHeader("Authorization", "Bearer " + u2);
          var m2 = new FormData();
          m2.append("file", e4.file.data), e4.thumbnailWidth && m2.append("thumbnail-width", e4.thumbnailWidth + ""), e4.thumbnailHeight && m2.append("thumbnail-height", e4.thumbnailHeight + ""), f3.send(m2);
        }, ie = function() {
          return ie = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, ie.apply(this, arguments);
        }, ae = function() {
        };
        function se(e4, t4) {
          var r2, o3 = this;
          return fe().platform === de.WEB ? new Promise(function(t5, o4) {
            var n2 = e4.dataType || "text", i2 = e4.success || ae, a2 = e4.error || ae, s2 = new XMLHttpRequest();
            s2.timeout = K;
            var c2 = false;
            s2.ontimeout = function() {
              B.warn("request timeout"), c2 = true;
              var e5 = { type: d.REQUEST_TIMEOUT, message: "Request Timeout", errorType: "timeout_error", xhr: s2 };
              a2(e5), o4(e5);
            }, s2.onerror = function() {
              o4({ type: d.REQUEST_UNKNOWN, message: "Request Unknow Error", errorType: "onerror", xhr: s2 });
            }, s2.onabort = function() {
              o4({ type: d.REQUEST_ABORT, message: "Request Abort", errorType: "onabort", xhr: s2 });
            }, s2.onreadystatechange = function() {
              if (4 === s2.readyState) {
                var e5 = (/* @__PURE__ */ new Date()).getTime() - r2, u3 = s2.status || 0, l3 = { elapse: e5, httpCode: u3 };
                if (200 === u3) {
                  _e.ajaxUnconventionalErrorTimes = 0;
                  try {
                    switch (n2) {
                      case "text":
                        return i2(s2.responseText), void t5(s2.responseText);
                      case "json":
                        var p4 = JSON.parse(s2.responseText);
                        return p4.extraInfo = l3, i2(p4), void t5(p4);
                      case "xml":
                        return s2.responseXML && s2.responseXML.documentElement ? (i2(s2.responseXML.documentElement), void t5(s2.responseXML.documentElement)) : (a2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }), void o4({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "XHR.responseXML is null or XHR.responseXML.documentElement is null" }));
                      default:
                        a2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "Invalid dataType" }), o4({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "Invalid dataType" });
                    }
                    return t5(s2.response || s2.responseText), void i2(s2.response || s2.responseText, s2);
                  } catch (e6) {
                    o4(e6);
                  }
                  return;
                }
                0 === u3 ? setTimeout(function() {
                  B.debug("request timeout:", c2), !c2 && O(s2, o4, a2, e5);
                }, 0) : ([400, 401, 403, 404, 429, 500, 503].includes(u3) || (B.debug("rest api request fail status:", u3), _e.ajaxUnconventionalErrorTimes++), O(s2, o4, a2, e5));
              }
              0 === s2.readyState && (a2({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "Request not initialized" }), o4({ type: d.WEBIM_CONNCTION_AJAX_ERROR, data: s2.responseText, message: "Request not initialized" }));
            }, e4.responseType && s2.responseType && (s2.responseType = e4.responseType), e4.mimeType && s2.overrideMimeType(e4.mimeType);
            var u2 = e4.type || "POST", l2 = e4.data || null, p3 = "";
            if ("get" === u2.toLowerCase() && l2) {
              for (var h2 in l2)
                l2.hasOwnProperty(h2) && (p3 += h2 + "=" + l2[h2] + "&");
              p3 = p3 ? p3.slice(0, -1) : p3, e4.url += (e4.url.indexOf("?") > 0 ? "&" : "?") + (p3 ? p3 + "&" : p3) + "_v=" + (/* @__PURE__ */ new Date()).getTime(), l2 = null, p3 = "";
            }
            r2 = (/* @__PURE__ */ new Date()).getTime(), s2.open(u2, e4.url);
            var f3 = e4.headers || {};
            for (var m2 in f3["Content-Type"] || (f3["Content-Type"] = "application/json"), f3)
              f3.hasOwnProperty(m2) && s2.setRequestHeader(m2, f3[m2]);
            s2.send(l2);
          }).then(function(r3) {
            return o3.dataReport && t4 && t4 !== E2.SDK_INTERNAL && o3.dataReport.geOperateFun({ operationName: t4 })({ isEndApi: true, data: ie({ isSuccess: 1, requestUrl: e4.url, requestName: t4, requestMethod: e4.type }, ye(r3.extraInfo)) }), t4 === E2.SDK_INTERNAL && (r3.extraInfo.url = e4.url), t4 !== E2.SDK_INTERNAL && delete r3.extraInfo, "Object" === ce(r3) ? ie(ie({}, r3), { type: d.REQUEST_SUCCESS }) : { data: r3, type: d.REQUEST_SUCCESS };
          }).catch(function(n2) {
            var i2, a2;
            if (o3.dataReport && t4 && t4 !== E2.SDK_INTERNAL && o3.dataReport.geOperateFun({ operationName: t4 })({ isEndApi: true, data: ie({ isSuccess: 0, requestUrl: e4.url, requestName: t4, requestMethod: e4.type }, ye(n2.extraInfo)) }), t4 === E2.SDK_INTERNAL)
              if (n2.extraInfo)
                n2.extraInfo.url = e4.url;
              else {
                var s2 = { elapse: (/* @__PURE__ */ new Date()).getTime() - r2, httpCode: null !== (a2 = null === (i2 = n2.xhr) || void 0 === i2 ? void 0 : i2.status) && void 0 !== a2 ? a2 : 0, url: e4.url };
                n2.extraInfo = s2;
              }
            throw t4 !== E2.SDK_INTERNAL && delete n2.extraInfo, n2;
          }) : ue.call(this, e4, t4);
        }
        function ce(e4) {
          return Object.prototype.toString.call(e4).slice(8, -1);
        }
        function ue(e4, t4) {
          var r2 = this;
          return new Promise(function(r3, o3) {
            var n2 = e4.success || ae, i2 = e4.error || ae, a2 = e4.type || "POST", s2 = e4.data || null, c2 = "", u2 = (/* @__PURE__ */ new Date()).getTime(), l2 = _e.getEnvInfo();
            if ("get" === a2.toLowerCase() && s2) {
              for (var p3 in s2)
                s2.hasOwnProperty(p3) && (c2 += p3 + "=" + s2[p3] + "&");
              c2 = c2 ? c2.slice(0, -1) : c2, e4.url += (e4.url.indexOf("?") > 0 ? "&" : "?") + (c2 ? c2 + "&" : c2) + "_v=" + (/* @__PURE__ */ new Date()).getTime(), s2 = null, c2 = "";
            }
            var h2 = { url: e4.url, data: e4.data, method: a2, headers: {}, timeout: K, success: function(e5) {
              var a3, s3, c3, l3, d2, p4 = { elapse: (/* @__PURE__ */ new Date()).getTime() - u2, httpCode: Number((null === (a3 = e5.statusCode) || void 0 === a3 ? void 0 : a3.toString()) || (null === (s3 = e5.status) || void 0 === s3 ? void 0 : s3.toString())), errDesc: (null === (c3 = null == e5 ? void 0 : e5.data) || void 0 === c3 ? void 0 : c3.error_description) || "" };
              if ("200" === (null === (l3 = e5.statusCode) || void 0 === l3 ? void 0 : l3.toString()) || "200" === (null === (d2 = e5.status) || void 0 === d2 ? void 0 : d2.toString())) {
                e5.data.extraInfo = p4;
                var h3 = e5.data;
                n2(h3), r3(h3);
              } else
                e5.extraInfo = p4, i2(h3 = e5), o3(h3), B.debug(t4, "reject reason: ", h3);
            }, complete: function() {
            }, fail: function(e5) {
              var r4 = { elapse: (/* @__PURE__ */ new Date()).getTime() - u2, httpCode: A, errDesc: "request:fail" };
              if (e5.extraInfo = r4, e5.data = { error: "request:fail", error_description: "request:fail" }, "request:fail timeout" === e5.errMsg)
                return o3({ type: d.REQUEST_TIMEOUT, message: "Request Timeout", extraInfo: r4 }), void i2({ type: d.REQUEST_TIMEOUT, message: "Request Timeout", extraInfo: r4 });
              i2(e5), o3(e5), B.error(t4, "fail reason:", e5);
            } };
            if ("zfb" === l2.platform || "dd" === l2.platform ? h2.headers = e4.headers : h2.header = e4.headers, "dd" === l2.platform)
              return dd.httpRequest(h2);
            l2.global.request(h2);
          }).then(function(o3) {
            return r2.dataReport && t4 && t4 !== E2.SDK_INTERNAL && r2.dataReport.geOperateFun({ operationName: t4 })({ isEndApi: true, data: ie({ isSuccess: 1, requestUrl: e4.url, requestName: t4, requestMethod: e4.type }, ye(o3.extraInfo)) }), t4 !== E2.SDK_INTERNAL && delete o3.extraInfo, "Object" === ce(o3) ? ie(ie({}, o3), { type: d.REQUEST_SUCCESS }) : { data: o3, type: d.REQUEST_SUCCESS };
          }).catch(function(o3) {
            throw r2.dataReport && t4 && t4 !== E2.SDK_INTERNAL && r2.dataReport.geOperateFun({ operationName: t4 })({ isEndApi: true, data: ie({ isSuccess: 0, requestUrl: e4.url, requestName: t4, requestMethod: e4.type }, ye(o3.extraInfo)) }), t4 !== E2.SDK_INTERNAL && delete o3.extraInfo, o3;
          });
        }
        function le(e4, t4) {
          var r2;
          return function() {
            for (var o3 = [], n2 = 0; n2 < arguments.length; n2++)
              o3[n2] = arguments[n2];
            if (!e4)
              return r2;
            r2 = t4 ? e4.apply(t4, o3) : e4.apply(void 0, o3), e4 = null;
          };
        }
        var de, pe = le(function(e4, t4) {
          var r2 = fe();
          if (r2.platform !== de.WEB) {
            var o3 = r2.global, n2 = function(r3) {
              r3.isConnected ? e4() : t4();
            };
            o3.offNetworkStatusChange && o3.offNetworkStatusChange(n2), o3.onNetworkStatusChange && o3.onNetworkStatusChange(n2);
          } else
            "undefined" != typeof addEventListener && (window.addEventListener("online", e4), window.addEventListener("offline", t4));
        }), he = le(function(e4, t4) {
          var r2, o3, n2 = fe();
          if (n2.platform === de.WEB)
            document && document.addEventListener("visibilitychange", function() {
              document.hidden ? null == t4 || t4() : null == e4 || e4();
            }, false);
          else {
            var i2 = n2.global;
            i2.onAppShow && (null === (r2 = i2.onAppShow) || void 0 === r2 || r2.call(i2, e4)), i2.onAppHide && (null === (o3 = i2.onAppHide) || void 0 === o3 || o3.call(i2, t4));
          }
        });
        function fe() {
          return "undefined" != typeof swan && me(swan) ? { platform: de.BAIDU, global: swan } : "undefined" != typeof tt && me(tt) ? { platform: de.TT, global: tt } : "undefined" != typeof dd && me(dd) ? { platform: de.DD, global: dd } : "undefined" != typeof my && me(my) ? { platform: de.ZFB, global: my } : "undefined" != typeof wx$1 && me(wx$1) ? { platform: de.WX, global: wx$1 } : "undefined" != typeof qq && me(qq) ? { platform: de.QQ, global: qq } : "undefined" != typeof index && me(index) ? { platform: de.UNI, global: index } : "undefined" != typeof window && window.WebSocket ? { platform: de.WEB, global: window } : { platform: de.NODE, global: r.g || {} };
        }
        function me(e4) {
          for (var t4 = ["canIUse", "getSystemInfo"], r2 = 0, o3 = t4.length; r2 < o3; r2++)
            if (!e4[t4[r2]])
              return false;
          return true;
        }
        function ge(e4, t4) {
          var r2, o3, n2, i2 = this, a2 = e4.accessToken, s2 = e4.appKey, c2 = null === (o3 = null === (r2 = null == e4 ? void 0 : e4.file) || void 0 === r2 ? void 0 : r2.data) || void 0 === o3 ? void 0 : o3.size, u2 = [], l2 = "", p3 = "";
          if (a2)
            if (s2 && (u2 = s2.split("#"), l2 = u2[0], p3 = u2[1]), l2 || p3)
              if (c2 <= 0)
                e4.onFileUploadError && e4.onFileUploadError({ type: d.WEBIM_UPLOADFILE_ERROR, message: "fileSize must be greater than 0" });
              else if (e4.uploadUrl)
                ne.call(this, ie(ie({}, e4), { orgName: l2, appName: p3, operateName: t4 }));
              else {
                var h2 = F.size || j;
                this.uploadPartEnable && c2 > 1.5 * h2 ? new oe(this, { file: null === (n2 = null == e4 ? void 0 : e4.file) || void 0 === n2 ? void 0 : n2.data, onFileUploadProgress: e4.onFileUploadProgress || ae, onFileUploadComplete: e4.onFileUploadComplete || ae, onFileUploadError: e4.onFileUploadError || ae, onFileUploadCanceled: e4.onFileUploadCanceled || ae, onInitFail: function() {
                  ne.call(i2, ie(ie({}, e4), { orgName: l2, appName: p3, operateName: t4 }));
                }, thumbnailInfo: { width: e4.thumbnailWidth, height: e4.thumbnailHeight } }) : ne.call(this, ie(ie({}, e4), { orgName: l2, appName: p3, operateName: t4 }));
              }
            else
              e4.onFileUploadError && e4.onFileUploadError({ type: d.WEBIM_UPLOADFILE_ERROR, message: "AppKey illegal" });
          else
            e4.onFileUploadError && e4.onFileUploadError({ type: d.WEBIM_UPLOADFILE_NO_LOGIN, message: "AccessToken cannot be empty" });
        }
        function Ee(e4, t4) {
          e4.onFileDownloadComplete = e4.onFileDownloadComplete || ae, e4.onFileDownloadError = e4.onFileDownloadError || ae;
          var r2 = (/* @__PURE__ */ new Date()).getTime(), o3 = new XMLHttpRequest(), n2 = this;
          o3.addEventListener("load", function(i3) {
            var a3 = (/* @__PURE__ */ new Date()).getTime() - r2;
            n2.dataReport && t4 && t4 === E2.DOWN_GROUP_FILE && n2.dataReport.geOperateFun({ operationName: t4 })({ isEndApi: true, data: { isSuccess: 200 === o3.status ? 1 : 0, requestMethod: "POST", requestName: t4, requestElapse: a3, requestUrl: null == e4 ? void 0 : e4.url, code: o3.status, codeDesc: 200 === o3.status ? "" : "download file error" } }), e4.onFileDownloadComplete && e4.onFileDownloadComplete(o3.response);
          }, false), o3.addEventListener("error", function(i3) {
            var a3 = (/* @__PURE__ */ new Date()).getTime() - r2;
            n2.dataReport && t4 && t4 === E2.DOWN_GROUP_FILE && n2.dataReport.geOperateFun({ operationName: t4 })({ isEndApi: true, data: { isSuccess: 0, requestMethod: "POST", requestName: t4, requestElapse: a3, requestUrl: null == e4 ? void 0 : e4.url, code: (null == o3 ? void 0 : o3.status) || 0, codeDesc: "download file error" } }), e4.onFileDownloadError && e4.onFileDownloadError({ type: d.WEBIM_DOWNLOADFILE_ERROR, id: e4.id, xhr: o3 });
          }, false);
          var i2 = e4.method || "GET", a2 = e4.responseType || "blob", s2 = e4.mimeType || "text/plain; charset=x-user-defined";
          o3.open(i2, e4.url), "undefined" != typeof Blob ? o3.responseType = a2 : o3.overrideMimeType(s2);
          var c2 = { "X-Requested-With": "XMLHttpRequest", Accept: "application/octet-stream", "share-secret": e4.secret, Authorization: "Bearer " + this.context.accessToken }, u2 = e4.headers || {};
          for (var l2 in u2)
            c2[l2] = u2[l2];
          for (var l2 in c2)
            c2[l2] && o3.setRequestHeader(l2, c2[l2]);
          o3.send(null);
        }
        function ye(e4) {
          void 0 === e4 && (e4 = {});
          var t4 = e4.elapse, r2 = void 0 === t4 ? 0 : t4, o3 = e4.httpCode, n2 = void 0 === o3 ? 0 : o3, i2 = e4.errDesc;
          return { requestElapse: r2, code: n2, codeDesc: void 0 === i2 ? "" : i2 };
        }
        !function(e4) {
          e4.WEB = "web", e4.WX = "wx", e4.QQ = "qq", e4.ZFB = "zfb", e4.DD = "dd", e4.TT = "tt", e4.BAIDU = "baidu", e4.QUICK_APP = "quick_app", e4.UNI = "uni", e4.NODE = "node";
        }(de || (de = {}));
        var ve, Te = "localDeviceInfo", _e = { autoIncrement: 0, ajaxUnconventionalErrorTimes: 0, ajax: se, getUniqueId: function() {
          this.autoIncrement ? this.autoIncrement++ : this.autoIncrement = 1;
          var e4 = /* @__PURE__ */ new Date(), t4 = new Date(2010, 1, 1);
          return (e4.getTime() - t4.getTime() + this.autoIncrement).toString();
        }, getFileUrl: function(e4) {
          var t4 = { url: "", filename: "", filetype: "", data: {} }, r2 = "string" == typeof e4 ? document.getElementById(e4) : e4;
          if (window.URL.createObjectURL) {
            if (!r2.files)
              throw Error("this is not HTMLInputElement");
            var o3 = r2.files;
            if (o3.length > 0) {
              var n2 = o3.item(0);
              t4.data = n2, t4.url = window.URL.createObjectURL(n2), t4.filename = (null == n2 ? void 0 : n2.name) || "";
            }
          } else {
            if ("string" != typeof e4)
              throw Error("in IE fileInputId must be string");
            n2 = document.getElementById(e4).value, t4.url = n2;
            var i2 = n2.lastIndexOf("/"), a2 = n2.lastIndexOf("\\"), s2 = Math.max(i2, a2);
            t4.filename = s2 < 0 ? n2 : n2.substring(s2 + 1);
          }
          var c2 = t4.filename.lastIndexOf(".");
          return -1 !== c2 && (t4.filetype = t4.filename.substring(c2 + 1).toLowerCase()), t4;
        }, uploadFile: ge, flow: function(e4) {
          for (var t4 = e4.length, r2 = t4; r2--; )
            if ("function" != typeof e4[r2])
              throw new TypeError("Expected a function");
          return function() {
            for (var r3 = [], o3 = 0; o3 < arguments.length; o3++)
              r3[o3] = arguments[o3];
            for (var n2 = 0, i2 = t4 ? e4[n2].apply(this, r3) : r3[0]; ++n2 < t4; )
              i2 = e4[n2].call(this, i2);
            return i2;
          };
        }, listenNetwork: pe, listenBrowserVisibility: he, getEnvInfo: fe, wxRequest: ue, parseDownloadResponse: function(e4) {
          if (!window || !window.URL)
            throw Error("parseDownloadResponse can be used in broswer only");
          return e4 && e4.type && "application/json" === e4.type || 0 > Object.prototype.toString.call(e4).indexOf("Blob") ? this.url + "?token=" : window.URL.createObjectURL(e4);
        }, download: Ee, parseNotify: function(e4) {
          for (var t4 = "", r2 = 0; r2 < e4.length; r2++)
            t4 += "%" + e4[r2].toString(16);
          return JSON.parse(decodeURIComponent(t4));
        }, getExtraData: ye, retryPromise: function(e4, t4, r2) {
          return new Promise(function(o3, n2) {
            var i2 = function(t5) {
              e4().then(o3).catch(function(e5) {
                t5 > 0 ? setTimeout(function() {
                  i2(t5 - 1);
                }, r2 || 1e3) : n2(e5);
              });
            };
            i2(t4 || 3);
          });
        }, formatAttachUrl: function(e4) {
          return e4 && "string" == typeof e4 ? "".concat(this.apiUrl).concat(e4.substr(e4.indexOf("/", 9))) : "";
        }, Uint8ArrayToString: function(e4) {
          for (var t4 = "", r2 = 0; r2 < e4.length; r2++)
            t4 += String.fromCharCode(e4[r2]);
          return t4;
        }, getLocalDeviceInfo: function() {
          return function(e4) {
            var t4, r2 = _e.getEnvInfo(), o3 = r2.platform, n2 = "";
            o3 !== de.NODE && o3 !== de.QUICK_APP || (n2 = "");
            try {
              o3 === de.WEB ? n2 = localStorage.getItem(e4) || "" : o3 === de.WX || o3 === de.QQ || o3 === de.TT || o3 === de.BAIDU || o3 === de.UNI ? n2 = r2.global.getStorageSync(e4) || "" : o3 !== de.ZFB && o3 !== de.DD || (n2 = (null === (t4 = r2.global.getStorageSync({ key: e4 })) || void 0 === t4 ? void 0 : t4.data) || "");
            } catch (t5) {
              B.debug("get local ".concat(e4, " failed: "), t5);
            }
            return B.debug("".concat(e4, " "), n2), n2;
          }(Te);
        }, setLocalDeviceInfo: function(e4) {
          var t4, r2, o3, n2;
          t4 = Te, r2 = e4, (n2 = (o3 = _e.getEnvInfo()).platform) !== de.NODE && n2 !== de.QUICK_APP && (n2 === de.WEB ? localStorage.setItem(t4, r2) : o3.global.setStorage({ key: t4, data: r2, success: function(e5) {
            B.debug("set local ".concat(t4, " success: "), e5);
          }, fail: function(e5) {
            B.error("set local ".concat(t4, " failed: "), e5);
          } }));
        }, detectBrowser: function() {
          if ("undefined" == typeof navigator)
            return "unknown";
          var e4 = navigator.userAgent;
          return /MicroMessenger/i.test(e4) ? "WeChat" : /QQBrowser/i.test(e4) ? "QQ" : !/Chrome/i.test(e4) || /Edg/i.test(e4) || /OPR/i.test(e4) ? !/Safari/i.test(e4) || /Chrome/i.test(e4) || /CriOS/i.test(e4) ? /Firefox/i.test(e4) ? "Firefox" : /MSIE/i.test(e4) || /Trident/i.test(e4) ? "IE" : /Edg/i.test(e4) ? "Edge" : "unknown" : "Safari" : "Chrome";
        }, getDevicePlatform: function(e4) {
          return e4.platform === de.WX && "undefined" != typeof index && me(index) ? de.UNI : e4.platform;
        }, delay: function(e4) {
          return new Promise(function(t4) {
            return setTimeout(t4, e4);
          });
        } };
        !function(e4) {
          e4[e4.SYNC_INIT = 0] = "SYNC_INIT", e4[e4.SYNC_START = 1] = "SYNC_START", e4[e4.SYNC_FINISH = 2] = "SYNC_FINISH";
        }(ve || (ve = {}));
        var Re = r(188), Oe = r.n(Re), Ie = function() {
          return Ie = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, Ie.apply(this, arguments);
        }, Se = { chat: "singleChat", chatroom: "chatRoom", groupchat: "groupChat", singleChat: "singleChat", chatRoom: "chatRoom", groupChat: "groupChat" };
        function Ce(e4, t4) {
          var r2, o3, n2, i2 = t4 || {}, a2 = i2.formatCustomExts, s2 = void 0 === a2 || a2, c2 = i2.formatChatType, u2 = void 0 !== c2 && c2, l2 = e4.id, d2 = e4.payload, p3 = e4.timestamp, h2 = e4.to, f3 = d2.bodies && d2.bodies.length > 0 ? d2.bodies[0] : {}, m2 = {}, g2 = {}, E3 = d2.type ? d2.type : h2.indexOf("@conference.easemob.com") > -1 ? "groupChat" : "singleChat";
          E3 = "chat" === E3 ? "singleChat" : E3, u2 && d2.type && (E3 = Se[d2.type]);
          var y2 = "";
          switch (f3.type) {
            case "txt":
              if (Object.prototype.hasOwnProperty.call(f3, "subType") && "sub_combine" === f3.subType)
                y2 = Xe.call(this, { remotePath: null == f3 ? void 0 : f3.url, secret: null == f3 ? void 0 : f3.secret }), m2 = { id: l2, type: "combine", chatType: E3, to: d2.to, from: d2.from, ext: d2.ext, time: p3, title: f3.title || "", summary: f3.summary || "", url: y2 || "", secret: f3.secret || "", file_length: f3.file_length || 0, filename: f3.filename || "", compatibleText: f3.msg, combineLevel: f3.combineLevel || 0 };
              else {
                var v2 = null === (r2 = null == d2 ? void 0 : d2.meta) || void 0 === r2 ? void 0 : r2.edit_msg;
                if (m2 = { id: l2, type: "txt", chatType: E3, msg: f3.msg || "", to: d2.to || "", from: d2.from, time: p3, ext: d2.ext }, v2) {
                  var T2 = v2.edit_time, _2 = v2.operator, R2 = v2.count;
                  m2.modifiedInfo = { operationTime: T2, operatorId: _2, operationCount: R2 };
                }
              }
              break;
            case "img":
              y2 = this.useOwnUploadFun ? null == f3 ? void 0 : f3.url : Xe.call(this, { remotePath: null == f3 ? void 0 : f3.url, secret: null == f3 ? void 0 : f3.secret }), m2 = { id: l2, type: "img", chatType: E3, to: d2.to, from: d2.from, time: p3, ext: d2.ext, width: (null === (o3 = f3.size) || void 0 === o3 ? void 0 : o3.width) || 0, height: (null === (n2 = f3.size) || void 0 === n2 ? void 0 : n2.height) || 0, thumb: this.useOwnUploadFun ? "" : "".concat(y2, "&thumbnail=true"), thumb_secret: f3.secret, secret: f3.secret || "", url: y2 || "", file_length: f3.file_length || 0, file: {} };
              break;
            case "video":
              y2 = this.useOwnUploadFun ? null == f3 ? void 0 : f3.url : Xe.call(this, { remotePath: null == f3 ? void 0 : f3.url, secret: null == f3 ? void 0 : f3.secret }), m2 = { id: l2, type: "video", chatType: E3, from: d2.from, to: d2.to, thumb: _e.formatAttachUrl.call(this, f3.thumb), thumb_secret: f3.thumb_secret || "", url: y2 || "", secret: f3.secret || "", filename: f3.filename, length: f3.length || 0, file: {}, file_length: f3.file_length || 0, filetype: d2.ext.file_type || "", ext: d2.ext, time: p3 };
              break;
            case "loc":
              m2 = { id: l2, type: "loc", chatType: E3, from: d2.from, to: d2.to, buildingName: f3.buildingName || "", addr: f3.addr, lat: f3.lat, lng: f3.lng, ext: d2.ext, time: p3 };
              break;
            case "audio":
              y2 = this.useOwnUploadFun ? null == f3 ? void 0 : f3.url : Xe.call(this, { remotePath: null == f3 ? void 0 : f3.url, secret: null == f3 ? void 0 : f3.secret }), m2 = { id: l2, type: "audio", chatType: E3, from: d2.from, to: d2.to, secret: f3.secret || "", ext: d2.ext, time: p3, url: y2 || "", file: {}, filename: f3.filename, length: f3.length || 0, file_length: f3.file_length || 0, filetype: d2.ext.file_type || "" };
              break;
            case "file":
              y2 = this.useOwnUploadFun ? null == f3 ? void 0 : f3.url : Xe.call(this, { remotePath: null == f3 ? void 0 : f3.url, secret: null == f3 ? void 0 : f3.secret }), m2 = { id: l2, type: "file", chatType: E3, from: d2.from, to: d2.to, ext: d2.ext, time: p3, url: y2 || "", secret: f3.secret || "", file: {}, filename: f3.filename || "", file_length: f3.file_length || 0, filetype: d2.ext.file_type || "" };
              break;
            case "cmd":
              m2 = { id: l2, type: "cmd", chatType: E3, from: d2.from, to: d2.to, ext: d2.ext, time: p3, action: f3.action || "" };
              break;
            case "custom":
              var O2 = f3.customExts || {};
              s2 && f3.customExts && (O2 = {}, f3.customExts.map(function(e5) {
                O2 = Ie(Ie({}, O2), e5);
              })), m2 = { id: l2, type: "custom", chatType: E3, from: d2.from, to: d2.to, ext: d2.ext, time: p3, customEvent: f3.customEvent || "", customExts: O2 };
              break;
            case "combine":
              y2 = Xe.call(this, { remotePath: null == f3 ? void 0 : f3.url, secret: null == f3 ? void 0 : f3.secret }), m2 = { id: l2, type: "combine", chatType: E3, msg: f3.msg || "", to: d2.to || "", from: d2.from, time: p3, ext: d2.ext, title: f3.title || "", summary: f3.summary || "", url: y2 || "", compatibleText: f3.text, combineLevel: f3.combineLevel || 0, secret: f3.secret || "", filename: f3.filename || "", file_length: f3.file_length || 0 };
              break;
            default:
              B.error("unexpected message: ".concat(e4));
          }
          if (d2.msgConfig && (g2.msgConfig = d2.msgConfig), null == d2 ? void 0 : d2.meta) {
            var I2 = d2.meta;
            I2.thread && (g2.chatThread = { messageId: I2.thread.msg_parent_id, parentId: I2.thread.muc_parent_id, chatThreadName: I2.thread.thread_name }), I2.reaction && (g2.reactions = I2.reaction), I2.translations && (g2.translations = I2.translations);
          }
          return Ie(Ie({}, m2), g2);
        }
        var Ne, Ae = function(e4) {
          return "".concat(e4.conversationType, "-").concat(e4.conversationId);
        }, Me = function(e4) {
          var t4 = e4.isRecallSelfMsg, r2 = e4.conversation, o3 = e4.recalledMsgTime, n2 = r2.unReadCount, i2 = void 0 === n2 ? 0 : n2, a2 = r2.unreadCountClearTimestamp;
          return t4 || (void 0 === a2 ? 0 : a2) > o3 ? i2 : i2 && i2 > 0 ? i2 - 1 : 0;
        }, be = function(e4) {
          var t4, r2 = 0;
          if (0 === e4.length)
            return r2;
          for (t4 = 0; t4 < e4.length; t4++)
            r2 = (r2 << 5) - r2 + e4.charCodeAt(t4), r2 |= 0;
          return r2;
        }, Ue = function() {
          function e4(e5) {
            var t4 = e5.id;
            this.id = t4, this.type = e5.type;
          }
          return e4.prototype.set = function(e5) {
            this.body = { id: this.id, ackId: e5.id, type: "read", to: e5.to, from: e5.from || "", chatType: e5.chatType };
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), chatType: e5.chatType, ackId: e5.id, type: "read", to: e5.to, from: e5.from || "", ackContent: e5.ackContent, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly };
          }, e4;
        }(), Pe = function() {
          function e4(e5) {
            this.id = e5.id, this.type = e5.type;
          }
          return e4.prototype.set = function(e5) {
            this.body = { id: this.id, ackId: e5.ackId, type: "delivery", to: e5.to, from: e5.from || "" };
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), ackId: e5.ackId, type: "delivery", to: e5.to, from: e5.from || "", isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly };
          }, e4;
        }(), we = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id;
            this.id = r2, this.type = t4;
          }
          return e4.prototype.set = function(e5) {
            this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "channel", to: e5.to, from: e5.from || "", time: Date.now() };
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), type: "channel", chatType: e5.chatType || "singleChat", to: e5.to, from: e5.from || "", time: Date.now(), isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly };
          }, e4;
        }(), ke = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id || _e.getUniqueId();
            this.id = r2, this.type = t4, this.value = "";
          }
          return e4.prototype.set = function(e5) {
            this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "txt", to: e5.to, msg: e5.msg, from: e5.from, roomType: e5.roomType, success: e5.success, fail: e5.fail, ext: e5.ext, time: Date.now(), isChatThread: e5.isChatThread }, this.value = e5.msg;
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            var t4, r2;
            return (null === (t4 = e5.msgConfig) || void 0 === t4 ? void 0 : t4.languages) && Array.isArray(null === (r2 = e5.msgConfig) || void 0 === r2 ? void 0 : r2.languages), { type: "txt", id: _e.getUniqueId(), msg: e5.msg, to: e5.to, from: e5.from || "", chatType: e5.chatType, ext: e5.ext, time: Date.now(), msgConfig: e5.msgConfig, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList };
          }, e4;
        }(), Le = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id;
            this.id = r2 || _e.getUniqueId(), this.type = t4;
          }
          return e4.prototype.set = function(e5) {
            this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "cmd", to: e5.to, action: e5.action, from: e5.from, roomType: e5.roomType, success: e5.success, fail: e5.fail, ext: e5.ext, time: Date.now() };
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), type: "cmd", to: e5.to, from: e5.from || "", chatType: e5.chatType || "singleChat", action: e5.action, time: Date.now(), ext: e5.ext, msgConfig: e5.msgConfig, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList };
          }, e4;
        }(), De = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id || _e.getUniqueId();
            this.id = r2, this.type = t4;
          }
          return e4.prototype.set = function(e5) {
            this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "custom", to: e5.to, customEvent: e5.customEvent, customExts: e5.customExts, from: e5.from, roomType: e5.roomType, success: e5.success, fail: e5.fail, ext: e5.ext, time: Date.now() };
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), chatType: e5.chatType || "singleChat", type: "custom", to: e5.to, customEvent: e5.customEvent, customExts: e5.customExts, from: e5.from || "", ext: e5.ext, time: Date.now(), msgConfig: e5.msgConfig, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList };
          }, e4;
        }(), xe = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id;
            this.id = r2 || _e.getUniqueId(), this.type = t4;
          }
          return e4.prototype.set = function(e5) {
            this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "loc", to: e5.to, addr: e5.addr, buildingName: e5.buildingName, lat: e5.lat, lng: e5.lng, from: e5.from, roomType: e5.roomType, success: e5.success, fail: e5.fail, ext: e5.ext, time: Date.now() };
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), chatType: e5.chatType || "singleChat", type: "loc", to: e5.to, addr: e5.addr, buildingName: e5.buildingName, lat: e5.lat, lng: e5.lng, from: e5.from || "", ext: e5.ext, time: Date.now(), msgConfig: e5.msgConfig, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList };
          }, e4;
        }(), Ge = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id || _e.getUniqueId();
            this.id = r2, this.type = t4;
          }
          return e4.prototype.set = function(e5) {
            e5.file = e5.file || e5.fileInputId && _e.getFileUrl(e5.fileInputId), this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "img", file: e5.file, width: e5.width, height: e5.height, to: e5.to, from: e5.from || "", roomType: e5.roomType, success: e5.success, fail: e5.fail, ext: e5.ext, time: Date.now(), onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete, onFileUploadProgress: e5.onFileUploadProgress, body: e5.body, isChatThread: e5.isChatThread };
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), chatType: e5.chatType, type: "img", url: e5.url, width: e5.width, height: e5.height, file: e5.file, to: e5.to, from: e5.from || "", ext: e5.ext, time: Date.now(), msgConfig: e5.msgConfig, file_length: e5.file_length, onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete, onFileUploadProgress: e5.onFileUploadProgress, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList, thumbnailWidth: e5.thumbnailWidth, thumbnailHeight: e5.thumbnailHeight };
          }, e4;
        }(), Be = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id || _e.getUniqueId();
            this.id = r2, this.type = t4;
          }
          return e4.prototype.set = function(e5) {
            e5.file = e5.file || e5.fileInputId && _e.getFileUrl(e5.fileInputId), this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "audio", file: e5.file, filename: e5.filename, length: e5.length, file_length: e5.file_length, fileInputId: e5.fileInputId, to: e5.to, from: e5.from, roomType: e5.roomType, success: e5.success, fail: e5.fail, ext: e5.ext, time: Date.now(), onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete, onFileUploadProgress: e5.onFileUploadProgress, body: e5.body, isChatThread: e5.isChatThread };
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), chatType: e5.chatType, type: "audio", filename: e5.filename, length: e5.length, file: e5.file, to: e5.to, from: e5.from || "", ext: e5.ext, time: Date.now(), onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete, onFileUploadProgress: e5.onFileUploadProgress, body: e5.body, file_length: e5.file_length, msgConfig: e5.msgConfig, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList };
          }, e4;
        }(), He = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id;
            this.id = r2, this.type = t4;
          }
          return e4.prototype.set = function(e5) {
            e5.file = e5.file || e5.fileInputId && _e.getFileUrl(e5.fileInputId), this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "video", file: e5.file, filename: e5.filename, length: e5.length, file_length: e5.file_length, fileInputId: e5.fileInputId, to: e5.to, from: e5.from, roomType: e5.roomType, success: e5.success, fail: e5.fail, ext: e5.ext, time: Date.now(), apiUrl: e5.apiUrl, onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete, onFileUploadProgress: e5.onFileUploadProgress, body: e5.body, isChatThread: e5.isChatThread };
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), chatType: e5.chatType || "singleChat", type: "video", file: e5.file, filename: e5.filename, length: e5.length, file_length: e5.file_length, fileInputId: e5.fileInputId, to: e5.to, from: e5.from || "", ext: e5.ext, time: Date.now(), onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete, onFileUploadProgress: e5.onFileUploadProgress, body: e5.body, msgConfig: e5.msgConfig, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList };
          }, e4;
        }(), je = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id;
            this.id = r2, this.type = t4;
          }
          return e4.prototype.set = function(e5) {
            e5.file = e5.file || e5.fileInputId && _e.getFileUrl(e5.fileInputId), this.body = { id: this.id, chatType: e5.chatType || "singleChat", type: "file", file: e5.file, filename: e5.filename, fileInputId: e5.fileInputId, to: e5.to, from: e5.from, roomType: e5.roomType, success: e5.success, fail: e5.fail, ext: e5.ext, time: Date.now(), onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete, onFileUploadProgress: e5.onFileUploadProgress, body: e5.body, isChatThread: e5.isChatThread };
          }, e4.prototype.setChatType = function(e5) {
            return !!this.body && (this.body.chatType = e5, true);
          }, e4.prototype.setGroup = function(e5) {
            return !!this.body && (this.body.group = e5, true);
          }, e4.create = function(e5) {
            return { id: _e.getUniqueId(), chatType: e5.chatType || "singleChat", type: "file", file: e5.file, filename: e5.filename, fileInputId: e5.fileInputId, file_length: e5.file_length, to: e5.to, from: e5.from || "", ext: e5.ext, onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete, onFileUploadProgress: e5.onFileUploadProgress, body: e5.body, time: Date.now(), msgConfig: e5.msgConfig, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList };
          }, e4;
        }(), Fe = function() {
          function e4(e5) {
            var t4 = e5.type, r2 = e5.id || _e.getUniqueId();
            this.id = r2, this.type = t4, this.value = "";
          }
          return e4.create = function(e5) {
            return { type: "combine", id: _e.getUniqueId(), to: e5.to, from: e5.from || "", chatType: e5.chatType, ext: e5.ext, time: Date.now(), msgConfig: e5.msgConfig, isChatThread: e5.isChatThread, priority: e5.priority, deliverOnlineOnly: e5.deliverOnlineOnly, receiverList: e5.receiverList, compatibleText: e5.compatibleText, title: e5.title, summary: e5.summary, messageList: e5.messageList, onFileUploadError: e5.onFileUploadError, onFileUploadComplete: e5.onFileUploadComplete };
          }, e4;
        }(), We = function() {
          function e4(t4, r2) {
            return this.type = t4, this.id = r2 || _e.getUniqueId(), e4.createOldMsg({ type: t4, id: this.id });
          }
          return e4.createOldMsg = function(e5) {
            switch (e5.type) {
              case "read":
                return new Ue({ type: "read", id: e5.id });
              case "delivery":
                return new Pe({ type: "delivery", id: e5.id });
              case "channel":
                return new we({ type: "channel", id: e5.id });
              case "txt":
                return new ke({ type: "txt", id: e5.id });
              case "cmd":
                return new Le({ type: "cmd", id: e5.id });
              case "custom":
                return new De({ type: "custom", id: e5.id });
              case "loc":
                return new xe({ type: "loc", id: e5.id });
              case "img":
                return new Ge({ type: "img", id: e5.id });
              case "audio":
                return new Be({ type: "audio", id: e5.id });
              case "video":
                return new He({ type: "video", id: e5.id });
              case "file":
                return new je({ type: "file", id: e5.id });
            }
          }, e4.create = function(e5) {
            return "txt" !== (t4 = e5).type || "version" in t4 ? function(e6) {
              return "img" === e6.type && !("version" in e6);
            }(e5) ? Ge.create(e5) : function(e6) {
              return "cmd" === e6.type && !("version" in e6);
            }(e5) ? Le.create(e5) : function(e6) {
              return "file" === e6.type && !("version" in e6);
            }(e5) ? je.create(e5) : function(e6) {
              return "audio" === e6.type && !("version" in e6);
            }(e5) ? Be.create(e5) : function(e6) {
              return "video" === e6.type && !("version" in e6);
            }(e5) ? He.create(e5) : function(e6) {
              return "custom" === e6.type && !("version" in e6);
            }(e5) ? De.create(e5) : function(e6) {
              return "loc" === e6.type && !("version" in e6);
            }(e5) ? xe.create(e5) : function(e6) {
              return "channel" === e6.type && !("version" in e6);
            }(e5) ? we.create(e5) : function(e6) {
              return "delivery" === e6.type && !("version" in e6);
            }(e5) ? Pe.create(e5) : function(e6) {
              return "read" === e6.type && !("version" in e6);
            }(e5) ? Ue.create(e5) : function(e6) {
              return "combine" === e6.type && !("version" in e6);
            }(e5) ? Fe.create(e5) : {} : ke.create(e5);
            var t4;
          }, e4.prototype.set = function(e5) {
          }, e4.getFileUrl = _e.getFileUrl, e4;
        }();
        !function(e4) {
          e4[e4.CREATE = 0] = "CREATE", e4[e4.FAIL = 1] = "FAIL", e4[e4.INPROGRESS = 2] = "INPROGRESS", e4[e4.SUCCESS = 3] = "SUCCESS";
        }(Ne || (Ne = {}));
        var Ke = function() {
          return Ke = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, Ke.apply(this, arguments);
        }, qe = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, ze = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        }, Ve = { 0: "TEXT", 1: "IMAGE", 2: "VIDEO", 3: "LOCATION", 4: "VOICE", 5: "FILE", 6: "COMMAND", 7: "CUSTOM", 8: "COMBINE" };
        function Je(e4) {
          for (var t4 = {}, r2 = 0; r2 < e4.length; r2++)
            if (8 === e4[r2].type)
              t4[e4[r2].key] = JSON.parse(e4[r2].stringValue);
            else if (7 === e4[r2].type)
              t4[e4[r2].key] = e4[r2].stringValue;
            else if (6 === e4[r2].type)
              t4[e4[r2].key] = e4[r2].doubleValue;
            else if (5 === e4[r2].type)
              t4[e4[r2].key] = e4[r2].floatValue;
            else if (1 === e4[r2].type) {
              var o3 = e4[r2].varintValue, n2 = new (f2())(o3.low, o3.high, o3.unsigned).toString();
              t4[e4[r2].key] = 0 !== Number(n2);
            } else
              2 !== e4[r2].type && 3 !== e4[r2].type && 4 !== e4[r2].type || (o3 = e4[r2].varintValue, n2 = new (f2())(o3.low, o3.high, o3.unsigned).toString(), t4[e4[r2].key] = Number(n2));
          return t4;
        }
        function Xe(e4) {
          var t4 = "";
          return e4.remotePath && (t4 = _e.formatAttachUrl.call(this, e4.remotePath), e4.remotePath.includes("?em-redirect") || (t4 = "".concat(t4, "?em-redirect=true"), e4.secretKey && (t4 = "".concat(t4, "&share-secret=").concat(e4.secretKey)))), t4;
        }
        function Ye(e4, t4) {
          var r2, o3, n2 = t4.from && t4.from.name;
          if (n2 === this.context.userId) {
            var i2 = null === (r2 = null == e4 ? void 0 : e4.from) || void 0 === r2 ? void 0 : r2.clientResource;
            n2 === (null === (o3 = null == t4 ? void 0 : t4.to) || void 0 === o3 ? void 0 : o3.name) && i2 && i2 !== this.clientResource && (n2 = "".concat(n2, "/").concat(i2));
          }
          return n2;
        }
        function Qe(e4, t4) {
          var r2, o3 = t4.to && t4.to.name;
          return (null === (r2 = null == e4 ? void 0 : e4.to) || void 0 === r2 ? void 0 : r2.clientResource) && (o3 = "".concat(o3, "/").concat(e4.to.clientResource)), o3;
        }
        function Ze(e4) {
          var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2, d2, p3, h2, f3, m2, g2, E3, y2, v2, T2, _2, R2, O2, I2, S2, C2, N2;
          return qe(this, void 0, void 0, function() {
            var A2, M2, b2, U2, P2, w2, k2, L2, D2, x2, G2, H2, j2, F2, W2, K2, q2, z2, V2, J2, X2, Y2, Q2, Z2, $3, ee2, te2, re2, oe2, ne2, ie2, ae2, se2, ce2, ue2, le2, de2, pe2, he2, fe2, me2, ge2, Ee2, ye2, ve2, Te2, Re2, Oe2, Ie2, Se2, Ae2, Me2;
            return ze(this, function(be2) {
              switch (be2.label) {
                case 0:
                  switch (A2 = e4.status, M2 = e4.thirdMessage, b2 = e4.msgBody, U2 = e4.msgId, P2 = e4.type, w2 = e4.from, k2 = e4.to, L2 = e4.time, D2 = e4.onlineState, x2 = e4.chatType, G2 = e4.ignoreCallback, H2 = e4.priority, j2 = e4.format, F2 = e4.broadcast, W2 = void 0 !== F2 && F2, K2 = e4.isContentReplaced, q2 = void 0 !== K2 && K2, z2 = {}, V2 = {}, J2 = A2.errorCode > 0, X2 = A2.errorCode, Y2 = A2.reason, Q2 = {}, Z2 = [], $3 = [], ee2 = {}, te2 = "", re2 = 0, oe2 = null, ne2 = null, M2.ext && (Q2 = Je(M2.ext)), M2.meta && "string" == typeof M2.meta && ((ae2 = JSON.parse(M2.meta)).reaction && (Z2 = ae2.reaction).forEach(function(e5) {
                    e5.isAddedBySelf = e5.state, delete e5.state;
                  }), ae2.translations && ($3 = ae2.translations), ae2.edit_msg && (se2 = ae2.edit_msg, ce2 = se2.count, ue2 = se2.operator, le2 = se2.edit_time, de2 = se2.sender, pe2 = se2.send_time, ee2 = { operationTime: le2, operatorId: ue2, operationCount: ce2 }, te2 = de2, re2 = pe2), ae2.thread && "{}" !== JSON.stringify(ae2.thread) && (oe2 = { messageId: ae2.thread.msg_parent_id, parentId: ae2.thread.muc_parent_id, chatThreadName: ae2.thread.thread_name }), ae2.thread_overview && "{}" !== JSON.stringify(ae2.thread_overview) && (ne2 = { id: ae2.thread_overview.id, parentId: ae2.thread_overview.muc_parent_id, name: ae2.thread_overview.name, lastMessage: ae2.thread_overview.last_message && "{}" !== JSON.stringify(ae2.thread_overview.last_message) ? Ce.call(this, ae2.thread_overview.last_message) : null, createTimestamp: ae2.thread_overview.create_timestamp, updateTimestamp: ae2.thread_overview.update_timestamp, messageCount: ae2.thread_overview.message_count || 0 })), b2.type) {
                    case 0:
                      return [3, 1];
                    case 1:
                      return [3, 7];
                    case 2:
                      return [3, 10];
                    case 3:
                      return [3, 13];
                    case 4:
                      return [3, 16];
                    case 5:
                      return [3, 19];
                    case 6:
                      return [3, 22];
                    case 7:
                      return [3, 23];
                    case 8:
                      return [3, 26];
                  }
                  return [3, 27];
                case 1:
                  return Object.prototype.hasOwnProperty.call(b2, "subType") && 0 === b2.subType ? (ie2 = Xe.call(this, b2), he2 = { id: U2, type: "combine", chatType: x2, to: k2, from: w2, ext: Q2, time: Number(L2), onlineState: D2, title: b2.title || "", summary: b2.summary || "", url: ie2 || "", secret: b2.secretKey || "", file_length: b2.fileLength || 0, filename: b2.displayName || "", compatibleText: b2.text, combineLevel: b2.combineLevel || 0 }, z2.msgConfig && (he2.msgConfig = z2.msgConfig), Z2.length > 0 && (he2.reactions = Z2), oe2 && (he2.chatThread = oe2), ne2 && (he2.chatThreadOverview = ne2), "chatRoom" === x2 && (he2.priority = H2, he2.broadcast = W2), q2 && (he2.isContentReplaced = q2), V2 = he2, G2 ? [3, 3] : [4, null === (r2 = null === (t4 = this._localCache) || void 0 === t4 ? void 0 : t4.getInstance()) || void 0 === r2 ? void 0 : r2.storeMessage(he2, Ne.SUCCESS)]) : [3, 4];
                case 2:
                  be2.sent(), null === (o3 = this.eventHandler) || void 0 === o3 || o3.dispatch("onCombineMessage", he2), be2.label = 3;
                case 3:
                  return [3, 28];
                case 4:
                  return !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, data: b2.text, ext: Q2, sourceMsg: b2.text, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onTextMessage && this.onTextMessage(z2), fe2 = { id: U2, type: "txt", chatType: x2, msg: b2.text, to: k2, from: w2, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (fe2.msgConfig = z2.msgConfig), Z2.length > 0 && (fe2.reactions = Z2), oe2 && (fe2.chatThread = oe2), ne2 && (fe2.chatThreadOverview = ne2), $3.length > 0 && (fe2.translations = $3), ee2.operationCount > 0 && (fe2.modifiedInfo = ee2, M2.type === Ot.EDIT && (fe2.from = te2, fe2.time = re2)), "chatRoom" === x2 && (fe2.priority = H2, fe2.broadcast = W2), q2 && (fe2.isContentReplaced = q2), V2 = fe2, G2 ? [3, 6] : [4, null === (i2 = null === (n2 = this._localCache) || void 0 === n2 ? void 0 : n2.getInstance()) || void 0 === i2 ? void 0 : i2.storeMessage(fe2, Ne.SUCCESS)];
                case 5:
                  be2.sent(), null === (a2 = this.eventHandler) || void 0 === a2 || a2.dispatch("onTextMessage", fe2), be2.label = 6;
                case 6:
                  return [3, 28];
                case 7:
                  return me2 = (null === (s2 = null == b2 ? void 0 : b2.size) || void 0 === s2 ? void 0 : s2.width) || 0, ge2 = (null === (c2 = null == b2 ? void 0 : b2.size) || void 0 === c2 ? void 0 : c2.height) || 0, ie2 = this.useOwnUploadFun ? b2.remotePath : Xe.call(this, b2), !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, url: ie2, secret: b2.secretKey, filename: b2.displayName, thumb: this.useOwnUploadFun ? "" : "".concat(ie2, "&thumbnail=true"), thumb_secret: b2.secretKey, file_length: b2.fileLength || "", width: me2, height: ge2, filetype: b2.filetype || "", accessToken: this.token, ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onPictureMessage && this.onPictureMessage(z2), Ee2 = { id: U2, type: "img", chatType: x2, from: w2, to: k2, url: ie2 || "", width: me2, height: ge2, secret: b2.secretKey || "", thumb: this.useOwnUploadFun ? "" : "".concat(ie2, "&thumbnail=true"), thumb_secret: b2.secretKey, file_length: b2.fileLength || 0, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Ee2.msgConfig = z2.msgConfig), Z2.length > 0 && (Ee2.reactions = Z2), oe2 && (Ee2.chatThread = oe2), ne2 && (Ee2.chatThreadOverview = ne2), "chatRoom" === x2 && (Ee2.priority = H2, Ee2.broadcast = W2), q2 && (Ee2.isContentReplaced = q2), V2 = Ee2, G2 ? [3, 9] : [4, null === (l2 = null === (u2 = this._localCache) || void 0 === u2 ? void 0 : u2.getInstance()) || void 0 === l2 ? void 0 : l2.storeMessage(Ee2, Ne.SUCCESS)];
                case 8:
                  be2.sent(), null === (d2 = this.eventHandler) || void 0 === d2 || d2.dispatch("onImageMessage", Ee2), be2.label = 9;
                case 9:
                  return [3, 28];
                case 10:
                  return ie2 = this.useOwnUploadFun ? b2.remotePath : Xe.call(this, b2), !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, url: ie2, secret: b2.secretKey, filename: b2.displayName, length: b2.duration || "", file_length: b2.fileLength || "", filetype: b2.filetype || "", accessToken: this.token || "", ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onVideoMessage && this.onVideoMessage(z2), ye2 = { id: U2, type: "video", chatType: x2, from: w2, to: k2, url: ie2, secret: b2.secretKey, thumb: _e.formatAttachUrl.call(this, b2.thumbnailRemotePath), thumb_secret: b2.thumbnailSecretKey, filename: b2.displayName, length: b2.duration || 0, file: {}, file_length: b2.fileLength || 0, filetype: b2.filetype || "", accessToken: this.token || "", ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (ye2.msgConfig = z2.msgConfig), Z2.length > 0 && (ye2.reactions = Z2), oe2 && (ye2.chatThread = oe2), ne2 && (ye2.chatThreadOverview = ne2), "chatRoom" === x2 && (ye2.priority = H2, ye2.broadcast = W2), q2 && (ye2.isContentReplaced = q2), V2 = ye2, G2 ? [3, 12] : [4, null === (h2 = null === (p3 = this._localCache) || void 0 === p3 ? void 0 : p3.getInstance()) || void 0 === h2 ? void 0 : h2.storeMessage(ye2, Ne.SUCCESS)];
                case 11:
                  be2.sent(), null === (f3 = this.eventHandler) || void 0 === f3 || f3.dispatch("onVideoMessage", ye2), be2.label = 12;
                case 12:
                  return [3, 28];
                case 13:
                  return !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, addr: b2.address, buildingName: b2.buildingName, lat: b2.latitude, lng: b2.longitude, ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onLocationMessage && this.onLocationMessage(z2), ve2 = { id: U2, type: "loc", chatType: x2, from: w2, to: k2, buildingName: b2.buildingName, addr: b2.address, lat: b2.latitude, lng: b2.longitude, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (ve2.msgConfig = z2.msgConfig), Z2.length > 0 && (ve2.reactions = Z2), oe2 && (ve2.chatThread = oe2), ne2 && (ve2.chatThreadOverview = ne2), "chatRoom" === x2 && (ve2.priority = H2, ve2.broadcast = W2), q2 && (ve2.isContentReplaced = q2), V2 = ve2, G2 ? [3, 15] : [4, null === (g2 = null === (m2 = this._localCache) || void 0 === m2 ? void 0 : m2.getInstance()) || void 0 === g2 ? void 0 : g2.storeMessage(ve2, Ne.SUCCESS)];
                case 14:
                  be2.sent(), null === (E3 = this.eventHandler) || void 0 === E3 || E3.dispatch("onLocationMessage", ve2), be2.label = 15;
                case 15:
                  return [3, 28];
                case 16:
                  return ie2 = this.useOwnUploadFun ? b2.remotePath : Xe.call(this, b2), !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, url: ie2, secret: b2.secretKey, filename: b2.displayName, file_length: b2.fileLength || "", accessToken: this.token || "", ext: Q2, length: b2.duration, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onAudioMessage && this.onAudioMessage(z2), Te2 = { id: U2, type: "audio", chatType: x2, from: w2, to: k2, url: ie2, secret: b2.secretKey, file: {}, filename: b2.displayName, length: b2.duration || 0, file_length: b2.fileLength || 0, filetype: b2.filetype || "", accessToken: this.token || "", ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Te2.msgConfig = z2.msgConfig), Z2.length > 0 && (Te2.reactions = Z2), oe2 && (Te2.chatThread = oe2), ne2 && (Te2.chatThreadOverview = ne2), "chatRoom" === x2 && (Te2.priority = H2, Te2.broadcast = W2), q2 && (Te2.isContentReplaced = q2), V2 = Te2, G2 ? [3, 18] : [4, null === (v2 = null === (y2 = this._localCache) || void 0 === y2 ? void 0 : y2.getInstance()) || void 0 === v2 ? void 0 : v2.storeMessage(Te2, Ne.SUCCESS)];
                case 17:
                  be2.sent(), null === (T2 = this.eventHandler) || void 0 === T2 || T2.dispatch("onAudioMessage", Te2), be2.label = 18;
                case 18:
                  return [3, 28];
                case 19:
                  return ie2 = this.useOwnUploadFun ? b2.remotePath : Xe.call(this, b2), !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, url: ie2, secret: b2.secretKey, filename: b2.displayName, file_length: b2.fileLength, accessToken: this.token || "", ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).delay && delete z2.delay, !z2.msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onFileMessage && this.onFileMessage(z2), Re2 = { id: U2, type: "file", chatType: x2, from: w2, to: k2, url: ie2, secret: b2.secretKey, file: {}, filename: b2.displayName, length: b2.duration || 0, file_length: b2.fileLength || 0, filetype: b2.filetype || "", accessToken: this.token || "", ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Re2.msgConfig = z2.msgConfig), Z2.length > 0 && (Re2.reactions = Z2), oe2 && (Re2.chatThread = oe2), ne2 && (Re2.chatThreadOverview = ne2), "chatRoom" === x2 && (Re2.priority = H2, Re2.broadcast = W2), q2 && (Re2.isContentReplaced = q2), V2 = Re2, G2 ? [3, 21] : [4, null === (R2 = null === (_2 = this._localCache) || void 0 === _2 ? void 0 : _2.getInstance()) || void 0 === R2 ? void 0 : R2.storeMessage(Re2, Ne.SUCCESS)];
                case 20:
                  be2.sent(), null === (O2 = this.eventHandler) || void 0 === O2 || O2.dispatch("onFileMessage", Re2), be2.label = 21;
                case 21:
                  return [3, 28];
                case 22:
                  return !(z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, action: b2.action, ext: Q2, time: L2, msgConfig: M2.msgConfig, onlineState: D2 }).msgConfig && delete M2.msgConfig, z2.error = J2, z2.errorText = Y2, z2.errorCode = X2, !G2 && this.onCmdMessage && this.onCmdMessage(z2), Oe2 = { id: U2, type: "cmd", chatType: x2, from: w2, to: k2, action: b2.action, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Oe2.msgConfig = z2.msgConfig), Z2.length > 0 && (Oe2.reactions = Z2), oe2 && (Oe2.chatThread = oe2), ne2 && (Oe2.chatThreadOverview = ne2), "chatRoom" === x2 && (Oe2.priority = H2, Oe2.broadcast = W2), q2 && (Oe2.isContentReplaced = q2), V2 = Oe2, G2 || null === (I2 = this.eventHandler) || void 0 === I2 || I2.dispatch("onCmdMessage", Oe2), [3, 28];
                case 23:
                  return Ie2 = {}, Se2 = {}, M2.contents[0].customExts && (Ie2 = Je(M2.contents[0].customExts)), M2.contents[0].params && (Se2 = Je(M2.contents[0].params)), z2 = { id: U2, type: P2, contentsType: Ve[b2.type], from: w2, to: k2, customEvent: b2.customEvent, params: Se2, customExts: Ie2, ext: Q2, time: L2, onlineState: D2 }, !G2 && this.onCustomMessage && this.onCustomMessage(z2), Ae2 = { id: U2, type: "custom", chatType: x2, from: w2, to: k2, customEvent: b2.customEvent, params: Se2, customExts: Ie2, ext: Q2, time: Number(L2), onlineState: D2 }, z2.msgConfig && (Ae2.msgConfig = z2.msgConfig), Z2.length > 0 && (Ae2.reactions = Z2), oe2 && (Ae2.chatThread = oe2), ne2 && (Ae2.chatThreadOverview = ne2), ee2.operationCount > 0 && (Ae2.modifiedInfo = ee2, M2.type === Ot.EDIT && (Ae2.from = te2, Ae2.time = re2)), "chatRoom" === x2 && (Ae2.priority = H2, Ae2.broadcast = W2), q2 && (Ae2.isContentReplaced = q2), V2 = Ae2, G2 ? [3, 25] : [4, null === (C2 = null === (S2 = this._localCache) || void 0 === S2 ? void 0 : S2.getInstance()) || void 0 === C2 ? void 0 : C2.storeMessage(Ae2, Ne.SUCCESS)];
                case 24:
                  be2.sent(), null === (N2 = this.eventHandler) || void 0 === N2 || N2.dispatch("onCustomMessage", Ae2), be2.label = 25;
                case 25:
                  return [3, 28];
                case 26:
                  return ie2 = Xe.call(this, b2), Me2 = { id: U2, type: "combine", chatType: x2, to: k2, from: w2, ext: Q2, time: Number(L2), onlineState: D2, title: b2.title || "", summary: b2.summary || "", url: ie2 || "", secret: b2.secretKey || "", file_length: b2.fileLength || 0, filename: b2.displayName || "", compatibleText: b2.text, combineLevel: b2.combineLevel || 0 }, z2.msgConfig && (Me2.msgConfig = z2.msgConfig), Z2.length > 0 && (Me2.reactions = Z2), oe2 && (Me2.chatThread = oe2), ne2 && (Me2.chatThreadOverview = ne2), "chatRoom" === x2 && (Me2.priority = H2, Me2.broadcast = W2), q2 && (Me2.isContentReplaced = q2), V2 = Me2, !G2 && this.eventHandler && this.eventHandler.dispatch("onCombineMessage", Me2), [3, 28];
                case 27:
                  return B.error("Unknow message type, message:", b2), [3, 28];
                case 28:
                  return j2 ? [2, V2] : [2, z2];
              }
            });
          });
        }
        function $e(e4, t4, r2) {
          if (this.delivery && e4 !== t4) {
            var o3 = this.getUniqueId(), n2 = new We("delivery", o3);
            n2.set({ ackId: r2, to: e4 }), B.debug("send delivery ack"), this.send(n2.body);
          }
        }
        var et = function(e4, t4, r2, o3, n2) {
          var i2, a2, s2, c2, u2, l2, d2, p3, h2, m2, g2, E3, y2, v2, T2, _2, R2, O2, I2, S2, C2, N2, A2, M2, b2, U2;
          return qe(this, void 0, void 0, function() {
            var P2, w2, k2, L2, D2, x2, G2, H2, j2, F2, W2, K2, q2, z2, V2, J2, X2, Y2, Q2, Z2, $3, ee2, te2, re2, oe2, ne2, ie2, ae2, se2, ce2, ue2, le2, de2, pe2, he2, fe2, me2, ge2, Ee2, ye2;
            return ze(this, function(ve2) {
              switch (ve2.label) {
                case 0:
                  if (P2 = new (f2())(e4.timestamp.low, e4.timestamp.high, e4.timestamp.unsigned).toString(), w2 = this.root.lookup("easemob.pb.MessageBody"), k2 = w2.decode(e4.payload), L2 = 3, D2 = false, x2 = new (f2())(e4.id.low, e4.id.high, e4.id.unsigned).toString(), n2 && e4.from && e4.from.name === this.context.userId && e4.from.clientResource === this.clientResource && k2.type === Ot.CHATROOM)
                    return [2, B.debug("Discard your own chat room message:", x2)];
                  if (e4.meta && e4.meta.length) {
                    if (G2 = _e.parseNotify(e4.meta), H2 = G2.is_online, j2 = G2.callback_replace, this.useReplacedMessageContents && j2 && (D2 = true), H2 || 0 === H2)
                      switch (H2) {
                        case 0:
                          L2 = 0;
                          break;
                        case 1:
                          L2 = 1;
                          break;
                        default:
                          L2 = 2;
                      }
                  } else
                    L2 = 3;
                  switch (F2 = k2.ackMessageId ? new (f2())(k2.ackMessageId.low, k2.ackMessageId.high, k2.ackMessageId.unsigned).toString() : "", W2 = "", K2 = Ye.call(this, e4, k2), q2 = Qe.call(this, e4, k2), B.debug("meta thirdMessage:", { metaId: x2, metaNs: e4.ns, type: k2.type, from: K2, to: q2, contentType: null === (a2 = null === (i2 = k2.contents) || void 0 === i2 ? void 0 : i2[0]) || void 0 === a2 ? void 0 : a2.type, contentLen: null === (s2 = k2.contents) || void 0 === s2 ? void 0 : s2.length }), k2.type) {
                    case Ot.SINGLECHAT:
                      return [3, 1];
                    case Ot.GROUPCHAT:
                      return [3, 2];
                    case Ot.CHATROOM:
                      return [3, 3];
                    case Ot.READ_ACK:
                      return [3, 4];
                    case Ot.DELIVER_ACK:
                      return [3, 5];
                    case Ot.RECALL:
                      return [3, 6];
                    case Ot.CHANNEL_ACK:
                      return [3, 15];
                    case Ot.EDIT:
                      return [3, 16];
                  }
                  return [3, 20];
                case 1:
                  return W2 = "chat", "agoraToken" === this.grantType && (W2 = "singleChat"), this.delivery && !r2 && K2 !== this.context.userId && $e.call(this, K2, q2, x2), [3, 21];
                case 2:
                  return W2 = "groupchat", "agoraToken" === this.grantType && (W2 = "groupChat"), [3, 21];
                case 3:
                  return W2 = "chatroom", "agoraToken" === this.grantType && (W2 = "chatRoom"), L2 = 1, [3, 21];
                case 4:
                  return W2 = "read_ack", z2 = void 0, k2.ext[0] && JSON.parse(k2.ext[0].stringValue) ? (z2 = { id: x2, type: "read", from: K2, to: q2, mid: F2, groupReadCount: k2.ext[0] && JSON.parse(k2.ext[0].stringValue), ackContent: k2.ackContent, onlineState: L2 }, this.onReadMessage && this.onReadMessage(z2), null === (c2 = this.eventHandler) || void 0 === c2 || c2.dispatch("onReadMessage", z2), [2]) : (z2 = { id: x2, type: "read", from: K2, to: q2, mid: F2, onlineState: L2 }, this.onReadMessage && this.onReadMessage(z2), null === (u2 = this.eventHandler) || void 0 === u2 || u2.dispatch("onReadMessage", z2), [2]);
                case 5:
                  return W2 = "deliver_ack", this.onDeliveredMessage && this.onDeliveredMessage({ id: x2, type: "delivery", from: K2, to: q2, mid: F2, onlineState: L2 }), V2 = { id: x2, type: "delivery", from: K2, to: q2, mid: F2, onlineState: L2 }, null === (l2 = this.eventHandler) || void 0 === l2 || l2.dispatch("onDeliveredMessage", V2), [2];
                case 6:
                  return W2 = "recall", J2 = "", e4.ext && (J2 = (null === (d2 = Je(e4.ext)) || void 0 === d2 ? void 0 : d2.recallMessageExtensionInfo) || ""), X2 = { id: x2, from: K2 || "admin", to: q2, mid: F2, ext: J2, onlineState: L2 }, Y2 = q2 === this.user ? K2 : q2, [4, null === (h2 = null === (p3 = this._localCache) || void 0 === p3 ? void 0 : p3.getInstance()) || void 0 === h2 ? void 0 : h2.getMessageByServerMsgId(X2.mid)];
                case 7:
                  return (Q2 = ve2.sent()) ? [4, null === (g2 = null === (m2 = this._localCache) || void 0 === m2 ? void 0 : m2.getInstance()) || void 0 === g2 ? void 0 : g2.removeMsgByServerMsgId(X2.mid)] : [3, 9];
                case 8:
                  ve2.sent(), ve2.label = 9;
                case 9:
                  return "singleChat" !== (null == Q2 ? void 0 : Q2.chatType) && "groupChat" !== (null == Q2 ? void 0 : Q2.chatType) ? [3, 14] : (Z2 = (null == Q2 ? void 0 : Q2.from) === this.user || "" === (null == Q2 ? void 0 : Q2.from), [4, null === (y2 = null === (E3 = this._localCache) || void 0 === E3 ? void 0 : E3.getInstance()) || void 0 === y2 ? void 0 : y2.getConversationLastMessage(Y2, Q2.chatType)]);
                case 10:
                  return $3 = ve2.sent(), [4, null === (T2 = null === (v2 = this._localCache) || void 0 === v2 ? void 0 : v2.getInstance()) || void 0 === T2 ? void 0 : T2.getConversationBySessionId(Ae({ conversationId: Y2, conversationType: Q2.chatType }))];
                case 11:
                  return (ee2 = ve2.sent()) ? [4, null === (R2 = null === (_2 = this._localCache) || void 0 === _2 ? void 0 : _2.getInstance()) || void 0 === R2 ? void 0 : R2.updateLocalConversation(Ae({ conversationId: Y2, conversationType: Q2.chatType }), { lastMessageId: null == $3 ? void 0 : $3.serverMsgId, unReadCount: Me({ conversation: ee2, isRecallSelfMsg: Z2, recalledMsgTime: Q2.time }) })] : [3, 13];
                case 12:
                  ve2.sent(), ve2.label = 13;
                case 13:
                  ve2.label = 14;
                case 14:
                  return this.onRecallMessage && this.onRecallMessage(X2), null === (O2 = this.eventHandler) || void 0 === O2 || O2.dispatch("onRecallMessage", X2), [2];
                case 15:
                  return this.onChannelMessage && this.onChannelMessage({ id: x2, type: "channel", chatType: "singleChat", from: K2, to: q2, time: Number(P2), onlineState: L2 }), te2 = { id: x2, type: "channel", chatType: "singleChat", from: K2, to: q2, time: Number(P2), onlineState: L2 }, null === (I2 = this.eventHandler) || void 0 === I2 || I2.dispatch("onChannelMessage", te2), [2];
                case 16:
                  return re2 = { errorCode: 0, reason: "" }, [4, Ze.call(this, { status: re2, thirdMessage: k2, msgBody: k2.contents[0], msgId: x2, type: W2, from: K2, to: q2, time: P2, onlineState: L2, ignoreCallback: true, format: true, isContentReplaced: D2 })];
                case 17:
                  return oe2 = ve2.sent(), ne2 = !!e4.to && -1 !== e4.to.domain.indexOf("conference"), oe2.chatType = ne2 ? "groupChat" : "singleChat", ie2 = k2.editMessageId && new (f2())(k2.editMessageId.low, k2.editMessageId.high, k2.editMessageId.unsigned).toString(), ae2 = {}, "txt" === oe2.type ? (se2 = oe2.type, ce2 = oe2.chatType, ue2 = oe2.to, le2 = oe2.from, de2 = oe2.time, pe2 = oe2.modifiedInfo, ae2 = { id: ie2, type: se2, chatType: ce2, to: ue2, from: le2, time: de2, modifiedInfo: pe2, msg: oe2.msg }, oe2.translations && (ae2.translations = oe2.translations)) : "custom" === oe2.type && ((ae2 = oe2).id = ie2, delete ae2.onlineState), ae2 ? [4, null === (C2 = null === (S2 = this._localCache) || void 0 === S2 ? void 0 : S2.getInstance()) || void 0 === C2 ? void 0 : C2.getMessageByServerMsgId(ie2)] : [3, 19];
                case 18:
                  "txt" === (null == (he2 = ve2.sent()) ? void 0 : he2.type) && "txt" === ae2.type ? null === (A2 = null === (N2 = this._localCache) || void 0 === N2 ? void 0 : N2.getInstance()) || void 0 === A2 || A2.putMessageToDB(Ke(Ke({}, he2), { msg: ae2.msg, modifiedInfo: ae2.modifiedInfo, translations: ae2.translations })) : "custom" === (null == he2 ? void 0 : he2.type) && "custom" === ae2.type && (null === (b2 = null === (M2 = this._localCache) || void 0 === M2 ? void 0 : M2.getInstance()) || void 0 === b2 || b2.putMessageToDB(Ke(Ke({}, he2), { modifiedInfo: ae2.modifiedInfo, customEvent: ae2.customEvent, customExts: ae2.customExts, ext: ae2.ext }))), ve2.label = 19;
                case 19:
                  return "txt" !== oe2.type && "custom" !== oe2.type || null === (U2 = this.eventHandler) || void 0 === U2 || U2.dispatch("onModifiedMessage", ae2), [2];
                case 20:
                  return B.error("unexpected message type: ".concat(k2.type)), [2];
                case 21:
                  fe2 = "normal", ge2 = false, "chat" === W2.toLowerCase() || "singleChat" === W2 ? me2 = "singleChat" : "groupchat" === W2.toLowerCase() || "groupChat" === W2 ? me2 = "groupChat" : (me2 = "chatRoom", L2 = 1, e4.ext && (Ee2 = Je(e4.ext), ge2 = !!(null == Ee2 ? void 0 : Ee2.is_broadcast), fe2 = 0 === Ee2.chatroom_msg_tag ? "high" : 2 === Ee2.chatroom_msg_tag ? "low" : "normal")), ye2 = 0, ve2.label = 22;
                case 22:
                  return ye2 < k2.contents.length ? [4, Ze.call(this, { status: t4, thirdMessage: k2, msgBody: k2.contents[ye2], msgId: x2, type: W2, from: K2, to: q2, time: P2, onlineState: L2, chatType: me2, ignoreCallback: r2, priority: fe2, format: o3, broadcast: ge2, isContentReplaced: D2 })] : [3, 25];
                case 23:
                  return [2, ve2.sent()];
                case 24:
                  return ye2++, [3, 22];
                case 25:
                  return [2];
              }
            });
          });
        }, rt = ["public", "members_only", "allow_user_invites", "invite_need_confirm"], ot = { name: "name", title: "name", description: "description", public: "public", members_only: "approval", allow_user_invites: "allowInvites", max_users: "maxUsers", invite_need_confirm: "inviteNeedConfirm", custom: "ext", last_modified: "lastModified" };
        function nt(e4, t4) {
          var r2, o3, n2, i2, a2, s2, c2 = this, u2 = this.context, l2 = u2.userId, d2 = u2.jid, p3 = t4.from.name === l2 && d2.clientResource !== t4.from.clientResource;
          return t4.isThread ? (n2 = { id: t4.mucId.name, name: t4.mucName, operation: "", parentId: t4.mucParentId.name, operator: t4.from.name, userName: t4.to.length ? t4.to[0].name : "" }, i2 = { chatThreadId: t4.mucId.name, chatThreadName: t4.mucName, operation: "", parentId: t4.mucParentId.name }) : (o3 = { type: "", owner: t4.from.name, gid: t4.mucId.name, from: t4.from.name, fromJid: t4.from, to: t4.to.length ? t4.to[0].name : "", toJid: t4.to, chatroom: t4.isChatroom, status: t4.status }, a2 = { operation: "", id: t4.mucId.name, from: t4.from.name }, t4.isChatroom && (null === (r2 = null == t4 ? void 0 : t4.eventInfo) || void 0 === r2 ? void 0 : r2.ext) && (s2 = JSON.parse(t4.eventInfo.ext))), ({ 45: function() {
            var e5, r3, o4;
            a2.operation = "memberAttributesUpdate";
            var n3 = JSON.parse(null === (e5 = null == t4 ? void 0 : t4.eventInfo) || void 0 === e5 ? void 0 : e5.ext) || {};
            a2.attributes = n3.properties || {}, a2.userId = n3.username || "", p3 ? null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onMultiDeviceEvent", a2) : null === (o4 = c2.eventHandler) || void 0 === o4 || o4.dispatch("onGroupEvent", a2);
          }, 44: function() {
            var e5;
            a2.operation = "removeChatRoomAttributes", a2.attributes = s2.result.successKeys, s2.result.successKeys.length > 0 && (null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomEvent", a2));
          }, 43: function() {
            var e5;
            a2.operation = "updateChatRoomAttributes";
            var t5 = {};
            s2.result.successKeys.forEach(function(e6) {
              t5[e6] = s2.properties[e6];
            }), a2.attributes = t5, s2.result.successKeys.length > 0 && (null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomEvent", a2));
          }, 42: function() {
          }, 41: function() {
          }, 40: function() {
          }, 39: function() {
          }, 38: function() {
            var e5;
            i2.operation = "chatThreadNameUpdate", null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onMultiDeviceEvent", i2);
          }, 37: function() {
            var e5;
            n2.operation = "userRemove", null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatThreadChange", n2);
          }, 36: function() {
            var e5;
            i2.operation = "chatThreadLeave", null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onMultiDeviceEvent", i2);
          }, 35: function() {
            var e5;
            i2.operation = "chatThreadJoin", null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onMultiDeviceEvent", i2);
          }, 34: function() {
            var e5;
            i2.operation = "chatThreadDestroy", null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onMultiDeviceEvent", i2);
          }, 33: function() {
            var e5;
            i2.operation = "chatThreadCreate", null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onMultiDeviceEvent", i2);
          }, 32: function() {
            var e5, r3, n3, i3;
            o3.type = t4.isChatroom ? "rmChatRoomMute" : "rmGroupMute", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "unmuteAllMembers", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 31: function() {
            var e5, r3, n3, i3;
            o3.type = t4.isChatroom ? "muteChatRoom" : "muteGroup", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "muteAllMembers", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 30: function() {
            var e5, r3, n3, i3;
            o3.type = t4.isChatroom ? "rmUserFromChatRoomWhiteList" : "rmUserFromGroupWhiteList", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "removeAllowlistMember", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 29: function() {
            var e5, r3, n3, i3;
            o3.type = t4.isChatroom ? "addUserToChatRoomWhiteList" : "addUserToGroupWhiteList", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "addUserToAllowlist", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 28: function() {
            var e5, r3, n3, i3;
            o3.type = "deleteFile", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "deleteFile", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 27: function() {
            var e5, r3, n3, i3;
            o3.type = "uploadFile", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "uploadFile", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 26: function() {
            var e5, r3, n3, i3;
            o3.type = "deleteAnnouncement", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "deleteAnnouncement", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 25: function() {
            var e5, r3, n3, i3;
            o3.type = "updateAnnouncement", o3.announcement = t4.reason, c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "updateAnnouncement", a2.announcement = t4.reason, t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 24: function() {
            var e5, r3, n3, i3;
            o3.type = "removeMute", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "unmuteMember", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 23: function() {
            var e5, r3, n3, i3;
            o3.type = "addMute", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "muteMember", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 22: function() {
            var e5, r3, n3, i3;
            o3.type = "removeAdmin", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "removeAdmin", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 21: function() {
            var e5, r3, n3, i3;
            o3.type = "addAdmin", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "setAdmin", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 20: function() {
            var e5, r3, n3, i3;
            o3.type = "changeOwner", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "changeOwner", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 19: function() {
            var e5, r3, n3, i3;
            o3.type = "direct_joined", o3.groupName = t4.mucName, c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "directJoined", a2.name = t4.mucName, t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 18: function() {
            var e5, r3, n3, i3;
            o3.type = t4.isChatroom ? "leaveChatRoom" : "leaveGroup", c2.onPresence && c2.onPresence(o3);
            var s3 = t4.mucMemberCount;
            s3 && (a2.memberCount = s3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "memberAbsence", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 17: function() {
            var e5, r3, n3, i3;
            t4.isChatroom && t4.ext && (a2.ext = t4.ext, o3.ext = t4.ext), o3.type = t4.isChatroom ? "memberJoinChatRoomSuccess" : "memberJoinPublicGroupSuccess", c2.onPresence && c2.onPresence(o3);
            var s3 = t4.mucMemberCount;
            t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "memberPresence", s3 && (a2.memberCount = s3), t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 16: function() {
            var e5, r3;
            o3.type = "unblock", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3);
          }, 15: function() {
            var e5, r3;
            o3.type = "block", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3);
          }, 14: function() {
            var e5, r3, n3, i3, s3, u3 = t4.isChatroom;
            if (!u3) {
              var l3 = JSON.parse((null === (e5 = null == t4 ? void 0 : t4.eventInfo) || void 0 === e5 ? void 0 : e5.ext) || "{}", function(e6, t5) {
                return "last_modified" === e6 ? Number(t5) : rt.includes(e6) ? "true" === t5 || true === t5 : t5;
              });
              a2.detail = o3.detail = {}, Object.keys(l3).forEach(function(e6) {
                var t5 = ot[e6];
                if (t5) {
                  var r4 = l3[e6];
                  a2.detail && (a2.detail[t5] = r4), o3.detail && (o3.detail[t5] = r4);
                }
              });
            }
            o3.type = "update", c2.onPresence && c2.onPresence(o3), u3 ? null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onChatroomChange", o3) : null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onGroupChange", o3), a2.operation = "updateInfo", u3 ? null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onChatroomEvent", a2) : null === (s3 = c2.eventHandler) || void 0 === s3 || s3.dispatch("onGroupEvent", a2);
          }, 13: function() {
            var e5, r3, n3, i3;
            o3.type = "allow", o3.reason = t4.reason, c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), t4.reason && (a2.reason = t4.reason), a2.operation = "unblockMember", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 12: function() {
            var e5, r3;
            o3.type = "ban", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3);
          }, 11: function() {
            var e5, r3;
            o3.type = "getBlackList", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3);
          }, 10: function() {
            var e5, r3, n3, i3;
            o3.type = "removedFromGroup", o3.kicked = o3.to, c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "removeMember", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 9: function() {
            var e5, r3, n3, i3;
            o3.type = "invite_decline", o3.kicked = o3.to, c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "rejectInvite", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 8: function() {
            var e5, r3, n3, i3;
            o3.type = "invite_accept", o3.kicked = o3.to, c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "acceptInvite", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 7: function() {
            var e5, r3, n3, i3;
            o3.type = "invite", o3.kicked = o3.to, o3.groupName = t4.mucName, c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "inviteToJoin", a2.name = t4.mucName, t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 6: function() {
            var e5, r3, n3, i3;
            o3.type = "joinPublicGroupDeclined", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "joinPublicGroupDeclined", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : (a2.userId = t4.to.length ? t4.to[0].name : "", null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2));
          }, 5: function() {
            var e5, r3, n3, i3;
            o3.type = "joinPublicGroupSuccess", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "acceptRequest", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 4: function() {
            var e5, r3, n3, i3;
            o3.type = "joinGroupNotifications", o3.reason = t4.reason, c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), t4.reason && (a2.reason = t4.reason), a2.operation = "requestToJoin", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 3: function() {
            var e5, r3;
            o3.type = "leave", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3);
          }, 2: function() {
            var e5, r3;
            o3.type = "join", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3);
          }, 1: function() {
            var e5, r3, n3, i3;
            o3.type = "deleteGroupChat", c2.onPresence && c2.onPresence(o3), t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomChange", o3) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupChange", o3), a2.operation = "destroy", t4.isChatroom ? null === (n3 = c2.eventHandler) || void 0 === n3 || n3.dispatch("onChatroomEvent", a2) : null === (i3 = c2.eventHandler) || void 0 === i3 || i3.dispatch("onGroupEvent", a2);
          }, 0: function() {
            var e5, r3;
            a2.operation = "create", t4.isChatroom ? null === (e5 = c2.eventHandler) || void 0 === e5 || e5.dispatch("onChatroomEvent", a2) : null === (r3 = c2.eventHandler) || void 0 === r3 || r3.dispatch("onGroupEvent", a2);
          } }[e4] || function() {
            console.error("No match operation ".concat(e4));
          })();
        }
        var it, at = function(e4) {
          var t4 = this.root.lookup("easemob.pb.MUCBody").decode(e4.payload), r2 = t4.operation;
          B.debug("onMucMessage", t4), nt.call(this, r2, t4);
        }, st = { handleRosterMsg: function(e4) {
          var t4, r2, o3, n2, i2, a2, s2 = this.root.lookup("easemob.pb.RosterBody").decode(e4.payload), c2 = { type: "", to: s2.to[0].name, from: s2.from.name, status: s2.reason };
          switch (s2.operation) {
            case 2:
              c2.type = "subscribe", this.onContactInvited && this.onContactInvited(c2), null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onContactInvited", c2);
              break;
            case 3:
              c2.type = "unsubscribed", this.onContactDeleted && this.onContactDeleted(c2), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onContactDeleted", c2);
              break;
            case 4:
              c2.type = "subscribed", this.onContactAdded && this.onContactAdded(c2), null === (o3 = this.eventHandler) || void 0 === o3 || o3.dispatch("onContactAdded", c2);
              break;
            case 5:
              c2.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(c2), null === (n2 = this.eventHandler) || void 0 === n2 || n2.dispatch("onContactRefuse", c2);
              break;
            case 6:
            case 7:
              break;
            case 8:
              c2.type = "subscribed", this.onContactAgreed && this.onContactAgreed(c2), null === (i2 = this.eventHandler) || void 0 === i2 || i2.dispatch("onContactAgreed", c2);
              break;
            case 9:
              c2.type = "unsubscribed", this.onContactRefuse && this.onContactRefuse(c2), null === (a2 = this.eventHandler) || void 0 === a2 || a2.dispatch("onContactRefuse", c2);
              break;
            default:
              B.error("handleRosterMsg:", s2);
          }
          this.onPresence && c2.type && this.onPresence(c2);
        } }, ct = function(e4) {
          var t4, r2, o3, n2, i2, a2, s2 = this.root.lookup("easemob.pb.StatisticsBody").decode(e4.payload), c2 = s2.operation, u2 = s2.reason;
          switch (c2) {
            case 0:
              this.onStatisticMessage && this.onStatisticMessage(s2), null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onStatisticMessage", s2);
              break;
            case 1:
              a2 = m.create({ type: d.WEBIM_CONNCTION_USER_REMOVED, message: "user has been removed" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onError", a2);
              break;
            case 2:
              a2 = m.create({ type: d.WEBIM_CONNCTION_USER_LOGIN_ANOTHER_DEVICE, message: "the user is already logged on another device" }), u2 && (a2.data = { loginInfoCustomExt: s2.reason }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (o3 = this.eventHandler) || void 0 === o3 || o3.dispatch("onError", a2);
              break;
            case 3:
              a2 = m.create({ type: d.WEBIM_CONNCTION_USER_KICKED_BY_CHANGE_PASSWORD, message: "the user was kicked by changing password" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (n2 = this.eventHandler) || void 0 === n2 || n2.dispatch("onError", a2);
              break;
            case 4:
              a2 = m.create({ type: d.WEBIM_CONNCTION_USER_KICKED_BY_OTHER_DEVICE, message: "the user was kicked by other device" }), this.disconnectedReason = a2, this.logOut = true, this.onError && this.onError(a2), null === (i2 = this.eventHandler) || void 0 === i2 || i2.dispatch("onError", a2);
              break;
            default:
              B.error("handleStatisticsMsg:", s2);
          }
        };
        function ut(e4) {
          var t4, r2 = [], o3 = [], n2 = e4.data;
          n2 && n2.values && n2.values.forEach(function(e5) {
            Object.entries(e5.status).forEach(function(e6) {
              o3.push({ device: e6[0], status: Number(e6[1]) });
            }), r2.push({ userId: e5.uid, lastTime: Number(e5.last_time), expire: Number(e5.expiry), ext: e5.ext, statusDetails: o3 });
          }), this.onPresenceStatusChange && this.onPresenceStatusChange(r2), null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onPresenceStatusChange", r2);
        }
        function lt(e4) {
          var t4 = this;
          e4.data.forEach(function(e5) {
            var r2, o3 = { from: e5.from, to: e5.to, chatType: "chat" === e5.channel_type ? "singleChat" : "groupChat", messageId: e5.messageId, reactions: e5.reactions, ts: e5.ts };
            null === (r2 = t4.eventHandler) || void 0 === r2 || r2.dispatch("onReactionChange", o3);
          });
        }
        function dt(e4) {
          var t4, r2, o3, n2;
          if (e4.data) {
            var i2 = e4.data, a2 = { id: i2.id || "", name: i2.name || "", parentId: i2.muc_parent_id || "", messageId: i2.msg_parent_id || "", timestamp: i2.timestamp || 0, operator: i2.from || "", operation: "" };
            switch (i2.operation) {
              case "create":
                a2.operation = "create", a2.createTimestamp = a2.timestamp, a2.messageCount = 0, null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onChatThreadChange", a2);
                break;
              case "update_msg":
                a2.operation = "update", a2.messageCount = i2.message_count, i2.last_message && "{}" !== JSON.stringify(i2.last_message) ? a2.lastMessage = Ce.call(this, i2.last_message) : "{}" === JSON.stringify(i2.last_message) && (a2.lastMessage = {}), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onChatThreadChange", a2);
                break;
              case "update":
                a2.operation = "update", a2.messageCount = i2.message_count, null === (o3 = this.eventHandler) || void 0 === o3 || o3.dispatch("onChatThreadChange", a2);
                break;
              case "delete":
                a2.operation = "destroy", null === (n2 = this.eventHandler) || void 0 === n2 || n2.dispatch("onChatThreadChange", a2);
            }
          }
        }
        function pt(e4) {
          var t4, r2 = e4.data;
          if (r2.resource !== this.clientResource) {
            var o3 = { operation: "deleteRoaming", conversationId: r2.to, chatType: "chat" === r2.chatType ? "singleChat" : "groupChat", resource: r2.resource };
            null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onMultiDeviceEvent", o3);
          }
        }
        function ht(e4) {
          var t4, r2, o3 = e4.data, n2 = "";
          if (this.clientResource !== o3.res) {
            switch (o3.op) {
              case "del":
                n2 = "deleteConversation";
                break;
              case "top":
                n2 = "pinnedConversation";
                break;
              case "not_top":
                n2 = "unpinnedConversation";
                break;
              case "mark":
                n2 = "markConversation";
                break;
              case "mark_delete":
                n2 = "unMarkConversation";
                break;
              case "pin":
                n2 = "pin";
                break;
              case "pin_delete":
                n2 = "unpin";
                break;
              default:
                return void B.error("unexpected conversation op:", o3.op);
            }
            if ("pin" !== n2 && "unpin" !== n2) {
              var i2 = { operation: n2, conversationId: o3.id, conversationType: "chat" === o3.type ? "singleChat" : "groupChat", timestamp: o3.ts };
              "markConversation" !== i2.operation && "unMarkConversation" !== i2.operation || o3.ext && (i2.conversationMark = it[o3.ext]), null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onMultiDeviceEvent", i2);
            } else {
              var a2 = o3.ext, s2 = o3.from, c2 = o3.id, u2 = o3.type, l2 = o3.ts, d2 = { messageId: a2 || "", conversationId: s2 === this.user ? c2 : s2, conversationType: Se[u2], operation: n2, operatorId: s2, time: l2 };
              null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onMessagePinEvent", d2);
            }
          }
        }
        function ft(e4) {
          var t4, r2 = this;
          null === (t4 = e4.values) || void 0 === t4 || t4.forEach(function(e5) {
            var t5, o3, n2, i2, a2;
            if (e5.operator_resource !== r2.clientResource)
              if ("ignoreInterval" in e5.data) {
                var s2 = { operation: "setSilentModeForUser", resource: e5.operator_resource, data: e5.data };
                null === (t5 = r2.eventHandler) || void 0 === t5 || t5.dispatch("onMultiDeviceEvent", s2);
              } else
                "group" in e5 ? (s2 = { operation: 0 === Object.keys(null !== (o3 = e5.data) && void 0 !== o3 ? o3 : {}).length ? "removeSilentModeForConversation" : "setSilentModeForConversation", resource: e5.operator_resource, conversationId: e5.group, type: "groupChat", data: e5.data }, null === (n2 = r2.eventHandler) || void 0 === n2 || n2.dispatch("onMultiDeviceEvent", s2)) : (s2 = { operation: 0 === Object.keys(null !== (i2 = e5.data) && void 0 !== i2 ? i2 : {}).length ? "removeSilentModeForConversation" : "setSilentModeForConversation", resource: e5.operator_resource, conversationId: e5.user, type: "singleChat", data: e5.data }, null === (a2 = r2.eventHandler) || void 0 === a2 || a2.dispatch("onMultiDeviceEvent", s2));
          });
        }
        !function(e4) {
          e4[e4.mark_0 = 0] = "mark_0", e4[e4.mark_1 = 1] = "mark_1", e4[e4.mark_2 = 2] = "mark_2", e4[e4.mark_3 = 3] = "mark_3", e4[e4.mark_4 = 4] = "mark_4", e4[e4.mark_5 = 5] = "mark_5", e4[e4.mark_6 = 6] = "mark_6", e4[e4.mark_7 = 7] = "mark_7", e4[e4.mark_8 = 8] = "mark_8", e4[e4.mark_9 = 9] = "mark_9", e4[e4.mark_10 = 10] = "mark_10", e4[e4.mark_11 = 11] = "mark_11", e4[e4.mark_12 = 12] = "mark_12", e4[e4.mark_13 = 13] = "mark_13", e4[e4.mark_14 = 14] = "mark_14", e4[e4.mark_15 = 15] = "mark_15", e4[e4.mark_16 = 16] = "mark_16", e4[e4.mark_17 = 17] = "mark_17", e4[e4.mark_18 = 18] = "mark_18", e4[e4.mark_19 = 19] = "mark_19";
        }(it || (it = {}));
        var mt = function(e4) {
          var t4 = _e.parseNotify(e4.payload);
          switch (t4.type) {
            case "presence":
              ut.call(this, t4);
              break;
            case "reaction":
              lt.call(this, t4);
              break;
            case "thread":
              dt.call(this, t4);
              break;
            case "roaming_delete":
              pt.call(this, t4);
              break;
            case "conv":
              ht.call(this, t4);
              break;
            case "user_notification_mute":
              ft.call(this, t4);
              break;
            default:
              B.error("unexpected notify type: ".concat(t4.type));
          }
        }, gt = 2;
        function Et() {
          var e4 = this.context.appName, t4 = this.context.orgName;
          return !(!e4 || !t4) || (this.onError && this.onError({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: "appName or orgName is illegal" }), false);
        }
        function yt() {
          var e4, t4 = this.context.accessToken;
          if (!t4) {
            var r2 = m.create({ type: d.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "token not assign error" });
            return B.debug("token not assign error", t4), this.onError && this.onError(r2), null === (e4 = this.eventHandler) || void 0 === e4 || e4.dispatch("onError", r2), false;
          }
          return true;
        }
        function vt() {
          return yt.call(this) && Et.call(this);
        }
        function Tt(e4) {
          var t4 = e4.data, r2 = e4.type;
          return { data: { status: Object.keys(t4.errorKeys).length > 0 ? "fail" : "success", errorKeys: t4.errorKeys, successKeys: t4.successKeys }, type: r2 };
        }
        function _t(e4) {
          var t4 = e4.data, r2 = void 0;
          return Object.keys(t4.errorKeys).length > 0 && Object.keys(t4.errorKeys).forEach(function(e5) {
            var o3 = t4.errorKeys[e5];
            r2 = o3.includes("is not part of you") ? m.create({ type: d.NO_PERMISSION, message: o3 }) : o3.includes("size of metadata for this single chatroom exceeds the user defined limit") || o3.includes("total size of chatroom metadata for this app exceeds the user defined limit") || o3.includes("is exceeding maximum limit") ? m.create({ type: d.MAX_LIMIT, message: o3 }) : o3.includes("is not Legal") ? m.create({ type: d.REQUEST_PARAMETER_ERROR, message: o3 }) : o3.includes("Failed to update userMetadata. Concurrent updates not allowed") ? m.create({ type: d.OPERATION_NOT_ALLOWED, message: o3 }) : m.create({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: o3 });
          }), r2;
        }
        function Rt(e4) {
          if ("string" != typeof e4.deviceId || "" === e4.deviceId)
            throw Error('Invalid parameter: "deviceId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(this.user), type: "PUT", data: JSON.stringify({ device_id: e4.deviceId, device_token: e4.deviceToken, notifier_name: e4.notifierName }), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          B.debug("Call uploadPushTokenToServer", e4);
          var s2 = se.bind(this, a2, E2.UPLOAD_PUSH_TOKEN);
          return _e.retryPromise(s2).then(function(e5) {
            var t5 = e5.entities[0] || {};
            return { type: e5.type, data: t5 };
          });
        }
        var Ot, It, St, Ct = function() {
          return Ct = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, Ct.apply(this, arguments);
        }, Nt = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, At = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        }, Mt = function(e4, t4, r2) {
          if (r2 || 2 === arguments.length)
            for (var o3, n2 = 0, i2 = t4.length; n2 < i2; n2++)
              !o3 && n2 in t4 || (o3 || (o3 = Array.prototype.slice.call(t4, 0, n2)), o3[n2] = t4[n2]);
          return e4.concat(o3 || Array.prototype.slice.call(t4));
        };
        !function(e4) {
          e4[e4.NORMAL = 0] = "NORMAL", e4[e4.SINGLECHAT = 1] = "SINGLECHAT", e4[e4.GROUPCHAT = 2] = "GROUPCHAT", e4[e4.CHATROOM = 3] = "CHATROOM", e4[e4.READ_ACK = 4] = "READ_ACK", e4[e4.DELIVER_ACK = 5] = "DELIVER_ACK", e4[e4.RECALL = 6] = "RECALL", e4[e4.CHANNEL_ACK = 7] = "CHANNEL_ACK", e4[e4.EDIT = 8] = "EDIT";
        }(Ot || (Ot = {})), function(e4) {
          e4[e4.APNs = 0] = "APNs", e4[e4.FCM = 1] = "FCM", e4[e4.HMSPUSH = 2] = "HMSPUSH", e4[e4.MIPUSH = 3] = "MIPUSH", e4[e4.MEIZUPUSH = 4] = "MEIZUPUSH", e4[e4.VIVOPUSH = 5] = "VIVOPUSH", e4[e4.OPPOPUSH = 6] = "OPPOPUSH", e4[e4.HONORPUSH = 7] = "HONORPUSH";
        }(It || (It = {})), function(e4) {
          e4[e4.OK = 0] = "OK", e4[e4.FAIL = 1] = "FAIL", e4[e4.UNAUTHORIZED = 2] = "UNAUTHORIZED", e4[e4.MISSING_PARAMETER = 3] = "MISSING_PARAMETER", e4[e4.WRONG_PARAMETER = 4] = "WRONG_PARAMETER", e4[e4.REDIRECT = 5] = "REDIRECT", e4[e4.TOKEN_EXPIRED = 6] = "TOKEN_EXPIRED", e4[e4.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", e4[e4.NO_ROUTE = 8] = "NO_ROUTE", e4[e4.UNKNOWN_COMMAND = 9] = "UNKNOWN_COMMAND", e4[e4.PB_PARSER_ERROR = 10] = "PB_PARSER_ERROR", e4[e4.BIND_ANOTHER_DEVICE = 11] = "BIND_ANOTHER_DEVICE", e4[e4.IM_FORBIDDEN = 12] = "IM_FORBIDDEN", e4[e4.TOO_MANY_DEVICES = 13] = "TOO_MANY_DEVICES", e4[e4.PLATFORM_LIMIT = 14] = "PLATFORM_LIMIT", e4[e4.USER_MUTED = 15] = "USER_MUTED", e4[e4.ENCRYPT_DISABLE = 16] = "ENCRYPT_DISABLE", e4[e4.ENCRYPT_ENABLE = 17] = "ENCRYPT_ENABLE", e4[e4.DECRYPT_FAILURE = 18] = "DECRYPT_FAILURE", e4[e4.PERMISSION_DENIED_EXTERNAL = 19] = "PERMISSION_DENIED_EXTERNAL";
        }(St || (St = {}));
        var bt = ["txt", "img", "video", "audio", "file", "loc", "custom", "cmd", "combine"], Ut = _e.getEnvInfo();
        function Pt() {
          var e4 = "webim", t4 = "", r2 = "", o3 = [], n2 = (/* @__PURE__ */ new Date()).valueOf(), i2 = _e.getDevicePlatform(Ut);
          if (this.isFixedDeviceId) {
            var a2 = _e.getLocalDeviceInfo();
            if (a2) {
              var s2 = JSON.parse(a2);
              e4 = s2.deviceId, t4 = s2.deviceName, r2 = s2.deviceUuid;
            } else
              "webim" === this.deviceId ? (r2 = "".concat(i2, "_").concat(n2.toString()), e4 = "".concat(this.deviceId, "_").concat(r2), t4 = this.deviceId) : e4 = t4 = r2 = "webim_".concat(i2, "_").concat(this.deviceId), _e.setLocalDeviceInfo(JSON.stringify({ deviceId: e4, deviceName: t4, deviceUuid: r2 }));
          } else
            "webim" === this.deviceId ? (r2 = "random_".concat(i2, "_").concat(n2.toString()), e4 = "".concat(this.deviceId, "_").concat(r2), t4 = this.deviceId) : e4 = t4 = r2 = "webim_".concat(i2, "_").concat(this.deviceId);
          this.context.jid && (this.context.jid.clientResource = e4);
          var c2 = this.root.lookup("easemob.pb.Provision"), u2 = c2.decode(o3);
          u2.compressType = this.compressType, u2.encryptType = this.encryptType, u2.osType = this.osType, u2.version = this.version, u2.deviceName = t4, u2.resource = e4, u2.deviceUuid = r2, u2.authToken = '{"token":"$t$' + this.token + '"}', u2.sessionId = Date.now().toString() + ":", this.loginInfoCustomExt && (u2.reason = this.loginInfoCustomExt), B.debug("provision info", { version: this.version, resource: e4, isFixedDeviceId: this.isFixedDeviceId, loginInfoCustomExt: !!this.loginInfoCustomExt, token: !!this.token }), u2.actionVersion = "v5.0", u2 = c2.encode(u2).finish();
          var l2 = this.root.lookup("easemob.pb.MSync"), d2 = l2.decode(o3);
          return d2.version = this.version, d2.guid = this.context.jid, d2.auth = "$t$" + this.token, d2.command = 3, d2.deviceId = t4, d2.serviceId = this.dataReport.getServiceId(), d2.encryptType = this.encryptType, d2.payload = u2, l2.encode(d2).finish();
        }
        function wt(e4, t4) {
          var r2 = this, o3 = _e.getEnvInfo();
          if ("web" === o3.platform || "zfb" === o3.platform || "dd" === o3.platform) {
            for (var n2 = "", i2 = 0; i2 < e4.length; i2++)
              n2 += String.fromCharCode(e4[i2]);
            return n2 = Oe().btoa(n2), "web" === o3.platform ? n2 : { data: n2, isBuffer: false, complete: function() {
            }, fail: function(e5) {
              "sendSocketMessage:fail taskID not exist" !== e5.errMsg && "SocketTast.send:fail SocketTask.readyState is not OPEN" !== e5.errMsg || (B.debug("send message fail and reconnect"), r2.reconnecting || r2.reconnect()), t4 && r2._msgHash && r2._msgHash[t4] && r2._msgHash[t4].fail({ id: t4 });
            } };
          }
          var a2 = e4;
          return { data: a2.buffer.slice(a2.byteOffset, a2.byteOffset + a2.byteLength), fail: function(e5) {
            "sendSocketMessage:fail taskID not exist" !== e5.errMsg && "SocketTast.send:fail SocketTask.readyState is not OPEN" !== e5.errMsg || r2.reconnecting || r2.reconnect(), t4 && r2._msgHash && r2._msgHash[t4] && r2._msgHash[t4].fail({ id: t4 });
          } };
        }
        function kt(e4, t4) {
          var r2;
          return Nt(this, void 0, void 0, function() {
            var o3, n2, i2, a2, s2, c2;
            return At(this, function(u2) {
              switch (u2.label) {
                case 0:
                  for (B.debug("distributeMeta, metas length: ", e4.length), o3 = [], n2 = function(r3) {
                    var n3 = e4[r3], a3 = new (f2())(n3.id.low, n3.id.high, n3.id.unsigned).toString(), s3 = n3.from.name, c3 = n3.to ? n3.to.name : "", u3 = !!n3.to && -1 !== n3.to.domain.indexOf("conference");
                    if (i2._load_msg_cache.some(function(e5) {
                      return e5.msgId === a3;
                    }))
                      return "continue";
                    switch (i2._load_msg_cache.length <= i2.max_cache_length || i2._load_msg_cache.shift(), i2._load_msg_cache.push({ msgId: a3, from: s3, to: c3, isGroup: u3 }), n3.ns) {
                      case 0:
                        ct.call(i2, n3);
                        break;
                      case 1:
                        o3.push(et.call(i2, n3, t4, false, true, true));
                        break;
                      case 2:
                        at.call(i2, n3);
                        break;
                      case 3:
                        st.handleRosterMsg.call(i2, n3);
                        break;
                      case 4:
                        i2.registerConfrIQHandler && i2.registerConfrIQHandler(n3, t4, i2);
                        break;
                      case 5:
                        mt.call(i2, n3);
                        break;
                      default:
                        B.error("distributeMeta", n3);
                    }
                  }, i2 = this, a2 = 0; a2 < e4.length; a2++)
                    n2(a2);
                  return [4, Promise.all(o3)];
                case 1:
                  return s2 = u2.sent(), (c2 = s2.filter(function(e5) {
                    return e5 && "cmd" !== e5.type;
                  })).length > 0 && (null === (r2 = this.eventHandler) || void 0 === r2 || r2.dispatch("onMessage", c2)), [2];
              }
            });
          });
        }
        function Lt(e4, t4) {
          kt.call(this, e4, t4);
        }
        function Dt(e4) {
          var t4;
          this._offlineMessagePullState === ve.SYNC_INIT && (this._offlineMessagePullState = ve.SYNC_START, this._offlineMessagePullQueue = e4.unread.reduce(function(e5, t5) {
            return e5.find(function(e6) {
              return e6.name === t5.queue.name;
            }) || e5.push(t5.queue), e5;
          }, []), null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onOfflineMessageSyncStart"));
        }
        function xt(e4) {
          var t4;
          if (this._offlineMessagePullState === ve.SYNC_START) {
            var r2 = this._offlineMessagePullQueue.findIndex(function(t5) {
              return t5.name === e4.queue.name;
            });
            r2 > -1 && this._offlineMessagePullQueue.splice(r2, 1), 0 === this._offlineMessagePullQueue.length && (this._offlineMessagePullState = ve.SYNC_FINISH, null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onOfflineMessageSyncFinish"));
          }
        }
        function Gt(e4) {
          var t4 = this.root.lookup("easemob.pb.CommUnreadDL");
          t4 = t4.decode(e4.payload);
          var r2 = new (f2())(t4.timestamp.low, t4.timestamp.high, t4.timestamp.unsigned).toString();
          if (this.expirationTime && this.compareTokenExpireTime(Number(r2), this.expirationTime), 0 === t4.unread.length)
            Jt.call(this);
          else {
            Dt.call(this, t4), B.debug("pull unread message", t4.unread);
            for (var o3 = 0; o3 < t4.unread.length; o3++) {
              var n2 = $t(this._queues, t4.unread[o3].queue), i2 = $t(this.unSyncQueue, t4.unread[o3].queue);
              n2 || i2 ? B.warn("receive unread message and already in queue") : this.unSyncQueue.push(t4.unread[o3].queue);
            }
            for (o3 = 0; o3 < this.unSyncQueue.length; o3++)
              this.unSyncQueue[o3].hasSync || jt.call(this, this.unSyncQueue[o3]), this.unSyncQueue[o3].hasSync = true;
          }
          Jt.call(this);
        }
        function Bt() {
          var e4 = [], t4 = this.root.lookup("easemob.pb.StatisticsBody"), r2 = t4.decode(e4);
          r2.operation = 0, r2 = t4.encode(r2).finish();
          var o3 = this.root.lookup("easemob.pb.Meta").decode(e4);
          o3.id = (/* @__PURE__ */ new Date()).valueOf(), o3.ns = 0, o3.payload = r2;
          var n2 = this.root.lookup("easemob.pb.CommSyncUL"), i2 = n2.decode(e4);
          i2.meta = o3, i2 = n2.encode(i2).finish();
          var a2 = this.root.lookup("easemob.pb.MSync"), s2 = a2.decode(e4);
          return s2.version = this.version, s2.encryptType = [0], s2.command = 0, s2.payload = i2, a2.encode(s2).finish();
        }
        function Ht(e4) {
          var t4 = [], r2 = this.root.lookup("easemob.pb.CommSyncUL"), o3 = r2.decode(t4);
          o3.queue = e4, o3 = r2.encode(o3).finish();
          var n2 = this.root.lookup("easemob.pb.MSync"), i2 = n2.decode(t4);
          return i2.version = this.version, i2.encryptType = this.encryptType, i2.command = 0, i2.payload = o3, n2.encode(i2).finish();
        }
        function jt(e4) {
          B.debug("sendBackqueue");
          var t4 = Ht.call(this, e4);
          pr.call(this, t4);
        }
        function Ft(e4, t4) {
          var r2 = [], o3 = this.root.lookup("easemob.pb.CommSyncUL"), n2 = o3.decode(r2);
          n2.queue = t4, n2.key = new (f2())(e4.low, e4.high, e4.unsigned).toString(), n2 = o3.encode(n2).finish();
          var i2 = this.root.lookup("easemob.pb.MSync"), a2 = i2.decode(r2);
          return a2.version = this.version, a2.encryptType = this.encryptType, a2.command = 0, a2.payload = n2, i2.encode(a2).finish();
        }
        function Wt() {
          var e4 = this;
          this.uniPush && false === this.isRegisterPush && (this.isRegisterPush = true, this.uniPush.onRegister(function(t4) {
            B.debug("push token onRegister", t4);
            var r2 = e4.uniPushConfig || {}, o3 = r2.APNsCertificateName, n2 = void 0 === o3 ? "" : o3, i2 = r2.HMSCertificateName, a2 = void 0 === i2 ? "" : i2, s2 = r2.HONORCertificateName, c2 = void 0 === s2 ? "" : s2, u2 = r2.MEIZUCertificateName, l2 = void 0 === u2 ? "" : u2, d2 = r2.MICertificateName, p3 = void 0 === d2 ? "" : d2, h2 = r2.OPPOCertificateName, f3 = void 0 === h2 ? "" : h2, m2 = r2.VIVOCertificateName, g2 = void 0 === m2 ? "" : m2;
            switch (t4.push_type) {
              case It.APNs:
                e4.pushCertificateName = n2;
                break;
              case It.HMSPUSH:
                e4.pushCertificateName = a2;
                break;
              case It.HONORPUSH:
                e4.pushCertificateName = c2;
                break;
              case It.MEIZUPUSH:
                e4.pushCertificateName = l2;
                break;
              case It.MIPUSH:
                e4.pushCertificateName = p3;
                break;
              case It.OPPOPUSH:
                e4.pushCertificateName = f3;
                break;
              case It.VIVOPUSH:
                e4.pushCertificateName = g2;
                break;
              default:
                B.error("unexpected push type", t4.push_type);
            }
            e4.pushCertificateName && t4.push_token && Rt.call(e4, { deviceId: e4.clientResource, deviceToken: t4.push_token, notifierName: e4.pushCertificateName }).then(function() {
              B.debug("uploadPushToken success");
            }).catch(function(e5) {
              B.debug("uploadPushToken failed", e5);
            });
          }));
        }
        function Kt() {
          var e4;
          this._offlineMessagePullState = ve.SYNC_INIT, this._offlineMessagePullQueue = [], this.times = 1, this.autoReconnectNumTotal = 0, this.onOpened && this.onOpened(), Wt.call(this), null === (e4 = this.eventHandler) || void 0 === e4 || e4.dispatch("onConnected"), Vt.call(this), Yt.call(this), Xt.call(this), Jt.call(this);
        }
        function qt(e4, t4) {
          B.debug("sendLastSession", e4);
          var r2 = Ft.call(this, e4, t4);
          pr.call(this, r2);
        }
        function zt(e4) {
          var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2, p3, h2, f3, g2, E3 = this, y2 = this.root.lookup("easemob.pb.Provision").decode(e4.payload);
          if (this.context.jid && (this.context.jid.clientResource = y2.resource), this.clientResource = y2.resource, this.provisionTimer && clearTimeout(this.provisionTimer), B.debug("receiveProvisionResult", y2.status), this._isLogging = false, y2.status.errorCode === St.OK) {
            if (this.disconnectedReason = void 0, y2.authToken) {
              var v2 = JSON.parse(y2.authToken).expires_in;
              if (!this.tokenExpiredTimer && !this.tokenWillExpireTimer) {
                var T2 = Date.now();
                this.expirationTime = v2;
                var _2 = this.expirationTime - T2;
                this.expiresIn = _2 < 0 ? 0 : _2, this.tokenExpireTimeCountDown(this.expiresIn);
              }
            }
            this.reconnecting = false, this.logOut = false, "zfb" !== Ut.platform && "dd" !== Ut.platform || (this.sock.readyState = 1), this._localCache ? (null === (t4 = this._localCache) || void 0 === t4 ? void 0 : t4.getInstance()) ? Kt.call(this) : this._localCache && new this._localCache({ user: this.user, dbName: "cache_".concat(Math.abs(be(this.appKey)), "_").concat(this.user), version: gt, onInit: function() {
              return Nt(E3, void 0, void 0, function() {
                return At(this, function(e5) {
                  return B.debug("localCache init success"), Kt.call(this), [2];
                });
              });
            } }) : Kt.call(this), null === (r2 = this.connectionResolve) || void 0 === r2 || r2.call(this);
          } else {
            var R2 = void 0, O2 = y2.status, I2 = O2.reason, S2 = O2.errorCode;
            switch (B.debug("provision errorCode: ", S2), B.debug("provision reason: ", I2), S2) {
              case St.FAIL:
                R2 = "Sorry, user register limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, the number of user registrations limit has been reached" }) : "Sorry, user register rate limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, user register rate limit" }) : "Sorry, token expired" === I2 ? m.create({ type: d.WEBIM_TOKEN_EXPIRED, message: "Sorry, token expired" }) : "Sorry, token or password does not match login info" === I2 ? m.create({ type: d.WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR, message: "INVALID_TOKEN" }) : "Sorry, user not found" === I2 ? m.create({ type: d.USER_NOT_FOUND, message: "User not found" }) : m.create({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (o3 = this.connectionReject) || void 0 === o3 || o3.call(this, R2), null === (n2 = this.eventHandler) || void 0 === n2 || n2.dispatch("onError", R2);
                break;
              case St.WRONG_PARAMETER:
                R2 = m.create({ type: d.REQUEST_PARAMETER_ERROR, message: "Invalid parameter" }), null === (i2 = this.connectionReject) || void 0 === i2 || i2.call(this, R2), null === (a2 = this.eventHandler) || void 0 === a2 || a2.dispatch("onError", R2);
                break;
              case St.UNAUTHORIZED:
                R2 = m.create({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (s2 = this.connectionReject) || void 0 === s2 || s2.call(this, R2), null === (c2 = this.eventHandler) || void 0 === c2 || c2.dispatch("onError", R2);
                break;
              case St.IM_FORBIDDEN:
                R2 = m.create({ type: d.WEBIM_SERVER_SERVING_DISABLED, message: "Server serving disabled." }), null === (u2 = this.connectionReject) || void 0 === u2 || u2.call(this, R2), null === (l2 = this.eventHandler) || void 0 === l2 || l2.dispatch("onError", R2);
                break;
              case St.PERMISSION_DENIED:
                R2 = "Sorry, the app month live count limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, the monthly active user limit for this app has been reached" }) : "Sorry, the app day live count limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, the daily active user limit for this app has been reached" }) : "Sorry, the app online count limit" === I2 ? m.create({ type: d.MAX_LIMIT, message: "Sorry, the maximum number limit of online users for this app has been reached" }) : m.create({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: "Auth failed" }), null === (p3 = this.connectionReject) || void 0 === p3 || p3.call(this, R2), null === (h2 = this.eventHandler) || void 0 === h2 || h2.dispatch("onError", R2);
                break;
              default:
                R2 = m.create({ type: d.WEBIM_CONNCTION_AUTH_ERROR, message: I2 }), null === (f3 = this.connectionReject) || void 0 === f3 || f3.call(this, R2), null === (g2 = this.eventHandler) || void 0 === g2 || g2.dispatch("onError", R2);
            }
            this.disconnectedReason = R2;
          }
        }
        function Vt() {
          var e4, t4;
          if ((null === (e4 = this.unMSyncSendMsgMap) || void 0 === e4 ? void 0 : e4.size) > 0) {
            for (var r2 = Array.from(this.unMSyncSendMsgMap.keys()), o3 = 0; o3 < r2.length; o3++) {
              var n2 = this.unMSyncSendMsgMap.get(r2[o3]);
              pr.call(this, n2, r2[o3]);
            }
            null === (t4 = this.unMSyncSendMsgMap) || void 0 === t4 || t4.clear();
          }
        }
        function Jt() {
          var e4 = Bt.call(this);
          pr.call(this, e4);
        }
        function Xt() {
          B.debug("sendUnreadDeal");
          var e4 = Zt.call(this);
          pr.call(this, e4);
        }
        function Yt() {
          var e4 = this;
          Qt.call(this), this.heartBeatID = setInterval(function() {
            (Date.now() - e4.lastHeartbeat) / 1e3 >= 30 && (B.debug("send heart beat"), Xt.call(e4), e4.lastHeartbeat = Date.now());
          }, this.heartBeatWait);
        }
        function Qt() {
          clearInterval(this.heartBeatID);
        }
        function Zt() {
          var e4 = this.root.lookup("easemob.pb.MSync"), t4 = e4.decode([]);
          return t4.version = this.version, t4.encryptType = this.encryptType, t4.command = 1, e4.encode(t4).finish();
        }
        function $t(e4, t4) {
          return e4.some(function(e5) {
            return e5.name === t4.name;
          });
        }
        function er(e4) {
          var t4 = this.root.lookup("easemob.pb.CommNotice"), r2 = t4.decode(e4.payload), o3 = $t(this._queues, r2.queue);
          B.debug("receive notice", t4, this._queues);
          var n2 = $t(this.unSyncQueue, r2.queue);
          o3 || n2 || this.clientResource === r2.queue.clientResource && r2.queue.name === this.context.userId || (this._queues.push(r2.queue), 1 === this._queues.length && jt.call(this, r2.queue));
        }
        function tr(e4) {
          return Nt(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2;
            return At(this, function(u2) {
              if (t4 = _e.getEnvInfo(), r2 = this.root.lookup("easemob.pb.MSync"), "miniCore" === this.name) {
                try {
                  n2 = new Uint8Array(e4.data), o3 = r2.decode(n2);
                } catch (e5) {
                  throw new Error("decode message fail.");
                }
                return [2, o3];
              }
              if ("web" === t4.platform || "zfb" === t4.platform || "dd" === t4.platform) {
                for (i2 = Oe().atob(e4.data), a2 = [], s2 = 0, c2 = i2.length; s2 < c2; ++s2)
                  a2.push(i2.charCodeAt(s2));
                return [2, r2.decode(a2)];
              }
              try {
                o3 = r2.decode(e4.data);
              } catch (e5) {
                throw new Error("decode message fail.");
              }
              return [2, o3];
            });
          });
        }
        function rr(e4) {
          var t4 = this;
          this.lastHeartbeat = Date.now(), this.probingTimer && clearTimeout(this.probingTimer), e4.then(function(e5) {
            if (e5)
              switch (e5.command) {
                case 0:
                  or.call(t4, e5);
                  break;
                case 1:
                  Gt.call(t4, e5);
                  break;
                case 2:
                  er.call(t4, e5);
                  break;
                case 3:
                  zt.call(t4, e5);
                  break;
                default:
                  B.error("unexpected msync command: ".concat(e5.command));
              }
            else
              B.error("unexpected msync result: ".concat(e5));
          });
        }
        function or(e4) {
          var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2, p3, h2, g2, E3, y2, v2, _2, R2, O2, C2, N2, A2, M2, b2, U2, P2, w2, k2, L2, D2, x2, G2, H2, j2, F2, W2, K2, q2, z2, V2, J2, X2, Y2, Q2, Z2, $3;
          return Nt(this, void 0, void 0, function() {
            var ee2, te2, re2, oe2, ne2, ie2, ae2, se2, ce2, ue2, le2, de2, pe2, he2, fe2, me2, ge2, Ee2, ye2, ve2, Te2, Re2, Oe2, Ie2, Se2, Ce2, Ae2, Me2, be2, Ue2, Pe2, we2, ke2, Le2, De2, xe2, Ge2, Be2, He2, je2, Fe2, We2, Ke2, qe2 = this;
            return At(this, function(ze2) {
              switch (ze2.label) {
                case 0:
                  if (ee2 = (ee2 = this.root.lookup("easemob.pb.CommSyncDL")).decode(e4.payload), te2 = new (f2())(ee2.serverId.low, ee2.serverId.high, ee2.serverId.unsigned).toString(), re2 = new (f2())(ee2.metaId.low, ee2.metaId.high, ee2.metaId.unsigned).toString(), !(Number(re2) > 0))
                    return [3, 23];
                  if (clearTimeout(null === (t4 = this._msgHash[re2]) || void 0 === t4 ? void 0 : t4.messageTimer), !ee2.status)
                    return [3, 22];
                  if (0 !== ee2.status.errorCode)
                    return [3, 21];
                  if (null == (oe2 = this._msgHash[re2]) ? void 0 : oe2.isHandleChatroom) {
                    try {
                      ne2 = "join" === (null === (r2 = this._msgHash[re2]) || void 0 === r2 ? void 0 : r2.operation), (null === (o3 = this._msgHash[re2]) || void 0 === o3 ? void 0 : o3.resolve) instanceof Function && ne2 && this._msgHash[re2].resolve({ type: 0, data: { action: "apply", id: this._msgHash[re2].roomId, result: true, user: this.context.userId } }), (null === (n2 = this._msgHash[re2]) || void 0 === n2 ? void 0 : n2.success) instanceof Function && ne2 && this._msgHash[re2].success({ type: 0, data: { action: "apply", id: this._msgHash[re2].roomId, result: true, user: this.context.userId } }), (null === (i2 = this._msgHash[re2]) || void 0 === i2 ? void 0 : i2.resolve) instanceof Function && !ne2 && this._msgHash[re2].resolve({ type: 0, data: { result: true } }), (null === (a2 = this._msgHash[re2]) || void 0 === a2 ? void 0 : a2.success) instanceof Function && !ne2 && this._msgHash[re2].success({ type: 0, data: { result: true } }), S.has(re2) && (ie2 = S.get(re2), De2 = ie2.rpt, xe2 = ie2.requestName, De2({ isEndApi: true, data: { isSuccess: 1, requestName: xe2, requestMethod: "WEBSOCKET", requestUrl: this.url, code: T.success } }), S.delete(re2));
                    } catch (e5) {
                      S.has(re2) && (ae2 = S.get(re2), De2 = ae2.rpt, xe2 = ae2.requestName, De2({ isEndApi: true, data: { isSuccess: 0, requestName: xe2, requestMethod: "WEBSOCKET", requestUrl: this.url, code: T.failed, codeDesc: "when executing success function error" } }), S.delete(re2)), Be2 = m.create({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: e5 }), this.onError && this.onError(Be2), null === (s2 = this.eventHandler) || void 0 === s2 || s2.dispatch("onError", Be2);
                    }
                    delete this._msgHash[re2];
                  }
                  return !oe2 || oe2.isHandleChatroom ? [3, 20] : (se2 = null, ce2 = "", ue2 = 0, le2 = null, this._msgHash[re2].thirdMessage ? (this._msgHash[re2].thirdMessage.id = ee2.serverId, this._msgHash[re2].thirdMessage.timestamp = ee2.timestamp, [4, et.call(this, this._msgHash[re2].thirdMessage, ee2.status, true, true)]) : [3, 2]);
                case 1:
                  le2 = ze2.sent(), ze2.label = 2;
                case 2:
                  if (0 === ee2.metas.length)
                    return [3, 13];
                  ze2.label = 3;
                case 3:
                  switch (ze2.trys.push([3, 12, , 13]), de2 = ee2.metas[0], pe2 = ee2.status, de2.ns) {
                    case 1:
                      return [3, 4];
                    case 5:
                      return [3, 9];
                  }
                  return [3, 10];
                case 4:
                  return this.useReplacedMessageContents ? [4, et.call(this, de2, pe2, true, true)] : [3, 8];
                case 5:
                  return le2 = ze2.sent(), [4, null === (u2 = null === (c2 = this._localCache) || void 0 === c2 ? void 0 : c2.getInstance()) || void 0 === u2 ? void 0 : u2.getMessageByServerMsgId(re2)];
                case 6:
                  return (he2 = ze2.sent()) ? [4, null === (p3 = null === (l2 = this._localCache) || void 0 === l2 ? void 0 : l2.getInstance()) || void 0 === p3 ? void 0 : p3.putMessageToDB(Ct(Ct(Ct({}, he2), le2), { id: re2 }))] : [3, 8];
                case 7:
                  ze2.sent(), ze2.label = 8;
                case 8:
                  return [3, 11];
                case 9:
                  return (fe2 = _e.parseNotify(ee2.metas[0].payload)).edit_msg && (me2 = fe2.edit_msg, ge2 = me2.count, Ee2 = me2.operator, ye2 = me2.edit_time, ve2 = me2.sender, Te2 = me2.send_time, se2 = { operationTime: ye2, operatorId: Ee2, operationCount: ge2 }, ce2 = ve2, ue2 = Number(Te2)), [3, 11];
                case 10:
                  return B.error("decode local meta error", de2), [3, 11];
                case 11:
                  return [3, 13];
                case 12:
                  return Re2 = ze2.sent(), Be2 = m.create({ type: d.WEBIM_LOAD_MSG_ERROR, message: "decode local meta message error", data: Re2 }), this.onError && this.onError(Be2), null === (h2 = this.eventHandler) || void 0 === h2 || h2.dispatch("onError", Be2), [3, 13];
                case 13:
                  I.has(re2) && (I.get(re2).rpt({ isEndApi: true, data: { isSuccess: 1, requestMethod: "WEBSOCKET", requestUrl: this.url, code: T.success, msgId: te2 } }), I.delete(re2)), ze2.label = 14;
                case 14:
                  return ze2.trys.push([14, 18, , 19]), Oe2 = { localMsgId: re2, serverMsgId: te2 }, se2 && (this._msgHash[re2].modifiedInfo = se2, Ie2 = this._msgHash[re2], Se2 = Ie2.editMessageId, we2 = Ie2.type, Ce2 = Ie2.chatType, Ae2 = Ie2.msg, Me2 = Ie2.to, be2 = Ie2.translations, Ue2 = { id: Se2, type: we2, chatType: Ce2, msg: Ae2, modifiedInfo: se2, to: Me2, from: ce2, time: Number(ue2) }, be2 && (Ue2.translations = be2), Oe2.message = Ue2, null === (y2 = null === (E3 = null === (g2 = this._localCache) || void 0 === g2 ? void 0 : g2.getInstance()) || void 0 === E3 ? void 0 : E3.getMessageByServerMsgId(Se2)) || void 0 === y2 || y2.then(function(e5) {
                    var t5, r3;
                    e5 && "txt" === e5.type && (null === (r3 = null === (t5 = qe2._localCache) || void 0 === t5 ? void 0 : t5.getInstance()) || void 0 === r3 || r3.putMessageToDB(Ct(Ct({}, e5), { msg: Ue2.msg, modifiedInfo: Ue2.modifiedInfo, translations: Ue2.translations })));
                  })), le2 && (Oe2.message = le2), [4, null === (_2 = null === (v2 = this._localCache) || void 0 === v2 ? void 0 : v2.getInstance()) || void 0 === _2 ? void 0 : _2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.SUCCESS })];
                case 15:
                  return ze2.sent(), (null === (R2 = this._msgHash[re2]) || void 0 === R2 ? void 0 : R2.success) instanceof Function ? [4, this._msgHash[re2].success(re2, te2)] : [3, 17];
                case 16:
                  ze2.sent(), ze2.label = 17;
                case 17:
                  return (null === (O2 = this._msgHash[re2]) || void 0 === O2 ? void 0 : O2.resolve) instanceof Function && this._msgHash[re2].resolve(Oe2), [3, 19];
                case 18:
                  return Pe2 = ze2.sent(), Be2 = m.create({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing success function error", data: Pe2 }), this.onError && this.onError(Be2), null === (C2 = this.eventHandler) || void 0 === C2 || C2.dispatch("onError", Be2), [3, 19];
                case 19:
                  this.onReceivedMessage && this.onReceivedMessage({ id: re2, mid: te2, to: this._msgHash[re2].to, time: 0 }), null === (N2 = this.eventHandler) || void 0 === N2 || N2.dispatch("onReceivedMessage", { id: re2, mid: te2, to: this._msgHash[re2].to }), delete this._msgHash[re2], ze2.label = 20;
                case 20:
                  return [3, 22];
                case 21:
                  if (15 === ee2.status.errorCode)
                    (null === (A2 = this._msgHash[re2]) || void 0 === A2 ? void 0 : A2.fail) instanceof Function && this._msgHash[re2].fail({ type: d.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject({ type: d.SERVICE_NOT_ALLOW_MESSAGING_MUTE, reason: "you were muted" }), null === (b2 = null === (M2 = this._localCache) || void 0 === M2 ? void 0 : M2.getInstance()) || void 0 === b2 || b2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL });
                  else if (1 === ee2.status.errorCode) {
                    switch (we2 = void 0, ee2.status.reason) {
                      case "blocked":
                        we2 = d.PERMISSION_DENIED;
                        break;
                      case "group not found":
                        we2 = d.GROUP_NOT_EXIST;
                        break;
                      case "not in group or chatroom":
                        we2 = d.GROUP_NOT_JOINED;
                        break;
                      case "exceed recall time limit":
                        we2 = d.MESSAGE_RECALL_TIME_LIMIT;
                        break;
                      case "message recall disabled":
                        we2 = d.SERVICE_NOT_ENABLED;
                        break;
                      case "not in group or chatroom white list":
                        we2 = d.SERVICE_NOT_ALLOW_MESSAGING;
                        break;
                      case "nonroster":
                        we2 = d.USER_NOT_FRIEND, ee2.status.reason = "not contact";
                        break;
                      case "group is disabled":
                        we2 = d.GROUP_IS_DISABLED, ee2.status.reason = "group is disabled";
                        break;
                      case "limit directed users":
                        we2 = d.MAX_LIMIT;
                        break;
                      case "Sorry, edit limit reached":
                        we2 = d.MAX_LIMIT, ee2.status.reason = "Modify message limit reached";
                        break;
                      case "Sorry, message does not exist":
                        we2 = d.MODIFY_MESSAGE_NOT_EXIST, ee2.status.reason = "The message does not exist.";
                        break;
                      case "Sorry, You do not have permission":
                        we2 = d.PERMISSION_DENIED, ee2.status.reason = "You do not have the modified permission.";
                        break;
                      case "Sorry, format is incorrect":
                        we2 = d.MODIFY_MESSAGE_FORMAT_ERROR, ee2.status.reason = "The modify messaged format error.";
                        break;
                      case "Sorry, edit is not available":
                        we2 = d.SERVICE_NOT_ENABLED, ee2.status.reason = "The message modify function is not activated.";
                        break;
                      case "Sorry, edit fail":
                        we2 = d.MODIFY_MESSAGE_FAILED, ee2.status.reason = "Modify message failed.";
                        break;
                      default:
                        ee2.status.reason.includes("grpID") && ee2.status.reason.includes("does not exist!") ? (we2 = d.CHATROOM_NOT_EXIST, ee2.status.reason = "The chat room dose not exist.") : ee2.status.reason.includes("username") && ee2.status.reason.includes("doesn't exist!") ? we2 = d.USER_NOT_FOUND : "group member list is full!" === ee2.status.reason ? we2 = d.CHATROOM_MEMBERS_FULL : ee2.status.reason.includes("can not join this group") && ee2.status.reason.includes("is in the blacklist") ? (we2 = d.PERMISSION_DENIED, ee2.status.reason = "permission denied") : "can not operate this group, reason: group is disabled" === ee2.status.reason ? we2 = d.GROUP_IS_DISABLED : ee2.status.reason.includes("moderation") ? we2 = d.MESSAGE_MODERATION_BLOCKED : ee2.status.reason.includes("group ID illegal, please check it") ? (we2 = d.REQUEST_PARAMETER_ERROR, ee2.status.reason = "Invalid parameter") : we2 = ee2.status.reason.includes("has create too many chatrooms") || ee2.status.reason.includes("has joined too many chatrooms") ? d.MAX_LIMIT : ee2.status.reason.includes("auto create failed") ? d.SERVER_BUSY : d.SERVER_UNKNOWN_ERROR;
                    }
                    this._msgHash[re2] && ((null === (U2 = this._msgHash[re2]) || void 0 === U2 ? void 0 : U2.isHandleChatroom) ? (Ge2 = m.create({ type: we2, message: ee2.status.reason || "", data: "" }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].error instanceof Function && this._msgHash[re2].error(Ge2), S.has(re2) && (ke2 = T.failed, we2 === d.CHATROOM_NOT_EXIST ? ke2 = T.notFound : we2 === d.CHATROOM_MEMBERS_FULL && (ke2 = T.reachLimit), Le2 = S.get(re2), De2 = Le2.rpt, xe2 = Le2.requestName, De2({ isEndApi: true, data: { isSuccess: 0, requestName: xe2, requestMethod: "WEBSOCKET", requestUrl: this.url, code: ke2, codeDesc: ee2.status.reason } }), S.delete(re2))) : (Ge2 = m.create({ type: we2, message: ee2.status.reason || "", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: we2, reason: ee2.status.reason ? ee2.status.reason : "", data: { id: re2, mid: te2 } }), null === (w2 = null === (P2 = this._localCache) || void 0 === P2 ? void 0 : P2.getInstance()) || void 0 === w2 || w2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })), delete this._msgHash[re2]);
                  } else if (7 === ee2.status.errorCode)
                    "sensitive words" === ee2.status.reason && this._msgHash[re2] ? (Ge2 = m.create({ type: d.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "sensitive words", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: d.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: re2, mid: te2, reason: "sensitive words" } }), null === (L2 = null === (k2 = this._localCache) || void 0 === k2 ? void 0 : k2.getInstance()) || void 0 === L2 || L2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })) : "blocked by mod_antispam" === ee2.status.reason && this._msgHash[re2] ? (Ge2 = m.create({ type: d.MESSAGE_INCLUDE_ILLEGAL_CONTENT, message: "blocked by mod_antispam", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: d.MESSAGE_INCLUDE_ILLEGAL_CONTENT, data: { id: re2, mid: te2, reason: "blocked by mod_antispam" } }), null === (x2 = null === (D2 = this._localCache) || void 0 === D2 ? void 0 : D2.getInstance()) || void 0 === x2 || x2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })) : "user is mute" === ee2.status.reason && this._msgHash[re2] ? (Ge2 = m.create({ type: d.USER_MUTED_BY_ADMIN, message: "user is mute", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail(Ge2), null === (H2 = null === (G2 = this._localCache) || void 0 === G2 ? void 0 : G2.getInstance()) || void 0 === H2 || H2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })) : "traffic limit" === ee2.status.reason && this._msgHash[re2] ? (Ge2 = m.create({ type: d.MESSAGE_CURRENT_LIMITING, message: "traffic limit", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail(Ge2), null === (F2 = null === (j2 = this._localCache) || void 0 === j2 ? void 0 : j2.getInstance()) || void 0 === F2 || F2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL })) : "Sorry, data is too large" === ee2.status.reason && this._msgHash[re2] && (Ge2 = m.create({ type: d.MESSAGE_SIZE_LIMIT, message: "Sorry, data is too large", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail(Ge2), null === (K2 = null === (W2 = this._localCache) || void 0 === W2 ? void 0 : W2.getInstance()) || void 0 === K2 || K2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL }));
                  else if (19 === ee2.status.errorCode)
                    this._msgHash[re2] && (I.has(re2) && (I.get(re2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: d.MESSAGE_EXTERNAL_LOGIC_BLOCKED, codeDesc: ee2.status.reason || "", msgId: te2 } }), I.delete(re2)), Ge2 = m.create({ type: d.MESSAGE_EXTERNAL_LOGIC_BLOCKED, message: ee2.status.reason || "", data: { id: re2, mid: te2 } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: d.MESSAGE_EXTERNAL_LOGIC_BLOCKED, data: { id: re2, mid: te2, reason: ee2.status.reason } }), null === (z2 = null === (q2 = this._localCache) || void 0 === q2 ? void 0 : q2.getInstance()) || void 0 === z2 || z2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL }));
                  else if (this._msgHash[re2]) {
                    I.has(re2) && (I.get(re2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: d.WEBIM_LOAD_MSG_ERROR, codeDesc: (null === (V2 = ee2.status) || void 0 === V2 ? void 0 : V2.reason) || "", msgId: te2 } }), I.delete(re2));
                    try {
                      Ge2 = m.create({ type: d.WEBIM_LOAD_MSG_ERROR, message: (null === (J2 = ee2.status) || void 0 === J2 ? void 0 : J2.reason) || "", data: { id: re2, mid: te2, reason: ee2.status && ee2.status.reason } }), this._msgHash[re2].reject instanceof Function && this._msgHash[re2].reject(Ge2), null === (Y2 = null === (X2 = this._localCache) || void 0 === X2 ? void 0 : X2.getInstance()) || void 0 === Y2 || Y2.updateLocalMessage(re2, { serverMsgId: te2, status: Ne.FAIL }), this._msgHash[re2].fail instanceof Function && this._msgHash[re2].fail({ type: d.WEBIM_LOAD_MSG_ERROR, data: { errorCode: ee2.status && ee2.status.errorCode, reason: ee2.status && ee2.status.reason } });
                    } catch (e5) {
                      Be2 = m.create({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "when executing fail function error", data: e5 }), this.onError && this.onError(Be2), null === (Q2 = this.eventHandler) || void 0 === Q2 || Q2.dispatch("onError", Be2);
                    }
                    delete this._msgHash[re2];
                  } else
                    I.has(re2) && (I.get(re2).rpt({ isEndApi: true, data: { isSuccess: 0, requestMethod: "WEBSOCKET", requestUrl: this.url, code: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, codeDesc: "on message error", msgId: te2 } }), I.delete(re2)), Be2 = m.create({ type: d.WEBIM_CONNCTION_CALLBACK_INNER_ERROR, message: "on message error" }), this.onError && this.onError(Be2), null === (Z2 = this.eventHandler) || void 0 === Z2 || Z2.dispatch("onError", Be2);
                  ze2.label = 22;
                case 22:
                  return [2];
                case 23:
                  if (ee2.metas && 0 !== ee2.metas.length)
                    try {
                      Lt.call(this, ee2.metas, ee2.status);
                    } catch (e5) {
                      Be2 = m.create({ type: d.WEBIM_LOAD_MSG_ERROR, message: "decode message error", data: e5 }), B.error("decode message error", e5), this.onError && this.onError(Be2), null === ($3 = this.eventHandler) || void 0 === $3 || $3.dispatch("onError", Be2);
                    } finally {
                      ee2.isLast ? (B.debug("metas & CommSyncDLMessage.isLast", ee2.isLast), He2 = -1, this._queues.some(function(e5, t5) {
                        return e5.name === ee2.name && (He2 = t5, true);
                      }) && He2 > 0 && this._queues.splice(He2, 1), this._queues.length > 0 && jt.call(this, this._queues[0]), je2 = -1, this.unSyncQueue.some(function(e5, t5) {
                        return e5.name === ee2.queue.name && (je2 = t5, true);
                      }) && this.unSyncQueue.splice(je2, 1), xt.call(this, ee2)) : ee2.nextKey && (Ke2 = new (f2())(ee2.nextKey.low, ee2.nextKey.high, ee2.nextKey.unsigned).toString(), B.debug("nexKey:", Ke2, "this.nextKey:", this.nexKey), Ke2 !== this.nexKey && (this.nexKey = Ke2, qt.call(this, ee2.nextKey, ee2.queue)));
                    }
                  else
                    ee2.isLast ? (B.debug("CommSyncDLMessage.isLast", ee2.isLast), Fe2 = -1, this._queues.some(function(e5, t5) {
                      return e5.name === ee2.queue.name && (Fe2 = t5, true);
                    }) && this._queues.splice(Fe2, 1), this._queues.length > 0 && jt.call(this, this._queues[0]), We2 = -1, this.unSyncQueue.some(function(e5, t5) {
                      return e5.name === ee2.queue.name && (We2 = t5, true);
                    }) && this.unSyncQueue.splice(We2, 1), xt.call(this, ee2)) : ee2.nextKey && (Ke2 = new (f2())(ee2.nextKey.low, ee2.nextKey.high, ee2.nextKey.unsigned).toString(), B.debug("nexKey:", Ke2, "this.nextKey:", this.nexKey), Ke2 !== this.nexKey && (this.nexKey = Ke2, qt.call(this, ee2.nextKey, ee2.queue)));
                  return [2];
              }
            });
          });
        }
        function nr(e4) {
          var t4 = [], r2 = this.root.lookup("easemob.pb.KeyValue"), o3 = [];
          for (var n2 in e4) {
            var i2 = r2.decode(t4);
            if (i2.key = n2, void 0 !== e4[n2]) {
              if ("object" == typeof e4[n2])
                i2.type = 8, i2.stringValue = JSON.stringify(e4[n2]);
              else if ("string" == typeof e4[n2])
                i2.type = 7, i2.stringValue = e4[n2];
              else if ("boolean" == typeof e4[n2])
                i2.type = 1, i2.varintValue = true === e4[n2] ? 1 : 0;
              else if (Number.isInteger(e4[n2]))
                i2.type = 2, i2.varintValue = e4[n2];
              else if ("bigint" == typeof e4[n2] || "symbol" == typeof e4[n2] || "function" == typeof e4[n2] || Number.isNaN(e4[n2]))
                i2.type = 7, i2.stringValue = e4[n2].toString();
              else {
                if ("number" != typeof e4[n2] || Number.isInteger(e4[n2]))
                  continue;
                i2.type = 6, i2.doubleValue = e4[n2];
              }
              o3.push(i2);
            }
          }
          return o3;
        }
        function ir(e4) {
          var t4, r2, o3, n2 = [];
          if (this.root) {
            var i2, a2 = this.root.lookup("easemob.pb.MessageBody.Content").decode(n2);
            switch (i2 = !e4.group && "groupchat" !== (null === (t4 = null == e4 ? void 0 : e4.chatType) || void 0 === t4 ? void 0 : t4.toLowerCase()) || e4.roomType ? e4.group && e4.roomType || "chatroom" === (null === (r2 = null == e4 ? void 0 : e4.chatType) || void 0 === r2 ? void 0 : r2.toLowerCase()) ? "chatRoom" : "singleChat" : "groupChat", e4.type) {
              case "txt":
                a2.type = 0, a2.text = e4.msg;
                break;
              case "img":
                a2.type = 1, e4.body ? (a2.displayName = e4.body.filename, a2.remotePath = e4.body.url, a2.secretKey = e4.body.secret, a2.fileLength = e4.body.file_length, a2.size = e4.body.size, a2.thumbnailDisplayName = e4.body.filename) : e4.file ? (a2.displayName = e4.file.filename, a2.remotePath = e4.file.url, a2.secretKey = e4.file.secret, a2.fileLength = e4.file.file_length, a2.size = e4.file.size, a2.thumbnailDisplayName = e4.file.filename) : (a2.displayName = e4.filename, a2.remotePath = e4.url, a2.secretKey = e4.secret, a2.fileLength = e4.file_length, a2.size = e4.size, a2.thumbnailDisplayName = e4.filename), e4.isBuildCombinedMsg && (a2.remotePath = e4.url, a2.secretKey = e4.secret, a2.size = { height: e4.height, width: e4.width });
                break;
              case "video":
                a2.type = 2, e4.body ? (a2.displayName = e4.body.filename, a2.remotePath = e4.body.url, a2.secretKey = e4.body.secret, a2.fileLength = e4.body.file_length, a2.duration = e4.body.length, a2.thumbnailDisplayName = e4.body.filename, a2.thumbnailRemotePath = this.useOwnUploadFun ? "" : "".concat(e4.body.url, "?vframe=true"), a2.thumbnailSecretKey = this.useOwnUploadFun ? "" : e4.body.secret) : e4.isBuildCombinedMsg && (a2.displayName = e4.filename, a2.remotePath = e4.url, a2.secretKey = e4.secret, a2.fileLength = e4.file_length, a2.duration = e4.length, a2.thumbnailDisplayName = e4.filename, a2.thumbnailRemotePath = e4.thumb, a2.thumbnailSecretKey = e4.thumb_secret);
                break;
              case "loc":
                a2.type = 3, a2.latitude = e4.lat, a2.longitude = e4.lng, a2.address = e4.addr, a2.buildingName = e4.buildingName, a2.latitude = e4.lat;
                break;
              case "audio":
                a2.type = 4, e4.body ? (a2.displayName = e4.body.filename, a2.remotePath = e4.body.url, a2.secretKey = e4.body.secret, a2.fileLength = e4.body.file_length, a2.duration = e4.body.length, a2.thumbnailDisplayName = e4.body.filename) : e4.isBuildCombinedMsg && (a2.displayName = e4.filename, a2.remotePath = e4.url, a2.secretKey = e4.secret, a2.fileLength = e4.file_length, a2.duration = e4.length, a2.thumbnailDisplayName = e4.filename);
                break;
              case "file":
                a2.type = 5, e4.body ? (a2.displayName = e4.body.filename, a2.remotePath = e4.body.url, a2.secretKey = e4.body.secret, a2.fileLength = e4.body.file_length, a2.thumbnailDisplayName = e4.body.filename) : e4.isBuildCombinedMsg && (a2.displayName = e4.filename, a2.remotePath = e4.url, a2.secretKey = e4.secret, a2.fileLength = e4.file_length, a2.thumbnailDisplayName = e4.filename);
                break;
              case "cmd":
                a2.type = 6, a2.action = e4.action;
                break;
              case "custom":
                a2.type = 7, a2.customEvent = e4.customEvent, a2.customExts = nr.call(this, e4.customExts);
                break;
              case "combine":
                a2.type = 0, a2.subType = 0, a2.text = e4.compatibleText, a2.displayName = e4.filename, a2.remotePath = e4.url, a2.secretKey = e4.secret, a2.fileLength = e4.file_length, a2.title = e4.title, a2.summary = e4.summary, a2.combineLevel = e4.combineLevel;
            }
            var s2 = [];
            e4.ext && (s2 = nr.call(this, e4.ext));
            var c2 = this.root.lookup("easemob.pb.MessageBody"), u2 = c2.decode(n2), l2 = e4.from || this.context.jid.name;
            u2.from = { name: e4.isBuildCombinedMsg ? l2 : this.context.jid.name };
            var p3 = e4.to.indexOf("/"), h2 = p3 > -1 ? e4.to.substring(0, p3) : e4.to;
            if (u2.to = { name: h2 }, "channel" === e4.type)
              u2.type = Ot.CHANNEL_ACK;
            else if ("recall" === e4.type)
              u2.type = Ot.RECALL, u2.ackMessageId = e4.ackId;
            else if ("delivery" === e4.type)
              u2.type = Ot.DELIVER_ACK, u2.ackMessageId = e4.ackId;
            else if ("read" === e4.type)
              u2.type = Ot.READ_ACK, u2.ackMessageId = e4.ackId, "groupChat" === i2 && (u2.msgConfig = { allowGroupAck: true }, u2.ackContent = e4.ackContent);
            else if ("chatRoom" === i2)
              u2.type = Ot.CHATROOM;
            else if ("groupChat" === i2) {
              if (u2.type = Ot.GROUPCHAT, e4.msgConfig) {
                var m2 = e4.msgConfig.allowGroupAck;
                u2.msgConfig = { allowGroupAck: !!m2 };
              }
            } else
              "singleChat" === i2 && (u2.type = Ot.SINGLECHAT);
            e4.editMessageId && (u2.type = Ot.EDIT, u2.editMessageId = e4.editMessageId), u2.contents = [a2], u2.ext = s2;
            var g2 = function(e5) {
              var t5 = {};
              return "translations" in e5 && (t5.translations = e5.translations), "isChatThread" in e5 && e5.isChatThread && (t5.thread = {}), Object.keys(t5).length > 0 ? JSON.stringify(t5) : "";
            }(e4);
            g2 && (u2.meta = g2), u2 = c2.encode(u2).finish();
            var E3 = this.root.lookup("easemob.pb.Meta"), y2 = E3.decode(n2);
            y2.id = e4.id;
            var v2 = "easemob.com";
            if ("chatRoom" !== i2 && "groupChat" !== i2 || (v2 = "conference.easemob.com"), y2.to = { appKey: this.appKey, name: h2, domain: v2 }, p3 > -1 && (y2.to.clientResource = e4.to.substring(p3 + 1, e4.to.length)), "chatRoom" === i2 && (y2.ext = nr.call(this, function(e5) {
              return { chatroom_msg_tag: "high" === e5.priority ? 0 : "low" === e5.priority ? 2 : 1 };
            }(e4))), "recall" === e4.type && e4.metaExt && (y2.ext = nr.call(this, { recallMessageExtensionInfo: e4.metaExt })), y2.ns = 1, y2.payload = u2, y2.routetype = e4.deliverOnlineOnly ? 1 : 0, "singleChat" !== i2 && Array.isArray(e4.receiverList) && (null === (o3 = e4.receiverList) || void 0 === o3 ? void 0 : o3.length) > 0 && (y2.directedUsers = e4.receiverList, y2.routetype = 2), e4.isBuildCombinedMsg)
              return y2.timestamp = f2().fromValue(e4.time), E3.encode(y2).finish();
            var T2 = this.root.lookup("easemob.pb.CommSyncUL"), _2 = T2.decode(n2);
            _2.meta = y2, !e4.isPing && sr.call(this, e4, y2), _2 = T2.encode(_2).finish();
            var R2 = this.root.lookup("easemob.pb.MSync"), O2 = R2.decode(n2);
            return O2.version = this.version, O2.encryptType = this.encryptType, O2.command = 0, O2.payload = _2, R2.encode(O2).finish();
          }
          e4.fail && e4.fail({ type: d.WEBIM_CONNCTION_CLIENT_OFFLINE, message: "Not logged in" });
        }
        function ar(e4) {
          var t4, r2, o3 = this, n2 = Ct({}, e4);
          if (e4.file)
            return n2.accessToken = this.token, n2.appKey = this.appKey, n2.apiUrl = this.apiUrl, n2.body && n2.body.url ? ir.call(this, n2) : new Promise(function(t5, r3) {
              var i3 = n2.onFileUploadComplete;
              n2.onFileUploadComplete = function(t6) {
                var r4, a3, s3, c2, u2, l2;
                if (t6.entities[0]["file-metadata"]) {
                  var d2 = t6.entities[0]["file-metadata"]["content-length"];
                  n2.file_length = d2, n2.filetype = t6.entities[0]["file-metadata"]["content-type"], d2 > 204800 && (n2.thumbnail = true);
                }
                var p3 = "".concat(o3.apiUrl, "/").concat(o3.orgName, "/").concat(o3.appName, "/chatfiles/").concat(t6.entities[0].uuid);
                n2.body = { type: n2.type || "file", secret: t6.entities[0]["share-secret"], filename: n2.file.filename || n2.filename, url: p3, length: n2.length || 0, filetype: n2.filetype || n2.file.filetype, file_length: (null === (a3 = null === (r4 = n2.file) || void 0 === r4 ? void 0 : r4.data) || void 0 === a3 ? void 0 : a3.size) || 0, size: { width: n2.width || 0, height: n2.height || 0 } }, n2.file.url = t6.uri, e4.secret = t6.entities[0]["share-secret"], t6.url = e4.url = "".concat(p3, "?em-redirect=true&share-secret=").concat(t6.entities[0]["share-secret"]), e4.file_length = n2.file_length = (null === (c2 = null === (s3 = n2.file) || void 0 === s3 ? void 0 : s3.data) || void 0 === c2 ? void 0 : c2.size) || 0, "img" === n2.type && (e4.thumb = "".concat(e4.url, "&thumbnail=true"), t6.thumb = "".concat(t6.url, "&thumbnail=true")), "video" === n2.type && (e4.thumb = "".concat(e4.url, "&vframe=true"), e4.thumb_secret = t6.entities[0]["share-secret"], t6.thumb = "".concat(t6.url, "&vframe=true")), i3 instanceof Function && i3(t6, n2.id);
                var h2 = ir.call(o3, n2);
                I.size <= C && I.set(n2.id, { rpt: o3.dataReport.geOperateFun({ operationName: E2.SEND_MSG }) }), null === (l2 = null === (u2 = o3._localCache) || void 0 === u2 ? void 0 : u2.getInstance()) || void 0 === l2 || l2.storeMessage(e4, Ne.INPROGRESS), pr.call(o3, h2);
              }, _e.uploadFile.call(o3, n2, E2.UPLOAD_MSG_ATTACH);
            });
          if ("combine" === e4.type) {
            n2.accessToken = this.token, n2.appKey = this.appKey, n2.apiUrl = this.apiUrl;
            var i2 = n2.onFileUploadComplete, a2 = n2.onFileUploadError;
            return new Promise(function(t5, r3) {
              var s3, c2, u2, l2;
              if ((null === (s3 = e4.messageList) || void 0 === s3 ? void 0 : s3.length) > 300 || 0 === (null === (c2 = e4.messageList) || void 0 === c2 ? void 0 : c2.length))
                return o3._msgHash[n2.id].reject({ type: d.MAX_LIMIT, message: "The number of combined messages exceeded the limit." });
              var p3 = Mt([], e4.messageList, true), h2 = 0;
              if (p3.forEach(function(e5) {
                (null == e5 ? void 0 : e5.combineLevel) > h2 && (h2 = null == e5 ? void 0 : e5.combineLevel);
              }), n2.combineLevel = h2 + 1, n2.combineLevel > 10)
                return o3._msgHash[n2.id].reject({ type: d.MAX_LIMIT, message: "The level of the merged message exceeded the limit." });
              var f3 = cr.call(o3, p3), m2 = function(t6, r4) {
                var a3, s4, c3, u3, l3, d2, p4 = "".concat(o3.apiUrl, "/").concat(o3.orgName, "/").concat(o3.appName, "/chatfiles/").concat(t6.entities[0].uuid), h3 = null === (a3 = t6.entities[0]) || void 0 === a3 ? void 0 : a3["share-secret"], f4 = p4 + "?em-redirect=true";
                h3 && (f4 = "".concat(f4, "&share-secret=").concat(h3)), i2 instanceof Function && i2({ url: f4, secret: h3 }), e4.url = f4, e4.secret = h3, n2.url = f4, n2.secret = t6.entities[0]["share-secret"], n2.filename = (null === (s4 = n2.file) || void 0 === s4 ? void 0 : s4.filename) || (null == r4 ? void 0 : r4.fileName), n2.file_length = (null === (u3 = null === (c3 = n2.file) || void 0 === c3 ? void 0 : c3.data) || void 0 === u3 ? void 0 : u3.size) || (null == r4 ? void 0 : r4.fileLength) || 0, null === (d2 = null === (l3 = o3._localCache) || void 0 === l3 ? void 0 : l3.getInstance()) || void 0 === d2 || d2.storeMessage(e4, Ne.INPROGRESS);
                var m3 = ir.call(o3, n2);
                pr.call(o3, m3);
              }, g2 = _e.getEnvInfo();
              if ("web" !== g2.platform && "node" !== g2.platform && "quick_app" !== g2.platform && (null === (l2 = null === (u2 = g2.global) || void 0 === u2 ? void 0 : u2.canIUse) || void 0 === l2 ? void 0 : l2.call(u2, "getFileSystemManager"))) {
                var y2 = g2.global.getFileSystemManager(), v2 = "".concat(o3.apiUrl, "/").concat(o3.orgName, "/").concat(o3.appName, "/chatfiles");
                y2.writeFile({ filePath: "".concat(g2.global.env.USER_DATA_PATH, "/combine"), data: f3.buffer, encoding: "binary", success: function(e5) {
                  g2.global.uploadFile({ url: v2, filePath: "".concat(g2.global.env.USER_DATA_PATH, "/combine"), name: "file", header: { "Content-Type": "multipart/form-data", Authorization: "Bearer " + n2.accessToken }, success: function(e6) {
                    if (200 === e6.statusCode) {
                      B.debug("upload success", e6);
                      var t6 = JSON.parse(e6.data);
                      m2(t6, { fileName: "combine", fileLength: f3.length });
                    } else
                      B.debug("upload fail"), n2.onFileUploadError instanceof Function && n2.onFileUploadError(e6), this._msgHash[n2.id].reject({ type: d.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e6 });
                  }, fail: function(t6) {
                    B.debug("upload fail"), n2.onFileUploadError instanceof Function && n2.onFileUploadError(e5), this._msgHash[n2.id].reject({ type: d.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: t6 });
                  } });
                }, fail: function(e5) {
                  B.debug("write file fail", e5), this._msgHash[n2.id].reject({ type: d.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e5 });
                } });
              } else {
                var T2 = new File([f3], "combine", { type: "application/octet-stream" }), _2 = { url: URL.createObjectURL(T2), filename: n2.id, data: T2 };
                n2.file = _2, n2.onFileUploadComplete = function(e5) {
                  m2(e5);
                }, n2.onFileUploadError = function(e5) {
                  a2 instanceof Function && a2(e5), o3._msgHash[n2.id].reject({ type: d.WEBIM_UPLOADFILE_ERROR, message: "Failed to upload the merge message.Please try again", data: e5 });
                }, _e.uploadFile.call(o3, n2, E2.UPLOAD_MSG_ATTACH);
              }
            });
          }
          "img" === e4.type && (n2.body || (n2.body = Ct(Ct({}, n2), { size: { width: n2.width || 0, height: n2.height || 0 } }))), null === (r2 = null === (t4 = this._localCache) || void 0 === t4 ? void 0 : t4.getInstance()) || void 0 === r2 || r2.storeMessage(e4, Ne.INPROGRESS);
          var s2 = ir.call(this, n2);
          pr.call(this, s2);
        }
        function sr(e4, t4) {
          e4.editMessageId || bt.includes(e4.type) && (this._msgHash[e4.id].thirdMessage = t4);
        }
        function cr(e4) {
          for (var t4 = Uint8Array.from("cm", function(e5) {
            return e5.charCodeAt(0);
          }), r2 = 0; r2 < e4.length; r2++) {
            for (var o3 = e4[r2], n2 = Ct(Ct({}, o3), { isBuildCombinedMsg: true }), i2 = this.mSync.encodeChatMsg.call(this, n2), a2 = i2.length, s2 = new Uint8Array(4), c2 = 0; c2 < 4; c2++)
              s2[c2] = a2 >> 8 * (3 - c2) & 255;
            B.debug("message length:", s2);
            var u2 = new Uint8Array(t4.length + s2.length + i2.length);
            u2.set(t4), u2.set(s2, t4.length), u2.set(i2, t4.length + s2.length), t4 = u2;
          }
          var l2 = new Uint8Array(t4.length + 1), d2 = 0;
          for (r2 = 2; r2 < t4.length; r2++)
            r2 % 2 == 1 && (d2 ^= t4[r2]);
          return l2.set(t4), B.debug("checkResult:", d2), l2[t4.length] = d2, l2;
        }
        function ur(e4, t4, r2) {
          var o3 = [], n2 = this.root.lookup("easemob.pb.MUCBody"), i2 = e4.roomId, a2 = e4.ext, s2 = void 0 === a2 ? "" : a2, c2 = e4.leaveOtherRooms, u2 = void 0 !== c2 && c2, l2 = n2.decode(o3);
          l2.mucId = { appKey: this.appKey, name: i2, domain: "conference.easemob.com" }, l2.operation = "join" === r2 ? 2 : 3, l2.from = { name: this.context.userId }, l2.isChatroom = true, "join" === r2 && (l2.ext = s2, l2.leaveOtherRooms = u2), l2 = n2.encode(l2).finish();
          var d2 = this.root.lookup("easemob.pb.Meta").decode(o3);
          d2.id = t4, d2.from = { appKey: this.appKey, name: this.context.userId, domain: "easemob.com", client_resource: this.context.jid.clientResource }, d2.to = { domain: "easemob.com" }, d2.ns = 2, d2.payload = l2;
          var p3 = this.root.lookup("easemob.pb.CommSyncUL"), h2 = p3.decode(o3);
          h2.meta = d2, h2 = p3.encode(h2).finish();
          var f3 = this.root.lookup("easemob.pb.MSync"), m2 = f3.decode(o3);
          return m2.version = this.version, m2.encryptType = this.encryptType, m2.command = 0, m2.payload = h2, f3.encode(m2).finish();
        }
        function lr(e4, t4) {
          var r2 = _e.getUniqueId(), o3 = ur.call(this, e4, r2, t4), n2 = "join" === t4 ? E2.JOIN_CHATROOM : E2.QUIT_CHATROOM, i2 = this.dataReport.geOperateFun({ operationName: n2 });
          return S.size <= C && S.set(r2, { rpt: i2, requestName: n2 }), pr.call(this, Ct(Ct({}, e4), { isHandleChatroom: true, joinMsg: o3, id: r2, operation: t4 }), r2);
        }
        function dr(e4) {
          var t4 = this;
          return new Promise(function(r2, o3) {
            var n2, i2, a2, s2, c2, u2;
            if (B.debug("call send"), t4.logOut)
              return B.debug("send message failed", d.WEBIM_CONNECTION_CLOSED), o3({ type: d.WEBIM_CONNECTION_CLOSED, message: "not login" });
            if (!e4.id || "string" != typeof e4.id || "" === e4.id)
              return o3({ type: d.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "id"' });
            if (!e4.to || "string" != typeof e4.to || "" === e4.to)
              return o3({ type: d.MESSAGE_PARAMETER_ERROR, message: 'Missing required parameter: "to"' });
            var l2 = "file" === e4.type || "img" === e4.type || "audio" === e4.type || "video" === e4.type, p3 = "delivery" === e4.type || "read" === e4.type || "channel" === e4.type, h2 = "cmd" === e4.type, f3 = "recall" === e4.type, m2 = null == e4 ? void 0 : e4.editMessageId, g2 = !(p3 || f3 || h2 || m2);
            if (e4.id) {
              if (!l2 && !p3 || l2 && t4.useOwnUploadFun) {
                var y2 = "recall" === e4.type ? E2.SEND_RECALL_MSG : E2.SEND_MSG;
                m2 && (y2 = E2.MODIFY_MESSAGE), I.size <= C && I.set(e4.id, { rpt: t4.dataReport.geOperateFun({ operationName: y2 }) });
              }
              g2 && (null === (i2 = null === (n2 = t4._localCache) || void 0 === n2 ? void 0 : n2.getInstance()) || void 0 === i2 || i2.storeMessage(e4, Ne.CREATE)), t4._msgHash[e4.id] = Ct(Ct({}, e4), { resolve: r2, reject: o3 });
            }
            if (l2 || "combine" === e4.type)
              return ar.call(t4, e4);
            if ("txt" === e4.type && (null === (a2 = e4.msgConfig) || void 0 === a2 ? void 0 : a2.languages) && Array.isArray(null === (s2 = e4.msgConfig) || void 0 === s2 ? void 0 : s2.languages) && e4.msgConfig.languages.length > 0) {
              var v2 = t4.translateMessage || t4.translation.translateMessage;
              if (!v2)
                throw new Error("there is no method to translate message");
              v2.call(t4, { text: e4.msg, languages: e4.msgConfig.languages }).then(function(r3) {
                var o4, n3, i3, a3 = null === (o4 = r3.data[0]) || void 0 === o4 ? void 0 : o4.translations;
                a3 = a3.map(function(e5) {
                  return { code: e5.to, text: e5.text };
                }), e4.translations = a3, t4._msgHash[e4.id].translations = a3, null === (i3 = null === (n3 = t4._localCache) || void 0 === n3 ? void 0 : n3.getInstance()) || void 0 === i3 || i3.storeMessage(e4, Ne.INPROGRESS);
                var s3 = ir.call(t4, e4);
                pr.call(t4, s3, e4.id);
              }).catch(function(e5) {
                o3(e5);
              });
            } else {
              g2 && (null === (u2 = null === (c2 = t4._localCache) || void 0 === c2 ? void 0 : c2.getInstance()) || void 0 === u2 || u2.storeMessage(e4, Ne.INPROGRESS));
              var T2 = ir.call(t4, e4);
              pr.call(t4, T2, e4.id);
            }
          });
        }
        function pr(e4, t4) {
          var r2, o3 = this;
          if (e4.isHandleChatroom) {
            if (!this.isOpened()) {
              var n2 = { data: "", type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
              if (S.has(e4.id)) {
                var i2 = S.get(e4.id);
                (0, i2.rpt)({ isEndApi: true, data: { isSuccess: 0, requestName: i2.requestName, requestMethod: "WEBSOCKET", requestUrl: this.url, code: T.disconnect, codeDesc: "websocket has been disconnected" } }), S.delete(e4.id);
              }
              return Promise.reject(n2);
            }
            return new Promise(function(r3, n3) {
              var i3;
              o3._msgHash[e4.id] = Ct(Ct({}, e4), { resolve: r3, reject: n3 }), i3 = "miniCore" === o3.name ? e4.joinMsg : wt.call(o3, e4.joinMsg, t4);
              var a3 = t4 && setTimeout(function() {
                var t5, r4, n4;
                if (o3._msgHash[e4.id]) {
                  var i4 = { type: d.REQUEST_TIMEOUT, message: "request timeout" };
                  null === (r4 = (t5 = o3._msgHash[e4.id]).reject) || void 0 === r4 || r4.call(t5, i4), clearTimeout(null === (n4 = o3._msgHash[e4.id]) || void 0 === n4 ? void 0 : n4.messageTimer), delete o3._msgHash[e4.id], o3.reconnecting || o3.reconnect(true);
                }
              }, W);
              o3._msgHash[e4.id].messageTimer = a3, o3.sock.send(i3);
            });
          }
          if (!this.isOpened())
            return null === (r2 = this.unMSyncSendMsgMap) || void 0 === r2 || r2.set(t4, e4), !this.logOut && this.autoReconnectNumTotal < this.autoReconnectNumMax && (B.debug("need to reconnect", this.autoReconnectNumTotal, this.autoReconnectNumMax), this.offLineSendConnecting = true, this.reconnecting || this.reconnect()), void (this.onError && this.onError({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }));
          var a2, s2 = t4 && setTimeout(function() {
            var e5, r3, n3;
            if (o3._msgHash[null != t4 ? t4 : ""]) {
              var i3 = { type: d.MESSAGE_SEND_TIMEOUT, message: "send message timeout" };
              null === (r3 = (e5 = o3._msgHash[null != t4 ? t4 : ""]).reject) || void 0 === r3 || r3.call(e5, i3), clearTimeout(null === (n3 = o3._msgHash[null != t4 ? t4 : ""]) || void 0 === n3 ? void 0 : n3.messageTimer), delete o3._msgHash[null != t4 ? t4 : ""], o3.reconnecting || o3.reconnect(true);
            }
          }, W);
          this._msgHash[null != t4 ? t4 : ""] && (this._msgHash[null != t4 ? t4 : ""].messageTimer = s2), a2 = "miniCore" === this.name ? e4 : wt.call(this, e4, t4), this.sock.send(a2);
        }
        var hr = function(e4, t4) {
          return e4.send = dr, e4.sendMsg = dr, B.debug("init Msync by ".concat(e4.name)), { generateProvision: Pt.bind(e4), base64transform: wt.bind(e4), distributeMeta: kt.bind(e4), decodeMeta: Lt.bind(e4), decodeUnreadDL: Gt.bind(e4), _rebuild: Bt.bind(e4), _lastsession: Ft.bind(e4), receiveProvision: zt.bind(e4), isInQueue: $t.bind(e4), decodeNotice: er.bind(e4), decodeMSync: tr.bind(e4), distributeMSync: rr.bind(e4), encodeChatMsg: ir.bind(e4), upLoadFile: ar.bind(e4), send: dr.bind(e4), stopHeartBeat: Qt.bind(e4), handleChatRoom: lr.bind(e4), sendUnreadDeal: Xt.bind(e4) };
        }, fr = ["onTextMessage", "onFileMessage", "onAudioMessage", "onVideoMessage", "onImageMessage", "onLocationMessage", "onCustomMessage", "onCMDMessage"], mr = function() {
          function e4(e5, t4, r2) {
            this.handlerData = {}, this.handlerData = {}, e5.addEventHandler = this.addEventHandler.bind(this), e5.removeEventHandler = this.removeEventHandler.bind(this);
          }
          return e4.prototype.addEventHandler = function(e5, t4) {
            this.handlerData[e5] = t4;
          }, e4.prototype.removeEventHandler = function(e5) {
            delete this.handlerData[e5];
          }, e4.prototype.dispatch = function(e5, t4) {
            for (var r2 in fr.includes(e5) && t4 ? B.debug("dispatch event: " + e5, { id: t4.id, type: t4.type, time: t4.time, from: t4.from, to: t4.to, chatType: t4.chatType }) : "onMessage" === e5 ? B.debug("dispatch event: " + e5, null == t4 ? void 0 : t4.length) : B.debug("dispatch event: " + e5, t4 || ""), this.handlerData) {
              var o3 = this.handlerData[r2][e5];
              o3 && o3(t4);
            }
          }, e4;
        }(), gr = function() {
        };
        function Er(e4) {
          this.onOpened = e4.onOpened || gr, this.onPresence = e4.onPresence || gr, this.onTextMessage = e4.onTextMessage || gr, this.onPictureMessage = e4.onPictureMessage || gr, this.onAudioMessage = e4.onAudioMessage || gr, this.onVideoMessage = e4.onVideoMessage || gr, this.onFileMessage = e4.onFileMessage || gr, this.onLocationMessage = e4.onLocationMessage || gr, this.onCmdMessage = e4.onCmdMessage || gr, this.onCustomMessage = e4.onCustomMessage || gr, this.onReceivedMessage = e4.onReceivedMessage || gr, this.onDeliveredMessage = e4.onDeliveredMessage || gr, this.onReadMessage = e4.onReadMessage || gr, this.onRecallMessage = e4.onRecallMessage || gr, this.onChannelMessage = e4.onChannelMessage || gr, this.onError = e4.onError || gr, this.onOffline = e4.onOffline || gr, this.onOnline = e4.onOnline || gr, this.onStatisticMessage = e4.onStatisticMessage || gr, this.onContactInvited = e4.onContactInvited || gr, this.onContactAgreed = e4.onContactAgreed || gr, this.onContactRefuse = e4.onContactRefuse || gr, this.onContactDeleted = e4.onContactDeleted || gr, this.onContactAdded = e4.onContactAdded || gr, this.onTokenWillExpire = e4.onTokenWillExpire || gr, this.onTokenExpired = e4.onTokenExpired || gr, this.onClosed = e4.onClosed || gr, this.onPresenceStatusChange = e4.onPresenceStatusChange || gr;
        }
        var yr = { biz: "", debug: false, token: "" }, vr = "https://data-reporting.agora.io/report", Tr = "https://data-reporting.sh.agoralab.co/report", _r = function(e4) {
          var t4 = Number(g[e4]);
          return t4 === g.USER_LOGIN ? "MANUALLOGIN" : t4 === g.MSYNC_SENDMESSAGE ? "SENDMESSAGE" : t4 > g.UNKNOWOPERATION && t4 < g.REST_OPERATE ? "REST" : t4 > g.REST_OPERATE && t4 < g.MSYNC_OPERATE ? "MESSAGE" : t4 > g.MSYNC_OPERATE && t4 < g.ROSTER_OPERATE ? "ROSTER" : t4 > g.ROSTER_OPERATE && t4 < g.USER_OPERATE ? "USER" : t4 > g.USER_OPERATE && t4 < g.GROUP_OPERATE ? "GROUP" : t4 > g.GROUP_OPERATE && t4 < g.CHATROOM_OPERATE ? "CHATROOM" : "OPERATION";
        }, Rr = function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, Or = function(e4) {
          return [de.BAIDU, de.WX, de.DD, de.ZFB, de.TT, de.QUICK_APP, de.UNI].includes(e4.platform);
        }, Ir = function() {
          return e4 = 1, t4 = 99999, e4 = Math.ceil(e4), t4 = Math.floor(t4), Math.floor(Math.random() * (t4 - e4)) + e4;
          var e4, t4;
        }, Sr = {}, Cr = 1e3, Nr = function() {
          function e4(e5) {
            this.eventQueue = [], this.stock = Cr, this.config = e5, this.governor();
          }
          return e4.prototype.add = function(e5) {
            this.stock <= 0 ? console.warn("Event Report limit ".concat(Cr, " per minute")) : (this.eventQueue.push(e5), this.consume(), this.stock -= 1);
          }, e4.prototype.consume = function() {
            var e5 = this;
            0 !== this.eventQueue.length && (this.timer && this.eventQueue.length <= 10 && clearTimeout(this.timer), this.timer = setTimeout(function() {
              var t4, r2 = e5.eventQueue.splice(0, 10), o3 = r2.filter(function(e6) {
                return e6.appId === r2[0].appId;
              }), n2 = r2.filter(function(e6) {
                return e6.appId !== r2[0].appId;
              });
              (t4 = e5.eventQueue).unshift.apply(t4, n2), e5.batchSend(o3);
            }, 1e3));
          }, e4.prototype.governor = function() {
            var e5 = this, t4 = setInterval(function() {
              e5.stock = Cr;
            }, 6e4);
            "undefined" != typeof addEventListener && addEventListener("beforeunload", function() {
              clearInterval(t4);
            });
          }, e4.prototype.batchSend = function(e5) {
            var t4, r2;
            if (void 0 === e5 && (e5 = []), 0 !== e5.length)
              try {
                var o3 = e5.map(function(e6) {
                  e6.biz, e6.appId;
                  var t5 = e6.eventId, r3 = function(e7, t6) {
                    var r4 = {};
                    for (var o4 in e7)
                      Object.prototype.hasOwnProperty.call(e7, o4) && t6.indexOf(o4) < 0 && (r4[o4] = e7[o4]);
                    if (null != e7 && "function" == typeof Object.getOwnPropertySymbols) {
                      var n2 = 0;
                      for (o4 = Object.getOwnPropertySymbols(e7); n2 < o4.length; n2++)
                        t6.indexOf(o4[n2]) < 0 && Object.prototype.propertyIsEnumerable.call(e7, o4[n2]) && (r4[o4[n2]] = e7[o4[n2]]);
                    }
                    return r4;
                  }(e6, ["biz", "appId", "eventId"]);
                  return { eventId: Number(t5), body: r3 };
                });
                !function(e6, t5) {
                  try {
                    var r3 = t5.biz, o4 = t5.appId, n2 = t5.data, i2 = t5.debug, a2 = t5.onSuccess;
                    if (!r3)
                      throw new Error("biz is not defined");
                    Sr.global || (Sr = _e.getEnvInfo());
                    var s2 = Sr;
                    if (Or(s2)) {
                      var c2 = { url: i2 ? Tr : vr, data: n2, method: "POST", timeout: q, success: function() {
                        null == a2 || a2();
                      }, fail: function() {
                      }, complete: function() {
                      } }, u2 = { token: e6, appid: null != o4 ? o4 : "", sendts: "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3)), biz: r3, debug: "".concat(i2) };
                      if ("zfb" === s2.platform || "dd" === s2.platform ? c2.headers = u2 : c2.header = u2, "dd" === s2.platform)
                        return s2.global.httpRequest(c2);
                      s2.global.request(c2);
                    } else {
                      var l2 = new XMLHttpRequest();
                      l2.onreadystatechange = function() {
                        2 === l2.readyState && (null == a2 || a2());
                      }, l2.open("POST", i2 ? Tr : vr), l2.setRequestHeader("Content-Type", "application/json"), l2.setRequestHeader("token", e6), l2.setRequestHeader("appid", null != o4 ? o4 : ""), l2.setRequestHeader("sendts", "".concat(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3))), l2.setRequestHeader("biz", r3), l2.setRequestHeader("debug", "".concat(i2)), l2.send(JSON.stringify(n2));
                    }
                  } catch (e7) {
                    console.error(e7);
                  }
                }(this.config.token, { biz: null === (t4 = e5[0]) || void 0 === t4 ? void 0 : t4.biz, appId: null === (r2 = e5[0]) || void 0 === r2 ? void 0 : r2.appId, data: o3, debug: this.config.debug, onSuccess: this.consume.bind(this) });
              } catch (e6) {
                console.error(e6);
              }
          }, e4;
        }(), Ar = function() {
          return Ar = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, Ar.apply(this, arguments);
        }, Mr = new (function() {
          function e4(e5) {
            this.inited = false, this.appId = "", this.biz = "", this.eventQueue = {}, this.config = yr, e5 && this.init(e5);
          }
          return e4.prototype.init = function(e5) {
            var t4;
            if (void 0 === e5 && (e5 = {}), !e5.biz || !e5.token)
              throw new Error("Event Report: biz or token is not defined");
            try {
              this.appId = null !== (t4 = e5.appId) && void 0 !== t4 ? t4 : "", this.biz = e5.biz, this.config = Ar(Ar({}, yr), e5), this.eventQueue = new Nr(this.config), this.log(e5), this.inited = true;
            } catch (e6) {
              console.error(e6);
            }
          }, e4.prototype.send = function(e5, t4, r2) {
            var o3;
            if (void 0 === t4 && (t4 = {}), this.inited) {
              var n2 = Ar(Ar({}, t4), { eventId: Number(e5), biz: this.biz, appId: null !== (o3 = null == r2 ? void 0 : r2.appId) && void 0 !== o3 ? o3 : this.appId });
              this.eventQueue.add(n2), this.log(n2);
            } else
              console.error("Event Report: init is not called");
          }, e4.prototype.log = function(e5) {
            try {
              if (this.config.debug) {
                var t4 = e5.payload, r2 = function(e6, t5) {
                  var r3 = {};
                  for (var o3 in e6)
                    Object.prototype.hasOwnProperty.call(e6, o3) && t5.indexOf(o3) < 0 && (r3[o3] = e6[o3]);
                  if (null != e6 && "function" == typeof Object.getOwnPropertySymbols) {
                    var n2 = 0;
                    for (o3 = Object.getOwnPropertySymbols(e6); n2 < o3.length; n2++)
                      t5.indexOf(o3[n2]) < 0 && Object.prototype.propertyIsEnumerable.call(e6, o3[n2]) && (r3[o3[n2]] = e6[o3[n2]]);
                  }
                  return r3;
                }(e5, ["payload"]);
                console.log("%c Event Report: ".concat(this.config.biz, " "), "background: #8A97FC; color: #fff"), console.table(r2), t4 && (console.info("payload:"), console.table(t4));
              }
            } catch (e6) {
              console.error(e6);
            }
          }, e4;
        }())(), br = function() {
          return br = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, br.apply(this, arguments);
        }, Ur = { requestName: "", subrequestid: "1", requestMethod: "GET", requestUrl: "", requestElapse: 0, code: 0, codeDesc: "", isLastApi: 0, isSuccess: 1 }, Pr = function() {
          function e4(e5) {
            this.platform = _e.getEnvInfo(), this.isReportDt = e5.isReport || false, this.isCollectDt = true, Or(this.platform) && !this.isReportDt && (this.isCollectDt = false), this.eventQueue = [], this.accessChannel = "direct", this.options = function(e6, t4) {
              t4.platform || (t4 = _e.getEnvInfo());
              var r2 = e6.org, o3 = e6.appkey, n2 = e6.deviceId, i2 = e6.sdkVersion, a2 = (null === navigator || void 0 === navigator ? void 0 : navigator.userAgent) || "".concat(t4.platform, "_mini_program");
              return { org: r2, appkey: o3, deviceId: n2, sdkServiceId: "sid_".concat(_e.getUniqueId(), "_").concat(Ir()), did: a2, sdkVersion: i2, os: 7, sdkProduct: _.web };
            }(e5, this.platform), this.sid = this.options.sdkServiceId, this.init(e5);
          }
          return e4.getInstance = function() {
            return e4.instance;
          }, e4.prototype.getServiceId = function() {
            return this.sid || "sid_0";
          }, e4.prototype.setIsReportDt = function(e5) {
            this.isReportDt = e5, e5 && this.rptEventQueue();
          }, e4.prototype.setIsCollectDt = function(e5) {
            this.isCollectDt = e5, e5 || (this.eventQueue = []);
          }, e4.prototype.rptEventQueue = function() {
            var e5 = this;
            this.eventQueue.length && this.eventQueue.forEach(function(t4, r2) {
              Mr.send(t4.eventId, t4.dt), r2 >= e5.eventQueue.length - 1 && (e5.eventQueue = []);
            });
          }, e4.prototype.init = function(t4) {
            e4.instance || (e4.instance = this, Mr.init({ biz: "im", token: "32f24ab2ddb74f508aa9286c356cec84", appId: t4.appkey, debug: false }), this.reportInit());
          }, e4.prototype.reportInit = function() {
            if (this.isCollectDt) {
              var e5 = this.options, t4 = e5.did, r2 = e5.os, o3 = e5.sdkVersion, n2 = e5.deviceId;
              this.reportData(9674, { did: t4, os: r2, sdkVersion: o3, deviceId: n2 });
            }
          }, e4.prototype.geOperateFun = function(e5) {
            var t4 = this;
            if (!this.isCollectDt)
              return function() {
              };
            var r2 = 1, o3 = 0, n2 = "", i2 = Rr(), a2 = e5.uid, s2 = e5.operationName;
            a2 && (this.uid = a2);
            var c2 = { uid: this.uid, operationId: "opr_".concat(_e.getUniqueId(), "_").concat(Ir()), requestid: "req_".concat(_e.getUniqueId(), "_").concat(Ir()), operationName: s2 };
            return function(e6) {
              var a3, u2, l2, d2;
              if (e6.data.isSuccess ? (o3 = 0, n2 = "") : (0 === e6.data.code && (e6.data.code = A), o3 = null !== (a3 = e6.data.code) && void 0 !== a3 ? a3 : o3, n2 = null !== (u2 = e6.data.codeDesc) && void 0 !== u2 ? u2 : n2), (null === (l2 = e6.data) || void 0 === l2 ? void 0 : l2.accessChannel) && (t4.accessChannel = null === (d2 = e6.data) || void 0 === d2 ? void 0 : d2.accessChannel), e6.isRetry ? (r2++, e6.data.subrequestid = "".concat(r2)) : (c2.requestid = "req_".concat(_e.getUniqueId(), "_").concat(Ir()), r2 = 1), e6.data.isLastApi) {
                var p3 = Rr();
                e6.data.requestElapse = p3 - i2, e6.data.requestMethod = "", e6.data.subrequestid = "0", e6.data.code = 200 === o3 ? 0 : o3, e6.data.codeDesc = n2;
              } else
                e6.data.requestName || (e6.data.requestName = s2);
              e6.data.requestElapse || (e6.data.requestElapse = Rr() - i2), t4.reportData.call(t4, N, br(br(br(br({}, Ur), c2), e6.data), { accessChannel: t4.accessChannel, operationType: _r(s2) })), e6.isEndApi && t4.reportData.call(t4, N, br(br(br({}, c2), Ur), { isSuccess: e6.data.isSuccess, isLastApi: 1, subrequestid: "0", requestMethod: "", code: 200 === o3 ? 0 : o3, codeDesc: n2, requestElapse: e6.data.requestElapse, accessChannel: t4.accessChannel, operationType: _r(s2) }));
            };
          }, e4.prototype.reportData = function(e5, t4) {
            return r2 = this, o3 = void 0, i2 = function() {
              var r3, o4, n3, i3, a2, s2, c2, u2;
              return function(e6, t5) {
                var r4, o5, n4, i4, a3 = { label: 0, sent: function() {
                  if (1 & n4[0])
                    throw n4[1];
                  return n4[1];
                }, trys: [], ops: [] };
                return i4 = { next: s3(0), throw: s3(1), return: s3(2) }, "function" == typeof Symbol && (i4[Symbol.iterator] = function() {
                  return this;
                }), i4;
                function s3(i5) {
                  return function(s4) {
                    return function(i6) {
                      if (r4)
                        throw new TypeError("Generator is already executing.");
                      for (; a3; )
                        try {
                          if (r4 = 1, o5 && (n4 = 2 & i6[0] ? o5.return : i6[0] ? o5.throw || ((n4 = o5.return) && n4.call(o5), 0) : o5.next) && !(n4 = n4.call(o5, i6[1])).done)
                            return n4;
                          switch (o5 = 0, n4 && (i6 = [2 & i6[0], n4.value]), i6[0]) {
                            case 0:
                            case 1:
                              n4 = i6;
                              break;
                            case 4:
                              return a3.label++, { value: i6[1], done: false };
                            case 5:
                              a3.label++, o5 = i6[1], i6 = [0];
                              continue;
                            case 7:
                              i6 = a3.ops.pop(), a3.trys.pop();
                              continue;
                            default:
                              if (!((n4 = (n4 = a3.trys).length > 0 && n4[n4.length - 1]) || 6 !== i6[0] && 2 !== i6[0])) {
                                a3 = 0;
                                continue;
                              }
                              if (3 === i6[0] && (!n4 || i6[1] > n4[0] && i6[1] < n4[3])) {
                                a3.label = i6[1];
                                break;
                              }
                              if (6 === i6[0] && a3.label < n4[1]) {
                                a3.label = n4[1], n4 = i6;
                                break;
                              }
                              if (n4 && a3.label < n4[2]) {
                                a3.label = n4[2], a3.ops.push(i6);
                                break;
                              }
                              n4[2] && a3.ops.pop(), a3.trys.pop();
                              continue;
                          }
                          i6 = t5.call(e6, a3);
                        } catch (e7) {
                          i6 = [6, e7], o5 = 0;
                        } finally {
                          r4 = n4 = 0;
                        }
                      if (5 & i6[0])
                        throw i6[1];
                      return { value: i6[0] ? i6[1] : void 0, done: true };
                    }([i5, s4]);
                  };
                }
              }(this, function(l2) {
                switch (l2.label) {
                  case 0:
                    return l2.trys.push([0, 3, , 4]), r3 = Rr(), o4 = 0, e5 !== N ? [3, 2] : [4, (d2 = this.platform, new Promise(function(e6) {
                      var t5;
                      d2.platform || (d2 = _e.getEnvInfo());
                      var r4 = "";
                      if (d2.platform === de.WEB) {
                        var o5 = navigator.connection;
                        (null == o5 ? void 0 : o5.type) ? (null == o5 || o5.type, r4 = v.WIFI) : (null == o5 ? void 0 : o5.effectiveType) && (r4 = v[o5.effectiveType.toLocaleUpperCase()]), e6(r4);
                      } else
                        d2.platform === de.NODE ? (r4 = v.UNKNOWN, e6(r4)) : null === (t5 = d2.global) || void 0 === t5 || t5.getNetworkType({ success: function(t6) {
                          r4 = v[t6.networkType.toLocaleUpperCase()], e6(r4);
                        } });
                    }))];
                  case 1:
                    o4 = l2.sent(), l2.label = 2;
                  case 2:
                    return n3 = this.options, i3 = n3.appkey, a2 = n3.sdkServiceId, s2 = n3.sdkProduct, c2 = br({ lts: r3, net: o4, appkey: i3, sdkServiceId: a2, sdkProduct: s2 }, t4), this.isReportDt ? Mr.send(e5, c2) : this.isCollectDt && this.eventQueue.push({ eventId: e5, dt: c2 }), [3, 4];
                  case 3:
                    return u2 = l2.sent(), console.warn(u2), [3, 4];
                  case 4:
                    return [2];
                }
                var d2;
              });
            }, new ((n2 = void 0) || (n2 = Promise))(function(e6, t5) {
              function a2(e7) {
                try {
                  c2(i2.next(e7));
                } catch (e8) {
                  t5(e8);
                }
              }
              function s2(e7) {
                try {
                  c2(i2.throw(e7));
                } catch (e8) {
                  t5(e8);
                }
              }
              function c2(t6) {
                var r3;
                t6.done ? e6(t6.value) : (r3 = t6.value, r3 instanceof n2 ? r3 : new n2(function(e7) {
                  e7(r3);
                })).then(a2, s2);
              }
              c2((i2 = i2.apply(r2, o3 || [])).next());
            });
            var r2, o3, n2, i2;
          }, e4;
        }(), wr = function() {
          return wr = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, wr.apply(this, arguments);
        }, kr = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, Lr = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        }, Dr = { singleChat: "chat", chatRoom: "chatroom", groupChat: "groupchat" };
        function xr(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/users/" + this.user + "/blocks/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2 }, success: function(t5) {
            t5.data.forEach(function(e5) {
            }), "function" == typeof (null == e4 ? void 0 : e4.success) && e4.success(t5);
          }, error: function(t5) {
            "function" == typeof (null == e4 ? void 0 : e4.error) && e4.error(t5);
          } };
          return B.debug("Call getBlocklist"), se.call(this, a2, E2.GET_BLACK_LIST);
        }
        var Gr = xr, Br = Hr;
        function Hr(e4) {
          var t4 = this;
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          var o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = { url: this.apiUrl + "/" + n2 + "/" + i2 + "/users/" + this.user + "/contacts/users", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + a2 }, success: function(r3) {
            var o4 = [];
            r3.data.forEach(function(e5) {
              o4.push({ name: e5, subscription: "both", jid: t4.context.jid });
            }), "function" == typeof (null == e4 ? void 0 : e4.success) && e4.success(o4);
          }, error: function(t5) {
            "function" == typeof (null == e4 ? void 0 : e4.error) && e4.error(t5);
          } };
          return B.debug("Call getContacts"), se.call(this, s2, E2.GET_CONTACTS);
        }
        function jr(e4) {
          return B.debug("Call uploadPushToken"), Rt.call(this, e4);
        }
        var Fr = jr;
        function Wr(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(this.user, "/user_channels"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4 && (null == e4 ? void 0 : e4.success), error: e4 && (null == e4 ? void 0 : e4.error) };
          return B.debug("Call getSessionList"), se.call(this, a2, E2.GET_SESSION_LIST);
        }
        function Kr(e4) {
          var t4 = this;
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          var o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = !!(e4 && "number" == typeof e4.pageNum && "number" == typeof e4.pageSize && e4.pageNum > 0 && e4.pageSize > 0), c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(this.user, "/user_channels").concat(s2 ? "/page" : ""), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e4 && (null == e4 ? void 0 : e4.success), error: e4 && (null == e4 ? void 0 : e4.error) };
          return s2 && (c2.data = { pageNum: e4.pageNum, pageSize: e4.pageSize }), B.debug("Call getConversationlist"), se.call(this, c2, E2.GET_SESSION_LIST).then(function(e5) {
            return qr.call(t4, e5);
          });
        }
        function qr(e4) {
          var t4 = this, r2 = e4.data.channel_infos;
          return null == r2 || r2.forEach(function(e5) {
            e5.meta && "{}" !== JSON.stringify(e5.meta) ? (e5.meta.payload = JSON.parse(e5.meta.payload), e5.lastMessage = Ce.call(t4, e5.meta, { formatCustomExts: false })) : e5.lastMessage = e5.meta, delete e5.meta;
          }), e4;
        }
        function zr(e4) {
          if (e4 && "string" != typeof e4.channel)
            throw Error("Invalid parameter channel: ".concat(e4.channel));
          if (e4 && "singleChat" !== e4.chatType && "groupChat" !== e4.chatType)
            throw Error("Invalid parameter chatType: ".concat(e4.chatType));
          if (e4 && "boolean" != typeof e4.deleteRoam)
            throw Error("Invalid parameter deleteRoam: ".concat(e4.deleteRoam));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2, o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = o3.jid;
          r2 = "singleChat" === e4.chatType ? "chat" : "groupChat";
          var c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/user/").concat(this.user, "/user_channel?resource=").concat(s2.clientResource), dataType: "json", type: "DELETE", data: JSON.stringify({ channel: e4.channel, type: r2, delete_roam: e4.deleteRoam }), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call deleteSession", e4), se.call(this, c2, E2.DELETE_SESSION);
        }
        var Vr = zr;
        function Jr(e4, t4) {
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          var o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"], c2 = {}, u2 = _e.getEnvInfo();
          if ("wx" === u2.platform || "qq" === u2.platform)
            if ("string" == typeof e4 && void 0 !== t4) {
              if (!s2.includes(e4))
                throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
              c2[e4] = t4;
            } else {
              if ("[object Object]" !== Object.prototype.toString.call(e4))
                throw new Error("illegal params");
              s2.forEach(function(t5) {
                s2.includes(t5) && void 0 !== e4[t5] && (c2[t5] = e4[t5]);
              });
            }
          else if ("string" == typeof e4) {
            if (!s2.includes(e4))
              throw new Error("illegal key, only these keys: nickname, avatarurl, mail, phone, gender, sign, birth, ext are allowed");
            c2 = e4 + "=" + t4;
          } else {
            if ("[object Object]" !== Object.prototype.toString.call(e4))
              throw new Error("illegal params");
            var l2 = [];
            s2.forEach(function(t5) {
              if (s2.includes(t5) && void 0 !== e4[t5]) {
                var r3 = encodeURIComponent(t5), o4 = encodeURIComponent(e4[t5]);
                l2.push(r3 + "=" + o4);
              }
            }), c2 = l2.join("&");
          }
          var p3 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/metadata/user/").concat(this.user), type: "PUT", data: c2, dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/x-www-form-urlencoded" } };
          return B.debug("Call updateOwnUserInfo", e4), se.call(this, p3, E2.UPDATE_USER_INFO);
        }
        var Xr = Jr;
        function Yr(e4, t4) {
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          var o3, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = [];
          if ("string" == typeof e4)
            c2 = [e4];
          else {
            if ("[object Array]" !== Object.prototype.toString.call(e4))
              throw new Error("illegal params");
            c2 = e4;
          }
          o3 = "string" == typeof t4 ? [t4] : t4 && "[object Array]" === Object.prototype.toString.call(t4) ? t4 : ["nickname", "avatarurl", "mail", "phone", "gender", "sign", "birth", "ext"];
          var u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/metadata/user/get"), type: "POST", data: JSON.stringify({ targets: c2, properties: o3 }), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } };
          return B.debug("Call fetchUserInfoById", e4), se.call(this, u2, E2.GET_USER_INFO);
        }
        function Qr(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(this.user), type: "PUT", dataType: "json", data: JSON.stringify({ nickname: e4 }), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return B.debug("Call updateCurrentUserNick", e4), se.call(this, a2);
        }
        function Zr(e4) {
          if ("string" != typeof e4 || "" === e4)
            throw Error('Invalid parameter: "token"');
          var t4 = this.context, r2 = t4.orgName, o3 = t4.appName, n2 = { url: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o3, "/sdk/users/").concat(this.user, "/token/expires"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + e4, "Content-Type": "application/json" } };
          return B.debug("Call getTokenExpireTimestamp", e4), se.call(this, n2, E2.SDK_INTERNAL);
        }
        function $r(e4) {
          var t4 = this;
          return new Promise(function(r2, o3) {
            if (!e4.queue)
              throw Error('Invalid parameter: "specified"');
            if (!vt.call(t4)) {
              var n2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return Promise.reject(n2);
            }
            (function e5(t5) {
              var n3 = this, i2 = t5.count || 20;
              eo.call(this, { count: i2, isGroup: !!t5.isGroup, queue: t5.queue, start: t5.start, format: t5.format, success: function(o4) {
                if (o4.msgs.length >= i2 || o4.is_last) {
                  var a2 = o4.msgs.splice(0, i2).reverse();
                  t5.success && t5.success(a2), r2(a2);
                } else
                  e5.call(n3, wr(wr({}, t5), { start: null }));
              }, fail: function(e6) {
                o3(e6), t5.fail && t5.fail(e6);
              } });
            }).call(t4, e4), B.debug("Call fetchHistoryMessages", e4);
          });
        }
        function eo(e4) {
          var t4 = this, r2 = e4.queue, o3 = this.mr_cache[r2] || (this.mr_cache[r2] = { msgs: [] }), n2 = this.context.userId, i2 = e4.start || -1, a2 = e4.count || 20;
          if (o3.msgs.length >= a2 || o3.is_last)
            "function" == typeof e4.success && e4.success(o3);
          else {
            o3 && o3.next_key && (i2 = o3.next_key), e4.start && (i2 = e4.start);
            var s2 = { queue: r2 + (e4.isGroup ? "@conference.easemob.com" : "@easemob.com"), start: i2, end: -1 }, c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p3 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/users/").concat(n2, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" }, data: JSON.stringify(s2), success: function(r3) {
              return kr(t4, void 0, void 0, function() {
                var t5, n3, i3, a3, s3, c3, u3 = this;
                return Lr(this, function(l3) {
                  switch (l3.label) {
                    case 0:
                      if (t5 = null == r3 ? void 0 : r3.data, !r3.data.msgs)
                        return "function" == typeof e4.success && e4.success(o3), o3.is_last = true, o3.next_key = "", [2];
                      n3 = t5.msgs, i3 = n3.length, o3.is_last = t5.is_last, o3.next_key = t5.next_key, a3 = function(t6) {
                        return kr(u3, void 0, void 0, function() {
                          var r4, o4, n4, i4, a4;
                          return Lr(this, function(s4) {
                            switch (s4.label) {
                              case 0:
                                for (r4 = [], t6 = Oe().atob(t6), o4 = 0, n4 = t6.length; o4 < n4; ++o4)
                                  r4.push(t6.charCodeAt(o4));
                                return i4 = (i4 = this.context.root.lookup("easemob.pb.Meta")).decode(r4), a4 = { errorCode: 0, reason: "" }, 1 !== i4.ns ? [3, 2] : [4, et.call(this, i4, a4, true, e4.format)];
                              case 1:
                                return [2, s4.sent()];
                              case 2:
                                return [2];
                            }
                          });
                        });
                      }, s3 = 0, l3.label = 1;
                    case 1:
                      return s3 < i3 ? [4, a3(n3[s3].msg)] : [3, 4];
                    case 2:
                      (c3 = l3.sent()) && o3.msgs.push(c3), l3.label = 3;
                    case 3:
                      return s3++, [3, 1];
                    case 4:
                      return "function" == typeof e4.success && e4.success(o3), [2];
                  }
                });
              });
            }, error: function(e5) {
              if (e5.error && e5.error_description) {
                var r3 = m.create({ type: d.WEBIM_CONNCTION_AJAX_ERROR, message: "fetch history messages error", data: e5 });
                t4.onError && t4.onError(r3);
              }
            } };
            se.call(this, p3, E2.GET_HISTORY_MSG).catch(function(t5) {
              "function" == typeof e4.fail && e4.fail(t5);
            });
          }
        }
        function to(e4) {
          var t4 = this;
          return new Promise(function(r2, o3) {
            var n2 = e4.targetId, i2 = e4.cursor, a2 = void 0 === i2 ? -1 : i2, s2 = e4.pageSize, c2 = void 0 === s2 ? 20 : s2, u2 = e4.chatType, l2 = e4.searchDirection, p3 = e4.searchOptions, h2 = void 0 === p3 ? {} : p3, f3 = h2.msgTypes, g2 = void 0 === f3 ? [] : f3, E3 = h2.startTime, y2 = void 0 === E3 ? null : E3, v2 = h2.endTime, T2 = void 0 === v2 ? null : v2, _2 = h2.from, R2 = void 0 === _2 ? null : _2;
            if ("string" != typeof n2 || "" === n2)
              throw Error('"Invalid parameter": "targetId"');
            if (R2 && "string" != typeof R2)
              throw Error('"Invalid parameter": "searchOptions.from"');
            if (g2 && !Array.isArray(g2))
              throw Error('"Invalid parameter": "searchOptions.msgTypes"');
            if (y2 && "number" != typeof y2)
              throw Error('"Invalid parameter": "searchOptions.startTime"');
            if (T2 && "number" != typeof y2)
              throw Error('"Invalid parameter": "searchOptions.endTime"');
            if (!vt.call(t4)) {
              var O2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
              return o3(O2);
            }
            var I2 = t4.context, S2 = I2.orgName, C2 = I2.appName, N2 = I2.userId, A2 = "singleChat" === e4.chatType ? "@easemob.com" : "@conference.easemob.com", M2 = { queue: "".concat(n2).concat(A2), start: a2, pull_number: c2, is_positive: "down" === l2, msgType: g2.join(",") || "", end: -1, startTime: y2, endTime: T2, userId: "singleChat" === u2 ? null : R2 }, b2 = { url: "".concat(t4.apiUrl, "/").concat(S2, "/").concat(C2, "/users/").concat(N2, "/messageroaming"), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + t4.token, "Content-Type": "application/json" }, data: JSON.stringify(M2), success: function(o4) {
              return kr(t4, void 0, void 0, function() {
                var t5, n3, i3, a3, s3, c3, u3, l3, d2 = this;
                return Lr(this, function(p4) {
                  switch (p4.label) {
                    case 0:
                      t5 = null == o4 ? void 0 : o4.data, n3 = t5.msgs || [], i3 = function(e5) {
                        return kr(d2, void 0, void 0, function() {
                          var t6, r3, o5, n4, i4;
                          return Lr(this, function(a4) {
                            switch (a4.label) {
                              case 0:
                                for (t6 = [], e5 = Oe().atob(e5), r3 = 0, o5 = e5.length; r3 < o5; ++r3)
                                  t6.push(e5.charCodeAt(r3));
                                return n4 = (n4 = this.context.root.lookup("easemob.pb.Meta")).decode(t6), i4 = { errorCode: 0, reason: "" }, 1 !== n4.ns ? [3, 2] : [4, et.call(this, n4, i4, true, true)];
                              case 1:
                                return [2, a4.sent()];
                              case 2:
                                return [2];
                            }
                          });
                        });
                      }, a3 = [], s3 = 0, p4.label = 1;
                    case 1:
                      return s3 < n3.length ? [4, i3(n3[s3].msg)] : [3, 4];
                    case 2:
                      (c3 = p4.sent()) && a3.push(c3), p4.label = 3;
                    case 3:
                      return s3++, [3, 1];
                    case 4:
                      return t5.msgs = a3, u3 = { cursor: t5.next_key, messages: a3, isLast: t5.is_last }, null === (l3 = e4.success) || void 0 === l3 || l3.call(e4, u3), r2(u3), [2];
                  }
                });
              });
            }, error: e4.fail };
            se.call(t4, b2).catch(function(e5) {
              o3(e5);
            }), B.debug("Call getHistoryMessages", e4);
          });
        }
        function ro(e4, t4) {
          return kr(this, void 0, void 0, function() {
            var r2, o3, n2, i2, a2, s2, c2;
            return Lr(this, function(u2) {
              switch (u2.label) {
                case 0:
                  if (!vt.call(this))
                    return r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r2)];
                  if ("string" != typeof e4 || "" === e4)
                    throw Error('"Invalid parameter": "to"');
                  return B.debug("Call addContact", e4, t4), o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = o3.jid, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(this.user, "/contacts/apply?resource=").concat(s2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ usernames: [e4], reason: t4 }), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } }, [4, se.call(this, c2, E2.ROSTER_ADD)];
                case 1:
                  return u2.sent(), [2];
              }
            });
          });
        }
        var oo = no;
        function no(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2;
            return Lr(this, function(c2) {
              switch (c2.label) {
                case 0:
                  if (!vt.call(this))
                    return t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)];
                  if ("string" != typeof e4 || "" === e4)
                    throw Error('"Invalid parameter": "to"');
                  return B.debug("Call deleteContact", e4), r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(this.user, "/contacts/users/").concat(e4, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2, E2.ROSTER_REMOVE)];
                case 1:
                  return c2.sent(), [2];
              }
            });
          });
        }
        function io(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2;
            return Lr(this, function(c2) {
              switch (c2.label) {
                case 0:
                  if (!vt.call(this))
                    return t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)];
                  if ("string" != typeof e4 || "" === e4)
                    throw Error('"Invalid parameter": "to"');
                  return B.debug("Call acceptInvitation", e4), r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(this.user, "/contacts/accept/users/").concat(e4, "?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2, E2.ROSTER_ACCEPT)];
                case 1:
                  return c2.sent(), [2];
              }
            });
          });
        }
        var ao = io;
        function so(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2;
            return Lr(this, function(c2) {
              switch (c2.label) {
                case 0:
                  if (!vt.call(this))
                    return t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)];
                  if ("string" != typeof e4 || "" === e4)
                    throw Error('"Invalid parameter": "to"');
                  return B.debug("Call declineInvitation", e4), r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(this.user, "/contacts/decline/users/").concat(e4, "?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2, E2.ROSTER_DECLINE)];
                case 1:
                  return c2.sent(), [2];
              }
            });
          });
        }
        var co = so;
        function uo(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2;
            return Lr(this, function(l2) {
              switch (l2.label) {
                case 0:
                  if (!vt.call(this))
                    return t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)];
                  if (r2 = e4.name, o3 = [], "string" == typeof r2) {
                    if ("" === r2)
                      throw Error('"Invalid parameter": "name"');
                    o3 = [r2];
                  } else {
                    if (!Array.isArray(r2))
                      throw Error('"Invalid parameter": "name"');
                    o3 = r2;
                  }
                  return B.debug("Call addToBlockList", e4), n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/sdk/user/").concat(this.user, "/blocks?resource=").concat(c2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ usernames: o3 }), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } }, [4, se.call(this, u2, E2.ROSTER_BAN).then(function(e5) {
                    return { type: e5.type, data: { userIds: (null == e5 ? void 0 : e5.data) || [] } };
                  })];
                case 1:
                  return [2, l2.sent()];
              }
            });
          });
        }
        var lo = uo, po = uo;
        function ho(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2;
            return Lr(this, function(l2) {
              switch (l2.label) {
                case 0:
                  if (!vt.call(this))
                    return t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)];
                  if (r2 = e4.name, o3 = [], "string" == typeof r2) {
                    if ("" === r2)
                      throw Error('"Invalid parameter": "name"');
                    o3 = [r2];
                  } else {
                    if (!Array.isArray(r2))
                      throw Error('"Invalid parameter": "name"');
                    o3 = r2;
                  }
                  return B.debug("Call removeFromBlockList", e4), n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/sdk/user/").concat(this.user, "/blocks?resource=").concat(c2.clientResource), type: "DELETE", dataType: "json", data: JSON.stringify({ usernames: o3 }), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } }, [4, se.call(this, u2, E2.ROSTER_ALLOW)];
                case 1:
                  return l2.sent(), [2];
              }
            });
          });
        }
        var fo = ho, mo = ho;
        function go(e4) {
          var t4 = this, r2 = (null == e4 ? void 0 : e4.ext) || "";
          if ("string" != typeof r2)
            throw Error('"Invalid parameter": "ext"', r2);
          var o3 = this.getUniqueId(), n2 = { id: o3, to: e4.to };
          this._msgHash[o3] = wr({}, n2);
          var i2 = "";
          void 0 !== e4.chatType ? i2 = e4.chatType : void 0 !== e4.type && (i2 = "chat" === e4.type ? "singleChat" : e4.type);
          var a2 = { id: o3, type: "recall", chatType: i2, ackId: e4.mid, to: e4.to, isChatThread: e4.isChatThread || false, metaExt: r2, success: function(r3) {
            return kr(t4, void 0, void 0, function() {
              var t5, o4, n3, a3, s2, c2, u2, l2, d2;
              return Lr(this, function(p3) {
                switch (p3.label) {
                  case 0:
                    return p3.trys.push([0, 5, , 6]), "singleChat" !== i2 && "groupChat" !== i2 ? [3, 4] : [4, null === (n3 = null === (o4 = this._localCache) || void 0 === o4 ? void 0 : o4.getInstance()) || void 0 === n3 ? void 0 : n3.removeMsgByServerMsgId(e4.mid)];
                  case 1:
                    return p3.sent(), [4, null === (s2 = null === (a3 = this._localCache) || void 0 === a3 ? void 0 : a3.getInstance()) || void 0 === s2 ? void 0 : s2.getConversationLastMessage(e4.to, i2)];
                  case 2:
                    return t5 = p3.sent(), [4, null === (u2 = null === (c2 = this._localCache) || void 0 === c2 ? void 0 : c2.getInstance()) || void 0 === u2 ? void 0 : u2.updateLocalConversation(Ae({ conversationId: e4.to, conversationType: i2 }), { lastMessageId: null == t5 ? void 0 : t5.serverMsgId })];
                  case 3:
                    p3.sent(), p3.label = 4;
                  case 4:
                    return null === (l2 = null == e4 ? void 0 : e4.success) || void 0 === l2 || l2.call(e4, r3), [3, 6];
                  case 5:
                    return p3.sent(), null === (d2 = null == e4 ? void 0 : e4.success) || void 0 === d2 || d2.call(e4, r3), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }, fail: e4.fail };
          return B.debug("Call recallMessage", e4), this.mSync.send(a2, this);
        }
        function Eo(e4) {
          var t4 = e4 || {}, r2 = t4.messageId, o3 = t4.modifiedMessage;
          if (B.debug("Call modifyMessage", r2, o3), "" === r2)
            throw Error('Invalid parameter: "messageId"');
          if ("txt" !== o3.type)
            throw Error('Invalid parameter: "modifiedMessage.type"');
          return this.mSync.send(wr({ editMessageId: r2 }, o3));
        }
        function yo(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2;
            return Lr(this, function(l2) {
              switch (l2.label) {
                case 0:
                  if ("string" != typeof e4.messageId || !e4.messageId)
                    throw Error("Invalid parameter messageId: ".concat(e4.messageId));
                  if ("string" != typeof e4.reaction || !e4.reaction)
                    throw Error("Invalid parameter reaction: ".concat(e4.reaction));
                  return vt.call(this) ? (r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.reaction, s2 = e4.messageId, c2 = { msgId: s2, message: a2 }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/reaction/user/").concat(this.user), type: "POST", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, u2)]) : (t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)]);
                case 1:
                  return l2.sent(), [2];
              }
            });
          });
        }
        function vo(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2;
            return Lr(this, function(u2) {
              switch (u2.label) {
                case 0:
                  if ("string" != typeof e4.reaction || !e4.reaction)
                    throw Error("Invalid parameter reactionId: ".concat(e4.reaction));
                  return vt.call(this) ? (r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.messageId, s2 = e4.reaction, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/reaction/user/").concat(this.user, "?msgId=").concat(a2, "&message=").concat(s2), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, c2)]) : (t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)]);
                case 1:
                  return u2.sent(), [2];
              }
            });
          });
        }
        function To(e4) {
          if ("string" != typeof e4.chatType || !e4.chatType)
            throw Error("Invalid parameter chatType: ".concat(e4.chatType));
          if (!e4.messageId)
            throw Error("Invalid parameter messageId: ".concat(e4.messageId));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.chatType, s2 = e4.messageId, c2 = { msgIdList: "string" == typeof s2 ? [s2] : s2, msgType: "singleChat" === a2 ? "chat" : "groupchat", groupId: e4.groupId || null }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/reaction/user/").concat(this.user), type: "GET", data: c2, dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, u2).then(function(e5) {
            var t5 = e5.data;
            return null == t5 || t5.forEach(function(e6) {
              null == e6 || e6.reactionList.forEach(function(e7) {
                e7.isAddedBySelf = e7.state, delete e7.state, delete e7.reactionId;
              });
            }), e5;
          });
        }
        var _o = To;
        function Ro(e4) {
          if ("string" != typeof e4.reaction || !e4.reaction)
            throw Error("Invalid parameter reaction: ".concat(e4.reaction));
          if ("string" != typeof e4.messageId || !e4.messageId)
            throw Error("Invalid parameter messageId: ".concat(e4.messageId));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.cursor, s2 = e4.pageSize, c2 = { msgId: e4.messageId, message: e4.reaction, currentPage: a2 || null, pageSize: s2 || 20 }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/reaction/user/").concat(this.user, "/detail"), type: "GET", data: c2, dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, u2).then(function(e5) {
            return e5.data.isAddedBySelf = e5.data.state, delete e5.data.state, delete e5.data.reactionId, e5;
          });
        }
        function Oo(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2, p3;
            return Lr(this, function(h2) {
              switch (h2.label) {
                case 0:
                  if ("string" != typeof e4.reportType || !e4.reportType)
                    throw Error("Invalid parameter reportType: ".concat(e4.reportType));
                  if ("string" != typeof e4.messageId || !e4.messageId)
                    throw Error("Invalid parameter messageId: ".concat(e4.messageId));
                  if ("string" != typeof e4.reportReason || !e4.reportReason)
                    throw Error("Invalid parameter messageId: ".concat(e4.reportReason));
                  return vt.call(this) ? (r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.reportType, s2 = e4.reportReason, c2 = e4.messageId, u2 = { username: this.user, reportType: a2, reportReason: s2 }, l2 = "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/user/").concat(this.user, "/moderation/report/message/").concat(c2), p3 = { url: l2, type: "POST", data: JSON.stringify(u2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, p3)]) : (t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)]);
                case 1:
                  return h2.sent(), [2];
              }
            });
          });
        }
        function Io(e4) {
          var t4;
          return kr(this, void 0, void 0, function() {
            var r2, o3, n2, i2, a2, s2, c2, u2, l2;
            return Lr(this, function(p3) {
              switch (p3.label) {
                case 0:
                  if ("string" != typeof e4.targetId || "" === e4.targetId)
                    throw Error('"Invalid parameter targetId": ' + e4.targetId);
                  if (!["singleChat", "groupChat", "chatRoom"].includes(e4.chatType))
                    throw Error('"Invalid parameter chatType": ' + e4.chatType);
                  if (e4.beforeTimeStamp && ("number" != typeof e4.beforeTimeStamp || e4.beforeTimeStamp < 0 || (null === (t4 = e4.beforeTimeStamp) || void 0 === t4 ? void 0 : t4.toString().length) > 18))
                    throw Error('"Invalid parameter beforeTimeStamp": ' + e4.beforeTimeStamp);
                  if (e4.messageIds && !(Array.isArray(e4.messageIds) && e4.messageIds.length > 0 && e4.messageIds.length <= 20))
                    throw Error('"Invalid parameter messageIds": ' + e4.messageIds);
                  if (!e4.messageIds && !e4.beforeTimeStamp)
                    throw Error("messageIds or beforeTimeStamp field is required.");
                  return vt.call(this) ? (o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.userId, s2 = "singleChat" === e4.chatType ? "userId" : "groupId", c2 = "singleChat" === e4.chatType ? "chat" : "group", u2 = e4.messageIds ? "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/message/roaming/").concat(c2, "/user/").concat(a2, "?").concat(s2, "=").concat(e4.targetId, "&msgIdList=").concat(e4.messageIds, "&resource=").concat(this.clientResource) : "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/message/roaming/").concat(c2, "/user/").concat(a2, "/time?").concat(s2, "=").concat(e4.targetId, "&delTime=").concat(e4.beforeTimeStamp, "&&resource=").concat(this.clientResource), l2 = { url: u2, dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + this.token, "Content-Type": "application/json" } }, B.debug("Call removeHistoryMessages", e4), [4, se.call(this, l2)]) : (r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(r2)]);
                case 1:
                  return p3.sent(), [2];
              }
            });
          });
        }
        function So(e4) {
          var t4 = this;
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          if ((null == e4 ? void 0 : e4.pageSize) && "number" != typeof e4.pageSize)
            throw Error("Invalid parameter pageSize: ".concat(e4.pageSize));
          if ((null == e4 ? void 0 : e4.cursor) && "string" != typeof e4.cursor)
            throw Error("Invalid parameter cursor: ".concat(e4.cursor));
          var o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (null == e4 ? void 0 : e4.pageSize) || 20, cursor: (null == e4 ? void 0 : e4.cursor) || "", need_mark: true }, headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
          return B.debug("Call getServerConversations", e4), new Promise(function(e5, r3) {
            se.call(t4, s2, E2.GET_SESSION_LIST).then(function(r4) {
              return kr(t4, void 0, void 0, function() {
                var t5, o4, n3 = this;
                return Lr(this, function(i3) {
                  switch (i3.label) {
                    case 0:
                      return t5 = Co.call(this, r4), this._localCache ? (o4 = t5.data.conversations.map(function(e6) {
                        return kr(n3, void 0, void 0, function() {
                          var t6, r5, o5, n4;
                          return Lr(this, function(i4) {
                            switch (i4.label) {
                              case 0:
                                return [4, null === (r5 = null === (t6 = this._localCache) || void 0 === t6 ? void 0 : t6.getInstance()) || void 0 === r5 ? void 0 : r5.storeMessage(e6.lastMessage, Ne.SUCCESS, true)];
                              case 1:
                                return i4.sent(), [4, null === (n4 = null === (o5 = this._localCache) || void 0 === o5 ? void 0 : o5.getInstance()) || void 0 === n4 ? void 0 : n4.updateLocalConversation(Ae({ conversationId: e6.conversationId, conversationType: e6.conversationType }), { unReadCount: e6.unReadCount })];
                              case 2:
                                return i4.sent(), [2];
                            }
                          });
                        });
                      }), [4, Promise.all(o4)]) : [3, 2];
                    case 1:
                      i3.sent(), i3.label = 2;
                    case 2:
                      return e5(t5), [2];
                  }
                });
              });
            }).catch(function(e6) {
              r3(e6);
            });
          });
        }
        function Co(e4) {
          var t4 = this, r2 = e4.data, o3 = r2.cursor, n2 = r2.channel_infos, i2 = [];
          null == n2 || n2.forEach(function(e5) {
            var r3 = null;
            (null == e5 ? void 0 : e5.meta) && "{}" !== JSON.stringify(e5.meta) && (e5.meta.payload = JSON.parse(e5.meta.payload), "delivery" !== (r3 = Ce.call(t4, e5.meta)).type && "read" !== r3.type && "channel" !== r3.type && (r3.chatType = Se[r3.chatType]));
            var o4 = { conversationId: e5.session_to, conversationType: "chat" === e5.session_type ? "singleChat" : "groupChat", isPinned: e5.is_top, pinnedTime: e5.is_top ? e5.update_top_status_time : 0, unReadCount: e5.unread_num, lastMessage: r3 };
            e5.marks && (o4.marks = e5.marks.map(function(e6) {
              return it[e6];
            })), i2.push(o4);
          });
          var a2 = { conversations: i2, cursor: o3 || "" };
          return { type: e4.type, data: a2 };
        }
        function No(e4) {
          var t4 = this;
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          if ((null == e4 ? void 0 : e4.pageSize) && "number" != typeof e4.pageSize)
            throw Error("Invalid parameter pageSize: ".concat(e4.pageSize));
          if ((null == e4 ? void 0 : e4.cursor) && "string" != typeof e4.cursor)
            throw Error("Invalid parameter cursor: ".concat(e4.cursor));
          var o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/sdk/user/").concat(this.user, "/user_channels/list?"), type: "GET", dataType: "json", data: { limit: (null == e4 ? void 0 : e4.pageSize) || 20, cursor: (null == e4 ? void 0 : e4.cursor) || "", is_top: true, need_mark: true }, headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
          return B.debug("Call getServerPinnedConversations", e4), se.call(this, s2, E2.GET_SESSION_LIST).then(function(e5) {
            return Co.call(t4, e5);
          });
        }
        function Ao(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2, p3, h2, f3, g2;
            return Lr(this, function(y2) {
              if (!vt.call(this))
                return t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)];
              if (r2 = e4.conversationId, o3 = e4.conversationType, n2 = e4.isPinned, i2 = "singleChat" === o3 ? "chat" : "groupChat", "string" != typeof r2 || "" === r2)
                throw Error("Invalid parameter conversationId: ".concat(r2));
              if (!["singleChat", "groupChat"].includes(o3))
                throw Error("Invalid parameter conversationType: ".concat(o3));
              if ("boolean" != typeof n2)
                throw Error("Invalid parameter isPinned: ".concat(n2));
              return a2 = this.context, s2 = a2.orgName, c2 = a2.appName, u2 = a2.accessToken, l2 = a2.jid, p3 = { type: i2, to: r2 }, h2 = n2 ? "" : "type=".concat(i2, "&to=").concat(r2, "&"), f3 = "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/sdk/user/").concat(this.user, "/user_channel/top?").concat(h2, "resource=").concat(l2.clientResource), g2 = { url: f3, type: n2 ? "POST" : "DELETE", dataType: "json", headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } }, n2 && (g2.data = JSON.stringify(p3)), B.debug("Call pinConversation", e4), [2, se.call(this, g2, E2.PIN_CONVERSATION).then(function(e5) {
                var t5 = e5.type, r3 = e5.data;
                return { type: t5, data: { isPinned: r3.is_top || false, pinnedTime: r3.is_top ? r3.update_top_status_time : 0 } };
              })];
            });
          });
        }
        function Mo(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2;
            return Lr(this, function(p3) {
              switch (p3.label) {
                case 0:
                  if (t4 = e4.userId, r2 = e4.remark, !vt.call(this))
                    return o3 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(o3)];
                  if ("string" != typeof t4 || "" === t4)
                    throw Error('Invalid parameter: "userId"');
                  if ("string" != typeof r2)
                    throw Error('Invalid parameter: "remark"');
                  return B.debug("Call setContactRemark", e4), n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/users/").concat(this.context.userId, "/contacts/users/").concat(t4, "?resource=").concat(c2.clientResource), l2 = { url: u2, type: "PUT", data: JSON.stringify({ remark: r2 }), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" } }, [4, se.call(this, l2, E2.ROSTER_SET_CONTACT_REMARK)];
                case 1:
                  return p3.sent(), [2];
              }
            });
          });
        }
        function bo() {
          if (!vt.call(this)) {
            var e4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(e4);
          }
          var t4 = this.context, r2 = t4.orgName, o3 = t4.appName, n2 = t4.accessToken, i2 = { url: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o3, "/users/").concat(this.user, "/contacts/users?needReturnRemark=true"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + n2 } };
          return B.debug("Call getAllContacts"), se.call(this, i2, E2.ROSTER_GET_ALL_CONTACTS_REMARKS).then(function(e5) {
            var t5 = ((null == e5 ? void 0 : e5.entities) || []).map(function(e6) {
              return { userId: e6.username, remark: e6.remark };
            });
            return { type: e5.type, data: t5 };
          });
        }
        function Uo(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          B.debug("Call getContactsWithCursor", e4);
          var r2 = e4 || {}, o3 = r2.pageSize, n2 = void 0 === o3 ? 20 : o3, i2 = r2.cursor, a2 = void 0 === i2 ? "" : i2;
          if (n2 && "number" != typeof n2)
            throw Error("Invalid parameter pageSize: ".concat(e4.pageSize));
          var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p3 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/contacts?needReturnRemark=true&limit=").concat(n2, "&cursor=").concat(a2), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + l2 } };
          return se.call(this, p3, E2.ROSTER_GET_ALL_CONTACTS_REMARKS_FROM_SERVER_BY_PAGE).then(function(e5) {
            var t5, r3, o4 = (null === (t5 = null == e5 ? void 0 : e5.data) || void 0 === t5 ? void 0 : t5.contacts) || [], n3 = (null === (r3 = null == e5 ? void 0 : e5.data) || void 0 === r3 ? void 0 : r3.cursor) || "", i3 = o4.map(function(e6) {
              return { userId: e6.username, remark: e6.remark };
            });
            return { type: e5.type, data: { cursor: n3, contacts: i3 } };
          });
        }
        function Po(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2, p3, h2, f3, g2, y2;
            return Lr(this, function(v2) {
              switch (v2.label) {
                case 0:
                  if (!vt.call(this))
                    return t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)];
                  if (B.debug("Call markConversation", e4), o3 = (r2 = e4 || {}).conversations, n2 = void 0 === o3 ? [] : o3, i2 = r2.mark, a2 = r2.isMarked, !Array.isArray(n2))
                    throw Error("Invalid parameter conversations");
                  if (s2 = n2.map(function(e5) {
                    if (!e5.conversationId || !["singleChat", "groupChat"].includes(e5.conversationType))
                      throw Error("Invalid parameter conversations");
                    return { to: e5.conversationId, type: Dr[e5.conversationType] };
                  }), "boolean" != typeof a2)
                    throw Error("Invalid parameter isMarked: ".concat(a2));
                  if ("number" != typeof i2)
                    throw Error("Invalid parameter mark: ".concat(i2));
                  return c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p3 = c2.accessToken, h2 = c2.userId, f3 = c2.jid, g2 = { mark: it[i2], targets: s2 }, y2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/sdk/user/").concat(h2, "/user_channels/mark?resource=").concat(f3.clientResource), dataType: "json", data: JSON.stringify(g2), type: a2 ? "Post" : "Delete", headers: { Authorization: "Bearer " + p3 } }, [4, se.call(this, y2, E2.MARK_CONVERSATION).then(function(e5) {
                    var t5, r3 = (null === (t5 = e5.data) || void 0 === t5 ? void 0 : t5.ignore) || [];
                    r3 && Array.isArray(r3) && r3.length > 0 && B.debug("markConversation has ignored conversations", r3.map(function(e6) {
                      return { conversationId: e6.to, conversationType: Se[e6.type] };
                    }));
                  })];
                case 1:
                  return v2.sent(), [2];
              }
            });
          });
        }
        function wo(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2;
            return Lr(this, function(o3) {
              return B.debug("Call addConversationMark", e4), t4 = e4.conversations, r2 = e4.mark, [2, Po.call(this, { conversations: t4, mark: r2, isMarked: true })];
            });
          });
        }
        function ko(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2;
            return Lr(this, function(o3) {
              return B.debug("Call removeConversationMark", e4), t4 = e4.conversations, r2 = e4.mark, [2, Po.call(this, { conversations: t4, mark: r2, isMarked: false })];
            });
          });
        }
        function Lo(e4) {
          var t4, r2, o3 = this;
          if (!vt.call(this)) {
            var n2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(n2);
          }
          if (B.debug("Call getServerConversationsByFilter", e4), (null == e4 ? void 0 : e4.pageSize) && "number" != typeof e4.pageSize)
            throw Error("Invalid parameter pageSize: ".concat(e4.pageSize));
          if ((null == e4 ? void 0 : e4.cursor) && "string" != typeof e4.cursor)
            throw Error("Invalid parameter cursor: ".concat(e4.cursor));
          if ("number" != typeof (null === (t4 = null == e4 ? void 0 : e4.filter) || void 0 === t4 ? void 0 : t4.mark))
            throw Error("Invalid parameter mark: ".concat(null === (r2 = null == e4 ? void 0 : e4.filter) || void 0 === r2 ? void 0 : r2.mark));
          var i2 = this.context, a2 = i2.orgName, s2 = i2.appName, c2 = i2.accessToken, u2 = "".concat(this.apiUrl, "/").concat(a2, "/").concat(s2, "/sdk/user/").concat(this.user, "/user_channels/mark/search?"), l2 = e4.pageSize, p3 = e4.cursor, h2 = ((null == e4 ? void 0 : e4.filter) || {}).mark, f3 = { url: u2, type: "GET", dataType: "json", data: { limit: l2 || 10, cursor: p3 || "", need_mark: true, mark: it[h2] }, headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" } };
          return se.call(this, f3, E2.GET_SESSION_LIST).then(function(e5) {
            return Co.call(o3, e5);
          });
        }
        function Do() {
          if (!vt.call(this)) {
            var e4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(e4);
          }
          B.debug("Call getSelfIdsOnOtherPlatform");
          var t4 = this.context, r2 = t4.orgName, o3 = t4.appName, n2 = t4.accessToken, i2 = t4.userId, a2 = t4.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o3, "/users/").concat(i2, "/resources"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + n2, "Content-Type": "application/json" } };
          return se.call(this, s2, E2.USER_LOGGEDIN_OTHER_PLATFORM).then(function(e5) {
            var t5, r3 = null === (t5 = e5.data) || void 0 === t5 ? void 0 : t5.filter(function(e6) {
              return e6.res !== a2.clientResource;
            }), o4 = null == r3 ? void 0 : r3.map(function(e6) {
              return "".concat(i2, "/").concat(e6.res);
            });
            return { type: e5.type, data: o4 };
          });
        }
        function xo() {
          var e4, t4, r2, o3, n2, i2;
          return kr(this, void 0, void 0, function() {
            var a2, s2, c2, u2, l2, p3, h2, f3, g2;
            return Lr(this, function(y2) {
              switch (y2.label) {
                case 0:
                  return vt.call(this) ? (B.debug("Call deleteAllMessagesAndConversations"), s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p3 = s2.userId, h2 = s2.jid, f3 = "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/message/roaming/user/").concat(p3, "/delete/all?resource=").concat(h2.clientResource), g2 = { url: f3, type: "POST", dataType: "json", headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } }, [4, se.call(this, g2, E2.REST_DELETE_MESSAGES_CONVERSATIONS)]) : (a2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(a2)]);
                case 1:
                  return y2.sent(), null === (t4 = null === (e4 = this._localCache) || void 0 === e4 ? void 0 : e4.getInstance()) || void 0 === t4 || t4.clearConversationMap(), [4, null === (o3 = null === (r2 = this._localCache) || void 0 === r2 ? void 0 : r2.getInstance()) || void 0 === o3 ? void 0 : o3.clearStoreData("conversationList")];
                case 2:
                  return y2.sent(), [4, null === (i2 = null === (n2 = this._localCache) || void 0 === n2 ? void 0 : n2.getInstance()) || void 0 === i2 ? void 0 : i2.clearStoreData("message")];
                case 3:
                  return y2.sent(), [2];
              }
            });
          });
        }
        function Go(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2, p3, h2, f3, g2, y2;
            return Lr(this, function(v2) {
              switch (v2.label) {
                case 0:
                  if (!vt.call(this))
                    return t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)];
                  if (B.debug("Call setMessagePinStatus", e4), o3 = (r2 = e4 || {}).conversationId, n2 = void 0 === o3 ? "" : o3, i2 = r2.conversationType, a2 = r2.messageId, s2 = r2.isPinned, "string" != typeof n2 || "" === n2)
                    throw Error("Invalid parameter conversationId");
                  if ("string" != typeof a2 || "" === a2)
                    throw Error("Invalid parameter messageId");
                  if ("boolean" != typeof s2)
                    throw Error("Invalid parameter isPinned");
                  return c2 = this.context, u2 = c2.orgName, l2 = c2.appName, p3 = c2.accessToken, h2 = c2.userId, f3 = c2.jid, g2 = { to: n2, type: Dr[i2], pin_msg_id: a2 }, y2 = { url: "".concat(this.apiUrl, "/").concat(u2, "/").concat(l2, "/sdk/user/").concat(h2, "/user_channel/pin?resource=").concat(f3.clientResource), dataType: "json", data: JSON.stringify(g2), type: s2 ? "Post" : "Delete", headers: { Authorization: "Bearer " + p3 } }, [4, se.call(this, y2, E2.REST_PIN_MESSAGE)];
                case 1:
                  return v2.sent(), [2];
              }
            });
          });
        }
        function Bo(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2;
            return Lr(this, function(i2) {
              return B.debug("Call pinMessage", e4), r2 = (t4 = e4 || {}).conversationType, o3 = t4.conversationId, n2 = t4.messageId, [2, Go.call(this, { conversationId: o3, conversationType: r2, messageId: n2, isPinned: true })];
            });
          });
        }
        function Ho(e4) {
          return kr(this, void 0, void 0, function() {
            var t4, r2, o3, n2;
            return Lr(this, function(i2) {
              return B.debug("Call unpinMessage", e4), r2 = (t4 = e4 || {}).conversationType, o3 = t4.conversationId, n2 = t4.messageId, [2, Go.call(this, { conversationId: o3, conversationType: r2, messageId: n2, isPinned: false })];
            });
          });
        }
        function jo(e4) {
          var t4 = this;
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          B.debug("Call getServerPinnedMessages", e4);
          var o3 = e4.conversationId, n2 = e4.conversationType, i2 = e4.pageSize, a2 = e4.cursor;
          if ("string" != typeof o3 || "" === o3)
            throw Error("Invalid parameter conversationId");
          if (i2 && "number" != typeof i2)
            throw Error("Invalid parameter pageSize: ".concat(i2));
          if (a2 && "string" != typeof a2)
            throw Error("Invalid parameter cursor: ".concat(a2));
          var s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p3 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/sdk/user/").concat(this.user, "/user_channel/pin"), type: "GET", dataType: "json", data: { to: o3, type: Dr[n2], limit: i2 || 10, cursor: a2 || "" }, headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
          return se.call(this, p3, E2.GET_SESSION_LIST).then(function(e5) {
            return { type: 0, data: { list: e5.data.msg_infos.map(function(e6) {
              e6.message.payload = JSON.parse(e6.message.payload);
              var r3 = e6.message, o4 = e6.pin_opt_at, n3 = e6.pin_operator;
              return { message: Ce.call(t4, r3, { formatChatType: true }), pinTime: o4, operatorId: n3 };
            }), cursor: e5.data.cursor || "" } };
          });
        }
        function Fo() {
          var e4 = this;
          B.debug("Call unbindPushToken");
          var t4 = { deviceId: this.clientResource, deviceToken: "", notifierName: this.pushCertificateName };
          return Rt.call(this, t4).then(function(t5) {
            return e4.isRegisterPush = false, t5;
          });
        }
        var Wo = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, Ko = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        };
        function qo(e4) {
          if (!e4 || !e4.data)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups?resource=").concat(a2.clientResource), dataType: "json", type: "POST", data: JSON.stringify({ owner: this.user, groupname: e4.data.groupname, desc: e4.data.desc, members: e4.data.members, public: e4.data.public, approval: e4.data.approval, allowinvites: e4.data.allowinvites, invite_need_confirm: e4.data.inviteNeedConfirm, maxusers: e4.data.maxusers, custom: e4.data.ext }), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: function(t5) {
            e4.success && e4.success(t5);
          }, error: e4.error };
          return B.debug("Call createGroup:", e4), se.call(this, s2, E2.CREATE_GROUP);
        }
        var zo = qo;
        function Vo(e4) {
          var t4;
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          var o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = o3.jid, c2 = { entities: [(t4 = {}, t4["notification_ignore_" + e4.groupId] = true, t4)] }, u2 = { type: "PUT", url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(this.user, "?resource=").concat(s2.clientResource), data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call blockGroupMessages", e4), se.call(this, u2, E2.BLOCK_GROUP);
        }
        var Jo = Vo;
        function Xo(e4) {
          if ("number" != typeof e4.limit)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { limit: e4.limit, cursor: e4.cursor };
          e4.cursor || delete a2.cursor;
          var s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/publicchatgroups", type: "GET", dataType: "json", data: a2, headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call listGroups", e4), se.call(this, s2, E2.LIST_GROUP);
        }
        var Yo = Xo;
        function Qo(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/users/" + this.user + "/joined_chatgroups", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4 && (null == e4 ? void 0 : e4.success), error: e4 && (null == e4 ? void 0 : e4.error) };
          return B.debug("Call getJoinedGroups", e4), se.call(this, a2, E2.GET_USER_GROUP);
        }
        function Zo(e4) {
          if ("number" != typeof e4.pageNum || "number" != typeof e4.pageSize)
            throw Error('Invalid parameter: "pageNum or pageSize"');
          if (e4.pageNum < 0 || e4.pageSize < 0)
            throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.needAffiliations || e4.needRole ? "/chatgroups/user/".concat(this.user, "?pagenum=").concat(e4.pageNum, "&pagesize=").concat(e4.pageSize, "&needAffiliations=").concat(e4.needAffiliations, "&needRole=").concat(e4.needRole) : "/users/".concat(this.user, "/joined_chatgroups?pagenum=").concat(e4.pageNum, "&pagesize=").concat(e4.pageSize), s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + a2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4 && (null == e4 ? void 0 : e4.success), error: e4 && (null == e4 ? void 0 : e4.error) };
          return B.debug("Call getGroup", e4), se.call(this, s2, E2.GET_USER_GROUP).then(function(e5) {
            var t5 = e5.uri, r3 = e5.entities, o4 = [];
            return t5.includes("joined_chatgroups") || (r3.forEach(function(e6) {
              var t6 = { affiliationsCount: e6.affiliations_count, groupName: e6.name, groupId: e6.groupId, role: e6.permission, disabled: e6.disabled, approval: e6.membersonly, allowInvites: e6.allowinvites, description: e6.description, maxUsers: e6.maxusers, public: e6.public };
              o4.push(t6);
            }), e5.entities = o4), e5;
          });
        }
        function $o(e4) {
          if ("string" != typeof e4.groupId || "string" != typeof e4.newOwner)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = { newowner: e4.newOwner }, o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = o3.jid, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/chatgroups/").concat(e4.groupId, "?resource=").concat(s2.clientResource), type: "PUT", dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, data: JSON.stringify(r2), success: e4.success, error: e4.error };
          return B.debug("Call changeOwner", e4), se.call(this, c2, E2.CHANGE_OWNER);
        }
        var en = $o;
        function tn(e4) {
          if ("string" != typeof e4.groupId && !Array.isArray(e4.groupId))
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatgroups/" + e4.groupId + "?joined_time=true", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getGroupInfo", e4), se.call(this, a2, E2.GET_GROUP_INFO);
        }
        function rn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { groupname: e4.groupName, description: e4.description, custom: e4.ext }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "?resource=").concat(a2.clientResource), type: "PUT", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call modifyGroup", e4), se.call(this, u2, E2.MODIFY_GROUP);
        }
        function on(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (isNaN(e4.pageNum) || e4.pageNum <= 0)
            throw Error('The parameter "pageNum" should be a positive number');
          if (isNaN(e4.pageSize) || e4.pageSize <= 0)
            throw Error('The parameter "pageSize" should be a positive number');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = { pagenum: e4.pageNum, pagesize: e4.pageSize }, o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = { url: this.apiUrl + "/" + n2 + "/" + i2 + "/chatgroups/" + e4.groupId + "/users", dataType: "json", type: "GET", data: r2, headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call listGroupMember", e4), se.call(this, s2, E2.LIST_GROUP_MEMBER);
        }
        var nn = on;
        function an(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.groupId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatgroups/" + a2 + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getGroupAdmin", e4), se.call(this, s2, E2.GET_GROUP_ADMIN);
        }
        function sn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { newadmin: e4.username }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/admin?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call setGroupAdmin", e4), se.call(this, u2, E2.SET_GROUP_ADMIN);
        }
        var cn = sn;
        function un(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/admin/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call removeAdmin", e4), se.call(this, u2, E2.REMOVE_GROUP_ADMIN);
        }
        var ln = un;
        function dn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "?version=v3&resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call destroyGroup", e4), se.call(this, c2, E2.DISSOLVE_GROUP);
        }
        var pn = dn;
        function hn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/quit?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call quitGroup", e4), se.call(this, c2, E2.QUIT_GROUP);
        }
        var fn = hn;
        function mn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e4.users))
            throw Error('Invalid parameter: "users"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = e4.groupId, o3 = { usernames: e4.users }, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/chatgroups/").concat(r2, "/invite?resource=").concat(c2.clientResource), type: "POST", data: JSON.stringify(o3), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call inviteUsersToGroup", e4), se.call(this, u2, E2.INVITE_TO_GROUP);
        }
        var gn = mn;
        function En(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(e4.groupId, "/apply?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify({ message: e4.message || "" }), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call joinGroup", e4), se.call(this, s2, E2.JOIN_GROUP);
        }
        function yn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.applicant || "" === e4.applicant)
            throw Error('Invalid parameter: "applicant"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { applicant: e4.applicant, verifyResult: true, reason: "no clue" }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/apply_verify?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call agreeJoinGroup", e4), se.call(this, u2, E2.AGREE_JOIN_GROUP);
        }
        var vn = yn;
        function Tn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.applicant || "" === e4.applicant)
            throw Error('Invalid parameter: "applicant"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { applicant: e4.applicant, verifyResult: false, reason: e4.reason || "" }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/apply_verify?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call rejectGroupJoinRequest", e4), se.call(this, u2, E2.REJECT_JOIN_GROUP);
        }
        var _n = Tn;
        function Rn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.invitee || "" === e4.invitee)
            throw Error('Invalid parameter: "invitee"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { invitee: e4.invitee, verifyResult: true }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/invite_verify?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call acceptGroupInvite", e4), se.call(this, u2, E2.AGREE_INVITE_GROUP);
        }
        var On = Rn;
        function In(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.invitee || "" === e4.invitee)
            throw Error('Invalid parameter: "invitee"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { invitee: e4.invitee, verifyResult: false }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/invite_verify?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call rejectGroupInvite", e4), se.call(this, u2, E2.REJECT_INVITE_GROUP);
        }
        var Sn = In;
        function Cn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = e4.groupId, o3 = e4.username, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/chatgroups/").concat(r2, "/users/").concat(o3, "?resource=").concat(c2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call removeGroupMember", e4), se.call(this, u2, E2.REMOVE_GROUP_MEMBER);
        }
        var Nn = Cn;
        function An(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e4.users))
            throw Error('Invalid parameter: "users"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = e4.users.join(","), u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call removeGroupMembers", e4), se.call(this, u2, E2.MULTI_REMOVE_GROUP_MEMBER);
        }
        var Mn = An;
        function bn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!(Array.isArray(e4.username) || "string" == typeof e4.username && "" !== e4.username))
            throw Error('Invalid parameter: "username"');
          if ("number" != typeof e4.muteDuration)
            throw Error('Invalid parameter: "muteDuration"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { usernames: "string" == typeof e4.username ? [e4.username] : e4.username, mute_duration: e4.muteDuration }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/mute?resource=").concat(a2.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, data: JSON.stringify(c2), success: e4.success, error: e4.error };
          return B.debug("Call muteGroupMember", e4), se.call(this, u2, E2.MUTE_GROUP_MEMBER);
        }
        var Un = bn;
        function Pn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!(Array.isArray(e4.username) || "string" == typeof e4.username && "" !== e4.username))
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/mute/").concat(c2, "?resource=").concat(a2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call unmuteGroupMember", e4), se.call(this, u2, E2.UNMUTE_GROUP_MEMBER);
        }
        var wn = Pn;
        function kn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.groupId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatgroups/" + a2 + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getGroupMuteList", e4), se.call(this, s2, E2.GET_GROUP_MUTE_LIST);
        }
        var Ln = kn, Dn = kn;
        function xn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call blockGroupMember", e4), se.call(this, u2, E2.BLOCK_GROUP_MEMBER);
        }
        var Gn = xn;
        function Bn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e4.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { usernames: e4.usernames }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/blocks/users?resource=").concat(a2.clientResource), data: JSON.stringify(c2), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call blockGroupMembers", e4), se.call(this, u2, E2.BLOCK_GROUP_MEMBERS);
        }
        var Hn = Bn;
        function jn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call unblockGroupMember", e4), se.call(this, u2, E2.UNBLOCK_GROUP_MEMBER);
        }
        var Fn = jn;
        function Wn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e4.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = e4.usernames.join(","), u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call unblockGroupMembers", e4), se.call(this, u2, E2.UNBLOCK_GROUP_MEMBERS);
        }
        var Kn = Wn;
        function qn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.groupId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatgroups/" + a2 + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getGroupBlacklist", e4), se.call(this, s2, E2.GET_GROUP_BLACK_LIST);
        }
        var zn = qn, Vn = qn;
        function Jn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/ban?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call disableSendGroupMsg", e4), se.call(this, c2, E2.DISABLED_SEND_GROUP_MSG);
        }
        function Xn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/ban?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call enableSendGroupMsg", e4), se.call(this, c2, E2.ENABLE_SEND_GROUP_MSG);
        }
        function Yn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(e4.users))
            throw Error('Invalid parameter: "users"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { usernames: e4.users }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/white/users?resource=").concat(a2.clientResource), type: "POST", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call addUsersToGroupWhitelist", e4), se.call(this, u2, E2.ADD_USERS_TO_GROUP_WHITE);
        }
        var Qn = Yn;
        function Zn(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.userName || "" === e4.userName)
            throw Error('Invalid parameter: "userName"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/white/users/").concat(e4.userName, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call removeGroupAllowlistMember", e4), se.call(this, c2, E2.REMOVE_GROUP_WHITE_MEMBER);
        }
        var $n = Zn, ei = Zn;
        function ti(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.groupId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatgroups/" + a2 + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getGroupAllowlist", e4), se.call(this, s2, E2.GET_GROUP_WHITE_LIST);
        }
        var ri = ti;
        function oi(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.userName || "" === e4.userName)
            throw Error('Invalid parameter: "userName"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.groupId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatgroups/" + a2 + "/white/users/" + e4.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call isInGroupAllowlist", e4), se.call(this, s2, E2.IS_IN_GROUP_WHITE_LIST);
        }
        var ni = oi, ii = oi;
        function ai(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/sdk/chatgroups/" + e4.groupId + "/mute/" + a2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2 } };
          return B.debug("Call isInGroupMutelist", e4), se.call(this, s2).then(function(e5) {
            return { type: e5.type, data: e5.data };
          });
        }
        function si(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.msgId || "" === e4.msgId)
            throw Error('Invalid parameter: "msgId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatgroups/" + e4.groupId + "/acks/" + e4.msgId, dataType: "json", type: "GET", data: { limit: 500, key: void 0 }, headers: { Authorization: "Bearer " + i2 }, success: e4.success, error: e4.error };
          return B.debug("Call getGroupMsgReadUser", e4), se.call(this, a2, E2.GET_GROUP_MSG_READ_USER);
        }
        function ci(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.groupId, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(a2, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call fetchGroupAnnouncement", e4), se.call(this, s2, E2.GET_GROUP_ANN);
        }
        function ui(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.announcement)
            throw Error('Invalid parameter: "announcement"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = { announcement: e4.announcement }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/announcement?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call updateGroupAnnouncement", e4), se.call(this, u2, E2.UPDATE_GROUP_ANN);
        }
        function li(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("object" != typeof e4.file)
            throw Error('Invalid parameter: "file"');
          if (vt.call(this)) {
            var t4 = this.context, r2 = t4.orgName, o3 = t4.appName, n2 = t4.accessToken, i2 = t4.jid, a2 = e4.groupId;
            ge.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o3, "/chatgroups/").concat(a2, "/share_files?resource=").concat(i2.clientResource), onFileUploadProgress: e4.onFileUploadProgress, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadError: e4.onFileUploadError, onFileUploadCanceled: e4.onFileUploadCanceled, accessToken: n2, apiUrl: this.apiUrl, file: e4.file, appKey: this.context.appKey }, E2.UPLOAD_GROUP_FILE), B.debug("Call uploadGroupSharedFile", e4);
          }
        }
        function di(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.fileId || "" === e4.fileId)
            throw Error('Invalid parameter: "file"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.groupId, c2 = e4.fileId, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(s2, "/share_files/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call deleteGroupSharedFile", e4), se.call(this, u2, E2.DELETE_GROUP_FILE);
        }
        function pi(e4) {
          if ("string" != typeof e4.groupId || "" === e4.groupId)
            throw Error('Invalid parameter: "groupId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.pageNum || 1, s2 = e4.pageSize || 10, c2 = e4.groupId, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatgroups/").concat(c2, "/share_files?pagenum=").concat(a2, "&pagesize=").concat(s2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getGroupSharedFilelist", e4), se.call(this, u2, E2.GET_GROUP_FILE_LIST);
        }
        var hi = pi;
        function fi(e4) {
          var t4 = this.context, r2 = t4.orgName, o3 = t4.appName, n2 = t4.accessToken, i2 = this.apiUrl, a2 = e4.groupId, s2 = e4.fileId;
          Ee.call(this, { url: "".concat(i2, "/").concat(r2, "/").concat(o3, "/chatgroups/").concat(a2, "/share_files/").concat(s2), onFileDownloadComplete: e4.onFileDownloadComplete, onFileDownloadError: e4.onFileDownloadError, accessToken: n2, id: s2, secret: e4.secret }, E2.DOWN_GROUP_FILE), B.debug("Call downloadGroupSharedFile", e4);
        }
        function mi(e4) {
          return Wo(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2, l2, p3;
            return Ko(this, function(h2) {
              switch (h2.label) {
                case 0:
                  if (t4 = e4.groupId, r2 = e4.userId, o3 = e4.memberAttributes, "string" != typeof t4 || "" === t4)
                    throw Error('Invalid parameter: "groupId"');
                  if ("string" != typeof r2 || "" === r2)
                    throw Error('Invalid parameter: "userId"');
                  if ("object" != typeof o3)
                    throw Error('Invalid parameter: "memberAttributes"');
                  return vt.call(this) ? (i2 = this.context, a2 = i2.orgName, s2 = i2.appName, c2 = i2.accessToken, u2 = i2.jid, l2 = { metaData: o3 }, p3 = { url: "".concat(this.apiUrl, "/").concat(a2, "/").concat(s2, "/sdk/metadata/chatgroup/").concat(t4, "/user/").concat(r2, "?resource=").concat(u2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(l2), headers: { Authorization: "Bearer " + c2, "Content-Type": "application/json" } }, B.debug("Call setGroupMemberAttributes", e4), [4, se.call(this, p3, E2.SET_GROUP_MEMBER_ATTRS)]) : (n2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(n2)]);
                case 1:
                  return h2.sent(), [2];
              }
            });
          });
        }
        function gi(e4) {
          var t4 = e4.groupId, r2 = e4.userId;
          return Ei.call(this, { groupId: t4, userIds: [r2] }).then(function(e5) {
            var t5;
            return { type: e5.type, data: null === (t5 = e5.data) || void 0 === t5 ? void 0 : t5[r2] };
          });
        }
        function Ei(e4) {
          var t4 = e4.groupId, r2 = e4.userIds, o3 = e4.keys, n2 = void 0 === o3 ? [] : o3;
          if ("string" != typeof t4 || "" === t4)
            throw Error('Invalid parameter: "groupId"');
          if (!Array.isArray(r2) || (null == r2 ? void 0 : r2.length) <= 0)
            throw Error('Invalid parameter: "userIds"');
          if (!Array.isArray(n2))
            throw Error('Invalid parameter: "keys"');
          if (!vt.call(this)) {
            var i2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(i2);
          }
          var a2 = this.context, s2 = a2.orgName, c2 = a2.appName, u2 = a2.accessToken, l2 = { targets: r2, properties: n2 }, p3 = { url: "".concat(this.apiUrl, "/").concat(s2, "/").concat(c2, "/sdk/metadata/chatgroup/").concat(t4, "/get"), type: "POST", dataType: "json", data: JSON.stringify(l2), headers: { Authorization: "Bearer " + u2, "Content-Type": "application/json" } };
          return B.debug("Call getGroupMembersAttributes", e4), se.call(this, p3, E2.GET_GROUP_MEMBER_ATTR).then(function(e5) {
            return { type: e5.type, data: (null == e5 ? void 0 : e5.data) || {} };
          });
        }
        function yi(e4) {
          var t4 = this;
          if ("number" != typeof e4.pagenum || "number" != typeof e4.pagesize)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          var o3 = { pagenum: e4.pagenum || 1, pagesize: e4.pagesize || 20 }, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = { url: this.apiUrl + "/" + i2 + "/" + a2 + "/chatrooms", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + s2 }, data: o3, success: function(t5) {
            "function" == typeof e4.success && e4.success(t5);
          }, error: function(r3) {
            r3.error && r3.error_description && t4.onError && t4.onError({ type: d.WEBIM_CONNCTION_LOAD_CHATROOM_ERROR, message: r3.error_description, data: r3 }), "function" == typeof e4.error && e4.error(r3);
          } };
          return B.debug("Call getChatRooms", e4), se.call(this, c2, E2.GET_CHATROOM_LIST);
        }
        function vi(e4) {
          if ("string" != typeof e4.name)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = { name: e4.name, description: e4.description, maxusers: e4.maxusers, owner: this.user, members: e4.members }, o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = o3.jid, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/chatrooms?resource=").concat(s2.clientResource), dataType: "json", type: "POST", data: JSON.stringify(r2), headers: { Authorization: "Bearer " + (e4.token || a2), "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call createChatRoom", e4), se.call(this, c2, E2.CREATE_CHATROOM);
        }
        function Ti(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(e4.chatRoomId, "?resource=").concat(a2.clientResource, "&version=v3"), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + (e4.token || i2) }, success: e4.success, error: e4.error };
          return B.debug("Call destroyChatRoom", e4), se.call(this, s2, E2.DESTROY_CHATROOM);
        }
        function _i(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatrooms/" + e4.chatRoomId, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getChatRoomDetails", e4), se.call(this, a2, E2.GET_CHATROOM_DETAIL);
        }
        function Ri(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = { groupname: e4.chatRoomName, description: e4.description, maxusers: e4.maxusers }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "?resource=").concat(a2.clientResource), type: "PUT", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call modifyChatRoom", e4), se.call(this, u2, E2.MODIFY_CHATROOM);
        }
        function Oi(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId || "string" != typeof e4.username)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call removeChatRoomMember", e4), se.call(this, u2, E2.REMOVE_CHATROOM_MEMBER);
        }
        var Ii = Oi;
        function Si(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId || !Array.isArray(e4.users))
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = e4.chatRoomId, o3 = e4.users.join(","), n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/chatrooms/").concat(r2, "/users/").concat(o3, "?resource=").concat(c2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call removeChatRoomMembers", e4), se.call(this, u2, E2.MULTI_REMOVE_CHATROOM_MEMBER);
        }
        var Ci = Si;
        function Ni(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId || !Array.isArray(e4.users))
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = e4.chatRoomId, o3 = { usernames: e4.users }, n2 = this.context, i2 = n2.orgName, a2 = n2.appName, s2 = n2.accessToken, c2 = n2.jid, u2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/chatrooms/").concat(r2, "/users?resource=").concat(c2.clientResource), type: "POST", data: JSON.stringify(o3), dataType: "json", headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call addUsersToChatRoom", e4), se.call(this, u2, E2.ADD_USERS_TO_CHATROOM);
        }
        function Ai(e4) {
          var t4 = e4.roomId, r2 = e4.message, o3 = void 0 === r2 ? "" : r2, n2 = e4.ext, i2 = void 0 === n2 ? "" : n2, a2 = e4.leaveOtherRooms, s2 = void 0 !== a2 && a2, c2 = e4.success, u2 = e4.error;
          if ("string" != typeof t4 || "" === t4)
            throw Error("Invalid parameter roomId");
          if ("string" != typeof i2)
            throw Error("Invalid parameter ext");
          if ("boolean" != typeof s2)
            throw Error("Invalid parameter leaveOtherRooms");
          if (!vt.call(this)) {
            var l2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(l2);
          }
          return B.debug("Call joinChatRoom", e4), this.logOut ? Promise.reject({ type: d.WEBIM_CONNECTION_CLOSED, message: "not login" }) : this.mSync.handleChatRoom({ roomId: t4, ext: i2, leaveOtherRooms: s2, message: o3, success: c2, error: u2 }, "join");
        }
        function Mi(e4) {
          if ("string" != typeof e4.roomId || "" === e4.roomId)
            throw Error("Invalid parameter");
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          return B.debug("Call leaveChatRoom", e4), this.logOut ? Promise.reject({ type: d.WEBIM_CONNECTION_CLOSED, message: "not login" }) : this.mSync.handleChatRoom(e4, "leave");
        }
        var bi = Mi;
        function Ui(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (isNaN(e4.pageNum) || e4.pageNum <= 0)
            throw Error('The parameter "pageNum" should be a positive number');
          if (isNaN(e4.pageSize) || e4.pageSize <= 0)
            throw Error('The parameter "pageSize" should be a positive number');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = { pagenum: e4.pageNum, pagesize: e4.pageSize }, o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = { url: this.apiUrl + "/" + n2 + "/" + i2 + "/chatrooms/" + e4.chatRoomId + "/users", dataType: "json", type: "GET", data: r2, headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call listChatRoomMembers", e4), se.call(this, s2, E2.LIST_CHATROOM_MEMBERS);
        }
        var Pi = Ui;
        function wi(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.chatRoomId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatrooms/" + a2 + "/admin", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getChatRoomAdmin", e4), se.call(this, s2, E2.GET_CHATROOM_ADMIN);
        }
        function ki(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = { newadmin: e4.username }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/admin?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call setChatRoomAdmin", e4), se.call(this, u2, E2.SET_CHATROOM_ADMIN);
        }
        function Li(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/admin/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call removeChatRoomAdmin", e4), se.call(this, u2, E2.REMOVE_CHATROOM_ADMIN);
        }
        function Di(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "groupId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if ("number" != typeof e4.muteDuration)
            throw Error('Invalid parameter: "muteDuration"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = { usernames: [e4.username], mute_duration: e4.muteDuration }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/mute?resource=").concat(a2.clientResource), dataType: "json", type: "POST", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, data: JSON.stringify(c2), success: e4.success, error: e4.error };
          return B.debug("Call muteChatRoomMember", e4), se.call(this, u2, E2.MUTE_CHATROOM_MEMBER);
        }
        function xi(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/mute/").concat(c2, "?resource=").concat(a2.clientResource), dataType: "json", type: "DELETE", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call unmuteChatRoomMember", e4), se.call(this, u2, E2.REMOVE_MUTE_CHATROOM_MEMBER);
        }
        var Gi = xi;
        function Bi(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.chatRoomId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatrooms/" + a2 + "/mute", dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getChatRoomMutelist", e4), se.call(this, s2, E2.GET_MUTE_CHATROOM_MEMBERS);
        }
        var Hi = Bi, ji = Bi;
        function Fi(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call blockChatRoomMember", e4), se.call(this, u2, E2.SET_CHATROOM_MEMBER_TO_BLACK);
        }
        var Wi = Fi;
        function Ki(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(e4.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = { usernames: e4.usernames }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/blocks/users?resource=").concat(a2.clientResource), data: JSON.stringify(c2), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Chat blockChatRoomMembers:", u2), se.call(this, u2, E2.MULTI_SET_CHATROOM_MEMBER_TO_BLACK);
        }
        var qi = Ki;
        function zi(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error('Invalid parameter: "username"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = e4.username, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call unblockChatRoomMember", e4), se.call(this, u2, E2.REMOVE_CHATROOM_MEMBER_BLACK);
        }
        var Vi = zi;
        function Ji(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(e4.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = e4.usernames.join(","), u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/blocks/users/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call unblockChatRoomMembers", e4), se.call(this, u2, E2.MULTI_REMOVE_CHATROOM_MEMBER_BLACK);
        }
        var Xi = Ji;
        function Yi(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.chatRoomId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatrooms/" + a2 + "/blocks/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getChatRoomBlocklist", e4), se.call(this, s2, E2.GET_CHATROOM_BLOCK_MEMBERS);
        }
        var Qi = Yi, Zi = Yi;
        function $i(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/ban?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call disableSendChatRoomMsg", e4), se.call(this, c2, E2.DISABLED_CHATROOM_SEND_MSG);
        }
        function ea(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/ban?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call enableSendChatRoomMsg", e4), se.call(this, c2, E2.ENABLE_CHATROOM_SEND_MSG);
        }
        function ta(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!Array.isArray(e4.users))
            throw Error('Invalid parameter: "users"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = { usernames: e4.users }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/white/users?resource=").concat(a2.clientResource), type: "POST", data: JSON.stringify(c2), dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call addUsersToChatRoomWhitelist", e4), se.call(this, u2, E2.ADD_USERS_TO_CHATROOM);
        }
        var ra = ta;
        function oa(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if ("string" != typeof e4.userName || "" === e4.userName)
            throw Error('Invalid parameter: "userName"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.chatRoomId, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/white/users/").concat(e4.userName, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call removeChatRoomAllowlistMember", e4), se.call(this, c2, E2.REMOVE_CHATROOM_WHITE_USERS);
        }
        var na = oa, ia = oa;
        function aa(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.chatRoomId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatrooms/" + a2 + "/white/users", type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getChatRoomAllowlist", e4), se.call(this, s2, E2.GET_CHATROOM_WHITE_USERS);
        }
        var sa = aa;
        function ca(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if ("string" != typeof e4.userName || "" === e4.userName)
            throw Error('Invalid parameter: "userName"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.chatRoomId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/chatrooms/" + a2 + "/white/users/" + e4.userName, type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call isInChatRoomAllowlist", e4), se.call(this, s2, E2.CHECK_CHATROOM_WHITE_USER);
        }
        var ua = ca;
        function la(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error('Invalid parameter: "chatRoomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = { url: this.apiUrl + "/" + o3 + "/" + n2 + "/sdk/chatrooms/" + e4.chatRoomId + "/mute/" + a2, dataType: "json", type: "GET", headers: { Authorization: "Bearer " + i2 } };
          return B.debug("Call isInChatRoomMutelist", e4), se.call(this, s2).then(function(e5) {
            return { type: e5.type, data: e5.data };
          });
        }
        function da(e4) {
          if ("string" != typeof e4.roomId || "" === e4.roomId)
            throw Error('Invalid parameter: "roomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.roomId, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(a2, "/announcement"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call fetchChatRoomAnnouncement", e4), se.call(this, s2, E2.GET_CHATROOM_ANN);
        }
        function pa(e4) {
          if ("string" != typeof e4.roomId || "" === e4.roomId)
            throw Error('Invalid parameter: "roomId"');
          if ("string" != typeof e4.announcement)
            throw Error('Invalid parameter: "announcement"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.roomId, c2 = { announcement: e4.announcement }, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/announcement?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call updateChatRoomAnnouncement:", e4), se.call(this, u2, E2.UPDATE_CHATROOM_ANN);
        }
        function ha(e4) {
          if ("string" != typeof e4.roomId || "" === e4.roomId)
            throw Error('Invalid parameter: "roomId"');
          if ("object" != typeof e4.file)
            throw Error('Invalid parameter: "file"');
          if (vt.call(this)) {
            var t4 = this.context, r2 = t4.orgName, o3 = t4.appName, n2 = t4.accessToken, i2 = t4.jid, a2 = e4.roomId;
            ge.call(this, { uploadUrl: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o3, "/chatrooms/").concat(a2, "/share_files?resource=").concat(i2.clientResource), onFileUploadProgress: e4.onFileUploadProgress, onFileUploadComplete: e4.onFileUploadComplete, onFileUploadError: e4.onFileUploadError, onFileUploadCanceled: e4.onFileUploadCanceled, accessToken: n2, apiUrl: this.apiUrl, file: e4.file, appKey: this.context.appKey }, E2.UPLOAD_CHATROOM_FILE), B.debug("Call uploadChatRoomSharedFile", e4);
          }
        }
        function fa(e4) {
          if ("string" != typeof e4.roomId || "" === e4.roomId)
            throw Error('Invalid parameter: "roomId"');
          if ("string" != typeof e4.fileId || "" === e4.fileId)
            throw Error('Invalid parameter: "fileId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = e4.roomId, c2 = e4.fileId, u2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(s2, "/share_files/").concat(c2, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call deleteChatRoomSharedFile", e4), se.call(this, u2, E2.DELETE_CHATROOM_FILE);
        }
        function ma(e4) {
          if ("string" != typeof e4.roomId || "" === e4.roomId)
            throw Error('Invalid parameter: "roomId"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = e4.roomId, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/chatrooms/").concat(a2, "/share_files"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json", accept: "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call fetchChatRoomSharedFileList", e4), se.call(this, s2, E2.GET_CHATROOM_FILES);
        }
        var ga = ma;
        function Ea(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error("Invalid parameter chatRoomId: " + e4.chatRoomId);
          if (e4.attributeKeys && !Array.isArray(e4.attributeKeys))
            throw Error('"Invalid parameter attributeKeys": ' + e4.attributeKeys);
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = (r2.jid, e4.chatRoomId), s2 = { keys: e4.attributeKeys }, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/metadata/chatroom/").concat(a2), type: "POST", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return B.debug("Call getChatRoomAttributes:", e4), se.call(this, c2, E2.GET_CHATROOM_ATTR).then(function(e5) {
            return { data: e5.data, type: e5.type };
          });
        }
        function ya(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error("Invalid parameter chatRoomId: " + e4.chatRoomId);
          if ("object" != typeof e4.attributes)
            throw Error("Invalid parameter attributes: " + e4.attributes);
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = e4.chatRoomId, c2 = e4.attributes, u2 = e4.autoDelete, l2 = void 0 === u2 || u2, p3 = e4.isForced ? "/forced" : "", h2 = { metaData: c2, autoDelete: l2 ? "DELETE" : "NO_DELETE" }, f3 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/metadata/chatroom/").concat(s2, "/user/").concat(a2) + p3, type: "PUT", dataType: "json", data: JSON.stringify(h2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return B.debug("Call setChatRoomAttributes:", e4), se.call(this, f3, E2.SET_CHATROOM_ATTR).then(function(e5) {
            return Tt(e5);
          });
        }
        function va(e4) {
          var t4;
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error("Invalid parameter chatRoomId: " + e4.chatRoomId);
          if ("string" != typeof e4.attributeKey || "" === e4.attributeKey)
            throw Error("Invalid parameter attributeKey: " + e4.attributeKey);
          if ("string" != typeof e4.attributeValue || "" === e4.attributeValue)
            throw Error("Invalid parameter attributeValue: " + e4.attributeValue);
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          var o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = o3.userId, c2 = e4.chatRoomId, u2 = e4.attributeKey, l2 = e4.attributeValue, p3 = e4.autoDelete, h2 = void 0 === p3 || p3, f3 = e4.isForced ? "/forced" : "", g2 = { metaData: (t4 = {}, t4[u2] = l2, t4), autoDelete: h2 ? "DELETE" : "NO_DELETE" }, y2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/metadata/chatroom/").concat(c2, "/user/").concat(s2) + f3, type: "PUT", dataType: "json", data: JSON.stringify(g2), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
          return B.debug("Call setChatRoomAttribute:", e4), se.call(this, y2, E2.SET_CHATROOM_ATTR).then(function(e5) {
            var t5 = _t(e5);
            if (t5)
              throw t5;
          });
        }
        function Ta(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error("Invalid parameter chatRoomId: " + e4.chatRoomId);
          if (!Array.isArray(e4.attributeKeys))
            throw Error('"Invalid parameter attributes": ' + e4.attributeKeys);
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = e4.chatRoomId, c2 = e4.attributeKeys, u2 = e4.isForced ? "/forced" : "", l2 = { keys: c2 }, p3 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/metadata/chatroom/").concat(s2, "/user/").concat(a2) + u2, type: "DELETE", dataType: "json", data: JSON.stringify(l2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return B.debug("Call removeChatRoomAttributes:", e4), se.call(this, p3, E2.DELETE_CHATROOM_ATTR).then(function(e5) {
            return Tt(e5);
          });
        }
        function _a(e4) {
          if ("string" != typeof e4.chatRoomId || "" === e4.chatRoomId)
            throw Error("Invalid parameter chatRoomId: " + e4.chatRoomId);
          if ("string" != typeof e4.attributeKey || "" === e4.attributeKey)
            throw Error('"Invalid parameter attributeKey": ' + e4.attributeKey);
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.userId, s2 = e4.chatRoomId, c2 = e4.attributeKey, u2 = e4.isForced ? "/forced" : "", l2 = { keys: [c2] }, p3 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/metadata/chatroom/").concat(s2, "/user/").concat(a2) + u2, type: "DELETE", dataType: "json", data: JSON.stringify(l2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return B.debug("Call removeChatRoomAttribute:", e4), se.call(this, p3, E2.DELETE_CHATROOM_ATTR).then(function(e5) {
            var t5 = _t(e5);
            if (t5)
              throw t5;
          });
        }
        function Ra(e4) {
          var t4 = this, r2 = e4 || {}, o3 = r2.pageNum, n2 = r2.pageSize;
          if (isNaN(o3) || o3 <= 0)
            throw Error("Invalid parameter pageNum:".concat(o3));
          if (isNaN(n2) || n2 <= 0)
            throw Error("Invalid parameter pageSize:".concat(n2));
          if (!vt.call(this)) {
            var i2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(i2);
          }
          var a2 = { pagenum: o3, pagesize: n2, detail: true }, s2 = this.context, c2 = s2.orgName, u2 = s2.appName, l2 = s2.accessToken, p3 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(this.user, "/joined_chatrooms"), dataType: "json", type: "GET", data: a2, headers: { Authorization: "Bearer " + l2, "Content-Type": "application/json" } };
          return B.debug("Call getJoinedChatRooms", e4), se.call(this, p3, E2.GET_USER_JOINED_CHATROOM).then(function(e5) {
            var r3 = (e5.data || []).map(function(e6) {
              var r4 = e6.id, o4 = e6.title, n3 = e6.owner, i3 = e6.created, a3 = e6.description, s3 = e6.max_users;
              return { id: r4, name: o4, owner: n3.split("".concat(t4.appKey, "_"))[1], created: i3, description: a3, maxusers: s3 };
            });
            return { type: e5.type, data: r3 };
          });
        }
        var Oa = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, Ia = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        };
        function Sa(e4) {
          return Oa(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2, c2, u2;
            return Ia(this, function(l2) {
              switch (l2.label) {
                case 0:
                  if ("string" != typeof e4.description)
                    throw Error('Invalid parameter: "description"');
                  return vt.call(this) ? (r2 = this.context, o3 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = this.context.jid.clientResource, c2 = { ext: e4.description }, u2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/presence/").concat(s2, "/1"), type: "POST", dataType: "json", data: JSON.stringify(c2), headers: { Authorization: "Bearer " + o3, "Content-Type": "application/json" }, success: e4.success, error: e4.error }, B.debug("Call publishPresence:", e4), [4, se.call(this, u2)]) : (t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)]);
                case 1:
                  return l2.sent(), [2];
              }
            });
          });
        }
        function Ca(e4) {
          if (!Array.isArray(e4.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!e4.usernames.length)
            throw Error('"usernames" can not be empty');
          if ("number" != typeof e4.expiry)
            throw Error('Invalid parameter: "expiry"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.userId, a2 = r2.accessToken, s2 = { usernames: e4.usernames }, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(i2, "/presence/").concat(e4.expiry), type: "POST", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call subscribePresence:", e4), se.call(this, c2).then(function(e5) {
            return e5.data = { result: null == e5 ? void 0 : e5.result }, e5;
          });
        }
        function Na(e4) {
          return Oa(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2;
            return Ia(this, function(c2) {
              switch (c2.label) {
                case 0:
                  if (!Array.isArray(e4.usernames))
                    throw Error('Invalid parameter: "usernames"');
                  if (!e4.usernames.length)
                    throw Error('"usernames" can not be empty');
                  return vt.call(this) ? (r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.userId, a2 = r2.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(i2, "/presence"), type: "DELETE", dataType: "json", data: JSON.stringify(e4.usernames), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e4.success, error: e4.error }, B.debug("Call unsubscribePresence:", e4), [4, se.call(this, s2)]) : (t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)]);
                case 1:
                  return c2.sent(), [2];
              }
            });
          });
        }
        function Aa(e4) {
          if ("number" != typeof e4.pageNum || "number" != typeof e4.pageSize)
            throw Error('Invalid parameter: "pageNum or pageSize"');
          if (e4.pageNum < 0 || e4.pageSize < 0)
            throw Error('"pageNum" should >= 0 and "pageSize" should >= 0');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.userId, a2 = r2.accessToken, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(i2, "/presence/sublist?pageNum=").concat(e4.pageNum, "&pageSize=").concat(e4.pageSize), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getSubscribedPresenceList:", e4), se.call(this, s2).then(function(e5) {
            return e5.data = { result: null == e5 ? void 0 : e5.result }, e5;
          });
        }
        var Ma = Aa;
        function ba(e4) {
          if (!Array.isArray(e4.usernames))
            throw Error('Invalid parameter: "usernames"');
          if (!e4.usernames.length)
            throw Error('"usernames" can not be empty');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = { usernames: e4.usernames }, o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.userId, s2 = o3.accessToken, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/presence"), type: "POST", dataType: "json", data: JSON.stringify(r2), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getPresenceStatus:", e4), se.call(this, c2).then(function(e5) {
            return e5.data = { result: null == e5 ? void 0 : e5.result }, e5;
          });
        }
        function Ua(e4) {
          if (!(e4.options instanceof Object))
            throw Error('Invalid parameter: "options"');
          var t4 = e4.options.paramType;
          if ("number" != typeof t4 || t4 < 0 || t4 > 2)
            throw Error('Invalid parameter: "options of paramType"');
          if (0 === t4) {
            if ("string" != typeof e4.options.remindType)
              throw Error('Invalid parameter: "options of remindType"');
          } else if (1 === t4) {
            if ("number" != typeof e4.options.duration)
              throw Error('Invalid parameter: "options of duration"');
          } else if (2 === t4) {
            var r2 = e4.options, o3 = r2.startTime, n2 = r2.endTime;
            if (!(o3 instanceof Object && Object.keys(o3).length))
              throw Error('Invalid parameter: "options of startTime"');
            if (!o3.hours || "number" != typeof o3.hours || !o3.minutes || "number" != typeof o3.minutes)
              throw Error('Invalid parameter: "options of startTime of hours or minutes"');
            if (!(n2 instanceof Object && Object.keys(n2).length))
              throw Error('Invalid parameter: "options of endTime"');
            if (!n2.hours || "number" != typeof n2.hours || !n2.minutes || "number" != typeof n2.minutes)
              throw Error('Invalid parameter: "options of endTime of hours or minutes"');
          }
          if (!vt.call(this)) {
            var i2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(i2);
          }
          var a2 = this.context, s2 = a2.accessToken, c2 = a2.orgName, u2 = a2.appName, l2 = a2.userId, p3 = a2.jid, h2 = {};
          switch (t4) {
            case 0:
              h2 = { type: e4.options.remindType };
              break;
            case 1:
              h2 = { ignoreDuration: e4.options.duration };
              break;
            case 2:
              var f3 = e4.options;
              o3 = f3.startTime, n2 = f3.endTime, h2 = { ignoreInterval: "".concat(o3.hours, ":").concat(o3.minutes, "-").concat(n2.hours, ":").concat(n2.minutes) };
          }
          var g2 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(l2, "/notification/user/").concat(l2, "?resource=").concat(p3.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(h2), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call setSilentModeForAll:", e4), se.call(this, g2);
        }
        function Pa(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/user/").concat(a2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + o3, "Content-Type": "application/json" }, success: null == e4 ? void 0 : e4.success, error: null == e4 ? void 0 : e4.error };
          return B.debug("Call getSilentModeForAll:", e4), se.call(this, s2);
        }
        function wa(e4) {
          if ("string" != typeof e4.conversationId || !e4.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if ("string" != typeof e4.type || !e4.type)
            throw Error('Invalid parameter: "type"');
          if (!(e4.options instanceof Object))
            throw Error('Invalid parameter: "options"');
          var t4 = e4.options.paramType;
          if ("number" != typeof t4 || t4 < 0 || t4 > 2)
            throw Error('Invalid parameter: "options of paramType"');
          if (0 === t4) {
            if ("string" != typeof e4.options.remindType)
              throw Error('Invalid parameter: "options of remindType"');
          } else if (1 === t4) {
            if ("number" != typeof e4.options.duration)
              throw Error('Invalid parameter: "options of duration"');
          } else if (2 === t4) {
            var r2 = e4.options, o3 = r2.startTime, n2 = r2.endTime;
            if (!(o3 instanceof Object && Object.keys(o3).length))
              throw Error('Invalid parameter: "options of startTime"');
            if (!o3.hours || "number" != typeof o3.hours || !o3.minutes || "number" != typeof o3.minutes)
              throw Error('Invalid parameter: "options of startTime of hours or minutes"');
            if (!(n2 instanceof Object && Object.keys(n2).length))
              throw Error('Invalid parameter: "options of endTime"');
            if (!n2.hours || "number" != typeof n2.hours || !n2.minutes || "number" != typeof n2.minutes)
              throw Error('Invalid parameter: "options of endTime of hours or minutes"');
          }
          if (!vt.call(this)) {
            var i2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(i2);
          }
          var a2 = this.context, s2 = a2.accessToken, c2 = a2.orgName, u2 = a2.appName, l2 = a2.userId, p3 = a2.jid, h2 = "chatgroup", f3 = {};
          switch (t4) {
            case 0:
              f3 = { type: e4.options.remindType };
              break;
            case 1:
              f3 = { ignoreDuration: e4.options.duration };
              break;
            case 2:
              var g2 = e4.options;
              o3 = g2.startTime, n2 = g2.endTime, f3 = { ignoreInterval: "".concat(o3.hours, ":").concat(o3.minutes, "-").concat(n2.hours, ":").concat(n2.minutes) };
          }
          "singleChat" === e4.type && (h2 = "user");
          var E3 = { url: "".concat(this.apiUrl, "/").concat(c2, "/").concat(u2, "/users/").concat(l2, "/notification/").concat(h2, "/").concat(e4.conversationId, "?resource=").concat(p3.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(f3), headers: { Authorization: "Bearer " + s2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call setSilentModeForConversation:", e4), se.call(this, E3);
        }
        function ka(e4) {
          if ("string" != typeof e4.conversationId || !e4.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if ("string" != typeof e4.type || !e4.type)
            throw Error('Invalid parameter: "type"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = r2.jid, c2 = "chatgroup";
          "singleChat" === e4.type && (c2 = "user");
          var u2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/").concat(c2, "/").concat(e4.conversationId, "?resource=").concat(s2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify({ type: "DEFAULT" }), headers: { Authorization: "Bearer " + o3, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call clearRemindTypeForConversation:", e4), se.call(this, u2);
        }
        function La(e4) {
          if ("string" != typeof e4.conversationId || !e4.conversationId)
            throw Error('Invalid parameter: "conversationId"');
          if ("string" != typeof e4.type || !e4.type)
            throw Error('Invalid parameter: "type"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = "chatgroup";
          "singleChat" === e4.type && (s2 = "user");
          var c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/").concat(s2, "/").concat(e4.conversationId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + o3, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getSilentModeForConversation:", e4), se.call(this, c2);
        }
        function Da(e4) {
          if (!Array.isArray(e4.conversationList))
            throw Error('Invalid parameter: "conversationList"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = [], c2 = [];
          e4.conversationList.forEach(function(e5) {
            "singleChat" === e5.type ? s2.push(e5.id) : c2.push(e5.id);
          });
          var u2 = s2.length ? s2.join(",") : "", l2 = c2.length ? c2.join(",") : "", p3 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification?user=").concat(u2, "&group=").concat(l2), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + o3, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call getSilentModeForConversations:", e4), se.call(this, p3);
        }
        function xa(e4) {
          if ("string" != typeof e4.language || !e4.language)
            throw Error('Invalid parameter: "language"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = { translationLanguage: e4.language }, o3 = this.context, n2 = o3.accessToken, i2 = o3.orgName, a2 = o3.appName, s2 = o3.userId, c2 = { url: "".concat(this.apiUrl, "/").concat(i2, "/").concat(a2, "/users/").concat(s2, "/notification/language"), type: "PUT", dataType: "json", data: JSON.stringify(r2), headers: { Authorization: "Bearer " + n2, "Content-Type": "application/json" }, success: e4.success, error: e4.error };
          return B.debug("Call setPushPerformLanguage:", e4), se.call(this, c2);
        }
        function Ga(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/language"), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + o3, "Content-Type": "application/json" }, success: null == e4 ? void 0 : e4.success, error: null == e4 ? void 0 : e4.error };
          return B.debug("Call getPushPerformLanguage:", e4), se.call(this, s2);
        }
        function Ba(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          if ("number" != typeof e4.pageSize)
            throw Error('Invalid parameter: "pageSize"');
          var r2 = this.context, o3 = r2.accessToken, n2 = r2.orgName, i2 = r2.appName, a2 = r2.userId, s2 = { limit: e4.pageSize || 10, cursor: e4.cursor };
          e4.cursor || delete s2.cursor;
          var c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/users/").concat(a2, "/notification/mute/type"), type: "GET", dataType: "json", data: s2, headers: { Authorization: "Bearer " + o3, "Content-Type": "application/json" } };
          return B.debug("Call getSilentModeRemindTypeConversations:", e4), se.call(this, c2).then(function(e5) {
            return e5.data ? { data: { conversations: e5.data.map(function(e6) {
              return "user" in e6 ? { conversationId: e6.user, type: "singleChat", remindType: e6.value } : { conversationId: e6.group, type: "groupChat", remindType: e6.value };
            }), cursor: e5.cursor }, type: e5.type } : e5;
          });
        }
        var Ha = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, ja = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        };
        function Fa(e4) {
          if ("string" != typeof e4.name || "" === e4.name)
            throw Error("Invalid parameter name: ".concat(e4.name));
          if ("string" != typeof e4.messageId || "" === e4.messageId)
            throw Error("Invalid parameter messageId: ".concat(e4.messageId));
          if ("string" != typeof e4.parentId || "" === e4.parentId)
            throw Error("Invalid parameter parentId: ".concat(e4.parentId));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { name: e4.name, msg_id: e4.messageId, group_id: e4.parentId, owner: this.user }, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/thread?resource=").concat(a2.clientResource), type: "POST", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, c2).then(function(e5) {
            var t5 = e5.data.thread_id;
            return e5.data = { chatThreadId: t5 }, e5;
          });
        }
        function Wa(e4) {
          if ("string" != typeof e4.chatThreadId || "" === e4.chatThreadId)
            throw Error("Invalid parameter chatThreadId: ".concat(e4.chatThreadId));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/thread/").concat(e4.chatThreadId, "/user/").concat(this.user, "/join?resource=").concat(a2.clientResource), type: "POST", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, s2).then(function(e5) {
            var t5 = e5.data.detail;
            return t5.messageId = t5.msgId, t5.parentId = t5.groupId, delete t5.msgId, delete t5.groupId, e5;
          });
        }
        function Ka(e4) {
          return Ha(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2;
            return ja(this, function(c2) {
              switch (c2.label) {
                case 0:
                  if ("string" != typeof e4.chatThreadId || "" === e4.chatThreadId)
                    throw Error("Invalid parameter chatThreadId: ".concat(e4.chatThreadId));
                  return vt.call(this) ? (r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/thread/").concat(e4.chatThreadId, "/user/").concat(this.user, "/quit?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2)]) : (t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)]);
                case 1:
                  return c2.sent(), [2];
              }
            });
          });
        }
        function qa(e4) {
          return Ha(this, void 0, void 0, function() {
            var t4, r2, o3, n2, i2, a2, s2;
            return ja(this, function(c2) {
              switch (c2.label) {
                case 0:
                  if ("string" != typeof e4.chatThreadId || "" === e4.chatThreadId)
                    throw Error("Invalid parameter chatThreadId: ".concat(e4.chatThreadId));
                  return vt.call(this) ? (r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/thread/").concat(e4.chatThreadId, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } }, [4, se.call(this, s2)]) : (t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" }), [2, Promise.reject(t4)]);
                case 1:
                  return c2.sent(), [2];
              }
            });
          });
        }
        function za(e4) {
          if ("string" != typeof e4.chatThreadId || "" === e4.chatThreadId)
            throw Error("Invalid parameter chatThreadId: ".concat(e4.chatThreadId));
          if ("string" != typeof e4.name || "" === e4.name)
            throw Error("Invalid parameter name: ".concat(e4.name));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { name: e4.name }, c2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/thread/").concat(e4.chatThreadId, "?resource=").concat(a2.clientResource), type: "PUT", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, c2);
        }
        function Va(e4) {
          if ("string" != typeof e4.chatThreadId || "" === e4.chatThreadId)
            throw Error("Invalid parameter chatThreadId: ".concat(e4.chatThreadId));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { limit: e4.pageSize || 20, cursor: e4.cursor || "" }, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/thread/").concat(e4.chatThreadId, "/users"), type: "GET", dataType: "json", data: a2, headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, s2);
        }
        function Ja(e4) {
          if ("string" != typeof e4.chatThreadId || "" === e4.chatThreadId)
            throw Error("Invalid parameter chatThreadId: ".concat(e4.chatThreadId));
          if ("string" != typeof e4.username || "" === e4.username)
            throw Error("Invalid parameter username: ".concat(e4.username));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = r2.jid, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/thread/").concat(e4.chatThreadId, "/users/").concat(e4.username, "?resource=").concat(a2.clientResource), type: "DELETE", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, s2);
        }
        function Xa(e4) {
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { limit: e4.pageSize || 20, cursor: e4.cursor || "" }, s2 = { url: e4.parentId ? "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/threads/chatgroups/").concat(e4.parentId, "/user/").concat(this.user) : "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/threads/user/").concat(this.user), type: "GET", dataType: "json", data: a2, headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, s2).then(function(e5) {
            var t5 = e5.entities;
            return null == t5 || t5.forEach(function(e6) {
              e6.parentId = e6.groupId, e6.messageId = e6.msgId, delete e6.groupId, delete e6.msgId;
            }), e5;
          });
        }
        function Ya(e4) {
          if ("string" != typeof e4.parentId || "" === e4.parentId)
            throw Error("Invalid parameter parentId: ".concat(e4.parentId));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { cursor: e4.cursor || "", limit: e4.pageSize || 20 }, s2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/threads/chatgroups/").concat(e4.parentId), type: "GET", dataType: "json", data: a2, headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, s2).then(function(e5) {
            var t5 = e5.entities;
            return null == t5 || t5.forEach(function(e6) {
              e6.parentId = e6.groupId, e6.messageId = e6.msgId, delete e6.groupId, delete e6.msgId;
            }), e5;
          });
        }
        function Qa(e4) {
          var t4 = this;
          if (!Array.isArray(e4.chatThreadIds))
            throw Error("Invalid parameter chatThreadIds: ".concat(e4.chatThreadIds));
          if (!vt.call(this)) {
            var r2 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(r2);
          }
          var o3 = this.context, n2 = o3.orgName, i2 = o3.appName, a2 = o3.accessToken, s2 = { threadIds: e4.chatThreadIds }, c2 = { url: "".concat(this.apiUrl, "/").concat(n2, "/").concat(i2, "/thread/message"), type: "POST", dataType: "json", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + a2, "Content-Type": "application/json" } };
          return se.call(this, c2).then(function(e5) {
            return Za.call(t4, e5);
          });
        }
        function Za(e4) {
          var t4 = this, r2 = e4.entities;
          return null == r2 || r2.forEach(function(e5) {
            e5.chatThreadId = e5.thread_id, e5.last_message && "{}" !== JSON.stringify(e5.last_message) ? e5.lastMessage = Ce.call(t4, e5.last_message) : e5.lastMessage = e5.last_message, delete e5.thread_id, delete e5.last_message;
          }), e4;
        }
        function $a(e4) {
          if ("string" != typeof e4.chatThreadId || "" === e4.chatThreadId)
            throw Error("Invalid parameter chatThreadId: ".concat(e4.chatThreadId));
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = { url: "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/thread/").concat(e4.chatThreadId), type: "GET", dataType: "json", headers: { Authorization: "Bearer " + i2, "Content-Type": "application/json" } };
          return se.call(this, a2).then(function(e5) {
            return e5.data.affiliationsCount = e5.data.affiliations_count, e5.data.messageId = e5.data.msgId, e5.data.parentId = e5.data.groupId, delete e5.data.affiliations_count, delete e5.data.msgId, delete e5.data.groupId, e5;
          });
        }
        function es() {
          if (!vt.call(this)) {
            var e4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(e4);
          }
          var t4 = this.context, r2 = t4.orgName, o3 = t4.appName, n2 = t4.accessToken, i2 = { url: "".concat(this.apiUrl, "/").concat(r2, "/").concat(o3, "/users/").concat(this.user, "/translate/support/language"), dataType: "json", type: "GET", headers: { Authorization: "Bearer " + n2 } };
          return B.debug("Call getSupportedLanguages"), se.call(this, i2);
        }
        function ts(e4) {
          if ("string" != typeof e4.text || "" === e4.text)
            throw Error('Invalid parameter: "text"');
          if (!Array.isArray(e4.languages))
            throw Error('Invalid parameter: "language"');
          if (!vt.call(this)) {
            var t4 = m.create({ type: d.REST_PARAMS_STATUS, message: "appkey or token error" });
            return Promise.reject(t4);
          }
          var r2 = this.context, o3 = r2.orgName, n2 = r2.appName, i2 = r2.accessToken, a2 = "".concat(this.apiUrl, "/").concat(o3, "/").concat(n2, "/users/").concat(this.user, "/translate"), s2 = { text: e4.text, to: e4.languages }, c2 = { url: a2, dataType: "json", type: "POST", data: JSON.stringify(s2), headers: { Authorization: "Bearer " + i2 } };
          return B.debug("Call translateMessage"), se.call(this, c2);
        }
        var rs = function() {
          return rs = Object.assign || function(e4) {
            for (var t4, r2 = 1, o3 = arguments.length; r2 < o3; r2++)
              for (var n2 in t4 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            return e4;
          }, rs.apply(this, arguments);
        }, os = function(e4, t4, r2, o3) {
          return new (r2 || (r2 = Promise))(function(n2, i2) {
            function a2(e5) {
              try {
                c2(o3.next(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function s2(e5) {
              try {
                c2(o3.throw(e5));
              } catch (e6) {
                i2(e6);
              }
            }
            function c2(e5) {
              var t5;
              e5.done ? n2(e5.value) : (t5 = e5.value, t5 instanceof r2 ? t5 : new r2(function(e6) {
                e6(t5);
              })).then(a2, s2);
            }
            c2((o3 = o3.apply(e4, t4 || [])).next());
          });
        }, ns = function(e4, t4) {
          var r2, o3, n2, i2, a2 = { label: 0, sent: function() {
            if (1 & n2[0])
              throw n2[1];
            return n2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; a2; )
                  try {
                    if (r2 = 1, o3 && (n2 = 2 & i4[0] ? o3.return : i4[0] ? o3.throw || ((n2 = o3.return) && n2.call(o3), 0) : o3.next) && !(n2 = n2.call(o3, i4[1])).done)
                      return n2;
                    switch (o3 = 0, n2 && (i4 = [2 & i4[0], n2.value]), i4[0]) {
                      case 0:
                      case 1:
                        n2 = i4;
                        break;
                      case 4:
                        return a2.label++, { value: i4[1], done: false };
                      case 5:
                        a2.label++, o3 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = a2.ops.pop(), a2.trys.pop();
                        continue;
                      default:
                        if (!((n2 = (n2 = a2.trys).length > 0 && n2[n2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                          a2 = 0;
                          continue;
                        }
                        if (3 === i4[0] && (!n2 || i4[1] > n2[0] && i4[1] < n2[3])) {
                          a2.label = i4[1];
                          break;
                        }
                        if (6 === i4[0] && a2.label < n2[1]) {
                          a2.label = n2[1], n2 = i4;
                          break;
                        }
                        if (n2 && a2.label < n2[2]) {
                          a2.label = n2[2], a2.ops.push(i4);
                          break;
                        }
                        n2[2] && a2.ops.pop(), a2.trys.pop();
                        continue;
                    }
                    i4 = t4.call(e4, a2);
                  } catch (e5) {
                    i4 = [6, e5], o3 = 0;
                  } finally {
                    r2 = n2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        }, is = _e.getEnvInfo(), as = "web" === is.platform, ss = { CLOSED: 3, CLOSING: 2, CONNECTING: 0, OPEN: 1 }, cs = function() {
          function r2(o3) {
            var u2, l2;
            if (this.name = "connection", this.max_cache_length = 100, this.enableReportLogs = false, this._reportLogs = false, this._reportInterval = J, this._isLogging = false, this.unSyncQueue = [], this.lastHeartbeat = Date.now(), this.isDebug = o3.isDebug || false, this.isReport = false, this.enableReportLogs = o3.enableReportLogs || false, this.uploadPartEnable = true, this.isHttpDNS = void 0 === o3.isHttpDNS ? as : o3.isHttpDNS, this.heartBeatWait = o3.heartBeatWait || 3e4, this.autoReconnectNumMax = o3.autoReconnectNumMax || 5, this.refreshDNSIntervals = this.autoReconnectNumMax < 5 ? this.autoReconnectNumMax : 5, this.delivery = o3.delivery || false, this.disconnectedReason = void 0, this.loginInfoCustomExt = void 0, this.dnsArr = ["https://rs.easemob.com", "https://rs.chat.agora.io", "http://59.110.89.59", "http://39.97.193.190", "http://39.97.193.187"], this.dnsIndex = 0, this.dnsTotal = this.dnsArr.length, this.restHosts = [], this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.socketHost = [], this.hostTotal = 0, this.times = 1, this.autoReconnectNumTotal = 0, this.domain = "easemob.com", this.appKey = o3.appKey, this.appName = "", this.orgName = "", this.token = "", this.grantType = "", this.apiUrl = o3.apiUrl || "", this.url = o3.url || "", this.https = o3.https || "undefined" != typeof window && "https:" === (null === (u2 = window.location) || void 0 === u2 ? void 0 : u2.protocol), this.version = "4.10.0", this.deviceId = o3.deviceId || "webim", this.isFixedDeviceId = null === (l2 = o3.isFixedDeviceId) || void 0 === l2 || l2, this.osType = 16, this.useOwnUploadFun = o3.useOwnUploadFun || false, this.compressType = [0], this.encryptType = [0], this.clientResource = "", this.expiresIn = 0, this.expirationTime = 0, this.useReplacedMessageContents = o3.useReplacedMessageContents || false, this.logOut = true, this.context = { jid: { appKey: "", clientResource: "", domain: "easemob.com", name: "" }, userId: "", appKey: "", status: 0, restTokenData: "", appName: "", orgName: "", root: {}, accessToken: "" }, this._msgHash = {}, this._msgPromiseHash = {}, this._queues = [], this._load_msg_cache = [], this.unMSyncSendMsgMap = /* @__PURE__ */ new Map(), this.mr_cache = {}, this.reconnecting = false, this._offlineMessagePullState = ve.SYNC_INIT, this._offlineMessagePullQueue = [], this.uniPushConfig = {}, this.uniPush = null, this.isRegisterPush = false, this.pushCertificateName = "", "string" != typeof this.appKey || 2 !== this.appKey.split("#").length)
              throw Error("Illegal appKey: ".concat(this.appKey));
            this.devInfos = this.appKey.split("#"), this.orgName = this.devInfos[0], this.appName = this.devInfos[1], this.listen = Er.bind(this), this.mSync = this.usePlugin(hr), this.eventHandler = this.usePlugin(mr), Object.assign(r2.prototype, e3), Object.assign(r2.prototype, t3), Object.assign(r2.prototype, n), Object.assign(r2.prototype, i), Object.assign(r2.prototype, a), Object.assign(r2.prototype, s), Object.assign(r2.prototype, c), this.dataReport = new Pr({ appkey: this.appKey, org: this.orgName, sdkVersion: this.version, deviceId: this.deviceId, isReport: this.isReport });
            var d2 = 0, p3 = this;
            if (Object.defineProperty(_e, "ajaxUnconventionalErrorTimes", { set: function(e4) {
              0 !== e4 && (B.debug("rest api request fail times: ".concat(e4)), (d2 = e4) % 5 == 0 && p3.isHttpDNS && (B.debug("refresh dns config when rest request fail."), Ts.call(p3, function() {
              })));
            }, get: function() {
              return d2;
            } }), this.isFixedDeviceId) {
              var h2 = _e.getLocalDeviceInfo();
              h2 && (this.clientResource = JSON.parse(h2).deviceId);
            }
            B.debug("init SDK: Conn ".concat(this.version, " ").concat(is.platform));
          }
          return r2.prototype.usePlugin = function(e4, t4) {
            if ("push" !== t4)
              return t4 ? void (this[t4] = new e4(this)) : new e4(this);
            e4.config && e4.emPush ? (this.uniPushConfig = e4.config, this.uniPush = e4.emPush) : B.error("use push plugin failed", "emPush", this.uniPush, "config", this.uniPushConfig);
          }, r2.prototype.listen = function(e4) {
          }, r2.prototype.addEventHandler = function(e4, t4) {
          }, r2.prototype.removeEventHandler = function(e4) {
          }, r2.prototype.registerUser = function(e4) {
            return os(this, void 0, void 0, function() {
              var t4, r3;
              return ns(this, function(o3) {
                switch (o3.label) {
                  case 0:
                    if (!e4.username || !e4.password)
                      throw Error("Invalid parameter");
                    o3.label = 1;
                  case 1:
                    if (o3.trys.push([1, 5, , 6]), !this.orgName && !this.appName)
                      throw m.create({ type: d.WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR, message: "signup error" });
                    return t4 = this.dataReport.geOperateFun({ uid: e4.username, operationName: E2.REGISTER }), this.isHttpDNS ? (this.dnsIndex = 0, [4, Ts.call(this, t4)]) : [3, 3];
                  case 2:
                    o3.sent(), o3.label = 3;
                  case 3:
                    return [4, ls.call(this, e4, { rpt: t4 })];
                  case 4:
                    return [2, o3.sent()];
                  case 5:
                    throw r3 = o3.sent(), e4.error && e4.error(r3), r3;
                  case 6:
                    return [2];
                }
              });
            });
          }, r2.prototype.open = function(e4) {
            var t4;
            return os(this, void 0, void 0, function() {
              var r3, o3, n2, i2, a2, s2;
              return ns(this, function(c2) {
                switch (c2.label) {
                  case 0:
                    if (B.debug("open", e4.user, "isLogout:", this.logOut), this._isLogging)
                      throw o3 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "Currently logging in, please wait." });
                    if (!this.logOut)
                      throw o3 = m.create({ type: d.WEBIM_USER_ALREADY_LOGIN, message: "The user has logged in." });
                    this.retryConnectTimes = 0, this._isLogging = true, c2.label = 1;
                  case 1:
                    if (c2.trys.push([1, 8, 9, 10]), "web" === is.platform && (r3 = _e.detectBrowser(), B.debug("browser", r3)), o3 = Es.call(this, e4))
                      throw null === (t4 = this.onError) || void 0 === t4 || t4.call(this, o3), o3;
                    return e4.accessToken && (this.token = e4.accessToken), n2 = rs({}, e4), i2 = this.dataReport.geOperateFun({ uid: e4.user, operationName: E2.LOGIN }), this.dnsIndex = 0, this.isHttpDNS ? [4, Ts.call(this, i2)] : [3, 3];
                  case 2:
                    return c2.sent(), [3, 5];
                  case 3:
                    return "web" !== is.platform && this.enableReportLogs ? [4, Ts.call(this, i2)] : [3, 5];
                  case 4:
                    c2.sent(), c2.label = 5;
                  case 5:
                    return B.initReport({ report: this._reportLogs, reportInterval: this._reportInterval, connection: this }), [4, ps.call(this, n2, { rpt: i2 })];
                  case 6:
                    return a2 = c2.sent(), [4, ms.call(this, i2)];
                  case 7:
                    return c2.sent(), B.debug("grantType", this.grantType), _e.listenNetwork(hs.bind(this), fs.bind(this)), _e.listenBrowserVisibility(function() {
                      B.debug("visibility: true");
                    }, function() {
                      B.debug("visibility: false");
                    }), [2, a2];
                  case 8:
                    throw s2 = c2.sent(), this._isLogging = false, e4.error && e4.error(s2), s2;
                  case 9:
                    return B.reportLog(), [7];
                  case 10:
                    return [2];
                }
              });
            });
          }, r2.prototype.isOpened = function() {
            return this.sock && this.sock.readyState === ss.OPEN || false;
          }, r2.prototype.close = function() {
            var e4, t4, r3;
            B.debug("call close"), B._stopReportLogs(), this.logOut = true, this.disconnectedReason = void 0, this.reconnecting = false, this.context.status = d.STATUS_CLOSING, this.sock && this.sock.close(), null === (e4 = this.unMSyncSendMsgMap) || void 0 === e4 || e4.clear(), this.stopHeartBeat(), this.rejectMessage(), this.context.status = d.STATUS_CLOSED, this._load_msg_cache = [], this._queues = [], this.unSyncQueue = [], this._msgHash = {}, this.mr_cache = {}, this.token = "", this.context.accessToken = "", this.isRegisterPush = false, this.clearTokenTimeout(), null === (r3 = null === (t4 = null == this ? void 0 : this._localCache) || void 0 === t4 ? void 0 : t4.getInstance()) || void 0 === r3 || r3.close(), this.connectionTimer && clearTimeout(this.connectionTimer), this.provisionTimer && clearTimeout(this.provisionTimer), this.probingTimer && clearTimeout(this.probingTimer);
          }, r2.prototype.downloadAndParseCombineMessage = function(e4) {
            var t4 = this, r3 = e4.url, o3 = e4.secret;
            return new Promise(function(e5, n2) {
              var i2, a2, s2 = _e.getEnvInfo(), c2 = "web" !== s2.platform && "node" !== s2.platform && "quick_app" !== s2.platform && (null === (a2 = null === (i2 = s2.global) || void 0 === i2 ? void 0 : i2.canIUse) || void 0 === a2 ? void 0 : a2.call(i2, "getFileSystemManager")), u2 = function(r4) {
                var o4 = function(e6) {
                  n2({ type: d.PARSE_FILE_ERROR, message: "Read file failed", data: e6 });
                }, i3 = function(r5) {
                  return os(t4, void 0, void 0, function() {
                    var t5, o5, i4, a4, s3, u4, l4, p3, h2, f3, m2, g2, E3;
                    return ns(this, function(y2) {
                      switch (y2.label) {
                        case 0:
                          for (t5 = c2 ? new Uint8Array(r5.data) : new Uint8Array(r5.target.result), o5 = 0, i4 = 0, a4 = 2, s3 = t5.subarray(o5, o5 + a4), u4 = _e.Uint8ArrayToString(s3), B.debug("file header:", u4), i4 += a4, l4 = 0, p3 = 2; p3 < t5.length - 1; p3++)
                            p3 % 2 == 1 && (l4 ^= t5[p3]);
                          if (h2 = t5.subarray(t5.length - 1, t5.length), B.debug("checkResult:", l4, h2[0] === l4), h2[0] !== l4)
                            return [2, n2({ type: d.PARSE_FILE_ERROR, message: "File verification failed" })];
                          if ("cm" !== u4)
                            return [3, 7];
                          y2.label = 1;
                        case 1:
                          y2.trys.push([1, 5, , 6]), f3 = [], m2 = function() {
                            var e6, r6, n3, s4;
                            return ns(this, function(c3) {
                              switch (c3.label) {
                                case 0:
                                  return o5 += a4, i4 += a4 = 4, e6 = t5.subarray(o5, o5 + a4), o5 += a4, a4 = e6.reduce(function(t6, r7, o6) {
                                    return t6 + (r7 << 8 * (e6.length - o6 - 1));
                                  }, 0), i4 += a4, r6 = t5.subarray(o5, o5 + a4), n3 = (n3 = g2.root.lookup("easemob.pb.Meta")).decode(r6), [4, et.call(g2, n3, 0, true, true)];
                                case 1:
                                  return s4 = c3.sent(), f3.push(s4), [2];
                              }
                            });
                          }, g2 = this, y2.label = 2;
                        case 2:
                          return i4 < t5.length - 1 ? [5, m2()] : [3, 4];
                        case 3:
                          return y2.sent(), [3, 2];
                        case 4:
                          return [2, e5(f3)];
                        case 5:
                          return E3 = y2.sent(), n2({ type: d.PARSE_FILE_ERROR, message: "Parse file failed", data: E3 }), [3, 6];
                        case 6:
                          return [3, 8];
                        case 7:
                          return [2, n2({ type: d.PARSE_FILE_ERROR, message: "File verification failed" })];
                        case 8:
                          return [2];
                      }
                    });
                  });
                };
                if (c2) {
                  var a3 = s2.global.getFileSystemManager(), u3 = r4.tempFilePath;
                  a3.readFile({ filePath: u3, success: i3, fail: o4 });
                } else if (r4 instanceof Blob) {
                  var l3 = new FileReader();
                  l3.readAsArrayBuffer(r4), l3.onerror = o4, l3.onload = i3;
                }
              }, l2 = function(e6) {
                n2({ type: d.WEBIM_DOWNLOADFILE_ERROR, message: "Download failed, please try again", data: e6 });
              };
              c2 ? s2.global.downloadFile({ url: r3, success: u2, fail: l2 }) : _e.download.call(t4, { url: r3, headers: { Accept: "application/json" }, onFileDownloadComplete: u2, onFileDownloadError: l2, secret: o3, accessToken: t4.context.accessToken });
            });
          }, r2.prototype.stopHeartBeat = function() {
            clearInterval(this.heartBeatID);
          }, r2.prototype.clear = function() {
            this.restTotal = 0, this.restIndex = 0, this.hostIndex = 0, this.hostTotal = 0;
          }, r2.prototype.heartBeat = function() {
          }, r2.prototype.renewToken = function(e4) {
            var t4 = this;
            return this.isOpened() ? this.getTokenExpireTimestamp(e4).then(function(r3) {
              var o3 = r3.expire_timestamp, n2 = Date.now();
              return t4.expirationTime = o3, t4.expiresIn = o3 - n2, t4.token = e4, t4.context.accessToken = e4, t4.clearTokenTimeout(), t4.tokenExpireTimeCountDown(t4.expiresIn), { status: true, token: e4, expire: o3 };
            }) : Promise.reject({ status: false });
          }, r2.prototype.clearTokenTimeout = function() {
            B.info("clearTokenTimeout"), this.tokenWillExpireTimer && clearTimeout(this.tokenWillExpireTimer), this.tokenExpiredTimer && clearTimeout(this.tokenExpiredTimer), this.tokenWillExpireTimer = null, this.tokenExpiredTimer = null;
          }, r2.prototype.tokenExpireTimeCountDown = function(e4) {
            var t4 = this;
            B.info("tokenExpireTimeCountDown", e4), e4 > Math.pow(2, 31) - 1 && (e4 = Math.pow(2, 31) - 1), this.tokenWillExpireTimer = setTimeout(function() {
              var r3;
              t4.onTokenWillExpire && t4.onTokenWillExpire(), null === (r3 = t4.eventHandler) || void 0 === r3 || r3.dispatch("onTokenWillExpire"), B.info("onTokenWillExpire", Math.floor(e4 / 2));
            }, e4 / 2), this.tokenExpiredTimer = setTimeout(function() {
              var e5;
              B.info("onTokenExpired", 0), t4.onTokenExpired && t4.onTokenExpired(), null === (e5 = t4.eventHandler) || void 0 === e5 || e5.dispatch("onTokenExpired"), t4.close();
            }, e4);
          }, r2.prototype.compareTokenExpireTime = function(e4, t4) {
            var r3, o3 = Number(t4) - Number(e4);
            B.debug("compareTokenExpireTime", o3), o3 <= this.expiresIn / 2 && o3 > 0 ? (this.onTokenWillExpire && this.onTokenWillExpire(), null === (r3 = this.eventHandler) || void 0 === r3 || r3.dispatch("onTokenWillExpire"), B.info("onTokenWillExpire", o3)) : o3 <= 0 && (this.closeByTokenExpired(), B.info("closeByTokenExpired", o3));
          }, r2.prototype.closeByTokenExpired = function() {
            var e4;
            B.info("closed By TokenExpired"), this.onTokenExpired && this.onTokenExpired(), null === (e4 = this.eventHandler) || void 0 === e4 || e4.dispatch("onTokenExpired"), this.close();
          }, r2.prototype.rejectMessage = function() {
            var e4 = this, t4 = Object.keys(this._msgHash);
            if (t4.length > 0) {
              var r3 = m.create({ type: d.MESSAGE_WEBSOCKET_DISCONNECTED, message: "websocket disconnected" });
              t4.forEach(function(t5) {
                var o3, n2, i2;
                (null === (o3 = e4.unMSyncSendMsgMap) || void 0 === o3 ? void 0 : o3.has(t5)) || (e4._msgHash[t5].reject instanceof Function && e4._msgHash[t5].reject(r3), null === (i2 = null === (n2 = e4._localCache) || void 0 === n2 ? void 0 : n2.getInstance()) || void 0 === i2 || i2.updateLocalMessage(t5, { serverMsgId: t5, status: Ne.FAIL }), e4._msgHash[t5].fail instanceof Function && e4._msgHash[t5].fail(r3), e4._msgHash[t5].messageTimer && clearTimeout(e4._msgHash[t5].messageTimer), delete e4._msgHash[t5]);
              });
            }
          }, r2.prototype.resetConnState = function() {
            this.mSync.stopHeartBeat(), this.times = 1, this.autoReconnectNumTotal = 0, this.hostIndex = 0;
          }, r2.prototype.reconnect = function(e4) {
            var t4, r3 = this;
            if (this.logout)
              return B.warn("The user has already logged out when reconnecting");
            B.debug("socket reconnect readyState", this.sock.readyState), (this.sock.readyState !== ss.CONNECTING || e4) && (this.sock.readyState !== ss.OPEN || e4) && (B.info("reconnect: time", this.times), B.info("reconnect sock.readyState: ", this.sock.readyState), false === this.reconnecting && (this.reconnecting = true), null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onReconnecting"), this.rejectMessage(), this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1), setTimeout(function() {
              (r3.sock.readyState !== ss.OPEN || e4) && (B.info("login sock.readyState: ", r3.sock.readyState), r3.sock.close(), gs.call(r3).catch(function(e5) {
                B.error("reconnect websocket failed", e5);
              }), r3.times++);
            }, 500 * this.times), this.autoReconnectNumTotal++);
          }, r2.prototype.send = function(e4) {
            return Promise.resolve(null);
          }, r2.prototype.setLoginInfoCustomExt = function(e4) {
            if (B.debug("setLoginInfoCustomExt", "params:", e4), e4) {
              if ("string" != typeof e4)
                throw new Error("ext must be a string");
              if (e4.length > 1024)
                throw new Error("ext length must be less than 1024");
            }
            this.loginInfoCustomExt = e4;
          }, r2.prototype.onShow = function() {
            var e4 = this;
            B.debug("execute onshow callback", this.lastHeartbeat), !this.logOut && !this.reconnecting && Date.now() - this.lastHeartbeat > 2e3 && (B.debug("send ping"), this.mSync.sendUnreadDeal(), this.probingTimer && clearTimeout(this.probingTimer), this.probingTimer = setTimeout(function() {
              B.error("Websocket connection timeout"), e4.logOut || e4.reconnecting || e4.reconnect(true);
            }, 8e3));
          }, r2._getSock = function() {
          }, r2;
        }();
        function us(e4, t4) {
          var r2 = t4.rpt, o3 = t4.isRetry, n2 = this.apiUrl + "/" + this.orgName + "/" + this.appName + "/users", i2 = { requestName: y.RESISTER, requestUrl: n2 }, a2 = { headers: { "Content-type": "application/json" }, url: n2, dataType: "json", data: JSON.stringify({ username: e4.username, password: e4.password, nickname: e4.nickname || "" }) };
          return _e.ajax(a2, E2.SDK_INTERNAL).then(function(e5) {
            var t5 = rs(rs({}, e5), { type: d.REQUEST_SUCCESS }), n3 = e5.extraInfo, a3 = n3.httpCode, s2 = n3.elapse;
            return r2({ isEndApi: true, isRetry: o3, data: rs(rs({}, { requestElapse: s2, isSuccess: 1, code: a3 }), i2) }), t5;
          }).catch(function(e5) {
            var t5 = e5.extraInfo, n3 = t5.elapse, a3 = t5.httpCode, s2 = t5.errDesc;
            throw r2({ isRetry: o3, data: rs(rs({}, { requestElapse: n3, isSuccess: 0, code: a3, codeDesc: s2 }), i2) }), e5;
          });
        }
        function ls(e4, t4) {
          return os(this, void 0, void 0, function() {
            var r2, o3;
            return ns(this, function(n2) {
              switch (n2.label) {
                case 0:
                  r2 = t4.rpt, n2.label = 1;
                case 1:
                  return n2.trys.push([1, 3, , 7]), [4, us.call(this, e4, t4)];
                case 2:
                  return [2, n2.sent()];
                case 3:
                  return !((o3 = n2.sent()).message.includes("Open registration doesn't allow") || o3.message.includes("username be unique") || o3.message.includes("is not legal")) && this.isHttpDNS && this.restIndex + 1 < this.restTotal ? (this.restIndex++, Rs.call(this), [4, ls.call(this, e4, { rpt: r2 })]) : [3, 5];
                case 4:
                  return [2, n2.sent()];
                case 5:
                  throw B.error("retry signup failed", o3), r2({ data: { isLastApi: 1, isSuccess: 0 } }), o3;
                case 6:
                  return [3, 7];
                case 7:
                  return [2];
              }
            });
          });
        }
        function ds(e4, t4) {
          var r2;
          return os(this, void 0, void 0, function() {
            var o3, n2, i2, a2, s2, c2, u2, l2, d2, p3 = this;
            return ns(this, function(h2) {
              switch (h2.label) {
                case 0:
                  if (o3 = Es.call(this, e4))
                    throw o3;
                  return B.debug("socket readyState", null === (r2 = this.sock) || void 0 === r2 ? void 0 : r2.readyState), n2 = t4.rpt, i2 = t4.isRetry, ys.call(this, e4), this.user = e4.user, a2 = this.context.appName, s2 = this.context.orgName, c2 = this.apiUrl + "/" + s2 + "/" + a2 + "/token", e4.accessToken ? (B.debug("login with accessToken"), this.grantType = "accessToken", this.token = e4.accessToken, this.context.accessToken = e4.accessToken, this.context.restTokenData = e4.accessToken, [2, { accessToken: e4.accessToken }]) : [3, 1];
                case 1:
                  return e4.agoraToken ? (B.debug("login with agoraToken"), this.grantType = "agoraToken", this.token = e4.agoraToken, this.context.accessToken = e4.agoraToken, this.context.restTokenData = e4.agoraToken, [2, { accessToken: e4.agoraToken }]) : [3, 2];
                case 2:
                  return B.debug("login with password"), this.grantType = "password", u2 = { grant_type: "password", username: e4.user, password: e4.pwd, timestamp: +/* @__PURE__ */ new Date() }, l2 = JSON.stringify(u2), d2 = { headers: { "Content-type": "application/json" }, url: c2, dataType: "json", data: l2, version: this.version }, B.debug("start get token"), [4, _e.ajax(d2, E2.SDK_INTERNAL).then(function(e5) {
                    B.debug("get token success", e5), p3.token = e5.access_token, p3.context.restTokenData = e5.access_token, p3.context.accessToken = e5.access_token, p3.expiresIn = e5.expires_in;
                    var t5 = e5.extraInfo, r3 = t5.httpCode, o4 = t5.elapse, a3 = { requestName: y.LOGIN_BY_PWD, requestElapse: o4, requestUrl: c2, isSuccess: 1, code: r3 };
                    return n2({ isRetry: i2, data: a3 }), { accessToken: e5.access_token, duration: e5.expires_in };
                  }).catch(function(e5) {
                    var t5 = e5.extraInfo, r3 = t5.elapse, o4 = t5.httpCode, a3 = t5.errDesc, s3 = { requestName: y.LOGIN_BY_PWD, requestElapse: r3, requestUrl: c2, isSuccess: 0, code: o4, codeDesc: a3 };
                    throw n2({ isRetry: i2, data: s3 }), e5;
                  })];
                case 3:
                  return [2, h2.sent()];
              }
            });
          });
        }
        function ps(e4, t4) {
          var r2;
          return os(this, void 0, void 0, function() {
            var o3, n2, i2;
            return ns(this, function(a2) {
              switch (a2.label) {
                case 0:
                  o3 = t4.rpt, a2.label = 1;
                case 1:
                  return a2.trys.push([1, 3, , 7]), [4, ds.call(this, e4, t4)];
                case 2:
                  return [2, a2.sent()];
                case 3:
                  return "invalid password" !== (n2 = a2.sent()).message && "user not found" !== n2.message && this.isHttpDNS && this.restIndex + 1 < this.restTotal ? (this.restIndex++, Rs.call(this), [4, ps.call(this, e4, { rpt: o3, isRetry: true })]) : [3, 5];
                case 4:
                  return [2, a2.sent()];
                case 5:
                  throw B.error("retry login failed", n2), o3({ data: { isLastApi: 1, isSuccess: 0 } }), this.clear(), i2 = void 0, n2.error && n2.error_description ? (i2 = m.create({ type: d.WEBIM_CONNCTION_OPEN_USERGRID_ERROR, message: n2.error_description, data: n2 }), this.onError && this.onError(i2), i2) : (i2 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: null !== (r2 = n2.message) && void 0 !== r2 ? r2 : "login failed", data: n2 }), this.onError && this.onError(i2), i2);
                case 6:
                  return [3, 7];
                case 7:
                  return [2];
              }
            });
          });
        }
        function hs() {
          var e4;
          B.debug("online"), this.onOnline && this.onOnline(), null === (e4 = this.eventHandler) || void 0 === e4 || e4.dispatch("onOnline"), this.sock && 1 !== this.sock.readyState && (B.debug("sock.readyState:", this.sock.readyState), this.logOut || this.reconnecting || this.reconnect());
        }
        function fs() {
          var e4, t4;
          B.debug("offline"), null === (e4 = this.sock) || void 0 === e4 || e4.close(), this.onOffline && this.onOffline(), null === (t4 = this.eventHandler) || void 0 === t4 || t4.dispatch("onOffline");
        }
        function ms(e4) {
          var t4, r2, o3;
          return os(this, void 0, void 0, function() {
            var n2, i2, a2, s2;
            return ns(this, function(c2) {
              switch (c2.label) {
                case 0:
                  n2 = (/* @__PURE__ */ new Date()).getTime(), c2.label = 1;
                case 1:
                  return c2.trys.push([1, 3, , 7]), [4, gs.call(this, e4)];
                case 2:
                  return i2 = c2.sent(), e4 && e4({ data: { isLastApi: 1, isSuccess: 1, accessChannel: null === (t4 = this.socketHost[this.hostIndex]) || void 0 === t4 ? void 0 : t4.channel } }), [2, i2];
                case 3:
                  if (a2 = c2.sent(), B.error("connect to msync failed times:", this.retryConnectTimes, a2), X.includes(a2.type))
                    throw e4 && e4({ data: { isLastApi: 1, isSuccess: 0, accessChannel: null === (r2 = this.socketHost[this.hostIndex]) || void 0 === r2 ? void 0 : r2.channel, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || a2.message } }), a2;
                  return this.retryConnectTimes++, this.retryConnectTimes < 3 ? (this.isHttpDNS && (this.hostIndex < this.socketHost.length - 1 ? this.hostIndex++ : this.hostIndex = this.socketHost.length - 1, _s.call(this)), a2.type === d.REQUEST_TIMEOUT && "provision timeout" === a2.message || (s2 = (/* @__PURE__ */ new Date()).getTime() - n2, null == e4 || e4({ isRetry: 1 !== this.retryConnectTimes, data: { requestUrl: this.url, requestName: y.CONNECT_WEBSOCKET, isSuccess: 0, code: T.closed, requestElapse: s2, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || "websocket close" } })), [4, ms.call(this, e4)]) : [3, 5];
                case 4:
                  return c2.sent(), [3, 6];
                case 5:
                  throw B.error("connect failed three times", a2), e4 && e4({ data: { isLastApi: 1, isSuccess: 0, accessChannel: null === (o3 = this.socketHost[this.hostIndex]) || void 0 === o3 ? void 0 : o3.channel, codeDesc: this.disconnectedReason && JSON.stringify(this.disconnectedReason) || a2.message } }), a2;
                case 6:
                  return [3, 7];
                case 7:
                  return [2];
              }
            });
          });
        }
        function gs(e4) {
          var t4 = this, r2 = (/* @__PURE__ */ new Date()).getTime(), o3 = "pending";
          return new Promise(function(n2, i2) {
            var a2;
            t4._getSock ? a2 = t4._getSock() : (a2 = new WebSocket(t4.url)).binaryType = "arraybuffer", t4.sock = a2, t4.connectionTimer && clearTimeout(t4.connectionTimer), t4.connectionTimer = setTimeout(function() {
              t4.disconnectedReason = { type: d.REQUEST_TIMEOUT, message: "connection timeout" }, o3 = "rejected", a2.close(), null == i2 || i2(t4.disconnectedReason);
            }, z), B.debug("start connect ws"), t4.connectionResolve = n2, t4.connectionReject = i2;
            var s2 = function() {
              if (t4.connectionTimer && clearTimeout(t4.connectionTimer), B.debug("websocket onOpen"), e4) {
                var o4 = (/* @__PURE__ */ new Date()).getTime() - r2;
                e4({ isRetry: 0 !== t4.retryConnectTimes, data: { requestUrl: t4.url, requestName: y.CONNECT_WEBSOCKET, isSuccess: 1, code: T.success, requestElapse: o4 } });
              }
              var n3;
              n3 = t4._getSock ? _e.flow([t4.mSync.generateProvision, t4.mSync.base64transform])() : t4.mSync.generateProvision();
              try {
                t4.provisionTimer && clearTimeout(t4.provisionTimer), t4.provisionTimer = setTimeout(function() {
                  B.debug("provision timeout"), t4.disconnectedReason = m.create({ type: d.REQUEST_TIMEOUT, message: "provision timeout" }), a2.close(), null == i2 || i2(t4.disconnectedReason);
                }, V), a2.send(n3);
              } catch (e5) {
                var s3 = m.create({ type: d.SDK_RUNTIME_ERROR, message: "send message error", data: e5 });
                t4.onError && t4.onError(s3);
              }
            }, c2 = function(e5) {
              t4.connectionTimer && clearTimeout(t4.connectionTimer), setTimeout(function() {
                var r3, n3, a3, s3, c3, u3, l2;
                if (B.debug("websocket onClose, isLogging:", t4._isLogging, e5), "zfb" !== is.platform && "dd" !== is.platform || (t4.sock.readyState = ss.CLOSED), t4._isLogging)
                  return null == i2 || i2({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }), void (o3 = "rejected");
                if ("rejected" !== o3)
                  if (o3 = "rejected", t4.logOut)
                    t4.clear(), t4.resetConnState(), null === (n3 = null === (r3 = null == t4 ? void 0 : t4._localCache) || void 0 === r3 ? void 0 : r3.getInstance()) || void 0 === n3 || n3.close(), t4.onClosed && t4.onClosed(), null === (a3 = t4.eventHandler) || void 0 === a3 || a3.dispatch("onDisconnected", t4.disconnectedReason), null == i2 || i2(t4.disconnectedReason || { type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" });
                  else if (t4.autoReconnectNumTotal < t4.autoReconnectNumMax) {
                    t4.reconnect();
                    var p3 = { type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                    t4.onError && t4.onError(p3), t4.autoReconnectNumTotal % t4.refreshDNSIntervals == 0 && "web" === is.platform && t4.isHttpDNS && (B.debug("refresh dns config when websocket close"), Ts.call(t4, function() {
                    }));
                  } else
                    null === (s3 = t4.unMSyncSendMsgMap) || void 0 === s3 || s3.clear(), t4.rejectMessage(), p3 = { type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }, t4.disconnectedReason = m.create({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "reconnection failed" }), t4.onError && t4.onError(p3), null === (u3 = null === (c3 = null == t4 ? void 0 : t4._localCache) || void 0 === c3 ? void 0 : c3.getInstance()) || void 0 === u3 || u3.close(), t4.onClosed && t4.onClosed(), null === (l2 = t4.eventHandler) || void 0 === l2 || l2.dispatch("onDisconnected", t4.disconnectedReason), t4.resetConnState(), t4.reconnecting = false, null == i2 || i2(p3), B.debug("reconnect fail");
                else
                  B.debug("reject is null");
              }, 0);
            }, u2 = function(e5) {
              var r3 = t4.mSync, o4 = r3.decodeMSync, n3 = r3.distributeMSync;
              _e.flow([o4, n3])(e5);
            };
            "web" === is.platform ? (a2.onopen = s2, a2.onclose = c2, a2.onmessage = u2) : (a2.onOpen(s2), a2.onMessage(u2), a2.onClose(c2), "undefined" != typeof window && window.WebSocket || a2.onError(function(e5) {
              var r3, n3, a3, s3;
              if (t4.connectionTimer && clearTimeout(t4.connectionTimer), B.debug("websocket onerror, isLogging:", t4._isLogging, e5), t4.sock.readyState !== ss.CLOSED && (t4.sock = rs(rs({}, t4.sock), { close: t4.sock.close, send: t4.sock.send, readyState: ss.CLOSED })), t4.onError && t4.onError({ type: d.WEBIM_CONNECTION_ERROR, message: "on socket error", data: e5 }), t4._isLogging)
                return null == i2 || i2({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" }), void (o3 = "rejected");
              if ("rejected" !== o3) {
                if (o3 = "rejected", !t4.logOut)
                  if (t4.autoReconnectNumTotal < t4.autoReconnectNumMax)
                    B.debug("sock.onError reconnect", t4.autoReconnectNumTotal, t4.autoReconnectNumMax), t4.reconnect(), t4.autoReconnectNumTotal % t4.refreshDNSIntervals == 0 && "web" === is.platform && t4.isHttpDNS && (B.debug("refresh dns config when websocket error"), Ts.call(t4, function() {
                    }));
                  else {
                    var c3 = { type: d.WEBIM_CONNCTION_DISCONNECTED, message: "websocket has been disconnected" };
                    t4.disconnectedReason = m.create({ type: d.WEBIM_CONNCTION_DISCONNECTED, message: "reconnection failed" }), null === (r3 = t4.unMSyncSendMsgMap) || void 0 === r3 || r3.clear(), t4.rejectMessage(), t4.onError && t4.onError(c3), null === (a3 = null === (n3 = null == t4 ? void 0 : t4._localCache) || void 0 === n3 ? void 0 : n3.getInstance()) || void 0 === a3 || a3.close(), t4.onClosed && t4.onClosed(), null === (s3 = t4.eventHandler) || void 0 === s3 || s3.dispatch("onDisconnected", t4.disconnectedReason), t4.resetConnState(), t4.reconnecting = false, null == i2 || i2(c3), B.debug("reconnect fail");
                  }
              } else
                B.debug("reject is null");
            }));
          });
        }
        function Es(e4) {
          if ("object" != typeof e4 || null === e4)
            return m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "the param is illegal" });
          if (!e4.user || "string" != typeof e4.user) {
            var t4 = m.create({ type: d.WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR, message: "the user is empty or type is not string" });
            return B.debug("open params error", t4), t4;
          }
          return !("agoraToken" in e4) || e4.agoraToken && "string" == typeof e4.agoraToken ? !("accessToken" in e4) || e4.accessToken && "string" == typeof e4.accessToken ? "accessToken" in e4 || "agoraToken" in e4 || e4.pwd ? void 0 : (t4 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "the accessToken or pwd is illegal" }), B.debug("open params error", t4), t4) : (t4 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "the accessToken is illegal" }), B.debug("open params error", t4), t4) : (t4 = m.create({ type: d.WEBIM_CONNCTION_OPEN_ERROR, message: "the agoraToken is illegal" }), B.debug("open params error", t4), console.warn("agoraToken is deprecated, please use accessToken instead"), t4);
        }
        function ys(e4) {
          this.context.jid = { appKey: this.appKey, name: e4.user, domain: this.domain, clientResource: this.clientResource }, this.context.root = this.root, this.context.userId = e4.user, this.context.appKey = this.appKey, this.context.appName = this.appName, this.context.orgName = this.orgName;
        }
        function vs(e4) {
          var t4 = this, r2 = e4.rpt, o3 = e4.isRetry, n2 = this.dnsIndex < this.dnsTotal ? this.dnsIndex : 0, i2 = this.dnsArr[n2] + "/easemob/server.json";
          B.debug("call getHttpDNS: " + this.dnsIndex);
          var a2 = { url: i2, dataType: "json", type: "GET", data: { app_key: encodeURIComponent(this.appKey) } };
          return _e.ajax(a2, E2.SDK_INTERNAL).then(function(e5) {
            if (!e5)
              throw m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: "get DNS failed" });
            B.debug("getHttpDNS success");
            var n3 = e5.rest.hosts, a3 = t4.https ? "https" : "http";
            if (B.info("httpType: " + a3), !n3)
              throw m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: "DNS hosts resolution failed", data: e5.rest });
            var s2 = n3.filter(function(e6) {
              if (e6.protocol === a3)
                return e6;
            });
            t4.restHosts = s2, t4.restTotal = s2.length;
            var c2 = e5["msync-ws"].hosts;
            if (!c2)
              throw m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: "DNS msync-ws resolution failed", data: e5["msync-ws"] });
            var u2 = c2.filter(function(e6) {
              if (e6.protocol === a3)
                return e6;
            });
            if (t4.socketHost = u2, t4.hostTotal = u2.length, t4.isHttpDNS && Rs.call(t4), t4.isHttpDNS && _s.call(t4), t4._reportLogs = "true" === e5.enableReportLogs, t4._reportInterval = Number(e5.reportInterval || J), "true" === (null == e5 ? void 0 : e5.enableDataReport) ? (t4.dataReport.setIsCollectDt(true), t4.dataReport.setIsReportDt(true)) : (t4.dataReport.setIsReportDt(false), t4.dataReport.setIsCollectDt(false)), "false" === (null == e5 ? void 0 : e5.uploadinparts_enable) && (t4.uploadPartEnable = false), e5.extraInfo) {
              var l2 = e5.extraInfo, p3 = l2.elapse, h2 = l2.httpCode, f3 = { requestUrl: i2, requestName: y.GET_DNS, requestElapse: p3, isSuccess: 1, code: h2 };
              r2 && r2({ isRetry: o3, data: f3 });
            }
          }).catch(function(e5) {
            var t5 = e5.extraInfo, n3 = t5.elapse, a3 = t5.httpCode, s2 = t5.errDesc, c2 = { requestUrl: i2, requestName: y.GET_DNS, isSuccess: 0, code: a3, codeDesc: s2, requestElapse: n3 };
            throw r2 && r2({ isRetry: o3, data: c2 }), m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: e5.message, data: e5 });
          });
        }
        function Ts(e4, t4) {
          return os(this, void 0, void 0, function() {
            var r2;
            return ns(this, function(o3) {
              switch (o3.label) {
                case 0:
                  return o3.trys.push([0, 2, , 6]), [4, vs.call(this, { rpt: e4, isRetry: t4 })];
                case 1:
                case 3:
                  return [2, o3.sent()];
                case 2:
                  return r2 = o3.sent(), B.error("get DNS failed", r2, "times:", this.dnsIndex), this.dnsIndex++, this.dnsIndex < this.dnsTotal ? [4, Ts.call(this, e4, true)] : [3, 4];
                case 4:
                  throw B.error("retryRequestDNS failed"), m.create({ type: d.SERVER_GET_DNSLIST_FAILED, message: "get DNS failed", data: r2 });
                case 5:
                  return [3, 6];
                case 6:
                  return [2];
              }
            });
          });
        }
        function _s() {
          var e4 = this.socketHost[this.hostIndex], t4 = e4.domain, r2 = e4.ip, o3 = e4.port, n2 = "";
          n2 = t4 || r2, o3 && "80" !== o3 && "443" !== o3 && (n2 += ":" + o3), n2 && (this.url = "//" + n2 + "/websocket");
          var i2 = this.https ? "wss:" : "ws:";
          this.url = i2 + this.url;
        }
        function Rs() {
          var e4, t4;
          if (this.restIndex > this.restTotal)
            return B.debug("restIndex > restTotal"), "";
          var r2 = "", o3 = this.restHosts[this.restIndex], n2 = o3.domain, i2 = o3.ip, a2 = o3.port, s2 = this.https ? "https:" : "http:";
          return i2 && "undefined" != typeof window && "http:" === (null === (e4 = null === window || void 0 === window ? void 0 : window.location) || void 0 === e4 ? void 0 : e4.protocol) ? r2 = s2 + "//" + i2 + ":" + a2 : (r2 = s2 + "//" + n2, a2 && "80" !== a2 && "443" !== a2 && (r2 += ":".concat(a2)), "undefined" == typeof window || window.location || (r2 = "https://" + n2), "undefined" != typeof window && window.location && "file:" === (null === (t4 = window.location) || void 0 === t4 ? void 0 : t4.protocol) && (r2 = "https://" + n2)), "undefined" == typeof window && (r2 = s2 + "//" + n2), this.apiUrl = r2, r2;
        }
        var Os = _e.getEnvInfo(), Is = Os.global;
        p2.util.Long = f2(), p2.configure();
        var Ss = p2.Root.fromJSON({ nested: { easemob: { nested: { pb: { nested: { MessageBody: { fields: { type: { type: "Type", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, contents: { rule: "repeated", type: "Content", id: 4 }, ext: { rule: "repeated", type: "KeyValue", id: 5 }, ackMessageId: { type: "uint64", id: 6 }, msgConfig: { type: "MessageConfig", id: 7 }, ackContent: { type: "string", id: 8 }, meta: { type: "string", id: 9 }, editMessageId: { type: "uint64", id: 11 } }, nested: { Content: { fields: { type: { type: "Type", id: 1 }, text: { type: "string", id: 2 }, latitude: { type: "double", id: 3 }, longitude: { type: "double", id: 4 }, address: { type: "string", id: 5 }, displayName: { type: "string", id: 6 }, remotePath: { type: "string", id: 7 }, secretKey: { type: "string", id: 8 }, fileLength: { type: "int32", id: 9 }, action: { type: "string", id: 10 }, params: { rule: "repeated", type: "KeyValue", id: 11 }, duration: { type: "int32", id: 12 }, size: { type: "Size", id: 13 }, thumbnailRemotePath: { type: "string", id: 14 }, thumbnailSecretKey: { type: "string", id: 15 }, thumbnailDisplayName: { type: "string", id: 16 }, thumbnailFileLength: { type: "int32", id: 17 }, thumbnailSize: { type: "Size", id: 18 }, customEvent: { type: "string", id: 19 }, customExts: { rule: "repeated", type: "KeyValue", id: 20 }, buildingName: { type: "string", id: 21 }, subType: { type: "SubType", id: 22 }, title: { type: "string", id: 23 }, summary: { type: "string", id: 24 }, combineLevel: { type: "int32", id: 25 } }, nested: { Type: { values: { TEXT: 0, IMAGE: 1, VIDEO: 2, LOCATION: 3, VOICE: 4, FILE: 5, COMMAND: 6, CUSTOM: 7, COMBINE: 8 } }, Size: { fields: { width: { type: "double", id: 1 }, height: { type: "double", id: 2 } } }, SubType: { values: { COMBINE: 0 } } } }, Type: { values: { NORMAL: 0, CHAT: 1, GROUPCHAT: 2, CHATROOM: 3, READ_ACK: 4, DELIVER_ACK: 5, RECALL: 6, CHANNEL_ACK: 7, EDIT: 8 } }, MessageConfig: { fields: { allowGroupAck: { type: "bool", id: 1 } } } } }, KeyValue: { oneofs: { value: { oneof: ["varintValue", "floatValue", "doubleValue", "stringValue"] } }, fields: { key: { type: "string", id: 1 }, type: { type: "ValueType", id: 2 }, varintValue: { type: "int64", id: 3 }, floatValue: { type: "float", id: 4 }, doubleValue: { type: "double", id: 5 }, stringValue: { type: "string", id: 6 } }, nested: { ValueType: { values: { BOOL: 1, INT: 2, UINT: 3, LLINT: 4, FLOAT: 5, DOUBLE: 6, STRING: 7, JSON_STRING: 8 } } } }, JID: { fields: { appKey: { type: "string", id: 1 }, name: { type: "string", id: 2 }, domain: { type: "string", id: 3 }, clientResource: { type: "string", id: 4 } } }, ConferenceBody: { fields: { sessionId: { type: "string", id: 1 }, operation: { type: "Operation", id: 2 }, conferenceId: { type: "string", id: 3 }, type: { type: "Type", id: 4 }, content: { type: "string", id: 5 }, network: { type: "string", id: 6 }, version: { type: "string", id: 7 }, identity: { type: "Identity", id: 8 }, duration: { type: "string", id: 9 }, peerName: { type: "string", id: 10 }, endReason: { type: "EndReason", id: 11 }, status: { type: "Status", id: 12 }, isDirect: { type: "bool", id: 13 }, controlType: { type: "StreamControlType", id: 14 }, routeFlag: { type: "int32", id: 15 }, routeKey: { type: "string", id: 16 } }, nested: { Status: { fields: { errorCode: { type: "int32", id: 1 } } }, Operation: { values: { JOIN: 0, INITIATE: 1, ACCEPT_INITIATE: 2, ANSWER: 3, TERMINATE: 4, REMOVE: 5, STREAM_CONTROL: 6, MEDIA_REQUEST: 7 } }, Type: { values: { VOICE: 0, VIDEO: 1 } }, Identity: { values: { CALLER: 0, CALLEE: 1 } }, EndReason: { values: { HANGUP: 0, NORESPONSE: 1, REJECT: 2, BUSY: 3, FAIL: 4, UNSUPPORTED: 5, OFFLINE: 6 } }, StreamControlType: { values: { PAUSE_VOICE: 0, RESUME_VOICE: 1, PAUSE_VIDEO: 2, RESUME_VIDEO: 3 } } } }, MSync: { fields: { version: { type: "Version", id: 1, options: { default: "MSYNC_V1" } }, guid: { type: "JID", id: 2 }, auth: { type: "string", id: 3 }, compressAlgorimth: { type: "uint32", id: 4 }, crypto: { type: "uint32", id: 5 }, userAgent: { type: "string", id: 6 }, pov: { type: "uint64", id: 7 }, command: { type: "Command", id: 8 }, deviceId: { type: "uint32", id: 10 }, encryptType: { rule: "repeated", type: "EncryptType", id: 11, options: { packed: false } }, encryptKey: { type: "string", id: 12 }, payload: { type: "bytes", id: 9 } }, nested: { Version: { values: { MSYNC_V1: 0, MSYNC_V2: 1 } }, Command: { values: { SYNC: 0, UNREAD: 1, NOTICE: 2, PROVISION: 3 } } } }, EncryptType: { values: { ENCRYPT_NONE: 0, ENCRYPT_AES_128_CBC: 1, ENCRYPT_AES_256_CBC: 2 } }, CommSyncUL: { fields: { meta: { type: "Meta", id: 1 }, key: { type: "uint64", id: 2 }, queue: { type: "JID", id: 3 }, isRoam: { type: "bool", id: 4 }, lastFullRoamKey: { type: "uint64", id: 5 } } }, CommSyncDL: { fields: { status: { type: "Status", id: 1 }, metaId: { type: "uint64", id: 2 }, serverId: { type: "uint64", id: 3 }, metas: { rule: "repeated", type: "Meta", id: 4 }, nextKey: { type: "uint64", id: 5 }, queue: { type: "JID", id: 6 }, isLast: { type: "bool", id: 7 }, timestamp: { type: "uint64", id: 8 }, isRoam: { type: "bool", id: 9 } } }, CommNotice: { fields: { queue: { type: "JID", id: 1 } } }, CommUnreadUL: { fields: {} }, CommUnreadDL: { fields: { status: { type: "Status", id: 1 }, unread: { rule: "repeated", type: "MetaQueue", id: 2 }, timestamp: { type: "uint64", id: 3 } } }, MetaQueue: { fields: { queue: { type: "JID", id: 1 }, n: { type: "uint32", id: 2 } } }, Meta: { fields: { id: { type: "uint64", id: 1 }, from: { type: "JID", id: 2 }, to: { type: "JID", id: 3 }, timestamp: { type: "uint64", id: 4 }, ns: { type: "NameSpace", id: 5 }, payload: { type: "bytes", id: 6 }, routetype: { type: "RouteType", id: 7 }, ext: { rule: "repeated", type: "KeyValue", id: 8 }, meta: { type: "bytes", id: 9 }, directedUsers: { rule: "repeated", type: "string", id: 10 } }, nested: { NameSpace: { values: { STATISTIC: 0, CHAT: 1, MUC: 2, ROSTER: 3, CONFERENCE: 4, NOTIFY: 5, QUERY: 6 } }, RouteType: { values: { ROUTE_ALL: 0, ROUTE_ONLINE: 1, ROUTE_DIRECT: 2 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, reason: { type: "string", id: 2 }, redirectInfo: { rule: "repeated", type: "RedirectInfo", id: 3 } }, nested: { ErrorCode: { values: { OK: 0, FAIL: 1, UNAUTHORIZED: 2, MISSING_PARAMETER: 3, WRONG_PARAMETER: 4, REDIRECT: 5, TOKEN_EXPIRED: 6, PERMISSION_DENIED: 7, NO_ROUTE: 8, UNKNOWN_COMMAND: 9, PB_PARSER_ERROR: 10, BIND_ANOTHER_DEVICE: 11, IM_FORBIDDEN: 12, TOO_MANY_DEVICES: 13, PLATFORM_LIMIT: 14, USER_MUTED: 15, ENCRYPT_DISABLE: 16, ENCRYPT_ENABLE: 17, DECRYPT_FAILURE: 18, PERMISSION_DENIED_EXTERNAL: 19 } } } }, RedirectInfo: { fields: { host: { type: "string", id: 1 }, port: { type: "uint32", id: 2 } } }, Provision: { fields: { osType: { type: "OsType", id: 1 }, version: { type: "string", id: 2 }, networkType: { type: "NetworkType", id: 3 }, appSign: { type: "string", id: 4 }, compressType: { rule: "repeated", type: "CompressType", id: 5, options: { packed: false } }, encryptType: { rule: "repeated", type: "EncryptType", id: 6, options: { packed: false } }, encryptKey: { type: "string", id: 7 }, status: { type: "Status", id: 8 }, deviceUuid: { type: "string", id: 9 }, isManualLogin: { type: "bool", id: 10 }, password: { type: "string", id: 11 }, deviceName: { type: "string", id: 12 }, resource: { type: "string", id: 13 }, auth: { type: "string", id: 14 }, serviceId: { type: "string", id: 16 }, actionVersion: { type: "string", id: 17 }, authToken: { type: "string", id: 18 }, sessionId: { type: "string", id: 20 }, reason: { type: "string", id: 21 } }, nested: { OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } }, CompressType: { values: { COMPRESS_NONE: 0, COMPRESS_ZLIB: 1 } } } }, MUCBody: { fields: { mucId: { type: "JID", id: 1 }, operation: { type: "Operation", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, setting: { type: "Setting", id: 5 }, reason: { type: "string", id: 6 }, isChatroom: { type: "bool", id: 7 }, status: { type: "Status", id: 8 }, isThread: { type: "bool", id: 9 }, mucParentId: { type: "JID", id: 10 }, mucName: { type: "string", id: 11 }, eventInfo: { type: "EventInfo", id: 12 }, mucMemberCount: { type: "int32", id: 13 }, ext: { type: "string", id: 14 }, leaveOtherRooms: { type: "bool", id: 15 } }, nested: { Operation: { values: { CREATE: 0, DESTROY: 1, JOIN: 2, LEAVE: 3, APPLY: 4, APPLY_ACCEPT: 5, APPLY_DECLINE: 6, INVITE: 7, INVITE_ACCEPT: 8, INVITE_DECLINE: 9, KICK: 10, GET_BLACKLIST: 11, BAN: 12, ALLOW: 13, UPDATE: 14, BLOCK: 15, UNBLOCK: 16, PRESENCE: 17, ABSENCE: 18, DIRECT_JOINED: 19, ASSIGN_OWNER: 20, ADD_ADMIN: 21, REMOVE_ADMIN: 22, ADD_MUTE: 23, REMOVE_MUTE: 24, UPDATE_ANNOUNCEMENT: 25, DELETE_ANNOUNCEMENT: 26, UPLOAD_FILE: 27, DELETE_FILE: 28, ADD_USER_WHITE_LIST: 29, REMOVE_USER_WHITE_LIST: 30, BAN_GROUP: 31, REMOVE_BAN_GROUP: 32, THREAD_CREATE: 33, THREAD_DESTROY: 34, THREAD_JOIN: 35, THREAD_LEAVE: 36, THREAD_KICK: 37, THREAD_UPDATE: 38, THREAD_PRESENCE: 39, THREAD_ABSENCE: 40, DISABLE_GROUP: 41, ABLE_GROUP: 42, SET_METADATA: 43, DELETE_METADATA: 44, GROUP_MEMBER_METADATA_UPDATE: 45 } }, Setting: { fields: { name: { type: "string", id: 1 }, desc: { type: "string", id: 2 }, type: { type: "Type", id: 3 }, maxUsers: { type: "int32", id: 4 }, owner: { type: "string", id: 5 } }, nested: { Type: { values: { PRIVATE_OWNER_INVITE: 0, PRIVATE_MEMBER_INVITE: 1, PUBLIC_JOIN_APPROVAL: 2, PUBLIC_JOIN_OPEN: 3, PUBLIC_ANONYMOUS: 4 } } } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, PERMISSION_DENIED: 1, WRONG_PARAMETER: 2, MUC_NOT_EXIST: 3, USER_NOT_EXIST: 4, UNKNOWN: 5 } } } }, EventInfo: { fields: { eventType: { type: "EventType", id: 1, options: { default: "EVENT_NONE" } }, ext: { type: "string", id: 2 } }, nested: { EventType: { values: { EVENT_NONE: 0, CIRCLE_CHANNEL: 1 } } } } } }, RosterBody: { fields: { operation: { type: "Operation", id: 1 }, status: { type: "Status", id: 2 }, from: { type: "JID", id: 3 }, to: { rule: "repeated", type: "JID", id: 4 }, reason: { type: "string", id: 5 }, rosterVer: { type: "string", id: 6 }, biDirection: { type: "bool", id: 7 } }, nested: { Operation: { values: { GET_ROSTER: 0, GET_BLACKLIST: 1, ADD: 2, REMOVE: 3, ACCEPT: 4, DECLINE: 5, BAN: 6, ALLOW: 7, REMOTE_ACCEPT: 8, REMOTE_DECLINE: 9 } }, Status: { fields: { errorCode: { type: "ErrorCode", id: 1 }, description: { type: "string", id: 2 } }, nested: { ErrorCode: { values: { OK: 0, USER_NOT_EXIST: 1, USER_ALREADY_FRIEND: 2, USER_ALREADY_BLACKLIST: 3 } } } } } }, StatisticsBody: { fields: { operation: { type: "Operation", id: 1 }, os: { type: "OsType", id: 2 }, version: { type: "string", id: 3 }, network: { type: "NetworkType", id: 4 }, imTime: { type: "uint32", id: 5 }, chatTime: { type: "uint32", id: 6 }, location: { type: "string", id: 7 }, reason: { type: "string", id: 10 } }, nested: { Operation: { values: { INFORMATION: 0, USER_REMOVED: 1, USER_LOGIN_ANOTHER_DEVICE: 2, USER_KICKED_BY_CHANGE_PASSWORD: 3, USER_KICKED_BY_OTHER_DEVICE: 4 } }, OsType: { values: { OS_IOS: 0, OS_ANDROID: 1, OS_LINUX: 2, OS_OSX: 3, OS_WIN: 4, OS_OTHER: 16 } }, NetworkType: { values: { NETWORK_NONE: 0, NETWORK_WIFI: 1, NETWORK_4G: 2, NETWORK_3G: 3, NETWORK_2G: 4, NETWORK_WIRE: 5 } } } } } } } } } });
        cs.prototype.root = Ss;
        var Cs = function(e4) {
          this.onOpen = Is.onSocketOpen, this.onClose = Is.onSocketClose, this.onMessage = Is.onSocketMessage, this.onError = Is.onSocketError, this.close = Is.closeSocket, this.send = Is.sendSocketMessage, this.connectSocket = Is.connectSocket, this.readyState = 3, this.offSocketOpen = Is.offSocketOpen, this.offSocketMessage = Is.offSocketMessage, this.offSocketError = Is.offSocketError, this.offSocketClose = Is.offSocketClose, this.connect = function() {
            this.offSocketOpen(), this.offSocketMessage(), this.offSocketClose(), this.offSocketError(), Is.connectSocket({ url: e4.url, header: { "content-type": "application/json" }, success: function(e5) {
            }, fail: function() {
            } });
          };
        };
        cs.prototype._getSock = function() {
          var e4, t4 = this;
          return this.sock && this.sock.close && this.sock.close(), (e4 = "zfb" === Os.platform || "dd" === Os.platform ? new Cs(this) : Is.connectSocket({ url: this.url, header: { "content-type": "application/json" }, success: function(e5) {
            B.debug("socket connect success", e5);
          }, fail: function(e5) {
            B.debug("socket connect fail", e5), t4.reconnecting = false, e5.errMsg.indexOf("suspend");
          }, complete: function() {
          } })).connect && e4.connect(), e4;
        }, cs.prototype.getUniqueId = _e.getUniqueId, cs.prototype.deviceId = "miniProgram_" + Os.platform, cs.prototype._localCache = void 0;
        var Ns = B.getLogger("defaultLogger");
        Ns.setConfig({ useCache: false, maxCache: 3145728 }), Ns.enableAll(), _e.ajax = _e.wxRequest;
        var As = { connection: cs, message: We, utils: _e, logger: Ns, statusCode: d };
      }(), o2;
    }();
  });
})(EasemobChat);
var EasemobChatExports = EasemobChat.exports;
const EasemobSDK = /* @__PURE__ */ getDefaultExportFromCjs(EasemobChatExports);
var isVue2 = false;
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol("pinia");
function isPlainObject(o2) {
  return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const IS_CLIENT = typeof window !== "undefined";
const USE_DEVTOOLS = IS_CLIENT;
const componentStateTypes = [];
const getStoreType = (id) => "🍍 " + id;
function addStoreToDevtools(app, store) {
  if (!componentStateTypes.includes(getStoreType(store.$id))) {
    componentStateTypes.push(getStoreType(store.$id));
  }
}
function patchActionForGrouping(store, actionNames, wrapWithProxy) {
  const actions = actionNames.reduce((storeActions, actionName) => {
    storeActions[actionName] = toRaw(store)[actionName];
    return storeActions;
  }, {});
  for (const actionName in actions) {
    store[actionName] = function() {
      const trackedStore = wrapWithProxy ? new Proxy(store, {
        get(...args) {
          return Reflect.get(...args);
        },
        set(...args) {
          return Reflect.set(...args);
        }
      }) : store;
      const retValue = actions[actionName].apply(trackedStore, arguments);
      return retValue;
    };
  }
}
function devtoolsPlugin({ app, store, options }) {
  if (store.$id.startsWith("__hot:")) {
    return;
  }
  store._isOptionsAPI = !!options.state;
  patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
  const originalHotUpdate = store._hotUpdate;
  toRaw(store)._hotUpdate = function(newStore) {
    originalHotUpdate.apply(this, arguments);
    patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
  };
  addStoreToDevtools(
    app,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    store
  );
}
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
    pinia.use(devtoolsPlugin);
  }
  return pinia;
}
function patchObject(newState, oldState) {
  for (const key in oldState) {
    const subPatch = oldState[key];
    if (!(key in newState)) {
      continue;
    }
    const targetValue = newState[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) {
      newState[key] = patchObject(targetValue, subPatch);
    } else {
      {
        newState[key] = subPatch;
      }
    }
  }
  return newState;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol("pinia:skipHydration");
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o2) {
  return !!(isRef(o2) && o2.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && !hot) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = hot ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      toRefs(ref(state ? state() : {}).value)
    ) : toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      if (name in localState) {
        console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
      }
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  if (!pinia._e.active) {
    throw new Error("Pinia destroyed");
  }
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  {
    $subscribeOptions.onTrigger = (event) => {
      if (isListening) {
        debuggerEvents = event;
      } else if (isListening == false && !store._hotUpdating) {
        if (Array.isArray(debuggerEvents)) {
          debuggerEvents.push(event);
        } else {
          console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
        }
      }
    };
  }
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && !hot) {
    {
      pinia.state.value[$id] = {};
    }
  }
  const hotState = ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    {
      debuggerEvents = [];
    }
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick$1().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    () => {
      throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    }
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const _hmrPayload = /* @__PURE__ */ markRaw({
    actions: {},
    getters: {},
    state: [],
    hotState
  });
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    {
      _hmrPayload,
      _customProperties: markRaw(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    partialStore
    // must be added later
    // setupStore
  ));
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (hot) {
        set(hotState.value, key, toRef(setupStore, key));
      } else if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
      {
        _hmrPayload.state.push(key);
      }
    } else if (typeof prop === "function") {
      const actionValue = hot ? prop : wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      {
        _hmrPayload.actions[key] = prop;
      }
      optionsForPlugin.actions[key] = prop;
    } else {
      if (isComputed(prop)) {
        _hmrPayload.getters[key] = isOptionsStore ? (
          // @ts-expect-error
          options.getters[key]
        ) : prop;
        if (IS_CLIENT) {
          const getters = setupStore._getters || // @ts-expect-error: same
          (setupStore._getters = markRaw([]));
          getters.push(key);
        }
      }
    }
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => hot ? hotState.value : pinia.state.value[$id],
    set: (state) => {
      if (hot) {
        throw new Error("cannot set hotState");
      }
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  {
    store._hotUpdate = markRaw((newStore) => {
      store._hotUpdating = true;
      newStore._hmrPayload.state.forEach((stateKey) => {
        if (stateKey in store.$state) {
          const newStateTarget = newStore.$state[stateKey];
          const oldStateSource = store.$state[stateKey];
          if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
            patchObject(newStateTarget, oldStateSource);
          } else {
            newStore.$state[stateKey] = oldStateSource;
          }
        }
        set(store, stateKey, toRef(newStore.$state, stateKey));
      });
      Object.keys(store.$state).forEach((stateKey) => {
        if (!(stateKey in newStore.$state)) {
          del(store, stateKey);
        }
      });
      isListening = false;
      isSyncListening = false;
      pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
      isSyncListening = true;
      nextTick$1().then(() => {
        isListening = true;
      });
      for (const actionName in newStore._hmrPayload.actions) {
        const action = newStore[actionName];
        set(store, actionName, wrapAction(actionName, action));
      }
      for (const getterName in newStore._hmrPayload.getters) {
        const getter = newStore._hmrPayload.getters[getterName];
        const getterValue = isOptionsStore ? (
          // special handling of options api
          computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          })
        ) : getter;
        set(store, getterName, getterValue);
      }
      Object.keys(store._hmrPayload.getters).forEach((key) => {
        if (!(key in newStore._hmrPayload.getters)) {
          del(store, key);
        }
      });
      Object.keys(store._hmrPayload.actions).forEach((key) => {
        if (!(key in newStore._hmrPayload.actions)) {
          del(store, key);
        }
      });
      store._hmrPayload = newStore._hmrPayload;
      store._getters = newStore._getters;
      store._hotUpdating = false;
    });
  }
  if (USE_DEVTOOLS) {
    const nonEnumerable = {
      writable: true,
      configurable: true,
      // avoid warning on devtools trying to display this property
      enumerable: false
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
      Object.defineProperty(store, p2, assign({ value: store[p2] }, nonEnumerable));
    });
  }
  pinia._p.forEach((extender) => {
    if (USE_DEVTOOLS) {
      const extensions = scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      }));
      Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
      assign(store, extensions);
    } else {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
    console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
  }
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
    if (typeof id !== "string") {
      throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
    }
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    pinia || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    if (!activePinia) {
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    }
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
      {
        useStore._pinia = pinia;
      }
    }
    const store = pinia._s.get(id);
    if (hot) {
      const hotId = "__hot:" + id;
      const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
      hot._hotUpdate(newStore);
      delete pinia.state.value[hotId];
      pinia._s.delete(hotId);
    }
    if (IS_CLIENT) {
      const currentInstance2 = getCurrentInstance();
      if (currentInstance2 && currentInstance2.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance2.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
    }
    return store;
  }
  useStore.$id = id;
  return useStore;
}
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var NavigationType;
(function(NavigationType2) {
  NavigationType2["pop"] = "pop";
  NavigationType2["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function(NavigationDirection2) {
  NavigationDirection2["back"] = "back";
  NavigationDirection2["forward"] = "forward";
  NavigationDirection2["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
var NavigationFailureType;
(function(NavigationFailureType2) {
  NavigationFailureType2[NavigationFailureType2["aborted"] = 4] = "aborted";
  NavigationFailureType2[NavigationFailureType2["cancelled"] = 8] = "cancelled";
  NavigationFailureType2[NavigationFailureType2["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
const routerKey = Symbol("router");
function useRouter() {
  return inject(routerKey);
}
exports.EasemobSDK = EasemobSDK;
exports._export_sfc = _export_sfc;
exports.computed = computed;
exports.createPinia = createPinia;
exports.createSSRApp = createSSRApp;
exports.defineComponent = defineComponent;
exports.defineStore = defineStore;
exports.e = e;
exports.f = f;
exports.index = index;
exports.isRef = isRef;
exports.o = o;
exports.p = p;
exports.ref = ref;
exports.t = t;
exports.unref = unref;
exports.useRouter = useRouter;
