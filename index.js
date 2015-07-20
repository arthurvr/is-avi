'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 11) {
		return false;
	}

	return buf[0] === 0x52 &&
		buf[1] === 0x49 &&
		buf[2] === 0x46 &&
		buf[3] === 0x46 &&
		buf[8] === 0x41 &&
		buf[9] === 0x56 &&
		buf[10] === 0x49;
};
