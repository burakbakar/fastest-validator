import express from 'express'
const fastest =require( 'fastest-validator')
import * as testController from '../controllers/fastest.controller'
const { body, validationResult }  =require( 'fastest-validator');

const router = express.Router();
const fastestValidator = new fastest();

router.get('/test',testController.deneme)

router.post('/test',[  
    


  ],testController.postDeneme)


  const schema = {
       

    name:{ type: "string",min:3,max:25 },
    lastname:{ type:"string", uppercase:true },
    fathersname:{ type:"string",min:3,max:25 },
    mothersname: { type:"string",min:3,max:25 },
    email:{ type:"email" },
    username:{ type:"any", min:3,max:15 },
    password:{ type:"any", min:5 },
    age:{ type:"number", positive:true,integer:true },
    city:{ type:"string" },
    country:{ type:"string" },
    birthday:{ type:"date" },
    identification:{ type:"string",length:11},
    telephone:{ type:"number",positive:true,integer:true},
    domain:{ type:"url" },
    mac:{ type:"mac"},
    firstDate:{ type:"date"},
    lastDate:{ type:"date" },
    profession:{ type:"string"},
    salary:{ type: "currency", currencySymbol: '$'},


};
 
const check = fastestValidator.compile(schema);

console.time("Result Time: ");
  
console.log(check({ 

  name:"Burak",
  lastname:"BAKAR",
  fathersname:"deneme",
  mothersname:"deasd",
  email:"buraakbakar@gmail.com",
  username:"user123-",
  password:"123asdg-",
  age:23,
  city:"izmir",
  country:"turkey",
  birthday:new Date(19970216),
  identification:"15368458964",
  telephone:5555555555,
  domain:"http://google.com",
  mac:"01:C8:95:4B:65:FE",
  firstDate:new Date(20200101),
  lastDate:new Date(20201231),
  profession:"engineer",
  salary:"$12"

}))

console.timeEnd("Result Time: ");



export default router;