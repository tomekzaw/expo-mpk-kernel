import axios from "axios";

export async function getRoutes() {
    return await axios.get("https://tomekzaw-ttss-gtfs.herokuapp.com/api/routes");
}