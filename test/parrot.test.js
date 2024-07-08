import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createParrot, ParrotType } from '../src/parrot.js';

test("get speed of european parrot", () => {
	const parrot = new createParrot({
		type: ParrotType.European,
	});

	assert.match({}.toString.call(parrot), /EuropeanParrot/);
	assert.equal(parrot.getSpeed(), 12);
});

test("get speed of african parrot with one coconut", () => {
	const parrot = new createParrot({
		type: ParrotType.African,
		numberOfCoconuts: 1,
	});

	assert.match({}.toString.call(parrot), /AfricanParrot/);
	assert.equal(parrot.getSpeed(), 3);
});

test("get speed of african parrot with two coconuts", () => {
	const parrot = new createParrot({
		type: ParrotType.African,
		numberOfCoconuts: 2,
	});

	assert.equal(parrot.getSpeed(), 0);
});

test("get speed of african parrot with no coconuts", () => {
	const parrot = new createParrot({
		type: ParrotType.African,
	});

	assert.equal(parrot.getSpeed(), 12);
});

test("get speed norwegian blue parrot nailed", () => {
	const parrot = new createParrot({
		type: ParrotType.NorwegianBlue,
		voltage: 1.5,
		isNailed: true,
	});

	assert.match({}.toString.call(parrot), /NorwegianBlueParrot/);
	assert.equal(parrot.getSpeed(), 0);
});

test("get speed norwegian blue parrot not nailed", () => {
	const parrot = new createParrot({
		type: ParrotType.NorwegianBlue,
		voltage: 1.5,
	});

	assert.equal(parrot.getSpeed(), 18);
});

test("get speed norwegian blue parrot not nailed high voltage", () => {
	const parrot = new createParrot({
		type: ParrotType.NorwegianBlue,
		voltage: 4,
	});

	assert.equal(parrot.getSpeed(), 24);
});
