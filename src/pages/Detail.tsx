import { useEffect, useState } from "react";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import { useParams } from "react-router";

interface AnimeDetail {
    title: string;
    synopsis: string;
    year: number | null;
    images: {
        jpg: {
            large_image_url: string;
        };
    };
    score: number | null;
}

const Wrapper = styled.div`
    padding: 30px;
    max-width: 760px;
    margin: 0 auto;
`;

const Poster = styled.img`
    width: 100%;
    border-radius: 14px;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 32px;
    margin-bottom: 12px;
`;

const Info = styled.div`
    opacity: 0.75;
    margin-bottom: 20px;

    p {
        margin: 4px 0;
    }
`;

const Synopsis = styled.p`
    line-height: 1.65;
    opacity: 0.9;
`;

export default function Detail() {
    const { id } = useParams();
    const [data, setData] = useState<AnimeDetail | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`https://api.jikan.moe/v4/anime/${id}`)
            .then(res => res.json())
            .then(json => {
                setData(json.data);
            });
    }, [id]);

    if (!data) return <p>Loading...</p>;

    return (
        <Wrapper>
            <BackButton />

            <Poster src={data.images.jpg.large_image_url} />

            <Title>{data.title}</Title>

            <Info>
                <p>Year: {data.year || "N/A"}</p>
                <p>Score: {data.score || "N/A"}</p>
            </Info>

            <Synopsis>{data.synopsis}</Synopsis>
        </Wrapper>
    );
}