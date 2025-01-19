import { useState } from "react";
import "./App.css";
import HeaderLayout from "./Layout/Header";
import ListCard from "./Components/ListCard";

import { tasks } from "./constant";
import FormCreateCard from "./Components/FormCreateCard/FormCreateCard";
import FormEditCard from "./Components/FormEditCard/FormEditCard";

function App() {
  const [dataStack, setDataStack] = useState(tasks);

  const [idCard, setIdCard] = useState("");

  const handleStack = (value) => {
    const filterData = tasks.filter((e) => {
      const { title, description } = e;

      // title.indexOf(value) !== -1 lay all value khac -1 = notFound
      // description.indexOf(value) !== -1 lay all value khac -1 = notFound

      // title = Mobile Wireframes
      // value = awd

      // toi muon lay index cua title toi tim dc khi find value
      return title.indexOf(value) !== -1 || description.indexOf(value) !== -1;
    });

    setDataStack(filterData);
  };

  const handleCreateCard = (obj) => {
    const newData = [...dataStack, obj];

    setDataStack(newData);
  };

  const handleEditCard = (obj, idCard) => {
    const newData = dataStack.map((e) => {
      if (e.taskId === idCard) {
        // e=  {
        //   taskId: 2,
        //   title: "User Research",
        //   description: "Thực hiện nghiên cứu người dùng để hiểu rõ nhu cầu.",
        //   statusId: 2, // In Progress
        //   flagId: 3, // High
        //   assignedTo: 2, // userId
        //   deadline: new Date("2024-03-04"),
        // }

        // obj = {
        //   title: "Mobile Wireframes",
        //   description: "Lên bố cục ứng dụng thích nghi cho Mobile.",
        //   statusId: 1, // To Do

        return { ...e, ...obj };
      }

      return e;
    });

    setDataStack(newData);
  };

  const saveID = (id) => {
    setIdCard(id);
  };

  return (
    <>
      <div className="container">
        <HeaderLayout handleStack={handleStack} />
        <main>
          {/* <Component /> */}
          <FormCreateCard handleCreateCard={handleCreateCard} />

          <FormEditCard handleEditCard={handleEditCard} idCard={idCard} />

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

              <div>
                <ListCard
                  dataStack={dataStack}
                  saveID={saveID}
                  targetStatus={1}
                />
              </div>
            </div>
            <div>
              <ListCard
                dataStack={dataStack}
                targetStatus={2}
                saveID={saveID}
              />
            </div>
            <div>
              <ListCard
                dataStack={dataStack}
                targetStatus={3}
                saveID={saveID}
              />
            </div>
            <div>
              <ListCard
                dataStack={dataStack}
                targetStatus={4}
                saveID={saveID}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
