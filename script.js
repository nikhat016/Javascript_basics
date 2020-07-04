/*CODING CHALLENGE 1*/
var weightJohn, weightMark , heightJohn, heightMark;
weightJohn=prompt('John weight?');
weightMark=prompt('Mark weight?');
heightJohn=prompt('John height?');
heightMark=prompt('Mark height?');
bmiJohn=weightJohn/(heightJohn*heightJohn);
bmiMark=weightMark/(heightMark*heightMark);
console.log('BMI of John is'+bmiJohn);
console.log('BMI of Mark is'+bmiMark);
isBMI=bmiMark>bmiJohn;
console.log('Is BMI of Mark greater than John'+isBMI);
/******IF ELSE STATEMENTS******/
var firstName= 'John';
var civilStatus= 'single';
if(civilStatus=='Married'){
    console.log(firstName+'is Married');
}
else{
    console.log(firstName+' will hopefully marry soon:)')
}
/****BOOLEAN LOGIC*********/
var age=20;
if(age<13)
    {
        console.log(firstName+' is a boy');
    }
else if(age>=13 && age<20)
    console.log(firstName+' is a teenager');
//TERENARY OPERATOR
age>= 18? console.log(firstName + ' drinks beer.'):console.log(firstName+' drinks juice');
//SWITCH
var job='designer';
switch(job){
        case 'teacher':
        case 'instructor':
        console.log(firstName+' teaches kids');
        case 'driver':
        console.log(firstName+' drives an uber taxi');
        case 'designer':
        console.log(firstName+' designs cool websites');
        case 'instructor':
        console.log(firstName+' teacher teaches kids');
             
}
/*****CODING CHALLENGE 2*/
var scoreJohn=(89+120+103)/3;
var scoreMike=(118+94+123)/3;
var scoreMary=(97+134+105)/3;
if(scoreJohn>scoreMike && scoreJohn>scoreMary)
    console.log('John\'s team wins ');
else if(scoreMike>scoreJohn && scoreMike>scoreMary)
    console.log('Mark\'s team wins ');
else if(scoreMary>scoreJohn&&scoreMary>scoreMike)
    console.log('Mary\'s team wins ');
else
    console.log('Draw');
/*****FUNCTIONS********/
function calculateAge(birthYear){
    return 2020-birthYear;
}
var ageJohn=calculateAge(2000);
console.log(ageJohn);
var ageMike=calculateAge(2010);
console.log(ageMike);
function yearsUntilRetirement(birthYear,firstName)
{
    var age=calculateAge(birthYear);
    var retirement=65-age;
    if(retirement>0)
    console.log(firstName+' retires in'+ retirement+' years');
    else
        console.log(firstName+' retired'); 
}
    yearsUntilRetirement(1965, 'John');
var whatDoYouDo=function(job,firstName){
    switch(job){
        case 'teacher':
        return firstName+' teaches kids';
        case 'driver':
        return firstName+' drives an uber taxi';
        case 'designer':
        return firstName+' designs cool websites';
    default:
        return firstName+' does something else'; 
    }
}
console.log(whatDoYouDo('teacher','John'));
/***********ARRAYS*************/
var names=['John', 'Mike', 'Mary'];
var years=new Array(1990,1969,1948);
console.log(names);
console.log(names.length);
names[1]='Ben';
console.log(names);
names[names.length]='mary';
console.log(names);
var john=['John','Smith',1990,'teachre',false];
john.push('blue');
john.unshift('Mr.');
console.log(john);


john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf(23));
var isDesigner=john.indexOf('Designer')===-1?'John is not a designer':'John is a designer';
console.log(isDesigner);
/*******CODING CHALLENGE 3*********/
var h1=124, h2=48, h3=268;
function bill(amount){
    if(amount<50)
        return 0.2*amount;
    else if(amount>=50&&amount<200)
        return 0.15*amount;
    else return 0.1*amount;
}
var arr=new Array();
arr.push(bill(h1));
arr.push(bill(h2));
arr.push(bill(h3));
function total(a,b){
    return a+b;
}
var totArr=new Array();
totArr.push(total(arr[0],h1));
totArr.push(total(arr[1],h2));
totArr.push(total(arr[2],h3));
console.log(arr);
console.log(totArr);
/********OBJECTS***********/
var john={ firstName:'John',lastName:'Smith',birthYear:1990, family:['jane','mike','emily'],job:'teacher',isMarried:false, clacAge: function(){
     this.age=2020-this.birthyear;
}}
console.log(john);
john.job='designer';
var x='birthyear';
john.x=1990;
    console.log(john);
/*****CODING CHALLENGE 4*******/
var john={
    fullName:'John Smith',
    height:92,
    weight:1.95,
    calcBMI: function(){
        this.BMI=this.weight/(this.height*this.height);
        return this.BMI;
    }}
    var mark={
    fullName:'Mark Miller',
    height:78,
    weight:1.69,
    calcBMI: function(){
        this.BMI=this.weight/(this.height*this.height);
        return this.BMI;
    }
    }
    john.calcBMI();
mark.calcBMI();
console.log(john,mark);
/******LOOPS*****/
for (var i=0; i<10;i++){
    console.log(i);
}
var john=['John','Smith',1990,'teachre',false];
john.push('blue');
for(var i=0; i<5; i++)
    console.log(john[i]);
var i=0;
/****CODING CHALLENGE-5******/
var john={fullName:'John',bill:[124,48,268,180,42],tip:[],total:[],tipcalc:function(){
    for(var i=0;i<this.bill.length;i++)
        {
            if(this.bill[i]<50)
                this.tip[i]=this.bill[i]*0.2;
            else if((this.bill[i]>=50) && (this.bill[i]<200))
                    this.tip[i]=this.bill[i]*0.15;
            else
                this.tip[i]=this.bill[i]*0.1;
        }
   
},totalbill:function(){
    for(var i=0;i<this.bill.length;i++)
        {
            this.total[i]=this.bill[i]+this.tip[i];
        }
}
}
john.tipcalc();
john.totalbill();
console.log(john);

var mike={fullName:'Mike miller',bill:[124,48,268,180,42],tip:[],total:[],tipcalc:function(){
    for(var i=0;i<this.bill.length;i++)
        {
            if(this.bill[i]<50)
                this.tip[i]=this.bill[i]*0.2;
            else if((this.bill[i]>=50) && (this.bill[i]<200))
                    this.tip[i]=this.bill[i]*0.15;
            else
                this.tip[i]=this.bill[i]*0.1;
        }
   
},totalbill:function(){
    for(var i=0;i<this.bill.length;i++)
        {
            this.total[i]=this.bill[i]+this.tip[i];
        }
}
}
mike.tipcalc();
mike.totalbill();
console.log(mike);




