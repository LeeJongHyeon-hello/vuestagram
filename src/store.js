import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name : 'kim',
            likes: 0,
            isLike: false,
            more : {},
        }
    },
    mutations: {
        feelSend(state) {
            if (state.isLike == false) {
                state.likes++;
                state.isLike = true;
            } else {
                state.isLike = false;
                state.likes--;
            }
        },
        setMore(state, data){
            state.more = data;
        }
    },
    actions : {
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((e)=>{
                context.commit('setMore', e.more);
            })
        }
    },
})

export default store