import axios from 'axios'
const counter = {
	state(){
		return {
			count:10,
			history:[]
		}
	},
	mutations:{ //不应该包含异步代码，应该只包含同步代码 
		addToCounter(state,payload){
			state.count = state.count + Number(payload)
			state.history.push(state.count)
		},
		subToCounter(state,payload){
			state.count = state.count - Number(payload)
			state.history.push(state.count)

		}
	},
	actions:{
		async generateRandomNumber(context){
			let {data} = await axios.get('https://www.random.org/integers/?num=1&min=-1000&max=1000&max=1000&col=1&base=10&format=plain&rnd=new')
			console.log(data)
			context.commit('addToCounter',data)
		}
	},
	getters:{//从 store 中的 state 中派生出一些状态
		activeIndexes:state=>payload=>{
			let indexes = []
			state.history.forEach((number,idx)=>{
				if(number===payload) indexes.push(idx)
			})
			return indexes
		}
	}
}
export default counter