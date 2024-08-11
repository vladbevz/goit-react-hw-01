import css from './TransactionHistory.module.css'
export default function TransactionHistory({items}){
return (
    <table className={css.table}>
  <thead>
    <tr>
      <th className={css.header}>Type</th>
      <th className={css.header}>Amount</th>
      <th className={css.header}>Currency</th>
    </tr>
  </thead>

  <tbody> { items.map((item) => {
                return <tr className={css.tr} key={item.id}>
                <td className={css.td}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>})
            }
    
  </tbody>
</table>
)
}


