export const fileName = (string) => {
  return string === 'TOP LEFT'
    ? require('../../assets/audio/topLeft.mp3')
    : string === 'TOP RIGHT'
    ? require('../../assets/audio/topRight.mp3')
    : string === 'BOTTOM LEFT'
    ? require('../../assets/audio/bottomLeft.mp3')
    : string === 'BOTTOM RIGHT'
    ? require('../../assets/audio/bottomRight.mp3')
    : string === 'FIVE HOLE'
    ? require('../../assets/audio/fiveHole.mp3')
    : string === 'RIGHT SHOULDER'
    ? require('../../assets/audio/rightShoulder.mp3')
    : string === 'LEFT SHOULDER'
    ? require('../../assets/audio/leftShoulder.mp3')
    : string === 'UNDER BLOCKER'
    ? require('../../assets/audio/underBlocker.mp3')
    : string === 'UNDER GLOVE'
    ? require('../../assets/audio/underGlove.mp3')
    : string === 'MIDDLE LEFT'
    ? require('../../assets/audio/middleLeft.mp3')
    : string === 'MIDDLE RIGHT'
    ? require('../../assets/audio/middleRight.mp3')
    : string === 'Get Ready!'
    ? require('../../assets/audio/getReady.mp3')
    : null;
};
