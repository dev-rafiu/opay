import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../utils/nav-links";

function HeaderDesktop({ openMobileNav }) {
  return (
    <header className="flex items-center justify-between py-6 lg:py-0">
      {/* menu button */}
      <button
        aria-label="menu"
        className="text-foreground focus-visible:outline-offset-2 lg:hidden"
        onClick={openMobileNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-justify"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </button>

      {/* logo and navlinks */}
      <div className="hidden items-center gap-8 lg:flex">
        <Link
          href="#"
          className="relative h-[5rem] w-[6rem] object-cover lg:w-[8rem]"
        >
          <Image
            src="/logo.png"
            alt="Opay Logo"
            className=""
            fill
            sizes="100vw"
          />
        </Link>

        <nav className="flex items-center justify-between">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* call to actions */}
      <ul className="flex items-center gap-8 capitalize">
        <li>
          <Link href="#">sign in</Link>
        </li>

        <li>
          <Link
            href="#"
            className="grid h-[2.6rem]  w-[7.45rem] place-content-center rounded-md bg-primary text-background"
          >
            join opay
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default HeaderDesktop;
