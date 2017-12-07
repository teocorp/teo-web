import { REGEX } from '../constants/index';

export module ColorHelper {
  let hexDigits = new Array
    ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

  // Function to convert rgb color to hex format
  export function rgb2hex(rgb) {
    rgb = rgb.match(REGEX.RGB);
    return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
  }

  function hex(x) {
    return isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
  }
}
