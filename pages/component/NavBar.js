import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      {/* 브라우저 tab에 보여질 내용 설정하기 (여기에 쓰면 전체) */}
      {/* <Head>
        <title>soyoung | project</title>
      </Head> */}
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/about">
        <span>about</span>
      </Link>
    </div>
  );
}
