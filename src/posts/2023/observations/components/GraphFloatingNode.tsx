import React from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export const GraphFloatingNode = React.memo(
  // eslint-disable-next-line prefer-arrow-callback
  function GraphFloatingNode(props: NodeProps): React.JSX.Element {
    return (
      <>
        <div>{props.data.label}</div>
        <Handle type="source" isConnectable={false} position={Position.Top} id="t" />
        <Handle type="target" isConnectable={false} position={Position.Top} id="t" />

        <Handle type="source" isConnectable={false} position={Position.Right} id="r" />
        <Handle type="target" isConnectable={false} position={Position.Right} id="r" />

        <Handle type="source" isConnectable={false} position={Position.Bottom} id="b" />
        <Handle type="target" isConnectable={false} position={Position.Bottom} id="b" />

        <Handle type="source" isConnectable={false} position={Position.Left} id="l" />
        <Handle type="target" isConnectable={false} position={Position.Left} id="l" />
      </>
    );
  },
);
