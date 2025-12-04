import styled from "styled-components";
import { Link } from "react-router";

interface Props {
    id: number;
    image: string;
    title: string;
}

const Card = styled(Link)`
    width: 180px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #fff;
    padding: 14px;
    border-radius: 16px;

    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
    }
`;

const Poster = styled.img`
    width: 100%;
    border-radius: 12px;
    margin-bottom: 10px;
`;

const Name = styled.div`
    font-size: 15px;
    text-align: center;
    margin-top: 4px;
`;

export default function AnimeCard({ id, image, title }: Props) {
    return (
        <Card to={`/anime/${id}`}>
            <Poster src={image} alt={title} />
            <Name>{title}</Name>
        </Card>
    );
}
