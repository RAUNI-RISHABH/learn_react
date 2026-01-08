import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    console.log("online status hook rendered");
    useEffect(() => {
    console.log("online status hook useeffect called ");

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

    }, []);

    return onlineStatus;
}

export default useOnlineStatus;