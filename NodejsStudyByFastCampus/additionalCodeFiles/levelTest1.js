var Dog = function () {
    this.age = 11;
    this.color = "black";
    this.dogName = "Ralph"; //Using this.dogName instead of .name
    return this;
   } 
   
   Dog.prototype.name = function(name) {
    this.dogName = name;
    return this;
   }
   
   
   var myNewDog = new Dog();
   myNewDog.name("Cassidy")