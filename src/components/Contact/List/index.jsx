import React from 'react';

function List({ contact }) {
  return (
    <div className="mb-4">
      <ul className="border border-gray-300 rounded">
      {contact.map((c, i) => (
  <li key={i} className="px-4 py-2 border-b border-gray-300 last:border-b-0">{c.fullname}</li>
))}

      </ul>
    </div>
  );
}

export default List;
