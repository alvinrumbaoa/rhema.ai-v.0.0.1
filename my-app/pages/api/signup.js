import dbConnect from "../../utils/dbConnect";
import User from "../../model/user"

dbConnect();


export default async(req, res) =>{
	const {method} = req
	
	switch(method) {
			case 'GET':
			try{
				const users = await User.find({})
				res.status(200).json({success: true, user: users})
			}catch(err){
				res.status(400).json({success: false})
			}
			break;
			case 'POST':
			try{
				const users= await User.create(req.body)
				res.status(200).json({success: true, user: users})
			}catch(err){
				res.status(400).json({success: false})
			}
			break;

		    default:
				res.status(400).json({success: false})
				break;
	}
}