import React from 'react';
import styled from 'styled-components';

// Define the card layout
const Card = styled.div`
  background: #2c2c2c;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  min-width: 200px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; /* Center text within the card */
`;

// Style for the image
const Image = styled.img`
  width: 50px; /* Adjust size as needed */
  height: 50px;
  margin-bottom: 15px;
`;

// Style for the title
const Title = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 500;
`;

// Style for the value
const Value = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Cont = styled.div`
  display:flex;
  gap:4px;
`;

function StatsCard({ title, value, imageSrc}) {
  return (
    <Card>
      {imageSrc && <Image src={imageSrc} alt={title} />} {/* Conditionally render image */}
      <Title>{title}</Title>
      <Cont>
      <Value>{value}</Value>
      </Cont>
    </Card>
  );
}

export default StatsCard;
