/**
 *@author Zachary Garner, Tyler Parker
 *
 */
/**
 *@param no param
 *@reutns nothing
 *this fucntion runs all of the other functions
 *
 * */
var exports = module.exports = {};
exports.main = main;
exports.wordCount = wordCount;
exports.wordFreq = wordFreq;
exports.condWordFreq = condWordFreq;
exports.reading = reading;

function main(){
    var fileArr = reading();
    if(fileArr != null ){
	    var wrdCnt = wordCount(fileArr);
	    var wordFreqs = wordFreq(wrdCnt);
	    var condWrdCnt = condWordCount(fileArr);
	    var condWFreq = condWordFreq(wrdCnt, fileArr, true);
	    console.log("wordCount is " + objectToString(wrdCnt));
	    console.log("wordFreq is " + objectToString(wordFreqs));
	    console.log("condWordCount is " + objectToString(condWrdCnt));
	    console.log("condWordFreq is " + objectToString(condWFreq));
     }
     else{
         console.log("There is no words contained in this file");
     }    
}//closes main
           
/**
 *@param
 *@returns txtArr
 *this function goes through a txt file and returns the txt in a array
 */
function reading(){
    var fs = require("fs");
    var txt = fs.readFileSync(process.argv[2],"utf8");
	var txtArr = txt.split(" ");
	let i = 0;
	while(i < txtArr.length){
		txtArr[i] = txtArr[i].replace(/\n/g, "");
		txtArr[i] = txtArr[i].replace(/,/g, "");
		txtArr[i] = txtArr[i].trim();
		i += 1;
	}
    if(txtArr.length >= 2 ){
        return txtArr;
    }
    else{
        txtArr = null;
        return txtArr;
    }
}//ending function
/**
 *@param ltrObject
 *@return ltrStringy
 *This function takes a object and goes through it and makes the objects keys 
 *into strings
 */
function objectToString(ltrObject){
	var ltrStringy = "";
	var cnt = 0;
	for(obj in ltrObject){
		if(cnt < ltrObject.length){
			ltrStringy += ("'" + obj + "':" + ltrObject[obj] + ", ");
			cnt +=1;
		}
		else{
			ltrStringy += ("'" + obj + "':" + ltrObject[obj]);
		}//closes else
	}
    return "{" + ltrStringy + "}";
}
/**
 *@param txtArr
 *@returns letter
 *this function takes an array sent from the main, iterates through the array
 *and creates an object with the amount of times a word occurs
 *
 *
 */
function wordCount(txtArr){
		var letter = {};
		var current;
		for(index in txtArr){
			current = txtArr[index];
			if(letter[current] >= 1){
				letter[current] += 1;
			}//closes inner if statment
			else{
				letter[current] = 1;
			}// closes else statement

		}// closes the for loop
		return letter;
}
/**
 *@param txtObj
 *@return frq;
 *this function takes txtObj as a param and then interates through it and 
 *returns a object frq the the percentage each word occurs
 *
 */
function wordFreq(txtObj){
	
		var frq = {};
		var totalWords = 0;
		for(index in txtObj){
			totalWords += txtObj[index];
		}// closes the for loop
		for(i in txtObj){
			frq[i] = txtObj[i]/totalWords;
		}//closes the for loop
		return frq;
	
}
/**
 *@param txtArr key
 *@return inner
 *THis function is a helper function that iterates through the array which 
 *is being sent as txtArr and takes the key and returns an object of inner
 *which is the inner for loops of the next two functions
 *
 */
function getInnerObject(txtArr, key){
	var inner = {};
	var nextKey = "";
	let i = 0;
	let j = 0;
	while(i <= txtArr.length){
		var newKey = txtArr[i];
		if(i < txtArr.length - 1){
			j = i + 1;
		}
		else{
			j = 0;
		}
		if(newKey == key){
			nextKey = txtArr[j];
			if(inner[nextKey] >= 1){
				inner[nextKey] += 1;
			}
			else{
				inner[nextKey] = 1;
			}
		}
		i += 1;
	}
	return inner;
}
/**
 *@param txtArr
 *@return condCount
 *this function takes the array in and iterates through it and marks how many 
 *times another word occurs after it.
 *
 *

 */
function condWordCount(txtArr){
		var condCount = {};
		var inner = {};
		var current;
		for(index in txtArr){
			current = txtArr[parseInt(index)];
			
			condCount[current] = objectToString(getInnerObject(txtArr, current));
			
			inner = {};
		}//closes first for statement
		return condCount;	
}//closes function
/**
 *@param txtObj txtArr
 *@returns condFreq
 *this function returns the probability of a word occuring after another word.
 *
 *
 */
function condWordFreq(txtObj, txtArr, str){
	var condFreq = {};
	for(i in txtObj){
		var inner = getInnerObject(txtArr, i);
		let total = 0;
		for(j in inner){
			total += inner[j];
		}
		
		for(t in inner){
			inner[t] = inner[t] / total;
		}
		if(str == true){
			condFreq[i] = objectToString(inner);
		}
		else{
			condFreq[i] = inner;
		}
	}
	return condFreq;
}
