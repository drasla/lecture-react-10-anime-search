import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

const Title = styled.h1`
    font-size: 46px;
    margin-bottom: 12px;
`;

const Subtitle = styled.p`
    opacity: 0.7;
    margin-bottom: 28px;
`;

const Form = styled.form`
    width: 100%;
    max-width: 380px;
`;

const Input = styled.input`
    width: 100%;
    padding: 16px 18px;
    font-size: 17px;

    border-radius: 14px;
    border: 1px solid #333;
    background: #1a1a1a;
    color: #fff;

    &:focus {
        outline: none;
        border-color: #666;
    }
`;

export default function Home() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!keyword.trim()) return;

        navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
    };

    return (
        <Wrapper>
            <Title>Anime Explorer</Title>
            <Subtitle>Search any anime from Jikan API</Subtitle>

            <Form onSubmit={onSubmit}>
                <Input
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    placeholder="Type a title and press Enter..."
                />
            </Form>
        </Wrapper>
    );
}
