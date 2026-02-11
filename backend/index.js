import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, 'data', 'data.json');

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const readExpenses = async () => {
    try {
        const raw = await fs.readFile(dataPath, 'utf-8');
        const data = JSON.parse(raw);
        if (Array.isArray(data)) {
            return data;
        }
        return [];
    } catch (error) {
        throw error;
    }
};

const writeExpenses = async (expenses) => {
    await fs.mkdir(path.dirname(dataPath), { recursive: true });
    await fs.writeFile(dataPath, JSON.stringify(expenses, null, 2), 'utf-8');
};

app.get('/expenses', async (req, res) => {
    try {
        const expenses = await readExpenses();
        res.json({ expenses });
    } catch (error) {
        res.status(500).json({ error: 'Failed to load expenses.' });
    }
});

app.post('/expenses', async (req, res) => {
    const expense = req.body;
    if (!expense) {
        return res.status(400).json({ error: 'Expense payload is required.' });
    }

    try {
        const expenses = await readExpenses();
        const nextExpense = {
            ...expense,
            id: expense.id || Math.random().toString(36).slice(3),
        };
        const updatedExpenses = [nextExpense, ...expenses];
        await writeExpenses(updatedExpenses);
        res.status(201).json({ expense: nextExpense });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save expense.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});
