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
      Swal.fire({
       icon: 'success',
       title: 'Ajouter Bien Fait',
       text: 'Contact Ajouter Avec Success!',
       footer: ''
      })
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
          Swal.fire({
       icon: 'success',
       title: 'Modifier Bien Fait',
       text: 'Contact Modifier Avec Success!',
       footer: ''
      })
    })
     .catch(err => console.log(err))
   },

    DeleteContact(id){
   Swal.fire({
  title: 'Etre Vous Sur?',
  text: "la suppression unrecuperable !",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'OUI!',
  concelButtonText : 'Annuler'
     }).then((result) => {
  if (result.isConfirmed) {
      axios.delete('http://localhost/Formation_VueJs/DeleteContact.php?id='+id)
      .then(response => {
        this.contacts = this.contacts.filter(contact => {
                   return contact.id !== id
        });
      Swal.fire(
      'Supprimer Bien Fait!',
      'Contact Supprimé avec Success.',
      'success'
      )
        })
        .catch(err => console.log(err));

  }
  })
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

