/* eslint-disable no-unused-expressions */

import * as patterns from '../../temp/drill_patterns.json';
export const patternSelector = (tutor, patternName) => {
  return tutor === 5 && patternName === 'Around The World'
    ? patterns.drillPatterns[0]
    : tutor === 11 && patternName === 'Around The World'
    ? patterns.drillPatterns[1]
    : tutor === 5 && patternName === 'Pick N Corners'
    ? patterns.drillPatterns[2]
    : tutor === 11 && patternName === 'Pick N Corners'
    ? patterns.drillPatterns[3]
    : tutor === 5 && patternName === 'Up Down'
    ? patterns.drillPatterns[4]
    : tutor === 11 && patternName === 'Up Down'
    ? patterns.drillPatterns[5]
    : tutor === 5 && patternName === 'Downtown'
    ? patterns.drillPatterns[6]
    : tutor === 11 && patternName === 'Downtown'
    ? patterns.drillPatterns[7]
    : tutor === 5 && patternName === 'Crash and Bang'
    ? patterns.drillPatterns[8]
    : tutor === 11 && patternName === 'Crash and Bang'
    ? patterns.drillPatterns[9]
    : tutor === 5 && patternName === 'Titanic'
    ? patterns.drillPatterns[10]
    : tutor === 11 && patternName === 'Titanic'
    ? patterns.drillPatterns[11]
    : tutor === 5 && patternName === "Mom's Cookies"
    ? patterns.drillPatterns[12]
    : tutor === 11 && patternName === "Mom's Cookies"
    ? patterns.drillPatterns[13]
    : tutor === 5 && patternName === 'Riding Pine'
    ? patterns.drillPatterns[14]
    : tutor === 11 && patternName === 'Riding Pine'
    ? patterns.drillPatterns[15]
    : tutor === 5 && patternName === 'Dump and Chase'
    ? patterns.drillPatterns[16]
    : tutor === 11 && patternName === 'Dump and Chase'
    ? patterns.drillPatterns[17]
    : tutor === 5 && patternName === 'The Frustrating One'
    ? patterns.drillPatterns[18]
    : patterns.drillPatterns[19];
};
