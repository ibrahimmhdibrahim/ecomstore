import Link from "next/link";

const NavLinks = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>About</Link>
                </li>
                <li>
                    <Link href='/'>Shop</Link>
                </li>
                <li>
                    <Link href='/'>Blog</Link>
                </li>
                <li>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavLinks;