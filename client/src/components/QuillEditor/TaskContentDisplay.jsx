

import React from 'react';

const TaskContentDisplay = ({ description }) => {
  return (
    <>
    <div
      dangerouslySetInnerHTML={{ __html: description }}
      className="task-description"
    />
    </>
  );
};

export default TaskContentDisplay;
