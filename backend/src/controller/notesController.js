 import Note from "../models/Note.js";


 
 export async function getAllNotes(req, res){
  try{

    const notes = await Note.find().sort({createdAt:-1});// newest first
    res.status(200).json({
      notes
    })

  } catch(error){

    console.error("error in getAllNotes controller ", error); 
    res.status(500).json({
      message:"internal server error"
    })

  }
 }

 export async function getNoteById(req, res){
       try{
        const note = await Note.findById(req.params.id);

        if (!note) return res. status(404).json({message:"Note not found"});

        res.json(note);
       }catch(error){

        console.log("error in getting notesbyid ", error);
        res.status(500).json({mesasge:"Internal server error"});

       }
 }

 export async  function creatNotes(req, res){
    try{

      const {title, content}= req.body;
      const newNote= new Note({title:title, content:content});
     
      await newNote.save();
      res.status(201).json({
        message:"note created successafully ",
        newNote
      });



    } catch(error){
      
      console.error("error in createNotes controller ", error); 
      res.status(500).json({
         message:"internal server error"
    })


    }
  
}


 export async  function updateNotes(req, res){
   
   try{

     const {title, content}= req.body;
     const updatedNote= await Note.findByIdAndUpdate(req.params.id, {title, content},{
      new: true,
     });

     if (!updatedNote){
      return res.status(404).json({
        message:"note not found"
      })
     }
     res.status(201).json({
      message:"notes updated successfully",
      updatedNote
     })


   }catch(error){

          console.error("error in updatesNotes controller ", error); 
              res.status(500).json({
                message:"internal server error"
              })
   }


 }

 export async function deleteNote(req, res){

    try{

      const deletedNote= await Note.findByIdAndDelete(req.params.id);
      if (!deletedNote) return res.status(404).json({
        message:"note not found"
      })

       res.json({
        message:"Note deleted successfully"
       })
       
      
    }catch(error){

          console.error("error in deletedsNotes controller ", error); 
              res.status(500).json({
                message:"internal server error"
              })

    }

    
  
}
