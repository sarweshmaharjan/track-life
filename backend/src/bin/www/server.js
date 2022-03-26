import { GENERAL } from "../../api/config/config";

const network = (app)=>{
    const port = GENERAL.PORT || 5000; 
    app.listen(port,()=>{
        console.log(`Node server is starting at port ${port}`);
    })
}

export default network; 