export class Animal{
    constructor(private name: string){}
    info(): void{
        console.log("Name of the Animal is:"+this.name);
    }
}

let animal = new Animal("Greg");
animal.info();
