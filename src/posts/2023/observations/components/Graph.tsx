import React from 'react';
import ReactFlow, {
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  MarkerType,
  NodeMouseHandler,
  NodeTypes,
  EdgeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { ImTree } from '@react-icons/all-files/im/ImTree';

import { SectionsContext } from '../contexts/sections';
import { Spinner } from './Spinner';
import { Section, SectionHash } from '../types/section';
import { getHashStyles, normalizeHash } from '../utils/hash';
import { goToHash } from '../utils/navigation';
import { isLocalhost } from '../utils/env';
import { GraphFloatingNode } from './GraphFloatingNode';
import { GraphFloatingEdge } from './GraphFloatingEdge';
import { SectionNodePositions } from '../types/graph';
import { nodePositions } from '../data/graph';

const nodeTypes: NodeTypes = {
  floating: GraphFloatingNode,
};

const edgeTypes: EdgeTypes = {
  floating: GraphFloatingEdge,
};

// Turn this to true to see the node positions in the console.
// The data from the console may be used to update default node positions
const DEBUG_NODE_POSITIONS = isLocalhost();

const dependencyGraphSectionId = 'observations-dependency-graph';

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
            label: section?.title || section?.hash || '',
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
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 400,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            borderWidth: '0px',
            borderStyle: 'solid',
            borderColor: 'black',
          },
          type: 'floating',
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
            color: '#999',
            backgroundColor: 'white',
            fontSize: '11px',
          },
          type: 'floating',
          sourceHandle: 'b',
          targetHandle: 't',
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
              color: '#999',
              backgroundColor: 'white',
              fontSize: '11px',
            },
            type: 'floating',
            sourceHandle: 'b',
            targetHandle: 't',
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

  const goToGraphButton = (
    <div className="not-prose fixed right-0 bottom-0 w-16 h-16 sm:w-20 sm:h-20">
      <a
        href={`#${dependencyGraphSectionId}`}
        aria-label="Go to observations dependency graph"
        title="Go to observations dependency graph"
        className="absolute text-black bg-slate-100 transition-all rounded-full flex p-3 items-center justify-center hover:bg-black hover:text-white border-4 border-white"
      >
        <ImTree className="cursor-pointer" size={18} />
      </a>
    </div>
  );

  return (
    <div>
      <div className="text-xl mb-4 pt-4" id={dependencyGraphSectionId}>
        Observations dependency graph
      </div>
      {sectionsCounter}
      <div className="w-full" style={{ height: '490px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          snapGrid={[gridSize, gridSize]}
          snapToGrid={DEBUG_NODE_POSITIONS}
          nodesConnectable={false}
          nodesDraggable={false}
          fitView={false}
        >
          <Controls />
          <Background
            variant={BackgroundVariant.Dots}
            gap={gridSize}
            size={1}
            color="#999"
          />
        </ReactFlow>
      </div>
      {goToGraphButton}
    </div>
  );
}
