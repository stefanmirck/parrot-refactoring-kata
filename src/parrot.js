export const ParrotType = Object.freeze({
	European: Symbol('EUROPEAN'),
	African: Symbol('AFRICAN'),
	NorwegianBlue: Symbol('NORWEGIAN_BLUE'),
});

export function createParrot({
	type,
	numberOfCoconuts = 0,
	voltage = 0,
	isNailed = false,
}) {
	switch (type) {
		case ParrotType.European:
			return new EuropeanParrot();
		case ParrotType.African:
			return new AfricanParrot(numberOfCoconuts);
		case ParrotType.NorwegianBlue:
			return new NorwegianBlueParrot(voltage, isNailed);
	}
}

class Parrot {
	getBaseSpeed() {
		return 12;
	}
}

class EuropeanParrot extends Parrot {
	getSpeed() {
		return this.getBaseSpeed();
	}
}

class AfricanParrot extends Parrot {
	#numberOfCoconuts;

	constructor(numberOfCoconuts) {
		super();

		this.#numberOfCoconuts = numberOfCoconuts;
	}

	#getLoadFactor() {
		return 9;
	}

	getSpeed() {
		return Math.max(0, this.getBaseSpeed() - this.#getLoadFactor() * this.#numberOfCoconuts);
	}
}

class NorwegianBlueParrot extends Parrot {
	#voltage;
	#isNailed;

	constructor(voltage, isNailed) {
		super();

		this.#voltage = voltage;
		this.#isNailed = isNailed;
	}

	getSpeed() {
		return this.#isNailed ? 0 : Math.min(24, this.#voltage * this.getBaseSpeed());
	}
}
