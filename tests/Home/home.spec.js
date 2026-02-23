const {test,expect}=require('@playwright/test');
import * as testdata from '../../Data/testdata';
import * as xpath from '../../Data/variables';
import * as home from '../../Resources/home';
import * as login from '../../Resources/login';
let browserContext;
let page;
let testCounter=1;
function testcaseNo(prefix='Login'){
return `${prefix}${String(testCounter++).padStart(4,'0')}`;
};

test.beforeAll(async({browser})=>{
    browserContext=await browser.newContext();
    page=await browserContext.newPage();
    await page.goto(testdata.links.baseURL);
    await login.validLogin(page,testdata.loginCreds.standard,testdata.loginCreds.password);

});
test.afterAll(async()=>{
   await browserContext.close();
});
test(`${testcaseNo()}'Home Page Validation'`,{tag:'@Home'}, async ({}) => {
  await home.homePageValidation(page);
});