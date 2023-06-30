import Pagination from "react-bootstrap/Pagination";

const AmenityPagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <Pagination>
      <Pagination.Prev disabled={page == 0} onClick={() => setPage(page - 1)} />
      {totalPages > 0 &&
        [...Array(totalPages)].map((_, index) => (
          <Pagination.Item key={index} onClick={() => setPage(index)}>
            {index + 1}
          </Pagination.Item>
        ))}
      <Pagination.Next
        disabled={page == totalPages - 1}
        onClick={() => setPage(page + 1)}
      />
    </Pagination>
  );
};

export default AmenityPagination;
