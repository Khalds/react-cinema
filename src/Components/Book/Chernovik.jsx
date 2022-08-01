const booking = useSelector((state) => state.bookingReducer.booking);

const isBusy = useSelector((state) => state.bookingReducer.isBusy);

const renderColumns = (row, column) => {
    const result = [];
    for (let j = 1; j <= column; j++) {
      result.push(
        <td
          key={j}
          onClick={() => handleClick(row, j)}
          className={isBusy ? styles.busy : styles.free}
        >
          {j}
        </td>
      );
    }
    return result;
  };

  const renderRows = (row, column) => {
    let result = [];
    for (let i = 1; i <= row; i++) {
      result.push(<tr key={i}>{renderColumns(i, column)}</tr>);
    }
    return result;
  };

    // const handleClick = (row, column, session_id) => {
  //   dispatch(createBooking({ row, column, id }));
  //   dispatch(makeBusy());
  //  
  // };

  //j - column, i - row