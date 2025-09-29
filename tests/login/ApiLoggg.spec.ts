

import {test,expect,request} from '@playwright/test';
import { ApiLogin } from '../../Utils/ApiLogin';

const loginPayload={email:"customer2@practicesoftwaretesting.com",password:"welcome01"};
let token;

test.beforeAll( async () => {

      const apiContext= await request.newContext();

    const apilogin= new ApiLogin(apiContext,loginPayload);

     token=await apilogin.getLoginToken();
})

test.only("Login using API without UI", async ({ page }) => {

 await page.addInitScript(token =>{
window.localStorage.setItem('auth-token',token)},token)

await page.goto("https://practicesoftwaretesting.com/account");
 
});