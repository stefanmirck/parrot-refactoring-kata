export const PARROT_TYPES = {
	EUROPEAN: 'EUROPEAN',
	AFRICAN: 'AFRICAN',
	NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export function createParrot(type, numberOfCoconuts, voltage, isNailed) {
	switch (type) {
		case PARROT_TYPES.EUROPEAN:
			return new EuropeanParrot(numberOfCoconuts, voltage, isNailed);
		case PARROT_TYPES.AFRICAN:
			return new AfricanParrot(numberOfCoconuts, voltage, isNailed);
		case PARROT_TYPES.NORWEGIAN_BLUE:
			return new NorwegianBlueParrot(numberOfCoconuts, voltage, isNailed);
	}
}

class Parrot {
	constructor(type, numberOfCoconuts, voltage, isNailed) {
		this.type = type;
		this.numberOfCoconuts = numberOfCoconuts;
		this.voltage = voltage;
		this.isNailed = isNailed;
	}

	getSpeed() {
		switch (this.type) {
			case PARROT_TYPES.EUROPEAN:
				return this.getBaseSpeed();
			case PARROT_TYPES.AFRICAN:
				return Math.max(0, this.getBaseSpeed() - this.getLoadFactor() * this.numberOfCoconuts);
			case PARROT_TYPES.NORWEGIAN_BLUE:
				return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
		}
		throw new Error("Should be unreachable");
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
	constructor(numberOfCoconuts, voltage, isNailed) {
		super(PARROT_TYPES.EUROPEAN, numberOfCoconuts, voltage, isNailed);
	}
}

class AfricanParrot extends Parrot {
	constructor(numberOfCoconuts, voltage, isNailed) {
		super(PARROT_TYPES.AFRICAN, numberOfCoconuts, voltage, isNailed);
	}
}

class NorwegianBlueParrot extends Parrot {
	constructor(numberOfCoconuts, voltage, isNailed) {
		super(PARROT_TYPES.NORWEGIAN_BLUE, numberOfCoconuts, voltage, isNailed);
	}
}
