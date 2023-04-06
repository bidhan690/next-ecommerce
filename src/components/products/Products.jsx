import ProductItem from "./ProductItem";

export default function Products() {
  return (
    <>
      <section id="latest" className="h-full pt-14">
        <div className="flex justify-center pt-20 pb-3  ">
          <h1 className="text-3xl font-bold font-oxygen">Latest Products</h1>
        </div>
        <div className="flex justify-center flex-wrap mt-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2  lg:grid-cols-3 font-andika">
            <ProductItem
              src="/assets/logo.svg"
              alt=""
              href="/"
              name="crud ring"
              initialPrice="2599"
              price="1999"
            />
            <ProductItem
              src="/assets/logo.svg"
              alt=""
              href="/"
              name="crud ring"
              initialPrice="2000"
              price="1500"
            />
            <ProductItem
              src="/assets/logo.svg"
              alt=""
              href="/"
              name="crud ring"
              initialPrice="300"
              price="200"
            />
          </div>
        </div>
      </section>
    </>
  );
}
