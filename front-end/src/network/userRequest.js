import { request } from '../common/request'

export default {

    login(user) {
        return request({
            url: "/auth/login",
            method: 'post',
            data: user
        })
    },


    register(newUser) {
        return request({
            url: "/auth/register",
            method: 'post',
            data: newUser
        })
    },

    getUserInfoByToken(token) {
        return request({
            url: "/auth/getUserInfoByToken",
            method: 'get',
            params: {
                token
            }
        })
    },


    getAllUsers() {
        return request({
            url: "/user/getAllUsers",
            method: 'get',
        })
    },

    search(username,email) {
        return request({
            url: "/user/search",
            method: 'get',
            params: {
                username,
                email
            }
        })
    },

    createUser(user) {
        return request({
            url: "/user",
            method: 'post',
            data: user
        })
    },


    updateUser(updateUser) {
        return request({
            url: "/user",
            method: 'put',
            data: updateUser
        })
    },


    deleteUser(id) {
        return request({
            url: "/user/" + id,
            method: 'delete',
        })
    },



    getList(dTO) {
        return request({
            url: "/event",
            method: 'get',
            data: dTO
        })
    },





    createEvent(event) {
        return request({
            url: "/event",
            method: 'post',
            data: event
        })
    },



    update(event) {
        return request({
            url: "/event",
            method: 'put',
            data: event
        })
    },



    delete(eventId) {
        return request({
            url: "/event",
            method: 'delete',
            data: eventId
        })
    },

    getAllTeams() {
        return request({
            url: "/team/getAllTeams",
            method: 'get',
        })
    },
}