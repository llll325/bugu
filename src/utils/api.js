import request from "@/utils/request";

export function login(data) {
    return request({
        url: `/living/user/login/byPassword`,
        method: "post",
        data: form
    });
}

export function register(data) {
    return request({
        url: `/living/user/regist/byUsername`,
        method: "post",
        data
    })
}