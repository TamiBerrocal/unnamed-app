import express from 'express';
import {
	connectToDatabase,
	getUsers,
	createNewUser,
	updateUser,
	deleteUser,
} from './database-operations';

const app = express();
app.use(express.json());

connectToDatabase();

/* DECLARE ENDPOINTS */

// GET
app.get('/', async (_, res) => {
	try {
		const users = await getUsers();
		if (users) res.json(users); else console.log({ success: false });
	} catch (error) {
		console.log({ success: false });
	}
});

// POST
app.post('/', async (req, res) => {
	try {
		const user = await res.json(createNewUser(req.body));
		if (user) console.log(user); else console.log({ success: false });
	} catch (error) {
		console.log({ success: false });
	}
});

// UPDATE
app.put('/:id', (req, res) => {
	const user = updateUser(req.params.id, req.body);
	if (user) {
		res.json({
			success: true,
			user,
		});
	} else res.status(404).json({ success: false });
});

// DELETE
app.get('/:id', (req, res) => {
	const user = deleteUser(req.params.id);
	if (user) res.json({ success: true }); else res.status(404).json({ success: false });
});

/* START SERVER */

const port = 5000;
app.listen(port, () => console.log(`Server started on port: http://localhost:${port}`));
