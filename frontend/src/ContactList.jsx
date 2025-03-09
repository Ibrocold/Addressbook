import { useEffect, useState } from "react";
import axios from "axios";

function ContactList() {
  // Initialize contacts state
  const [contacts, setContacts] = useState([]);

  // Fetch contacts data from API endpoint on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/contacts")
      .then((res) => setContacts(res.data))
      .catch((error) => console.error(error));
  }, []);

  // Render contacts list
  return (
    <div className="p-4">
      {contacts.map((contact) => (
        <div key={contact.id} className="p-2 border">
          {contact.name} - {contact.email} - {contact.phone} - {contact.address}
        </div>
      ))}
    </div>
  );
}

export default ContactList;
