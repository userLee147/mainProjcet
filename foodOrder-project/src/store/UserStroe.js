import { create } from "zustand";
import axios from "axios";


const useUserStore = create((set,get) => ({
    users : [],
    loading : false,
    error : null,
    getUsers: async () => {
        try {
          const response = await axios.get('/usersDB');
          set({ users : response.data });
        } catch (error) {
          set({ users : error.message });
        }
      },

      getLoginUsers: async (id,pwd) => {


        try {
          const response = await axios.get("/usersDB",{
            params:{
            id : id,
            pwd : pwd
            }

          });
          set({ users : response.data });
          
        } catch (error) {
          set({ users : error.message });
        }
      },



}));

export default useUserStore