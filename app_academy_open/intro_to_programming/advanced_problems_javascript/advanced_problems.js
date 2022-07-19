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

//Perfect Square
const perfect_square = (num) => {
	for (let i = 0; i < num; i++) {
		if (i * i == num) {
			return true
		}
	}
	return false;
} 

console.log(perfect_square(5));
console.log(perfect_square(25));

//Triple Sequence
const triple_sequence = (start, length) => {
	let answer = [start];

	for (let i = 0; answer.length < length; i++) {
		answer.push(answer[i] * 3);
	}
	return answer;
}

console.log(triple_sequence(2, 4));
console.log(triple_sequence(4, 5));

//Summation Sequence
const summation_sequence = (start, length) => {
	let answer = [start]; 

	for (let i = 0; answer.length < length; i++) {
		answer.push(summation(answer[i]));
	}
	return answer;
}

const summation = (num) => {
	let summ = 0;

	for (let i = 0; i <= num; i++) {
		summ = summ + i;
	}
	return summ;
}

console.log(summation_sequence(3, 4));
console.log(summation_sequence(5, 3));

//Fibonacci
const fibonacci = (length) => {
	let fib = [1, 1];
	if (length == 0) {
		return [];
	} else if(length == 1) {
		return [1];
	}

	for (let i = 1; i < length-1; i++) {
		let next = fib[i] + fib[i-1];
		fib.push(next);
	}
	return fib;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(6));
console.log(fibonacci(8));

//Caesar Cipher
const caesar_cipher = (str, num) => {
	let answer = "";
	let alphabet = "abcdefghijklmnopqrstuvwxyz";

	for (let letter of str) {
		let firstIndex = alphabet.indexOf(letter); 
		let nextIndex = firstIndex + num; 
		let finalIndex = 0;
		if (nextIndex > 25) {
			finalIndex = alphabet.indexOf(alphabet[nextIndex % 26]);
		} else {
			finalIndex = alphabet.indexOf(alphabet[nextIndex]);
		}
		answer += alphabet[finalIndex];
	}
	return answer;
}

console.log(caesar_cipher("apple", 1));
console.log(caesar_cipher("bootcamp", 2)); // "dqqvecor");

// Vowel Cipher 
const vowel_cipher = (string) => {
	let answer = "";
	let vowels = "aeiou";

	for (let i = 0; i < string.length; i++) {
		if (vowels.includes(string[i])) {
			let index = vowels.indexOf(string[i]);
			let newIndex = (index + 1) % 5;
			answer += vowels[newIndex] ;
		} else {
			answer += string[i];
		}
	}
	return answer;
}

console.log(vowel_cipher("bootcamp")); // buutcemp
console.log(vowel_cipher("paper cup")); //  pepir cap

// Double Letter Count 
const double_letter_count = (string) => {
	let count = 0;

	for (let i = 0; i < string.length; i++) {
		if (string[i + 1] == string[i]) {
			count++;
		}
	}
	return count; 
}

console.log(double_letter_count("the jeep rolled down the hill")); // 3
console.log(double_letter_count("bootcamp")); // 1

//Adjacent Sum
const adjacent_sum = (nums) => {
	let answer = [];

	for (let i = 1; i < nums.length; i ++) {
		let next = nums[i] + nums[i - 1];
		answer.push(next);
	}
	return answer;
}

console.log(adjacent_sum([3, 7, 2, 11])); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
console.log(adjacent_sum([2, 5, 1, 9, 2, 4])); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]