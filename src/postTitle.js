import * as React from "react";

export const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};
