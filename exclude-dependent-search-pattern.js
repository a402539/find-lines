var res = [];
var m = ["aa-b", "a-b", "a-bb", "a-c"];
m.map((a, i) => {
    m.map((b, j) => {
		if (i >= j) {
			return; 
		}
		var m1 = a.indexOf(b),
			m2 = b.indexOf(a),
			arr = [a, b];
		if (m1 === -1 && m2 === -1) {
			arr.push(0);
		} else if (m1 >= 0) {
			arr.push(-1);
		} else if (m2 >= 0) {
			arr.push(1);
		} else {
			console.log("a,b!!", a, b);
		}
		res.push(arr);
	});
});
console.log("res = ",res);
var res2 = {};
m.map((a, i) => {
    m.map((b, j) => {
		if (i >= j) {
			return; 
		}
		if (a.indexOf(b) >= 0) {
			res2[a] = true;
		} else if (b.indexOf(a) >= 0) {
			res2[b] = true;
		}
	});
});
console.log("res2 = ",res2);
var rs = m.reduce((total, el) => {
	if (!res2[el]) {
		total[el] = true;
	}
}, {});
console.log("rs = ",rs);