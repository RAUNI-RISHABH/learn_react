import { useState } from "react";

const User = (props) => {

    let [count] = useState(0);

    for (let i = 0; i < 10; i++) {
        count++;
    }

    return (
        <div className="user-card">
            <p onClick={() => {count++}}>
                count = {count}
            </p>
        <div className="p-4 bg-white shadow-md rounded-lg">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://via.placeholder.com/150" alt="User Avatar" />
            <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">{props.name}</h2>
                <p className="text-gray-600">Software Engineer</p>
            </div>
        </div>
        </div>
    )
}

export default User;