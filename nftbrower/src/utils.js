const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjBiMWQxNGI0LWEzYjgtNGU3Ny1hMWE0LTRlMDkxNGQ0ZWViMiIsIm9yZ0lkIjoiMzY2Nzc3IiwidXNlcklkIjoiMzc2OTQ3IiwidHlwZUlkIjoiODkwZjRmNTEtZDk0Yy00Yzk5LWFmYjgtNTc2OTU2ZjA4MTY1IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDE1ODU3OTMsImV4cCI6NDg1NzM0NTc5M30.Au5TvTSmsKIVAlKgfUjyjN-1MePveaYNYPov2fflzkY";

export const searchNFTs = async (searchText) => {
  const url = new URL(`${origin}/api/v2/nft/search`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("q", searchText);
  url.searchParams.append("filter", "name");
  url.searchParams.append("limit", "12");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
