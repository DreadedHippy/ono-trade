#!/bin/bash

PWD=`pwd`
echo "present working directory is $PWD"

ionic build --prod

[ $? -eq 0 ] && echo "Succesfuly built to production" || echo "Failed to build to production"


BUILD_FILE="./android/app/build/outputs/apk/debug/app-debug.apk"
ionic cap sync android

cd android

[ $? -eq 0 ] && echo "cd android Command Successful" || echo "cd android command failed"

./gradlew assembleDebug
echo "Previous Command status is $?"
cd ..
cp $BUILD_FILE ~/Downloads/onotrade_debug
[ $? -eq 0 ] && echo "apk file now in your homdir Downloads folder" || echo "Copy failed"
