import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { priceFormatter, dateFormatter } from '../../utils/formatter'
import { SearchForm } from '../SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsGrid,
} from './styles'

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsContainer>
      <SearchForm />
      <TransactionsGrid>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TransactionsGrid>
    </TransactionsContainer>
  )
}
