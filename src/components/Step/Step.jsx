import "../Step/Step.css"
import { useLoaderData } from "react-router-dom";
import Chakras from '../../data//data'

export default function Step () {

    const data= useLoaderData();
    console.log(data);

    return (
    <>

        
{Chakras.map((chakra) => (
  <div key={chakra.id}>
    {/* <Link className="style_link_chakras" to={`/${chakra.id}`}> */}
    <button className="button_step" style={{ backgroundColor: chakra.color }}>
  {chakra.id}
</button>
    
    {/* </Link> */}
  </div>
))}

    </>

    );
}