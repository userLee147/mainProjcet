import { create } from 'zustand';
import axios from 'axios';
import { TbCurrencyRupeeNepalese } from 'react-icons/tb';

const url = "http://localhost:8888/api/members"

const useUserStore = create((set, get) => ({
  users: [],
  currentUser: null,
  loading: false,
  errors: null,
  


  login: async (id, pwd) => {
    
    try {
      const response = await axios.post(url,  { userId :id, userPwd : pwd, log: true 
      })
        const user = response.data
        set({ currentUser : { ...user }, error: null});
        return{currentUser : { ...user }, error: null}
     
    } catch (error) {
      const message = error.response.data.message
      set({ currentUser: {}, errors: message});
      return {error : message}
    }
  },
  logout : async (currentUser) => {
  
    const id = currentUser.userId
   
    await axios.patch(url +`?userId=${id}&log=false`,{
      log : false,
    })
    set({...currentUser, log: false})
    set({currentUser : null})
  },

  addUser : async (data) => {
  console.log(data)
    await axios.post(url+'/addUser',data)
    .then((res) =>  res )
    .catch((error) => error)
  },

  updateUser: async (updateUser) => {   
    
    await axios.patch(url +`/${updateUser.id}`,{...updateUser} )
    .then((res) =>  res )
    .catch((error) => error)

  },

  getUser : async (id) => {
    try {    
      const res = await axios.get(url +`${id}`);
      set({currentUser : res.data})
    }catch(error){
      set({ currentUser: [], error: error.message });
    }
  },

  removeUser: async (id) => {
    try{
      await axios.delete(url+`/${id}`)
      set({currentUser : {}})
    }catch(error){
      set({ currentUser: {}, error: error.message });
    }
      

  }
}));

export default useUserStore;
