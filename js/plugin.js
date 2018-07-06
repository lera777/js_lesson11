//1
function Car(model, age){
    this.model = model;
    this.age = age;

    this.getModel = function(){
        return this.model.charAt(0).toUpperCase() + this.model.substr(1);
    }

    this.getDateManufacture = function(){
        return new Date().getFullYear() - this.age;
    }
}
let lexus = new Car('lexus', 2);
console.log(lexus.getModel());
console.log(lexus.getDateManufacture());

//2
function EncryptString(str){
    let string = str;
    let encryptString = '';

    this.reverseStr = function(){
        encryptString = string.split('').reverse().join('');
    }

    this.getUnicodeStr =function(){
        if (encryptString){
            encryptString = '';
        }
        string.split('').map(letter => {
            encryptString += letter.charCodeAt(0);
        })
    }

    this.getString = function(){
        return string;
    } 

    this.showEncryptString = function(){
        return encryptString;
    }

    this.deleteStr = function(){
        string = '';
        encryptString = '';
    }
}

let newStr = new EncryptString('An apple a day keeps the doctor away!');
console.log(newStr.getString());
newStr.reverseStr();
console.log(newStr.showEncryptString());
newStr.getUnicodeStr();
console.log(newStr.showEncryptString());
newStr.deleteStr();
console.log(newStr.showEncryptString());

//3
function StringSpecimen(string){
    this.string = string;
    this.setString = function(value){
        this.string = value;
    }
    this.getString = function(){
        return this.string;
    }
    this.getStrLength = function(){
        return this.string.length;
    }
    this.toString = function(){
        return this.getString();
    }
    this.valueOf = function(){
        return this.getStrLength();
    }
}

let str = new StringSpecimen('test');
console.log(str.getString());
console.log(+str);
console.log(str.toString());

str.setString('hello');
console.log(str.getString());
console.log(str.getStrLength());
console.log(str.toString());
console.log(+str);