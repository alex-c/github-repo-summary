import React from 'react';
import { Icon, IconName } from '@blueprintjs/core';

interface IconItemProps {
  icon: IconName;
  text: string | number;
  link?: string;
}

function IconItem(props: IconItemProps) {
  let { icon, text, link } = props;
  return (
    <>
      <Icon icon={icon} />
      {(link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      )) || <>{text}</>}
    </>
  );
}

export default IconItem;
