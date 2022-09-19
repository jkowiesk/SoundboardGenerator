#!/bin/bash
cd "$(dirname "$0")"
echo "Project name: "
read projectName
capacitor='{ "appId": "io.ionic.soundboard", "appName": "blank", "bundledWebRuntime": false, "npmClient": "npm", "webDir": "build", "cordova": {}, "launchShowDuration": 0 }'
variablesJs='export const projectName = "blank";'
capacitor=${capacitor//blank/$projectName}
variablesJs=${variablesJs//blank/$projectName}
echo "$capacitor" > ./capacitor.config.json
echo "$variablesJs" > ./src/variables.js
cd src
node Sounds.js
cd ..
rm -rf android
npm run build
npx cap add android
cp -r ./resources/res/* android/app/src/main/res
npx cap open android