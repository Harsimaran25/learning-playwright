import {test,expect,request, BrowserContext} from '@playwright/test'

let webContext;

test.beforeAll('state',async({browser})=>{

webContext= await browser.newContext({storageState:'state.json'});
});

test('state logged in test',async()=>{

const page=await webContext.newPage();

await page.goto('https://practicesoftwaretesting.com/account')
await page.pause();

});


