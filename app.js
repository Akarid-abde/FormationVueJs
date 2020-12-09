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
    }
   }
});
