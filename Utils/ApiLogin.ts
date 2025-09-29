import{expect} from '@playwright/test'

class ApiLogin{

  

  constructor(apiContext,loginPayload)
  {
   this.apiContext=apiContext;
   this.loginPayload=loginPayload;
   this.baseurl='https://api.practicesoftwaretesting.com'
  }

  async getLoginToken(){


    const response= await this.apiContext.post(`${this.baseurl}/users/login`,{ data:this.loginPayload});

     expect(response.status()).toBe(200);
     const responseBody= response.json();
      expect(responseBody.access_token).toBeTruthy();
  console.log(responseBody.access_token);
  const token=responseBody.access_token;
 return token;
  }

}