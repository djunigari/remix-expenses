import { Outlet } from '@remix-run/react'
import ExpensesHeader from '~/components/navigation/ExpensesHeader'
import expensesStyle from '~/styles/expenses.css'

export default function Layout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  )
}

export function links() {
  return [{ rel: 'stylesheet', href: expensesStyle }]
}
