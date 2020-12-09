new Vue({
   el:'#app-vue',
   data : {
    contacts : [],
    contact : {id : '',nom : '', tele : ''}
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

    addcontact(){
     //alert('add');
     axios.post('http://localhost/Formation_VueJs/addcontact.php',{
       nom : this.contact.nom,
       tele : this.contact.tele
     })
     .then(response  => {
      this.contacts.push(response.data);
      this.contact = {nom : '', tele : ''};
      $('#addContact').modal('hide');
    })
     .catch(err => console.log(err))
    }, 
    Updatecontact(){
         axios.post('http://localhost/Formation_VueJs/Updatecontact.php',{
       id : this.contact.id,
       nom : this.contact.nom,
       tele : this.contact.tele
     })
     .then(response  => {
      this.contact = {nom : '', tele : ''};
      $('#updateContact').modal('hide');
      this.getContacts();
    })
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
    },
    getIdContact(id){
      axios.get('http://localhost/Formation_VueJs/get_ContactId.php?id='+id)
      .then(response => {
        this.contact = response.data
      })
      .catch(err => console.log(err))
    }
   }
});

