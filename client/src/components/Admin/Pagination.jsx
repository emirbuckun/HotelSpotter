import BootstrapPagination from "react-bootstrap/Pagination";

const Pagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev
        disabled={page == 0}
        onClick={() => setPage(page - 1)}
      />
      {totalPages > 0 &&
        [...Array(totalPages)].map((_, index) => (
          <BootstrapPagination.Item key={index} onClick={() => setPage(index)}>
            {index + 1}
          </BootstrapPagination.Item>
        ))}
      <BootstrapPagination.Next
        disabled={page == totalPages - 1}
        onClick={() => setPage(page + 1)}
      />
    </BootstrapPagination>
  );
};

export default Pagination;
