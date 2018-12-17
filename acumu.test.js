var calcObj = require('./acumu');

describe('makeCounter ', function () {

    describe('makeCounter with initialCount > 0 increment < 0 ', function () {
        var initialCount = 10;
        var increment = 5;
        test('should return 15', function () {
            
            expect(calcObj.makeCounter(initialCount, increment)).toEqual(15);
        });
        test('should return 20', function () {
            
            expect(calcObj.makeCounter(initialCount, increment)).toEqual(20);
        });
        test('should return 25', function () {
            
            expect(calcObj.makeCounter(initialCount, increment)).toEqual(25);
        });
    }); 
    describe('makeCounter with initialCount > 0 increment < 0 ', function () {
        var initialCount = 20;
        var increment = -5;
        test('should return ', function () {
            
            expect(calcObj.makeCounter(initialCount, increment)).toEqual(15);
        });
        test('should return ', function () {
            
            expect(calcObj.makeCounter(initialCount, increment)).toEqual(10);
        });
        test('should return ', function () {
            
            expect(calcObj.makeCounter(initialCount, increment)).toEqual(5);
        });
    });
    describe('makeCounter with initialCount > 0 increment = 0 ', function () {
        var initialCount = 10;
        
        test('should return ', function () {
            
            expect(calcObj.makeCounter(initialCount)).toEqual(11);
        });
        test('should return ', function () {
            
            expect(calcObj.makeCounter(initialCount)).toEqual(12);
        });
        test('should return ', function () {
            
            expect(calcObj.makeCounter(initialCount)).toEqual(13);
        });
    });
});


