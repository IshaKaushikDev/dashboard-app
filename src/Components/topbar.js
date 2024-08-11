import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaBell, FaEnvelope, FaUserCircle, FaCog } from 'react-icons/fa';

const TopbarContainer = styled.div`
  background: #282c34;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  background: #3b3f45;
  border: none;
  border-radius: 5px;
  padding: 5px 10px 5px 35px; /* Add padding for the icon */
  color: white;
  outline: none;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 10px;
  color: white;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 15px;
    cursor: pointer;

    &:hover {
      color: #61dafb;
    }
  }
`;

function Topbar() {
  return (
    <TopbarContainer>
      <SearchContainer>
        <SearchIcon />
        <SearchBar placeholder="Search" />
      </SearchContainer>
      <IconContainer>
        <FaEnvelope size={20} />
        <FaBell size={20} />
        <FaCog size={20} /> {/* Added settings icon */}
        <FaUserCircle size={20} />
      </IconContainer>
    </TopbarContainer>
  );
}

export default Topbar;
