import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/about">
        <span>about</span>
      </Link>
    </div>
  );
}
