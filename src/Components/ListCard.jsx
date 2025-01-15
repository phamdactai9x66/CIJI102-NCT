/* eslint-disable react/prop-types */

import Card from "./Card";

const ListCard = (props) => {
  const { dataStack, targetStatus } = props;

  const filterData = (dataStack || []).filter(
    (e) => e.statusId == targetStatus
  );

  return (
    <>
      {filterData.map((e) => {
        const { title, description, taskId } = e;
        return <Card key={taskId} titleCard={title} desCard={description} />;
      })}
    </>
  );
};

export default ListCard;
