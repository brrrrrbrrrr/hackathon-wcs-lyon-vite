import "../Step/Step.css"
import { useLoaderData } from "react-router-dom";
import Chakras from '../../data//data'
import { Link } from "react-router-dom";

export default function Step () {

    const data= useLoaderData();
    console.log(data);

    return (
    <>

 
{Chakras.slice().reverse().map((chakra) => (
  <div className="chakras_container" key={chakra.id}>
    <Link className="style_link_chakras" to={`/${Step}`}>
    <button className="button_step" style={{ backgroundColor: chakra.color }}>
  {chakra.id}
</button>
    </Link> 
  </div>
))}

    </>

    );
}