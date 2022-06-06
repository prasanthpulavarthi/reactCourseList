import CoursesList from "./components/CoursesList";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Enquiry from "./components/Enquiry";
import EnquiryList from "./components/EnquiryList";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/courses" element={<CoursesList/>}/>
        <Route path="/enquiry/:id" element={<Enquiry/>}/>
        <Route path="/enquiries/:id" element={<EnquiryList/>}/>

        <Route path="*" element={<Navigate to="/courses" replace/>}/>
      </Routes>
    

    </BrowserRouter>
    </>
    
  );
}

export default App;
