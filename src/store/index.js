import { createStore } from 'vuex';
import { API_SERVER , API_URL  } from '../config';
import { API_URL1 } from '../config';

export default createStore({
    state() //data
    {
        return {
            // count: 1,
            Data: [],
            DataM: [],
            options: ['Name'],
            currentOption: 'Name',
            searchText: ''
           
        }
        
    },
    mutations:{ //methods

    },
    actions:{ //methods async
        async getData({ state } , payload)
        {
            let res = await fetch(`${API_SERVER}/${API_URL}`)
            let res_data = await res.json()

            console.log(res_data)

            state.Data = res_data.data;
           
        },
        async getSecondArray({ state } , payload)
        {
            let ress = await fetch(`${API_SERVER}/${API_URL1}`)
            let ress_data = await ress.json()

            console.log(ress_data)

            state.DataM = ress_data.data;
           
        },
      
    },
    getters:{ //computed
        getItems(state)
        {
            
            return state.Data.filter((el) => el[state.currentOption].toLowerCase().includes(state.searchText.toLowerCase()))
        },
        getItemsM(state)
        {

            return state.DataM.filter((el) => el[state.currentOption].toLowerCase().includes(state.searchText.toLowerCase()))
        },
        

    } ,
   
    
})