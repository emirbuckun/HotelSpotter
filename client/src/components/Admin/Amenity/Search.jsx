import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";

const Search = ({ setSearch, columns }) => {
  const searchableColumns = columns.filter((e) => e.searchable);
  let initialForm = {};
  searchableColumns.forEach((e) => {
    initialForm[e.accessor] = "";
  });
  const [form, setForm] = useState(initialForm);

  return (
    <>
      <InputGroup className="mb-3">
        {searchableColumns.map(({ label, accessor }) => {
          return (
            <Form.Control
              key={accessor}
              name={accessor}
              placeholder={label}
              onChange={({ currentTarget: input }) =>
                setForm((prevState) => ({
                  ...prevState,
                  [input.name]: input.value,
                }))
              }
            />
          );
        })}
        <Button variant="outline-primary" onClick={() => setSearch(form)}>
          <FaSearch />
        </Button>
      </InputGroup>
    </>
  );
};

export default Search;
