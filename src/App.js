import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
// import Record from "./components/Record";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  // TO store the records
  const addData = () => {
    setData([
      ...data,
      {
        name: name,
        email: email,
      },
    ]);
    setEmail("");
    setName("");
  };

  // to remove the records

  const removeData = (i) => {
    let arr = data;
    arr.splice(i, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button variant="contained" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data__container">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
        </div>
        {data.map((data, i) => {
          return (
            <div className='fields' key={i}>
              <h1>{data.name}</h1>
              <h1>{data.email}</h1>
              <Button variant="contained" color='error' onClick={(i) => {removeData(i)}}>
                  <DeleteIcon />
              </Button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
