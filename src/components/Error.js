import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    //useRouteError is a hook given by react router dom which is used to get the error details
    const err = useRouteError();
    console.log("err", err);
    return (
        <div>
            <h1>OOps!</h1>
            <h2>Something Went Wrong!!</h2>
            <h3>{err.status}: {err.statusText}</h3>
        <button className=""><Link to="/">Go To Home</Link></button>
        </div>
    )
}

export default Error;