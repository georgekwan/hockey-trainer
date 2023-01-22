export const imageFileName = (string) => {
  return string === 'TOP LEFT'
    ? require('../../assets/hockeynet/targets/topLeft.png')
    : string === 'TOP RIGHT'
    ? require('../../assets/hockeynet/targets/topRight.png')
    : string === 'BOTTOM LEFT'
    ? require('../../assets/hockeynet/targets/bottomLeft.png')
    : string === 'BOTTOM RIGHT'
    ? require('../../assets/hockeynet/targets/bottomRight.png')
    : string === 'FIVE HOLE'
    ? require('../../assets/hockeynet/targets/fiveHole.png')
    : string === 'RIGHT SHOULDER'
    ? require('../../assets/hockeynet/targets/rightShoulder.png')
    : string === 'LEFT SHOULDER'
    ? require('../../assets/hockeynet/targets/leftShoulder.png')
    : string === 'UNDER BLOCKER'
    ? require('../../assets/hockeynet/targets/underBlocker.png')
    : string === 'UNDER GLOVE'
    ? require('../../assets/hockeynet/targets/underGlove.png')
    : string === 'MIDDLE LEFT'
    ? require('../../assets/hockeynet/targets/middleLeft.png')
    : string === 'MIDDLE RIGHT'
    ? require('../../assets/hockeynet/targets/middleRight.png')
    : null;
};
