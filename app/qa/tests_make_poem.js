var expect = require('chai').expect;
var make_poem = require('../make_poem.js');

/**Test suite for the make poem class**/
describe('Test make_poem', function() {
	/**creations for the whole suite**/
	var PoemA = null;
	var PoemB = null;
	var PoemC = null;
	
	/**creations for each test**/
	var PoemD = null;
	var PoemE = null;
	
	before( function() {
		poemA = new make_poem.Poem('rbbrrg_input_test.txt', 1, 1, 2, [0.1, 0.5, 0.7]);
		poemB = new make_poem.Poem('rbbrrg_input_test.txt', 2, 1, 4, [0.7, 0.9, 0.3]);
		poemC = new make_poem.Poem('rbbrrg_input_test.txt', 1, 2, 2, [0, 0, 0]);
		wordsAStr = "red red.";
		wordsBStr = "blue red blue red,\n\ngreen red green red.";
		wordsCStr = "red blue,\nblue blue.";
		wordsAArr = ['red', 'red'];
		wordsBArr = ['blue', 'red', 'blue', 'red', 'green', 'red', 'green', 'red'];
		wordsCArr = ['red', 'blue', 'blue', 'blue'];
	});
	
	beforeEach( function() {
		poemD = new make_poem.Poem('rbbrrg_input_test.txt', 2, 2, 2, [0.9, 0.3, 0.6, 0.2, 0.15]);
		poemE = new make_poem.Poem('rbbrrg_input_test.txt', 3, 1, 2, [0.4, 0.25]);
		wordsDStr = "green red,\nred blue,\n\nblue red,\nblue red.";
		wordsEStr = "red blue,\n\nblue blue,\n\nblue blue.";
		wordsDArr = ['green', 'red', 'red', 'blue', 'blue', 'red', 'blue', 'red'];
		wordsEArr = ['red', 'blue', 'blue', 'blue', 'blue', 'blue'];
	});
	
	afterEach( function() {
		poemD = null;
		poemE = null;
		wordsDStr = null;
		wordsEStr = null;
		wordsDArr = null;
		wordsEArr = null;
	});
	
	after( function() {
		poemA = null;
		poemB = null;
		poemC = null;
		wordsAStr = null;
		wordsBStr = null;
		wordsCStr = null;
		wordsAArr = null;
		wordsBArr = null;
		wordsCArr = null;
	});
	
	describe("Unit test for the pickFirstWord function", function() {
		
		it('Should return red when calling pickfirstword in poemA', function() {
			expect(poemA.pickFirstWord()).to.equal("red");
		});
		
		it('Should return blue when calling pickfirstword in poemB', function() {
			expect(poemB.pickFirstWord()).to.equal("blue");
		});
		
		it('Should return red when calling pickfirstword in poemC', function() {
			expect(poemC.pickFirstWord()).to.equal("red");
		});
		
		it('Should return green when calling pickfirstword in poemD', function() {
			expect(poemD.pickFirstWord()).to.equal("green");
		});
		
		it('Should return red when calling pickfirstword in poemE', function() {
			expect(poemE.pickFirstWord()).to.equal("red");
		});
	});
	
	describe("Unit test for the pickNextWord function", function() {
	    wordsAArr = ['red', 'red'];	
		it('Should return:\n' + wordsAArr + 'when calling pickfirstword in poemA', function() {
			expect(poemA.pickNextWord('red', 1, 1, [])).to.equal(wordsAArr);
		});
		
		it('Should return:\n' + wordsBArr + 'when calling pickfirstword in poemB', function() {
			expect(poemB.pickNextWord('blue', 7, 1, [])).to.equal(wordsBArr);
		});
		
		it('Should return:\n' + wordsCArr + 'when calling pickfirstword in poemC', function() {
			expect(poemC.pickNextWord('red', 3, 1, [])).to.equal(wordsCArr);
		});
		
		it('Should return:\n' + wordsDArr + 'when calling pickfirstword in poemD', function() {
			expect(poemD.pickNextWord('green', 7, 1, [])).to.equal(wordsDArr);
		});
		
		it('Should return:\n' + wordsEArr + 'when calling pickfirstword in poemE', function() {
			expect(poemE.pickNextWord('red', 5, 1, [])).to.equal(wordsEArr);
		});
		
	});
	
	describe("Unit test for the structurePoem function", function() {
		
		it('Should return:\n' + wordsAStr + 'when calling structurePoem in poemA', function() {
			expect(poemA.structurePoem(wordsAArr)).to.equal(wordsAStr);
		});
		
		it('Should return:\n' + wordsBStr + 'when calling structurePoem in poemB', function() {
			expect(poemB.structurePoem(wordsBArr)).to.equal(wordsBStr);
		});
		
		it('Should return:\n' + wordsCStr + 'when calling structurePoem in poemC', function() {
			expect(poemC.structurePoem(wordsCArr)).to.equal(wordsCStr);
		});
		
		it('Should return:\n' + wordsDStr + 'when calling structurePoem in poemD', function() {
			expect(poemD.structurePoem(wordsDArr)).to.equal(wordsDStr);
		});
		
		it('Should return:\n' + wordsEStr + 'when calling structurePoem in poemE', function() {
			expect(poemE.structurePoem(wordsEArr)).to.equal(wordsEStr);
		});
		
	});
	
	describe("Unit test for the execute function", function() {
		
		it('Should return:\n' + wordsAStr + 'when calling execute in poemA', function() {
			expect(poemA.execute()).to.equal(wordsAStr);
		});
		
		it('Should return:\n' + wordsBStr + 'when calling execute in poemB', function() {
			expect(poemB.execute()).to.equal(wordsBStr);
		});
		
		it('Should return:\n' + wordsCStr + 'when calling execute in poemC', function() {
			expect(poemC.execute()).to.equal(wordsCStr);
		});
		
		it('Should return:\n' + wordsDStr + 'when calling execute in poemD', function() {
			expect(poemD.execute()).to.equal(wordsDStr);
		});
		
		it('Should return:\n' + wordsEStr + 'when calling execute in poemE', function() {
			expect(poemE.execute()).to.equal(wordsEStr);
		});
		
	});
});
