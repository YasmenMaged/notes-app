import axios from "axios"

const state = {
  notes:[
  {
    id: 1,
    title: 'first note',
    description: 'lorem ipsummmm lorem ipsummmm'
  },
  {
    id: 2,
    title: 'sec note',
    description: 'lorem ipsummmm lorem ipsummmm'
  }, {
    id: 3,
    title: 'third note',
    description: 'lorem ipsummmm lorem ipsummmm'
  },

]
  
};
const getters = {
  allNotes: (state) => state.notes
};
const actions = {
  async fetchNotes({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    ); 
    console.log(response.data);
  }
};
const mutations = {};

export default{
  state,
  getters,
  actions,
  mutations
};
