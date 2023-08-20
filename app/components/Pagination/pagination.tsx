import React from "react";
import { usePagination, DOTS } from "../../Hooks/usePagination";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { PaginationProps } from "./types";


export const Pagination:React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];
  
  return (
    <Flex alignItems='center' gap='2' justifyContent='center'>
      <Box>
        <Button
          colorScheme="teal"
          size="sm"
          onClick={onPrevious}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
      </Box>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <Button key={pageNumber} colorScheme="teal" size="sm">
              &#8230;
            </Button>
          );
        }
        return (
          <Button
            key={pageNumber}
            colorScheme="teal"
            size="sm"
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
            
          </Button>
        );
      })}
      <Box>
        <Button
          colorScheme="teal"
          size="sm"
          onClick={onNext}
          isDisabled={currentPage === lastPage}
        >
          Next
        </Button>
      </Box>
    </Flex>
  );
};
