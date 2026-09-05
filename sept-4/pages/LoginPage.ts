import {Page,Locator,expect} from "@playwright/test"
import data from "../testdata/loginCredentials.json"
 
export class LoginPage{
    username:Locator
    password:Locator
    loginButton:Locator

    async openwebsite(){
        await this.page.waitForTimeout(5000);
    }
 
    constructor(private page:Page){
        this.page=page
        this.username=page.locator("//input[@placeholder='Enter username']")
        this.password=page.locator("//input[@placeholder='Enter password']")
        this.loginButton=page.locator("//button[@id='login-btn']")
    }
 
    async openWebsite(){
        await this.page.goto('https://www.saucedemo.com/')
    }
 
    async Login(username:string,password:string){
        await this.username.fill(data.username)
        await this.password.fill(data.password)
 
    }
    async Click(){
        await this.loginButton.click()
    }
 
    async Validation(){
        await expect(this.page).toHaveURL(/inventory.html/);
    }
 
    async invalidLogin(username:string,password:string){
        await this.username.fill(data.username)
        await this.password.fill(data.password)
    }
 
    async ErrorMessage(){
        const errorMessage=await this.page.locator("//h3[@data-test='error']")
        await expect(errorMessage).toBeVisible()
    }
}
 
// export default LoginPage