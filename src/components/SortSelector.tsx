import { Button, Menu, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            Order by: Relevance <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Menu.Content>
          <MenuItem value='1'>Relevance</MenuItem>
            <MenuItem value='2'>Date added</MenuItem>
            <MenuItem value='3'>Name</MenuItem>
            <MenuItem value='4'>Release date</MenuItem>
            <MenuItem value='5'>Popularity</MenuItem>
            <MenuItem value='6'>Average ratingk</MenuItem>
   
        </Menu.Content>
      </Menu.Root>
    );
}

export default SortSelector