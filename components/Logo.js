import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Logo from '@/data/logo.svg'
import LogoDark from '@/data/logo-dark.svg'

const LogoSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <LogoDark /> : <Logo />
}

export default LogoSwitch
