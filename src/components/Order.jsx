import "../assets/styles/Order.css";
function Order(props) {
  return (
    <div className="orderborder">
      <button className="orderbutton">{props.dato}</button>
    </div>
  );
}
export default Order;