import React, { useState } from 'react'
import Form from './Form';
import List from "./List";

function Contact() {
  const [contact, setContact] = useState(
    [
      {
        fullname:'Ali',phone_number:'123123'
      },
      {
        fullname:'Hilmi',phone_number:'345421'
      }
    ]
  );

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredContacts = contact.filter((c) => {
    return c.fullname.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Contact List</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="searchTerm">
          Filter Contact
        </label>
        <input
          className='appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500'
          type="text"
          id="searchTerm"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <List contact={filteredContacts} />
      <Form contact={contact} setContact={setContact} />
    </div>
  );
}

export default Contact;
