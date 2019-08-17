import React from 'react';
import { Icon, IconName } from '@blueprintjs/core';

function IconItem(props: any) {
  let icon: IconName = props.icon;
  let text: string = props.text;
  let link: string = props.link;
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
