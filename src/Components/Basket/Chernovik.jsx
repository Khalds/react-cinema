const session = useSelector((state) => state.sessionReducer.session);

  const dispatch = useDispatch();
  const {id } = useParams()

  useEffect(() => {
    dispatch(getSessions());
  }, [dispatch]);

  const makeBook = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        dispatch(makeBooking(arr[i]._id))
    }
  }

  const handleClick = (arr) => {
    makeBook(arr)
   
  }

  return (
    <div>
      <div className={styles.basket}>
        <div className={styles.basket_header}>
          <div>Цена</div>
          <div>Зал</div>
          <div>Количество</div>
        </div>
        {basket.map((seat, index, array) => {
          return (
            <div className={styles.basket_body}>
              <div>{seat.price}</div>
              <div>{seat.hall.name}</div>
              <div>{array.length}</div>
            </div>
          );
        })}
        <div>
          <button onClick={() => handleClick(basket)}>Оплатить</button>
        </div>
      </div>
    </div>
  );