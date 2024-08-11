import React from 'react';
import styled from 'styled-components';
import StatsCard from './statscard';
import Chart from './chart';
import RecentOrders from './recentorders';
import Feedback from './feedback';
import totalorders from '../Assets/totalorders.png'
import totalordersper from '../Assets/totalordersper.png'
import totaldelivered from '../Assets/totaldelivered.png'
import totalcancelled from '../Assets/totalcancelled.png'
import totalrevenue from '../Assets/totalrevenue.png'
// import totalprofit from '../Assets/'

const MainContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
  background: #1f1f1f;
  color: white;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const DashboardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const ChartSection = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

const OrdersFeedbackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const OrdersSection = styled.div`
  flex: 2;
  min-width: 300px;
`;

const FeedbackSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

function MainContent() {
  return (
    <MainContainer>
      <Header>Dashboard</Header>
      <DashboardHeader>
        <StatsContainer>
          <StatsCard title="Total Orders" value="75" imageSrc={totalorders} />
          <StatsCard title="Total Delivered" value="70" imageSrc={totaldelivered}/>
          <StatsCard title="Total Cancelled" value="05" imageSrc={totalcancelled}/>
          <StatsCard title="Total Revenue" value="$12k" imageSrc={totalrevenue}/>
          <StatsCard title="Net Profit" value="$6759.25" />
        </StatsContainer>
        <StatsCard title="Order Completion" value="70%" isCircular />
      </DashboardHeader>
      <ChartSection>
        <Chart />
      </ChartSection>
      <OrdersFeedbackContainer>
        <OrdersSection>
          <RecentOrders />
        </OrdersSection>
        <FeedbackSection>
          <Feedback />
        </FeedbackSection>
      </OrdersFeedbackContainer>
    </MainContainer>
  );
}

export default MainContent;
