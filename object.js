const student ={
   name:'sakib khan',
   id:121,
   address: 'movie cinema',
   isSingle: true,
   friends:['apu','shihab','sigma','sumi','falguni'],
   movies:[{name:'no1',year:2000},{name:'king khan',year:2000}],
   act: function () {
    console.log('acting like areeb');
    // return 'acting like areeb';
    // console.log(x);
   },
   car:{
    name: 'tesla', 
    price: 5000000,
    made:2025,
    menufacturar:{
        name:'tesla',
        ceo:'Elon Mask'
    }
   }
}

console.log(student.act);
//  student.act();//console na korle o kaj korbe karon upore c=function e console korsi 
student.act();