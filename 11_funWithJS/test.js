/* 
JavaScript is mainly run with the help of V8 engine. V8 is a Google's open-source high-performance JavaScript and WebAssembly engine written in C++. 
It is used in Chrome and in Node.js, among others.

jsvu -> JavaScript Version Updater, makes it easy to install recent versions of various JavaScript engines without having to compile them from source.

Using this jsvu package you can see the working of the JavaScript on the engine level

Array in JavaScript is of two types: Continuous and Holey 
*/

const myArr = []

%DebugPrint(myArr) // now this commane will throw error
// this is a special command that is not included in the core JS
// have to import from the jsvu library; used to debug 