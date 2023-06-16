import React from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export const GraphFloatingNode = React.memo(
  // eslint-disable-next-line prefer-arrow-callback
  function GraphFloatingNode(props: NodeProps): React.JSX.Element {
    return (
      <>
        <div>{props.data.label}</div>
        <Handle type="source" position={Position.Top} id="t" />
        <Handle type="target" position={Position.Top} id="t" />

        <Handle type="source" position={Position.Right} id="r" />
        <Handle type="target" position={Position.Right} id="r" />

        <Handle type="source" position={Position.Bottom} id="b" />
        <Handle type="target" position={Position.Bottom} id="b" />

        <Handle type="source" position={Position.Left} id="l" />
        <Handle type="target" position={Position.Left} id="l" />
      </>
    );
  },
);
