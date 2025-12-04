import styled from "styled-components";
import { useNavigate } from "react-router";

export default function BackButton() {
    const navigate = useNavigate();

    return <Button onClick={() => navigate(-1)}>← Go Back</Button>;
}

const Button = styled.button`
  padding: 10px 16px;
  margin-bottom: 20px;
  border-radius: 12px;

  background: #1a1a1a;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  border: 1px solid #333;

  transition: 0.2s;

  &:hover {
    background: #ffffff25;
  }
`;