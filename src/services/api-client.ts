import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'c464d40fca224df3b57157a7fc56d9a7'
    }
}
    
)