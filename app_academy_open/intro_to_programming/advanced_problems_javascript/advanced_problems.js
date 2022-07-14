//App Academy - Advanced Problems - Intro to Programming 
// May by Key
const locations = [
	{"city":"New York City", "state":"New York", "coast":"East"},
	{"city":"San Francisco", "state":"California", "coast":"West"},
	{"city":"Portland", "state": "Oregon", "coast":"West"},
  ]
 
const arrayMap = (arr, key) => {
	return arr.map(hash => hash[key]);
}

console.log(arrayMap(locations, "state"));

// Yell Sentence
const yell_sentence = (sent) => {
	sentArr = sent.split(" ");
	yellArr = sentArr.map(word => word.toUpperCase() + "!")
	return yellArr.join(" ");
} 

console.log(yell_sentence("I have a bad feeling about this"));

// Whisper Words 
const whisper_words = (words) => {
	return words.map(word => word.toLowerCase() + "...");
}

console.log(whisper_words(["KEEP", "The", "NOISE", "down"]));

// O Words 
const o_words = (sentence) => {
	let sentenceArray = sentence.split(" ");
	const result = sentenceArray.filter(word => word.includes("o"))
	return result;
}

console.log(o_words("How did you do that?"));

// Last Index
const last_index = (str, char) => {
	let i = str.length - 1;

	while (i > 0) {
		if (str[i] == char) {
			return i
		}
	i--;
	}
}

console.log(last_index("abca", "a")); //3
console.log(last_index("mississipi", "i")); // 9

// Most Vowels
const most_vowels = (sentence) => {
	count = {};

	sentenceArray = sentence.split(" ");
	for (const word of sentenceArray) {
		count[word] = vowelCount(word);
	}
	console.log(count);
	let sortable = [];
	for (let key in count) {
		sortable.push([key, count[key]]);
	}
	console.log(sortable);
	sortable.sort(function(a, b) {
		return b[1] - a[1];
 	});
	console.log(sortable);
	return sortable[0][0];
}

const vowelCount = (word) => {
	let vowels = "aeiou";
	let count = 0;

	for (let letter of word) {
		if (vowels.includes(letter)) {
			count++;
		}
	}
	return count;
}

console.log(most_vowels("what a wonderful life"));

//Prime 
const prime = (num) => {
	let i = num - 1;

	if (num < 2) {
		return false;
	}

	while (i > 1) {
		if (num % i == 0) {
			return false; 
		} 
		i--;
	}
	return true; 
}

console.log(prime(5))

//Pick Primes
const pick_primes = (numbers) => {
	return numbers.filter(num => prime(num));
} 

console.log(pick_primes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))
console.log(pick_primes(([101, 20, 103, 2017])));

// Prime Factors 
const prime_factors = (num) => {
	let primeFactors = [];
	
	for (let i = 0; i < num; i++) {
		if (num % i == 0 && prime(i)) {
			primeFactors.push(i);
		} 
	}
	return primeFactors;
}

console.log(prime_factors(24));
console.log(prime_factors(60));

//Greatest Factor Array 
const greatest_factor_array = (arr) => {
	return arr.map(function(num) {
		if (num % 2 == 0) {
			return greatestFactor(num);
		} else {
			return num;
		}
	})
}

const greatestFactor = (num) => {
	for (let i = num-1; i > 0; i--) {
		if (num % i == 0) {
			return i
		}
	}
}

console.log(greatest_factor_array([16, 7, 9, 14]));
console.log(greatest_factor_array([30, 3, 24, 21, 10]));