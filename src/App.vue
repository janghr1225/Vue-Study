<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput> <!-- addOneTodoItem메소드를 store.js로 옮기면서 v-on바인딩이 필요없어짐 -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
    <!-- vuex사용으로 중앙 제어방식으로 App에서 관리하던 로직을 모두 store.js로 이동시킴 -->
    
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> v-on:하위 컴포넌트에서 발생시킨 이벤트명 = "현재 컴포넌트의 메소드명" -->
    <!-- <TodoList v-bind:propsdata="todoItems" 
              v-on:removeItem="removeOneItem" 
              v-on:toggleItem="toggleOneItem"></TodoList> v-bind:내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성" => propsdata에 todoItems를 담아서 내림 -->
    <!-- <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter> -->
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  // data(){
  //   return {
  //     todoItems: [] // 자바스크립트에서 배열은 참조값.
  //   }
  // },
  // methods:{
    // store.js로 옮김
    // addOneItem(todoItem){  //하위 컴포넌트에서 올라온 이벤트에서 보낸 데이터를 todoItem으로 받음
    //   const obj = {completed:false, item: todoItem};
    //   localStorage.setItem(todoItem, JSON.stringify(obj));   // localStorage에 (key,value) 저장 => 개발자도구 application탭에서 확인 가능
    //   this.todoItems.push(obj); // 받아온 값 바로 표시하도록 push
    // },
    // removeOneItem(todoItem,index){
    //     localStorage.removeItem(todoItem.item);    // 여기까지만 하면 화면에는 반영 안됨
    //     this.todoItems.splice(index,1);  // 화면에서도 삭제
    // },
    // toggleOneItem(todoItem,index){
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems(){
    //   localStorage.clear();   //localStorage 전체 삭제
    //   this.todoItems = [];  // 화면도 갱신하기 위해
    // }
  // },
  // store.js에 옮김
  // created(){     // 인스턴스 생성되지마자(서버 실행되자마자)
  //   if(localStorage.length > 0){
  //     for(let i=0; i<localStorage.length; i++){ // for문에서는 i값이 계속 바뀌어야하므로 let으로 선언
  //       if(localStorage.key(i) !== 'loglevel:webpac-dev-server'){
  //           this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));  //key값에 해당하는 value값을 getItem하는 로직.
  //           //console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))); // localStorage.getItem(localStorage.key(i))는 문자열, JSON.parse는 객체를 json으로 변환
  //       }
  //     }
  //   }
  // },
  components : {
    // 객체의 속성명과 값명이 동일할 때 축약 가능         
    TodoHeader,     // 'TodoHeader' : TodoHeader,    // '컴포넌트 태그명' : 컴포넌트 내용
    TodoInput,      // 'TodoInput' : TodoInput,
    TodoList,       // 'TodoList' : TodoList,
    TodoFooter      // 'TodoFooter' : TodoFooter
  },
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
