import ReactCoin from "../assets/react.svg";

const HeaderLayout = () => {
  return (
    <div className="header">
      <section className="searchBox">
        <label htmlFor="searchBox" style={{ height: 24 }}>
          <img src={ReactCoin} width={24} height={24} alt="" />
        </label>
        <input type="text" id="searchBox" placeholder="Search Items" />
      </section>

      <section className="btnNewItem">
        <button>New Item</button>
      </section>
    </div>
  );
};

export default HeaderLayout;
