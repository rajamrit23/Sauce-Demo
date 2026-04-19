import { test, expect } from "@playwright/test";

export async function validateGetPost(request, postId, expectedTitle) {
    const response = await request.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('GET response:', data);
    expect(data.title).toBe(expectedTitle);
}

export async function createPost(request, payload) {
    const response = await request.post(`https://jsonplaceholder.typicode.com/posts`, {
        data: payload
    });
    expect(response.status()).toBe(201);
    const data = await response.json();
    console.log('POST response:', data);
    return data;
}

export async function updatePost(request, postId, payload) {
    const response = await request.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        data: payload
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('PUT response:', data);
    return data;
}

export async function patchPost(request, postId, payload) {
    const response = await request.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        data: payload
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    console.log('PATCH response:', data);
    return data;
}

export async function deletePost(request, postId) {
    const response = await request.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    expect(response.status()).toBe(200);
    // JSONPlaceholder returns empty object on success
    const data = await response.json(); 
    console.log(`DELETE response:`, data);
}
