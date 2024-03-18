import { useEffect, useState } from "react";
import { MENU_API } from "../../utils/constants.js";

export default function useCardDetails(id) {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    async function fetchMenu() {
        const data = await fetch(MENU_API + id);
        const json = await data.json();
        setResInfo(json?.data);
    }

    return resInfo;
}