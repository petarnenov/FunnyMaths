export { }
class Customer {
    //customerName: string = "";
    static numOfCustomers: number = 0;
    constructor( private customerName: string) {
         Customer.numOfCustomers++;
    };
    greet():void {
        console.log(this.customerName + " Hello everyone");
    }
    info(): void{
        console.log(this.customerName);
    }

}

const c: Customer = new Customer("Pepo")
c.greet();
c.info();

let arrCustomers: Array<Customer> = [];

for(let i=0;i<5;i++){
    arrCustomers.push(new Customer(`Pepo${i}`));    
}
for(let item of arrCustomers){
    item.info();
}
console.log(Customer.numOfCustomers);

