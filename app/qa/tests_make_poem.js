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
		poemA = new make_poem.Poem('rbbrrg_input_test.txt', 1, 2, 3, [0.1, 0.5, 0.7]);
		poemB = new make_poem.Poem('BeowulfPart1.txt', 2, 1, 4, [0.7, 0.9, 0.3]);
		poemC = new make_poem.Poem('rbbrrg_input_test.txt', 1, 3, 3, [0, 0, 0]);
	)};