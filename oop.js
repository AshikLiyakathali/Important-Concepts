// An instance is an implementation of a Function. 
// In simple terms, it is a copy (or “child”) of a Function or object. For example:

// Tree is a constructor function because we will use new keyword to invoke it.
function Tree (typeOfTree) {} 

// bananaTree is an instance of Tree.
var bananaTree = new Tree ("banana");

// oop in javascript

var myObj = {name: "Richard", profession: "Developer"}; 

// You can use the prototype pattern, adding each method and property directly on the object’s prototype. For example:

function Employee() {}

Employee.prototype.firstName = "Abhijit";
Employee.prototype.lastName = "Patel";
Employee.prototype.startDate = new Date();
Employee.prototype.signedNDA = true;
Employee.prototype.fullName = function () {
console.log (this.firstName + " " + this.lastName); 
};

var abhijit = new Employee () //
console.log(abhijit.fullName()); // Abhijit Patel
console.log(abhijit.signedNDA); // true


// You can also use the constructor pattern, a constructor function (Classes in other languages, but Functions in JavaScript). For example: 

function Employee (name, profession) {
    this.name = name;
    this.profession = profession;
    } // Employee () is the constructor function because we use the new keyword below to invoke it.
    
var richard = new Employee (“Richard”, “Developer”); // richard is a new object we create from the Employee () constructor function.
console.log(richard.name); //richard
console.log(richard.profession); // Developer //


// encapsulation in javascript

function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}


//

// A User 
firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 

firstUser.showNameAndScores(); //Richard Scores: 15,10

// Another User
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18


//
this.name = theName;
this.email = theEmail;
this.quizScores = [];
this.currentScore = 0;

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

User.prototype.constructor = User;
User.prototype.saveScore = function (theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd)
};

User.prototype.showNameAndScores = function ()  {
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
    return this.name + " Scores: " + scores;
};

User.prototype.changeEmail =  function (newEmail)  {
    this.email = newEmail;
    return "New Email Saved: " + this.email;
}


function Fruit () {}
var newFruit = new Fruit ();
console.log (newFruit.constructor) // Fruit ()

constructor: User


saveScore:function (theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd)
},
showNameAndScores:function ()  {
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
    return this.name + " Scores: " + scores;
},
changeEmail:function (newEmail)  {
    this.email = newEmail;
    return "New Email Saved: " + this.email;
}


// A User 
firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 

firstUser.showNameAndScores(); //Richard Scores: 15,10

// Another User
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18

// inheritance in javascript

Object.create method
// Ruminate on the method Crockford created:

 if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }

        F.prototype = o;
        return new F();
    };
}

Object.create = function (o) {
    //It creates a temporary constructor F()
            function F() {
            }
    //And set the prototype of the this constructor to the parametric (passed-in) o object
    //so that the F() constructor now inherits all the properties and methods of o
            F.prototype = o;
    
    //Then it returns a new, empty object (an instance of F())
    //Note that this instance of F inherits from the passed-in (parametric object) o object. 
    //Or you can say it copied all of the o object's properties and methods
            return new F();
}

// We have a simple cars object
var cars = {
    type:"sedan",
    wheels:4
};

// We want to inherit from the cars object, so we do:
var toyota = Object.create (cars); // now toyota inherits the properties from cars
console.log(toyota.type); // sedan


function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject
// So the copyOfParent object now has everything the parentObject has 
    var copyOfParent = Object.create(parentObject.prototype);

    //Then we set the constructor of this new object to point to the childObject.
// Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.
    copyOfParent.constructor = childObject;

    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)
   childObject.prototype = copyOfParent;
}



// We made a new object and overwrote its prototype with the parentObject prototype:
function F() {
}
F.prototype = parentObject.prototype;
// Then it was this new F object we assigned to copyOfParent.
// All of this was done inside the Object.create () method.

// So, this new F object, which we assigned to copyOfParent, doesn’t have a constructor property anymore because we overwrote its entire prototype. Whenever you overwrite an object’s prototype (object.prototype = someVal), you also overwrite the object’s constructor property.
// To make sure we have the correct value for copyOfParent constructor, we set it manually with this:

copyOfParent.constructor = childObject;

// A commenter by the name of John correctly pointed our that I did not corruptly explain this bit, hence this detailed explanation.
// Essentially, we are copying all the properties and methods from the parentObject to the childObject, but we are using the copyOfParent as an intermediary for the copy. And because the childObject prototype was overwritten during the copy, we manually set the copyOfParent constructor to the childObject. Then we set the childObject prototype to the copyOfParent so that the childObject inherits from the parentObject.
// Okay, that was quite a bit. I am hopeful you understand some of that :).

// Back to the fun stuff: Creating our quiz OOP style.
// Now that we understand the inheritPrototype function we will be using, lets go ahead and implement our Question constructor.

// Note that I use “constructor” and “function” interchangeably sometimes in this particular article when referring to the function, because the function will be used as a constructor to create instances.

// The Question Constructor (Parent of all Question Objects):
// (Can be thought of as the Super Class for Questions)

// The Question function is the parent for all other question objects;
// All question objects will inherit from this Question constructor

function Question(theQuestion, theChoices, theCorrectAnswer) {
// Initialize the instance properties
this.question = theQuestion;
this.choices = theChoices;
this.correctAnswer = theCorrectAnswer;
this.userAnswer = "";

// private properties: these cannot be changed by instances
var newDate = new Date(),
// Constant variable: available to all instances through the instance method below. This is also a private property.
QUIZ_CREATED_DATE = newDate.toLocaleDateString();

// This is the only way to access the private QUIZ_CREATED_DATE variable 
// This is an example of a privilege method: it can access private properties and it can be called publicly
this.getQuizDate = function () {
return QUIZ_CREATED_DATE;
};

// A confirmation message that the question was created
console.log("Quiz Created On: " + this.getQuizDate());

}

// Add Prototype Methods to The Question Object
// All instances of the Question object will inherit these methods, because we are adding the methods on the Question prototype.

// Define the prototype methods that will be inherited

Question.prototype.getCorrectAnswer = function () {
return  this.correctAnswer;
};

Question.prototype.getUserAnswer = function () {
return this.userAnswer;
};

Question.prototype.displayQuestion = function () {
var questionToDisplay = "
" + this.question + "
";
choiceCounter = 0;

this.choices.forEach(function (eachChoice)  {
questionToDisplay += '
' + eachChoice + '
';
choiceCounter++;
});
questionToDisplay += "
";

console.log (questionToDisplay);
}; 

// Child Questions (Sub Classes of the Question object)
// Now that we have the Question constructor object setup, we can inherit from it and create sub classes (children objects). The power of inheritance is that we can create all sorts of questions now, and each can be quite versatile.

// First, a Multiple Choice Question:

// Create the MultipleChoiceQuestion

function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer){

// For MultipleChoiceQuestion to properly inherit from Question, here inside the MultipleChoiceQuestion constructor, we have to explicitly call the Question constructor
// passing MultipleChoiceQuestion as the this object, and the parameters we want to use in the Question constructor:

Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};
And then we have to use the inheritPrototype function we discussed moments ago:

// inherit the methods and properties from Question

inheritPrototype(MultipleChoiceQuestion, Question);

// After we have inherited from Question, we then add methods to the MultipleChoiceQuestion function, if necessary. But we must do it after we inherit, not before, or all the methods we define on its prototype will be overwritten. We are not adding any now.

// A Drag and Drop Question
// In a similar manner, we can make yet another type of question:

// Create the DragDropQuestion

function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}

// inherit the methods and properties from Question

inheritPrototype(DragDropQuestion, Question);

// Overriding Methods
// Overriding methods is a another principle of OOP, and we can do it easily with this pattern. Since the Drag and Drop questions will have a different HTML layout from the Multiple Choice questions (no radio buttons, for example), we can override the displayQuestion method so it operates specifically to the Drag and Drop question needs:

// Override the displayQuestion method it inherited

DragDropQuestion.prototype.displayQuestion = function () {
// Just return the question. Drag and Drop implementation detail is beyond this article
console.log(this.question);
};

// In our real Quiz application, we would create a Quiz constructor that is the main application that launches the quiz, but in this article, we can test our inheritance code by simply doing this:

// Initialize some questions and add them to an array

var allQuestions = [
new MultipleChoiceQuestion("Who is Prime Minister of England?", ["Obama", "Blair", "Brown", "Cameron"], 3),

new MultipleChoiceQuestion("What is the Capital of Brazil?", ["São Paulo", "Rio de Janeiro", "Brasília"], 2),

new DragDropQuestion("Drag the correct City to the world map.", ["Washington, DC", "Rio de Janeiro", "Stockholm"], 0)
];

// Display all the questions

allQuestions.forEach(function (eachQuestion)  {
eachQuestion.displayQuestion();
});