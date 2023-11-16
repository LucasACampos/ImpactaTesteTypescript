// Ferramentas
// node, npm, nvm
function log(message) {
    console.log(this._prefix + "[customized oo logging]: " + message);
}
function main() {
    console.log('main is running...');
    // Dynamic types
    var text = 'text';
    var integerNumber = 10;
    var decimalNumber = 10.3;
    var arr = [];
    var dictionary = {};
    console.log(typeof (text));
    console.log(typeof (integerNumber));
    console.log(typeof (decimalNumber));
    console.log(typeof (arr));
    console.log(typeof (dictionary));
    console.log(Object.getPrototypeOf(arr).constructor.name);
    console.log(Object.getPrototypeOf(dictionary).constructor.name);
    console.log(arr instanceof Array);
    // using a builder function
    log('business message...');
    log('business message...');
}
main();
