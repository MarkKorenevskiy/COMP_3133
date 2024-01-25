import * as mocha from "mocha";
import {assert} from "chai";
import * as calc from '../app/calculator.js';


mocha.describe('Calculator tests', () => {
    mocha.describe('Add test', () => {
        mocha.it('5 + 2 should output 7', () => {
            assert.equal(calc.add(5, 2), 7, 'Incorrect result!')
        });
        mocha.it('5 + 2 should output 7', () => {
            assert.equal(calc.add(5, 2), 8, 'Incorrect result!')
        });
    });

    mocha.describe('Mul tests', () => {
        mocha.it('2 * 10 should output 20', () => {
            assert.equal(calc.mul(2,10), 20, 'Incorrect result!')
        });
        mocha.it('2 * 10 should output 20', () => {
            assert.equal(calc.mul(2,10), 21, 'Incorrect result!')
        });
    });

    mocha.describe('Div tests', () => {
        mocha.it('22 / 11 should output 2', () => {
            assert.equal(calc.div(22,11), 2, 'Incorrect result!')
        });
        mocha.it('22 / 11 should output 2', () => {
            assert.equal(calc.div(22,11), 3, 'Incorrect result!')
        });
    });

    mocha.describe('Sub tests', () => {
        mocha.it('123 - 13 should output 110', () => {
            assert.equal(calc.sub(123,13), 110, 'Incorrect result!')
        });
        mocha.it('123 - 13 should output 110', () => {
            assert.equal(calc.sub(123,13), 111, 'Incorrect result!')
        });
    })
});