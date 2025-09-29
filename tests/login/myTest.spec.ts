import {test,expect} from '@playwright/test';


test.only('mytest1', async({page})=>{

await page.goto('https://practicesoftwaretesting.com/auth/login');

await page.locator('#email').fill('customer@practicesoftwaretesting.com');
await page.getByRole('textbox',{name:'Password *'}).fill('welcome01');
await page.getByRole('button',{name:'Login'}).click();

//login assertion
await expect(page.locator(".container h1")).toHaveText('My account')


//clicking home

await page.getByRole('link',{name:'Home'}).click();

await expect(page.locator('.gear')).toBeVisible();


//adding item to cart

await page.getByRole('checkbox', {name:'Sander'}).check();

await page.locator('h5.card-title',{hasText:'Sheet Sander'}).click();

await expect(page.locator('h1')).toHaveText('Sheet Sander');


await page.getByRole('button',{name:'Add to cart'}).click();

await page.locator('#toast-container').waitFor({state:'visible'});
const j=await page.locator('#toast-container').textContent();
console.log(j);

//add another item
//await page.getByRole('link',{name:'Home'}).click();



//navigating to cart page

await page.locator("[routerlink*='checkout']").click();
await page.locator('tbody').waitFor({state:'visible'});
const carttext= await page.locator('tbody tr td .product-title').allTextContents();
console.log(carttext);
expect(carttext.map(t => t.trim())).toContain('Sheet Sander');


});