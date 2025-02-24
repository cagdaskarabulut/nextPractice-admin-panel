const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Get all users
app.get("/api/yellcord_users", async (req, res) => {
  try {
    const users = await prisma.yellcordUser.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Veritabanından veriler çekilemedi." });
  }
});

// Create a new user
app.post("/api/yellcord_users", async (req, res) => {
  try {
    const newUser = await prisma.yellcordUser.create({
      data: req.body,
    });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı oluşturulamadı." });
  }
});

// Update a user
app.put("/api/yellcord_users/:id", async (req, res) => {
  try {
    const updatedUser = await prisma.yellcordUser.update({
      where: { id: parseInt(req.params.id) },
      data: req.body,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı güncellenemedi." });
  }
});

// Delete a user
app.delete("/api/yellcord_users/:id", async (req, res) => {
  try {
    const deletedUser = await prisma.yellcordUser.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: "Kullanıcı silinemedi." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
