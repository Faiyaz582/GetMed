import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from '../models/DoctorSchema.js'

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};


export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "User not found" });
  }
};


export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "User found",
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getUserProfile = async(req,res)=>{
  const userId = req.userId

  try{
    const user = await User.findById(userId)

    if(!user){
      return res.status(404).json({success:false,message:'User not found'})
    }

    const {password, ...rest} = user._doc

    res.status(200).json({success:true,message:'Profile info is getting',data:{...rest}})

  }catch(err){
    res.status(500).json({ success: false, message: "Something went wrong,cannot get " });
  }
};

export const getMyAppoinments = async(req,res)=>{
  
  try{
    
    //1-retrive appointemnets for booking
    const bookings = await Booking.find({user:req.userId})
    //2-extract docotr ids
    const doctorIds = bookings.map(el=>el.doctor.id)
    //3-retrive doctor using ids

    const doctors = await Doctor.find({_id:{$in:doctorIds}}).select('-password')

    res.status(200).json({success:true,message:'Appoinment are getting',data:doctors})



  }catch(err){
    res.status(500).json({ success: false, message: "Something went wrong,cannot get " });

  }



  

}
