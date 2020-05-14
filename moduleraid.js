/* moduleRaid
 * https://github.com/pixeldesu/moduleRaid
 *
 * Copyright pixeldesu and other contributors
 * Licensed under the MIT License
 * https://github.com/pixeldesu/moduleRaid/blob/master/LICENSE
 */

 "use strict";

window.moduleRaid = function (debug) {
  window.moduleRaid.mID  = Math.random().toString(36).substring(7);
  window.moduleRaid.mObj = {};
  window.moduleRaid.cArr = [];
  window.moduleRaid.mGet = null;

  if (debug) {
    window.moduleRaid.debug = true;
  } else if (window.mRdebug) {
    window.moduleRaid.debug = true;
  } else {
    window.moduleRaid.debug = false;
  }

  window.moduleRaid.log = function (message) {
    if (window.moduleRaid.debug) {
      console.warn(`[moduleRaid] ${message}`);
    }
  }

  window.moduleRaid.args = [
    [[0], [function(e, t, i) {
      mCac = i.c;
      Object.keys(mCac).forEach (function(mod) {
        window.moduleRaid.mObj[mod] = mCac[mod].exports;
      })
      window.moduleRaid.cArr = i.m;
      window.moduleRaid.mGet = i;
    }]],
    [[1e3], {[window.moduleRaid.mID]: function(e, t, i) {
      mCac = i.c;
      Object.keys(mCac).forEach (function(mod) {
        window.moduleRaid.mObj[mod] = mCac[mod].exports;
      })
      window.moduleRaid.cArr = i.m;
      window.moduleRaid.mGet = i;
  }}, [[window.moduleRaid.mID]]]
  ]

  moduleRaid.fillModuleArray = function() {
    if (typeof webpackJsonp === 'function') {
      window.moduleRaid.args.forEach(function (argument, index) {
        try {
          webpackJsonp(...argument);
        }
        catch (err) {
          window.moduleRaid.log(`window.moduleRaid.args[${index}] failed: ${err}`);
        }
      })
    }
    else {
      try {
        webpackJsonp.push(window.moduleRaid.args[1]);
      }
      catch (err) {
        window.moduleRaid.log(`Pushing window.moduleRaid.args[1] into webpackJsonp failed: ${err}`);
      }
    }

    if (window.moduleRaid.mObj.length == 0) {
      mEnd = false;
      mIter = 0;

      if (!webpackJsonp([],[],[mIter])) {
        throw Error('Unknown Webpack structure');
      }

      while (!mEnd) {
        try {
          window.moduleRaid.mObj[mIter] = webpackJsonp([],[],[mIter]);
          mIter++;
        }
        catch (err) {
          mEnd = true;
        }
      }
    }
  }

  moduleRaid.fillModuleArray()

  var get = function get (id) {
    return window.moduleRaid.mObj[id]
  }

  var findModule = function findModule (query) {
    results = [];
    modules = Object.keys(window.moduleRaid.mObj);

    modules.forEach(function(mKey) {
      mod = window.moduleRaid.mObj[mKey];

      if (typeof mod !== 'undefined') {
        if (typeof query === 'string') {
          if (typeof mod.default === 'object') {
            for (key in mod.default) {
              if (key == query) results.push(mod);
            }
          }

          for (key in mod) {
            if (key == query) results.push(mod);
          }
        } else if (typeof query === 'function') {
          if (query(mod)) {
            results.push(mod);
          }
        } else {
          throw new TypeError('findModule can only find via string and function, ' + (typeof query) + ' was passed');
        }

      }
    })

    return results;
  }

  var findFunction = function(query) {
    if (window.moduleRaid.cArr.length == 0) {
      throw Error('No module constructors to search through!');
    }

    results = [];

    if (typeof query === 'string') {
      window.moduleRaid.cArr.forEach(function (ctor, index) {
        if (ctor.toString().includes(query)) {
          results.push(window.moduleRaid.mObj[index]);
        }
      })
    } else if (typeof query === 'function') {
      modules = Object.keys(window.moduleRaid.mObj);

      modules.forEach(function(mKey, index) {
        mod = window.moduleRaid.mObj[mKey];

        if (query(mod)) {
          results.push(window.moduleRaid.mObj[index]);
        }
      })
    } else {
      throw new TypeError('findFunction can only find via string and function, ' + (typeof query) + ' was passed');
    }

    return results;
  }

  return {
    modules: window.moduleRaid.mObj,
    constructors: window.moduleRaid.cArr,
    findModule: findModule,
    findFunction: findFunction,
    get: window.moduleRaid.mGet ? window.moduleRaid.mGet : get
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = moduleRaid;
} else {
  window.mR = moduleRaid();
}
