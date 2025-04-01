import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dropdown } from "./Dropdown";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dropdown buttonText={"test"} items={[1, 2, 3]} onItemClick={(item) => {
                    console.log(item)
                }}/>}></Route>
            </Routes>   
        </BrowserRouter>
    ) 
}

export default App;