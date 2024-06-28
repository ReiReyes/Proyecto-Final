import "../assets/styles/Order.css";
function Order(props) {
  return (
    <div className="orderborder">
      <button className="orderbutton">{props.codigo} {props.hora} {props.fecha}</button>
    </div>
  );
}
export default Order;