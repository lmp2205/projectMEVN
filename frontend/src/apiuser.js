import axios from "axios";
const url1 = "/api/user/";


export default class APIuser {
    static async getAllUser(){
        const res = await axios.get(url1);
        return res.data;
    }
    static async getPostByID(id){
        const res = await axios.get(`${url1}/${id}`);
        return res.data;
    }
    static async addPost(post){
        const res = await axios.post(url1, post);
        return res.data;
    }
    static async updatePost(id, post){
        const res = await axios.patch(`${url1}/${id}`, post);
        return res.data;
    }
    static async deletePost(id){
        const res = await axios.delete(`${url1}/${id}`);
        return res.data;
    }
}
