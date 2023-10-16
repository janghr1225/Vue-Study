const addOneItem = (state, todoItem) => {
    // console.log('received');
    const obj = {completed:false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));   // localStorage에 (key,value) 저장 => 개발자도구 application탭에서 확인 가능
    state.todoItems.push(obj); // 받아온 값 바로 표시하도록 push
}

const removeOnItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);    // 여기까지만 하면 화면에는 반영 안됨
    state.todoItems.splice(payload.index,1);  // 화면에서도 삭제
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear();   //localStorage 전체 삭제
    state.todoItems = [];  // 화면도 갱신하기 위해
}

export { addOneItem, removeOnItem, toggleOneItem, clearAllItems}