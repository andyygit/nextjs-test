import executePreparedQuery from "./components/data";
export default async function HomePage() {
  let found = await executePreparedQuery(
 'SELECT * FROM `users` WHERE `username` = ?',
    [`test`]
  )
  if (found) {
    console.log(found)
    console.log(Object.keys(found))
  }
  return <div className="animate-appear">Hello from the Home Page</div>;
}
