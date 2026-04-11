import { test, expect } from "@playwright/test";

export async function validateGetPost(request, postId, expectedTitle) {
    const response = await request.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log(data);
    expect(data.title).toBe(expectedTitle);
}
