import { useNavigate } from "react-router-dom";
import NavMenu from "../../components/NavMenu";
import { useState } from "react";

const Index = () => {

    const [selectedComponent, setSelectedComponent] = useState(<></>)
    const navigate = useNavigate()

    return ( 
        <>
            <NavMenu setSelectedComponent={setSelectedComponent} navigate={navigate} />
            <br />
            <br />
            {selectedComponent}
        </>
     );
}
 
export default Index;