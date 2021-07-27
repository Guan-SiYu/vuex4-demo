<template>
	<div>
		<h1>Vuex Counter 4.x</h1>
		<h1 class="count">{{count}}</h1>
		<button @click="handleSub">-</button>
		<input type="number" v-model="step"/>
		<button @click="handleAdd">+</button>
		<div>
			<button class='btn' @click="handleRandom">Generate A Random Number</button>
		</div>
	</div>
</template>

<script>
import {ref,computed} from 'vue'
import { useStore } from 'vuex'
import {mapState,mapMutations,mapActions} from 'vuex'

export default {
	
	
	// methods:{
	// 	...mapMutations('counter',['addToCounter','subToCounter']),
	// 	...mapActions('counter',['generateRandomNumber'])
	// },
	setup(){
		const step = ref(1) 
		const store = useStore()
		console.log(store.commit)
		// 使用 mutation
		const handleAdd = ()=>{
			store.commit('counter/addToCounter',Number(step.value))
		}
		const handleSub = ()=>{
			store.commit('counter/subToCounter',Number(step.value))
		}
		// 使用 action
		const handleRandom = ()=>{
			store.dispatch('counter/generateRandomNumber')
		}
		return {
			count:computed(()=>store.state.counter.count),
			handleAdd,
			handleSub,
			handleRandom,
			step
			
		} 
	}
}
</script>
<style scoped>
	.count{
		font-size: 5rem;
	}
	button{
		border-radius: 100%;
		border:none;
		width: 2rem;
		height: 2rem;
		font-weight: 700;
		cursor: pointer;
	}
	input{
		padding: 0.4rem;
		margin:0 0.5rem;
		text-align: center;
	}
	.btn {
		border-radius: 0.5rem;
		width: auto;
		background-color: #41B983;
		margin-top: 1rem;
		color: white;
		cursor: pointer;
	}
</style>