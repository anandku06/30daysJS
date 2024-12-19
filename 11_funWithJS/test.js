/* 
JavaScript is mainly run with the help of V8 engine. V8 is a Google's open-source high-performance JavaScript and WebAssembly engine written in C++. 
It is used in Chrome and in Node.js, among others.

jsvu -> JavaScript Version Updater, makes it easy to install recent versions of various JavaScript engines without having to compile them from source.

Using this jsvu package you can see the working of the JavaScript on the engine level

Array in JavaScript is of two types: Continuous and Holey 
*/

const myArr = []

%DebugPrint(myArr) 
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