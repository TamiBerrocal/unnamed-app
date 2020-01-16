/* eslint-disable no-underscore-dangle */
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
app.get('/', (_, res) => {
	const users = getUsers();
	if (users) res.json(users); else res.status(404).json({ success: false });
});

// POST
app.post('/', (req, res) => {
	const user = res.json(createNewUser(req.body));
	if (user) res.json(user); else res.status(404).json({ success: false });
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
