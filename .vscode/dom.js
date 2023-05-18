class Human
{
    constructor()
    {
        this.gender="Male"
    }
    printGender(){
        console.log(this.gender);
    }
}
class person extends Human
{
    constructor()
    {
        super();
         this.name="Sushma";
         this.gender="female";
         this.age="24"
    }
    printMyName()
    {
        console.log(this.name);
        console.log(this.age);
    }
}
var sushma = new person();
sushma.printGender();
sushma.printMyName();
