<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
        <i class="fa-solid fa-plus addBtn"></i>    <!-- fontAwsome에서 아이콘 가져오기 -->
    </span>

    <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">      <!-- ModalCmpnt에 정의된 모달에 slot으로 지정된 영역에 적용됨 -->
            경고!
            <i class="fa-solid fa-circle-xmark closeModalBtn" @click="showModal=false"></i> 
        </h3>
        <div slot="body">
            todo 내용을 입력하세요.
        </div>
    </Modal>

  </div>
</template>

<script>
import Modal from './common/ModalCmpnt.vue'

export default {
    data(){
        return{
            newTodoItem : "",
            showModal : false
        }
    },
    methods:{
        addTodo(){
            if(this.newTodoItem !== ''){
                const text = this.newTodoItem.trim();
                // this.$emit('addTodoItem',this.newTodoItem);     // 하위에서 발생한 이벤트를 상위 컴포넌트(App.vue)로 addTodoItem이라는 이름으로 올려보냄(이벤트 emit)
                this.$store.commit('addOneItem', text); //store.js의 mutations를 동작시키기 위한 로직.
                this.clearInput();  
            } else { 
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem='';    //input박스 초기화
        }
    },
    components : {
        Modal // Modal : Modal
    }
}
</script>

<style>
input:focus {
	outline: none;
}
.inputBox {
	background: white;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
}
.inputBox input {
	border-style: none;
	font-size: 0.9rem;
}
.addContainer {
	float: right;
	background: linear-gradient(to right, #6475FB, #8763FB);
	display: block;
	width: 3rem;
	border-radius: 0 5px 5px 0;
}
.addBtn {
	color: white;
	vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>