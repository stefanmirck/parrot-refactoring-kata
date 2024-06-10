export const PARROT_TYPES = {
	EUROPEAN: 'EUROPEAN',
	AFRICAN: 'AFRICAN',
	NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export function createParrot(type, numberOfCoconuts, voltage, isNailed) {
	switch (type) {
		case PARROT_TYPES.EUROPEAN:
			return new EuropeanParrot(voltage, isNailed);
		case PARROT_TYPES.AFRICAN:
			return new AfricanParrot(numberOfCoconuts, voltage, isNailed);
		case PARROT_TYPES.NORWEGIAN_BLUE:
			return new NorwegianBlueParrot(voltage, isNailed);
	}
}

class Parrot {
	constructor(voltage, isNailed) {
		this.voltage = voltage;
		this.isNailed = isNailed;
	}

	getBaseSpeedWithVoltage(voltage) {
		return Math.min(24, voltage * this.getBaseSpeed());
	}

	getLoadFactor() {
		return 9;
	}

	getBaseSpeed() {
		return 12;
	}
}

class EuropeanParrot extends Parrot {
	constructor(voltage, isNailed) {
		super(voltage, isNailed);
	}

	getSpeed() {
		return this.getBaseSpeed();
	}
}

class AfricanParrot extends Parrot {
	constructor(numberOfCoconuts, voltage, isNailed) {
		super(voltage, isNailed);

		this.numberOfCoconuts = numberOfCoconuts;
	}

	getSpeed() {
		return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
	}
}

class NorwegianBlueParrot extends Parrot {
	constructor(voltage, isNailed) {
		super(voltage, isNailed);
	}

	getSpeed() {
		return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
	}
}
