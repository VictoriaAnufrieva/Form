

const valid_fields = {
    f_name: false,
    l_name: false,
    email: false,
    password: false,
    password_conf: false,
    code: true,
    phone: false,
    country: true,
    city: true,
    // zip: false,
}

const keys_valid_fields = [
    'f_name',
    'l_name'
]

let create_new_account = document.querySelector('.button')
// console.log(create_new_account)
create_new_account.onclick= function(){
    let valid = true
    for(let key in valid_fields){
        // console.log(valid_fields[key])
        if(!valid_fields[key]){
            console.log(valid_fields[key])
            valid = false
            break
        }
    } //END LOOP

    if(valid){
        console.log("ok")
    }
    else{
        console.log("error")
    }


} // END FUNCTION

const text = document.querySelectorAll('.any_text');
// console.log(text)
for(let i=0; i<text.length; i++){
    // console.log(i)
    // console.log(text[i]) 

    text[i].onchange =function(){
        if(/^\D+$/.test(this.value)){
            console.log('Good');
            this.classList.add('valid') 
            this.classList.remove('error') 
            valid_fields[keys_valid_fields[i]]=true
        } else{
            this.classList.add('error')
            this.classList.remove('valid')
            valid_fields[keys_valid_fields[i]]=false
        }
    
    } 


}








const emailInput = document.querySelector('.email');
emailInput.onchange = function(){
    if(/.{3,}@[a-z]{1,10}\.[a-z]{2,4}/.test(emailInput.value)){
        emailInput.classList.add('valid')
        emailInput.classList.remove('error')
        valid_fields.email=true
    }else {
        console.log('Error');
        emailInput.classList.add('error')
        emailInput.classList.remove('valid')
        valid_fields.email=false
    }
}


const pass1 = document.querySelector('.password');
const pass2 = document.querySelector('.password_confirm');
const form_alert = document.querySelector('.form_alert')


pass1.oninput = function(){
    if(/^(?=.*\d)(?=.*[a-z ]).{8,}$/.test(pass1.value)){
        pass1.classList.add('valid')
        pass1.classList.remove('error')
        valid_fields.password=true
        form_alert.style.display='none'
    } else {
        pass1.classList.add('error')
        pass1.classList.remove('valid')
        valid_fields.password=false
        form_alert.style.display='block'
     
    }
  
}

pass2.oninput = function(){
    if(pass1.value === pass2.value){ 
        pass2.classList.add('valid')
        pass2.classList.remove('error')
        valid_fields.password_conf=true
    } else {
        pass2.classList.add('error')
        pass2.classList.remove('valid')
        valid_fields.password_conf=false
    }
}

let select = document.querySelector("select")
const arr = ['+954','+987','+944','+943','+916'];
for(let i=0; i<arr.length; i++){ 
    let option = document.createElement('option')
    option.innerHTML=arr[i]
    // console.dir(option)
    
    select.append(option)
}


let phone = document.querySelector(".phone")
console.log(phone)
phone.oninput=function(){
    setTimeout(() => {
        if(/^\d{1} [0-9]{8}$/.test(this.value)){
            console.log('Good');
            this.classList.add('valid') 
            this.classList.remove('error')  
            valid_fields.phone=true
        } else{
            this.classList.add('error')
            this.classList.remove('valid')
            valid_fields.phone=false
        }
     
        
    }, 100);
}
$('.phone').mask('0 00000000',{clearIfNotMatch:true});

const address=document.querySelector('.address')
address.oninput=function(){
    if(/^\S{5,30}$/.test(this.value)){
        console.log('Good');
        this.classList.add('valid') 
        this.classList.remove('error')  
    } else{
        this.classList.add('error')
        this.classList.remove('valid')
    }
}

const zip_code=document.querySelector('.zip_code')
zip_code.oninput=function(){
    if(/^\d{3}-[0-9]{3}$/.test(this.value)){
        console.log('Good');
        this.classList.add('valid') 
        this.classList.remove('error')  
        valid_fields.zip=true
    } else{
        this.classList.add('error')
        this.classList.remove('valid')
        valid_fields.zip=false
    }
}

$('.zip_code').mask('000-000');


const country = [
   {
       name:'Latvia', 
            cities: ['Dobele', 'Jelgava', 'Ogre','Riga', 'Talsi']
   },
   {
       name:'Lebanon', 
            cities:['Beirut', 'Byblos', 'Sidon', 'Tripoli', 'Tyre']
   },
   {
        name:'Liberia', 
            cities:['Bopolu', 'Ganda', 'Monrovia', 'Totota', 'Zwedru']
   },
    {
        name:'Libya', 
            cities:['Awbari', 'Benghazi',  'Misrata', 'Sirte', 'Zilten']
    },
    {
        name:'Liechtenstein',
        cities: ['Balzers', 'Bazora', 'Eschen', 'Triesen', 'Vaduz']
    }
]  // End array_country

function select_cities(index){
  
    const city = document.querySelector('.choose_city');

    console.dir(city)
    console.log(city.innerHTML)
    city.innerHTML=''

   

    for(let i=0; i<country[index].cities.length; i++){
        let option = document.createElement('option')
        option.innerHTML=country[index].cities[i]
        // console.log(option)
        city.append(option)
    }
   

}



let choose_country = document.querySelector('.choose_country'); 
select_cities(0)

choose_country.onchange=function(){
 
    
    
    for (let i=0; i<country.length; i++){
    if(choose_country.value==country[i].name){
        // console.log(country[i].color)
        choose_country.style.background=country[i].color   
        select_cities(i)
    } //ENd if
} //ENd loop
} //ENd function



for (let i=0; i<country.length; i++){
    // console.log(country[i])
    let option = document.createElement('option')
    option.innerHTML=country[i].name
    // console.dir(option)
    choose_country.append(option)
}

