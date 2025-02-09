/* eslint-disable react/prop-types */

import Card from "./Card";

const ListCard = (props) => {
  const { dataStack, targetStatus, saveID, handleApi } = props;

  const filterData = (dataStack || []).filter(
    (e) => e.statusId == targetStatus
  );

  return (
    <>
      {props.children}

      {filterData.map((e) => {
        const { title, description, taskId, id } = e;
        return (
          <Card
            key={taskId}
            taskId={taskId}
            titleCard={title}
            desCard={description}
            saveID={saveID}
            id={id}
            handleApi={handleApi}
          />
        );
      })}
    </>
  );
};

export default ListCard;
