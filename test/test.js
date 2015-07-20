'use strict';
var assert = require('assert');
var path = require('path');
var readChunk = require('read-chunk');
var isAvi = require('../');

it('should detect .AVI files', function (cb) {
	readChunk(path.join(__dirname, 'fixture', 'fixture.avi'), 0, 11, function (err, buf) {
		assert(!err, err);
		assert(isAvi(buf));

		cb();
	});
});

it('should not give false positives', function (cb) {
	readChunk(path.join(__dirname, 'fixture', 'fixture.mp3'), 0, 11, function (err, buf) {
		assert(!err, err);
		assert(!isAvi(buf));

		cb();
	});
});
