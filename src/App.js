// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';



// import {
//   BrowserRouter as Router,
//   Routes,
//   // Switch,   Here we have to use Routes instead of Switch because of react-router-dom V6 version
//   Route
//   // Link
// } from "react-router-dom";



// let name="<b>Viral</b>";
// let name="Viral";
function App() {
  const [mode, setMode] = useState('light');// Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      //   setInterval(() => {
      //     document.title = "TextUtils  is Amazing";
      // }, 2000);
      // setInterval(() => {
      //     document.title = "Install TextUtils";
      // }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
  }

  return (


    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
   {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
     
      {/* Here we have to use Routes instead of Switch because of react-router-dom V6 version */}
            {/* <Switch>
                /users --> Component 1
              /users/home --> Component 2
                <Route exact path="/about">
                  <About/>
                </Route>

                <Route exact path="/">
                  <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
                </Route>

            </Switch> */}
            

         {/* Syntax Used for react-router-dom V6  */}
              {/* <Routes>

              <Route exact path="/" element={<TextForm/>}/>
              <Route exact path="/about" element={<About/>}/>

             </Routes>        */}

        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About />  */}
        </div>
   {/* </Router> */}
    </>
  );
}

export default App;
