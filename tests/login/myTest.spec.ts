import {test,expect} from '@playwright/test';


test('mytest1', async({page})=>{

await page.goto('https://practicesoftwaretesting.com/auth/login');

await page.locator('#email').fill('customer@practicesoftwaretesting.com');
await page.getByRole('textbox',{name:'Password *'}).fill('welcome01');
await page.getByRole('button',{name:'Login'}).click();

//login assertion
await page.locator(".container h1").waitFor({state:'visible'});
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

//checkout page 
await page.getByRole('button',{name:'Proceed to checkout'}).click();
// await page.locator('#email').fill('customer@practicesoftwaretesting.com');
// await page.getByRole('textbox',{name:'Password *'}).fill('welcome01');
// await page.getByRole('button',{name:'Login'}).click();

await page.getByRole('button',{name:'Proceed to checkout'}).click();
await page.locator('h3').first().waitFor({state:"visible"});
await page.waitForLoadState('networkidle');

await page.getByRole('textbox',{name:'State'}).fill('Bhakha');
await page.getByRole('textbox',{name:'Postal code'}).fill('420420');
await page.getByRole('button',{name:'Proceed to checkout'}).click();

await page.locator('#payment-method').click();

await page.locator('#payment-method').selectOption('credit-card');
await page.locator('#credit_card_number').fill('3056-9300-0902-0004');
await page.locator('#expiration_date').fill('10/2026');
await page.locator('#cvv').fill('142');

await page.locator('#card_holder_name').fill('BHAKHA');
await page.getByRole('button',{name:'Confirm'}).click();

await expect( page.locator('.alert-success.ng-star-inserted')).toHaveText('Payment was successful');

});