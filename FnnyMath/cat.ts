class Cat{
    static count: number = 0;
    walk(): void{
        console.log('ï,m walking')
    }
     name: string = ""
    
    constructor(name: string){
        this.name = name;
        Cat.count++;
    }

}

for(let i=0;i<10;i++){
var cat1 = new Cat("misha");
}

console.log(Cat.count);

