export function ItemChecked({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? "✔" : ""}
    </li>
  );
}
export function ItemNull({ name, isPacked }) {
  return isPacked ? null : <li className="item">{name}</li>;
}
export function ItemDel({ name, isPacked }) {
  return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}
export function ItemAnd({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && " ✔"}
    </li>
  );
}
export function PackingListAnd() {
  return (
    <section>
      <h1>Lista de embalagem da Sally Ride</h1>
      <ul>
        <ItemAnd isPacked={true} name="Traje espacial" />
        <ItemAnd isPacked={true} name="Capacete com uma folha dourada" />
        <ItemAnd isPacked={false} name="Foto de Tam" />
      </ul>
    </section>
  );
}
export function PackingListDel() {
  return (
    <section>
      <h1>Lista de embalagem da Sally Ride</h1>
      <ul>
        <ItemAnd isPacked={true} name="Traje espacial" />
        <ItemAnd isPacked={true} name="Capacete com uma folha dourada" />
        <ItemAnd isPacked={false} name="Foto de Tam" />
      </ul>
    </section>
  );
}
export function PackingListNull() {
  return (
    <section>
      <h1>Lista de embalagem da Sally Ride</h1>
      <ul>
        <ItemAnd isPacked={true} name="Traje espacial" />
        <ItemAnd isPacked={true} name="Capacete com uma folha dourada" />
        <ItemAnd isPacked={false} name="Foto de Tam" />
      </ul>
    </section>
  );
}
export default function PackingList() {
  return (
    <section>
      <h1>Lista de embalagem da Sally Ride</h1>
      <ul>
        <ItemAnd isPacked={true} name="Traje espacial" />
        <ItemAnd isPacked={true} name="Capacete com uma folha dourada" />
        <ItemAnd isPacked={false} name="Foto de Tam" />
      </ul>
    </section>
  );
}
