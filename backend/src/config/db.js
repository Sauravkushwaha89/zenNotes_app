import mongoose from "mongoose"

    export const connectDB= async ()=>{
    try{
       await  mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected successfully");
    }catch(error){
        console.error("error connected to mongodb", error);
        process.exit(1);// exit with failure

    }
}

// mongodb+srv://thesauravkushwaha:YxRNpLONupx0gHZS@cluster0.lozfgdr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
 