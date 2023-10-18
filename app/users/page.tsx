import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    // {cache: 'no-cache'}, // possible only w/fetch
    // data is cached by default
    { next: { revalidate: 10 } } // revalidate data every 10 seconds
  );
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
