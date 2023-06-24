import React from 'react';
import {
  useStore, getBezierPath, EdgeProps, BaseEdge, EdgeLabelRenderer,
} from 'reactflow';
import { getEdgeParams } from '../utils/graph';

export const GraphFloatingEdge = ({
  id, source, target, markerEnd, style, label, labelStyle,
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

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            ...labelStyle,
          }}
          className="nodrag nopan"
        >
          {label}
        </div>
      </EdgeLabelRenderer>
    </>
  );
};
