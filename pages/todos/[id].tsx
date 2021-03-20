import React from "react";
import { useDeno, useRouter } from "aleph/mod.ts";
export default function User() {
  const { params } = useRouter() // grab the parameter
const post = useDeno(async () => {
    return await (await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)).json()
  });

return (
    <h1>{post.title}</h1>
  )
}