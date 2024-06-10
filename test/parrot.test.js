import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Parrot, PARROT_TYPES } from '../src/parrot.js';

test("get speed of european parrot", () => {
	const parrot = new Parrot(PARROT_TYPES.EUROPEAN, 0, 0, false);

	assert.equal(parrot.getSpeed(), 12);
});

test("get speed of african parrot with one coconut", () => {
	const parrot = new Parrot(PARROT_TYPES.AFRICAN, 1, 0, false);

	assert.equal(parrot.getSpeed(), 3);
});

test("get speed of african parrot with two coconuts", () => {
	const parrot = new Parrot(PARROT_TYPES.AFRICAN, 2, 0, false);

	assert.equal(parrot.getSpeed(), 0);
});

test("get speed of african parrot with no coconuts", () => {
	const parrot = new Parrot(PARROT_TYPES.AFRICAN, 0, 0, false);

	assert.equal(parrot.getSpeed(), 12);
});

test("get speed norwegian blue parrot nailed", () => {
	const parrot = new Parrot(PARROT_TYPES.NORWEGIAN_BLUE, 0, 1.5, true);

	assert.equal(parrot.getSpeed(), 0);
});

test("get speed norwegian blue parrot not nailed", () => {
	const parrot = new Parrot(PARROT_TYPES.NORWEGIAN_BLUE, 0, 1.5, false);

	assert.equal(parrot.getSpeed(), 18);
});

test("get speed norwegian blue parrot not nailed high voltage", () => {
	const parrot = new Parrot(PARROT_TYPES.NORWEGIAN_BLUE, 0, 4, false);

	assert.equal(parrot.getSpeed(), 24);
});
