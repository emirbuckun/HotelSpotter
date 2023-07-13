import Pagination from "@mui/material/Pagination";

const PaginationItem = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination
        count={totalPages}
        page={page + 1}
        onChange={(e, value) => setPage(value - 1)}
        variant="outlined"
        shape="rounded"
        size="large"
        boundaryCount={2}
        color="primary"
      />
    </div>
  );
};

export default PaginationItem;

/*const Pagination = ({ page, total, limit, setPage }) => {
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
};*/
