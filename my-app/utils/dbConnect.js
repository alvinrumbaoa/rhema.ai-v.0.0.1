import {mongoose} from 'mongoose';


async function dbConnect(){
	
	mongoose.connect(process.env.MONGO_URL,{
		useNewUrlParser:true,
		useUnifiedTopology:true
	})
	.then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database', err));
	mongoose.set("strictQuery", true);
	


}

export default dbConnect;