import { type FormEvent, useState } from "react";
import styled from "styled-components";
import AnimeCard from "../components/AnimeCard";
import { useSearchParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

interface Anime {
    mal_id: number;
    title: string;
    images: {
        jpg: {
            image_url: string;
        };
    };
}

interface ApiResponse {
    data: Anime[];
}

const Wrapper = styled.div`
    padding: 30px;
`;

const Title = styled.h1`
    font-size: 32px;
    text-align: center;
    margin-bottom: 24px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    gap: 10px;
`;

const Input = styled.input`
  padding: 12px 18px;
  width: 260px;
  border-radius: 12px;
  font-size: 16px;
  background: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
`;

const Button = styled.button`
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid #333;
  background: #222;
  color: #fff;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #ffffff25;
  }
`;

const List = styled.div`
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

const fetchFn = (keyword: string) =>         fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(keyword)}`)
    .then(res => res.json())
    .then((data: ApiResponse) => data.data);

export default function Search() {
    const [params, setParams] = useSearchParams();
    const keyword = params.get("keyword") || "";

    const [query, setQuery] = useState(keyword);
    const { data, isLoading, isError } = useQuery({
        queryKey:['search', query],
        queryFn: () => fetchFn(query)
    });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setParams({ keyword: query });
    };

    return (
        <Wrapper>
            <Title>Search Anime</Title>

            <Form onSubmit={onSubmit}>
                <Input
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search titles..."
                />
                <Button>Search</Button>
            </Form>

            {isLoading &&  <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}
            {!isError && data &&
                <List>
                    {data.map(anime => (
                        <AnimeCard
                            key={anime.mal_id}
                            id={anime.mal_id}
                            title={anime.title}
                            image={anime.images.jpg.image_url}
                        />
                    ))}
                </List>}
        </Wrapper>
    );
}