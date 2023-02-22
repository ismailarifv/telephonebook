import {useState, useEffect} from 'react';
import "./styles.css";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts , setContacts] = useState([
    {
      fullname:"İsmail",
      phone_number:5369590205
    },
    {
      fullname:"Ethem",
      phone_number:5535007000
    },
    {
      fullname:"Eslem",
      phone_number:5446061414
    }
  ])
  useEffect(() =>{
    console.log(contacts);
  }, [contacts])
  return (
    <div id='container'>
      <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts ={contacts} />
    </div>
  )
}

export default Contacts