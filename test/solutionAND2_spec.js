const solution = require('../solutionAND2');
const assert = require('assert');

describe('solution - Heaps Algorithm', function(){
    describe('returns all permutations of a non-negative integer', function(){
        it('returns all 6 permutations of a 3 digit integer (string)' , function(){
            assert.equal( solution('326') , '632,623,362,326,263,236');
        });

        it('filters through an alpha-numeric string, retains the integer, and then returns its permutations' , function(){
            assert.equal( solution('A 3B2 C6D') , '632,623,362,326,263,236');
        });

        it('returns one permutation if integer is one digit' , function(){
            assert.equal( solution('1') , '1');
        });

        it('returns one permutation if integer is one digit even within an alphanumeric string' , function(){
            assert.equal( solution('1helloworld') , '1');
        });

        it('returns distinct permutations only' , function(){
            assert.equal( solution('121') , '211,121,112');
        });

        it('returns the original string if all characters are the same' , function(){
            assert.equal( solution('111') , '111');
        });
    })

    describe('returns an error', function(){
        it('returns an error if no integer present in original input string' , function(){
            assert.equal( solution('hello world') , 'Input error: please use a non-negative integer.');
        });

        it('returns an error if given empty string ("") ', function(){
            assert.equal( solution("") , 'Input error: please use a non-negative integer.');
        });
    })
    
});