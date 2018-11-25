var assert = require('chai').assert;
var data = require('../data_structures.js');
/** a test suite for testing the data_structures 
 */
suite("Test data_structures", function(){
    /** test fixture for data structure */
    var test1 = null;

    /** another test fixture */
    var test2 = null;

    var test3 = null;

    var test4 = null;

    var test5 = null;

    /** called as the test suite begins, useful for setting up the data
     * structures. */
    suiteSetup ( function(){
        //before
        test1 = data.main('rbbrrg_input_test.txt');

        test2 = data.main('BeowulfPart1.txt");

        test3 = data.main('newline_input_text.txt');
    });
    /**called before each unit test to set up fixtures for testing */
    setup(function(){
        //before each
        test4 = data.main('empty_input_text.txt');
        test5 = data.main('');
    });

    /** called after each function to rest objects, or tear down things after 
     * con
     
        
