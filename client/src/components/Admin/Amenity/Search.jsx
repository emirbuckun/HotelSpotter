import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";

const Search = ({ setSearch, columns }) => {
  const [form, setForm] = useState({ column: "", input: "" });
  const handleSearch = () => {
    console.log(form);
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Select
          style={{ maxWidth: "15rem" }}
          onChange={({ currentTarget: input }) =>
            setForm((prevState) => ({
              ...prevState,
              column: input.value,
            }))
          }
        >
          {columns.map(({ label, accessor, searchable }) => {
            return (
              searchable && (
                <option key={accessor} value={accessor}>
                  {label}
                </option>
              )
            );
          })}
        </Form.Select>
        <Form.Control
          placeholder="Search"
          aria-label="Text input with dropdown button"
        />
        <Button variant="outline-primary" onClick={handleSearch}>
          <FaSearch />
        </Button>
      </InputGroup>
    </>
  );
};

export default Search;
