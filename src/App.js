import Home from './components/ContactInput'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import './App.css';   
import ContactList from './components/contactList';
import Contact_Input from './components/ContactInput';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact_Input />}></Route>
          {/* <Route path="/list" element={<ContactList />}></Route> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
