/*
 *@Author Zachary Garner, Tyler Parker
 *
 *
 */
/*
 *This imports all of the functions from the data_structure.js file
 */
var exports = module.exports = {};
var data = require("./data_structures.js");
/*
 *@param file
 *@param stanzas
 *@param linesPer
 *@param wordsPerLine
 *@param probablity
 *@param bool
 *
 * this function run the whole file. 
 * it takes the file and all the params and sends them to the approprate place
 *
 *
 */
function main(file, stanzas, linesPer, wordsPerLine, probability, bool){
    if(data.reading(file) != null ){
		if(bool == true){
			data.main(file);
		}
		let poemCreator = new Poem(file, stanzas, linesPer, wordsPerLine, probability);
		let poemWords = poemCreator.makePoem();
		let words = makePoem(file, wrdCnt, probability, wordNum);
		console.log(structurePoem(words, stanzas, linesPer, wordsPerLine));
	}
	else{
		console.log("ERROR, plese enter a file with text to run");
	}
}

function Poem(file, stanzas, linesPer, wordsPer, probability){
	this.file = file;
	this.stanzas = stanzas;
	this.linesPer = linesPer;
	this.wordsPer = wordsPer;
	this.probability = probability;
	
	var wordNum = (wordsPerLine * linesPer * stanzas) - 1;
	var wrdCnt = data.wordCount(data.reading(file));

	/*
	 *@param file 
	 *@param wrdCnt
	 *@param chances
	 *@param words
	 *@return allwords
	 * This file take the parameters and also sends them to the approprate place
	 *
	 * this files returns a object caleld allWords 
	 */
	function makePoem(){
		current = pickFirstWord(wrdCnt, probability);
		let condFreq = data.condWordFreq(wrdCnt, data.reading(this.file), false);
		//console.log(condFreq); //for debugging purposes
		let allWords = pickNextWord(condFreq, current, this.probability, wordNum, 1, [current]);
		//console.log(allWords); //for debugging purposes
		return allWords;
	}
	/*
	 *@param poemWords
	 *@param stanzas
	 *@param linesPer
	 *@param wordsPerLine
	 *@return finalPoem
	 *
	 * This function takes in poemWords and formats the whole poem. 
	 * then returns a string of how the poem will look
	 *
	 */

	function structurePoem(poemWords){
		var finalPoem = "";
		var i = 0;
		var j = 0;
		while(j < this.stanzas){
			var k = 0;
			while(k < this.linesPer){
				var l = 0;
				while(l < this.wordsPerLine){
					finalPoem += (poemWords[i]);
					l += 1; 
					if(l < wordsPerLine){
						finalPoem += " ";
					}
					i += 1;
				}
				finalPoem += ",\n";
				k += 1;
			}
			finalPoem += "\n";
			j += 1;
		}
		return finalPoem;
	}
	/*
	 *@param wrdCnt
	 *@param chances
	 *@returns i
	 *
	 *This function takes in an object and an array. The object is wrdCnt and 
	 *the functions runs through the object and compares it to the first value in 
	 *the array chances. 
	 *
	 *this function returns a word that is places at the front of the poem
	 *
	 */
	function pickFirstWord(){
		current = data.wordFreq(wrdCnt);
		let last = 0;
		for(i in current){
			last += current[i];
			//console.log(i); //for debugging purposes
			if(last >= this.probability[0]){
				return i;
			}//ends if

		}//ends for loop
	}
	/*
	 *@param condFreq
	 *@param current
	 *@param chances
	 *@param words
	 *@param ind
	 *@param wrdArr
	 *
	 * This function uses recurrsion to go through the condWordFreq from 
	 * data_structures and then chooses randomly and then returns wrdArr
	 *
	 *
	 */
	function pickNextWord(condFreq, current, chances, words, ind, wrdArr){
		let last = 0;
		var nextWord = "";
		for(i in condFreq[current]){
			last += condFreq[current][i];
			//console.log("chances index: " + (ind % chances.length));
			
			if(last >= chances[ind % chances.length]){ //optionally uses hardcoded values
			//if(last >= Math.random()){ //uses completely random values
				nextWord = i;
				break;
			}//ends if
			
			//console.log(last);
		}//ends for loop
		//console.log("iteration " + ind);
		wrdArr[ind] = nextWord;
		//console.log("wrdArr " + ind); debug for finding problems in the array
		//console.log(wrdArr);	
		if(words > 0){
			wrdArr = pickNextWord(condFreq, nextWord, chances, (words - 1), (ind + 1), wrdArr);
			//recursive call, works best for this sort of program IMO
		}
		return wrdArr;
	}
}

/*
 * This is just if you want to put the params in by yourself.
 *
 */
main(process.argv[2], 2, 4, 5, [0.8, 0.1, 0.3, 0.8, 0.1] , false); //hardcoded parameters, optional
//main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7]);
//optional non-hardcoded parameters
