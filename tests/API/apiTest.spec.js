import { test, expect } from "@playwright/test";
import * as testdata from '../../Data/testdata';
import * as xpath from '../../Data/variables';
import * as home from '../../Resources/home';
import * as login from '../../Resources/login';
import * as api from '../../Resources/api';
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

test(`${testcaseNo()}'API Test'`,{tag:'@API'}, async ({ request }) => {
    await api.validateGetPost(request, 1, "sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
});
