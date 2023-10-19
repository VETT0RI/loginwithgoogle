import Link from 'next/link'
import SigninButton from './SigninButton'

const Appbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link
        className="text-gray-800 hover:text-sky-400 transition-colors"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-gray-800 hover:text-sky-400 transition-colors"
        href="/profile"
      >
        User Profile
      </Link>
      <Link
        className="text-gray-800 hover:text-sky-400 transition-colors"
        href="/admin"
      >
        Admin
      </Link>

      <SigninButton />
    </header>
  )
}

export default Appbar
