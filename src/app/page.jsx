
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">workflow for showing a blur effect for local images and remote base64 image:</h1>
      <ul className="list-disc list-inside">
        <li> <Link href='/image/local'>Local image</Link></li>
        <li><Link href='/image/remote'>Remote image</Link></li>
      </ul>

    </main>
  );
}
