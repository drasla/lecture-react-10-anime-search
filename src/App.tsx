import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyle from "./styles/GlobalStyle.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
    return (
        <>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/anime/:id" element={<Detail />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </>
    );
}
