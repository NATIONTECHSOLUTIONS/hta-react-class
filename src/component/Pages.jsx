export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      {posts.map((post) => (
        <tr>
          <th>{post.id}</th>
          <th>{post.title}</th>
          <th>{post.content}</th>
          <th>{post.data}</th>
          <th>{post.category}</th>
        </tr>
      ))}
    </table>
  );
}
