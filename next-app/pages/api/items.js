import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export default async function handler(req, res) {
  const db = await open({ filename: './wms.db', driver: sqlite3.Database });
  await db.exec('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT)');
  if (req.method === 'POST') {
    const { name } = req.body;
    if (name) {
      await db.run('INSERT INTO items (name) VALUES (?)', name);
    }
  }
  const items = await db.all('SELECT * FROM items');
  res.status(200).json({ items });
}
