const express = require("express");
const { PrismaClient } = require("@prisma/client");
const app = express();
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const users = await prisma.yellcordUser.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      password: true,
      avatar_url: true,
      created_at: true,
      is_online: true,
    },
  });

  res.send(`
    <h1>Kullanıcı Listesi</h1>
    <ul>
      ${users
        .map((user) => `<li>${user.username} - ${user.email}</li>`)
        .join("")}
    </ul>
  `);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
