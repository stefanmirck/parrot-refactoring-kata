import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createParrot, PARROT_TYPES } from '../src/parrot.js';

test("get speed of european parrot", () => {
	const parrot = new createParrot({
		type: PARROT_TYPES.EUROPEAN,
	});

	assert.equal(parrot.getSpeed(), 12);
});

test("get speed of african parrot with one coconut", () => {
	const parrot = new createParrot({
		type: PARROT_TYPES.AFRICAN,
		numberOfCoconuts: 1,
	});

	assert.equal(parrot.getSpeed(), 3);
});

test("get speed of african parrot with two coconuts", () => {
	const parrot = new createParrot({
		type: PARROT_TYPES.AFRICAN,
		numberOfCoconuts: 2,
	});

	assert.equal(parrot.getSpeed(), 0);
});

test("get speed of african parrot with no coconuts", () => {
	const parrot = new createParrot({
		type: PARROT_TYPES.AFRICAN,
	});

	assert.equal(parrot.getSpeed(), 12);
});

test("get speed norwegian blue parrot nailed", () => {
	const parrot = new createParrot({
		type: PARROT_TYPES.NORWEGIAN_BLUE,
		voltage: 1.5,
		isNailed: true,
	});

	assert.equal(parrot.getSpeed(), 0);
});

test("get speed norwegian blue parrot not nailed", () => {
	const parrot = new createParrot({
		type: PARROT_TYPES.NORWEGIAN_BLUE,
		voltage: 1.5,
	});

	assert.equal(parrot.getSpeed(), 18);
});

test("get speed norwegian blue parrot not nailed high voltage", () => {
	const parrot = new createParrot({
		type: PARROT_TYPES.NORWEGIAN_BLUE,
		voltage: 4,
	});

	assert.equal(parrot.getSpeed(), 24);
});
