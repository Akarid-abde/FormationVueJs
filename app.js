new Vue({
   el:'#app-vue',
   data : {
    contacts : []
   },
   created(){
       this.getContacts();
   }, 

   methods : {
    getContacts(){
    	axios.get('http://localhost/Formation_VueJs/getContact.php')
        .then(response => this.contacts = response.data)
        .catch(err => console.log(err))
    },
    DeleteContact(id){
      axios.delete('http://localhost/Formation_VueJs/DeleteContact.php?id='+id)
      .then(response => {
        this.contacts = this.contacts.filter(contact => {
                   return contact.id !== id
        });
      })
      .catch(err => console.log(err))
    }
   }
});

