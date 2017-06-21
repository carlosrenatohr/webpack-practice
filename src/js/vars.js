export let isTrue = true;
export let isFalse = false;

export class RandomNumber {

	static getRandInteger () {
		return Math.Ceil(Math.random() * 100);
	}

	static getRandRange (min, max) {
		return Math.floor(Math.random() * (max-min + 1) + min);
	}

}