import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProductItem from "@/components/products/ProductItem";
import CircularProgress from "@mui/material/CircularProgress";

export default function Search() {
  const [results, setResults] = useState([]);
  const router = useRouter();
  const { query } = router;

  if (query && query.q === "") {
    router.push("/products");
  }

  useEffect(() => {
    async function products() {
      const encodedQuery = query.q.replace(/\s+/g, "-");
      const res = await fetch(`/api/products/${encodedQuery}`);
      const data = await res.json();
      setResults(data);
    }
    products();
  }, [query.q]);

  return (
    <div className="relative top-[80px] h-full  w-full -z-[1]">
      <div className="py-6 text-center">
        <h1 className="text-4xl font-bold ">
          Showing results for{" "}
          {query.q && query.q.charAt(0).toUpperCase() + query.q.slice(1)}
        </h1>

        {results.length === 0 ? (
          <div className="mt-6 ">
            <CircularProgress color="inherit" />
          </div>
        ) : results.message ? (
          <h1 className="mt-4 text-xl text-red-500">{results.message}</h1>
        ) : (
          <div className="flex justify-center flex-wrap mt-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 font-andika">
              {results.items.map((data) => {
                return (
                  <ProductItem
                    key={data.id}
                    src="/assets/logo.svg"
                    alt=""
                    href="/"
                    name={data.name}
                    initialPrice="2599"
                    price="1999"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
