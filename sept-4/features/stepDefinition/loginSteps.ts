import {Give, When, Then } from "@cucumber/cucumber";
import{LoginPage} from "../../pages/LoginPage";
import{CustomerWorld} from "../../support/world";


 
export class LoginPage{
    username:Locator
    password:Locator
    loginButton:Locator
 
    constructor(private page:Page){
        this.page=page
        this.username=page.locator("//input[@placeholder='Enter username']")
        this.password=page.locator("//input[@placeholder='Enter password']")
        this.loginButton=page.locator("//button[@id='login-btn']")
    }
 
    async openWebsite(){
        await this.page.goto('https://www.saucedemo.com')
    }
 
    async Login(username:string,password:string){
        await this.username.fill(username)
        await this.password.fill(password)
 
    }
    async Click(){
        await this.loginButton.click()
    }
 
    async Validation(){
        await expect(this.page).toHaveURL(/inventory.html/);
    }
 
    async invalidLogin(username:string,password:string){
        await this.username.fill(username)
        await this.password.fill(password)
    }
 
    async ErrorMessage(){
        const errorMessage=await this.page.locator("//h3[@data-test='error']")
        await expect(errorMessage).toBeVisible()
    }
}
 
// export default LoginPage