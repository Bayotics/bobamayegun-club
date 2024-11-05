'use client'

import { useState } from "react";

  interface ReTabProps {
    selected?: number;
    contentDefinition:  Array<{
        uid: number;
        tab: string | JSX.Element;
        panel: string | JSX.Element;
      }>
    ariaLabel: string;
  }
  
  export function ReTab(props: ReTabProps) {
    const [selected, setSelected] = useState<number>(props.selected || 0);
    const tabs: Array<{ uid: number; htmlId: string; panelHtmlId: string; content: string | JSX.Element }> = [];
    const panels: Array<{ uid: number; htmlId: string; tabHtmlId: string; content: string | JSX.Element }> = [];
  
    for (const tabItemDefinition of props.contentDefinition) {
      const uid = tabItemDefinition.uid;
      const tabHtmlId = `retab__tabslist__tab-${uid}`;
      const panelHtmlId = `retab__tabpanel-${uid}`;
  
      tabs.push({
        uid: uid,
        htmlId: tabHtmlId,
        panelHtmlId: panelHtmlId,
        content: tabItemDefinition.tab,
      });
  
      panels.push({
        uid: uid,
        htmlId: panelHtmlId,
        tabHtmlId: tabHtmlId,
        content: tabItemDefinition.panel,
      });
    }
  
    return (
      <div className="retab">
        <Tabs ariaLabel={props.ariaLabel}
              selected={selected}
              onTabSelected={setSelected}
              definition={tabs} />
        {
          selected < tabs.length &&
          <Panel key={panels[selected].uid}
                 controlledBy={panels[selected].tabHtmlId}>
            {panels[selected].content}
          </Panel>
        }
      </div>
    );
  }
  
  interface TabsProps {
    ariaLabel: string;
    selected: number;
    onTabSelected: (index: number) => void;
    definition: Array<{ uid: number; htmlId: string; panelHtmlId: string; content: string | JSX.Element }>;
  }
  
  function Tabs({ariaLabel, selected, onTabSelected, definition}: TabsProps) {
    return (
      <div role="tablist" aria-label={ariaLabel} className="retab__tablist">
        {definition.map((tabDefinition, index) =>
          <Tab key={tabDefinition.uid}
               id={tabDefinition.htmlId}
               controls={tabDefinition.panelHtmlId}
               isSelected={index === selected}
               onSelected={() => onTabSelected(index)}>
            {tabDefinition.content}
          </Tab>
        )}
      </div>
    );
  }
  
  interface TabProps {
    htmlId: string;
    controls: string;
    isSelected: boolean;
    onSelected: () => void;
    children: React.ReactNode;
  }
  
  function Tab({htmlId, controls, isSelected, onSelected, children}: TabProps) {
    return (
      <button id={htmlId} role="tab"
              aria-selected={isSelected}
              aria-controls={controls}
              onClick={onSelected}
              className={`retab__tablist__tab ${isSelected ? 'selected' : ''}`}>
        {children}
      </button>
    );
  }
  
  interface PanelProps {
    htmlId: string;
    controlledBy: string;
    children: React.ReactNode;
  }
  
  function Panel({htmlId, controlledBy, children}: PanelProps) {
    return (
      <div id={htmlId}
           role="tabpanel"
           aria-labelledby={controlledBy}
           className="retab__tabpanel">
        {children}
      </div>
    );
  }