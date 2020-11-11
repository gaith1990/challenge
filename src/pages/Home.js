import React, { useState } from "react";
import DrinkList from "../components/DrinkList/DrinkList";

function Home({ users, loadUsers, search }) {
  return (
    <div>
      <DrinkList users={users} search={search} loadUsers={loadUsers} />
    </div>
  );
}

export default Home;
