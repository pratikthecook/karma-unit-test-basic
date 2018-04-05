/**
 * Created by pratik on 5/4/18.
 */
describe('Calculator',function () {

    beforeEach(
     function () {
        fixture.base = 'src/test/fixtures';
        fixture.load('calculator.html');
    });


    afterEach(
     function () {
         fixture.cleanup();
    });

    beforeEach(function() {
        window.calculator.init();
    });

    it('should return 4 for 3 + 1',function () {
       document.getElementById('num1').value = 1;
       document.getElementById('num2').value = 2;
       document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('3');
    });

    it('should return 0 for invalid input  + 10',function () {
        document.getElementById('num1').value = 'X';
        document.getElementById('num2').value = 10;
        document.getElementById('add').click();
         expect(document.getElementById('result').innerHTML).toBe('0');
    });

    it('should return 0 for 10  + invalid input',function () {
        document.getElementById('num1').value = 10;
        document.getElementById('num2').value = 'X';
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('0');
    });
});