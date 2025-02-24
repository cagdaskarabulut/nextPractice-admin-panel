import dynamic from "next/dynamic";
import dataProvider from "../dataProvider";

// React Admin bileşenini dinamik olarak yükleyin
const Admin = dynamic(() => import("react-admin").then((mod) => mod.Admin), {
  ssr: false,
});
const Resource = dynamic(
  () => import("react-admin").then((mod) => mod.Resource),
  { ssr: false }
);
const ListGuesser = dynamic(
  () => import("react-admin").then((mod) => mod.ListGuesser),
  { ssr: false }
);

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="yellcordUser" list={ListGuesser} />
  </Admin>
);

export default AdminPage;
