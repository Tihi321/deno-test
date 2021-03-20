import React from "react"
import { useDeno } from "aleph/mod.ts"
import useLocation from '../lib/useLocation.ts'

export default function Counter() {
  const count = useDeno(async () => {
    const {path} = useLocation();
    const response = await fetch(`${path}/api/counter`);
    const data = await response.json();
    return data.count;
  });

return (
    <h1>{count}</h1>
  )
}