import "../Step/Step.css"
import { useLoaderData } from "react-router-dom";

export default function Step () {

    const data= useLoaderData();
    console.log(data);

    return (
    <>
        <button className="button_step">1</button>
    </>
    );
}