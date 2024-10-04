import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input placeholder="search games......" borderRadius="10px"></Input>
      </InputGroup>
    </>
  );
}

export default SearchInput;
