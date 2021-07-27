import {createStore} from 'vuex'
import counter from './counter';
const store = createStore({
	modules:{
		counter:{
			namespaced:true,
			...counter
		}
	}
})
export default store