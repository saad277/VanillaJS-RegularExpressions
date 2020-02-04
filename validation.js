
var input1=document.querySelectorAll("input");
arr=[1,2,3];


const patterns={

    telephone : /^[0-9]{11}$/,
    username :  /^[a-z 0-9]{5,12}$/i,
    password:   /^[\w@-]{8-12}$/,
    email : /^([a-z 0-9 \.-]+)@([a-z 0-9 -]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/

}

input1.forEach(function(name,id){


    name.addEventListener("keyup",function(event){

            console.log(event.target.attributes.name.value);
            console.log(name.value);

            validate(name.value,patterns[event.target.attributes.name.value]);

    });

});

function validate(field,regex){

    console.log(regex.test(field));

}