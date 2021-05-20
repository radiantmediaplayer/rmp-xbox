const rmpContainer = document.getElementById(window.elementID);

// information only
TVJS.DirectionalNavigation.addEventListener('focuschanging', function (e) {
  window.console.log(e.type);
  window.console.log(document.activeElement);
});

// set initial focus on play/pause button
const getOpacity = function (element) {
  const cs = getComputedStyle(element, null);
  if (cs) {
    let propertyValue = cs.getPropertyValue('opacity');
    propertyValue = propertyValue.toString().toLowerCase();
    return parseFloat(propertyValue);
  }
  return -1;
};

const setInitialFocus = function () {
  const nextElement = rmpContainer.querySelector('.rmp-control-bar');
  if (getOpacity(nextElement) === 1) {
    if (nextElement) {
      nextElement.focus();
    }
  } else {
    const initialFocusInterval = setInterval(function () {
      if (getOpacity(nextElement) === 1) {
        clearInterval(initialFocusInterval);
        const playPause = rmpContainer.querySelector('.rmp-play-pause');
        playPause.focus();
      }
    }, 40);
  }
};

// remove seek-bar from navigation
rmpContainer.addEventListener('ready', () => {
  rmpContainer.tabIndex = -1;
  const seekBar = rmpContainer.querySelector('.rmp-seek-bar');
  if (seekBar) {
    seekBar.tabIndex = -1;
  }
  setInitialFocus();
});

// information only
window.addEventListener('gamepadconnected', function (e) {
  window.console.log('Gamepad connected at index %d: %s. %d buttons, %d axes.',
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);
});
window.addEventListener('gamepaddisconnected', function (e) {
  console.log('Gamepad disconnected from index %d: %s',
    e.gamepad.index, e.gamepad.id);
});

// B key (red) means returning to index.html
// otherwise react by showing controls
const validKeys = [
  'GamepadA',
  'GamepadX',
  'GamepadY',
  'GamepadRightShoulder',
  'GamepadLeftShoulder',
  'GamepadLeftTrigger',
  'GamepadRightTrigger',
  'GamepadDPadUp',
  'GamepadDPadDown',
  'GamepadDPadLeft',
  'GamepadDPadRight',
  'GamepadLeftThumbstick',
  'GamepadRightThumbstick',
  'GamepadLeftThumbstickUp',
  'GamepadLeftThumbstickDown',
  'GamepadLeftThumbstickRight',
  'GamepadLeftThumbstickLeft',
  'GamepadRightThumbstickUp',
  'GamepadRightThumbstickDown',
  'GamepadRightThumbstickRight',
  'GamepadRightThumbstickLeft'
];

window.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key === 'GamepadB') { // B key
    event.stopPropagation();
    event.preventDefault();
    window.location.href = 'ms-appx-web:///index.html';
  } else if (validKeys.indexOf(key) > -1) {
    window.rmp.setControlsVisible(true);
  }
  window.console.log('key: ' + event.key + ', code: ' + event.code);
});
