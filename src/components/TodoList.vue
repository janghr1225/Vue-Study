<template>
  <div>
    <TransitionGroup name="list" tag="ul">
        <li v-for="(todoItem,index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow"> 
            <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnComplated: todoItem.completed}" 
                v-on:click="toggleComplete({todoItem,index})"></i>
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span> <!-- todoItem의 completed 속성에 따라 true면 textCompleted가 적용됨 -->
            <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">    <!-- todoItem, index를 removeTodo메서드에 넘김 -->
                <i class="fa-solid fa-trash"></i>
            </span>
        </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    // props:['propsdata'],    // App.vue에서 보낸 프롭스 속성 (propsdata에 todoItems를 받아서 내림)
    methods : {
        ...mapMutations({
            removeTodo: 'removeOnItem',     // 헬퍼를 사용할 때는 이벤트를 commit할 때와 달리 인자를 따로 명시하지 않아도 됨.
            toggleComplete : 'toggleOneItem'
        }),
        // removeTodo(todoItem,index){
        //     // this.$emit('removeItem',todoItem,index);    // 상위컴포넌트로 이벤트 올려보냄

        //     // App.vue에 있던 remove메소드를 store.js로 옮겼기때문에 위 코드는 필요 없고 바로 store.js에서 호출하면 됨
        //     this.$store.commit('removeOnItem', {todoItem, index});     // { }로 바로 객체 하나처럼 넘길 수 있음
        // },
        // toggleComplete(todoItem,index){
        //     // this.$emit('toggleItem',todoItem,index);
        //     this.$store.commit('toggleOneItem',{todoItem,index});
        // }
    },
    computed: {
        // todoItems(){
        //     return this.$store.getters.storedTodoItems;
        // },
        ...mapGetters(['storedTodoItems'])
    }
    
}
</script>

<style scoped>
ul {
	list-style-type: none;
	padding-left: 0px;
	margin-top: 0;
	text-align: left;
}
li {
	display: flex;
	min-height: 50px;
	height: 50px;
	line-height: 50px;
	margin: 0.5rem 0;
	padding: 0 0.9rem;
	background: white;
	border-radius: 5px;
}
.removeBtn {
	margin-left: auto;
	color: #de4343;
}
.checkBtn {
	line-height: 45px;
	color: #62acde;
	margin-right: 5px;
}
.checkBtnComplated {
	color: #b3adad;
}
.textCompleted {
	text-decoration: line-through;
	color: #b3adad;
}

/* 리스트 아이템 트렌지션 효과 */
.list-enter-active, .list-leave-active {
    transition: all 1s;
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>