import React from 'react';
import styled from 'styled-components';

const OrdersContainer = styled.div`
  background: #282c34;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  color: white;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  color: #61dafb;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    padding: 8px;
    border: 1px solid #3b3f45;
    text-align: left;

    @media (max-width: 768px) {
      padding: 5px;
    }
  }
`;

function RecentOrders() {
  return (
    <OrdersContainer>
      <Title>Recent Orders</Title>
      <Table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wade Warren</td>
            <td>15478256</td>
            <td>$124.00</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Jane Cooper</td>
            <td>48965786</td>
            <td>$305.02</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Guy Hawkins</td>
            <td>78985215</td>
            <td>$54.88</td>
            <td>Cancelled</td>
          </tr>
          <tr>
            <td>Kristin Watson</td>
            <td>20965732</td>
            <td>$65.00</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Cody Fisher</td>
            <td>95715620</td>
            <td>$545.00</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Savannah Nguyen</td>
            <td>78514568</td>
            <td>$128.20</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </Table>
    </OrdersContainer>
  );
}

export default RecentOrders;
