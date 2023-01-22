export const fileName = (string) => {
  return string === 'topLeft'
    ? require('../../assets/audio/topLeft.mp3')
    : string === 'topRight'
    ? require('../../assets/audio/topRight.mp3')
    : string === 'bottomLeft'
    ? require('../../assets/audio/bottomLeft.mp3')
    : string === 'bottomRight'
    ? require('../../assets/audio/bottomRight.mp3')
    : string === 'fiveHole'
    ? require('../../assets/audio/fiveHole.mp3')
    : string === 'rightShoulder'
    ? require('../../assets/audio/rightShoulder.mp3')
    : string === 'leftShoulder'
    ? require('../../assets/audio/leftShoulder.mp3')
    : string === 'underBlocker'
    ? require('../../assets/audio/underBlocker.mp3')
    : string === 'underGlove'
    ? require('../../assets/audio/underGlove.mp3')
    : string === 'middleLeft'
    ? require('../../assets/audio/middleLeft.mp3')
    : string === 'middleReft'
    ? require('../../assets/audio/middleRight.mp3')
    : string === 'getReady'
    ? require('../../assets/audio/getReady.mp3')
    : null;
};
