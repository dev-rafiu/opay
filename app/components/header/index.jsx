import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../utils/nav-links";

function Header() {
  return (
    <header className="hidden items-center justify-between lg:flex">
      <div className="flex items-center gap-8">
        {/* logo */}
        <Link href="#" className="relative h-[6rem] w-[8rem]">
          <Image
            src="/logo.png"
            alt="Opay Logo"
            className=""
            fill
            sizes="100vw"
          />
        </Link>

        {/* nav links */}
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
            className="grid h-[2.6rem]  w-[7.45rem] place-content-center rounded bg-primary text-background"
          >
            join opay
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
