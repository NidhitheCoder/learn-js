# Jest
- Jest is a javascript testing library.
- You can install jest with `npm i --save-dev jest`.

## How to test a javascript file with jest
- Install jest with `npm i --save-dev jest`, make sure that install npm. (If not installed. install using `npm init -y`);
- Change value of test key inside script object in package.json to `jest`. 
- Using `jest --covarege` will give more info about testing
- Create new file with extension `test.js`. Example `fileName.test.js`.
- Export required javascript file using `require`. Example. `const variableName = require('filenamePath')`.
- 
```
    test('info about testing', () => {
        <!-- tesing function Body -->
    })
```

- See `sum.test.js` for more referance.
