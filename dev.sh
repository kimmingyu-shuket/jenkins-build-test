#!/bin/bash
echo "node_modules remove."
rm -rf node_modules package-lock.json

echo "npm install start."
npm install --save
echo "npm install success."

echo "npm build start."
npm run build
echo "npm build end"
ls -al
