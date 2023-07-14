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
