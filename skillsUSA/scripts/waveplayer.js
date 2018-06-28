function loadPlayer () {
  //the line below initializes the waveplayer display
  window.visualizer = WaveSurfer.create({ container: '#visualize', barWidth: 10, waveColor: '#2F2877', progressColor: '#9E98E7', cursorColor: '#FFFFFF', autoCenter: 'FALSE' });
  window.visualizer.load('audio/Delta_Bound.mp3') //loads the showcased audio
  let image = document.querySelector('img[role="button"]') //loads the pause/play visual into memory for late use
  //the line below allows the pause/play button to start the audio AFTER the element is loaded, preventing console errors
  window.visualizer.on('ready', function () {document.getElementById('control').setAttribute('onclick', "window.visualizer.playPause()")})
  window.visualizer.on('pause', function () {image.src='images/start.svg'}) // when the playback is paused display a play icon
  window.visualizer.on('play', function () {image.src='images/pause.svg'}) // whent he playback is resumed display a pause icon
  window.visualizer.on('finish', function () {image.src='images/start.svg'}) //when the playback finished display a play icon
}
