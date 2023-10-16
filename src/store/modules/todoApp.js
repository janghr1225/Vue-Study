const storage = {
    fetch(){    // fetch : function(){ } 와 같은 문법.
        const arr = []; // localStorage에서 가져온 데이터 담기
        if(localStorage.length > 0){
            for(let i=0; i<localStorage.length; i++){ // for문에서는 i값이 계속 바뀌어야하므로 let으로 선언
                if(localStorage.key(i) !== 'loglevel:webpac-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  //key값에 해당하는 value값을 getItem하는 로직.
                    //console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); // localStorage.getItem(localStorage.key(i))는 문자열, JSON.parse는 객체를 json으로 변환
                }
            }
        }
        return arr;
    }
}


const state = {       // state : 컴포넌트 간에 공유할 데이터 / 이전에 썼던 data : { }와 같은 역할
    // headerText : 'TODO it!',
    todoItems : storage.fetch()
}
const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
}

const mutations = {
    addOneItem(state, todoItem){
        // console.log('received');
        const obj = {completed:false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));   // localStorage에 (key,value) 저장=>개발자도구 application탭에서 확인 가능
        state.todoItems.push(obj); // 받아온 값 바로 표시하도록 push
    },
    removeOnItem(state, payload){
        localStorage.removeItem(payload.todoItem.item);    // 여기까지만 하면 화면에는 반영 안됨
        state.todoItems.splice(payload.index,1);  // 화면에서도 삭제
    },
    toggleOneItem(state, payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state){
        localStorage.clear();   //localStorage 전체 삭제
        state.todoItems = [];  // 화면도 갱신하기 위해
    }
}

export default {
    state,
    getters,
    mutations
}