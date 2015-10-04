import path from 'path';
import test from 'ava';
import readChunk from 'read-chunk';
import isAvi from '../';

test('should detect .AVI files', t => {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixture', 'fixture.avi'), 0, 11, (err, buf) => {
		t.error(err);
		t.true(isAvi(buf));
	});
});

test('should not give false positives', t => {
	t.plan(2);

	readChunk(path.join(__dirname, 'fixture', 'fixture.mp3'), 0, 11, (err, buf) => {
		t.error(err);
		t.false(isAvi(buf));
	});
});
