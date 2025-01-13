import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import HeaderLayout from "./Layout/Header";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <div className="container">
        <HeaderLayout />
        <main>
          <div className="stack">
            <div>
              {/* header sub Stack */}
              <section className="subStack">
                <div>
                  <span>To Do</span>

                  <span className="countAlert bgCircle">3</span>
                </div>
                <div>
                  <span className="bgCircle">+</span>

                  <span>···</span>
                </div>
              </section>

              {/* main content subStack */}

              {/* <NameComponent /> */}
              {/* <NameComponent>children</NameComponent> */}
              <div>
                <Card
                  titleCard={"Mobile Wireframes"}
                  desCard={
                    "Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiên"
                  }
                >
                  <button>MindX School</button>
                </Card>
                {/*  */}
                <Card
                  titleCard={"Mobile Wireframes"}
                  desCard={
                    "Thực hiện nghiên cứu người dùng để hiểu rõ hơn nhu cầu, thói quen và mong muốn của khách hàng mục tiêu. Từ đó, đưa ra các giải pháp phù hợp nhằm nâng cao trải nghiệm người dùng."
                  }
                />
              </div>
            </div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
