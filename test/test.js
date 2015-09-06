'use strict';
var path = require('path');
var test = require('ava');
var readChunk = require('read-chunk');
var isAvi = require('../');

test('should detect .AVI files', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixture', 'fixture.avi'), 0, 11, function (err, buf) {
		t.error(err);
		t.true(isAvi(buf));
	});
});

test('should not give false positives', function (t) {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixture', 'fixture.mp3'), 0, 11, function (err, buf) {
		t.error(err);
		t.false(isAvi(buf));
	});
});
