import React from 'react';

const arr = [];
const SpanScore = document.getElementById('SpanScore');

function arraySum(array){
  let sum = 0;
  for(var i = 0; i < array.length; i++){
      sum += array[i];
      }
  SpanScore.innerHTML = sum;
}
export default arraySum(arr);

