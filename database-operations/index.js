import mongoose from 'mongoose';
import config from 'config';
import User from '../models/User';

const database = config.get('mongoURI');

export const connectToDatabase = async () => {
	try {
		await mongoose.connect(database, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

		console.log('Connected to database');
	} catch (error) {
		console.log(error);
	}
};

export const createNewUser = async (userInfo) => {
	const {
		username,
		password,
		name,
		lastname,
	} = userInfo;

	const user = new User({
		username,
		password,
		name,
		lastname,
	});

	let createdUser = null;

	try {
		createdUser = await user.save();

		console.log(createdUser);
	} catch (error) {
		console.log(error);
	}

	return createdUser;
};

export const getUsers = async () => {
	let users = [];

	try {
		users = await User.find();

		return users.sort({ dateOfRegistry: -1 });
	} catch (error) {
		console.log(error);
	}

	return users;
};

export const updateUser = async (id, newValues) => {
	let updatedUser = null;

	try {
		updatedUser = await User.findOneAndUpdate({ _id: id }, newValues);

		console.log(updatedUser);
	} catch (error) {
		console.log(error);
	}

	return updatedUser;
};

export const deleteUser = async (id) => {
	let deletedId = null;

	try {
		await User.findOneAndDelete({ _id: id });

		deletedId = id;
	} catch (error) {
		console.log(error);
	}

	return deletedId;
};
