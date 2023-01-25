/* eslint-disable no-unused-expressions */

import * as patterns from '../../temp/drill_patterns.json';
export const patternSelector = (tutor, patternName) => {
  return tutor === '5 hole' && patternName === 'Around The World'
    ? patterns.drillPatterns[0]
    : tutor === '11 hole' && patternName === 'Around The World'
    ? patterns.drillPatterns[1]
    : tutor === '5 hole' && patternName === 'Pick N Corners'
    ? patterns.drillPatterns[2]
    : tutor === '11 hole' && patternName === 'Pick N Corners'
    ? patterns.drillPatterns[3]
    : tutor === '5 hole' && patternName === 'Up Down'
    ? patterns.drillPatterns[4]
    : tutor === '11 hole' && patternName === 'Up Down'
    ? patterns.drillPatterns[5]
    : tutor === '5 hole' && patternName === 'Downtown'
    ? patterns.drillPatterns[6]
    : tutor === '11 hole' && patternName === 'Downtown'
    ? patterns.drillPatterns[7]
    : tutor === '5 hole' && patternName === 'Crash and Bang'
    ? patterns.drillPatterns[8]
    : tutor === '11 hole' && patternName === 'Crash and Bang'
    ? patterns.drillPatterns[9]
    : tutor === '5 hole' && patternName === 'Titanic'
    ? patterns.drillPatterns[10]
    : tutor === '11 hole' && patternName === 'Titanic'
    ? patterns.drillPatterns[11]
    : tutor === '5 hole' && patternName === "Mom's Cookies"
    ? patterns.drillPatterns[12]
    : tutor === '11 hole' && patternName === "Mom's Cookies"
    ? patterns.drillPatterns[13]
    : tutor === '5 hole' && patternName === 'Riding Pine'
    ? patterns.drillPatterns[14]
    : tutor === '11 hole' && patternName === 'Riding Pine'
    ? patterns.drillPatterns[15]
    : tutor === '5 hole' && patternName === 'Dump and Chase'
    ? patterns.drillPatterns[16]
    : tutor === '11 hole' && patternName === 'Dump and Chase'
    ? patterns.drillPatterns[17]
    : tutor === '5 hole' && patternName === 'The Frustrating One'
    ? patterns.drillPatterns[18]
    : patterns.drillPatterns[19];
};
