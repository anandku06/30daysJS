/* 
JavaScript is mainly run with the help of V8 engine. V8 is a Google's open-source high-performance JavaScript and WebAssembly engine written in C++. 
It is used in Chrome and in Node.js, among others.

jsvu -> JavaScript Version Updater, makes it easy to install recent versions of various JavaScript engines without having to compile them from source.

Using this jsvu package you can see the working of the JavaScript on the engine level

Array in JavaScript is of two types: Continuous and Holey 
    Internal optimizations in Array
    - SMI (Small Integer)
    - Packed elements
    - Double (float, string, functions)
*/

// %DebugPrint(myArr) 
// now this command will throw error
// this is a special command that is not included in the core JS
// have to import from the jsvu library; used to debug any element or object specified in the parenthesis

/* this command is executable only in d8 environment using jsvu package 

if executed in the d8 environment it shows this -
DebugPrint: 0000022F00287DD9: [JSArray]
 - map: 0x022f0008cd61 <Map[16](PACKED_SMI_ELEMENTS)> [FastProperties]
 - prototype: 0x022f0008cfd5 <JSArray[0]>
 - elements: 0x022f00000745 <FixedArray[0]> [PACKED_SMI_ELEMENTS]
 - length: 0
 - properties: 0x022f00000745 <FixedArray[0]>
 - All own properties (excluding elements): {
    0000022F00000D91: [String] in ReadOnlySpace: #length: 0x022f00251fd9 <AccessorInfo name= 0x022f00000d91 <String[6]: #length>, data= 0x022f00000011 <undefined>> (const accessor descriptor, attrs: [W__]), location: descriptor
 }
0000022F0008CD61: [Map]
 - map: 0x022f0008183d <MetaMap (0x022f0008188d <NativeContext[302]>)>
 - type: JS_ARRAY_TYPE
 - instance size: 16
 - inobject properties: 0
 - unused property fields: 0
 - elements kind: PACKED_SMI_ELEMENTS
 - enum length: invalid
 - back pointer: 0x022f00000011 <undefined>
 - prototype_validity cell: 0x022f00000a81 <Cell value= 1>
 - instance descriptors #1: 0x022f0008d5ed <DescriptorArray[1]>
 - transitions #1: 0x022f0008d609 <TransitionArray[5]>
   Transitions #1:
     0x022f00000e55 <Symbol: (elements_transition_symbol)>: (transition to HOLEY_SMI_ELEMENTS) -> 0x022f0008d625 <Map[16](HOLEY_SMI_ELEMENTS)>
 - prototype: 0x022f0008cfd5 <JSArray[0]>
 - constructor: 0x022f0008ccb1 <JSFunction Array (sfi = 0000022F002575B1)>
 - dependent code: 0x022f00000755 <Other heap object (WEAK_ARRAY_LIST_TYPE)>
 - construction counter: 0

[]
*/

let arr1 = [1,234,5,6,78] // PACKED_SMI_ELEMENTS -> default or most optimised array ; can be called Continuous; SMI bcz only integers are allowed for SMI
let arr2 = [1,,5,6,78] // HOLEY_SMI_ELEMENTS -> no value present after 1 or there is a hole in there

arr1.push(6.0) // now it became PACKED_DOUBLE_ELEMENTS -> inserted a float number

arr1.push('hello') // now it's PACKED_ELEMENTS

// if the PACKED_SMI is changed then no going back i.e. no going back from PACKED_DOUBLE to PACKED_SMI

arr1[10] = 11 // it's a HOLEY_ELEMENTS -> bcz it has holes and different types of data

console.log(arr1)
console.log(arr1.length)
console.log(arr1[9]) // expensive operation

/* How array's elements are accessed -
    - bound check -> whether the specified index is under the array length or not, no then return undefined else
    - hasOwnProperty(arr, index) -> under bound so if has any property or value then return else
    - hasOwnProperty(arr.prototype, index) -> true then return else again the property is checked due to prototypal nature of JavaScript

    bcz it confronts holes in it's accessing the hasOwn function is called again and again; making it fully unoptimized
*/  

// Optimization 
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED