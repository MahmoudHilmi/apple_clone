import { navLinks } from "../constans/index.js";

export default function Navbar() {
  return (
    <header
      className="    "
    >
      <nav className="">
        <img src="/logo.svg" alt="apple logo" />

        <ul className="">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.label}> {link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="search img" />
          </button>

          <button>
            <img src="/cart.svg" alt="cart img" />
          </button>
        </div>
      </nav>
    </header>
  );
}
