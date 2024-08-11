import React from 'react';
import styled from 'styled-components';
import { FaTh, FaHome, FaClipboardList, FaChartBar, FaBullseye, FaUtensils, FaList, FaSignOutAlt } from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 80px;
  background: #20232a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;  /* Add this to align logout icon to bottom */
  padding: 20px 0;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  color: #fff;
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    color: #61dafb;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <IconsWrapper>
        <IconContainer>
          <FaTh size={24} /> {/* Dashboard icon */}
        </IconContainer>
        <IconContainer>
          <FaHome size={24} /> {/* Home icon */}
        </IconContainer>
        <IconContainer>
          <FaClipboardList size={24} /> {/* Orders icon */}
        </IconContainer>
        <IconContainer>
          <FaChartBar size={24} /> {/* Activity icon */}
        </IconContainer>
        <IconContainer>
          <FaBullseye size={24} /> {/* Goals icon */}
        </IconContainer>
        <IconContainer>
          <FaList size={24} /> {/* Menus icon */}
        </IconContainer>
      </IconsWrapper>
      <IconContainer>
        <FaSignOutAlt size={24} /> {/* Logout icon */}
      </IconContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
