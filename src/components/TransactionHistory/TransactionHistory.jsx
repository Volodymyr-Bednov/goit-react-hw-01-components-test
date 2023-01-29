import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  //const { title, stats } = props;
  return (
    // <section class="statistics">
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem key={item.id} transactionItem={item} />
        ))}
      </tbody>
    </table>

    // </section>
  );
};
