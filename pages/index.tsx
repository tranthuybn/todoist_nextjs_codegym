import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/app/projects/today">
        <button>Login</button>
      </Link>
    </div>
  );
}
