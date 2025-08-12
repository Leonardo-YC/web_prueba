import React, { useState, useEffect } from 'react';
import * as ReactFlowLib from '@xyflow/react';

const { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState } = ReactFlowLib;

const initialNodes = [
  { id: '1', type: 'input', data: { label: 'Nodo Inicio' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Nodo Medio' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Nodo Fin' }, position: { x: 400, y: 100 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#2196f3' } },
  { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#f44336' } },
];

export default function FlowDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [highlightedNode, setHighlightedNode] = useState(null);

  useEffect(() => {
    let toggle = false;
    const interval = setInterval(() => {
      setHighlightedNode(toggle ? '2' : '3');
      toggle = !toggle;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const styledNodes = nodes.map(node => {
    if (node.id === highlightedNode) {
      return {
        ...node,
        style: { border: '3px solid orange', padding: 10, borderRadius: 10 },
      };
    }
    return { ...node, style: { border: '1px solid #ddd', padding: 10, borderRadius: 10 } };
  });

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ReactFlow
        nodes={styledNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
