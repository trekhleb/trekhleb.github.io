import React from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  MarkerType,
  NodeMouseHandler,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { SectionsContext } from '../contexts/sections';
import { Spinner } from './Spinner';
import { Section, SectionHash } from '../types/section';
import { getHashStyles, normalizeHash } from '../utils/hash';
import { goToHash } from '../utils/navigation';
import { isLocalhost } from '../utils/env';

type SectionNodePosition = {
  x: number;
  y: number;
};

type SectionNodePositions = Record<string, SectionNodePosition>;

// Turn this to true to see the node positions in the console.
// The data from the console may be used to update default node positions
const DEBUG_NODE_POSITIONS = isLocalhost();

const nodePositions: SectionNodePositions = {
  'assumption-wb3': { x: 24, y: 120 }, 'assumption-bz4': { x: 72, y: 12 }, 'observation-bs3': { x: 528, y: 120 }, 'observation-xgt': { x: 468, y: 12 }, 'observation-ht9': { x: 204, y: 12 }, 'observation-hx2': { x: 336, y: 12 }, 'assumption-ml1': { x: 168, y: 228 }, 'observation-tg9': { x: 600, y: 12 }, 'observation-pw8': { x: 384, y: 120 }, 'assumption-bq2': { x: 324, y: 228 },
};

export function Graph(): React.ReactElement {
  const { sections } = React.useContext(SectionsContext);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  if (DEBUG_NODE_POSITIONS) {
    const debugNodePositions: SectionNodePositions = {};
    nodes.forEach((node: Node) => {
      const { x, y } = node.position;
      const xNormalized = Math.round(x * 100) / 100;
      const yNormalized = Math.round(y * 100) / 100;
      debugNodePositions[node.id] = { x: xNormalized, y: yNormalized };
    });
    const stringifiedPositions = JSON.stringify(debugNodePositions);
    // eslint-disable-next-line no-console
    console.info(stringifiedPositions);
  }

  React.useEffect(() => {
    const sectionsArr: Section[] = sections ? Object.values(sections) : [];

    if (!sectionsArr.length) return;

    // Nodes
    const newNodes: Node[] = sectionsArr.map(
      (section: Section, sectionIndex: number) => {
        const normalizedHash = normalizeHash(section?.hash);
        const node: Node = {
          id: normalizedHash,
          position: nodePositions[normalizedHash]
            ? { ...nodePositions[normalizedHash] }
            : { x: sectionIndex * 10, y: sectionIndex * 10 },
          data: {
            label: section?.hash || '',
          },
          style: {
            ...getHashStyles(section?.hash),
            width: 'auto',
            height: 'auto',
            borderRadius: '0.375rem',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            paddingTop: '0.25rem',
            paddingBottom: '0.25rem',
          },
        };
        return node;
      },
    );

    // Edges
    const newEdges: Edge[] = [];

    // Dependent node edges
    sectionsArr.forEach((section: Section) => {
      if (!section?.deps || !section.deps.length) return;

      const toHash = normalizeHash(section?.hash);

      section.deps.forEach((depSectionHash: SectionHash) => {
        const fromHash = normalizeHash(depSectionHash);

        const edge: Edge = {
          id: `${fromHash}:${toHash}`,
          source: fromHash,
          target: toHash,
          animated: true,
          markerEnd: {
            type: MarkerType.Arrow,
          },
          label: 'follows',
          labelStyle: {
            fill: '#999',
          },
        };
        newEdges.push(edge);
      });
    });

    // Siblings node edges
    const visitedSiblings: Record<string, boolean> = {};
    sectionsArr.forEach((section: Section) => {
      if (!section?.siblings || !section.siblings.length) return;

      const toHash = normalizeHash(section?.hash);

      section.siblings.forEach((siblingSectionHash: SectionHash) => {
        const fromHash = normalizeHash(siblingSectionHash);

        if (
          !visitedSiblings[`${fromHash}:${toHash}`]
          && !visitedSiblings[`${toHash}:${fromHash}`]
        ) {
          const edge: Edge = {
            id: `${fromHash}:${toHash}`,
            source: fromHash,
            target: toHash,
            animated: false,
            label: 'relates',
            labelStyle: {
              fill: '#999',
            },
          };
          newEdges.push(edge);
        }

        visitedSiblings[`${fromHash}:${toHash}`] = true;
        visitedSiblings[`${toHash}:${fromHash}`] = true;
      });
    });

    setNodes(newNodes);
    setEdges(newEdges);
  }, [sections, setNodes, setEdges]);

  const sectionsArr: Section[] = sections ? Object.values(sections) : [];

  if (!sections || !sectionsArr.length) return <Spinner />;

  const sectionsCounter = (
    <div className="text-sm mb-6">
      Sections in total:{' '}
      <span className="text-xs rounded-md px-1 py-1 font-mono font-medium bg-black text-white">
        {sectionsArr.length}
      </span>
    </div>
  );

  const onNodeClick: NodeMouseHandler = (_, node) => {
    goToHash(node.id);
  };

  const gridSize = 12;

  return (
    <div>
      {sectionsCounter}
      <div className="w-full h-96">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView={false}
          snapGrid={[gridSize, gridSize]}
          snapToGrid={DEBUG_NODE_POSITIONS}
        >
          <Controls />
          <MiniMap />
          <Background
            variant={BackgroundVariant.Dots}
            gap={gridSize}
            size={1}
            color="#999"
          />
        </ReactFlow>
      </div>
    </div>
  );
}
