/* 
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name ;
    this.yearOfBirth = yearOfBirth ;
    this.job = job ;
    
}

Person.prototype.calculateAge = function() {
    console.log( 2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'smith';
var john = new Person('john',1990,'teacher');



var jane = new Person('jane', 1996, 'designer');
var mark = new Person ('mark', 1995, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);

// primitive and objects

var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto,
     {
        name: {value: 'jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
})


//   primitve vs objects 
//   Primitive
var a = 23;
var b = a;
//  in primitive we have different variable
a = 46;
console.log(a);
console.log(b);

//  Objects
var obj1 = {
    name: 'john',
    age: 26

};
var obj2 = obj1; // this is not a primitve beacause this has not  have a new variable to copy and store the data
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


var age = 27 ;
var obj = {
    name: 'jonas',
    city: 'lisbon'
};

function change(a,b) {
     a = 30;
     b.city = 'san fransisco'
}
    // when we pass a primitve into a function  a simple copy is created 
    //  and it does not effect variable outside the function
    //  So we donnot pass an object into a function 
    //  but only refence to that points to that objects
change(age, obj);


console.log(age)
console.log(obj.city)



// psdding function as argument

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return  Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
   
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);






function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log( name + ' , can you please explain what UX design is ? ')
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('what subject do you teach ' + name + '?')
        }
    } else {
        return function(name) {
            console.log( 'hello' + name + ' what do you do ?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer')

teacherQuestion('smith');
designerQuestion('mike')


interviewQuestion('teacher')('wilson');  



//  immediately invoked Function Expressions

(function () {
    var score = Math.random()  * 10 ;
    console.log( score >= 5);
})();


(function (goodLuck) {
    var score = Math.random() * 10;
    console.log( score >= 5- goodLuck)
})(5)




// Closures

function retirement(retirementAge) {
    var a = 'years left untill retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age ) + a)
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementUS(1990) 
retirementGermany(1990) 
retirementIceland(1990) 
// retirement(66)(1990);


// Closures     


function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log( name + ' , can you please explain what UX design is ? ')
               
    } else if (job === 'teacher') {
        console.log('what subject do you teach ' + name + '?')
    } else {
        console.log( 'hello' + name + ' what do you do ?')
    }

}
}

interviewQuestion('teacher')('Jonathon');



// Call Method//////////////////////////////

var john = {
    name: 'john',
    age: 27,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if( style === 'formal') {
            console.log('good' +  timeOfDay + ', Ladies and gentleman ! I\'m a ' + this.name + ' I\'m a ' + this.job + ', and i\'m ' + this.age + ' years old' );
        } else if ( style === 'friendly') {
            console.log('hey what\'s up' + this.name + ' I\'m a ' + this.job + ', and i\'m ' + this.age + ' years old . Have a nice ' + this.timeOfDay  )
        }
    }
}


var emily = {
    name: 'emily',
     age: 35,
     job: 'designer'
};


john.presentation('formal', 'morning')
john.presentation.call(emily, 'friendly', 'afternoon')

// apply method
 // john.prsesentation.call(emily, 'friendly', 'afternoon');

 // bind method

 var johnFriendly = john.presentation.bind(john, 'friendly');

 johnFriendly('morning')
 johnFriendly('night');

 var emilyFormal = john.presentation.bind(emily, 'formal');

 emilyFormal('afternoon');








 var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}
function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);







// conding challenge 7








(function() {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for ( var i = 0; i < this.answer.length; i++ ) {
            console.log(i + ':' + this.answer[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correct) {
            console.log('correct answer !')
        } else {
            console.log('wrong answer. try again')
        }
    }
    var q1 = new Question(' Is Javascript the coolest programming language in the world ?', 
                                                ['yes', 'no'],
                                                0);
    
    var q2 = new Question( ' what si the name of this course teacher ? ',
                                                ['john', 'michael', 'jonas'],
                                                 2);
    
    var q3 = new Question( ' what does best describe the coding  ? ',
                                                ['boring', 'hard', 'fun', 'tedious'],
                                                 2);
    
     var questions = [ q1, q2, q3];
     
     var n = Math.floor(Math.random() * questions.length);
    
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('please select the correct answer'))
    
    
    questions[n].checkAnswer(answer);
    
})()







*/


(function() {
    function Question(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
    
        for ( var i = 0; i < this.answer.length; i++ ) {
            console.log(i + ':' + this.answer[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if(ans === this.correct) {
            console.log('correct answer !')
           sc =  callback(true);
        } else {
            console.log('wrong answer. try again');
            sc = callback(false)
        }
        this.displayScore(sc)
    }


    Question.prototype.displayScore = function (score) {
            console.log('your current score is :' + score);
            console.log('------------------')
        }



    var q1 = new Question(' Is Javascript the coolest programming language in the world ?', 
                                                ['yes', 'no'],
                                                0);
    
    var q2 = new Question( ' what si the name of this course teacher ? ',
                                                ['john', 'michael', 'jonas'],
                                                 2);
    
    var q3 = new Question( ' what does best describe the coding  ? ',
                                                ['boring', 'hard', 'fun', 'tedious'],
                                                 2);



      var questions = [ q1, q2, q3];
       
      function score() {
          var sc = 0 ;
          return function (correct) {
              if(correct) {
                  sc++;
              }
              return sc;
          }
      }
      var keepScore = score();

     function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
       
       
       questions[n].displayQuestion();
       
       var answer = prompt('please select the correct answer')
       
       
     
       if( answer !== 'exit') {
             questions[n].checkAnswer(parseInt(answer), keepScore);
             
             nextQuestion();
       }
      
    }                 
    
    nextQuestion();

    
})()

prompt "high"

