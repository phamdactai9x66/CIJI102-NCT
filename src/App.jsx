import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import HeaderLayout from "./Layout/Header";
import ListCard from "./Components/ListCard";

// Dữ liệu trạng thái công việc
export const taskStatus = [
  { statusId: 1, name: "To Do" },
  { statusId: 2, name: "In Progress" },
  { statusId: 3, name: "In Review" },
  { statusId: 4, name: "Done" },
];

// Dữ liệu công việc
export const tasks = [
  {
    taskId: 1,
    title: "Mobile Wireframes",
    description: "Lên bố cục ứng dụng thích nghi cho Mobile.",
    statusId: 1, // To Do
    flagId: 2, // Medium
    assignedTo: 1, // userId
    deadline: new Date("2024-04-12"),
  },
  {
    taskId: 2,
    title: "User Research",
    description: "Thực hiện nghiên cứu người dùng để hiểu rõ nhu cầu.",
    statusId: 2, // In Progress
    flagId: 3, // High
    assignedTo: 2, // userId
    deadline: new Date("2024-03-04"),
  },
  {
    taskId: 3,
    title: "Client Call",
    description: "Cuộc họp trực tuyến với khách hàng để thảo luận về dự án.",
    statusId: 1, // To Do
    flagId: 1, // Low
    assignedTo: 3, // userId
    deadline: new Date("2024-04-02"),
  },
  {
    taskId: 4,
    title: "Annual Presentation",
    description: "Chuẩn bị bài thuyết trình hàng năm với số liệu và biểu đồ.",
    statusId: 3, // In Review
    flagId: 2, // Medium
    assignedTo: 1, // userId
    deadline: new Date("2024-03-15"),
  },
  {
    taskId: 5,
    title: "Onboarding Screens",
    description: "Thiết kế các màn hình hướng dẫn ban đầu cho ứng dụng.",
    statusId: 4, // Done
    flagId: 1, // Low
    assignedTo: 2, // userId
    deadline: new Date("2024-03-17"),
  },
  {
    taskId: 6,
    title: "Landing Page Design",
    description: "Thiết kế giao diện cho trang Landing Page mới.",
    statusId: 2, // In Progress
    flagId: 2, // Medium
    assignedTo: 3, // userId
    deadline: new Date("2024-04-05"),
  },
  {
    taskId: 7,
    title: "Marketing Strategy",
    description: "Lập kế hoạch chiến lược tiếp thị cho sản phẩm mới.",
    statusId: 1, // To Do
    flagId: 3, // High
    assignedTo: 1, // userId
    deadline: new Date("2024-04-20"),
  },
  {
    taskId: 8,
    title: "Bug Fixing",
    description: "Sửa các lỗi phát hiện trong phiên bản beta.",
    statusId: 3, // In Review
    flagId: 3, // High
    assignedTo: 2, // userId
    deadline: new Date("2024-03-25"),
  },
  {
    taskId: 9,
    title: "Content Writing",
    description: "Viết nội dung cho blog công ty và bài đăng mạng xã hội.",
    statusId: 2, // In Progress
    flagId: 1, // Low
    assignedTo: 3, // userId
    deadline: new Date("2024-04-10"),
  },
  {
    taskId: 10,
    title: "Team Meeting",
    description: "Họp nhóm để thảo luận tiến độ và các vấn đề phát sinh.",
    statusId: 4, // Done
    flagId: 2, // Medium
    assignedTo: 1, // userId
    deadline: new Date("2024-03-18"),
  },
];

function App() {
  const [dataStack, setDataStack] = useState(tasks);

  const handleStack = (value) => {
    const filterData = tasks.filter((e) => {
      const searchTitleDes = [e.title, e.description];

      return searchTitleDes.some((e) => e.indexOf(value) !== -1);
    });

    setDataStack(filterData);
  };

  return (
    <>
      <div className="container">
        <HeaderLayout handleStack={handleStack} />
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

              <div>
                <ListCard dataStack={dataStack} targetStatus={1} />
              </div>
            </div>
            <div>
              <ListCard dataStack={dataStack} targetStatus={2} />
            </div>
            <div>
              <ListCard dataStack={dataStack} targetStatus={3} />
            </div>
            <div>
              <ListCard dataStack={dataStack} targetStatus={4} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
