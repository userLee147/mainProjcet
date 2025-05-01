import axios from 'axios';
import { create } from 'zustand';

const usePostStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  deleteLoading: false,

  getPost: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      set({ loading: false, posts: response.data });
    } catch (err) {
      set({ loading: false, posts: err.message });
    }
  },

  deletePost: async (id) => {
    set({ loading: true, error: null });

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

      // 데이터를 다시 가져오지 않는 방법
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
        loading: false,
      }));
    } catch (err) {
      set({ loading: false, posts: err.message });
    }
  },
}));

export default usePostStore;
