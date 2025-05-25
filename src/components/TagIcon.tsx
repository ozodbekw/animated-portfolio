import React from "react";

function TagIcon({ component }): { component: React.ElementType } {
  const Component = component;
  return <Component className="size-10" />;
}

export default TagIcon;
