import "./App.css";

import NavigationBar from "./Component/NavigationBar";
import AddPatient from "./Component/Patient";
import ViewPatient from "./Component/ViewPatient";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/AddPatient" element={<AddPatient />} />
          <Route path="/patient" element={<ViewPatient />} />
          <Route path="/updatePatient/:patientid" element={<AddPatient/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
