import React from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
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

const FeedbackItem = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: #3b3f45;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const FeedbackTitle = styled.h4`
  margin: 0;
`;

const FeedbackText = styled.p`
  margin: 5px 0 0;
`;

const StarRating = styled.div`
  color: #ffb400;
`;

function Feedback() {
  return (
    <FeedbackContainer>
      <Title>Customer's Feedback</Title>
      <FeedbackItem>
        <FeedbackTitle>Jenny Wilson</FeedbackTitle>
        <StarRating>⭐⭐⭐⭐⭐</StarRating>
        <FeedbackText>The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.</FeedbackText>
      </FeedbackItem>
      <FeedbackItem>
        <FeedbackTitle>Dianne Russell</FeedbackTitle>
        <StarRating>⭐⭐⭐⭐⭐</StarRating>
        <FeedbackText>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.</FeedbackText>
      </FeedbackItem>
      <FeedbackItem>
        <FeedbackTitle>Devon Lane</FeedbackTitle>
        <StarRating>⭐⭐⭐⭐⭐</StarRating>
        <FeedbackText>Normally wings are wings, but theirs are lean meaty and tender, and their homemade hot sauce with pickled mango was killer. The service was really friendly.</FeedbackText>
      </FeedbackItem>
    </FeedbackContainer>
  );
}

export default Feedback;
