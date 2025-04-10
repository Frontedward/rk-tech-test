'use client';

import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #e0e0e0;
  }
`;

interface ControlPanelProps {
  enabled: boolean;
  autoRefresh: boolean;
  onEnabledChange: (enabled: boolean) => void;
  onAutoRefreshChange: (autoRefresh: boolean) => void;
  onGetCat: () => void;
}

const ControlPanel = ({
  enabled,
  autoRefresh,
  onEnabledChange,
  onAutoRefreshChange,
  onGetCat,
}: ControlPanelProps) => {
  return (
    <Container>
      <CheckboxContainer>
        <label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={(e) => onEnabledChange(e.target.checked)}
          />
          {' Enabled'}
        </label>
      </CheckboxContainer>
      <CheckboxContainer>
        <label>
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => onAutoRefreshChange(e.target.checked)}
          />
          {' Auto-refresh every 5 second'}
        </label>
      </CheckboxContainer>
      <Button onClick={onGetCat}>Get cat</Button>
    </Container>
  );
};

export default ControlPanel; 