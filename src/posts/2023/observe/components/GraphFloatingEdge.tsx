import React from 'react';
import { useStore, getBezierPath, EdgeProps } from 'reactflow';
import { getEdgeParams } from '../utils/graph';

export const GraphFloatingEdge = ({
  id, source, target, markerEnd, style, label, labelBgStyle,
}: EdgeProps): React.JSX.Element | null => {
  const sourceNode = useStore(
    React.useCallback((store) => store.nodeInternals.get(source), [source]),
  );

  const targetNode = useStore(
    React.useCallback((store) => store.nodeInternals.get(target), [target]),
  );

  if (!sourceNode || !targetNode) {
    return null;
  }

  const {
    sx, sy, tx, ty, sourcePos, targetPos,
  } = getEdgeParams(sourceNode, targetNode);

  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  return (
    <path
      id={id}
      className="react-flow__edge-path"
      d={edgePath}
      strokeWidth={5}
      markerEnd={markerEnd}
      style={style}
    />
  );
};
