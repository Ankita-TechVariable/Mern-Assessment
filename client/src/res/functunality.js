const roomDetailer = (roomData) =>
	`${roomData.room_type}, ${roomData.vacant_rooms}, $${roomData.price}`;

const numDescriptor = (num) => {
	if (num % 14 === 0) {
		return "foobar";
	} else if (num % 7 === 0) {
		return "bar";
	} else if (num % 2 === 0) {
		return "foo";
	} else {
		return num;
	}
};

// Code Refactor

const obj = {
	ONTARIO: {
		rate: 12,
		points: 0,
	},
	QUEBEC: {
		rate: 5,
		points: 2,
	},
	ALBERTA: {
		rate: 3,
		points: 0,
	},
};

let basis = (amt) => amt;
let extra = (amt) => amt;

function calc(base = 1, province = "") {
	let { rate = 1, points = 0 } = obj[province.toUpperCase()];

	let amt = base * rate;
	let result = 2 * basis(amt) + extra(amt) * 1.05;
	let returnable = {
		result,
	};
	if (points) return { ...returnable, points };
	return returnable;
}

export { roomDetailer, numDescriptor, calc };
