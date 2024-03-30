"use client";

import { ChangeEvent, useEffect } from "react";
import {
  Box,
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useSearchStore } from "@/store/search-store";

export default function SearchBar() {
  const { search, setSearch } = useSearchStore((state) => state);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        setSearch("");
        return;
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Box position="relative" zIndex={1}>
      <InputGroup
        borderRadius={10}
        size="lg"
        position="fixed"
        width="calc(100vw - 4rem)"
        left={"2rem"}
        bg="gray.200"
      >
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.600" />
        </InputLeftElement>
        <Input
          fontSize="sm"
          type="text"
          placeholder="번호, 제목(초성 가능)"
          border="1px solid #949494"
          value={search}
          onChange={handleChange}
        />
        <InputRightElement>
          <CloseButton onClick={() => setSearch("")} />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
