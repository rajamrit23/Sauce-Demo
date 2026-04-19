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

test(`${testcaseNo()}'API Test Methods'`,{tag:'@API'}, async ({ request }) => {
    // GET
    await api.validateGetPost(request, 1, "sunt aut facere repellat provident occaecati excepturi optio reprehenderit");

    // POST
    const newPostPayload = { title: 'foo', body: 'bar', userId: 1 };
    const createdPost = await api.createPost(request, newPostPayload);
    expect(createdPost.title).toBe('foo');

    // PUT
    const updatePayload = { id: 1, title: 'updated title', body: 'updated body', userId: 1 };
    const updatedPost = await api.updatePost(request, 1, updatePayload);
    expect(updatedPost.title).toBe('updated title');

    // PATCH
    const patchPayload = { title: 'patched title' };
    const patchedPost = await api.patchPost(request, 1, patchPayload);
    expect(patchedPost.title).toBe('patched title');

    // DELETE
    await api.deletePost(request, 1);
    //Assert
});
