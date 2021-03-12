module.exports = function toReadable(number) {
    let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	let a = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
	let ten = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    if (number < 10) {
		return num[number];
	} else if (number < 20) {
		return `${a[number - 10]}`;
	} else if(number < 100) {
		if (number % 10 === 0) return ten[number / 10]
		return `${ten[Math.floor(number / 10)]} ${num[number % 10]}`
	} else {
		if (number % 100 === 0) return `${num[number / 100]} hundred`;
		if ((number % 100) === 10) return `${num[Math.floor(number / 100)]} hundred ten`
		if ((number % 100) % 10 === 0) return `${num[Math.floor(number / 100)]} hundred ${ten[Math.floor((number % 100) / 10)]}`
		if ((number % 100) < 10) return `${num[Math.floor(number / 100)]} hundred ${num[(number % 100)]}`
		if ((number % 100) < 20) return `${num[Math.floor(number / 100)]} hundred ${a[((number % 100) % 10)]}`

		return `${num[Math.floor(number / 100)]} hundred ${ten[Math.floor((number % 100) / 10)]} ${num[Math.floor((number % 100) % 10)]}`
	}

}
