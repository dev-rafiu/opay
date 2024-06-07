import Link from "next/link";
import Image from "next/image";

import { navLinks } from "../../utils/nav-links";
import { usePathname } from "next/navigation";
import Backdrop from "../backdrop";

function HeaderMobile({ closeMobileNav, isNavbarOpen, toggleMobileNav }) {
  const pathname = usePathname();

  return (
    <Backdrop className="lg:hidden" onClick={toggleMobileNav}>
      <aside
        className="container fixed inset-y-0 left-0 z-50 min-h-screen w-10/12 overflow-y-auto overscroll-y-contain bg-background duration-200 ease-linear"
        onClick={(e) => e.stopPropagation()}
      >
        {/* navlinks, logo and close button */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="relative h-[3.5rem] w-[6rem] object-cover lg:h-[5rem] lg:w-[8rem]"
            >
              <Image
                src="/logo.png"
                alt="Opay Logo"
                className=""
                fill
                sizes="100vw"
              />
            </Link>

            <button
              onClick={closeMobileNav}
              className="ml-auto block py-10 text-base text-foreground focus-visible:outline-offset-2"
              aria-label="close menu"
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
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col gap-4 capitalize">
            {navLinks.map((link) => (
              <li key={link.id} className="capitalize">
                <Link
                  onClick={closeMobileNav}
                  href={link.href}
                  className={`${pathname === link.href && "text-gold"} hover:text-gold text-lg text-foreground focus-visible:outline-offset-4 lg:text-base`}
                  tabIndex={isNavbarOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* call to actions */}
        <ul className="hidden flex-col gap-6 self-end capitalize">
          <li>
            <Link href="#">sign in</Link>
          </li>

          <li>
            <Link
              href="#"
              className="grid h-[2.6rem] w-[7.45rem] place-content-center rounded bg-primary text-background"
            >
              join opay
            </Link>
          </li>
        </ul>
      </aside>
    </Backdrop>
  );
}

export default HeaderMobile;
