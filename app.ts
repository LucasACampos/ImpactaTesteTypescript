// Ferramentas
// node, npm, nvm

/*
    Lucas Antunes Campos
    Luis Felipe Xavier Veloso
    jeferson oliveira santana
    Ronisvonn Gomes da Silva
    Vitor Rodrigues da Silva

    é js basicamente mais ta compilando via tsc normal

    Comandos
    npm i typescript --save-dev
    nano tsconfig.json
    
    {
        "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "sourceMap": true
        }
    }

    touch app.ts

    tsc app.ts
    node app.js
 */

function log(message) {
    console.log(this._prefix + "[customized oo logging]: " + message);
}

function main() {
    console.log('main is running...')
    // Dynamic types

    const text = 'text'
    const integerNumber = 10
    const decimalNumber = 10.3
    const arr = []
    const dictionary = {}

    console.log(typeof (text))
    console.log(typeof (integerNumber))
    console.log(typeof (decimalNumber))
    console.log(typeof (arr))
    console.log(typeof (dictionary))

    console.log(Object.getPrototypeOf(arr).constructor.name)
    console.log(Object.getPrototypeOf(dictionary).constructor.name)

    console.log(arr instanceof Array)

    // using a builder function
    log('business message...')
    log('business message...')
}

main()