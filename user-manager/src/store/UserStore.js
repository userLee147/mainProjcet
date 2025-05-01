import React from 'react'
import { create } from 'zustand'


const UserStore = create((set, get) =>({
    users :  [{
        id: 1,
        img: "/public/static/iconmonstr-user-circle-thin-240.png",
        name: "user1",
        age: 20,
        department: "회계",
        login: false,
    },
    {
        id: 2,
        img: "/public/static/iconmonstr-user-circle-thin-240.png",
        name: "user2",
        age: 20,
        department: "영업",
        login: false,
    },
    {
        id:3,
        img: "/public/static/iconmonstr-user-circle-thin-240.png",
        name: "user3",
        age: 20,
        department: "전산",
        login: false,
    },
    {
        id: 4,
        img: "/public/static/iconmonstr-user-circle-thin-240.png",
        name: "user4",
        age: 20,
        department: "행정",
        login: false,
    }
    ],
    deleteUser : (id) => set((state) => ({
        users : state.users.filter(user => user.id !== id)
    })),

    getUserById : (id) =>  {
        const {users} = get()
        // find = 비교해서 첫번째로 일치하는 것(비교했을 때 그대로 객체/문자열)
        return users.find(user => user.id === id )
    },

    addUser : (formData) => {
        const {users} = get()
        const newid = {
            ...formData , id : users.length + 1
        }

        set((state) => ({ users : [...state.users,newid]}))

    }



}))
export default UserStore