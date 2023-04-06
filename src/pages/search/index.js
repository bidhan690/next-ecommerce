import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
  const [results, setResults] = useState([]);
  const router = useRouter();
  const { q } = router.query;

  if (q && q === "") {
    router.push("/products");
  }

  async function products() {
    const res = await fetch(`/api/products/${q}`);
    const data = await res.json();
    return data;
  }

  console.log(products());

  return (
    <div className="relative top-[80px] h-[100vh]  w-full -z-[1]">
      <div className="py-6 text-center">
        <h1 className="text-4xl font-bold ">
          Showing results for {q ? q.charAt(0).toUpperCase() + q.slice(1) : ""}
        </h1>
      </div>
    </div>
  );
}
