/**
 * Created by pratik on 5/4/18.
 */
window.calculator = window.calculator || {};

(function() {
    var getNumAsInt = function (id) {
        return parseInt(document.getElementById(id).value);
    };

    var calculate = function() {
        var sum = getNumAsInt('num1') + getNumAsInt('num2');
        document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
    };

    window.calculator.init = function() {
        document.getElementById('add').addEventListener('click', calculate);
    };
})();