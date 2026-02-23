const {test,expect}=require('@playwright/test');
import * as testdata from '../../Data/testdata';
import * as xpath from '../../Data/variables';
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

});
test.afterAll(async()=>{
   await browserContext.close();
});
test(`${testcaseNo()}'Login Page Validation'`,{tag:'@Login'}, async ({}) => {
  await login.loginPage(page);
  });
test(`${testcaseNo()}'Invalid email'`,{tag:'@Login'},async({})=>{
   await login.invalidCreds(page,testdata.loginCreds.invalidUname,testdata.loginCreds.invalidPassword,testdata.loginCreds.errorMessage);
});
test(`${testcaseNo()}'Login valid'`,{tag:'@Login'},async({})=>{
   await login.validLogin(page,testdata.loginCreds.standard,testdata.loginCreds.password);
});
test(`${testcaseNo()}'Lockoutuser'`,{tag:'@Login'},async({})=>{
   await login.invalidCreds(page,testdata.loginCreds.lockedOut,testdata.loginCreds.password,testdata.loginCreds.lockoutError)
});
test(`${testcaseNo()}'Problem User'`,{tag:'@Login'},async({})=>{
   await login.problemUser(page,testdata.loginCreds.problem,testdata.loginCreds.password)
});
test(`${testcaseNo()}'Performance Glitch User'`,{tag:'@Login'},async({})=>{
   await login.performanceGlitchUser(page,testdata.loginCreds.performanceGlitch,testdata.loginCreds.password)
});
test(`${testcaseNo()}'Logout'`,{tag:'@Logout'},async({})=>{
   await login.logout(page);
});