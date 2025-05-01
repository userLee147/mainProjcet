import { create } from 'zustand';

const useCountStore = create((set, get) => ({
  count: 0,
  increase: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrease: () => set({ count: get().count - 1 }),
  reset: () => set({ count: 0 }),
  // useContext의 함수를 정의한것처럼 정의하는 것이다....
}));

// create(() =>{
//  return 초기값;
//})

export default useCountStore;
