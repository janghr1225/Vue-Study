import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex);  // Vue 플러그인 use 사용.

// const storage = {
//     fetch(){    // fetch : function(){ } 와 같은 문법.
//         const arr = []; // localStorage에서 가져온 데이터 담기
//         if(localStorage.length > 0){
//             for(let i=0; i<localStorage.length; i++){ // for문에서는 i값이 계속 바뀌어야하므로 let으로 선언
//                 if(localStorage.key(i) !== 'loglevel:webpac-dev-server'){
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  //key값에 해당하는 value값을 getItem하는 로직.
//                     //console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); // localStorage.getItem(localStorage.key(i))는 문자열, JSON.parse는 객체를 json으로 변환
//                 }
//             }
//         }
//         return arr;
//     }
// }

export const store = new Vuex.Store({
    modules : {
        todoApp     //todoApp : todoApp
    }
    // state : {       // state : 컴포넌트 간에 공유할 데이터 / 이전에 썼던 data : { }와 같은 역할
    //     // headerText : 'TODO it!',
    //     todoItems : storage.fetch()
    // },
    // getters,        //getters: getters,
    // mutations       //mutations : mutations
});
