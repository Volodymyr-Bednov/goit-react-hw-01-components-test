export const TransactionHistoryItem = ({ transactionItem }) => {
  const { amount, currency, type } = transactionItem;
  //console.log(transactionItem); //const { avatar, isOnline, name } = friendItem;

  //console.log(avatar, isOnline, name);
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
