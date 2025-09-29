

import {test,expect,request} from '@playwright/test';

const loginPayload={email:"customer2@practicesoftwaretesting.com",password:"welcome01"};

test.only("POST /users/login", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.post(apiUrl + "/users/login", {
    data: loginPayload,
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.access_token).toBeTruthy();
  console.log(body.access_token);
});