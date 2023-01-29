/* eslint-disable no-unused-expressions */

import * as patterns from '../../temp/drill_patterns.json';
export const patternIDToText = (patternID) => {
  return patternID === '5-01'
    ? '(5)Around the World'
    : patternID === '11-01'
    ? '(11)Around the World'
    : patternID === '5-02'
    ? '(5)Pick N Corners'
    : patternID === '11-02'
    ? '(11)Pick N Corners'
    : patternID === '5-03'
    ? '(5)Up Down'
    : patternID === '11-03'
    ? '(11)Up Down'
    : patternID === '5-04'
    ? '(5)Downtown'
    : patternID === '11-04'
    ? '(11)Downtown'
    : patternID === '5-05'
    ? '(5)Crash and Bang'
    : patternID === '11-05'
    ? '(11)Crash and Bang'
    : patternID === '5-06'
    ? '(5)Titanic'
    : patternID === '11-06'
    ? '(11)Titanic'
    : patternID === '5-07'
    ? "(5)Mom's Cookies"
    : patternID === '11-07'
    ? "(11)Mom's Cookies"
    : patternID === '5-08'
    ? '(5)Riding Pine'
    : patternID === '11-08'
    ? '(11)Riding Pine'
    : patternID === '5-09'
    ? '(5)Dump and Chase'
    : patternID === '11-09'
    ? '(11)Dump and Chase'
    : patternID === '5-10'
    ? '(5)Frustrating One'
    : '(11)Frustrating One';
};
