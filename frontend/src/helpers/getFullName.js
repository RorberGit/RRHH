const getFullName = (row) => {
  return `${row?.nombre || ""} ${row?.apellido_paterno || ""} ${
    row?.apellido_materno || ""
  }`;
};

export default getFullName;
