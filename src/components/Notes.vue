<template>
  <div>
    <h1>Notes</h1> 
    <button @click="addNote" class="add">Add</button>
    <input type="text" class="note-input" placeholder="what is in your mind " v-model="newNote">
  <div v-for="(note, index) in notes" :key="note.id" class="note-item">
    <div class="title">{{ note.title }}</div>
    <!-- <div class="description">{{ note.description }}</div> -->
    <div class="remove-item fas fa-trash" @click="removeNote(index)"></div>
  </div>
    </div>
</template>
<script>
import { computed } from 'vue';
import {mapGetters, mapActions } from "vuex";
export default {
  name: "Notes",
  data() {
    return{
      newNote: '',
      notes: [
        {
          'id': 1,
          'title': 'vue task',
          'completed': false,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          'id': 2,
          'title': 'js task ',
          'completed': false,
          'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          'id': 3,
          'title': 'react task',
          'completed': false,
          'description': 'Lorem ipsum dolor sit amet.'
        },
      ]
    }
  },
  methods: {
    addNote : function (){
      if (this.newNote.trim().length == 0) {
        return
      }
      this.notes.push({
        id: this.noteId,
        title: this.newNote,
        completed: false,
      })
      this.newNote = ''
      this.noteId++
    },
    removeNote(index) {
      this.notes.splice(index, 1)
    },
    
  }
 
};
</script>

<style scoped>
.note-input{
  width: 100%;
  padding:10px 10px;
  font-size: 18px;
  margin-bottom: 16px;
}
button{
  width: 70px;
  height: 40px;
  font-size: 18px;
  margin-bottom: 16px;
}
.note-item{
  margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
}
.remove-item {
    cursor: pointer;
    margin-left: 14px;
}

</style>
