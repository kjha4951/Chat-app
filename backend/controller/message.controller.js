


import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMessage  = async(req,res)=>{




try{
   const {message}=req.body;
   const { id: receiverId}=req.params;
   const senderId =req.user?._id;
   if(!senderId){
     return res.status(400).json({error:"sender id is required"});
   }



  let conversation  =await Conversation.findOne({
    participents:{$all:[senderId ,receiverId]}
   });

   if(!conversation){

    conversation=await Conversation.create({
        participents:[senderId,receiverId],
})
   }

const newMessage= new Message({
 senderId,
 receiverId,
 message,

});

if(newMessage){
    conversation.messages.push(newMessage._id);
}

//socketio

// await conversation.save();1s
// await newMessage.save(); wait 1s

// await conversation. run in parallel same time run
await Promise.all([conversation.save(), newMessage.save()]);

res.status(201).json(newMessage);

}catch(error){
    console.log("Error in sendmessage controller",error.message);
    res.status(500).json({error:"internal server error "});
}
}

export const getMessages=async (req , res)=>{
    try{

        const {id:useToChatId} =req.params;
        const senderId =req.user?._id;
        const conversation=await  Conversation.findOne({
            participents:{$all:[senderId ,useToChatId]}
        }).populate("messages");//no ref but actual messages

        if(!conversation){
            return res.status(404).json({error:"conversation not found"});
        }
        const messages=conversation.messages;

        
        res.status(200).json(messages);//

    }catch(error){
    console.log("Error in sendmessage controller",error.message);
    res.status(500).json({error:"internal server error "});
}
}

