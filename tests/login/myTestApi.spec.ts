import {test,expect,request} from '@playwright/test';


//const loginPayload={email:"customer@practicesoftwaretesting.com",password:"welcome01"};


let webContext;

test.beforeAll('mytest1statestorage', async({browser})=>{


   const Context=  await browser.newContext();
   const page= await Context.newPage();

  await page.goto('https://practicesoftwaretesting.com/auth/login');

await page.locator('#email').fill('customer2@practicesoftwaretesting.com');
await page.getByRole('textbox',{name:'Password *'}).fill('welcome01');
await page.getByRole('button',{name:'Login'}).click();
await page.waitForLoadState('networkidle');
   // lets put the information in storagestate

   await Context.storageState({path:'state.json'});
   webContext=await browser.newContext({storageState:'state.json'});



});


test('logged in to account', async()=>{

  const page= await webContext.newPage();

await page.goto('https://practicesoftwaretesting.com/account');

//login assertion
await page.locator(".container h1").waitFor({state:'visible'});
await expect(page.locator(".container h1")).toHaveText('My account')

})