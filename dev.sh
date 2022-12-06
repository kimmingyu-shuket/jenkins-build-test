#!/bin/bash

echo "npm install start."
npm install
echo "npm install success."

echo "npm build start."
npm run build
echo "npm build end"
ls -al
