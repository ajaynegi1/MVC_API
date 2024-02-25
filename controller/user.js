import { moddb } from "../modles/user.js";

export const crtuser = async(req,res)=>{
    const {name,email,password} =req.body;
  await  moddb.create({
        name,
        email,
        password
  }
    )
    res.json({
        sucess:true,
        message:"created"
        
    })
}


export const infoall = async (req, res) => {

    const users = await moddb.find({})
 
  res.json({
    sucess: true,
    users:users,

  });
}

export const userbyid = async(req,res)=>{

  const {id} =req.params
  const users =  await moddb.findById(id)
   res.json({
    users:users,
    sucess:true

   }
   )

}


export const deluserbyid = async(req,res)=>{

  const {id} =req.params
  const users =  await moddb.findById(id)
   await moddb.deleteOne({_id:id})
   res.json({
    users:users,
    sucess:true,
    message:"user deleated"

   }
   )

} 