import { Outlet } from '@remix-run/react'
import MainHeader from '~/components/navigation/MainHeader'
import { getUserFromSession } from '~/data/auth.server'
import marketingStyle from '~/styles/marketing.css'

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}

export function loader({ request }) {
  return getUserFromSession(request)
}

export function links() {
  return [{ rel: 'stylesheet', href: marketingStyle }]
}

export function headers() {
  return {
    'Cache-Control': 'max-age=3600', // 60 minutes
  }
}
