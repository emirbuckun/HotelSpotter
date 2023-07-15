import MUIPagination from "@mui/material/Pagination";

const Pagination = ({ page, total, limit, setPage }) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MUIPagination
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

export default Pagination;
