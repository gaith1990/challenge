import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";
import Detail from "./components/detail/detail";
import Error from "./components/Error/Error";
function App() {
  const [users, setUsers] = useState([]);
  const [loadUsers, setloadUsers] = useState(true);
  const getUsers = () => {
    Axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((res) => {
        setUsers(res.data);
        setloadUsers(false);
      })
      .catch((er) => console.log(er));
  };
  useEffect(() => {
    getUsers();
  }, []);
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <NavBar setSearch={setSearch} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home users={users} loadUsers={loadUsers} search={search} />
          )}
        />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Drink/:id" component={Detail} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
