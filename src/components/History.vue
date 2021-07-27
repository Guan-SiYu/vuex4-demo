<template>
	<div class="container">
		<h4>History</h4>
		<div class="flex">
			<p v-for="(item,idx) in history" :key="idx" 
			:class="activeIndexes(Number(value)).includes(idx)&& 'bold'">
				{{item}}
			</p>
		</div>	
	</div>	
	<input type="text" placeholder="Search" v-model="value">
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
	data(){
		return {
			value:0
		}
	},
	computed:{
		...mapState('counter',['history']),
		...mapGetters('counter',['activeIndexes'])
	}
}
</script>
<style scoped>
	.container{
		margin-top: 7rem;
	}
	.flex{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		width: 25rem;
		margin:0 auto;
		text-align: center;
	}
	.flex p{
		margin:1rem
	}
	.bold{
		font-weight: 900;
	}
</style>