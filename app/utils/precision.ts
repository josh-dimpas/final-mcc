export function precision(num: number) {
	let t = num.constructor.name;
	if (Number.isInteger(num)) return 0;

	if (t == "Number") {
		if (num !== num) throw new Error("passed value is NaN");
		if (num < 0) num = -num; // or use Math.abs() :)
		const LIMIT = 1000000000000000; // the point after which numbers could be different from our expectations (IEEE 754 explains why)
		let fixed = Math.round(num * LIMIT) / LIMIT;
		if (num - fixed == 0) {
			// code here by Volodymyr Agafonkin (aka Mourner)
			let e = 1; let decP = 0;
			while (Math.round(num * e) / e !== num) {
				e *= 10; decP++;
			}
			return decP;
		}

		num = num.toString();
	} else if (t != "String") {
		throw new Error("`num` must be a number or a String formatted like a number");
	}

	let precision = 0;
	num = num.split("");
	let i = num.indexOf("."); let len = num.length;
	if (i == -1) {
		i = num.indexOf("e");
		if (i < 0) return 0;
	} else {
		while (i + 1 < len && num[i + 1] != "e") { // i+1 cause otherwise the precision will be +1 the actual value
			precision++;
			++i;
		}
		i++; // if we found an 'e' we need skip 1, otherwise incrementing further will not be an issue
	}
	if (i < len) {
		let expStr = "";
		i++; // here we skip a character, cause both here `num[i+1]!='e'` and here `i = num.indexOf('e');` num[i] will be 'e'
		while (i < len) {
			expStr += num[i];
			i++;
		}
		expStr = +expStr;
		precision += (expStr < 0 ? -expStr : expStr);
	}
	return precision;
}
