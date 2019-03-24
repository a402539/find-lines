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
console.log("res = ",res)
var textOutput = "initial list of patterns is " + JSON.stringify(m, null, 2) + "<br>";
var res2 = new Set();
m.map((a, i) => {
    m.map((b, j) => {
		if (i >= j) {
			return; 
		}
		if (a.indexOf(b) >= 0) {
			res2.add(a);
			textOutput += '"'+a+'" to be excluded as superseded by "'+b+'"<br>';
		} else if (b.indexOf(a) >= 0) {
			res2.add(b);
			textOutput += '"'+b+'" to be excluded as superseded by "'+a+'"<br>';
		}
	});
});
console.log("res2 = ",res2);
var resCont = document.getElementsByClassName("res")[0];
resCont.innerHTML = textOutput + 
	"patterns to be excluded: " + JSON.stringify(Array.from(res2), null, 2) + "<br>" +
	"patterns list resulted " + JSON.stringify(m.filter(a=>!res2.has(a)));