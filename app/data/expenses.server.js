import { prisma } from './database.server'

export async function addExpense(expenseData, userId) {
  try {
    return prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
        User: { connect: { id: userId } },
      },
    })
  } catch (error) {
    throw new Error('Failed to add expense.')
  }
}

export async function updateExpense(id, expenseData) {
  try {
    return prisma.expense.update({
      where: { id },
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    })
  } catch (error) {
    throw new Error('Failed to update expense.')
  }
}

export async function deleteExpense(id) {
  try {
    await prisma.expense.delete({ where: { id } })
  } catch (error) {
    throw new Error('Failed to delete expense.')
  }
}

export async function getExpenses(userId) {
  if (!userId) {
    throw new Error('Failed to get expense.')
  }

  try {
    return prisma.expense.findMany({
      where: { userId },
      orderBy: {
        date: 'desc',
      },
    })
  } catch (error) {
    throw new Error('Failed to get expense.')
  }
}

export async function getExpense(id) {
  try {
    return prisma.expense.findFirst({ where: { id } })
  } catch (error) {
    throw new Error('Failed to get expenses.')
  }
}
