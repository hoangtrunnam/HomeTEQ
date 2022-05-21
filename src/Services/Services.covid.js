import axios from 'axios';

const Axios = axios.create();

export const SERVICE = {
    get: async (url) =>{
        try{
            const response = await Axios.get(url); 
            if(response.status===200){
                
                return response.data;
            }
            else{
                console.log('loi ow day ne');
                return err;
            }
        }
        catch(e){
            console.log('err',e);
            const status = e.response?.status;
            if(status===401){
                console.log('err types ',status);
            }
        }
    }
}
