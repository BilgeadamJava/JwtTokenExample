import axios from "axios";
import qs from "qs";

const url = "http://localhost:8080/api"

// user and admin 
export const userAndAdminLogin = ( username:string, password: string ) => {
    const url = 'http://localhost:8080/api/login'
    const header = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
   return axios.post(url, qs.stringify({ username: username, password: password }), { headers: header })

}

const userListAxios = axios.create({
    baseURL: url,
    headers: { Authorization: "Bearer " + localStorage.getItem('User') }
})
export const userList = () =>{
   return userListAxios.get(`/users`)
}

// user register
export const userRegister = ( name:string, username:string,  password: string ) => {
    const header = {
        'Content-Type': 'application/json',
      }
    const params = {
        "name": name,
        "username":username,
        "password": password,
        "roles": [
            { "id": 1, "name": "ROLE_USER" }
        ]
    }
    return axios.post( url+"/user/save", params,{headers:header} )

}


const outAxios = axios.create({
    baseURL: url,
    headers: { Authorization: "Bearer " + localStorage.getItem('User') }
})
export const logout = () => {
      return outAxios.get("/userLogOut");
}

export const refreshAxios = () =>{
    const authAxios = axios.create({
        baseURL: url,
        headers: { Authorization: "Bearer " + localStorage.getItem('refresh') }
    })

   return authAxios.get("/token/refresh")
}


