(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let module1 = require("./modules/module1");
let module2 = require("./modules/module2");
let module3 = require("./modules/module3");
module1.test();
module2.test();
console.log(module3.str.toUpperCase());;
},{"./modules/module1":2,"./modules/module2":3,"./modules/module3":4}],2:[function(require,module,exports){
module.exports = {
    data :"strange",
    test(){
        console.log(this.data);
    }
}
},{}],3:[function(require,module,exports){
exports.test = function(){
    console.log("第二个module")
}
},{}],4:[function(require,module,exports){
exports.str = "strange"
},{}]},{},[1]);
