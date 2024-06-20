import Link from "next/link";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/prisma-example", label: "prisma-example" },
  { href: "/tasks", label: "tasks" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <article className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link className="btn btn-primary" href={"/"}>
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link, i) => (
            <li className="ms-4" key={i}>
              <Link className="capitalize" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </nav>
  );
};

export default Navbar;
