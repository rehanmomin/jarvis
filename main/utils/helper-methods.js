import fs from 'fs';
import { t } from "testcafe";
class Helper {

    async generateSSN(){
        var ssn = Math.floor(100000000 + Math.random() * 500000000);
        return ssn.toString();
    }

    async generateNames(){
        random = Math.floor((Math.random()*200000)).toString;
        var firstname = 'Testname'+ random,
        lastname = 'TestLastname' + random,
        middlename = 'TestMiddlename' + this.random,
        emailId_mailCatcher = lastname +'@mailcatcher.dev.backgroundcheck.com',
        emailId = lastname + '@sterlingcheck.com' ;
    }

    async randomnumber() {
    var x = Math.floor((Math.random() * 200000000) + 100000000);    
    //console.log(x);
    return x.toString();    
    }
    
    async waitForFile(path) {
        for (let i = 0; i < 25; i++) {
            if (fs.existsSync(path))
                return true;
            await t.wait(1000);
        }
        return fs.existsSync(path);
    }

    async getTomorrowDatemmDDyyyy(){
        var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        return month+"/"+day+"/"+year;
    }

    async getDatemmDDyyyy(){
        var currentDate = new Date(new Date().getTime());
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        return month+"/"+day+"/"+year;
    }

    async getNextMnthDatemmDDyyyy(){
        var currentDate = new Date(new Date().getTime() + 720 * 60 * 60 * 1000);
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        return month+"/"+day+"/"+year;
    }
    
    async decryptString(encryptedString){
        const Cryptr = require('cryptr');
        const cryptr = new Cryptr(`${process.env.SWEST_KEY}`);
        return cryptr.decrypt(encryptedString)
    }
    async sleeper(ms){
        return function(x){
            console.log("waiting for " + x + " ms")
            return new Promise(resolve => setTimeout(() => resolve(x), ms))
        }
    }
}

export default new Helper();


