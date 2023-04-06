import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="z-[1000]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
