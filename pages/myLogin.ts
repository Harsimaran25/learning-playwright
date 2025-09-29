import { Locator, Page } from "@playwright/test";



export class myLogin{
page: Page;
username:Locator;
password:Locator;
Loginbtn:Locator;
constructor(page:Page){

this.page=page;
this.username=page.locator('#email')
this.password=page.getByRole('textbox',{name:'Password *'})
this.Loginbtn= page.getByRole('button',{name:'Login'})
}

async Navigate(url:string){
await this.page.goto(url);

}
async Login(userName:string,passWord:string){

  await this.username.fill(userName);
  await this.password.fill(passWord);
await this.Loginbtn.click();

}

}
