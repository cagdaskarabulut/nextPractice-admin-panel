import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const prisma = new PrismaClient();

export default async function Home() {
  const users = await prisma.yellcordUser.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      avatar_url: true,
      created_at: true,
      is_online: true,
    },
  });

  return (
    <div>
      <h1>Kullanıcı Listesi</h1>
      <Link href="/admin">Admin Paneline Git</Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kullanıcı Adı</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Oluşturulma Tarihi</th>
            <th>Çevrimiçi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                {user.avatar_url && (
                  <Image
                    src={user.avatar_url}
                    alt={`${user.username} avatar`}
                    width={50}
                    height={50}
                  />
                )}
              </td>
              <td>{new Date(user.created_at).toLocaleDateString()}</td>
              <td>{user.is_online ? "Evet" : "Hayır"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
