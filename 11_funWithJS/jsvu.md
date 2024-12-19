## Installation of jsvu package

- You have to use -g (global) flag as this module is always installed globally

```
- npm i -g jsvu

- Select your Operating System

- Select the JS Engine you want to work with and enter; all the engines will be installed

```

- Then a .jsuv folder will be made in your C:\ drive
- contains a bunch of sub-directories
    - bin
    - engines
    - status.json

## To use the jsvu package

```
- trace the path of the bin directory of .jsvu module

- use v8-debug as the engine

- .jsvu/bin/v8-debug should be your path

- .jsvu/bin/v8-debug --allow-natives-syntax this cmd will make a d8 environment

```

- After this execute your debugging commands here