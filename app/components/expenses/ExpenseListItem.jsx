import { Link, useFetcher } from '@remix-run/react'

function ExpenseListItem({ title, amount, id }) {
  const fetcher = useFetcher()
  // const submit = useSubmit()
  function deleteExpenseItemHandler() {
    const proceed = confirm('Are you sure? Do you want to delete this item?')
    // useSubmit is equal using <Form>
    // submit(null, {
    //   method: 'delete',
    //   action: id,
    // })

    if (!proceed) return

    fetcher.submit(null, {
      method: 'delete',
      action: id,
    })
  }

  if (fetcher.state !== 'idle') {
    return (
      <article className="expense-item locked">
        <p>Deleting...</p>{' '}
      </article>
    )
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        {/* using form, it will request a get action to /expenses/id */}
        {/* <Form method="delete" action={id}>
          <button>Delete</button>
        </Form> */}
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  )
}

export default ExpenseListItem
