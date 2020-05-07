import { Selector } from 'testcafe';
import { t } from 'testcafe';

class SignupPage{
	constructor(){
		this.address = Selector('#addressInput');
		this.hour1 = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(4) > div > div > div.owl-stage-outer > div > div:nth-child(2) > div > label > span');
		this.calendar = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(5) > div > div > div:nth-child(3) > div.react-datepicker__month > div:nth-child(2) > div.react-datepicker__day.react-datepicker__day--thu')
		this.hour2 = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(6) > div > div > div.owl-stage-outer > div > div:nth-child(1) > div > label > span');
		this.comments = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(6) > div > div > div.owl-stage-outer > div > div:nth-child(1) > div > label > span')
		this.butler = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(8) > ul > li:nth-child(1) > label > span')
		this.pets = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(9) > ul > li:nth-child(1) > label > span')
		this.next = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(10) > div > input')
		this.signupIframe = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > div > iframe')
		this.signup = Selector('div[class="sign-email"] > a')
		this.firstName = Selector('#root > div > section > section > div > div > div > div > form > div > div:nth-child(2) > div > div > input[type=text]')
		this.lastName = Selector('#root > div > section > section > div > div > div > div > form > div > div:nth-child(4) > div > div > input[type=text]')
		this.phone = Selector('#root > div > section > section > div > div > div > div > form > div > div:nth-child(6) > div > div > input[type=text]')
		this.email = Selector('#root > div > section > section > div > div > div > div > form > div > div.inputRow.email > div > div > input[type=text]')
		this.password = Selector('#root > div > section > section > div > div > div > div > form > div > div.inputRow.password > div > div > input[type=password]')
		this.createAccount = Selector('#root > div > section > section > div > div > div > div > form > div > div.btnRow > button')
		this.relaxIframe = Selector('#rokt-controller-frame')
		this.gotoApp = Selector('#signup-completed > div:nth-child(3) > input')

	}

	async booking(SignupData){
		await t
			.typeText(this.address, SignupData.address, { replace: true} , { paste: true },{speed: 0.5})
			.wait(2000)
			.pressKey('down tab',{speed : 0.5})
			.wait(2000)
			.expect(this.hour1.visible).ok()
			.click(this.hour1,{speed : 0.5})
			.click(this.hour1,{speed : 0.5})
			.click(this.calendar)
			.click(this.hour2)
			.click(this.hour2)
			.typeText(this.comments, SignupData.comments, { replace: true} , { paste: true })
			.click(this.butler)
			.click(this.pets)
			.click(this.next)
			console.log("Booking details submitted")
	}

	async signupWithEmail(SignupData,emailId){
			console.log("Signing up with email")
		await t
			.wait(2000)
			.switchToMainWindow()
         	.switchToIframe(this.signupIframe)
			.expect(this.signup.visible).ok()
			.click(this.signup)
			.typeText(this.firstName, SignupData.firstname, { replace: true} , { paste: true })
			.typeText(this.lastName, SignupData.lastname, { replace: true} , { paste: true })
			.typeText(this.phone, SignupData.phone, { replace: true} , { paste: true })
			.typeText(this.email, emailId, { replace: true} , { paste: true })
			.typeText(this.password, SignupData.password, { replace: true} , { paste: true })
			.click(this.createAccount)
			.wait(2000)
			.switchToMainWindow()
			.expect(this.gotoApp.exists).ok()
	}

}
export default new SignupPage();