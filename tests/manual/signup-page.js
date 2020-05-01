/*  Description: Validate Jarvis Signup flow
*/
import { Selector, t } from 'testcafe';
import signupPage from '../../main/page-objects/jarvis/SignupPage.js' 


var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]
var Fakerator = require("fakerator");
var fakerator = Fakerator();

fixture `Jarvis Signup`
.page `${process.env.BASE_URL}` 

test
  .before( async t => {
    data = config.getTestData(__dirname,__filename)
  })
(testfile+': Validate Sign up flow', async t =>{
  var email = fakerator.internet.email()
  console.log(data.booking)
  await t.maximizeWindow();
  console.log("here")
  await signupPage.booking(data.booking)
  console.log("here")
  await signupPage.signupWithEmail(data.candidate,email)
  
});


