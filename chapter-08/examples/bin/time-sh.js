#!/usr/bin/env node

'use strict';

const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();

console.log(`Il est ${hour}h${minutes}.`);
