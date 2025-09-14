import { useEffect, useState } from "react";


// to return the online status
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

   useEffect(() => {
    
    window.addEventListener('online', () => {setIsOnline(true)});
    window.addEventListener('offline', () => {setIsOnline(false)});


   }, []);

   return isOnline;
};

export default useOnlineStatus;