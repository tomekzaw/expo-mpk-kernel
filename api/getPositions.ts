import axios from "axios";

export async function getPositions() {
    return await axios.get("https://tomekzaw-ttss-gtfs.herokuapp.com/api/vehicles/active/ttss");
}