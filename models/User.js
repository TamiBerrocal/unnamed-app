import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		default: true,
	},
	dateOfRegistration: {
		type: Date,
		default: Date.now(),
	},
});

export default mongoose.model('user', UserSchema);
