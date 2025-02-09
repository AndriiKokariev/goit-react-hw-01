import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tableRow}>
          <th className={css.tableTitles}>Type</th>
          <th className={css.tableTitles}>Amount</th>
          <th className={css.tableTitles}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction) => {
          return (
            <tr className={css.tableRow} key={transaction.id}>
              <td className={css.transactionType}>{transaction.type}</td>
              <td className={css.transactionAmount}>{transaction.amount}</td>
              <td className={css.transactionCurrency}>
                {transaction.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
